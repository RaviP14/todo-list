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
        }) /* Projects aren't added on once form is built,
        need to delete & rebuild form everytime project is added & deleted
        check restaurant page. */ 

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
                    if (_interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows[j].attributes.value.nodeValue !== array[i]) {
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
/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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Q2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNVO0FBQ0o7QUFDcEM7QUFDQTtBQUNBOztBQUVBLCtFQUF1QztBQUN2QyxRQUFRLG1FQUEyQjtBQUNuQyxRQUFRLGlFQUF5QixDQUFDLDZEQUFxQixHQUFHLGlEQUFjO0FBQ3hFLFFBQVEseUVBQWlDO0FBQ3pDLEtBQUssVUFBVSx5RUFBaUM7QUFDaEQsUUFBUSx5RUFBaUM7QUFDekM7QUFDQSxDQUFDOztBQUVELGtGQUEwQztBQUMxQyxRQUFRLHNFQUE4QjtBQUN0QyxRQUFRLG9FQUE0QjtBQUNwQyxLQUFLLFVBQVUsZ0ZBQXdDO0FBQ3ZELFFBQVEsZ0ZBQXdDO0FBQ2hEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgY3VycmVudFRvZG8gfSBmcm9tIFwiLi9saXN0XCI7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21haW5EaXYnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBsZXQgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveEJ0bi5jbGFzc05hbWUgPSAnaW5ib3hCdG4nO1xuICAgIGluYm94QnRuLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94QnRuKTtcblxuICAgIGxldCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5QnRuLmNsYXNzTmFtZSA9ICd0b2RheUJ0bic7XG4gICAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG5cbiAgICBsZXQgdGhpc1dlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzV2Vla0J0bi5jbGFzc05hbWUgPSAndGhpc1dlZWtCdG4nXG4gICAgdGhpc1dlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGhpc1dlZWtCdG4pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGxldCB0YWJsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlUHJvamVjdC5jbGFzc05hbWUgPSAndGFibGVwcm9qZWN0cydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRhYmxlUHJvamVjdClcblxuICAgIGxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ0bkFkZFByb2plY3QpO1xuXG4gICAgbGV0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGJ0bkFkZFRvZG8pO1xuXG4gICAgbGV0IHRhYmxlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGVUb2RvLmNsYXNzTmFtZSA9ICd0YWJsZVRvZG8nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGFibGVUb2RvKTtcblxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc05hbWUgPSAnZm9ybURpdic7XG4gICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpXG5cbiAgICBsZXQgZm9ybVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtVG9kbyk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEZvcm1Ub2RvICh0YWJsZXMsIGFycmF5cykge1xuICAgICAgICBsZXQgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBleGl0LmNsYXNzTmFtZSA9ICdleGl0Rm9ybSc7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGV4aXQpO1xuXG4gICAgICAgIGxldCBuYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVUaXRsZSk7XG5cbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dFRpdGxlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGxldCBuYW1lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9J0Rlc2NyaXB0aW9uOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZURlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBuYW1lRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZURhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEYXRlKTtcblxuICAgICAgICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXREYXRlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgaW5wdXREYXRlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICAgICAgbGV0IG5hbWVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZVByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVQcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IGFyclByaW9yaXR5ID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXVxuXG4gICAgICAgIGxldCBzZWxlY3RQcmlvcmlydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gIDA7IGkgPCBhcnJQcmlvcml0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBhcnJQcmlvcml0eVtpXTtcbiAgICAgICAgICAgIHNlbGVjdFByaW9yaXJ0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoc2VsZWN0UHJpb3JpcnR5KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuYW1lQ2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZUNob29zZVByb2plY3QudGV4dENvbnRlbnQgPSAnQ2hvb3NlIFByb2plY3QnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lQ2hvb3NlUHJvamVjdCk7XG5cbiAgICAgICAgbGV0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gIDA7IGogPCBpdGVtcy5hcnJQcm9qZWN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtcy5hcnJQcm9qZWN0W2pdO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbXMuYXJyUHJvamVjdFtqXTtcbiAgICAgICAgICAgIGNob29zZVByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGNob29zZVByb2plY3QpO1xuXG4gICAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTmFtZSA9ICdzdWJtaXRGb3JtJztcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dFRpdGxlLnZhbHVlICE9PSAnJyAmJiBpbnB1dERhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MSA9IGlucHV0VGl0bGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQyID0gaW5wdXREYXRlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MyA9IHNlbGVjdFByaW9yaXJ0eS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDQgPSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0NSA9IGNob29zZVByb2plY3QudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaG9vc2VQcm9qZWN0LnZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChhcnJheXMgPSBpdGVtcy5hcnJJbmJveCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5hZGRUb2RvKGlucHV0MSwgaW5wdXQyLCBpbnB1dDMsIGlucHV0NCwgaW5wdXQ1KTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLm5ld1RvZG8odGFibGVzLCBhcnJheXMpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgLyogUHJvamVjdHMgYXJlbid0IGFkZGVkIG9uIG9uY2UgZm9ybSBpcyBidWlsdCxcbiAgICAgICAgbmVlZCB0byBkZWxldGUgJiByZWJ1aWxkIGZvcm0gZXZlcnl0aW1lIHByb2plY3QgaXMgYWRkZWQgJiBkZWxldGVkXG4gICAgICAgIGNoZWNrIHJlc3RhdXJhbnQgcGFnZS4gKi8gXG5cbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxldCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTmFtZSA9ICdwcm9qZWN0Rm9ybURpdic7XG4gICAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG5cbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRGb3JtUHJvamVjdCgpIHtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOidcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICBsZXQgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dFByb2plY3RUaXRsZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWwuY2xhc3NOYW1lID0gJ0NhbmNlbCc7XG4gICAgICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdFByb2plY3QuY2xhc3NOYW1lID0gJ3N1Ym1pdEZvcm0nO1xuICAgICAgICBzdWJtaXRQcm9qZWN0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3QpO1xuXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcblxuICAgICAgICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dFByb2plY3RUaXRsZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQxID0gaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5hZGRQcm9qZWN0KGlucHV0MSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5uZXdQcm9qZWN0KGRvbUVsZW1lbnRzLnRhYmxlUHJvamVjdCwgaXRlbXMuYXJyUHJvamVjdClcbiAgICAgICAgICAgICAgICByZW1vdmVGb3JtKClcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtICgpe1xuICAgICAgICB3aGlsZSAoZm9ybVRvZG8uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBmb3JtVG9kby5yZW1vdmVDaGlsZChmb3JtVG9kby5maXJzdENoaWxkKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1EaXYsXG4gICAgICAgIGZvcm1Ub2RvLFxuICAgICAgICB0YWJsZVRvZG8sXG4gICAgICAgIGJ0bkFkZFRvZG8sXG4gICAgICAgIGJ1aWxkRm9ybVRvZG8sXG4gICAgICAgIGJ0bkFkZFByb2plY3QsXG4gICAgICAgIGJ1aWxkRm9ybVByb2plY3QsXG4gICAgICAgIHRhYmxlUHJvamVjdCxcbiAgICAgICAgcHJvamVjdEZvcm1EaXYsXG4gICAgICAgIHByb2plY3RGb3JtXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMgfSIsImNvbnN0IGl0ZW1zID0gKCgpID0+IHtcbiAgICBjbGFzcyB0b2RvSXRlbSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhcnJJbmJveCA9IFtdXG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0KSB7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IHRvZG9JdGVtICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICBhcnJJbmJveC5wdXNoKHRvZG8pXG4gICAgICAgIGNvbnNvbGUubG9nKGFyckluYm94KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8gKG4pIHtcbiAgICAgICAgYXJySW5ib3guc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyckluYm94KVxuICAgIH1cblxuICAgIGxldCBhcnJQcm9qZWN0ID0gWydJbmJveCddXG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgICAgIGFyclByb2plY3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coYXJyUHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCAobikge1xuICAgICAgICBhcnJQcm9qZWN0LnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJQcm9qZWN0KVxuICAgIH1cblxuICAgIC8qIHJlbW92ZSBwcm9qZWN0IGNsYXNzICYgZnVuY3Rpb25zIC0gYWRkIHByb2plY3QgYXMgdGhpcy5wcm9qZWN0IG9uIHRvZG8gY2xhc3MgKi9cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIGFyckluYm94LFxuICAgICAgICBhcnJQcm9qZWN0LFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0XG4gICAgfVxufSkoKTtcbi8qIG4gd2lsbCBiZSBhc3NpZ25lZCB0byBhIGNvbXBsZXRlICYgZGVsZXRlIGJ1dHRvbiBvbiBlYWNoIHRvZG8gXG4mIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvbiB3aWxsIGRlbGV0ZSB0aGUgcHJvamVjdCAtIGxpa2UgbGlicmFyeS4qL1xuZXhwb3J0IHsgaXRlbXMgfVxuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5jb25zdCBjdXJyZW50VG9kbyA9ICgoKSA9PiB7XG4gICAgLy9hZGQgZGVzaXJlZCB0YWJsZSAmIGFycmF5IHRvIGFkZCBuZXcgdG9kb1xuICAgIGZ1bmN0aW9uIG5ld1RvZG8gKGVsZW1lbnQsIGFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LnJvd3MubGVuZ3RoOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50Lmluc2VydFJvdyhpKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBhcnJheVtpXS5wcm9qZWN0KVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBPYmplY3Qua2V5cyhhcnJheVtpXSkubGVuZ3RoIC0gMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGFycmF5W2ldKVtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluZm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGluZm9CdG4udGV4dENvbnRlbnQgPSAnaSdcblxuICAgICAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gYXJyYXlbaV0uZGVzY3JpcHRpb24gXG4gICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAgICAgbGV0IHZhbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgdmFsMy5hcHBlbmRDaGlsZChpbmZvQnRuKTtcbiAgICAgICAgICAgIHZhbDMuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICAgICAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJ1xuICAgICAgICAgICAgbGV0IHZhbDIgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICB2YWwyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKVxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSAmJiBhcnJheSA9PT0gaXRlbXMuYXJySW5ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlVG9kbygwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheSA9PT0gaXRlbXMuYXJySW5ib3gpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVUb2RvKGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Byb2plY3QgKGVsZW1lbnQsIGFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LnJvd3MubGVuZ3RoICsgMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuaW5zZXJ0Um93KGkgLTEpXG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGkpXG4gICAgXG4gICAgICAgICAgICBsZXQgdmFsID0gcm93Lmluc2VydENlbGwoKVxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnRuLnZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIHZhbC5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBpdGVtcy5hcnJJbmJveC5maWx0ZXIoZnVuY3Rpb24ob25lUHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVQcm9qZWN0LnByb2plY3QgPT0gYXJyYXlbaV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9tRWxlbWVudHMudGFibGVUb2RvLnJvd3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tRWxlbWVudHMudGFibGVUb2RvLnJvd3Nbal0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzW2pdLmF0dHJpYnV0ZXMudmFsdWUubm9kZVZhbHVlICE9PSBhcnJheVtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tRWxlbWVudHMudGFibGVUb2RvLnJvd3Nbal0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGxldCB2YWwyID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHZhbDIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDEgJiYgYXJyYXkgPT09IGl0ZW1zLmFyclByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlUHJvamVjdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheSA9PT0gaXRlbXMuYXJyUHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gc2tpcCAxID0gMCBvciBpdGVtcy5hcnJQcm9qZWN0WzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdUb2RvLFxuICAgICAgICBuZXdQcm9qZWN0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgY3VycmVudFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuL2l0ZW0nXG5pbXBvcnR7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gJy4vbGlzdCdcbi8qaXRlbXMuYWRkUHJvamVjdCgnaGVsbG8nLCdzcXVhcmUnKVxuaXRlbXMuYXJyUHJvamVjdHNbMF0uYWRkVG9MaXN0KCdoZWxsbycsJ3NhbW15JywnMTEnLCdsb3cnKVxuY29uc29sZS5sb2coaXRlbXMuYXJyUHJvamVjdHNbMF0uYXJyYXkpICovXG5cbmRvbUVsZW1lbnRzLmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLmZvcm1Ub2RvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Ub2RvKGRvbUVsZW1lbnRzLnRhYmxlVG9kbyAsIGl0ZW1zLmFyckluYm94KVxuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSBlbHNlIGlmIChkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcblxuZG9tRWxlbWVudHMuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmJ1aWxkRm9ybVByb2plY3QoKVxuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcbi8qIGFjY2VzcyBlYWNoIHByb2plY3QgdG9kbyBhcnJheSBleGFtcGxlIGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5ICovXG5jb25zb2xlLmxvZygndG9kbycpIl0sInNvdXJjZVJvb3QiOiIifQ==