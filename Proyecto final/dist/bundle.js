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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  isAdmin: true,\n  persistenceMethod: \"mongodb\"\n});\n\n//# sourceURL=webpack://proyecto-final/./src/config/constants.js?");

/***/ }),

/***/ "./src/config/db.js":
/*!**************************!*\
  !*** ./src/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fileSystem: {\n    productsPath: path__WEBPACK_IMPORTED_MODULE_0__.resolve(__dirname, \"../data\", \"products.json\"),\n    cartsPath: path__WEBPACK_IMPORTED_MODULE_0__.resolve(__dirname, \"../data\", \"carts.json\")\n  },\n  mongodb: {\n    cnxStr: \"mongodb+srv://admin:09122018carp@clustercoderhouse.vludd.mongodb.net/ecommerceCoderhouse?retryWrites=true&w=majority\",\n    options: {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      useCreateIndex: true,\n      serverSelectionTimeoutMS: 5000\n    }\n  }\n});\n\n//# sourceURL=webpack://proyecto-final/./src/config/db.js?");

/***/ }),

/***/ "./src/containers/FileContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/FileContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass FileContainer {\n  constructor(filePath) {\n    _defineProperty(this, \"save\", async object => {\n      try {\n        const all = await this.getAll();\n\n        if (!object.id) {\n          const lastObjectAdded = lodash__WEBPACK_IMPORTED_MODULE_1___default().maxBy(all, \"id\");\n\n          if (lastObjectAdded) object.id = (lastObjectAdded.id || 0) + 1;\n        }\n\n        all.push(object);\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"update\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const index = lodash__WEBPACK_IMPORTED_MODULE_1___default().findIndex(all, p => p.id == object.id);\n\n        all[index].title = object.title;\n        all[index].price = object.price;\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"updateCart\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const index = lodash__WEBPACK_IMPORTED_MODULE_1___default().findIndex(all, p => p.id == object.id);\n\n        all[index].products = object.products;\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"getById\", async id => {\n      const all = await this.getAll();\n      return all.find(o => o.id == id);\n    });\n\n    _defineProperty(this, \"getAll\", async () => {\n      try {\n        return JSON.parse((await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(this.filePath, \"utf-8\")) || \"[]\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteById\", async id => {\n      try {\n        const all = await this.getAll();\n        const filteredProducts = all.filter(p => p.id != id);\n        const info = JSON.stringify(filteredProducts, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteAll\", async () => {\n      try {\n        const info = JSON.stringify([]);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    this.filePath = filePath;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileContainer);\n\n//# sourceURL=webpack://proyecto-final/./src/containers/FileContainer.js?");

/***/ }),

/***/ "./src/containers/MongoDbContainer.js":
/*!********************************************!*\
  !*** ./src/containers/MongoDbContainer.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectUtils.js */ \"./src/utils/objectUtils.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/db */ \"./src/config/db.js\");\n\n\n\nawait mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_config_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongodb.cnxStr, _config_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mongodb.options);\n\nclass MongoDbContainer {\n  constructor(modelName, schema) {\n    this.collection = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(modelName, schema);\n  }\n\n  async save(object) {\n    try {\n      let doc = await this.collection.create(object);\n      doc = (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(doc);\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(doc, \"_id\", \"id\");\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.removeField)(doc, \"__v\");\n      return doc;\n    } catch (error) {\n      throw new Error(`Error al guardar: ${error}`);\n    }\n  }\n\n  async update(object) {\n    try {\n      (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(object, \"id\", \"_id\");\n      const {\n        n,\n        nModified\n      } = await this.collection.replaceOne({\n        _id: object._id\n      }, object);\n\n      if (n == 0 || nModified == 0) {\n        throw new Error(\"Error al actualizar: no encontrado\");\n      } else {\n        (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(object, \"_id\", \"id\");\n        (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.removeField)(object, \"__v\");\n        return (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(object);\n      }\n    } catch (error) {\n      throw new Error(`Error al actualizar: ${error}`);\n    }\n  }\n\n  async getById(id) {\n    try {\n      const docs = await this.collection.find({\n        _id: id\n      }, {\n        __v: 0\n      });\n\n      if (docs.length == 0) {\n        throw new Error(\"Error al listar por id: no encontrado\");\n      } else {\n        const result = (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)((0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO)(docs[0]), \"_id\", \"id\");\n        return result;\n      }\n    } catch (error) {\n      throw new Error(`Error al listar por id: ${error}`);\n    }\n  }\n\n  async getAll() {\n    try {\n      let docs = await this.collection.find({}, {\n        __v: 0\n      }).lean();\n      docs = docs.map(_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.asPOJO);\n      docs = docs.map(d => (0,_utils_objectUtils_js__WEBPACK_IMPORTED_MODULE_1__.renameField)(d, \"_id\", \"id\"));\n      return docs;\n    } catch (error) {\n      throw new Error(`Error al listar todo: ${error}`);\n    }\n  }\n\n  async deleteById(id) {\n    try {\n      const {\n        n,\n        nDeleted\n      } = await this.collection.deleteOne({\n        _id: id\n      });\n\n      if (n == 0 || nDeleted == 0) {\n        throw new Error(\"Error al borrar: no encontrado\");\n      }\n    } catch (error) {\n      throw new Error(`Error al borrar: ${error}`);\n    }\n  }\n\n  async deleteAll() {\n    try {\n      await this.collection.deleteMany({});\n    } catch (error) {\n      throw new Error(`Error al borrar: ${error}`);\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MongoDbContainer);\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://proyecto-final/./src/containers/MongoDbContainer.js?");

/***/ }),

/***/ "./src/daos/carts/CartsFileDAO.js":
/*!****************************************!*\
  !*** ./src/daos/carts/CartsFileDAO.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_FileContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/FileContainer */ \"./src/containers/FileContainer.js\");\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/db */ \"./src/config/db.js\");\n\n\n\n\nclass CartsFileDAO {\n  constructor() {\n    //Todo: dependency injection\n    this.container = new _containers_FileContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_config_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fileSystem.cartsPath);\n  }\n\n  async getAll() {\n    return await this.container.getAll();\n  }\n\n  async getById(id) {\n    return await this.container.getById(id);\n  }\n\n  async save(cart) {\n    cart.id = cart.id || (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\n    await this.container.save(cart);\n  }\n\n  async deleteById(id) {\n    await this.container.deleteById(id);\n  }\n\n  async updateCart(cart) {\n    await this.container.updateCart(cart);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartsFileDAO);\n\n//# sourceURL=webpack://proyecto-final/./src/daos/carts/CartsFileDAO.js?");

/***/ }),

/***/ "./src/daos/carts/CartsMongoDbDAO.js":
/*!*******************************************!*\
  !*** ./src/daos/carts/CartsMongoDbDAO.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/MongoDbContainer */ \"./src/containers/MongoDbContainer.js\");\n/* harmony import */ var _models_cartSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cartSchema */ \"./src/models/cartSchema.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__]);\n_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nclass CartsMongoDbDAO {\n  constructor() {\n    this.container = new _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Cart\", _models_cartSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n  async getAll() {\n    return await this.container.getAll();\n  }\n\n  async getById(id) {\n    return await this.container.getById(id);\n  }\n\n  async save(cart) {\n    await this.container.save(cart);\n  }\n\n  async deleteById(id) {\n    await this.container.deleteById(id);\n  }\n\n  async updateCart(cart) {\n    await this.container.update(cart);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartsMongoDbDAO);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/daos/carts/CartsMongoDbDAO.js?");

/***/ }),

/***/ "./src/daos/indexDAO.js":
/*!******************************!*\
  !*** ./src/daos/indexDAO.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartsDAO\": () => (/* binding */ cartsDAO),\n/* harmony export */   \"productsDAO\": () => (/* binding */ productsDAO)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _carts_CartsFileDAO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carts/CartsFileDAO */ \"./src/daos/carts/CartsFileDAO.js\");\n/* harmony import */ var _carts_CartsMongoDbDAO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carts/CartsMongoDbDAO */ \"./src/daos/carts/CartsMongoDbDAO.js\");\n/* harmony import */ var _products_ProductsFileDAO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/ProductsFileDAO */ \"./src/daos/products/ProductsFileDAO.js\");\n/* harmony import */ var _products_ProductsMongoDbDAO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/ProductsMongoDbDAO */ \"./src/daos/products/ProductsMongoDbDAO.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_products_ProductsMongoDbDAO__WEBPACK_IMPORTED_MODULE_4__, _carts_CartsMongoDbDAO__WEBPACK_IMPORTED_MODULE_2__]);\n([_products_ProductsMongoDbDAO__WEBPACK_IMPORTED_MODULE_4__, _carts_CartsMongoDbDAO__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nlet cartsDAO;\nlet productsDAO;\n\nswitch (_config_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].persistenceMethod) {\n  case \"json\":\n    cartsDAO = new _carts_CartsFileDAO__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    productsDAO = new _products_ProductsFileDAO__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    break;\n\n  case \"mongodb\":\n    cartsDAO = new _carts_CartsMongoDbDAO__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    productsDAO = (0,_products_ProductsMongoDbDAO__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    break;\n\n  case \"firebase\":\n    cartsDAO = {};\n    productsDAO = {};\n    break;\n\n  default:\n    cartsDAO = new _carts_CartsFileDAO__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    productsDAO = new _products_ProductsFileDAO__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    break;\n}\n\n\n});\n\n//# sourceURL=webpack://proyecto-final/./src/daos/indexDAO.js?");

/***/ }),

/***/ "./src/daos/products/ProductsFileDAO.js":
/*!**********************************************!*\
  !*** ./src/daos/products/ProductsFileDAO.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/db */ \"./src/config/db.js\");\n/* harmony import */ var _containers_FileContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/FileContainer */ \"./src/containers/FileContainer.js\");\n\n\n\nclass ProductsFileDAO {\n  constructor() {\n    //Todo: dependency injection\n    this.container = new _containers_FileContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_config_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fileSystem.productsPath);\n  }\n\n  async getAll() {\n    return await this.container.getAll();\n  }\n\n  async getById(id) {\n    return await this.container.getById(id);\n  }\n\n  async save(product) {\n    await this.container.save(product);\n  }\n\n  async deleteById(id) {\n    await this.container.deleteById(id);\n  }\n\n  async updateCart(product) {\n    await this.container.updateCart(product);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsFileDAO);\n\n//# sourceURL=webpack://proyecto-final/./src/daos/products/ProductsFileDAO.js?");

/***/ }),

/***/ "./src/daos/products/ProductsMongoDbDAO.js":
/*!*************************************************!*\
  !*** ./src/daos/products/ProductsMongoDbDAO.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/MongoDbContainer */ \"./src/containers/MongoDbContainer.js\");\n/* harmony import */ var _models_productSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/productSchema */ \"./src/models/productSchema.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__]);\n_containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nclass ProductsMongoDbDAO {\n  constructor() {\n    this.container = new _containers_MongoDbContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Product\", _models_productSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n  async getAll() {\n    return await this.container.getAll();\n  }\n\n  async getById(id) {\n    return await this.container.getById(id);\n  }\n\n  async save(cart) {\n    await this.container.save(cart);\n  }\n\n  async deleteById(id) {\n    await this.container.deleteById(id);\n  }\n\n  async updateCart(cart) {\n    await this.container.update(cart);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsMongoDbDAO);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/daos/products/ProductsMongoDbDAO.js?");

/***/ }),

/***/ "./src/models/cartSchema.js":
/*!**********************************!*\
  !*** ./src/models/cartSchema.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  Schema\n} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst cartSchema = new Schema({\n  products: {\n    type: [],\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSchema);\n\n//# sourceURL=webpack://proyecto-final/./src/models/cartSchema.js?");

/***/ }),

/***/ "./src/models/productSchema.js":
/*!*************************************!*\
  !*** ./src/models/productSchema.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  Schema\n} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  thumbnail: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSchema);\n\n//# sourceURL=webpack://proyecto-final/./src/models/productSchema.js?");

/***/ }),

/***/ "./src/routes/cart.js":
/*!****************************!*\
  !*** ./src/routes/cart.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../daos/indexDAO */ \"./src/daos/indexDAO.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__]);\n_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nrouter.get(\"/\", async (req, res) => {\n  console.log(_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO);\n  const carts = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getAll();\n  res.json(carts);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (cart) return res.send(cart);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.get(\"/:id/productos\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (cart) return res.send(cart.products);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  const cart = {\n    products: []\n  };\n  await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.save(cart);\n  res.status(201).json({\n    id: cart.id\n  });\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.deleteById(cart.id);\n  res.send(\"carrito eliminado\");\n});\nrouter.post(\"/:id/productos\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n\n  if (req.body.products && req.body.products.length) {\n    cart.products = [...cart.products, ...req.body.products];\n    await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.updateCart(cart);\n    res.status(201).json({\n      msg: \"los productos fueron agregados al carrito\"\n    });\n  } else {\n    res.status(400).json({\n      error: \"Debe enviar una lista de productos válida\"\n    });\n  }\n});\nrouter.delete(\"/:id/productos/:id_prod\", async (req, res) => {\n  const cart = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  const product = cart.products.find(p => p.id == req.params.id_prod);\n\n  if (!product) {\n    res.status(404).json({\n      error: \"producto no encontrado en el carrito\"\n    });\n  }\n\n  const filteredProducts = cart.products.filter(p => p.id != req.params.id_prod);\n  cart.products = filteredProducts;\n  await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.cartsDAO.updateCart(cart);\n  res.send(\"producto eliminado del carrito\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/routes/cart.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../daos/indexDAO */ \"./src/daos/indexDAO.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__]);\n_daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nrouter.get(\"/\", async (req, res) => {\n  const products = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getAll();\n  res.json(products);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (product) res.send(product);else res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  if (req.body.title) {\n    const data = _objectSpread({}, req.body);\n\n    const createdProduct = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.save(data);\n    res.status(201).send(createdProduct);\n  } else res.status(400).send({\n    error: \"debe indicar el nombre del producto\"\n  });\n});\nrouter.put(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  product.title = req.body.title;\n  product.price = req.body.price;\n  await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.update(product);\n  res.send(\"producto actualizado\");\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAdmin) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  _daos_indexDAO__WEBPACK_IMPORTED_MODULE_1__.productsDAO.deleteById(product.id);\n  res.send(\"producto eliminado\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/routes/products.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/products */ \"./src/routes/products.js\");\n/* harmony import */ var _routes_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/cart */ \"./src/routes/cart.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes_products__WEBPACK_IMPORTED_MODULE_1__, _routes_cart__WEBPACK_IMPORTED_MODULE_2__]);\n([_routes_products__WEBPACK_IMPORTED_MODULE_1__, _routes_cart__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 8080;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.use(\"/api/carrito\", _routes_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(\"/api/productos\", _routes_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(port, () => {\n  console.log(`\"server is running on port ${port}`);\n});\n});\n\n//# sourceURL=webpack://proyecto-final/./src/server.js?");

/***/ }),

/***/ "./src/utils/objectUtils.js":
/*!**********************************!*\
  !*** ./src/utils/objectUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"asPOJO\": () => (/* binding */ asPOJO),\n/* harmony export */   \"renameField\": () => (/* binding */ renameField),\n/* harmony export */   \"removeField\": () => (/* binding */ removeField)\n/* harmony export */ });\nconst asPOJO = obj => JSON.parse(JSON.stringify(obj));\n\nconst renameField = (record, from, to) => {\n  record[to] = record[from];\n  delete record[from];\n  return record;\n};\n\nconst removeField = (record, field) => {\n  const value = record[field];\n  delete record[field];\n  return value;\n};\n\n\n\n//# sourceURL=webpack://proyecto-final/./src/utils/objectUtils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;