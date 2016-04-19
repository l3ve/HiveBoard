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

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(9)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(3)['default'];

	var _socketC = __webpack_require__(7);

	var _socketC2 = _interopRequireDefault(_socketC);

	var socket = _socketC2['default'];

	document.querySelector('.talk').addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        socket.send('message', e.path[0].value);
	    }
	});
	document.querySelector('.name').addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        window.localStorage.name = e.path[0].value;
	        socket.send('changeName', e.path[0].value);
	    }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(2)['default'];

	var _classCallCheck = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(3)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _view = __webpack_require__(8);

	var _view2 = _interopRequireDefault(_view);

	var Io = (function () {
	    function Io() {
	        _classCallCheck(this, Io);

	        this.io = false;
	        this.init();
	    }

	    _createClass(Io, [{
	        key: 'init',
	        value: function init() {
	            this.io = io('http://192.168.4.191:3333');
	            this.setPara();
	            this.io.on('message', function (msg) {
	                _view2['default'].renderLi(msg);
	            });
	            this.io.on('sys message', function (msg) {
	                _view2['default'].renderTip(msg);
	            });
	            this.io.on('newUser', function (msg) {
	                _view2['default'].renderCtxTip(msg);
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
	        value: function send(type, msg) {
	            this.io.emit(type, msg);
	        }
	    }]);

	    return Io;
	})();

	exports['default'] = new Io();
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(2)['default'];

	var _classCallCheck = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var View = (function () {
	    function View() {
	        _classCallCheck(this, View);

	        this.talkBox = document.querySelector('.msg-box ul');
	        this.tipBox = document.querySelector('.tip-box ul');
	        this.tips = [];
	        this._st = false;
	        console.log(this.createElement({
	            tag: 'ul',
	            cls: 'li'
	        })({
	            tag: 'li',
	            cls: 'li'
	        })({
	            tag: 'a',
	            cls: 'xis',
	            ctx: '这是消息'
	        })());
	    }

	    _createClass(View, [{
	        key: 'renderLi',
	        value: function renderLi(content) {
	            var _li = this.createLiElement(content, 'fadeInDown');
	            this.talkBox.appendChild(_li);
	            this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
	        }
	    }, {
	        key: 'renderCtxTip',
	        value: function renderCtxTip(content) {
	            var _li = this.createLiElement(content, 'fadeInDown');
	            this.talkBox.appendChild(_li);
	            this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
	        }
	    }, {
	        key: 'renderTip',
	        value: function renderTip(content) {
	            var _this = this;

	            var _li = this.createLiElement(content, 'flipInX'),
	                _tipBox = this.tipBox;
	            _tipBox.appendChild(_li);
	            setTimeout(function () {
	                _this.animationEnd(_li, 'rotateOutUpRight');
	            }, 3000);
	        }
	    }, {
	        key: 'createLiElement',
	        value: function createLiElement(content, animated) {
	            var _li = document.createElement('li'),
	                _p = document.createElement('p');
	            _p.innerHTML = content;
	            _li.appendChild(_p);
	            this.animationStart(_li, animated);
	            return _li;
	        }
	    }, {
	        key: 'createElement',
	        value: function createElement(para) {
	            var _this2 = this;

	            var tag = para.tag;
	            var cls = para.cls;
	            var child = para.child;
	            var ctx = para.ctx;
	            var _tag = document.createElement(tag);
	            var _child = child || [];
	            if (cls) {
	                cls.split(',').forEach(function (_cls, i) {
	                    _tag.classList.add(_cls);
	                });
	            }
	            if (ctx) {
	                _tag.innerHTML = ctx;
	            }
	            _child.push(_tag);
	            return function (para) {
	                if (!para) {
	                    var _res = _tag,
	                        _len = _child.length - 2;
	                    while (_len >= 0) {
	                        _res = _child[_len].appendChild(_res);
	                        console.log(_res);
	                        console.log(_len);
	                        _len--;
	                    }
	                    return _res;
	                }
	                var _para = {
	                    tag: para.tag || false,
	                    cls: para.cls || '',
	                    child: _child || false,
	                    ctx: para.ctx || ''
	                };
	                return _this2.createElement(_para);
	            };
	        }
	    }, {
	        key: 'animationStart',
	        value: function animationStart(dom, animated) {
	            dom.classList.add('animated', animated);
	        }
	    }, {
	        key: 'animationEnd',
	        value: function animationEnd(dom, animated, callback) {
	            dom.classList.add('animated', animated);
	            dom.addEventListener('webkitAnimationEnd', function () {
	                dom.parentNode.removeChild(dom);
	                typeof callback === 'function' ? callback() : '';
	                dom = null;
	            });
	        }
	    }]);

	    return View;
	})();

	;

	exports['default'] = new View();
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }
/******/ ])
});
;