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

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  isAdmin: true,\n  persistenceMethod: \"firebase\" // json, firebase, mongodb\n\n});\n\n//# sourceURL=webpack://proyecto-final/./src/config/constants.js?");

/***/ }),

/***/ "./src/daos/indexDAO.js":
/*!******************************!*\
  !*** ./src/daos/indexDAO.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartsDAO\": () => (/* binding */ cartsDAO),\n/* harmony export */   \"productsDAO\": () => (/* binding */ productsDAO)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nlet cartsDAO;\nlet productsDAO;\n\nswitch (_config_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].persistenceMethod) {\n  case \"json\":\n    const {\n      default: CartsFileDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_carts_CartsFileDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./carts/CartsFileDAO */ \"./src/daos/carts/CartsFileDAO.js\"));\n    const {\n      default: ProductsFileDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_products_ProductsFileDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./products/ProductsFileDAO */ \"./src/daos/products/ProductsFileDAO.js\"));\n    cartsDAO = new CartsFileDAO();\n    productsDAO = new ProductsFileDAO();\n    break;\n\n  case \"mongodb\":\n    const {\n      default: CartsMongoDbDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_carts_CartsMongoDbDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./carts/CartsMongoDbDAO */ \"./src/daos/carts/CartsMongoDbDAO.js\"));\n    const {\n      default: ProductsMongoDbDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_products_ProductsMongoDbDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./products/ProductsMongoDbDAO */ \"./src/daos/products/ProductsMongoDbDAO.js\"));\n    cartsDAO = new CartsMongoDbDAO();\n    productsDAO = new ProductsMongoDbDAO();\n    break;\n\n  case \"firebase\":\n    const {\n      default: CartsFirebaseDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_carts_CartsFirebaseDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./carts/CartsFirebaseDAO */ \"./src/daos/carts/CartsFirebaseDAO.js\"));\n    const {\n      default: ProductsFirebaseDAO\n    } = await __webpack_require__.e(/*! import() */ \"src_daos_products_ProductsFirebaseDAO_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./products/ProductsFirebaseDAO */ \"./src/daos/products/ProductsFirebaseDAO.js\"));\n    cartsDAO = new CartsFirebaseDAO();\n    productsDAO = new ProductsFirebaseDAO();\n    break;\n\n  default:\n    cartsDAO = new CartsFileDAO();\n    productsDAO = new ProductsFileDAO();\n    break;\n}\n\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://proyecto-final/./src/daos/indexDAO.js?");

/***/ }),

/***/ "./src/routes/cart.js":
/*!****************************!*\
  !*** ./src/routes/cart.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../daos/indexDAO */ \"./src/daos/indexDAO.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__]);\n_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nrouter.get(\"/\", async (req, res) => {\n  const carts = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getAll();\n  res.json(carts);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (cart) return res.send(cart);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.get(\"/:id/productos\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (cart) return res.send(cart.products);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  const cart = {\n    products: []\n  };\n  const createdCart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.save(cart);\n  res.status(201).json({\n    id: createdCart.id\n  });\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.deleteById(cart.id);\n  res.send(\"carrito eliminado\");\n});\nrouter.post(\"/:id/productos\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n\n  if (req.body.products && req.body.products.length) {\n    cart.products = [...cart.products, ...req.body.products];\n    await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.updateCart(cart);\n    res.status(201).json({\n      msg: \"los productos fueron agregados al carrito\"\n    });\n  } else {\n    res.status(400).json({\n      error: \"Debe enviar una lista de productos válida\"\n    });\n  }\n});\nrouter.delete(\"/:id/productos/:id_prod\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  const product = cart.products.find(p => p.id == req.params.id_prod);\n\n  if (!product) {\n    res.status(404).json({\n      error: \"producto no encontrado en el carrito\"\n    });\n  }\n\n  const filteredProducts = cart.products.filter(p => p.id != req.params.id_prod);\n  cart.products = filteredProducts;\n  await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.updateCart(cart);\n  res.send(\"producto eliminado del carrito\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/routes/cart.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../daos/indexDAO */ \"./src/daos/indexDAO.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__]);\n_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nrouter.get(\"/\", async (req, res) => {\n  const products = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getAll();\n  res.json(products);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (product) res.send(product);else res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const {\n    title,\n    price,\n    thumbnail\n  } = req.body;\n\n  if (title && price && thumbnail) {\n    const data = _objectSpread({}, req.body);\n\n    const createdProduct = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.save(data);\n    res.status(201).send(createdProduct);\n  } else res.status(400).send({\n    error: \"Faltan datos obligatorios\"\n  });\n});\nrouter.put(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  const {\n    title,\n    price,\n    thumbnail\n  } = req.body;\n  product.title = title || product.title;\n  product.price = price || product.price;\n  product.thumbnail = thumbnail || product.thumbnail;\n  await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.update(product);\n  res.send(\"producto actualizado\");\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.deleteById(product.id);\n  res.send(\"producto eliminado\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/routes/products.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/products */ \"./src/routes/products.js\");\n/* harmony import */ var _routes_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/cart */ \"./src/routes/cart.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes_products__WEBPACK_IMPORTED_MODULE_1__, _routes_cart__WEBPACK_IMPORTED_MODULE_2__]);\n([_routes_products__WEBPACK_IMPORTED_MODULE_1__, _routes_cart__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 8080;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.use(\"/api/carrito\", _routes_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(\"/api/productos\", _routes_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(port, () => {\n  console.log(`\"server is running on port ${port}`);\n});\n});\n\n//# sourceURL=webpack://proyecto-final/./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"app": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;