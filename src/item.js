const items = (() => {
    class todoItem {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    function addTodo (title, description, dueDate, priority) {
        let todo = new todoItem (title, description, dueDate, priority)
        console.log(todo)
    }
    
    class project {
        constructor (name, description) {
            this.name = name
            this.description = description
        }

        list() {
            myList = []
            myList.push(item)
            console.log(myList)
        }

        addToList(title, description, dueDate, priority) {
            let todo = new todoItem (title, description, dueDate, priority)
            list(todo)
        }     
    }
    function addProject (name, description) {
        let projects = new project (name, description)
        console.log(projects)
    }
    return {
        addTodo,
        addProject
    }
})();
/* check for proper way to add array to factory function*/
export { items }
