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

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(12)["default"];

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
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(6)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	var _interopRequireDefault = __webpack_require__(7)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _view = __webpack_require__(11);

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
	                _view2['default'].renderTalk(msg.split(',')[0]);
	            });
	            this.io.on('sys message', function (msg) {
	                _view2['default'].renderSysTip(msg);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(7)['default'];

	var _socketC = __webpack_require__(9);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(6)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var View = (function () {
	    function View() {
	        _classCallCheck(this, View);

	        this.talkBox = document.querySelector('.msg-box ul');
	        this.tipBox = document.querySelector('.tip-box ul');
	        this.inPut = document.querySelector('.footer .talk');
	        this.tips = [];
	        this._st = false;
	    }

	    _createClass(View, [{
	        key: 'renderTalk',
	        value: function renderTalk(content) {
	            var _li = this.createElement({
	                tag: 'li',
	                cls: 'msg,animated,bounceInLeft'
	            })([{
	                tag: 'i',
	                props: [{
	                    name: 'style',
	                    value: 'background-image: url(http://7xnt0i.com1.z0.glb.clouddn.com/9)'
	                }]
	            }, {
	                tag: 'p',
	                ctx: content
	            }])();
	            this.talkBox.appendChild(_li);
	            this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
	            this.inPut.value = '';
	        }
	    }, {
	        key: 'renderCtxTip',
	        value: function renderCtxTip(content) {
	            var _li = this.createElement({
	                tag: 'li',
	                cls: 'tip,animated,fadeIn'
	            })({
	                tag: 'span',
	                ctx: content
	            })();
	            this.talkBox.appendChild(_li);
	            this.talkBox.parentNode.scrollTop = this.talkBox.offsetHeight;
	        }
	    }, {
	        key: 'renderSysTip',
	        value: function renderSysTip(content) {
	            var _this = this;

	            var _li = this.createElement({
	                tag: 'li',
	                cls: 'animated,bounceIn'
	            })({
	                tag: 'p',
	                cls: 'msg',
	                ctx: content
	            })();
	            this.tipBox.appendChild(_li);
	            setTimeout(function () {
	                _this.animationEnd(_li, 'bounceOut');
	            }, 3000);
	        }
	    }, {
	        key: 'createElement',
	        value: function createElement(para) {
	            var _this2 = this;

	            var child = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	            var _tag = [],
	                _child = [];
	            if (para[0]) {
	                para.forEach(function (dom, i) {
	                    setProps(dom);
	                });
	            } else if (typeof para === 'object') {
	                setProps(para);
	            }
	            function setProps(para) {
	                var tag = para.tag;
	                var cls = para.cls;
	                var ctx = para.ctx;
	                var props = para.props;
	                var _cls = cls || '';
	                var _props = props || [];
	                var _dom = '';
	                var _ctx = ctx || '';
	                _dom = document.createElement(tag);
	                _child = child;
	                _cls.split(',').forEach(function (_cls) {
	                    if (!_cls) return false;
	                    _dom.classList.add(_cls);
	                });
	                _props.forEach(function (_props) {
	                    _dom.setAttribute(_props["name"], _props["value"]);
	                });
	                _dom.innerHTML = _ctx;
	                _tag.push(_dom);
	            }
	            if (_tag.length > 1) {
	                _child.push(_tag);
	            } else {
	                _child.push(_tag[0]);
	            }
	            return function (para) {
	                if (!para) {
	                    var _ret = (function () {
	                        var _len = _child.length - 2;
	                        while (_len >= 0) {
	                            if (_child[_len + 1] instanceof Array) {
	                                _child[_len + 1].forEach(function (_childs) {
	                                    _child[_len].appendChild(_childs);
	                                });
	                            } else {
	                                _child[_len].appendChild(_child[_len + 1]);
	                            }
	                            _len--;
	                        }
	                        return {
	                            v: _child[0]
	                        };
	                    })();

	                    if (typeof _ret === 'object') return _ret.v;
	                }
	                return _this2.createElement(para, _child);
	            };
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 14 */
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