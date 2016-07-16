/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _ball = __webpack_require__(6);
	
	var _ball2 = _interopRequireDefault(_ball);
	
	var _ballsController = __webpack_require__(8);
	
	var _ballsController2 = _interopRequireDefault(_ballsController);
	
	var _performanceCounter = __webpack_require__(9);
	
	var _performanceCounter2 = _interopRequireDefault(_performanceCounter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canvas = document.querySelector('#app');
	var _window = window;
	var innerHeight = _window.innerHeight;
	var innerWidth = _window.innerWidth;
	
	canvas.setAttribute('width', innerWidth);
	canvas.setAttribute('height', innerHeight);
	var context = canvas.getContext('2d');
	
	var balls = [];
	for (var i = 0; i < 10; i++) {
	  balls.push(new _ball2.default(context));
	}
	
	var FPSLabel = document.querySelector('#fps');
	var counterComponent = new _performanceCounter2.default(FPSLabel);
	
	var ballsController = new _ballsController2.default(balls);
	
	function update() {
	  context.clearRect(0, 0, innerWidth, innerHeight);
	  ballsController.positions.forEach(function (d, i) {
	    balls[i].draw(d.transX, d.transY);
	  });
	  counterComponent.updateCounter();
	  ballsController.update(counterComponent.fps);
	  setTimeout(update, 3);
	}
	
	update();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background-color: skyblue;\n  margin: 0;\n  padding: 0; }\n  body #fps {\n    color: #fff;\n    display: block;\n    font-family: sans-serif;\n    font-size: 1.4em;\n    font-weight: bold;\n    position: fixed;\n    text-align: center;\n    top: 0;\n    width: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _color = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ball = function () {
	  function Ball(canvasCtx) {
	    _classCallCheck(this, Ball);
	
	    this.canvasCtx = canvasCtx;
	    this.radius = Math.random() * 15 + 6;
	
	    this.ball = {
	      color: (0, _color.generateRandomColor)(),
	      strokeColor: (0, _color.generateRandomColor)(),
	      radius: this.radius,
	      lineWidth: 2
	    };
	
	    var lightOpacity = 0.15;
	    this.light = {
	      color: (0, _color.generateRandomColor)(lightOpacity),
	      strokeColor: (0, _color.generateRandomColor)(lightOpacity),
	      radius: this.radius * 4,
	      lineWidth: 6
	    };
	  }
	
	  _createClass(Ball, [{
	    key: 'drawBall',
	    value: function drawBall(_ref) {
	      var color = _ref.color;
	      var strokeColor = _ref.strokeColor;
	      var radius = _ref.radius;
	      var lineWidth = _ref.lineWidth;
	      var transX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	      var transY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	      var canvasCtx = this.canvasCtx;
	
	
	      canvasCtx.beginPath();
	      canvasCtx.fillStyle = color;
	      canvasCtx.strokeStyle = strokeColor;
	      canvasCtx.arc(transX, transY, radius, 0, 2 * Math.PI);
	      canvasCtx.lineWidth = lineWidth;
	      canvasCtx.fill();
	      canvasCtx.stroke();
	    }
	  }, {
	    key: 'draw',
	    value: function draw(transX, transY) {
	      var canvasCtx = this.canvasCtx;
	      var ball = this.ball;
	      var light = this.light;
	      // Prevent this drawing method pollute context
	
	      canvasCtx.save();
	
	      this.drawBall(light, transX, transY);
	      this.drawBall(ball, transX, transY);
	
	      canvasCtx.restore();
	    }
	  }]);
	
	  return Ball;
	}();
	
	exports.default = Ball;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateRandomColor = generateRandomColor;
	function generateRandomColor() {
	  var opacity = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	  var random = function random() {
	    return Number.parseInt(Math.random() * 255);
	  };
	
	  return "rgba(" + random() + ", " + random() + ", " + random() + ", " + opacity + ")";
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameController = function () {
	  function GameController(balls) {
	    _classCallCheck(this, GameController);
	
	    this.positions = [];
	    this.defaultAcc = [];
	    this.speed = [];
	    this.naturalForce = {
	      x: 0,
	      y: 9.8
	    };
	
	    for (var i = 0; i < balls.length; i++) {
	      this.positions.push({
	        transX: 50 + 30 * i,
	        transY: 100
	      });
	      this.defaultAcc.push({
	        x: (Math.random() - 0.5) * 10.0,
	        y: (Math.random() - 0.5) * 10.0
	      });
	      this.speed.push({
	        x: 0,
	        y: 0
	      });
	    }
	  }
	
	  _createClass(GameController, [{
	    key: "update",
	    value: function update(fps) {
	      var _this = this;
	
	      if (!fps || fps < 50) {
	        return;
	      }
	
	      this.positions = this.positions.map(function (d, i) {
	        var accX = _this.defaultAcc[i].x + _this.naturalForce.x;
	        var accY = _this.defaultAcc[i].y + _this.naturalForce.y;
	
	        var time = 1 / fps;
	        _this.speed[i].x = _this.speed[i].x + accX * 50 * time;
	        _this.speed[i].y = _this.speed[i].y + accY * 50 * time;
	
	        d.transX = d.transX + time * _this.speed[i].x;
	        d.transY = d.transY + time * _this.speed[i].y;
	        return d;
	      });
	    }
	  }]);
	
	  return GameController;
	}();
	
	exports.default = GameController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PerformanceCounter = function () {
	  function PerformanceCounter(dom) {
	    var _this = this;
	
	    _classCallCheck(this, PerformanceCounter);
	
	    this.dom = dom;
	    this.timeBeforeCalc = performance.now();
	    this.counter = 0;
	    setInterval(function () {
	      return _this.updateFPS();
	    }, 500);
	  }
	
	  _createClass(PerformanceCounter, [{
	    key: "updateCounter",
	    value: function updateCounter() {
	      this.counter++;
	      this.timeWhenUpdate = performance.now();
	    }
	  }, {
	    key: "updateFPS",
	    value: function updateFPS() {
	      if (!this.timeWhenUpdate) {
	        this.timeWhenUpdate = performance.now();
	        return;
	      }
	      var time = (this.timeWhenUpdate - this.timeBeforeCalc) / this.counter;
	      this.fps = (1000 / time).toFixed(2);
	      this.timeBeforeCalc = performance.now();
	      this.counter = 0;
	
	      this.dom.innerHTML = "FPS: " + this.fps;
	    }
	  }]);
	
	  return PerformanceCounter;
	}();
	
	exports.default = PerformanceCounter;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map