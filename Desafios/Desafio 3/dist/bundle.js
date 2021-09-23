/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contenedor.js":
/*!***************************!*\
  !*** ./src/contenedor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Contenedor {\n  constructor() {\n    _defineProperty(this, \"save\", async object => {\n      try {\n        const all = JSON.parse((await this.getAll()) || \"[]\");\n\n        const lastObjectAdded = lodash__WEBPACK_IMPORTED_MODULE_1___default().maxBy(all, \"id\");\n\n        let newId = 1;\n        if (lastObjectAdded) newId = (lastObjectAdded.id || 0) + 1;\n        object.id = newId;\n        all.push(object);\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n        return newId;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"getById\", async id => {\n      const all = JSON.parse(await this.getAll());\n      return all.find(o => o.id == id);\n    });\n\n    _defineProperty(this, \"getAll\", async () => {\n      try {\n        return await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(\"./productos.txt\", \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteById\", async id => {\n      try {\n        const all = JSON.parse((await this.getAll()) || \"[]\");\n        const filteredProducts = all.filter(p => p.id != id);\n        const info = JSON.stringify(filteredProducts, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteAll\", async () => {\n      try {\n        const info = JSON.stringify([]);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contenedor);\n\n//# sourceURL=webpack://desafio-3/./src/contenedor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contenedor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contenedor */ \"./src/contenedor.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nconst contenedor = new _contenedor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\napp.get(\"/productos\", async (req, res) => {\n  const all = JSON.parse(await contenedor.getAll());\n  res.status(200).json(all);\n});\napp.get(\"/productoRandom\", async (req, res) => {\n  const all = JSON.parse(await contenedor.getAll());\n  let product;\n\n  if (all) {\n    const idRandom = lodash__WEBPACK_IMPORTED_MODULE_1___default().random(1, all.length);\n\n    product = all.filter(p => p.id === idRandom);\n  }\n\n  res.status(200).json(product);\n});\napp.listen(8080, () => {\n  console.log(\"Server is running on port 8080\");\n});\n\n//# sourceURL=webpack://desafio-3/./src/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;