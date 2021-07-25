## Todo List Project ##

In this project I have used HTML, CSS, Javascript, all content has been dynamically generated using Javascript.

The **live preview** is available from <a href='https://ravip14.github.io/todo-list/'>here</a>.

### Overview ###

- Todo's are added using the **add task** button.
- Forms are generated when new todo/new project/edit buttons are pressed.
- The New Todo & edit forms appear in a **modal**.
- Edit form is **auto filled** with current todo info.
- **New Projects** are added to the new todo & edit forms.
- New project form appears inside sidebar.
- Projects & Priority can be **selected** inside the new todo & edit forms.
- Todo's come with info button which present a **tooltip** with the todo's description on hover.
- The sidebar contains filters on the LHS:
    - Todo button shows all todo's.
    - Inbox button filters & shows all todo's inside the **default** project.
    - Today button filters the table for the **todo's due today**.
    - This week button shows all todo's from **Mon - Sun** in the current week.
    - Project buttons filter the table for the todo's in that project.
- The **date-fns library** is used to format filtered dates.
- The complete button **removes** the todo from the array & table.
- Projects & their todo's are **deleted** when the project is removed.
- The Todo list project has been bundled with **Webpack**.