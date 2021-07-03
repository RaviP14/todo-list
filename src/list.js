import { domElements } from "./interface";
import { items } from "./item";

const currentTodo = (() => {
    
    function newTodo () {
        for (let i = domElements.tableTodo.rows.length; i < items.arrInbox.length; i++) {
            let row = domElements.tableTodo.insertRow(i)
            row.setAttribute('data-key', i)
            for (let j = 0; j < Object.keys(items.arrInbox[i]).length; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(items.arrInbox[i])[j];
            }
        }
    }
    return {
        newTodo
    }
})();

export { currentTodo }