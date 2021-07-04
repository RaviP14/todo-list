const items = (() => {
    class todoItem {
        constructor(title, dueDate, priority, description) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
            this.description = description
        }
    }

    let arrInbox = []

    function addTodo (title, dueDate, priority, description) {
        let todo = new todoItem (title, dueDate, priority, description)
        console.log(todo)
        arrInbox.push(todo)
        console.log(arrInbox)
    }

    function deleteTodo (n) {
        arrInbox.splice(n, 1)
        console.log(arrInbox)
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

        addToList(title, dueDate, priority,description) {
            let todo = new todoItem (title, dueDate, priority, description)
            this.list(todo)
        }

        deleteFromList(n) {
            this.array.splice(n, 1)
            console.log(this.array)
        }
    }
    let arrProjects = []

    function addProject (name, description) {
        let projects = new project (name, description)
        console.log(projects)
        arrProjects.push(projects)
    }

    function deleteProject(n) {
        arrProjects.splice(n, 1)
        console.log(arrProjects)
    }

    return {
        addTodo,
        deleteTodo,
        addProject,
        deleteProject,
        arrInbox,
        arrProjects
    }
})();
/* n will be assigned to a complete & delete button on each todo 
& delete project button will delete the project - like library.*/
export { items }
