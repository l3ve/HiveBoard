(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(6)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(14);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _chess = __webpack_require__(30);

	var _chess2 = _interopRequireDefault(_chess);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Canvas = function () {
	    function Canvas(canvasId) {
	        (0, _classCallCheck3.default)(this, Canvas);

	        this.canvas = document.querySelector('#' + canvasId);
	        this.ctx = canvas.getContext('2d');
	        this.yourTurn = true;
	        this.canvas.setAttribute('width', document.querySelector('.game-box').offsetWidth + 'px');
	        this.canvas.setAttribute('height', document.querySelector('.game-box').offsetHeight - 140 + 'px');
	        this.chess = {
	            previewChess: '',
	            firstPosition: {
	                x: 0,
	                y: 0
	            },
	            allChess: []
	        };
	        this.layout = [];
	        this.selectEnd = true;
	        this.handleClick = this.handleClick.bind(this);
	        this.previewChess = this.previewChess.bind(this);
	        this.reset = this.reset.bind(this);
	        this.listenerEvent();
	        this.updata();
	    }

	    (0, _createClass3.default)(Canvas, [{
	        key: 'listenerEvent',
	        value: function listenerEvent() {
	            this.canvas.addEventListener("click", this.handleClick, false);
	        }
	    }, {
	        key: 'removeListenerEvent',
	        value: function removeListenerEvent() {
	            this.canvas.removeEventListener("mousemove", this.previewChess);
	            this.canvas.removeEventListener("contextmenu", this.reset);
	        }
	    }, {
	        key: 'updata',
	        value: function updata() {
	            var _this = this;

	            this.clear();
	            this.chess.allChess.forEach(function (chess) {
	                _this.drawChess(chess);
	            });
	            this.drawChess(this.chess.previewChess);
	            requestAnimationFrame(function () {
	                return _this.updata();
	            });
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            var w = arguments.length <= 0 || arguments[0] === undefined ? this.canvas.width : arguments[0];
	            var h = arguments.length <= 1 || arguments[1] === undefined ? this.canvas.height : arguments[1];

	            this.ctx.clearRect(0, 0, w, h);
	        }
	    }, {
	        key: 'saveChess',
	        value: function saveChess(chess) {
	            this.chess.allChess.push(chess);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            var type = document.querySelector('.room').value;
	            switch (type) {
	                case '1':
	                    this.selectChess(e);
	                    break;
	                case '2':
	                    this.setChess(e);
	                    break;
	                default:
	                    this.setChess(e);
	                    break;
	            }
	        }
	    }, {
	        key: 'selectChess',
	        value: function selectChess(e) {
	            var _this2 = this;

	            if (this.selectEnd) {
	                var newChess = this.chess.allChess.filter(function (chess) {
	                    if (chess.isYou(e.offsetX, e.offsetY)) {
	                        _this2.chess.firstPosition = {
	                            x: e.offsetX,
	                            y: e.offsetY
	                        };
	                        _this2.chess.previewChess = chess;
	                        _this2.selectEnd = false;
	                        console.log(1);
	                        _this2.canvas.addEventListener("mousemove", _this2.previewChess, false);
	                        _this2.canvas.addEventListener("contextmenu", _this2.reset, false);
	                        return false;
	                    } else {
	                        return true;
	                    }
	                });
	                this.chess.allChess = newChess;
	            } else {
	                this.chess.allChess.push(this.chess.previewChess);
	                this.reset(null, false);
	            }
	        }
	    }, {
	        key: 'setChess',
	        value: function setChess(e) {
	            var para = {
	                x: e.offsetX,
	                y: e.offsetY,
	                type: 1,
	                reside: 1
	            },
	                chess = new _chess2.default(para);
	            this.saveChess(chess);
	        }
	    }, {
	        key: 'previewChess',
	        value: function previewChess(e) {
	            this.chess.previewChess.move(e.offsetX, e.offsetY);
	        }
	    }, {
	        key: 'reset',
	        value: function reset(e) {
	            var b = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	            this.removeListenerEvent();
	            this.selectEnd = true;
	            if (b) {
	                this.chess.previewChess.move(this.chess.firstPosition.x, this.chess.firstPosition.y);
	                this.chess.allChess.push(this.chess.previewChess);
	            }
	            this.chess.previewChess = '';
	        }
	    }, {
	        key: 'drawChess',
	        value: function drawChess(chess) {
	            var x = chess.x;
	            var y = chess.y;
	            var size = chess.size;
	            var ctx = this.ctx;
	            // ctx.save();
	            // ctx.lineWidth = 1;
	            // ctx.strokeStyle = "#000";
	            //绘制棋子
	            ctx.beginPath();
	            ctx.moveTo(x, y);
	            ctx.moveTo(x + size, y + Math.sqrt(3) * size);
	            ctx.lineTo(x + size * 2, y);
	            ctx.lineTo(x + size, y - Math.sqrt(3) * size);
	            ctx.lineTo(x - size, y - Math.sqrt(3) * size);
	            ctx.lineTo(x - size * 2, y);
	            ctx.lineTo(x - size, y + Math.sqrt(3) * size);
	            ctx.closePath();
	            ctx.stroke();
	            //调试判断面积的圆
	            ctx.beginPath();
	            ctx.arc(x, y, Math.sqrt(3) * size, 0, 2 * Math.PI);
	            ctx.closePath();
	            ctx.stroke();
	        }
	    }]);
	    return Canvas;
	}();

	exports.default = Canvas;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Io = function () {
	    function Io() {
	        (0, _classCallCheck3.default)(this, Io);

	        this.io = false;
	        this.init();
	    }

	    (0, _createClass3.default)(Io, [{
	        key: 'init',
	        value: function init() {
	            this.io = io('http://192.168.72.58:3333');
	            this.setPara();
	            this.io.on('talk', function (res) {
	                console.log(res.split(',')[1] + ': ' + res.split(',')[0] + '.');
	            });
	            this.io.on('tip', function (res) {
	                console.log('系统:' + res);
	            });
	            this.io.on('newUser', function (res) {
	                console.log('---' + res.msg + '---');
	                console.log('当前人数:' + res.num + '.');
	            });
	            this.io.on('leave', function (res) {
	                console.log('---' + res.msg + '---');
	                console.log('当前人数:' + res.num + '.');
	            });
	        }
	    }, {
	        key: 'setPara',
	        value: function setPara() {
	            if (window.localStorage.name) {
	                var _name = window.localStorage.name;
	                document.querySelector('.name').setAttribute('value', _name);
	                this.send('init', _name);
	            }
	        }
	    }, {
	        key: 'send',
	        value: function send(type) {
	            var msg = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	            this.io.emit(type, msg);
	        }
	    }]);
	    return Io;
	}();

	exports.default = new Io();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _socketC = __webpack_require__(12);

	var _socketC2 = _interopRequireDefault(_socketC);

	var _canvas = __webpack_require__(11);

	var _canvas2 = _interopRequireDefault(_canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var socket = _socketC2.default,
	    canvas = new _canvas2.default('canvas');

	document.querySelector('.talk').addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        socket.send('talk', e.path[0].value);
	    }
	});
	document.querySelector('.room').addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        canvas.clear();
	        // canvas.removeListenerEvent();
	    }
	});
	document.querySelector('.name').addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        window.localStorage.name = e.path[0].value;
	        socket.send('changeName', e.path[0].value);
	    }
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	var $Object = __webpack_require__(5).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(5)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(1) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(1) && !__webpack_require__(6)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(2);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(20);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(1), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chess = function () {
	    function Chess(chess) {
	        (0, _classCallCheck3.default)(this, Chess);

	        this.type = chess.type || 1;
	        this.size = chess.size || 15;
	        this.x = chess.x || 0;
	        this.y = chess.y || 0;
	        this.color = chess.color || '#000';
	        this.reside = chess.reside || 0;
	    }

	    (0, _createClass3.default)(Chess, [{
	        key: 'move',
	        value: function move(x, y) {
	            this.x = x;
	            this.y = y;
	        }
	    }, {
	        key: 'setColor',
	        value: function setColor(color) {
	            this.color = color;
	        }
	    }, {
	        key: 'isYou',
	        value: function isYou(x, y) {
	            var radius = Math.sqrt(3) * this.size - 10;
	            return x <= this.x + radius && x >= this.x - radius && y <= this.y + radius && y >= this.y - radius;
	        }
	    }]);
	    return Chess;
	}();

	exports.default = Chess;

/***/ }
/******/ ])
});
;