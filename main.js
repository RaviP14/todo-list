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
            btn.textContent = array[i];
            val.appendChild(btn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdC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Q25DLFFBQVEsaUVBQXlCLENBQUMsNkRBQXFCLEdBQUcsaURBQWM7QUFDeEUsUUFBUSx5RUFBaUM7QUFDekMsS0FBSyxVQUFVLHlFQUFpQztBQUNoRCxRQUFRLHlFQUFpQztBQUN6QztBQUNBLENBQUM7O0FBRUQsa0ZBQTBDO0FBQzFDLFFBQVEsc0VBQThCO0FBQ3RDLFFBQVEsb0VBQTRCO0FBQ3BDLEtBQUssVUFBVSxnRkFBd0M7QUFDdkQsUUFBUSxnRkFBd0M7QUFDaEQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgZG9tRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbWFpbkRpdic7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGxldCBpbmJveEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGluYm94QnRuLmNsYXNzTmFtZSA9ICdpbmJveEJ0bic7XG4gICAgaW5ib3hCdG4udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaW5ib3hCdG4pO1xuXG4gICAgbGV0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kYXlCdG4uY2xhc3NOYW1lID0gJ3RvZGF5QnRuJztcbiAgICB0b2RheUJ0bi50ZXh0Q29udGVudCA9ICdUb2RheSdcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcblxuICAgIGxldCB0aGlzV2Vla0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXNXZWVrQnRuLmNsYXNzTmFtZSA9ICd0aGlzV2Vla0J0bidcbiAgICB0aGlzV2Vla0J0bi50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0aGlzV2Vla0J0bik7XG5cbiAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgbGV0IHRhYmxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFibGVQcm9qZWN0LmNsYXNzTmFtZSA9ICd0YWJsZXByb2plY3RzJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGFibGVQcm9qZWN0KVxuXG4gICAgbGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnRuQWRkUHJvamVjdCk7XG5cbiAgICBsZXQgYnRuQWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFRvZG8udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnRuQWRkVG9kbyk7XG5cbiAgICBsZXQgdGFibGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZVRvZG8uY2xhc3NOYW1lID0gJ3RhYmxlVG9kbyc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0YWJsZVRvZG8pO1xuXG4gICAgbGV0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTmFtZSA9ICdmb3JtRGl2JztcbiAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZm9ybURpdilcblxuICAgIGxldCBmb3JtVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1Ub2RvKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRm9ybVRvZG8gKHRhYmxlcywgYXJyYXlzKSB7XG4gICAgICAgIGxldCBleGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGV4aXQuY2xhc3NOYW1lID0gJ2V4aXRGb3JtJztcbiAgICAgICAgZXhpdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoZXhpdCk7XG5cbiAgICAgICAgbGV0IG5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZVRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZVRpdGxlKTtcblxuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0VGl0bGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IG5hbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0nRGVzY3JpcHRpb246J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IG5hbWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGF0ZS50ZXh0Q29udGVudCA9ICdEYXRlOidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZURhdGUpO1xuXG4gICAgICAgIGxldCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERhdGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgICAgICBsZXQgbmFtZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZVByaW9yaXR5KTtcblxuICAgICAgICBsZXQgYXJyUHJpb3JpdHkgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddXG5cbiAgICAgICAgbGV0IHNlbGVjdFByaW9yaXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAgMDsgaSA8IGFyclByaW9yaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBhcnJQcmlvcml0eVtpXTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgc2VsZWN0UHJpb3JpcnR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcmlydHkpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5hbWVDaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lQ2hvb3NlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDaG9vc2UgUHJvamVjdCc7XG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVDaG9vc2VQcm9qZWN0KTtcblxuICAgICAgICBsZXQgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAgMDsgaiA8IGl0ZW1zLmFyclByb2plY3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW1zLmFyclByb2plY3Rbal07XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtcy5hcnJQcm9qZWN0W2pdO1xuICAgICAgICAgICAgY2hvb3NlUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoY2hvb3NlUHJvamVjdCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdEZvcm0nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0VGl0bGUudmFsdWUgIT09ICcnICYmIGlucHV0RGF0ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQxID0gaW5wdXRUaXRsZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDIgPSBpbnB1dERhdGUudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQzID0gc2VsZWN0UHJpb3JpcnR5LnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0NCA9IGlucHV0RGVzY3JpcHRpb24udmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQ1ID0gY2hvb3NlUHJvamVjdC52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNob29zZVByb2plY3QudmFsdWUpXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5cyA9IGl0ZW1zLmFyckluYm94KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmFkZFRvZG8oaW5wdXQxLCBpbnB1dDIsIGlucHV0MywgaW5wdXQ0LCBpbnB1dDUpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRvZG8ubmV3VG9kbyh0YWJsZXMsIGFycmF5cylcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAvKiBQcm9qZWN0cyBhcmVuJ3QgYWRkZWQgb24gb25jZSBmb3JtIGlzIGJ1aWx0LFxuICAgICAgICBuZWVkIHRvIGRlbGV0ZSAmIHJlYnVpbGQgZm9ybSBldmVyeXRpbWUgcHJvamVjdCBpcyBhZGRlZCAmIGRlbGV0ZWRcbiAgICAgICAgY2hlY2sgcmVzdGF1cmFudCBwYWdlLiAqLyBcblxuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvcm1Ub2RvLnJlc2V0KCk7XG4gICAgICAgICAgICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NOYW1lID0gJ3Byb2plY3RGb3JtRGl2JztcbiAgICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcblxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICBmdW5jdGlvbiBidWlsZEZvcm1Qcm9qZWN0KCkge1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0UHJvamVjdFRpdGxlLmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdFRpdGxlKTtcblxuICAgICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbC5jbGFzc05hbWUgPSAnQ2FuY2VsJztcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC5jbGFzc05hbWUgPSAnc3VibWl0Rm9ybSc7XG4gICAgICAgIHN1Ym1pdFByb2plY3QudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdCk7XG5cbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuXG4gICAgICAgIHN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0UHJvamVjdFRpdGxlLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDEgPSBpbnB1dFByb2plY3RUaXRsZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zLmFkZFByb2plY3QoaW5wdXQxKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUb2RvLm5ld1Byb2plY3QoZG9tRWxlbWVudHMudGFibGVQcm9qZWN0LCBpdGVtcy5hcnJQcm9qZWN0KVxuICAgICAgICAgICAgICAgIHJlbW92ZUZvcm0oKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm0gKCl7XG4gICAgICAgIHdoaWxlIChmb3JtVG9kby5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIGZvcm1Ub2RvLnJlbW92ZUNoaWxkKGZvcm1Ub2RvLmZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybURpdixcbiAgICAgICAgZm9ybVRvZG8sXG4gICAgICAgIHRhYmxlVG9kbyxcbiAgICAgICAgYnRuQWRkVG9kbyxcbiAgICAgICAgYnVpbGRGb3JtVG9kbyxcbiAgICAgICAgYnRuQWRkUHJvamVjdCxcbiAgICAgICAgYnVpbGRGb3JtUHJvamVjdCxcbiAgICAgICAgdGFibGVQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0Rm9ybURpdixcbiAgICAgICAgcHJvamVjdEZvcm1cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVtZW50cyB9IiwiY29uc3QgaXRlbXMgPSAoKCkgPT4ge1xuICAgIGNsYXNzIHRvZG9JdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyckluYm94ID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIHByb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIGFyckluYm94LnB1c2godG9kbylcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyAobikge1xuICAgICAgICBhcnJJbmJveC5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJySW5ib3gpXG4gICAgfVxuXG4gICAgbGV0IGFyclByb2plY3QgPSBbJ0luYm94J11cblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QgKHByb2plY3QpIHtcbiAgICAgICAgYXJyUHJvamVjdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0IChuKSB7XG4gICAgICAgIGFyclByb2plY3Quc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyclByb2plY3QpXG4gICAgfVxuXG4gICAgLyogcmVtb3ZlIHByb2plY3QgY2xhc3MgJiBmdW5jdGlvbnMgLSBhZGQgcHJvamVjdCBhcyB0aGlzLnByb2plY3Qgb24gdG9kbyBjbGFzcyAqL1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYXJySW5ib3gsXG4gICAgICAgIGFyclByb2plY3QsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3RcbiAgICB9XG59KSgpO1xuLyogbiB3aWxsIGJlIGFzc2lnbmVkIHRvIGEgY29tcGxldGUgJiBkZWxldGUgYnV0dG9uIG9uIGVhY2ggdG9kbyBcbiYgZGVsZXRlIHByb2plY3QgYnV0dG9uIHdpbGwgZGVsZXRlIHRoZSBwcm9qZWN0IC0gbGlrZSBsaWJyYXJ5LiovXG5leHBvcnQgeyBpdGVtcyB9XG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNvbnN0IGN1cnJlbnRUb2RvID0gKCgpID0+IHtcbiAgICAvL2FkZCBkZXNpcmVkIHRhYmxlICYgYXJyYXkgdG8gYWRkIG5ldyB0b2RvXG4gICAgZnVuY3Rpb24gbmV3VG9kbyAoZWxlbWVudCwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQucm93cy5sZW5ndGg7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGVsZW1lbnQuaW5zZXJ0Um93KGkpXG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGkpXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE9iamVjdC5rZXlzKGFycmF5W2ldKS5sZW5ndGggLSAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gcm93Lmluc2VydENlbGwoKVxuICAgICAgICAgICAgICAgIHZhbC50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMoYXJyYXlbaV0pW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaW5mb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgaW5mb0J0bi50ZXh0Q29udGVudCA9ICdpJ1xuXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBhcnJheVtpXS5kZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAgICAgICBsZXQgdmFsMyA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB2YWwzLmFwcGVuZENoaWxkKGluZm9CdG4pO1xuICAgICAgICAgICAgdmFsMy5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgICAgIGluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnXG4gICAgICAgICAgICBsZXQgdmFsMiA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgIHZhbDIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxICYmIGFycmF5ID09PSBpdGVtcy5hcnJJbmJveCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVUb2RvKDApO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdygwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5ID09PSBpdGVtcy5hcnJJbmJveCl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZVRvZG8oaSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsZXRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3UHJvamVjdCAoZWxlbWVudCwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQucm93cy5sZW5ndGggKyAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5pbnNlcnRSb3coaSAtMSlcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgaSlcbiAgICBcbiAgICAgICAgICAgIGxldCB2YWwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIHZhbC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGxldCB2YWwyID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHZhbDIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDEgJiYgYXJyYXkgPT09IGl0ZW1zLmFyclByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlUHJvamVjdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheSA9PT0gaXRlbXMuYXJyUHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gc2tpcCAxID0gMCBvciBpdGVtcy5hcnJQcm9qZWN0WzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdUb2RvLFxuICAgICAgICBuZXdQcm9qZWN0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgY3VycmVudFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuL2l0ZW0nXG5pbXBvcnR7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gJy4vbGlzdCdcbi8qaXRlbXMuYWRkUHJvamVjdCgnaGVsbG8nLCdzcXVhcmUnKVxuaXRlbXMuYXJyUHJvamVjdHNbMF0uYWRkVG9MaXN0KCdoZWxsbycsJ3NhbW15JywnMTEnLCdsb3cnKVxuY29uc29sZS5sb2coaXRlbXMuYXJyUHJvamVjdHNbMF0uYXJyYXkpICovXG5cbmRvbUVsZW1lbnRzLmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLmZvcm1Ub2RvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Ub2RvKGRvbUVsZW1lbnRzLnRhYmxlVG9kbyAsIGl0ZW1zLmFyckluYm94KVxuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSBlbHNlIGlmIChkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcblxuZG9tRWxlbWVudHMuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmJ1aWxkRm9ybVByb2plY3QoKVxuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcbi8qIGFjY2VzcyBlYWNoIHByb2plY3QgdG9kbyBhcnJheSBleGFtcGxlIGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5ICovXG5jb25zb2xlLmxvZygndG9kbycpIl0sInNvdXJjZVJvb3QiOiIifQ==