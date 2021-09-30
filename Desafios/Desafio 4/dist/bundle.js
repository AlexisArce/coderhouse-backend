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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Contenedor {\n  constructor() {\n    _defineProperty(this, \"save\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const lastObjectAdded = lodash__WEBPACK_IMPORTED_MODULE_1___default().maxBy(all, \"id\");\n\n        let newId = 1;\n        if (lastObjectAdded) newId = (lastObjectAdded.id || 0) + 1;\n        object.id = newId;\n        all.push(object);\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"update\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const index = lodash__WEBPACK_IMPORTED_MODULE_1___default().findIndex(all, p => p.id == object.id);\n\n        all[index].title = object.title;\n        all[index].price = object.price;\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"getById\", async id => {\n      const all = await this.getAll();\n      return all.find(o => o.id == id);\n    });\n\n    _defineProperty(this, \"getAll\", async () => {\n      try {\n        return JSON.parse((await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(\"./productos.txt\", \"utf-8\")) || \"[]\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteById\", async id => {\n      try {\n        const all = await this.getAll();\n        const filteredProducts = all.filter(p => p.id != id);\n        const info = JSON.stringify(filteredProducts, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteAll\", async () => {\n      try {\n        const info = JSON.stringify([]);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(\"./productos.txt\", info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contenedor);\n\n//# sourceURL=webpack://desafio-4/./src/contenedor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contenedor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenedor */ \"./src/contenedor.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nconst container = new _contenedor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nrouter.get(\"/\", async (req, res) => {\n  const products = await container.getAll();\n  res.json(products);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const product = await container.getById(req.params.id);\n  if (product) res.send(product);else res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  if (req.body.title) {\n    const createdProduct = await container.save(req.body);\n    res.status(201).send(createdProduct);\n  } else res.status(400).send({\n    error: \"debe indicar el nombre del producto\"\n  });\n});\nrouter.put(\"/:id\", async (req, res) => {\n  const product = await container.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  product.title = req.body.title;\n  product.price = req.body.price;\n  await container.update(product);\n  res.send(\"producto actualizado\");\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  const product = await container.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  container.deleteById(product.id);\n  res.send(\"producto eliminado\");\n});\napp.use(\"/api/productos\", router);\napp.listen(8080);\n\n//# sourceURL=webpack://desafio-4/./src/index.js?");

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