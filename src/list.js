import { domElements } from "./interface";
import { items } from "./item";

const currentTodo = (() => {
    //add desired table(element) & array to add new todo
    function newTodo (element, array) {
        for (let i = element.rows.length; i < array.length; i++) {
            let row = element.insertRow(i)
            row.setAttribute('data-key', array[i].dueDate)
            row.setAttribute('value', array[i].project)
            for (let j = 0; j < Object.keys(array[i]).length - 2; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(array[i])[j];
                val.id = Object.keys(array[i])[j] + i
            }

            let infoBtn = document.createElement('button');
            infoBtn.className = 'tooltip'
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = array[i].description
            info.id = Object.keys(array[i])[3] + i
            info.className = 'tooltiptext'
            info.style.display = 'none'

            let val3 = row.insertCell();
            val3.appendChild(infoBtn);
            val3.appendChild(info);
            infoBtn.addEventListener('mouseover', () => {
                info.style.display = 'block';
            })
            infoBtn.addEventListener('mouseout', () => {
                info.style.display = 'none'
            })
            let editBtn = document.createElement('button');
            editBtn.className = 'editBtn'
            editBtn.textContent = 'Edit'
            let val4 = row.insertCell()
            val4.appendChild(editBtn)

            editBtn.addEventListener('click', () => {
                if (domElements.editFormTodo.length === 0) {
                    domElements.buildEditForm(i, array)
                }
            })

            let completeBtn = document.createElement('button');
            completeBtn.className = 'completeBtn'
            completeBtn.textContent = 'Complete'
            let val2 = row.insertCell()
            val2.appendChild(completeBtn)
            completeBtn.addEventListener('click', () => {
                if (array.length === 1 && array === items.arrInbox) {
                    items.deleteTodo(0);
                    element.deleteRow(0);
                } else if (array === items.arrInbox){
                    items.deleteTodo(i);
                    element.deleteRow(i);
                } 
            })
        }
    }

    function editTodoTable(n) {
        let title = document.getElementById('title' + n) 
        let dueDate = document.getElementById('dueDate' + n)
        let priority = document.getElementById('priority' + n)
        let description = document.getElementById('description' + n)

        title.textContent = items.arrInbox[n].title
        dueDate.textContent = items.arrInbox[n].dueDate
        priority.textContent = items.arrInbox[n].priority
        description.textContent = items.arrInbox[n].description
    }

    function newProject (element, array) {
        for (let i = element.rows.length + 1; i < array.length; i++) {
            console.log(i)
            let row = element.insertRow(i -1)
            row.setAttribute('data-key', i)
    
            let val = row.insertCell()
            let btn = document.createElement('button');
            btn.value = array[i];
            btn.textContent = array[i];
            val.appendChild(btn);
            
            btn.addEventListener('click', () => {
                for (let j = 0; j < domElements.tableTodo.rows.length; j++) {
                    domElements.tableTodo.rows[j].style.display = 'none';
                    if (items.arrInbox[j].project === btn.textContent) {
                        domElements.tableTodo.rows[j].style.display = 'table-row';
                    }
                }
            })

            let deleteProject = document.createElement('button');
            deleteProject.textContent = 'X';
            deleteProject.title = 'Delete project & Todo\'s';
            let val2 = row.insertCell();
            val2.appendChild(deleteProject);
            deleteProject.addEventListener('click', () => {
                if (array.length === 1 && array === items.arrProject) {
                    items.deleteProject(0);
                    element.deleteRow(0);
                    deleteProjectTodo(btn.textContent)
                } else if (array === items.arrProject) {
                    items.deleteProject(i);
                    element.deleteRow(i - 1);
                    deleteProjectTodo(btn.textContent)
                }
            })

            function deleteProjectTodo (theProject) {
                for (let k = 0; k < items.arrInbox.length; k++) {
                    if (theProject === items.arrInbox[k].project) {
                        if (items.arrInbox.length === 0) {
                            items.deleteTodo(0);
                            domElements.tableTodo.deleteRow(0);
                        } else {
                            items.deleteTodo(k);
                            domElements.tableTodo.deleteRow(k);
                        }
                    }
                }
            }
        }
    }

    return {
        newTodo,
        newProject,
        editTodoTable
    }
})();

export { currentTodo }