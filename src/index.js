import { items } from './item'
import{ domElements } from './interface'
import { currentTodo } from './list'
/*items.addProject('hello','square')
items.arrProjects[0].addToList('hello','sammy','11','low')
console.log(items.arrProjects[0].array) */

domElements.btnAddTodo.addEventListener('click', () => {
    if (domElements.formTodo.length === 0) {
        domElements.buildFormTodo(domElements.tableTodo , items.arrInbox)
        domElements.formDiv.style.display = 'block'
    } else if (domElements.formDiv.style.display === 'none') {
        domElements.formDiv.style.display = 'block'
    }
})

domElements.btnAddProject.addEventListener('click', () => {
    if (domElements.projectForm.length === 0) {
        domElements.buildFormProject()
    } else if (domElements.projectFormDiv.style.display === 'none') {
        domElements.projectFormDiv.style.display = 'block'
    }
})

domElements.todoBtn.addEventListener('click', () => {
    for (let i = 0; i < domElements.tableTodo.rows.length; i++) {
        domElements.tableTodo.rows[i].style.display = 'block';
    }
})

domElements.inboxBtn.addEventListener('click', () => {
    for (let j = 0; j < domElements.tableTodo.rows.length; j++) {
        domElements.tableTodo.rows[j].style.display = 'none';
        if (domElements.tableTodo.rows[j].attributes.value.nodeValue === 'Inbox') {
            domElements.tableTodo.rows[j].style.display = 'block';
        }
    }
})

/* access each project todo array example items.arrProjects[0].array */
console.log('todo')