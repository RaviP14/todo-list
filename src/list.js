import { domElements } from "./interface";
import { items } from "./item";

const currentTodo = (() => {
    //add desired table & array to add new todo
    function newTodo (element, array) {
        for (let i = element.rows.length; i < array.length; i++) {
            let row = element.insertRow(i)
            row.setAttribute('data-key', i)
            row.setAttribute('value', array[i].project)
            for (let j = 0; j < Object.keys(array[i]).length - 2; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(array[i])[j];
            }

            let infoBtn = document.createElement('button');
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = array[i].description 
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

            let completeBtn = document.createElement('button');
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
                let filteredArray = items.arrInbox.filter(function(oneProject){
                    return oneProject.project == array[i]
                })
                console.log(filteredArray);

                for (let j = 0; j < domElements.tableTodo.rows.length; j++) {
                    domElements.tableTodo.rows[j].style.display = 'none';
                    if (domElements.tableTodo.rows[j].attributes.value.nodeValue === array[i]) {
                        domElements.tableTodo.rows[j].style.display = 'block';
                    }
                }
            })

            let deleteProject = document.createElement('button');
            deleteProject.textContent = 'X';
            let val2 = row.insertCell();
            val2.appendChild(deleteProject);
            deleteProject.addEventListener('click', () => {
                if (array.length === 1 && array === items.arrProject) {
                    items.deleteProject(0);
                    element.deleteRow(0);
                } else if (array === items.arrProject) {
                    items.deleteProject(i);
                    element.deleteRow(i - 1);
                }
            })
            // need to skip 1 = 0 or items.arrProject[0]
        }
    }

    return {
        newTodo,
        newProject
    }
})();

export { currentTodo }