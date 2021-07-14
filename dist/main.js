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

    let todoBtn = document.createElement('button');
    todoBtn.className = 'todoBtn';
    todoBtn.textContent = 'Todo\'s';
    sidebar.appendChild(todoBtn);

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

    function buildFormTodo (tables, arrays) {
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
        inputDate.type = 'date'
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
        
        let nameChooseProject = document.createElement('p');
        nameChooseProject.textContent = 'Choose Project';
        formTodo.appendChild(nameChooseProject);

        let chooseProject = document.createElement('select');

        for (let j =  0; j < _item__WEBPACK_IMPORTED_MODULE_0__.items.arrProject.length; j++) {
            let option = document.createElement('option');
            option.value = _item__WEBPACK_IMPORTED_MODULE_0__.items.arrProject[j];
            option.textContent = _item__WEBPACK_IMPORTED_MODULE_0__.items.arrProject[j];
            chooseProject.appendChild(option);
        }

        formTodo.appendChild(chooseProject);

        let submit = document.createElement('button');
        submit.className = 'submitForm';
        submit.textContent = 'Submit';
        formTodo.appendChild(submit);

        submit.addEventListener('click', (e) => {
            if (inputTitle.value !== '' && inputDate !== '') {
                let input1 = inputTitle.value.slice();
                let input2 = inputDate.value.slice();
                let input3 = selectPriorirty.value.slice();
                let input4 = inputDescription.value.slice();
                let input5 = chooseProject.value.slice();
                console.log(chooseProject.value)
                if (arrays = _item__WEBPACK_IMPORTED_MODULE_0__.items.arrInbox) {
                    _item__WEBPACK_IMPORTED_MODULE_0__.items.addTodo(input1, input2, input3, input4, input5);
                    e.preventDefault();
                    formTodo.reset();
                    formDiv.style.display = 'none';
                    _list__WEBPACK_IMPORTED_MODULE_1__.currentTodo.newTodo(tables, arrays)
                } 
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
            if (inputProjectTitle.value !== '') {
                let input1 = inputProjectTitle.value.slice();
                _item__WEBPACK_IMPORTED_MODULE_0__.items.addProject(input1)
                _list__WEBPACK_IMPORTED_MODULE_1__.currentTodo.newProject(domElements.tableProject, _item__WEBPACK_IMPORTED_MODULE_0__.items.arrProject)
                removeForm()
                e.preventDefault();
                projectForm.reset();
                projectFormDiv.style.display = 'none';
            }
        })
    }
    function removeForm (){
        while (formTodo.hasChildNodes()) {
            formTodo.removeChild(formTodo.firstChild)
        }
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
        projectForm,
        todoBtn,
        inboxBtn
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
        console.log(todo)
        arrInbox.push(todo)
        console.log(arrInbox)
    }

    function deleteTodo (n) {
        arrInbox.splice(n, 1)
        console.log(arrInbox)
    }

    let arrProject = ['Inbox']

    function addProject (project) {
        arrProject.push(project);
        console.log(arrProject);
    }

    function deleteProject (n) {
        arrProject.splice(n, 1)
        console.log(arrProject)
    }

    /* remove project class & functions - add project as this.project on todo class */

    return {
        addTodo,
        deleteTodo,
        arrInbox,
        arrProject,
        addProject,
        deleteProject
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
            row.setAttribute('value', array[i].project)
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
                } 
            })
        }
    }

    function newProject (element, array) {
        for (let i = element.rows.length + 1; i < array.length; i++) {
            console.log(i)
            let row = element.insertRow(i -1)
            row.setAttribute('data-key', i)
    
            let val = row.insertCell()
            let btn = document.createElement('button');
            btn.value = array[i];
            btn.textContent = array[i];
            val.appendChild(btn);
            
            btn.addEventListener('click', () => {
                let filteredArray = _item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox.filter(function(oneProject){
                    return oneProject.project == array[i]
                })
                console.log(filteredArray);

                for (let j = 0; j < _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows.length; j++) {
                    _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows[j].style.display = 'none';
                    if (_interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows[j].attributes.value.nodeValue === array[i]) {
                        _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows[j].style.display = 'block';
                    }
                }
            })

            let deleteProject = document.createElement('button');
            deleteProject.textContent = 'X';
            let val2 = row.insertCell();
            val2.appendChild(deleteProject);
            deleteProject.addEventListener('click', () => {
                if (array.length === 1 && array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrProject) {
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteProject(0);
                    element.deleteRow(0);
                } else if (array === _item__WEBPACK_IMPORTED_MODULE_1__.items.arrProject) {
                    _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteProject(i);
                    element.deleteRow(i - 1);
                }
            })
            // need to skip 1 = 0 or items.arrProject[0]
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
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.buildFormTodo(_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo , _item__WEBPACK_IMPORTED_MODULE_0__.items.arrInbox)
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.formDiv.style.display = 'block'
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

_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.todoBtn.addEventListener('click', () => {
    for (let i = 0; i < _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows.length; i++) {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows[i].style.display = 'block';
    }
})

_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.inboxBtn.addEventListener('click', () => {
    for (let j = 0; j < _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows.length; j++) {
        _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows[j].style.display = 'none';
        if (_interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows[j].attributes.value.nodeValue === 'Inbox') {
            _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.tableTodo.rows[j].style.display = 'block';
        }
    }
})

/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFF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V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNVO0FBQ0o7QUFDcEM7QUFDQTtBQUNBOztBQUVBLCtFQUF1QztBQUN2QyxRQUFRLG1FQUEyQjtBQUNuQyxRQUFRLGlFQUF5QixDQUFDLDZEQUFxQixHQUFHLGlEQUFjO0FBQ3hFLFFBQVEseUVBQWlDO0FBQ3pDLEtBQUssVUFBVSx5RUFBaUM7QUFDaEQsUUFBUSx5RUFBaUM7QUFDekM7QUFDQSxDQUFDOztBQUVELGtGQUEwQztBQUMxQyxRQUFRLHNFQUE4QjtBQUN0QyxRQUFRLG9FQUE0QjtBQUNwQyxLQUFLLFVBQVUsZ0ZBQXdDO0FBQ3ZELFFBQVEsZ0ZBQXdDO0FBQ2hEO0FBQ0EsQ0FBQzs7QUFFRCw0RUFBb0M7QUFDcEMsbUJBQW1CLEtBQUsseUVBQWlDLENBQUM7QUFDMUQsUUFBUSxrRUFBMEI7QUFDbEM7QUFDQSxDQUFDOztBQUVELDZFQUFxQztBQUNyQyxtQkFBbUIsS0FBSyx5RUFBaUMsQ0FBQztBQUMxRCxRQUFRLGtFQUEwQjtBQUNsQyxZQUFZLGtFQUEwQjtBQUN0QyxZQUFZLGtFQUEwQjtBQUN0QztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IGN1cnJlbnRUb2RvIH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5jb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtYWluRGl2JztcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgbGV0IHRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvQnRuLmNsYXNzTmFtZSA9ICd0b2RvQnRuJztcbiAgICB0b2RvQnRuLnRleHRDb250ZW50ID0gJ1RvZG9cXCdzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZG9CdG4pO1xuXG4gICAgbGV0IGluYm94QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5ib3hCdG4uY2xhc3NOYW1lID0gJ2luYm94QnRuJztcbiAgICBpbmJveEJ0bi50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveEJ0bik7XG5cbiAgICBsZXQgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RheUJ0bi5jbGFzc05hbWUgPSAndG9kYXlCdG4nO1xuICAgIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuXG4gICAgbGV0IHRoaXNXZWVrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpc1dlZWtCdG4uY2xhc3NOYW1lID0gJ3RoaXNXZWVrQnRuJ1xuICAgIHRoaXNXZWVrQnRuLnRleHRDb250ZW50ID0gJ1RoaXMgV2VlaydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRoaXNXZWVrQnRuKTtcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBsZXQgdGFibGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZVByb2plY3QuY2xhc3NOYW1lID0gJ3RhYmxlcHJvamVjdHMnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0YWJsZVByb2plY3QpXG5cbiAgICBsZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidG5BZGRQcm9qZWN0KTtcblxuICAgIGxldCBidG5BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVG9kby50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidG5BZGRUb2RvKTtcblxuICAgIGxldCB0YWJsZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlVG9kby5jbGFzc05hbWUgPSAndGFibGVUb2RvJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRhYmxlVG9kbyk7XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NOYW1lID0gJ2Zvcm1EaXYnO1xuICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtRGl2KVxuXG4gICAgbGV0IGZvcm1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVRvZG8pO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRGb3JtVG9kbyAodGFibGVzLCBhcnJheXMpIHtcbiAgICAgICAgbGV0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZXhpdC5jbGFzc05hbWUgPSAnZXhpdEZvcm0nO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChleGl0KTtcblxuICAgICAgICBsZXQgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgbmFtZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSdEZXNjcmlwdGlvbjonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgbmFtZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGF0ZSk7XG5cbiAgICAgICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgIGlucHV0RGF0ZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICAgIGxldCBuYW1lUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lUHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBhcnJQcmlvcml0eSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J11cblxuICAgICAgICBsZXQgc2VsZWN0UHJpb3JpcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9ICAwOyBpIDwgYXJyUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBzZWxlY3RQcmlvcmlydHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXJ0eSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmFtZUNob29zZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVDaG9vc2VQcm9qZWN0LnRleHRDb250ZW50ID0gJ0Nob29zZSBQcm9qZWN0JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZUNob29zZVByb2plY3QpO1xuXG4gICAgICAgIGxldCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9ICAwOyBqIDwgaXRlbXMuYXJyUHJvamVjdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbXMuYXJyUHJvamVjdFtqXTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1zLmFyclByb2plY3Rbal07XG4gICAgICAgICAgICBjaG9vc2VQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChjaG9vc2VQcm9qZWN0KTtcblxuICAgICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc05hbWUgPSAnc3VibWl0Rm9ybSc7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSAhPT0gJycgJiYgaW5wdXREYXRlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDEgPSBpbnB1dFRpdGxlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MiA9IGlucHV0RGF0ZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDMgPSBzZWxlY3RQcmlvcmlydHkudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQ0ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDUgPSBjaG9vc2VQcm9qZWN0LnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hvb3NlUHJvamVjdC52YWx1ZSlcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlzID0gaXRlbXMuYXJySW5ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuYWRkVG9kbyhpbnB1dDEsIGlucHV0MiwgaW5wdXQzLCBpbnB1dDQsIGlucHV0NSk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVRvZG8ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5uZXdUb2RvKHRhYmxlcywgYXJyYXlzKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuXG4gICAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybVRvZG8ucmVzZXQoKTtcbiAgICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc05hbWUgPSAncHJvamVjdEZvcm1EaXYnO1xuICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuXG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRm9ybVByb2plY3QoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTonXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgbGV0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRQcm9qZWN0VGl0bGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTmFtZSA9ICdDYW5jZWwnO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRQcm9qZWN0LmNsYXNzTmFtZSA9ICdzdWJtaXRGb3JtJztcbiAgICAgICAgc3VibWl0UHJvamVjdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0KTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MSA9IGlucHV0UHJvamVjdFRpdGxlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgaXRlbXMuYWRkUHJvamVjdChpbnB1dDEpXG4gICAgICAgICAgICAgICAgY3VycmVudFRvZG8ubmV3UHJvamVjdChkb21FbGVtZW50cy50YWJsZVByb2plY3QsIGl0ZW1zLmFyclByb2plY3QpXG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybSAoKXtcbiAgICAgICAgd2hpbGUgKGZvcm1Ub2RvLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgZm9ybVRvZG8ucmVtb3ZlQ2hpbGQoZm9ybVRvZG8uZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtRGl2LFxuICAgICAgICBmb3JtVG9kbyxcbiAgICAgICAgdGFibGVUb2RvLFxuICAgICAgICBidG5BZGRUb2RvLFxuICAgICAgICBidWlsZEZvcm1Ub2RvLFxuICAgICAgICBidG5BZGRQcm9qZWN0LFxuICAgICAgICBidWlsZEZvcm1Qcm9qZWN0LFxuICAgICAgICB0YWJsZVByb2plY3QsXG4gICAgICAgIHByb2plY3RGb3JtRGl2LFxuICAgICAgICBwcm9qZWN0Rm9ybSxcbiAgICAgICAgdG9kb0J0bixcbiAgICAgICAgaW5ib3hCdG5cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVtZW50cyB9IiwiY29uc3QgaXRlbXMgPSAoKCkgPT4ge1xuICAgIGNsYXNzIHRvZG9JdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyckluYm94ID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIGFyckluYm94LnB1c2godG9kbylcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAobikge1xuICAgICAgICBhcnJJbmJveC5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgbGV0IGFyclByb2plY3QgPSBbJ0luYm94J11cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgYXJyUHJvamVjdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChuKSB7XG4gICAgICAgIGFyclByb2plY3Quc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyclByb2plY3QpXG4gICAgfVxuXG4gICAgLyogcmVtb3ZlIHByb2plY3QgY2xhc3MgJiBmdW5jdGlvbnMgLSBhZGQgcHJvamVjdCBhcyB0aGlzLnByb2plY3Qgb24gdG9kbyBjbGFzcyAqL1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYXJySW5ib3gsXG4gICAgICAgIGFyclByb2plY3QsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3RcbiAgICB9XG59KSgpO1xuLyogbiB3aWxsIGJlIGFzc2lnbmVkIHRvIGEgY29tcGxldGUgJiBkZWxldGUgYnV0dG9uIG9uIGVhY2ggdG9kbyBcbiYgZGVsZXRlIHByb2plY3QgYnV0dG9uIHdpbGwgZGVsZXRlIHRoZSBwcm9qZWN0IC0gbGlrZSBsaWJyYXJ5LiovXG5leHBvcnQgeyBpdGVtcyB9XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNvbnN0IGN1cnJlbnRUb2RvID0gKCgpID0+IHtcbiAgICAvL2FkZCBkZXNpcmVkIHRhYmxlICYgYXJyYXkgdG8gYWRkIG5ldyB0b2RvXG4gICAgZnVuY3Rpb24gbmV3VG9kbyAoZWxlbWVudCwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQucm93cy5sZW5ndGg7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuaW5zZXJ0Um93KGkpXG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGkpXG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGFycmF5W2ldLnByb2plY3QpXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE9iamVjdC5rZXlzKGFycmF5W2ldKS5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcm93Lmluc2VydENlbGwoKVxuICAgICAgICAgICAgICAgIHZhbC50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMoYXJyYXlbaV0pW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgaW5mb0J0bi50ZXh0Q29udGVudCA9ICdpJ1xuXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBhcnJheVtpXS5kZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAgICAgICBsZXQgdmFsMyA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB2YWwzLmFwcGVuZENoaWxkKGluZm9CdG4pO1xuICAgICAgICAgICAgdmFsMy5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgICAgIGluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnXG4gICAgICAgICAgICBsZXQgdmFsMiA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgIHZhbDIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxICYmIGFycmF5ID09PSBpdGVtcy5hcnJJbmJveCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVUb2RvKDApO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdygwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5ID09PSBpdGVtcy5hcnJJbmJveCl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZVRvZG8oaSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsZXRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdCAoZWxlbWVudCwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQucm93cy5sZW5ndGggKyAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5pbnNlcnRSb3coaSAtMSlcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgaSlcbiAgICBcbiAgICAgICAgICAgIGxldCB2YWwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidG4udmFsdWUgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgdmFsLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRBcnJheSA9IGl0ZW1zLmFyckluYm94LmZpbHRlcihmdW5jdGlvbihvbmVQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZVByb2plY3QucHJvamVjdCA9PSBhcnJheVtpXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21FbGVtZW50cy50YWJsZVRvZG8ucm93c1tqXS5hdHRyaWJ1dGVzLnZhbHVlLm5vZGVWYWx1ZSA9PT0gYXJyYXlbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzW2pdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBsZXQgdmFsMiA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB2YWwyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxICYmIGFycmF5ID09PSBpdGVtcy5hcnJQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZVByb2plY3QoMCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsZXRlUm93KDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXkgPT09IGl0ZW1zLmFyclByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlUHJvamVjdChpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coaSAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHNraXAgMSA9IDAgb3IgaXRlbXMuYXJyUHJvamVjdFswXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3VG9kbyxcbiAgICAgICAgbmV3UHJvamVjdFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGN1cnJlbnRUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi9pdGVtJ1xuaW1wb3J0eyBkb21FbGVtZW50cyB9IGZyb20gJy4vaW50ZXJmYWNlJ1xuaW1wb3J0IHsgY3VycmVudFRvZG8gfSBmcm9tICcuL2xpc3QnXG4vKml0ZW1zLmFkZFByb2plY3QoJ2hlbGxvJywnc3F1YXJlJylcbml0ZW1zLmFyclByb2plY3RzWzBdLmFkZFRvTGlzdCgnaGVsbG8nLCdzYW1teScsJzExJywnbG93JylcbmNvbnNvbGUubG9nKGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5KSAqL1xuXG5kb21FbGVtZW50cy5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb21FbGVtZW50cy5mb3JtVG9kby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9tRWxlbWVudHMuYnVpbGRGb3JtVG9kbyhkb21FbGVtZW50cy50YWJsZVRvZG8gLCBpdGVtcy5hcnJJbmJveClcbiAgICAgICAgZG9tRWxlbWVudHMuZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMuZm9ybURpdi5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgZG9tRWxlbWVudHMuZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbn0pXG5cbmRvbUVsZW1lbnRzLmJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLnByb2plY3RGb3JtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Qcm9qZWN0KClcbiAgICB9IGVsc2UgaWYgKGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBkb21FbGVtZW50cy5wcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbn0pXG5cbmRvbUVsZW1lbnRzLnRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21FbGVtZW50cy50YWJsZVRvZG8ucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb21FbGVtZW50cy50YWJsZVRvZG8ucm93c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG59KVxuXG5kb21FbGVtZW50cy5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmIChkb21FbGVtZW50cy50YWJsZVRvZG8ucm93c1tqXS5hdHRyaWJ1dGVzLnZhbHVlLm5vZGVWYWx1ZSA9PT0gJ0luYm94Jykge1xuICAgICAgICAgICAgZG9tRWxlbWVudHMudGFibGVUb2RvLnJvd3Nbal0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vKiBhY2Nlc3MgZWFjaCBwcm9qZWN0IHRvZG8gYXJyYXkgZXhhbXBsZSBpdGVtcy5hcnJQcm9qZWN0c1swXS5hcnJheSAqL1xuY29uc29sZS5sb2coJ3RvZG8nKSJdLCJzb3VyY2VSb290IjoiIn0=