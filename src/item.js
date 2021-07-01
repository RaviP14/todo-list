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
            this.array = []
        }

        list(item) {
            this.array.push(item)
            console.log(this.array)
        }

        addToList(title, description, dueDate, priority) {
            let todo = new todoItem (title, description, dueDate, priority)
            this.list(todo)
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
