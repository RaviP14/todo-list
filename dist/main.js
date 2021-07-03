/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
        }
    }

    let arrInbox = []

    function addTodo (title, description, dueDate, priority) {
        let todo = new todoItem (title, description, dueDate, priority)
        console.log(todo)
        arrInbox.push(todo)
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

/*items.addProject('hello','square')
items.arrProjects[0].addToList('hello','sammy','11','low')
console.log(items.arrProjects[0].array) */

/* access each project todo array example items.arrProjects[0].array */
console.log('todo')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ2dCOzs7Ozs7O1VDckVoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ044QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXRlbXMgPSAoKCkgPT4ge1xuICAgIGNsYXNzIHRvZG9JdGVtIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyckluYm94ID0gW11cblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgdG9kb0l0ZW0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgIGFyckluYm94LnB1c2godG9kbylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvIChuKSB7XG4gICAgICAgIGFyckluYm94LnNwbGljZShuLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJJbmJveClcbiAgICB9XG4gICAgXG4gICAgY2xhc3MgcHJvamVjdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0aGlzLmFycmF5ID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gbmV3IHRvZG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgICAgICAgICAgdGhpcy5saXN0KHRvZG8pXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGVGcm9tTGlzdChuKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5LnNwbGljZShuLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgYXJyUHJvamVjdHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdCAobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gbmV3IHByb2plY3QgKG5hbWUsIGRlc2NyaXB0aW9uKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgYXJyUHJvamVjdHMucHVzaChwcm9qZWN0cylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KG4pIHtcbiAgICAgICAgYXJyUHJvamVjdHMuc3BsaWNlKG4sIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFyclByb2plY3RzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGFyckluYm94LFxuICAgICAgICBhcnJQcm9qZWN0c1xuICAgIH1cbn0pKCk7XG4vKiBuIHdpbGwgYmUgYXNzaWduZWQgdG8gYSBjb21wbGV0ZSAmIGRlbGV0ZSBidXR0b24gb24gZWFjaCB0b2RvIFxuJiBkZWxldGUgcHJvamVjdCBidXR0b24gd2lsbCBkZWxldGUgdGhlIHByb2plY3QgLSBsaWtlIGxpYnJhcnkuKi9cbmV4cG9ydCB7IGl0ZW1zIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXRlbXMgfSBmcm9tICcuL2l0ZW0nXG4vKml0ZW1zLmFkZFByb2plY3QoJ2hlbGxvJywnc3F1YXJlJylcbml0ZW1zLmFyclByb2plY3RzWzBdLmFkZFRvTGlzdCgnaGVsbG8nLCdzYW1teScsJzExJywnbG93JylcbmNvbnNvbGUubG9nKGl0ZW1zLmFyclByb2plY3RzWzBdLmFycmF5KSAqL1xuXG4vKiBhY2Nlc3MgZWFjaCBwcm9qZWN0IHRvZG8gYXJyYXkgZXhhbXBsZSBpdGVtcy5hcnJQcm9qZWN0c1swXS5hcnJheSAqL1xuY29uc29sZS5sb2coJ3RvZG8nKSJdLCJzb3VyY2VSb290IjoiIn0=