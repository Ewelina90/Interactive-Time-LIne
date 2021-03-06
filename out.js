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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

    var data = [['1.06.2015', 'LOREM IPSUM DOLOR SIT', 'fa-trophy'], ['11.06.2015', 'LOREM IPSUM DOLOR SIT', 'fa-heart'], ['15.06.2015', 'LOREM IPSUM DOLOR SIT', 'fa-graduation-cap'], ['22.06.2015', 'LOREM IPSUM DOLOR SIT', 'fa-flask'], ['30.06.2015', 'LOREM IPSUM DOLOR SIT', 'fa-gavel']];
    var eventContener = document.querySelector('.time-line__scale');
    var numberOfDaysInMonth = 30; // June
    var today = 10;
    var windowWidth = window.innerWidth;

    if (windowWidth >= 1200) {
        // set length of a scale
        eventContener.style.width = numberOfDaysInMonth * 37 + 'px';
        // set length of scale background
        eventContener.parentNode.style.width = numberOfDaysInMonth * 37 + 'px';
        // set length of time-line progress
        eventContener.firstElementChild.style.width = today * 37 - 18 + 'px';
    }

    function createEvent(data, place) {
        data.map(function (el, index) {

            // get number of day
            var dayNumber = getNumberOfDay(el[0]);

            // create elements
            var newEvent = document.createElement('div');
            newEvent.classList.add('event__background');
            // set position of event on timeline
            newEvent.style.left = calculatePosition(dayNumber, numberOfDaysInMonth, place);

            var newEventCircle = document.createElement('div');
            newEventCircle.classList.add(dayNumber <= today ? 'event__circle--finished' : 'event__circle');

            var newEventIcon = document.createElement('i');
            newEventIcon.classList.add('fa', el[2]);

            var newEventTooltip = document.createElement('div');
            newEventTooltip.classList.add('event__tooltip');

            var newEventTooltipData = document.createElement('div');
            newEventTooltipData.classList.add('event__tooltip--data');
            newEventTooltipData.textContent = el[0];

            var newEventTooltipName = document.createElement('div');
            newEventTooltipName.classList.add('event__tooltip--name');
            newEventTooltipName.textContent = el[1];

            // append elements
            newEventTooltip.appendChild(newEventTooltipData);
            newEventTooltip.appendChild(newEventTooltipName);
            newEventCircle.appendChild(newEventIcon);
            newEvent.appendChild(newEventCircle);
            newEvent.appendChild(newEventTooltip);
            place.appendChild(newEvent);
        });
    }

    function calculatePosition(dayNumber, numberOfDaysInMonth, scale) {
        var widthOfPiece = scale.clientWidth / numberOfDaysInMonth;

        var position = 0;

        if (dayNumber === numberOfDaysInMonth) {
            position = widthOfPiece * dayNumber - widthOfPiece + 4;
        } else {
            position = widthOfPiece * dayNumber - widthOfPiece - 4;
        }

        return position + 'px';
    }

    function getNumberOfDay(date) {
        return parseInt(date.slice(0, date.indexOf('.')));
    }

    createEvent(data, eventContener);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Lato', sans-serif;\n  font-size: 11px; }\n\nbody {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n\n.time-line__container {\n  width: 100%; }\n  .time-line__container .time-line__background {\n    width: 100%; }\n    .time-line__container .time-line__background .time-line__scale {\n      width: 70%;\n      min-width: 350px;\n      margin: 0 auto; }\n      .time-line__container .time-line__background .time-line__scale .time-line__progress {\n        width: 100%; }\n\n.event__background {\n  width: 100%;\n  padding: 5px 10px; }\n  .event__background .event__tooltip {\n    width: 70%;\n    float: left;\n    padding-top: 10px; }\n    .event__background .event__tooltip .event__tooltip--data {\n      line-height: 20px;\n      font-weight: 700; }\n    .event__background .event__tooltip .event__tooltip--name {\n      font-weight: 300;\n      line-height: 20px; }\n  .event__background .event__circle {\n    font-size: 16px;\n    margin: 10px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #122344;\n    color: white;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    float: left; }\n  .event__background .event__circle--finished {\n    box-sizing: content-box;\n    float: left;\n    font-size: 16px;\n    margin: 10px;\n    width: 34px;\n    font-size: 16px;\n    height: 34px;\n    border-width: 3px;\n    border-color: #122344;\n    border-style: solid;\n    border-radius: 50%;\n    background: #699fc9;\n    box-shadow: 0px 2px 1px -1px white inset, 0px 0px 2px 0px grey;\n    color: #122344;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center; }\n  .event__background::after {\n    display: block;\n    content: '';\n    clear: both; }\n\n@media (min-width: 1200px) {\n  .time-line__container {\n    width: 100%;\n    height: 500px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .time-line__container .time-line__background {\n      height: 19px;\n      background: #122344;\n      border-radius: 5px; }\n      .time-line__container .time-line__background .time-line__scale {\n        height: 11px;\n        position: relative; }\n        .time-line__container .time-line__background .time-line__scale .time-line__progress {\n          margin: 4px;\n          border-radius: 8px;\n          height: 11px;\n          background: #336084;\n          /* Old browsers */\n          background: -moz-linear-gradient(left, #336084 0%, #80b9e5 39%, #e4f8ff 63%, #80b9e5 79%, #336084 100%);\n          /* FF3.6-15 */\n          background: -webkit-linear-gradient(left, #336084 0%, #80b9e5 39%, #e4f8ff 63%, #80b9e5 79%, #336084 100%);\n          /* Chrome10-25,Safari5.1-6 */\n          background: linear-gradient(to right, #336084 0%, #80b9e5 39%, #e4f8ff 63%, #80b9e5 79%, #336084 100%);\n          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ }\n  .event__background {\n    width: 37px;\n    height: 37px;\n    position: absolute;\n    border-radius: 50%;\n    background: #122344;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: -12px;\n    left: -10px;\n    padding: 0; }\n    .event__background .event__tooltip {\n      border: 1px solid #6ecca5;\n      position: absolute;\n      height: 70px;\n      width: 100px;\n      top: -90px;\n      text-align: center;\n      display: none;\n      padding-top: 0; }\n      .event__background .event__tooltip .event__tooltip--data {\n        line-height: 20px;\n        border-bottom: 1px solid #6ecca5;\n        font-weight: 700;\n        padding: 5px 3px; }\n      .event__background .event__tooltip .event__tooltip--name {\n        font-weight: 300;\n        padding: 3px;\n        line-height: normal; }\n      .event__background .event__tooltip::after {\n        content: ' ';\n        display: block;\n        width: 8px;\n        height: 8px;\n        border-bottom: 1px solid #6ecca5;\n        border-left: 1px solid #6ecca5;\n        transform: rotate(-45deg);\n        transform-origin: center;\n        z-index: 10;\n        position: relative;\n        margin: 0 auto;\n        top: 3px;\n        background-color: white; }\n    .event__background:hover .event__tooltip {\n      display: block; }\n    .event__background .event__circle {\n      width: 29px;\n      height: 29px;\n      border-radius: 50%;\n      background: #122344;\n      color: white;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 16px; }\n      .event__background .event__circle:hover {\n        background: #6ecca5;\n        transition: 0.2s; }\n    .event__background .event__circle--finished {\n      box-sizing: border-box;\n      border-width: 0;\n      border-style: none;\n      margin: 0;\n      width: 29px;\n      font-size: 16px;\n      height: 29px;\n      border-radius: 50%;\n      background: #699fc9;\n      box-shadow: 0px 2px 1px -1px white inset, 0px 0px 2px 0px grey;\n      color: #122344;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .event__background .event__circle--finished:hover {\n        background: #6ecca5;\n        transition: 0.2s; } }\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 5 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);