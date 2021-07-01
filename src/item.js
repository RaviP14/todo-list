const items = (() => {
    class todoItem {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    let arrInbox = []

    function addTodo (title, description, dueDate, priority) {
        let todo = new todoItem (title, description, dueDate, priority)
        console.log(todo)
        inbox.push(todo)
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
    let arrProjects = []

    function addProject (name, description) {
        let projects = new project (name, description)
        console.log(projects)
        arrProjects.push(projects)
    }

    return {
        addTodo,
        addProject,
        arrInbox,
        arrProjects
    }
})();
/* need to delete items inside arrays once completed or deleted*/
export { items }
