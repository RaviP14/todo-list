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
const domElements = (() => {
    let body = document.querySelector('body');
    let mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';
    body.appendChild(mainDiv);

    let sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    mainDiv.appendChild(sidebar);

    let btnAddTodo = document.createElement('button');
    btnAddTodo.textContent = 'Add Task';
    mainDiv.appendChild(btnAddTodo);

    let tableTodo = document.createElement('table');
    tableTodo.className = 'tableTodo';
    mainDiv.appendChild(tableTodo);

    let formDiv = document.createElement('div');
    formDiv.className = 'formDiv';
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
    }

    return {
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

        addToList(title, description, dueDate, priority) {
            let todo = new todoItem (title, description, dueDate, priority)
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
            for (let j = 0; j < Object.keys(_item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox[i]).length; j++) {
                let val = row.insertCell()
                val.textContent = Object.values(_item__WEBPACK_IMPORTED_MODULE_1__.items.arrInbox[i])[j];
            }
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
    _interface__WEBPACK_IMPORTED_MODULE_1__.domElements.buildFormTodo() //replace with form
    _list__WEBPACK_IMPORTED_MODULE_2__.currentTodo.newTodo();
})

/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEUwQjtBQUNYOztBQUUvQjs7QUFFQTtBQUNBLHFCQUFxQix5RUFBaUMsQ0FBQyxLQUFLLHdEQUFxQixDQUFDO0FBQ2xGLHNCQUFzQix1RUFBK0I7QUFDckQ7QUFDQSwyQkFBMkIsaUJBQWlCLGlEQUFjLFlBQVk7QUFDdEU7QUFDQSxnREFBZ0QsaURBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUNsQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNVO0FBQ0o7QUFDcEM7QUFDQTtBQUNBOztBQUVBLCtFQUF1QztBQUN2QyxJQUFJLGlFQUF5QjtBQUM3QixJQUFJLHNEQUFtQjtBQUN2QixDQUFDOztBQUVEO0FBQ0EsbUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21haW5EaXYnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBsZXQgYnRuQWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFRvZG8udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnRuQWRkVG9kbyk7XG5cbiAgICBsZXQgdGFibGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZVRvZG8uY2xhc3NOYW1lID0gJ3RhYmxlVG9kbyc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0YWJsZVRvZG8pO1xuXG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTmFtZSA9ICdmb3JtRGl2JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvcm1EaXYpXG5cbiAgICBsZXQgZm9ybVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtVG9kbyk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEZvcm1Ub2RvICgpIHtcbiAgICAgICAgbGV0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZXhpdC5jbGFzc05hbWUgPSAnZXhpdEZvcm0nO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChleGl0KTtcblxuICAgICAgICBsZXQgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgbmFtZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSdEZXNjcmlwdGlvbjonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgbmFtZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGF0ZSk7XG5cbiAgICAgICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGF0ZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICAgIGxldCBuYW1lUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lUHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBhcnJQcmlvcml0eSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J11cblxuICAgICAgICBsZXQgc2VsZWN0UHJpb3JpcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9ICAwOyBpIDwgYXJyUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBzZWxlY3RQcmlvcmlydHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXJ0eSk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdEZvcm0nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgLyogbmVlZCB0byByZXRyaWV2ZSBkYXRhIGZyb20gaW5wdXQgJiBydW4gbmV3IHRvZG8gKi9cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YWJsZVRvZG8sXG4gICAgICAgIGJ0bkFkZFRvZG8sXG4gICAgICAgIGJ1aWxkRm9ybVRvZG9cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVtZW50cyB9IiwiY29uc3QgaXRlbXMgPSAoKCkgPT4ge1xuICAgIGNsYXNzIHRvZG9JdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyckluYm94ID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIGFyckluYm94LnB1c2godG9kbylcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAobikge1xuICAgICAgICBhcnJJbmJveC5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuICAgIFxuICAgIGNsYXNzIHByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdGhpcy5hcnJheSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0KGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChpdGVtKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IG5ldyB0b2RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICAgICAgICAgIHRoaXMubGlzdCh0b2RvKVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlRnJvbUxpc3Qobikge1xuICAgICAgICAgICAgdGhpcy5hcnJheS5zcGxpY2UobiwgMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFyclByb2plY3RzID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QgKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IG5ldyBwcm9qZWN0IChuYW1lLCBkZXNjcmlwdGlvbilcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIGFyclByb2plY3RzLnB1c2gocHJvamVjdHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuKSB7XG4gICAgICAgIGFyclByb2plY3RzLnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJQcm9qZWN0cylcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBkZWxldGVUb2RvLFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgICAgICBhcnJJbmJveCxcbiAgICAgICAgYXJyUHJvamVjdHNcbiAgICB9XG59KSgpO1xuLyogbiB3aWxsIGJlIGFzc2lnbmVkIHRvIGEgY29tcGxldGUgJiBkZWxldGUgYnV0dG9uIG9uIGVhY2ggdG9kbyBcbiYgZGVsZXRlIHByb2plY3QgYnV0dG9uIHdpbGwgZGVsZXRlIHRoZSBwcm9qZWN0IC0gbGlrZSBsaWJyYXJ5LiovXG5leHBvcnQgeyBpdGVtcyB9XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNvbnN0IGN1cnJlbnRUb2RvID0gKCgpID0+IHtcbiAgICBcbiAgICBmdW5jdGlvbiBuZXdUb2RvICgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLnRhYmxlVG9kby5yb3dzLmxlbmd0aDsgaSA8IGl0ZW1zLmFyckluYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gZG9tRWxlbWVudHMudGFibGVUb2RvLmluc2VydFJvdyhpKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBPYmplY3Qua2V5cyhpdGVtcy5hcnJJbmJveFtpXSkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcm93Lmluc2VydENlbGwoKVxuICAgICAgICAgICAgICAgIHZhbC50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMoaXRlbXMuYXJySW5ib3hbaV0pW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1RvZG9cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBjdXJyZW50VG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4vaXRlbSdcbmltcG9ydHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2ludGVyZmFjZSdcbmltcG9ydCB7IGN1cnJlbnRUb2RvIH0gZnJvbSAnLi9saXN0J1xuLyppdGVtcy5hZGRQcm9qZWN0KCdoZWxsbycsJ3NxdWFyZScpXG5pdGVtcy5hcnJQcm9qZWN0c1swXS5hZGRUb0xpc3QoJ2hlbGxvJywnc2FtbXknLCcxMScsJ2xvdycpXG5jb25zb2xlLmxvZyhpdGVtcy5hcnJQcm9qZWN0c1swXS5hcnJheSkgKi9cblxuZG9tRWxlbWVudHMuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Ub2RvKCkgLy9yZXBsYWNlIHdpdGggZm9ybVxuICAgIGN1cnJlbnRUb2RvLm5ld1RvZG8oKTtcbn0pXG5cbi8qIGFjY2VzcyBlYWNoIHByb2plY3QgdG9kbyBhcnJheSBleGFtcGxlIGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5ICovXG5jb25zb2xlLmxvZygndG9kbycpIl0sInNvdXJjZVJvb3QiOiIifQ==