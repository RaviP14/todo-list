import { items } from './item'
import{ domElements } from './interface'
import { currentTodo } from './list'
/*items.addProject('hello','square')
items.arrProjects[0].addToList('hello','sammy','11','low')
console.log(items.arrProjects[0].array) */

domElements.btnAddTodo.addEventListener('click', () => {
    domElements.buildFormTodo() //replace with form
    currentTodo.newTodo();
})

/* access each project todo array example items.arrProjects[0].array */
console.log('todo')