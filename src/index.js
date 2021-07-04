import { items } from './item'
import{ domElements } from './interface'
import { currentTodo } from './list'
/*items.addProject('hello','square')
items.arrProjects[0].addToList('hello','sammy','11','low')
console.log(items.arrProjects[0].array) */

domElements.btnAddTodo.addEventListener('click', () => {
    if (domElements.formTodo.length === 0) {
        domElements.buildFormTodo() //replace with form
    } else if (domElements.formDiv.style.display === 'none') {
        domElements.formDiv.style.display = 'block'
    }
})
/* access each project todo array example items.arrProjects[0].array */
console.log('todo')