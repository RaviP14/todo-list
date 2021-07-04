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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFtQjtBQUNuQztBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RTBCO0FBQ1g7O0FBRS9COztBQUVBO0FBQ0EscUJBQXFCLHlFQUFpQyxDQUFDLEtBQUssd0RBQXFCLENBQUM7QUFDbEYsc0JBQXNCLHVFQUErQjtBQUNyRDtBQUNBLDJCQUEyQixpQkFBaUIsaURBQWMsWUFBWTtBQUN0RTtBQUNBLGdEQUFnRCxpREFBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ2xCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1U7QUFDSjtBQUNwQztBQUNBO0FBQ0E7O0FBRUEsK0VBQXVDO0FBQ3ZDLFFBQVEsbUVBQTJCO0FBQ25DLFFBQVEsaUVBQXlCO0FBQ2pDLEtBQUssVUFBVSx5RUFBaUM7QUFDaEQsUUFBUSx5RUFBaUM7QUFDekM7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgZG9tRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbWFpbkRpdic7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGxldCBidG5BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVG9kby50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidG5BZGRUb2RvKTtcblxuICAgIGxldCB0YWJsZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlVG9kby5jbGFzc05hbWUgPSAndGFibGVUb2RvJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRhYmxlVG9kbyk7XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NOYW1lID0gJ2Zvcm1EaXYnO1xuICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtRGl2KVxuXG4gICAgbGV0IGZvcm1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVRvZG8pO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRGb3JtVG9kbyAoKSB7XG4gICAgICAgIGxldCBleGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGV4aXQuY2xhc3NOYW1lID0gJ2V4aXRGb3JtJztcbiAgICAgICAgZXhpdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoZXhpdCk7XG5cbiAgICAgICAgbGV0IG5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZVRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZVRpdGxlKTtcblxuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0VGl0bGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IG5hbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0nRGVzY3JpcHRpb246J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IG5hbWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZURhdGUpO1xuXG4gICAgICAgIGxldCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERhdGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgICAgICBsZXQgbmFtZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZVByaW9yaXR5KTtcblxuICAgICAgICBsZXQgYXJyUHJpb3JpdHkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddXG5cbiAgICAgICAgbGV0IHNlbGVjdFByaW9yaXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAgMDsgaSA8IGFyclByaW9yaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBhcnJQcmlvcml0eVtpXTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgc2VsZWN0UHJpb3JpcnR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcmlydHkpO1xuXG4gICAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LmNsYXNzTmFtZSA9ICdzdWJtaXRGb3JtJztcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIC8qIG5lZWQgdG8gcmV0cmlldmUgZGF0YSBmcm9tIGlucHV0ICYgcnVuIG5ldyB0b2RvICovXG5cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dFRpdGxlLnZhbHVlICE9PSAnJyAmJiBpbnB1dERhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MSA9IGlucHV0VGl0bGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQyID0gaW5wdXREYXRlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MyA9IHNlbGVjdFByaW9yaXJ0eS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDQgPSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgaXRlbXMuYWRkVG9kbyhpbnB1dDEsIGlucHV0MiwgaW5wdXQzLCBpbnB1dDQpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5uZXdUb2RvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1EaXYsXG4gICAgICAgIGZvcm1Ub2RvLFxuICAgICAgICB0YWJsZVRvZG8sXG4gICAgICAgIGJ0bkFkZFRvZG8sXG4gICAgICAgIGJ1aWxkRm9ybVRvZG9cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVtZW50cyB9IiwiY29uc3QgaXRlbXMgPSAoKCkgPT4ge1xuICAgIGNsYXNzIHRvZG9JdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyckluYm94ID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIGFyckluYm94LnB1c2godG9kbylcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAobikge1xuICAgICAgICBhcnJJbmJveC5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuICAgIFxuICAgIGNsYXNzIHByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdGhpcy5hcnJheSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0KGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChpdGVtKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvTGlzdCh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gbmV3IHRvZG9JdGVtICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgdGhpcy5saXN0KHRvZG8pXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVGcm9tTGlzdChuKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnNwbGljZShuLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgYXJyUHJvamVjdHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gbmV3IHByb2plY3QgKG5hbWUsIGRlc2NyaXB0aW9uKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgYXJyUHJvamVjdHMucHVzaChwcm9qZWN0cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KG4pIHtcbiAgICAgICAgYXJyUHJvamVjdHMuc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyclByb2plY3RzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGFyckluYm94LFxuICAgICAgICBhcnJQcm9qZWN0c1xuICAgIH1cbn0pKCk7XG4vKiBuIHdpbGwgYmUgYXNzaWduZWQgdG8gYSBjb21wbGV0ZSAmIGRlbGV0ZSBidXR0b24gb24gZWFjaCB0b2RvIFxuJiBkZWxldGUgcHJvamVjdCBidXR0b24gd2lsbCBkZWxldGUgdGhlIHByb2plY3QgLSBsaWtlIGxpYnJhcnkuKi9cbmV4cG9ydCB7IGl0ZW1zIH1cbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuL2l0ZW1cIjtcblxuY29uc3QgY3VycmVudFRvZG8gPSAoKCkgPT4ge1xuICAgIFxuICAgIGZ1bmN0aW9uIG5ld1RvZG8gKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMudGFibGVUb2RvLnJvd3MubGVuZ3RoOyBpIDwgaXRlbXMuYXJySW5ib3gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb21FbGVtZW50cy50YWJsZVRvZG8uaW5zZXJ0Um93KGkpXG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGkpXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE9iamVjdC5rZXlzKGl0ZW1zLmFyckluYm94W2ldKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyhpdGVtcy5hcnJJbmJveFtpXSlbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3VG9kb1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGN1cnJlbnRUb2RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi9pdGVtJ1xuaW1wb3J0eyBkb21FbGVtZW50cyB9IGZyb20gJy4vaW50ZXJmYWNlJ1xuaW1wb3J0IHsgY3VycmVudFRvZG8gfSBmcm9tICcuL2xpc3QnXG4vKml0ZW1zLmFkZFByb2plY3QoJ2hlbGxvJywnc3F1YXJlJylcbml0ZW1zLmFyclByb2plY3RzWzBdLmFkZFRvTGlzdCgnaGVsbG8nLCdzYW1teScsJzExJywnbG93JylcbmNvbnNvbGUubG9nKGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5KSAqL1xuXG5kb21FbGVtZW50cy5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb21FbGVtZW50cy5mb3JtVG9kby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZG9tRWxlbWVudHMuYnVpbGRGb3JtVG9kbygpIC8vcmVwbGFjZSB3aXRoIGZvcm1cbiAgICB9IGVsc2UgaWYgKGRvbUVsZW1lbnRzLmZvcm1EaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9XG59KVxuLyogYWNjZXNzIGVhY2ggcHJvamVjdCB0b2RvIGFycmF5IGV4YW1wbGUgaXRlbXMuYXJyUHJvamVjdHNbMF0uYXJyYXkgKi9cbmNvbnNvbGUubG9nKCd0b2RvJykiXSwic291cmNlUm9vdCI6IiJ9