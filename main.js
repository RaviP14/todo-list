/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");



const domElements = (() => {
    let body = document.querySelector('body');
    let mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';
    body.appendChild(mainDiv);

    let sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    mainDiv.appendChild(sidebar);

    let inboxBtn = document.createElement('button');
    inboxBtn.className = 'inboxBtn';
    inboxBtn.textContent = 'Inbox';
    sidebar.appendChild(inboxBtn);

    let todayBtn = document.createElement('button');
    todayBtn.className = 'todayBtn';
    todayBtn.textContent = 'Today'
    sidebar.appendChild(todayBtn);

    let thisWeekBtn = document.createElement('button');
    thisWeekBtn.className = 'thisWeekBtn'
    thisWeekBtn.textContent = 'This Week'
    sidebar.appendChild(thisWeekBtn);

    let projectTitle = document.createElement('p');
    projectTitle.textContent = 'Projects';
    sidebar.appendChild(projectTitle);

    let tableProject = document.createElement('table');
    tableProject.className = 'tableprojects'
    sidebar.appendChild(tableProject)

    let btnAddProject = document.createElement('button');
    btnAddProject.textContent = 'Add Project'
    sidebar.appendChild(btnAddProject);

    let btnAddTodo = document.createElement('button');
    btnAddTodo.textContent = 'Add Task';
    mainDiv.appendChild(btnAddTodo);

    let tableTodo = document.createElement('table');
    tableTodo.className = 'tableTodo';
    mainDiv.appendChild(tableTodo);

    let formDiv = document.createElement('div');
    formDiv.className = 'formDiv';
    formDiv.style.display = 'block';
    mainDiv.appendChild(formDiv)

    let formTodo = document.createElement('form');
    formDiv.appendChild(formTodo);

    function buildFormTodo () {
        let exit = document.createElement('button');
        exit.className = 'exitForm';
        exit.textContent = 'X';
        formTodo.appendChild(exit);

        let nameTitle = document.createElement('p');
        nameTitle.textContent = 'Title:'
        formTodo.appendChild(nameTitle);

        let inputTitle = document.createElement('input');
        inputTitle.autocomplete = 'off'
        formTodo.appendChild(inputTitle);

        let nameDescription = document.createElement('p');
        nameDescription.textContent ='Description:'
        formTodo.appendChild(nameDescription);

        let inputDescription = document.createElement('input');
        inputDescription.autocomplete = 'off';
        formTodo.appendChild(inputDescription);

        let nameDate = document.createElement('p');
        nameDate.textContent = 'Date:'
        formTodo.appendChild(nameDate);

        let inputDate = document.createElement('input');
        inputDate.autocomplete = 'off'
        formTodo.appendChild(inputDate);

        let namePriority = document.createElement('p');
        namePriority.textContent = 'Priority:';
        formTodo.appendChild(namePriority);

        let arrPriority = ['High', 'Medium', 'Low']

        let selectPriorirty = document.createElement('select');

        for (let i =  0; i < arrPriority.length; i++) {
            let option = document.createElement('option');
            option.value = arrPriority[i];
            option.textContent = arrPriority[i];
            selectPriorirty.appendChild(option);
        }

        formTodo.appendChild(selectPriorirty);

        let submit = document.createElement('button');
        submit.className = 'submitForm';
        submit.textContent = 'Submit';
        formTodo.appendChild(submit);
        /* need to retrieve data from input & run new todo */

        submit.addEventListener('click', (e) => {
            if (inputTitle.value !== '' && inputDate !== '') {
                let input1 = inputTitle.value.slice();
                let input2 = inputDate.value.slice();
                let input3 = selectPriorirty.value.slice();
                let input4 = inputDescription.value.slice();
                _item__WEBPACK_IMPORTED_MODULE_0__.items.addTodo(input1, input2, input3, input4);
                e.preventDefault();
                formTodo.reset();
                formDiv.style.display = 'none';
                _list__WEBPACK_IMPORTED_MODULE_1__.currentTodo.newTodo(domElements.tableTodo, _item__WEBPACK_IMPORTED_MODULE_0__.items.arrInbox)
            }
        })

        exit.addEventListener('click', (e) => {
            e.preventDefault();
            formTodo.reset();
            formDiv.style.display = 'none';
        })
    }

    let projectFormDiv = document.createElement('div');
    projectFormDiv.className = 'projectFormDiv';
    projectFormDiv.style.display = 'block';
    sidebar.appendChild(projectFormDiv);

    let projectForm = document.createElement('form');
    projectFormDiv.appendChild(projectForm);

    function buildFormProject() {
        let projectTitle = document.createElement('p');
        projectTitle.textContent = 'Title:'
        projectForm.appendChild(projectTitle);

        let inputProjectTitle = document.createElement('input');
        inputProjectTitle.autocomplete = 'off'
        projectForm.appendChild(inputProjectTitle);

        let projectDescription = document.createElement('p');
        projectDescription.textContent ='Description:'
        projectForm.appendChild(projectDescription);

        let inputProjectDescription = document.createElement('input');
        inputProjectDescription.autocomplete = 'off';
        projectForm.appendChild(inputProjectDescription);

        let cancel = document.createElement('button');
        cancel.className = 'Cancel';
        cancel.textContent = 'Cancel';
        projectForm.appendChild(cancel);

        let submitProject = document.createElement('button');
        submitProject.className = 'submitForm';
        submitProject.textContent = 'Submit';
        projectForm.appendChild(submitProject);

        cancel.addEventListener('click', (e) => {
            e.preventDefault();
            projectForm.reset();
            projectFormDiv.style.display = 'none';
        })

        submitProject.addEventListener('click', (e) => {
            if (inputProjectTitle.value !== '' && inputProjectDescription.value !== '') {
                let input1 = inputProjectTitle.value.slice();
                let input2 = inputProjectDescription.value.slice();
                _item__WEBPACK_IMPORTED_MODULE_0__.items.addProject(input1, input2)
                e.preventDefault();
                projectForm.reset();
                projectFormDiv.style.display = 'none';
                _list__WEBPACK_IMPORTED_MODULE_1__.currentTodo.newProject(domElements.tableProject, _item__WEBPACK_IMPORTED_MODULE_0__.items.arrProjects)
            }
        })
    }
    
    return {
        formDiv,
        formTodo,
        tableTodo,
        btnAddTodo,
        buildFormTodo,
        btnAddProject,
        buildFormProject,
        tableProject,
        projectFormDiv,
        projectForm
    }
})();



/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items)
/* harmony export */ });
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



/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentTodo": () => (/* binding */ currentTodo)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");



const currentTodo = (() => {
    //add desired table & array to add new todo
    function newTodo (element, array) {
        for (let i = element.rows.length; i < array.length; i++) {
            let row = element.insertRow(i)
            row.setAttribute('data-key', i)
            for (let j = 0; j < Object.keys(array[i]).length - 1; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(array[i])[j];
            }

            let infoBtn = document.createElement('button');
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = array[i].description 
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
                if (array.length === 1 && array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox) {
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteTodo(0);
                    element.deleteRow(0);
                } else if (array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox){
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteTodo(i);
                    element.deleteRow(i);
                } //duplicate these with project versions.
            })
        }
    }

    function newProject (element, array) {
        for (let i = element.rows.length; i < array.length; i++) {
            let row = element.insertRow(i)
            row.setAttribute('data-key', i)
            for (let j = 0; j < Object.keys(array[i]).length - 2; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(array[i])[j];
            }

            let infoBtn = document.createElement('button');
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = array[i].description 
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

            let deleteProject = document.createElement('button');
            deleteProject.textContent = 'X';
            let val2 = row.insertCell();
            val2.appendChild(deleteProject);
            deleteProject.addEventListener('click', () => {
                if (array.length === 1 && array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrProjects) {
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteProject(0);
                    element.deleteRow(0);
                } else if (array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrProjects) {
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteProject(i);
                    element.deleteRow(i);
                }
            })
            // add buttons: add task & delete project
        }
    }

    return {
        newTodo,
        newProject
    }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");



/*items.addProject('hello','square')
items.arrProjects[0].addToList('hello','sammy','11','low')
console.log(items.arrProjects[0].array) */

_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.btnAddTodo.addEventListener('click', () => {
    if (_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.formTodo.length === 0) {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.buildFormTodo() //replace with form
    } else if (_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.formDiv.style.display === 'none') {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.formDiv.style.display = 'block'
    }
})

_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.btnAddProject.addEventListener('click', () => {
    if (_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.projectForm.length === 0) {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.buildFormProject()
    } else if (_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.projectFormDiv.style.display === 'none') {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.projectFormDiv.style.display = 'block'
    }
})
/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDSjtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsK0VBQXVDO0FBQ3ZDLFFBQVEsbUVBQTJCO0FBQ25DLFFBQVEsaUVBQXlCO0FBQ2pDLEtBQUssVUFBVSx5RUFBaUM7QUFDaEQsUUFBUSx5RUFBaUM7QUFDekM7QUFDQSxDQUFDOztBQUVELGtGQUEwQztBQUMxQyxRQUFRLHNFQUE4QjtBQUN0QyxRQUFRLG9FQUE0QjtBQUNwQyxLQUFLLFVBQVUsZ0ZBQXdDO0FBQ3ZELFFBQVEsZ0ZBQXdDO0FBQ2hEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgY3VycmVudFRvZG8gfSBmcm9tIFwiLi9saXN0XCI7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21haW5EaXYnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBsZXQgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveEJ0bi5jbGFzc05hbWUgPSAnaW5ib3hCdG4nO1xuICAgIGluYm94QnRuLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94QnRuKTtcblxuICAgIGxldCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5QnRuLmNsYXNzTmFtZSA9ICd0b2RheUJ0bic7XG4gICAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG5cbiAgICBsZXQgdGhpc1dlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzV2Vla0J0bi5jbGFzc05hbWUgPSAndGhpc1dlZWtCdG4nXG4gICAgdGhpc1dlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGhpc1dlZWtCdG4pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGxldCB0YWJsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlUHJvamVjdC5jbGFzc05hbWUgPSAndGFibGVwcm9qZWN0cydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRhYmxlUHJvamVjdClcblxuICAgIGxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ0bkFkZFByb2plY3QpO1xuXG4gICAgbGV0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ0bkFkZFRvZG8pO1xuXG4gICAgbGV0IHRhYmxlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGVUb2RvLmNsYXNzTmFtZSA9ICd0YWJsZVRvZG8nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGFibGVUb2RvKTtcblxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc05hbWUgPSAnZm9ybURpdic7XG4gICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpXG5cbiAgICBsZXQgZm9ybVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtVG9kbyk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEZvcm1Ub2RvICgpIHtcbiAgICAgICAgbGV0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZXhpdC5jbGFzc05hbWUgPSAnZXhpdEZvcm0nO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChleGl0KTtcblxuICAgICAgICBsZXQgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgbmFtZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSdEZXNjcmlwdGlvbjonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgbmFtZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGF0ZSk7XG5cbiAgICAgICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGF0ZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICAgIGxldCBuYW1lUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lUHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBhcnJQcmlvcml0eSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J11cblxuICAgICAgICBsZXQgc2VsZWN0UHJpb3JpcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9ICAwOyBpIDwgYXJyUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBzZWxlY3RQcmlvcmlydHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXJ0eSk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdEZvcm0nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgLyogbmVlZCB0byByZXRyaWV2ZSBkYXRhIGZyb20gaW5wdXQgJiBydW4gbmV3IHRvZG8gKi9cblxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0VGl0bGUudmFsdWUgIT09ICcnICYmIGlucHV0RGF0ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQxID0gaW5wdXRUaXRsZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDIgPSBpbnB1dERhdGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQzID0gc2VsZWN0UHJpb3JpcnR5LnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0NCA9IGlucHV0RGVzY3JpcHRpb24udmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5hZGRUb2RvKGlucHV0MSwgaW5wdXQyLCBpbnB1dDMsIGlucHV0NCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLm5ld1RvZG8oZG9tRWxlbWVudHMudGFibGVUb2RvLCBpdGVtcy5hcnJJbmJveClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NOYW1lID0gJ3Byb2plY3RGb3JtRGl2JztcbiAgICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcblxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEZvcm1Qcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0UHJvamVjdFRpdGxlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdFRpdGxlKTtcblxuICAgICAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSdEZXNjcmlwdGlvbjonXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGlucHV0UHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24uYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbC5jbGFzc05hbWUgPSAnQ2FuY2VsJztcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC5jbGFzc05hbWUgPSAnc3VibWl0Rm9ybSc7XG4gICAgICAgIHN1Ym1pdFByb2plY3QudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdCk7XG5cbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuXG4gICAgICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0UHJvamVjdFRpdGxlLnZhbHVlICE9PSAnJyAmJiBpbnB1dFByb2plY3REZXNjcmlwdGlvbi52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQxID0gaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQyID0gaW5wdXRQcm9qZWN0RGVzY3JpcHRpb24udmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5hZGRQcm9qZWN0KGlucHV0MSwgaW5wdXQyKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgY3VycmVudFRvZG8ubmV3UHJvamVjdChkb21FbGVtZW50cy50YWJsZVByb2plY3QsIGl0ZW1zLmFyclByb2plY3RzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtRGl2LFxuICAgICAgICBmb3JtVG9kbyxcbiAgICAgICAgdGFibGVUb2RvLFxuICAgICAgICBidG5BZGRUb2RvLFxuICAgICAgICBidWlsZEZvcm1Ub2RvLFxuICAgICAgICBidG5BZGRQcm9qZWN0LFxuICAgICAgICBidWlsZEZvcm1Qcm9qZWN0LFxuICAgICAgICB0YWJsZVByb2plY3QsXG4gICAgICAgIHByb2plY3RGb3JtRGl2LFxuICAgICAgICBwcm9qZWN0Rm9ybVxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH0iLCJjb25zdCBpdGVtcyA9ICgoKSA9PiB7XG4gICAgY2xhc3MgdG9kb0l0ZW0ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXJySW5ib3ggPSBbXVxuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyB0b2RvSXRlbSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbilcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgYXJySW5ib3gucHVzaCh0b2RvKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJJbmJveClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvIChuKSB7XG4gICAgICAgIGFyckluYm94LnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJJbmJveClcbiAgICB9XG4gICAgXG4gICAgY2xhc3MgcHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0aGlzLmFycmF5ID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9MaXN0KHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSxkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pXG4gICAgICAgICAgICB0aGlzLmxpc3QodG9kbylcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZUZyb21MaXN0KG4pIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKG4sIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5KVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBhcnJQcm9qZWN0cyA9IFtdXG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0IChuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBuZXcgcHJvamVjdCAobmFtZSwgZGVzY3JpcHRpb24pXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgICBhcnJQcm9qZWN0cy5wdXNoKHByb2plY3RzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3Qobikge1xuICAgICAgICBhcnJQcm9qZWN0cy5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJyUHJvamVjdHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgYXJySW5ib3gsXG4gICAgICAgIGFyclByb2plY3RzXG4gICAgfVxufSkoKTtcbi8qIG4gd2lsbCBiZSBhc3NpZ25lZCB0byBhIGNvbXBsZXRlICYgZGVsZXRlIGJ1dHRvbiBvbiBlYWNoIHRvZG8gXG4mIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvbiB3aWxsIGRlbGV0ZSB0aGUgcHJvamVjdCAtIGxpa2UgbGlicmFyeS4qL1xuZXhwb3J0IHsgaXRlbXMgfVxuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5jb25zdCBjdXJyZW50VG9kbyA9ICgoKSA9PiB7XG4gICAgLy9hZGQgZGVzaXJlZCB0YWJsZSAmIGFycmF5IHRvIGFkZCBuZXcgdG9kb1xuICAgIGZ1bmN0aW9uIG5ld1RvZG8gKGVsZW1lbnQsIGFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LnJvd3MubGVuZ3RoOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50Lmluc2VydFJvdyhpKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBPYmplY3Qua2V5cyhhcnJheVtpXSkubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGFycmF5W2ldKVtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluZm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGluZm9CdG4udGV4dENvbnRlbnQgPSAnaSdcblxuICAgICAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gYXJyYXlbaV0uZGVzY3JpcHRpb24gXG4gICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAgICAgbGV0IHZhbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgdmFsMy5hcHBlbmRDaGlsZChpbmZvQnRuKTtcbiAgICAgICAgICAgIHZhbDMuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICAgICAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJ1xuICAgICAgICAgICAgbGV0IHZhbDIgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICB2YWwyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKVxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSAmJiBhcnJheSA9PT0gaXRlbXMuYXJySW5ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlVG9kbygwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheSA9PT0gaXRlbXMuYXJySW5ib3gpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVUb2RvKGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpKTtcbiAgICAgICAgICAgICAgICB9IC8vZHVwbGljYXRlIHRoZXNlIHdpdGggcHJvamVjdCB2ZXJzaW9ucy5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdQcm9qZWN0IChlbGVtZW50LCBhcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5yb3dzLmxlbmd0aDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5pbnNlcnRSb3coaSlcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgaSlcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgT2JqZWN0LmtleXMoYXJyYXlbaV0pLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyhhcnJheVtpXSlbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmZvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpbmZvQnRuLnRleHRDb250ZW50ID0gJ2knXG5cbiAgICAgICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IGFycmF5W2ldLmRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgICAgIGxldCB2YWwzID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHZhbDMuYXBwZW5kQ2hpbGQoaW5mb0J0bik7XG4gICAgICAgICAgICB2YWwzLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICAgICAgaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBsZXQgdmFsMiA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB2YWwyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxICYmIGFycmF5ID09PSBpdGVtcy5hcnJQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVQcm9qZWN0KDApO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdygwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5ID09PSBpdGVtcy5hcnJQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gYWRkIGJ1dHRvbnM6IGFkZCB0YXNrICYgZGVsZXRlIHByb2plY3RcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1RvZG8sXG4gICAgICAgIG5ld1Byb2plY3RcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBjdXJyZW50VG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4vaXRlbSdcbmltcG9ydHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2ludGVyZmFjZSdcbmltcG9ydCB7IGN1cnJlbnRUb2RvIH0gZnJvbSAnLi9saXN0J1xuLyppdGVtcy5hZGRQcm9qZWN0KCdoZWxsbycsJ3NxdWFyZScpXG5pdGVtcy5hcnJQcm9qZWN0c1swXS5hZGRUb0xpc3QoJ2hlbGxvJywnc2FtbXknLCcxMScsJ2xvdycpXG5jb25zb2xlLmxvZyhpdGVtcy5hcnJQcm9qZWN0c1swXS5hcnJheSkgKi9cblxuZG9tRWxlbWVudHMuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMuZm9ybVRvZG8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmJ1aWxkRm9ybVRvZG8oKSAvL3JlcGxhY2Ugd2l0aCBmb3JtXG4gICAgfSBlbHNlIGlmIChkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcblxuZG9tRWxlbWVudHMuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmJ1aWxkRm9ybVByb2plY3QoKVxuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcbi8qIGFjY2VzcyBlYWNoIHByb2plY3QgdG9kbyBhcnJheSBleGFtcGxlIGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5ICovXG5jb25zb2xlLmxvZygndG9kbycpIl0sInNvdXJjZVJvb3QiOiIifQ==