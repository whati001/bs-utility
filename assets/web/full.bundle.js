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

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-modules-typescript-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-modules-typescript-loader!./node_modules/css-loader??ref--6-2!./node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bs-utility__style__skillContainer___3_x5w{width:100%}.bs-utility__style__skillInput___aCRxR{margin:5px 0px}\n", ""]);

// exports
exports.locals = {
	"skillContainer": "bs-utility__style__skillContainer___3_x5w",
	"skillInput": "bs-utility__style__skillInput___aCRxR"
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/lib/input.ts":
/*!**************************!*\
  !*** ./src/lib/input.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = exports.parseText = exports.parseVarName = void 0;
exports.parseVarName = function (input, maxLength) {
    if (maxLength === void 0) { maxLength = 20; }
    if (input) {
        var inputFiltered = input.replace(/[^A-Za-z0-9]/g, '');
        return inputFiltered.slice(0, maxLength);
    }
    return '';
};
exports.parseText = function (input, maxLength) {
    if (maxLength === void 0) { maxLength = 100; }
    if (input) {
        var inputFiltered = input.replace(/[^\x00-\x7F]/g, '');
        return inputFiltered.slice(0, maxLength);
    }
    return '';
};
exports.parseNumber = function (input, max) {
    if (max === void 0) { max = 10; }
    var number = Number(input);
    if (number && number >= 0)
        return number <= max ? number : max;
    return 0;
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

/***/ "./src/views/full/index.tsx":
/*!**********************************!*\
  !*** ./src/views/full/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestEntity_1 = __webpack_require__(/*! ./requestEntity */ "./src/views/full/requestEntity.tsx");
Object.defineProperty(exports, "requestEntity", { enumerable: true, get: function () { return requestEntity_1.RequestEntity; } });


/***/ }),

/***/ "./src/views/full/requestEntity.tsx":
/*!******************************************!*\
  !*** ./src/views/full/requestEntity.tsx ***!
  \******************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestEntity = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
// @ts-ignore
var react_select_1 = __importDefault(__webpack_require__(/*! react-select */ "react-select"));
// @ts-ignore
var content_picker_1 = __importDefault(__webpack_require__(/*! botpress/content-picker */ "botpress/content-picker"));
// @ts-ignore
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
// @ts-ignore
var tooltip_1 = __webpack_require__(/*! botpress/tooltip */ "botpress/tooltip");
// @ts-ignore
var style_scss_1 = __importDefault(__webpack_require__(/*! ./style.scss */ "./src/views/full/style.scss"));
var storage_1 = __webpack_require__(/*! ./../../lib/storage */ "./src/lib/storage.ts");
var input_1 = __webpack_require__(/*! ./../../lib/input */ "./src/lib/input.ts");
var RequestEntity = /** @class */ (function (_super) {
    __extends(RequestEntity, _super);
    function RequestEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            storage: undefined,
            varName: '',
            maxRetry: 3,
            qText: '',
            qOnFailure: '',
            entity: undefined,
            entities: [],
            error: undefined
        };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.props.initialData) {
                    this.setStateFromProps(this.props.initialData);
                }
                this.fetchEntities();
                return [2 /*return*/];
            });
        }); };
        _this.fetchEntities = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // this.props.bp.axios.get('/mod/nlu/entities').then(ents => console.log(ents))
                this.setState({
                    'entities': [
                        { value: 'email', label: 'E-mail' }
                    ]
                });
                return [2 /*return*/];
            });
        }); };
        _this.setStateFromProps = function (initProps) {
            var getPropOrDefault = function (key) { return initProps[key] ? initProps[key] : _this.state[key]; };
            _this.setState({
                storage: getPropOrDefault('storage'),
                varName: getPropOrDefault('varName'),
                maxRetry: getPropOrDefault('maxRetry'),
                qText: getPropOrDefault('qText'),
                qOnFailure: getPropOrDefault('qOnFailure'),
                entity: getPropOrDefault('entity'),
                entities: getPropOrDefault('entities'),
                error: getPropOrDefault('error')
            });
        };
        _this.hasValidForm = function () {
            return _this.state.storage
                && (_this.state.varName != '')
                && _this.state.maxRetry
                && (_this.state.qText != '')
                && (_this.state.qOnFailure != '')
                && (_this.state.entity != undefined);
        };
        _this.componentDidUpdate = function (prevProps, prevState) {
            if (_this.state != prevState) {
                _this.updateParent(_this.hasValidForm());
            }
        };
        _this.updateParent = function (valid) {
            if (valid) {
                _this.props.onDataChanged && _this.props.onDataChanged(_this.state);
                _this.props.onValidChanged && _this.props.onValidChanged(true);
            }
            else {
                _this.props.onValidChanged && _this.props.onValidChanged(false);
            }
        };
        _this.handleStorageChange = function (selection) {
            if (storage_1.STORAGES.includes(selection))
                _this.setState({ 'storage': selection });
            else
                _this.setState({ error: 'Please select a storage from the selection' });
        };
        _this.handleVarnameChange = function (input) {
            _this.setState({ varName: input_1.parseVarName(input.target.value) });
        };
        _this.handleRetryCount = function (input) {
            _this.setState({ maxRetry: input_1.parseNumber(input.target.value) });
        };
        _this.handleQuestionChange = function (item) {
            _this.setState({ qText: item.id });
        };
        _this.handleQuestionOnFailureChange = function (item) {
            _this.setState({ qOnFailure: item.id });
        };
        _this.handleEntityChange = function (selection) {
            _this.setState({ entity: selection });
        };
        return _this;
    }
    RequestEntity.prototype.render = function () {
        return (react_1.default.createElement(reactstrap_1.Container, { className: style_scss_1.default.skillContainer },
            this.state.error && react_1.default.createElement(reactstrap_1.Alert, { color: "danger" }, this.state.error),
            react_1.default.createElement(reactstrap_1.Row, { className: style_scss_1.default.skillInput },
                react_1.default.createElement(reactstrap_1.Col, { md: 4 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Select the traget storage type" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "storage" }, "Choose an storage"),
                    react_1.default.createElement(react_select_1.default, { id: "storage", name: "storage", placeholder: "Choose an storage to use", onChange: this.handleStorageChange, value: this.state.storage, options: storage_1.STORAGES })),
                react_1.default.createElement(reactstrap_1.Col, { md: 4 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Define the variable name, only letters and numbers are allowed" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "varName" }, "Choose a variable name"),
                    react_1.default.createElement(reactstrap_1.Input, { id: "varName", name: "varName", placeholder: "Choose a varName to use", onChange: this.handleVarnameChange, value: this.state.varName })),
                react_1.default.createElement(reactstrap_1.Col, { md: 4 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Define maximal retry count" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "maxRetry" }, "Choose a retry count"),
                    react_1.default.createElement(reactstrap_1.Input, { id: "maxRetry", name: "maxRetry", placeholder: "Choose a retry count", onChange: this.handleRetryCount, value: this.state.maxRetry }))),
            react_1.default.createElement(reactstrap_1.Row, { className: style_scss_1.default.skillInput },
                react_1.default.createElement(reactstrap_1.Col, { md: 12 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Please enter quesiton to ask" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "qText" }, "Define question to ask the user"),
                    react_1.default.createElement(content_picker_1.default, { id: "qText", name: "qText", itemId: this.state.qText, placeholder: "Define some quesition text", onChange: this.handleQuestionChange }))),
            react_1.default.createElement(reactstrap_1.Row, { className: style_scss_1.default.skillInput },
                react_1.default.createElement(reactstrap_1.Col, { md: 12 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Please enter quesiton on failure to ask" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "qText" }, "Define question on failure to ask the user"),
                    react_1.default.createElement(content_picker_1.default, { id: "qOnFailure", name: "qOnFailure", placeholder: "Define some quesition on failure text", itemId: this.state.qOnFailure, onChange: this.handleQuestionOnFailureChange }))),
            react_1.default.createElement(reactstrap_1.Row, { className: style_scss_1.default.skillInput },
                react_1.default.createElement(reactstrap_1.Col, { md: 12 },
                    react_1.default.createElement(tooltip_1.BotpressTooltip, { message: "Please select an entity type to use" }),
                    react_1.default.createElement(reactstrap_1.Label, { for: "entity" }, "Select entity type to use"),
                    react_1.default.createElement(react_select_1.default, { id: "entity", name: "entity", placeholder: "Select entity to use", onChange: this.handleEntityChange, value: this.state.entity, options: this.state.entities })))));
    };
    return RequestEntity;
}(react_1.default.Component));
exports.RequestEntity = RequestEntity;


/***/ }),

/***/ "./src/views/full/style.scss":
/*!***********************************!*\
  !*** ./src/views/full/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-modules-typescript-loader!../../../node_modules/css-loader??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-modules-typescript-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./src/views/full/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/views/full/index.tsx */"./src/views/full/index.tsx");


/***/ }),

/***/ "botpress/content-picker":
/*!****************************************!*\
  !*** external "BotpressContentPicker" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = BotpressContentPicker;

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