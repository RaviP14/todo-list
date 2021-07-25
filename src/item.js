const items = (() => {
    class todoItem {
        constructor(title, dueDate, priority, description, project) {
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
            this.description = description
            this.project = project
        }
    }

    let arrInbox = []

    function addTodo (title, dueDate, priority, description, project) {
        let todo = new todoItem (title, dueDate, priority, description, project)
        arrInbox.push(todo)
        localStorage.setItem('myArrInbox', JSON.stringify(arrInbox))
    }

    function addOldTodo (title, dueDate, priority, description, project) {
        let todo = new todoItem (title, dueDate, priority, description, project)
        arrInbox.push(todo)
    }

    function editTodo (n, title, dueDate, priority, description, project) {
        arrInbox[n].title = title
        arrInbox[n].dueDate = dueDate
        arrInbox[n].priority = priority
        arrInbox[n].description = description
        arrInbox[n].project = project
        localStorage.setItem('myArrInbox', JSON.stringify(arrInbox))
    }

    function deleteTodo (n) {
        arrInbox.splice(n, 1)
        localStorage.setItem('myArrInbox', JSON.stringify(arrInbox))
    }

    let arrProject = ['Inbox']

    function addProject (project) {
        arrProject.push(project);
        localStorage.setItem('myArrProject', JSON.stringify(arrProject))
    }
    function addOldProject (project) {
        arrProject.push(project);
    }

    function deleteProject (n) {
        arrProject.splice(n, 1)
        localStorage.setItem('myArrProject', JSON.stringify(arrProject))
    }

    return {
        addTodo,
        deleteTodo,
        arrInbox,
        arrProject,
        addProject,
        deleteProject,
        addOldTodo,
        addOldProject,
        editTodo
    }
})();

export { items }
