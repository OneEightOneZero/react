/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react.js */ \"./src/react.js\");\n/* harmony import */ var _react_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-dom.js */ \"./src/react-dom.js\");\n// let template = <div>\n//     <p name='lemon'>Hello World</p>\n// </div>;\n\n\nlet template = _react_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n  name: 'lemon'\n}, \"ABC\"); // console.log(React.createElement(\"div\", { name: 'lemon' }, 'hello Wolrd'))\n// let template = React.createElement(\"div\", { name: 'lemon' }, 'hello Wolrd');\n// import React from 'react';\n// console.log(template)\n\n_react_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(template, document.querySelector('#demo')); // let template = React.createElement(\"div\", null,\n//     React.createElement(\"p\", { name: 'lemon' },\n//         \"Hello World\")\n// );\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),

/***/ "./src/react-dom.js":
/*!**************************!*\
  !*** ./src/react-dom.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render(template, el) {\n    el.appendChild(template);\n  }\n\n});\n\n//# sourceURL=webpack:///./src/react-dom.js?");

/***/ }),

/***/ "./src/react.js":
/*!**********************!*\
  !*** ./src/react.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _bindAttrs(vm) {\n  const {\n    _attrs,\n    _elem\n  } = vm; // 遍历\n\n  Object.keys(_attrs).forEach(attr => {\n    _elem.setAttribute(attr, _attrs[attr]);\n  });\n}\n\nfunction _addChildrens(vm) {\n  const {\n    _childrens,\n    _elem\n  } = vm;\n\n  _childrens.forEach(children => {\n    let child;\n\n    switch (typeof children) {\n      case 'string':\n        child = document.createTextNode('');\n        child.textContent = children;\n        break;\n\n      default:\n        child = children;\n    }\n\n    _elem.appendChild(child);\n  });\n}\n\nfunction createElement(type, props, childrens) {\n  return new Proxy({}, {\n    get(target, tagName) {\n      return (attrs = {}, ...childrens) => {\n        // 创建节点\n        var _elem = document.createElement(tagName);\n\n        var _attrs = attrs;\n        var _childrens = childrens; // 处理属性值\n\n        _bindAttrs({\n          _elem,\n          _attrs\n        }); // 处理文本值\n\n\n        _addChildrens({\n          _elem,\n          _childrens\n        });\n\n        return _elem;\n      };\n    }\n\n  })[type](props, childrens);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createElement\n});\n\n//# sourceURL=webpack:///./src/react.js?");

/***/ })

/******/ });