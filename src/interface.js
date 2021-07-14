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
    btnAddTodo.textContent = 'Add Task';
    mainDiv.appendChild(btnAddTodo);

    let tableTodo = document.createElement('table');
    tableTodo.className = 'tableTodo';
    mainDiv.appendChild(tableTodo);

    let formDiv = document.createElement('div');
    formDiv.className = 'formDiv';
    formDiv.style.display = 'block';
    mainDiv.appendChild(formDiv)

    let formTodo = document.createElement('form');
    formDiv.appendChild(formTodo);

    function buildFormTodo (tables, arrays) {
        let exit = document.createElement('button');
        exit.className = 'exitForm';
        exit.textContent = 'X';
        formTodo.appendChild(exit);

        let nameTitle = document.createElement('p');
        nameTitle.textContent = 'Title:'
        formTodo.appendChild(nameTitle);

        let inputTitle = document.createElement('input');
        inputTitle.autocomplete = 'off'
        formTodo.appendChild(inputTitle);

        let nameDescription = document.createElement('p');
        nameDescription.textContent ='Description:'
        formTodo.appendChild(nameDescription);

        let inputDescription = document.createElement('input');
        inputDescription.autocomplete = 'off';
        formTodo.appendChild(inputDescription);

        let nameDate = document.createElement('p');
        nameDate.textContent = 'Date:'
        formTodo.appendChild(nameDate);

        let inputDate = document.createElement('input');
        inputDate.type = 'date'
        inputDate.autocomplete = 'off'
        formTodo.appendChild(inputDate);

        let namePriority = document.createElement('p');
        namePriority.textContent = 'Priority:';
        formTodo.appendChild(namePriority);

        let arrPriority = ['High', 'Medium', 'Low']

        let selectPriorirty = document.createElement('select');

        for (let i =  0; i < arrPriority.length; i++) {
            let option = document.createElement('option');
            option.value = arrPriority[i];
            option.textContent = arrPriority[i];
            selectPriorirty.appendChild(option);
        }

        formTodo.appendChild(selectPriorirty);
        
        let nameChooseProject = document.createElement('p');
        nameChooseProject.textContent = 'Choose Project';
        formTodo.appendChild(nameChooseProject);

        let chooseProject = document.createElement('select');

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
                let input3 = selectPriorirty.value.slice();
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
    projectFormDiv.appendChild(projectForm);

    function buildFormProject() {
        let projectTitle = document.createElement('p');
        projectTitle.textContent = 'Title:'
        projectForm.appendChild(projectTitle);

        let inputProjectTitle = document.createElement('input');
        inputProjectTitle.autocomplete = 'off'
        projectForm.appendChild(inputProjectTitle);

        let cancel = document.createElement('button');
        cancel.className = 'Cancel';
        cancel.textContent = 'Cancel';
        projectForm.appendChild(cancel);

        let submitProject = document.createElement('button');
        submitProject.className = 'submitForm';
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
        thisWeekBtn
    }
})();

export { domElements }