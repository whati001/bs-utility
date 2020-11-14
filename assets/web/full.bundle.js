botpress = typeof botpress === "object" ? botpress : {}; botpress["bs-utility"] =
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
/******/ 	__webpack_require__.p = "/js/modules/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/input.ts":
/*!**************************!*\
  !*** ./src/lib/input.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVarName = void 0;
exports.parseVarName = function (input) {
    if (input) {
        var inputFiltered = input.replace(/[^A-Za-z0-9]/, '');
        return inputFiltered.slice(0, 20);
    }
    return '';
};


/***/ }),

/***/ "./src/lib/storage.ts":
/*!****************************!*\
  !*** ./src/lib/storage.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGES = void 0;
var STORAGES = [
    { 'value': 'session', 'label': 'Session' },
    { 'value': 'temp', 'label': 'Temp' },
    { 'value': 'user', 'label': 'User' }
];
exports.STORAGES = STORAGES;


/***/ }),

/***/ "./src/views/full/fillStorage.tsx":
/*!****************************************!*\
  !*** ./src/views/full/fillStorage.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FillStorage = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
// @ts-ignore
var react_select_1 = __importDefault(__webpack_require__(/*! react-select */ "react-select"));
// @ts-ignore
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
// @ts-ignore
var tooltip_1 = __webpack_require__(/*! botpress/tooltip */ "botpress/tooltip");
var storage_1 = __webpack_require__(/*! ./../../lib/storage */ "./src/lib/storage.ts");
var input_1 = __webpack_require__(/*! ./../../lib/input */ "./src/lib/input.ts");
var MAX_RETRIES = 10;
var FillStorage = /** @class */ (function (_super) {
    __extends(FillStorage, _super);
    function FillStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            storage: undefined,
            varName: '',
            maxRetry: 3,
            error: undefined
        };
        _this.componentDidUpdate = function (prevProps, prevState) {
            if (_this.state != prevState && _this.hasValidForm()) {
                _this.updateParent();
            }
        };
        _this.handleStorageChange = function (selection) {
            if (storage_1.STORAGES.includes(selection))
                _this.setState({ 'storage': selection });
            else
                _this.setState({ 'error': 'Please select a storage from the selection' });
        };
        _this.handleVarnameChange = function (input) {
            _this.setState({ 'varName': input_1.parseVarName(input.target.value) });
        };
        return _this;
    }
    FillStorage.prototype.componentDidMount = function () {
        if (this.props.initialData) {
            this.setStateFromProps(this.props.initialData);
        }
    };
    FillStorage.prototype.setStateFromProps = function (initProps) {
        var _this = this;
        var getPropOrDefault = function (key) { return initProps[key] ? initProps[key] : _this.state[key]; };
        this.setState({
            storage: getPropOrDefault('storage'),
            varName: getPropOrDefault('varName'),
            maxRetry: getPropOrDefault('maxRetry'),
            error: getPropOrDefault('error')
        });
    };
    FillStorage.prototype.hasValidForm = function () {
        return this.state.storage
            && (this.state.varName != '');
    };
    FillStorage.prototype.updateParent = function () {
        this.props.onDataChanged && this.props.onDataChanged(this.state);
        this.props.onValidChanged && this.props.onValidChanged(true);
    };
    FillStorage.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "something" },
            this.state.error && react_1.default.createElement(reactstrap_1.Alert, { color: "danger" }, this.state.error),
            react_1.default.createElement(reactstrap_1.Row, { style: { marginBottom: 10 } },
                react_1.default.createElement(reactstrap_1.Col, { md: 6 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Select the traget storage type" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "storage" }, "Choose an storage"),
                    react_1.default.createElement(react_select_1.default, { id: "storage", name: "storage", placeholder: "Choose an storage to use", className: "something more", onChange: this.handleStorageChange, value: this.state.storage, options: storage_1.STORAGES })),
                react_1.default.createElement(reactstrap_1.Col, { md: 6 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Define the variable name, only letters and numbers are allowed" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "varName" }, "Choose a variable name"),
                    react_1.default.createElement(reactstrap_1.Input, { id: "varName", name: "varName", placeholder: "Choose a varName to use", className: "something even more", onChange: this.handleVarnameChange, value: this.state.varName })))));
    };
    return FillStorage;
}(react_1.default.Component));
exports.FillStorage = FillStorage;


/***/ }),

/***/ "./src/views/full/index.tsx":
/*!**********************************!*\
  !*** ./src/views/full/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fillStorage_1 = __webpack_require__(/*! ./fillStorage */ "./src/views/full/fillStorage.tsx");
Object.defineProperty(exports, "fillStorage", { enumerable: true, get: function () { return fillStorage_1.FillStorage; } });


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./src/views/full/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/views/full/index.tsx */"./src/views/full/index.tsx");


/***/ }),

/***/ "botpress/tooltip":
/*!**********************************!*\
  !*** external "BotpressTooltip" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = BotpressTooltip;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-select":
/*!******************************!*\
  !*** external "ReactSelect" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactSelect;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "Reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ })

/******/ });
//# sourceMappingURL=full.bundle.js.map