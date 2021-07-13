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
                //filter table using row value.
                for (let j = 0; j < _interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows.length; j++) {
                    console.log(_interface__WEBPACK_IMPORTED_MODULE_0__.domElements.tableTodo.rows[j])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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O1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDVTtBQUNKO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSwrRUFBdUM7QUFDdkMsUUFBUSxtRUFBMkI7QUFDbkMsUUFBUSxpRUFBeUIsQ0FBQyw2REFBcUIsR0FBRyxpREFBYztBQUN4RSxRQUFRLHlFQUFpQztBQUN6QyxLQUFLLFVBQVUseUVBQWlDO0FBQ2hELFFBQVEseUVBQWlDO0FBQ3pDO0FBQ0EsQ0FBQzs7QUFFRCxrRkFBMEM7QUFDMUMsUUFBUSxzRUFBOEI7QUFDdEMsUUFBUSxvRUFBNEI7QUFDcEMsS0FBSyxVQUFVLGdGQUF3QztBQUN2RCxRQUFRLGdGQUF3QztBQUNoRDtBQUNBLENBQUM7QUFDRDtBQUNBLG1CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IGN1cnJlbnRUb2RvIH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5jb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtYWluRGl2JztcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgbGV0IGluYm94QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5ib3hCdG4uY2xhc3NOYW1lID0gJ2luYm94QnRuJztcbiAgICBpbmJveEJ0bi50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbmJveEJ0bik7XG5cbiAgICBsZXQgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RheUJ0bi5jbGFzc05hbWUgPSAndG9kYXlCdG4nO1xuICAgIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuXG4gICAgbGV0IHRoaXNXZWVrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpc1dlZWtCdG4uY2xhc3NOYW1lID0gJ3RoaXNXZWVrQnRuJ1xuICAgIHRoaXNXZWVrQnRuLnRleHRDb250ZW50ID0gJ1RoaXMgV2VlaydcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRoaXNXZWVrQnRuKTtcblxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBsZXQgdGFibGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZVByb2plY3QuY2xhc3NOYW1lID0gJ3RhYmxlcHJvamVjdHMnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0YWJsZVByb2plY3QpXG5cbiAgICBsZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidG5BZGRQcm9qZWN0KTtcblxuICAgIGxldCBidG5BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQWRkVG9kby50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChidG5BZGRUb2RvKTtcblxuICAgIGxldCB0YWJsZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhYmxlVG9kby5jbGFzc05hbWUgPSAndGFibGVUb2RvJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRhYmxlVG9kbyk7XG5cbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1EaXYuY2xhc3NOYW1lID0gJ2Zvcm1EaXYnO1xuICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb3JtRGl2KVxuXG4gICAgbGV0IGZvcm1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVRvZG8pO1xuXG4gICAgZnVuY3Rpb24gYnVpbGRGb3JtVG9kbyAodGFibGVzLCBhcnJheXMpIHtcbiAgICAgICAgbGV0IGV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZXhpdC5jbGFzc05hbWUgPSAnZXhpdEZvcm0nO1xuICAgICAgICBleGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChleGl0KTtcblxuICAgICAgICBsZXQgbmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lVGl0bGUpO1xuXG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgbmFtZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBuYW1lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSdEZXNjcmlwdGlvbjonXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKG5hbWVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgbmFtZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6J1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lRGF0ZSk7XG5cbiAgICAgICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgIGlucHV0RGF0ZS5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICAgIGxldCBuYW1lUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChuYW1lUHJpb3JpdHkpO1xuXG4gICAgICAgIGxldCBhcnJQcmlvcml0eSA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J11cblxuICAgICAgICBsZXQgc2VsZWN0UHJpb3JpcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9ICAwOyBpIDwgYXJyUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGFyclByaW9yaXR5W2ldO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYXJyUHJpb3JpdHlbaV07XG4gICAgICAgICAgICBzZWxlY3RQcmlvcmlydHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Ub2RvLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXJ0eSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmFtZUNob29zZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVDaG9vc2VQcm9qZWN0LnRleHRDb250ZW50ID0gJ0Nob29zZSBQcm9qZWN0JztcbiAgICAgICAgZm9ybVRvZG8uYXBwZW5kQ2hpbGQobmFtZUNob29zZVByb2plY3QpO1xuXG4gICAgICAgIGxldCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9ICAwOyBqIDwgaXRlbXMuYXJyUHJvamVjdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbXMuYXJyUHJvamVjdFtqXTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1zLmFyclByb2plY3Rbal07XG4gICAgICAgICAgICBjaG9vc2VQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChjaG9vc2VQcm9qZWN0KTtcblxuICAgICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5jbGFzc05hbWUgPSAnc3VibWl0Rm9ybSc7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBmb3JtVG9kby5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSAhPT0gJycgJiYgaW5wdXREYXRlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDEgPSBpbnB1dFRpdGxlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MiA9IGlucHV0RGF0ZS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDMgPSBzZWxlY3RQcmlvcmlydHkudmFsdWUuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQ0ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dDUgPSBjaG9vc2VQcm9qZWN0LnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hvb3NlUHJvamVjdC52YWx1ZSlcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlzID0gaXRlbXMuYXJySW5ib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuYWRkVG9kbyhpbnB1dDEsIGlucHV0MiwgaW5wdXQzLCBpbnB1dDQsIGlucHV0NSk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVRvZG8ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9kby5uZXdUb2RvKHRhYmxlcywgYXJyYXlzKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIC8qIFByb2plY3RzIGFyZW4ndCBhZGRlZCBvbiBvbmNlIGZvcm0gaXMgYnVpbHQsXG4gICAgICAgIG5lZWQgdG8gZGVsZXRlICYgcmVidWlsZCBmb3JtIGV2ZXJ5dGltZSBwcm9qZWN0IGlzIGFkZGVkICYgZGVsZXRlZFxuICAgICAgICBjaGVjayByZXN0YXVyYW50IHBhZ2UuICovIFxuXG4gICAgICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9ybVRvZG8ucmVzZXQoKTtcbiAgICAgICAgICAgIGZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc05hbWUgPSAncHJvamVjdEZvcm1EaXYnO1xuICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuXG4gICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRm9ybVByb2plY3QoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTonXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICAgICAgbGV0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXRQcm9qZWN0VGl0bGUuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsLmNsYXNzTmFtZSA9ICdDYW5jZWwnO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRQcm9qZWN0LmNsYXNzTmFtZSA9ICdzdWJtaXRGb3JtJztcbiAgICAgICAgc3VibWl0UHJvamVjdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0KTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0MSA9IGlucHV0UHJvamVjdFRpdGxlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgaXRlbXMuYWRkUHJvamVjdChpbnB1dDEpXG4gICAgICAgICAgICAgICAgY3VycmVudFRvZG8ubmV3UHJvamVjdChkb21FbGVtZW50cy50YWJsZVByb2plY3QsIGl0ZW1zLmFyclByb2plY3QpXG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9ybSAoKXtcbiAgICAgICAgd2hpbGUgKGZvcm1Ub2RvLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgZm9ybVRvZG8ucmVtb3ZlQ2hpbGQoZm9ybVRvZG8uZmlyc3RDaGlsZClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtRGl2LFxuICAgICAgICBmb3JtVG9kbyxcbiAgICAgICAgdGFibGVUb2RvLFxuICAgICAgICBidG5BZGRUb2RvLFxuICAgICAgICBidWlsZEZvcm1Ub2RvLFxuICAgICAgICBidG5BZGRQcm9qZWN0LFxuICAgICAgICBidWlsZEZvcm1Qcm9qZWN0LFxuICAgICAgICB0YWJsZVByb2plY3QsXG4gICAgICAgIHByb2plY3RGb3JtRGl2LFxuICAgICAgICBwcm9qZWN0Rm9ybVxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH0iLCJjb25zdCBpdGVtcyA9ICgoKSA9PiB7XG4gICAgY2xhc3MgdG9kb0l0ZW0ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBwcm9qZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXJySW5ib3ggPSBbXVxuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyB0b2RvSXRlbSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgcHJvamVjdClcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgYXJySW5ib3gucHVzaCh0b2RvKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJJbmJveClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvIChuKSB7XG4gICAgICAgIGFyckluYm94LnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJJbmJveClcbiAgICB9XG5cbiAgICBsZXQgYXJyUHJvamVjdCA9IFsnSW5ib3gnXVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAocHJvamVjdCkge1xuICAgICAgICBhcnJQcm9qZWN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyclByb2plY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKG4pIHtcbiAgICAgICAgYXJyUHJvamVjdC5zcGxpY2UobiwgMSlcbiAgICAgICAgY29uc29sZS5sb2coYXJyUHJvamVjdClcbiAgICB9XG5cbiAgICAvKiByZW1vdmUgcHJvamVjdCBjbGFzcyAmIGZ1bmN0aW9ucyAtIGFkZCBwcm9qZWN0IGFzIHRoaXMucHJvamVjdCBvbiB0b2RvIGNsYXNzICovXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBkZWxldGVUb2RvLFxuICAgICAgICBhcnJJbmJveCxcbiAgICAgICAgYXJyUHJvamVjdCxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdFxuICAgIH1cbn0pKCk7XG4vKiBuIHdpbGwgYmUgYXNzaWduZWQgdG8gYSBjb21wbGV0ZSAmIGRlbGV0ZSBidXR0b24gb24gZWFjaCB0b2RvIFxuJiBkZWxldGUgcHJvamVjdCBidXR0b24gd2lsbCBkZWxldGUgdGhlIHByb2plY3QgLSBsaWtlIGxpYnJhcnkuKi9cbmV4cG9ydCB7IGl0ZW1zIH1cbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gXCIuL2l0ZW1cIjtcblxuY29uc3QgY3VycmVudFRvZG8gPSAoKCkgPT4ge1xuICAgIC8vYWRkIGRlc2lyZWQgdGFibGUgJiBhcnJheSB0byBhZGQgbmV3IHRvZG9cbiAgICBmdW5jdGlvbiBuZXdUb2RvIChlbGVtZW50LCBhcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5yb3dzLmxlbmd0aDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gZWxlbWVudC5pbnNlcnRSb3coaSlcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgaSlcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYXJyYXlbaV0ucHJvamVjdClcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgT2JqZWN0LmtleXMoYXJyYXlbaV0pLmxlbmd0aCAtIDI7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyhhcnJheVtpXSlbal07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmZvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpbmZvQnRuLnRleHRDb250ZW50ID0gJ2knXG5cbiAgICAgICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IGFycmF5W2ldLmRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgICAgIGxldCB2YWwzID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHZhbDMuYXBwZW5kQ2hpbGQoaW5mb0J0bik7XG4gICAgICAgICAgICB2YWwzLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICAgICAgaW5mb0J0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSdcbiAgICAgICAgICAgIGxldCB2YWwyID0gcm93Lmluc2VydENlbGwoKVxuICAgICAgICAgICAgdmFsMi5hcHBlbmRDaGlsZChjb21wbGV0ZUJ0bilcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDEgJiYgYXJyYXkgPT09IGl0ZW1zLmFyckluYm94KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZVRvZG8oMCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsZXRlUm93KDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXkgPT09IGl0ZW1zLmFyckluYm94KXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlVG9kbyhpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coaSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdQcm9qZWN0IChlbGVtZW50LCBhcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5yb3dzLmxlbmd0aCArIDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgICAgIGxldCByb3cgPSBlbGVtZW50Lmluc2VydFJvdyhpIC0xKVxuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpKVxuICAgIFxuICAgICAgICAgICAgbGV0IHZhbCA9IHJvdy5pbnNlcnRDZWxsKClcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ0bi52YWx1ZSA9IGFycmF5W2ldO1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYXJyYXlbaV07XG4gICAgICAgICAgICB2YWwuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gaXRlbXMuYXJySW5ib3guZmlsdGVyKGZ1bmN0aW9uKG9uZVByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lUHJvamVjdC5wcm9qZWN0ID09IGFycmF5W2ldXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcbiAgICAgICAgICAgICAgICAvL2ZpbHRlciB0YWJsZSB1c2luZyByb3cgdmFsdWUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkb21FbGVtZW50cy50YWJsZVRvZG8ucm93cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb21FbGVtZW50cy50YWJsZVRvZG8ucm93c1tqXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGxldCB2YWwyID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHZhbDIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPT09IDEgJiYgYXJyYXkgPT09IGl0ZW1zLmFyclByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlUHJvamVjdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZWxldGVSb3coMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheSA9PT0gaXRlbXMuYXJyUHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGVQcm9qZWN0KGkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRlbGV0ZVJvdyhpIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gc2tpcCAxID0gMCBvciBpdGVtcy5hcnJQcm9qZWN0WzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdUb2RvLFxuICAgICAgICBuZXdQcm9qZWN0XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHsgY3VycmVudFRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuL2l0ZW0nXG5pbXBvcnR7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9pbnRlcmZhY2UnXG5pbXBvcnQgeyBjdXJyZW50VG9kbyB9IGZyb20gJy4vbGlzdCdcbi8qaXRlbXMuYWRkUHJvamVjdCgnaGVsbG8nLCdzcXVhcmUnKVxuaXRlbXMuYXJyUHJvamVjdHNbMF0uYWRkVG9MaXN0KCdoZWxsbycsJ3NhbW15JywnMTEnLCdsb3cnKVxuY29uc29sZS5sb2coaXRlbXMuYXJyUHJvamVjdHNbMF0uYXJyYXkpICovXG5cbmRvbUVsZW1lbnRzLmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnRzLmZvcm1Ub2RvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb21FbGVtZW50cy5idWlsZEZvcm1Ub2RvKGRvbUVsZW1lbnRzLnRhYmxlVG9kbyAsIGl0ZW1zLmFyckluYm94KVxuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSBlbHNlIGlmIChkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICBkb21FbGVtZW50cy5mb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcblxuZG9tRWxlbWVudHMuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLmJ1aWxkRm9ybVByb2plY3QoKVxuICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHMucHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxufSlcbi8qIGFjY2VzcyBlYWNoIHByb2plY3QgdG9kbyBhcnJheSBleGFtcGxlIGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5ICovXG5jb25zb2xlLmxvZygndG9kbycpIl0sInNvdXJjZVJvb3QiOiIifQ==