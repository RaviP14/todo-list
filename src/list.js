import { domElements } from "./interface";
import { items } from "./item";

const currentTodo = (() => {
    
    function newTodo () {
        for (let i = domElements.tableTodo.rows.length; i < items.arrInbox.length; i++) {
            let row = domElements.tableTodo.insertRow(i)
            row.setAttribute('data-key', i)
            for (let j = 0; j < Object.keys(items.arrInbox[i]).length - 1; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(items.arrInbox[i])[j];
            }

            let infoBtn = document.createElement('button');
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = items.arrInbox[i].description 
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
                items.deleteTodo(i);
                domElements.tableTodo.deleteRow(i);
            })
        }
    }
    return {
        newTodo
    }
})();

export { currentTodo }