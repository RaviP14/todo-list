import { items } from "./item";
import { currentTodo } from "./list";

const domElements = (() => {
    let body = document.querySelector('body');
    let mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';
    body.appendChild(mainDiv);

    let sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    mainDiv.appendChild(sidebar);

    let todoBtn = document.createElement('button');
    todoBtn.className = 'todoBtn';
    todoBtn.textContent = 'Todo\'s';
    sidebar.appendChild(todoBtn);

    let inboxBtn = document.createElement('button');
    inboxBtn.className = 'inboxBtn';
    inboxBtn.textContent = 'Inbox';
    sidebar.appendChild(inboxBtn);

    let todayBtn = document.createElement('button');
    todayBtn.className = 'todayBtn';
    todayBtn.textContent = 'Today'
    sidebar.appendChild(todayBtn);

    let thisWeekBtn = document.createElement('button');
    thisWeekBtn.className = 'thisWeekBtn'
    thisWeekBtn.textContent = 'This Week'
    sidebar.appendChild(thisWeekBtn);

    let projectTitle = document.createElement('p');
    projectTitle.textContent = 'Projects';
    sidebar.appendChild(projectTitle);

    let tableProject = document.createElement('table');
    tableProject.className = 'tableprojects'
    sidebar.appendChild(tableProject)

    let btnAddProject = document.createElement('button');
    btnAddProject.textContent = 'Add Project'
    sidebar.appendChild(btnAddProject);

    let btnAddTodo = document.createElement('button');
    btnAddTodo.className = 'addTask'
    btnAddTodo.textContent = 'Add Task';
    mainDiv.appendChild(btnAddTodo);

    let tableTodo = document.createElement('table');
    tableTodo.className = 'tableTodo';
    mainDiv.appendChild(tableTodo);

    let formDiv = document.createElement('div');
    formDiv.className = 'formDiv';
    formDiv.style.display = 'none';
    mainDiv.appendChild(formDiv)

    let formTodo = document.createElement('form');
    formTodo.className = 'formTodo';
    formDiv.appendChild(formTodo);

    function buildFormTodo (tables, arrays) {
        let exit = document.createElement('button');
        exit.className = 'exitForm';
        exit.textContent = 'X';
        formTodo.appendChild(exit);

        let nameTitle = document.createElement('p');
        nameTitle.className = 'nameTitle';
        nameTitle.textContent = 'Title:';
        formTodo.appendChild(nameTitle);

        let inputTitle = document.createElement('input');
        inputTitle.className = 'inputTitle';
        inputTitle.autocomplete = 'off'
        formTodo.appendChild(inputTitle);

        let nameDescription = document.createElement('p');
        nameDescription.className = 'nameDescription';
        nameDescription.textContent ='Description:'
        formTodo.appendChild(nameDescription);

        let inputDescription = document.createElement('input');
        inputDescription.className = 'inputDescription';
        inputDescription.autocomplete = 'off';
        formTodo.appendChild(inputDescription);

        let nameDate = document.createElement('p');
        nameDate.className = 'nameDate';
        nameDate.textContent = 'Date:'
        formTodo.appendChild(nameDate);

        let inputDate = document.createElement('input');
        inputDate.className = 'inputDate';
        inputDate.type = 'date'
        inputDate.autocomplete = 'off'
        formTodo.appendChild(inputDate);

        let namePriority = document.createElement('p');
        namePriority.className = 'namePriority';
        namePriority.textContent = 'Priority:';
        formTodo.appendChild(namePriority);

        let arrPriority = ['High', 'Medium', 'Low']

        let selectPriority = document.createElement('select');
        selectPriority.className = 'selectPriority';

        for (let i =  0; i < arrPriority.length; i++) {
            let option = document.createElement('option');
            option.value = arrPriority[i];
            option.textContent = arrPriority[i];
            selectPriority.appendChild(option);
        }

        formTodo.appendChild(selectPriority);
        
        let nameChooseProject = document.createElement('p');
        nameChooseProject.className = 'nameChooseProject';
        nameChooseProject.textContent = 'Choose Project';
        formTodo.appendChild(nameChooseProject);

        let chooseProject = document.createElement('select');
        chooseProject.className = 'chooseProject';

        for (let j =  0; j < items.arrProject.length; j++) {
            let option = document.createElement('option');
            option.value = items.arrProject[j];
            option.textContent = items.arrProject[j];
            chooseProject.appendChild(option);
        }

        formTodo.appendChild(chooseProject);

        let submit = document.createElement('button');
        submit.className = 'submitForm';
        submit.textContent = 'Submit';
        formTodo.appendChild(submit);

        submit.addEventListener('click', (e) => {
            if (inputTitle.value !== '' && inputDate !== '') {
                let input1 = inputTitle.value.slice();
                let input2 = inputDate.value.slice().split('-').reverse().join('-');
                let input3 = selectPriority.value.slice();
                let input4 = inputDescription.value.slice();
                let input5 = chooseProject.value.slice();
                console.log(chooseProject.value)
                if (arrays = items.arrInbox) {
                    items.addTodo(input1, input2, input3, input4, input5);
                    e.preventDefault();
                    formTodo.reset();
                    formDiv.style.display = 'none';
                    currentTodo.newTodo(tables, arrays)
                } 
            }
        }) 

        exit.addEventListener('click', (e) => {
            e.preventDefault();
            formTodo.reset();
            formDiv.style.display = 'none';
        })
    }

    let projectFormDiv = document.createElement('div');
    projectFormDiv.className = 'projectFormDiv';
    projectFormDiv.style.display = 'block';
    sidebar.appendChild(projectFormDiv);

    let projectForm = document.createElement('form');
    projectForm.className = 'projectForm';
    projectFormDiv.appendChild(projectForm);

    function buildFormProject() {
        let projectTitle = document.createElement('p');
        projectTitle.className = 'projectTitle'
        projectTitle.textContent = 'Title:'
        projectForm.appendChild(projectTitle);

        let inputProjectTitle = document.createElement('input');
        inputProjectTitle.className = 'inputProjectTitle'
        inputProjectTitle.autocomplete = 'off'
        projectForm.appendChild(inputProjectTitle);

        let cancel = document.createElement('button');
        cancel.className = 'Cancel';
        cancel.textContent = 'Cancel';
        projectForm.appendChild(cancel);

        let submitProject = document.createElement('button');
        submitProject.className = 'submitProjectForm';
        submitProject.textContent = 'Submit';
        projectForm.appendChild(submitProject);

        cancel.addEventListener('click', (e) => {
            e.preventDefault();
            projectForm.reset();
            projectFormDiv.style.display = 'none';
        })

        submitProject.addEventListener('click', (e) => {
            if (inputProjectTitle.value !== '') {
                let input1 = inputProjectTitle.value.slice();
                items.addProject(input1)
                currentTodo.newProject(domElements.tableProject, items.arrProject)
                removeForm()
                e.preventDefault();
                projectForm.reset();
                projectFormDiv.style.display = 'none';
            }
        })
    }
    function removeForm (){
        while (formTodo.hasChildNodes()) {
            formTodo.removeChild(formTodo.firstChild)
        }
    }

    let editFormDiv = document.createElement('div');
    editFormDiv.className = 'editFormDiv';
    editFormDiv.style.display = 'none';
    mainDiv.appendChild(editFormDiv)

    let editFormTodo = document.createElement('form');
    editFormTodo.className = 'editFormTodo';
    editFormDiv.appendChild(editFormTodo);

    function buildEditForm (n, arrays) {
        editFormDiv.style.display = 'block'

        let exit = document.createElement('button');
        exit.className = 'exitForm';
        exit.textContent = 'X';
        editFormTodo.appendChild(exit);

        let nameTitle = document.createElement('p');
        nameTitle.className = 'nameTitle';
        nameTitle.textContent = 'Title:';
        editFormTodo.appendChild(nameTitle);

        let inputTitle = document.createElement('input');
        inputTitle.className = 'inputTitle';
        inputTitle.autocomplete = 'off'
        inputTitle.value = items.arrInbox[n].title
        editFormTodo.appendChild(inputTitle);

        let nameDescription = document.createElement('p');
        nameDescription.className = 'nameDescription'; 
        nameDescription.textContent ='Description:'
        editFormTodo.appendChild(nameDescription);

        let inputDescription = document.createElement('input');
        inputDescription.className = 'inputDescription';
        inputDescription.autocomplete = 'off';
        inputDescription.value = items.arrInbox[n].description
        editFormTodo.appendChild(inputDescription);

        let nameDate = document.createElement('p');
        nameDate.className = 'nameDate';
        nameDate.textContent = 'Date:'
        editFormTodo.appendChild(nameDate);

        let inputDate = document.createElement('input');
        inputDate.className = 'inputDate';
        inputDate.type = 'date'
        inputDate.autocomplete = 'off'
        inputDate.value = items.arrInbox[n].dueDate.split('-').reverse().join('-')
        editFormTodo.appendChild(inputDate);

        let namePriority = document.createElement('p');
        namePriority.className = 'namePriority';
        namePriority.textContent = 'Priority:';
        editFormTodo.appendChild(namePriority);

        let arrPriority = ['High', 'Medium', 'Low']

        let selectPriority = document.createElement('select');
        selectPriority.className = 'selectPriority';

        for (let i =  0; i < arrPriority.length; i++) {
            let option = document.createElement('option');
            option.value = arrPriority[i];
            option.textContent = arrPriority[i];
            selectPriority.appendChild(option);
        }

        editFormTodo.appendChild(selectPriority);
        
        for (let k, l = 0; k = selectPriority.options[l]; l++) {
            if (k.value === items.arrInbox[n].priority){
                selectPriority.selectedIndex = l
                break
            }
        }

        let nameChooseProject = document.createElement('p');
        nameChooseProject.className = 'nameChooseProject';
        nameChooseProject.textContent = 'Choose Project';
        editFormTodo.appendChild(nameChooseProject);

        let chooseProject = document.createElement('select');
        chooseProject.className = 'chooseProject';

        for (let j =  0; j < items.arrProject.length; j++) {
            let option = document.createElement('option');
            option.value = items.arrProject[j];
            option.textContent = items.arrProject[j];
            chooseProject.appendChild(option);
        }
        editFormTodo.appendChild(chooseProject);

        for (let x, y = 0; x = chooseProject.options[y]; y++) {
            if (x.value === items.arrInbox[n].project) {
                chooseProject.selectedIndex = y
                break
            }
        }

        let submit = document.createElement('button');
        submit.className = 'submitForm';
        submit.textContent = 'Submit';
        editFormTodo.appendChild(submit);

        function removeEditForm (){
            while (editFormTodo.hasChildNodes()) {
                editFormTodo.removeChild(editFormTodo.firstChild)
            }
        }

        submit.addEventListener('click', (e) => {
            if (inputTitle.value !== '' && inputDate !== '') {
                let input1 = inputTitle.value.slice();
                let input2 = inputDate.value.slice().split('-').reverse().join('-');
                let input3 = selectPriority.value.slice();
                let input4 = inputDescription.value.slice();
                let input5 = chooseProject.value.slice();
                console.log(chooseProject.value)
                if (arrays = items.arrInbox) {
                    items.editTodo(n,input1, input2, input3, input4, input5);
                    currentTodo.editTodoTable(n)
                    e.preventDefault();
                    editFormTodo.reset();
                    removeEditForm();
                    editFormDiv.style.display = 'none';                    
                } 
            }
        }) 

        exit.addEventListener('click', (e) => {
            e.preventDefault();
            editFormTodo.reset();
            removeEditForm();
            editFormDiv.style.display = 'none';
        })
    }
    return {
        formDiv,
        formTodo,
        tableTodo,
        btnAddTodo,
        buildFormTodo,
        btnAddProject,
        buildFormProject,
        tableProject,
        projectFormDiv,
        projectForm,
        todoBtn,
        inboxBtn,
        todayBtn,
        thisWeekBtn,
        buildEditForm,
        editFormDiv,
        editFormTodo
    }
})();

export { domElements }