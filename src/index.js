import { items } from './item'
import{ domElements } from './interface'
import { currentTodo } from './list'
import { format } from 'date-fns'

const homepage = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        let oldTodo = JSON.parse(localStorage.getItem('myArrInbox'))
        for (let i = 0; i < oldTodo.length; i++) {
            let input1 = oldTodo[i].title
            let input2 = oldTodo[i].dueDate
            let input3 = oldTodo[i].priority
            let input4 = oldTodo[i].description
            let input5 = oldTodo[i].project
            items.addOldTodo(input1, input2, input3, input4, input5)
        }

        let oldProject  = JSON.parse(localStorage.getItem('myArrProject'))
        for (let j = 1; j < oldProject.length; j++) {
            items.addOldProject(oldProject[j])
        }

        currentTodo.newTodo(domElements.tableTodo , items.arrInbox)
        currentTodo.newProject(domElements.tableProject, items.arrProject)
    })

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
            domElements.tableTodo.rows[i].style.display = 'table-row';
        }
    })
    
    domElements.inboxBtn.addEventListener('click', () => {
        for (let j = 0; j < domElements.tableTodo.rows.length; j++) {
            domElements.tableTodo.rows[j].style.display = 'none';
            if (domElements.tableTodo.rows[j].attributes.value.nodeValue === 'Inbox') {
                domElements.tableTodo.rows[j].style.display = 'table-row';
            }
        }
    })
    
    domElements.todayBtn.addEventListener('click', () => {
        let thisDay = new Date()
        /*let day1 = String(thisDay.getDate())
        let month1 = String(thisDay.getMonth())
        let year1 = thisDay.getFullYear()*/
        let today = format(thisDay, 'dd-MM-yyyy')
        for (let j = 0; j < domElements.tableTodo.rows.length; j++) {
            domElements.tableTodo.rows[j].style.display = 'none';
            if (domElements.tableTodo.rows[j].attributes[0].nodeValue === today) {
                domElements.tableTodo.rows[j].style.display = 'table-row';
            }
        }
    })
    
    domElements.thisWeekBtn.addEventListener('click', () => {
        let thisDay = new Date()
        let firstDay = thisDay.getDate() - thisDay.getDay() + 1
        let first = new Date(thisDay.setDate(firstDay))
        let starts = format(thisDay, 'dd,MM,yyyy')
    
        let endDay = new Date()
        let lastDay = firstDay + 7
        let last = new Date(endDay.setDate(lastDay))
        let ends = format(endDay, 'dd,MM,yyyy')
        
        for(let j = 0; j < domElements.tableTodo.rows.length; j++) {
            domElements.tableTodo.rows[j].style.display = 'none';
            let current = domElements.tableTodo.rows[j].attributes[0].nodeValue
            
            if (current > starts && current < ends) {
                domElements.tableTodo.rows[j].style.display = 'table-row';
            }
        }
    })
})()
