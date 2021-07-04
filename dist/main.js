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
                _list__WEBPACK_IMPORTED_MODULE_1__.currentTodo.newTodo()
            }
        })

        exit.addEventListener('click', (e) => {
            e.preventDefault();
            formTodo.reset();
            formDiv.style.display = 'none';
        })
    }
    
    return {
        formDiv,
        formTodo,
        tableTodo,
        btnAddTodo,
        buildFormTodo
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
    
    function newTodo () {
        for (let i = _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows.length; i < _item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox.length; i++) {
            let row = _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.insertRow(i)
            row.setAttribute('data-key', i)
            for (let j = 0; j < Object.keys(_item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox[i]).length - 1; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(_item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox[i])[j];
            }

            let infoBtn = document.createElement('button');
            infoBtn.textContent = 'i'

            let info = document.createElement('span');
            info.textContent = _item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox[i].description 
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
                _item__WEBPACK_IMPORTED_MODULE_1__.items.deleteTodo(i);
                _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.deleteRow(i);
            })
        }
    }
    return {
        newTodo
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
/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFtQjtBQUNuQztBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdElEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RTBCO0FBQ1g7O0FBRS9COztBQUVBO0FBQ0EscUJBQXFCLHlFQUFpQyxDQUFDLEtBQUssd0RBQXFCLENBQUM7QUFDbEYsc0JBQXNCLHVFQUErQjtBQUNyRDtBQUNBLDJCQUEyQixpQkFBaUIsaURBQWMsZ0JBQWdCO0FBQzFFO0FBQ0EsZ0RBQWdELGlEQUFjO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsaURBQWM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFnQjtBQUNoQyxnQkFBZ0IsdUVBQStCO0FBQy9DLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUM1Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNVO0FBQ0o7QUFDcEM7QUFDQTtBQUNBOztBQUVBLCtFQUF1QztBQUN2QyxRQUFRLG1FQUEyQjtBQUNuQyxRQUFRLGlFQUF5QjtBQUNqQyxLQUFLLFVBQVUseUVBQWlDO0FBQ2hELFFBQVEseUVBQWlDO0FBQ3pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgY3VycmVudFRvZG8gfSBmcm9tIFwiLi9saXN0XCI7XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21haW5EaXYnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBsZXQgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveEJ0bi5jbGFzc05hbWUgPSAnaW5ib3hCdG4nO1xuICAgIGluYm94QnRuLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGluYm94QnRuKTtcblxuICAgIGxldCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5QnRuLmNsYXNzTmFtZSA9ICd0b2RheUJ0bic7XG4gICAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSAnVG9kYXknXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG5cbiAgICBsZXQgdGhpc1dlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzV2Vla0J0bi5jbGFzc05hbWUgPSAndGhpc1dlZWtCdG4nXG4gICAgdGhpc1dlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGhpc1dlZWtCdG4pO1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuXG4gICAgbGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnRuQWRkUHJvamVjdCk7XG5cbiAgICBsZXQgYnRuQWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFRvZG8udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnRuQWRkVG9kbyk7XG5cbiAgICBsZXQgdGFibGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZVRvZG8uY2xhc3NOYW1lID0gJ3RhYmxlVG9kbyc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0YWJsZVRvZG8pO1xuXG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTmFtZSA9ICdmb3JtRGl2JztcbiAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZm9ybURpdilcblxuICAgIGxldCBmb3JtVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1Ub2RvKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRm9ybVRvZG8gKCkge1xuICAgICAgICBsZXQgZXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBleGl0LmNsYXNzTmFtZSA9ICdleGl0Rm9ybSc7XG4gICAgICAgIGV4aXQudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGV4aXQpO1xuXG4gICAgICAgIGxldCBuYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVUaXRsZSk7XG5cbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dFRpdGxlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGxldCBuYW1lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9J0Rlc2NyaXB0aW9uOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZURlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBuYW1lRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZURhdGUudGV4dENvbnRlbnQgPSAnRGF0ZTonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEYXRlKTtcblxuICAgICAgICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXREYXRlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICAgICAgbGV0IG5hbWVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZVByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVQcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IGFyclByaW9yaXR5ID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXVxuXG4gICAgICAgIGxldCBzZWxlY3RQcmlvcmlydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gIDA7IGkgPCBhcnJQcmlvcml0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBhcnJQcmlvcml0eVtpXTtcbiAgICAgICAgICAgIHNlbGVjdFByaW9yaXJ0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoc2VsZWN0UHJpb3JpcnR5KTtcblxuICAgICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc05hbWUgPSAnc3VibWl0Rm9ybSc7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICAvKiBuZWVkIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBpbnB1dCAmIHJ1biBuZXcgdG9kbyAqL1xuXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSAhPT0gJycgJiYgaW5wdXREYXRlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDEgPSBpbnB1dFRpdGxlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MiA9IGlucHV0RGF0ZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDMgPSBzZWxlY3RQcmlvcmlydHkudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQ0ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zLmFkZFRvZG8oaW5wdXQxLCBpbnB1dDIsIGlucHV0MywgaW5wdXQ0KTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZm9ybVRvZG8ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgY3VycmVudFRvZG8ubmV3VG9kbygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtRGl2LFxuICAgICAgICBmb3JtVG9kbyxcbiAgICAgICAgdGFibGVUb2RvLFxuICAgICAgICBidG5BZGRUb2RvLFxuICAgICAgICBidWlsZEZvcm1Ub2RvXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgZG9tRWxlbWVudHMgfSIsImNvbnN0IGl0ZW1zID0gKCgpID0+IHtcbiAgICBjbGFzcyB0b2RvSXRlbSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhcnJJbmJveCA9IFtdXG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IHRvZG9JdGVtICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKVxuICAgICAgICBhcnJJbmJveC5wdXNoKHRvZG8pXG4gICAgICAgIGNvbnNvbGUubG9nKGFyckluYm94KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8gKG4pIHtcbiAgICAgICAgYXJySW5ib3guc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyckluYm94KVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBwcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IgKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRoaXMuYXJyYXkgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGlzdChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXkpXG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb0xpc3QodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IG5ldyB0b2RvSXRlbSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIHRoaXMubGlzdCh0b2RvKVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlRnJvbUxpc3Qobikge1xuICAgICAgICAgICAgdGhpcy5hcnJheS5zcGxpY2UobiwgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFyclByb2plY3RzID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QgKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IG5ldyBwcm9qZWN0IChuYW1lLCBkZXNjcmlwdGlvbilcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIGFyclByb2plY3RzLnB1c2gocHJvamVjdHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuKSB7XG4gICAgICAgIGFyclByb2plY3RzLnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJQcm9qZWN0cylcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBkZWxldGVUb2RvLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBhcnJJbmJveCxcbiAgICAgICAgYXJyUHJvamVjdHNcbiAgICB9XG59KSgpO1xuLyogbiB3aWxsIGJlIGFzc2lnbmVkIHRvIGEgY29tcGxldGUgJiBkZWxldGUgYnV0dG9uIG9uIGVhY2ggdG9kbyBcbiYgZGVsZXRlIHByb2plY3QgYnV0dG9uIHdpbGwgZGVsZXRlIHRoZSBwcm9qZWN0IC0gbGlrZSBsaWJyYXJ5LiovXG5leHBvcnQgeyBpdGVtcyB9XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNvbnN0IGN1cnJlbnRUb2RvID0gKCgpID0+IHtcbiAgICBcbiAgICBmdW5jdGlvbiBuZXdUb2RvICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzLmxlbmd0aDsgaSA8IGl0ZW1zLmFyckluYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9tRWxlbWVudHMudGFibGVUb2RvLmluc2VydFJvdyhpKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBPYmplY3Qua2V5cyhpdGVtcy5hcnJJbmJveFtpXSkubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGl0ZW1zLmFyckluYm94W2ldKVtqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluZm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGluZm9CdG4udGV4dENvbnRlbnQgPSAnaSdcblxuICAgICAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gaXRlbXMuYXJySW5ib3hbaV0uZGVzY3JpcHRpb24gXG4gICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgICAgICAgbGV0IHZhbDMgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgdmFsMy5hcHBlbmRDaGlsZChpbmZvQnRuKTtcbiAgICAgICAgICAgIHZhbDMuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICAgICAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJ1xuICAgICAgICAgICAgbGV0IHZhbDIgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICB2YWwyLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKVxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlVG9kbyhpKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50cy50YWJsZVRvZG8uZGVsZXRlUm93KGkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdUb2RvXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgY3VycmVudFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuL2l0ZW0nXG5pbXBvcnR7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gJy4vbGlzdCdcbi8qaXRlbXMuYWRkUHJvamVjdCgnaGVsbG8nLCdzcXVhcmUnKVxuaXRlbXMuYXJyUHJvamVjdHNbMF0uYWRkVG9MaXN0KCdoZWxsbycsJ3NhbW15JywnMTEnLCdsb3cnKVxuY29uc29sZS5sb2coaXRlbXMuYXJyUHJvamVjdHNbMF0uYXJyYXkpICovXG5cbmRvbUVsZW1lbnRzLmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLmZvcm1Ub2RvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Ub2RvKCkgLy9yZXBsYWNlIHdpdGggZm9ybVxuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMuZm9ybURpdi5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgZG9tRWxlbWVudHMuZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbn0pXG4vKiBhY2Nlc3MgZWFjaCBwcm9qZWN0IHRvZG8gYXJyYXkgZXhhbXBsZSBpdGVtcy5hcnJQcm9qZWN0c1swXS5hcnJheSAqL1xuY29uc29sZS5sb2coJ3RvZG8nKSJdLCJzb3VyY2VSb290IjoiIn0=