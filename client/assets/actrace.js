(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"), require("buffer"), require("events"), (function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), require("crypto"), require("fs"), require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["util", "buffer", "events", "stream", "crypto", "fs", "path"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("util"), require("buffer"), require("events"), (function webpackLoadOptionalExternalModule() { try { return require("stream"); } catch(e) {} }()), require("crypto"), require("fs"), require("path")) : factory(root["util"], root["buffer"], root["events"], root["stream"], root["crypto"], root["fs"], root["path"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_151__, __WEBPACK_EXTERNAL_MODULE_152__) {
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

	module.exports = __webpack_require__(63);


/***/ },
/* 1 */
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(50)('wks')
	  , uid    = __webpack_require__(52)
	  , Symbol = __webpack_require__(4).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports.AbstractLevelDOWN    = __webpack_require__(38)
	exports.AbstractIterator     = __webpack_require__(37)
	exports.AbstractChainedBatch = __webpack_require__(36)
	exports.isLevelDOWN          = __webpack_require__(62)


/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3).inherits


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = __webpack_require__(33);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(13);
	util.inherits = __webpack_require__(7);
	/*</replacement>*/

	var Readable = __webpack_require__(57);
	var Writable = __webpack_require__(59);

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
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
/* 12 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2012-2015 LevelUP contributors
	 * See list at <https://github.com/rvagg/node-levelup#contributing>
	 * MIT License
	 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
	 */

	var createError   = __webpack_require__(116).create
	  , LevelUPError  = createError('LevelUPError')
	  , NotFoundError = createError('NotFoundError', LevelUPError)

	NotFoundError.prototype.notFound = true
	NotFoundError.prototype.status   = 404

	module.exports = {
	    LevelUPError        : LevelUPError
	  , InitializationError : createError('InitializationError', LevelUPError)
	  , OpenError           : createError('OpenError', LevelUPError)
	  , ReadError           : createError('ReadError', LevelUPError)
	  , WriteError          : createError('WriteError', LevelUPError)
	  , NotFoundError       : NotFoundError
	  , EncodingError       : createError('EncodingError', LevelUPError)
	}


/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = require("buffer");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(47)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(11)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(1).setDesc
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(2)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(87)
	  , defined = __webpack_require__(46);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {
	/**
	 * Module dependencies.
	 */

	var fs = __webpack_require__(151)
	  , path = __webpack_require__(152)
	  , join = path.join
	  , dirname = path.dirname
	  , exists = fs.existsSync || path.existsSync
	  , defaults = {
	        arrow: process.env.NODE_BINDINGS_ARROW || ' → '
	      , compiled: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled'
	      , platform: process.platform
	      , arch: process.arch
	      , version: process.versions.node
	      , bindings: 'bindings.node'
	      , try: [
	          // node-gyp's linked version in the "build" dir
	          [ 'module_root', 'build', 'bindings' ]
	          // node-waf and gyp_addon (a.k.a node-gyp)
	        , [ 'module_root', 'build', 'Debug', 'bindings' ]
	        , [ 'module_root', 'build', 'Release', 'bindings' ]
	          // Debug files, for development (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Debug', 'bindings' ]
	        , [ 'module_root', 'Debug', 'bindings' ]
	          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Release', 'bindings' ]
	        , [ 'module_root', 'Release', 'bindings' ]
	          // Legacy from node-waf, node <= 0.4.x
	        , [ 'module_root', 'build', 'default', 'bindings' ]
	          // Production "Release" buildtype binary (meh...)
	        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
	        ]
	    }

	/**
	 * The main `bindings()` function loads the compiled bindings for a given module.
	 * It uses V8's Error API to determine the parent filename that this function is
	 * being invoked from, which is then used to find the root directory.
	 */

	function bindings (opts) {

	  // Argument surgery
	  if (typeof opts == 'string') {
	    opts = { bindings: opts }
	  } else if (!opts) {
	    opts = {}
	  }
	  opts.__proto__ = defaults

	  // Get the module root
	  if (!opts.module_root) {
	    opts.module_root = exports.getRoot(exports.getFileName())
	  }

	  // Ensure the given bindings name ends with .node
	  if (path.extname(opts.bindings) != '.node') {
	    opts.bindings += '.node'
	  }

	  var tries = []
	    , i = 0
	    , l = opts.try.length
	    , n
	    , b
	    , err

	  for (; i<l; i++) {
	    n = join.apply(null, opts.try[i].map(function (p) {
	      return opts[p] || p
	    }))
	    tries.push(n)
	    try {
	      b = opts.path ? /*require.resolve*/(__webpack_require__(43).resolve(n)) : __webpack_require__(43)(n)
	      if (!opts.path) {
	        b.path = n
	      }
	      return b
	    } catch (e) {
	      if (!/not find/i.test(e.message)) {
	        throw e
	      }
	    }
	  }

	  err = new Error('Could not locate the bindings file. Tried:\n'
	    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
	  err.tries = tries
	  throw err
	}
	module.exports = exports = bindings


	/**
	 * Gets the filename of the JavaScript file that invokes this function.
	 * Used to help find the root directory of a module.
	 * Optionally accepts an filename argument to skip when searching for the invoking filename
	 */

	exports.getFileName = function getFileName (calling_file) {
	  var origPST = Error.prepareStackTrace
	    , origSTL = Error.stackTraceLimit
	    , dummy = {}
	    , fileName

	  Error.stackTraceLimit = 10

	  Error.prepareStackTrace = function (e, st) {
	    for (var i=0, l=st.length; i<l; i++) {
	      fileName = st[i].getFileName()
	      if (fileName !== __filename) {
	        if (calling_file) {
	            if (fileName !== calling_file) {
	              return
	            }
	        } else {
	          return
	        }
	      }
	    }
	  }

	  // run the 'prepareStackTrace' function above
	  Error.captureStackTrace(dummy)
	  dummy.stack

	  // cleanup
	  Error.prepareStackTrace = origPST
	  Error.stackTraceLimit = origSTL

	  return fileName
	}

	/**
	 * Gets the root directory of a module, given an arbitrary filename
	 * somewhere in the module tree. The "root directory" is the directory
	 * containing the `package.json` file.
	 *
	 *   In:  /home/nate/node-native-module/lib/index.js
	 *   Out: /home/nate/node-native-module
	 */

	exports.getRoot = function getRoot (file) {
	  var dir = dirname(file)
	    , prev
	  while (true) {
	    if (dir === '.') {
	      // Avoids an infinite loop in rare cases, like the REPL
	      dir = process.cwd()
	    }
	    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
	      // Found the 'package.json' file or 'node_modules' dir; we're done
	      return dir
	    }
	    if (prev === dir) {
	      // Got to the top
	      throw new Error('Could not find module root given file: "' + file
	                    + '". Do you have a `package.json` file? ')
	    }
	    // Try the parent dir next
	    prev = dir
	    dir = join(dir, '..')
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(1)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	'use strict';

	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn) {
	  var args = new Array(arguments.length - 1);
	  var i = 0;
	  while (i < args.length) {
	    args[i++] = arguments[i];
	  }
	  process.nextTick(function afterTick() {
	    fn.apply(null, args);
	  });
	}


/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 36 */
/***/ function(module, exports) {

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractChainedBatch (db) {
	  this._db         = db
	  this._operations = []
	  this._written    = false
	}

	AbstractChainedBatch.prototype._checkWritten = function () {
	  if (this._written)
	    throw new Error('write() already called on this batch')
	}

	AbstractChainedBatch.prototype.put = function (key, value) {
	  this._checkWritten()

	  var err = this._db._checkKey(key, 'key', this._db._isBuffer)
	  if (err)
	    throw err

	  if (!this._db._isBuffer(key)) key = String(key)
	  if (!this._db._isBuffer(value)) value = String(value)

	  if (typeof this._put == 'function' )
	    this._put(key, value)
	  else
	    this._operations.push({ type: 'put', key: key, value: value })

	  return this
	}

	AbstractChainedBatch.prototype.del = function (key) {
	  this._checkWritten()

	  var err = this._db._checkKey(key, 'key', this._db._isBuffer)
	  if (err) throw err

	  if (!this._db._isBuffer(key)) key = String(key)

	  if (typeof this._del == 'function' )
	    this._del(key)
	  else
	    this._operations.push({ type: 'del', key: key })

	  return this
	}

	AbstractChainedBatch.prototype.clear = function () {
	  this._checkWritten()

	  this._operations = []

	  if (typeof this._clear == 'function' )
	    this._clear()

	  return this
	}

	AbstractChainedBatch.prototype.write = function (options, callback) {
	  this._checkWritten()

	  if (typeof options == 'function')
	    callback = options
	  if (typeof callback != 'function')
	    throw new Error('write() requires a callback argument')
	  if (typeof options != 'object')
	    options = {}

	  this._written = true

	  if (typeof this._write == 'function' )
	    return this._write(callback)

	  if (typeof this._db._batch == 'function')
	    return this._db._batch(this._operations, options, callback)

	  process.nextTick(callback)
	}

	module.exports = AbstractChainedBatch

/***/ },
/* 37 */
/***/ function(module, exports) {

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	function AbstractIterator (db) {
	  this.db = db
	  this._ended = false
	  this._nexting = false
	}

	AbstractIterator.prototype.next = function (callback) {
	  var self = this

	  if (typeof callback != 'function')
	    throw new Error('next() requires a callback argument')

	  if (self._ended)
	    return callback(new Error('cannot call next() after end()'))
	  if (self._nexting)
	    return callback(new Error('cannot call next() before previous next() has completed'))

	  self._nexting = true
	  if (typeof self._next == 'function') {
	    return self._next(function () {
	      self._nexting = false
	      callback.apply(null, arguments)
	    })
	  }

	  process.nextTick(function () {
	    self._nexting = false
	    callback()
	  })
	}

	AbstractIterator.prototype.end = function (callback) {
	  if (typeof callback != 'function')
	    throw new Error('end() requires a callback argument')

	  if (this._ended)
	    return callback(new Error('end() already called on iterator'))

	  this._ended = true

	  if (typeof this._end == 'function')
	    return this._end(callback)

	  process.nextTick(callback)
	}

	module.exports = AbstractIterator


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2013 Rod Vagg, MIT License */

	var xtend                = __webpack_require__(23)
	  , AbstractIterator     = __webpack_require__(37)
	  , AbstractChainedBatch = __webpack_require__(36)

	function AbstractLevelDOWN (location) {
	  if (!arguments.length || location === undefined)
	    throw new Error('constructor requires at least a location argument')

	  if (typeof location != 'string')
	    throw new Error('constructor requires a location string argument')

	  this.location = location
	  this.status = 'new'
	}

	AbstractLevelDOWN.prototype.open = function (options, callback) {
	  var self      = this
	    , oldStatus = this.status

	  if (typeof options == 'function')
	    callback = options

	  if (typeof callback != 'function')
	    throw new Error('open() requires a callback argument')

	  if (typeof options != 'object')
	    options = {}

	  options.createIfMissing = options.createIfMissing != false
	  options.errorIfExists = !!options.errorIfExists

	  if (typeof this._open == 'function') {
	    this.status = 'opening'
	    this._open(options, function (err) {
	      if (err) {
	        self.status = oldStatus
	        return callback(err)
	      }
	      self.status = 'open'
	      callback()
	    })
	  } else {
	    this.status = 'open'
	    process.nextTick(callback)
	  }
	}

	AbstractLevelDOWN.prototype.close = function (callback) {
	  var self      = this
	    , oldStatus = this.status

	  if (typeof callback != 'function')
	    throw new Error('close() requires a callback argument')

	  if (typeof this._close == 'function') {
	    this.status = 'closing'
	    this._close(function (err) {
	      if (err) {
	        self.status = oldStatus
	        return callback(err)
	      }
	      self.status = 'closed'
	      callback()
	    })
	  } else {
	    this.status = 'closed'
	    process.nextTick(callback)
	  }
	}

	AbstractLevelDOWN.prototype.get = function (key, options, callback) {
	  var err

	  if (typeof options == 'function')
	    callback = options

	  if (typeof callback != 'function')
	    throw new Error('get() requires a callback argument')

	  if (err = this._checkKey(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key)

	  if (typeof options != 'object')
	    options = {}

	  options.asBuffer = options.asBuffer != false

	  if (typeof this._get == 'function')
	    return this._get(key, options, callback)

	  process.nextTick(function () { callback(new Error('NotFound')) })
	}

	AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
	  var err

	  if (typeof options == 'function')
	    callback = options

	  if (typeof callback != 'function')
	    throw new Error('put() requires a callback argument')

	  if (err = this._checkKey(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key)

	  // coerce value to string in node, don't touch it in browser
	  // (indexeddb can store any JS type)
	  if (value != null && !this._isBuffer(value) && !process.browser)
	    value = String(value)

	  if (typeof options != 'object')
	    options = {}

	  if (typeof this._put == 'function')
	    return this._put(key, value, options, callback)

	  process.nextTick(callback)
	}

	AbstractLevelDOWN.prototype.del = function (key, options, callback) {
	  var err

	  if (typeof options == 'function')
	    callback = options

	  if (typeof callback != 'function')
	    throw new Error('del() requires a callback argument')

	  if (err = this._checkKey(key, 'key', this._isBuffer))
	    return callback(err)

	  if (!this._isBuffer(key))
	    key = String(key)

	  if (typeof options != 'object')
	    options = {}

	  if (typeof this._del == 'function')
	    return this._del(key, options, callback)

	  process.nextTick(callback)
	}

	AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
	  if (!arguments.length)
	    return this._chainedBatch()

	  if (typeof options == 'function')
	    callback = options

	  if (typeof array == 'function')
	    callback = array

	  if (typeof callback != 'function')
	    throw new Error('batch(array) requires a callback argument')

	  if (!Array.isArray(array))
	    return callback(new Error('batch(array) requires an array argument'))

	  if (!options || typeof options != 'object')
	    options = {}

	  var i = 0
	    , l = array.length
	    , e
	    , err

	  for (; i < l; i++) {
	    e = array[i]
	    if (typeof e != 'object')
	      continue

	    if (err = this._checkKey(e.type, 'type', this._isBuffer))
	      return callback(err)

	    if (err = this._checkKey(e.key, 'key', this._isBuffer))
	      return callback(err)
	  }

	  if (typeof this._batch == 'function')
	    return this._batch(array, options, callback)

	  process.nextTick(callback)
	}

	//TODO: remove from here, not a necessary primitive
	AbstractLevelDOWN.prototype.approximateSize = function (start, end, callback) {
	  if (   start == null
	      || end == null
	      || typeof start == 'function'
	      || typeof end == 'function') {
	    throw new Error('approximateSize() requires valid `start`, `end` and `callback` arguments')
	  }

	  if (typeof callback != 'function')
	    throw new Error('approximateSize() requires a callback argument')

	  if (!this._isBuffer(start))
	    start = String(start)

	  if (!this._isBuffer(end))
	    end = String(end)

	  if (typeof this._approximateSize == 'function')
	    return this._approximateSize(start, end, callback)

	  process.nextTick(function () {
	    callback(null, 0)
	  })
	}

	AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
	  var self = this

	  options = xtend(options)

	  ;[ 'start', 'end', 'gt', 'gte', 'lt', 'lte' ].forEach(function (o) {
	    if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
	      delete options[o]
	  })

	  options.reverse = !!options.reverse
	  options.keys = options.keys != false
	  options.values = options.values != false
	  options.limit = 'limit' in options ? options.limit : -1
	  options.keyAsBuffer = options.keyAsBuffer != false
	  options.valueAsBuffer = options.valueAsBuffer != false

	  return options
	}

	AbstractLevelDOWN.prototype.iterator = function (options) {
	  if (typeof options != 'object')
	    options = {}

	  options = this._setupIteratorOptions(options)

	  if (typeof this._iterator == 'function')
	    return this._iterator(options)

	  return new AbstractIterator(this)
	}

	AbstractLevelDOWN.prototype._chainedBatch = function () {
	  return new AbstractChainedBatch(this)
	}

	AbstractLevelDOWN.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	}

	AbstractLevelDOWN.prototype._checkKey = function (obj, type) {

	  if (obj === null || obj === undefined)
	    return new Error(type + ' cannot be `null` or `undefined`')

	  if (this._isBuffer(obj)) {
	    if (obj.length === 0)
	      return new Error(type + ' cannot be an empty Buffer')
	  } else if (String(obj) === '')
	    return new Error(type + ' cannot be an empty String')
	}

	module.exports = AbstractLevelDOWN


/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(73);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./bindings": 25,
		"./bindings.js": 25,
		"./package": 54,
		"./package.json": 54
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 43;


/***/ },
/* 44 */
/***/ function(module, exports) {

	
	/**
	 * slice() reference.
	 */

	var slice = Array.prototype.slice;

	/**
	 * Expose `co`.
	 */

	module.exports = co['default'] = co.co = co;

	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */

	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};

	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */

	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)

	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);

	    onFulfilled();

	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */

	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */

	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */

	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}

	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */

	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}

	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */

	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}

	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */

	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}

	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */

	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });

	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}

	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}

	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}

	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}

	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(val) {
	  return Object == val.constructor;
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(10)
	  , TAG = __webpack_require__(2)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(29)
	  , $export        = __webpack_require__(19)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(28)
	  , has            = __webpack_require__(27)
	  , Iterators      = __webpack_require__(12)
	  , $iterCreate    = __webpack_require__(91)
	  , setToStringTag = __webpack_require__(21)
	  , getProto       = __webpack_require__(1).getProto
	  , ITERATOR       = __webpack_require__(2)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(1).getDesc
	  , isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(8);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(11)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"bindings",
				"/Users/L3ve/IRIYA/client"
			]
		],
		"_from": "bindings@*",
		"_id": "bindings@1.2.1",
		"_inCache": true,
		"_installable": true,
		"_location": "/bindings",
		"_npmUser": {
			"email": "nathan@tootallnate.net",
			"name": "tootallnate"
		},
		"_npmVersion": "1.4.14",
		"_phantomChildren": {},
		"_requested": {
			"name": "bindings",
			"raw": "bindings",
			"rawSpec": "",
			"scope": null,
			"spec": "*",
			"type": "range"
		},
		"_requiredBy": [
			"/",
			"/leveldown"
		],
		"_resolved": "https://registry.npmjs.org/bindings/-/bindings-1.2.1.tgz",
		"_shasum": "14ad6113812d2d37d72e67b4cacb4bb726505f11",
		"_shrinkwrap": null,
		"_spec": "bindings",
		"_where": "/Users/L3ve/IRIYA/client",
		"author": {
			"email": "nathan@tootallnate.net",
			"name": "Nathan Rajlich",
			"url": "http://tootallnate.net"
		},
		"bugs": {
			"url": "https://github.com/TooTallNate/node-bindings/issues"
		},
		"dependencies": {},
		"description": "Helper module for loading your native module's .node file",
		"devDependencies": {},
		"directories": {},
		"dist": {
			"shasum": "14ad6113812d2d37d72e67b4cacb4bb726505f11",
			"tarball": "http://registry.npmjs.org/bindings/-/bindings-1.2.1.tgz"
		},
		"gitHead": "e404152ee27f8478ccbc7122ee051246e8e5ec02",
		"homepage": "https://github.com/TooTallNate/node-bindings",
		"keywords": [
			"addon",
			"bindings",
			"c",
			"c++",
			"gyp",
			"native",
			"waf"
		],
		"license": "MIT",
		"main": "./bindings.js",
		"maintainers": [
			{
				"name": "TooTallNate",
				"email": "nathan@tootallnate.net"
			},
			{
				"name": "tootallnate",
				"email": "nathan@tootallnate.net"
			}
		],
		"name": "bindings",
		"optionalDependencies": {},
		"repository": {
			"type": "git",
			"url": "git://github.com/TooTallNate/node-bindings.git"
		},
		"scripts": {},
		"version": "1.2.1"
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2012-2015 LevelUP contributors
	 * See list at <https://github.com/level/levelup#contributing>
	 * MIT License
	 * <https://github.com/level/levelup/blob/master/LICENSE.md>
	 */

	var extend         = __webpack_require__(23)
	  , LevelUPError   = __webpack_require__(15).LevelUPError
	  , format         = __webpack_require__(3).format
	  , defaultOptions = {
	        createIfMissing : true
	      , errorIfExists   : false
	      , keyEncoding     : 'utf8'
	      , valueEncoding   : 'utf8'
	      , compression     : true
	    }

	  , leveldown

	function getOptions (options) {
	  if (typeof options == 'string')
	    options = { valueEncoding: options }
	  if (typeof options != 'object')
	    options = {}
	  return options
	}

	function getLevelDOWN () {
	  if (leveldown)
	    return leveldown

	  var requiredVersion  = __webpack_require__(122).devDependencies.leveldown
	    , leveldownVersion

	  try {
	    leveldownVersion = __webpack_require__(121).version
	  } catch (e) {
	    throw requireError(e)
	  }

	  if (!__webpack_require__(135).satisfies(leveldownVersion, requiredVersion)) {
	    throw new LevelUPError(
	        'Installed version of LevelDOWN ('
	      + leveldownVersion
	      + ') does not match required version ('
	      + requiredVersion
	      + ')'
	    )
	  }

	  try {
	    return leveldown = __webpack_require__(128)
	  } catch (e) {
	    throw requireError(e)
	  }
	}

	function requireError (e) {
	  var template = 'Failed to require LevelDOWN (%s). Try `npm install leveldown` if it\'s missing'
	  return new LevelUPError(format(template, e.message))
	}

	function dispatchError (db, error, callback) {
	  typeof callback == 'function' ? callback(error) : db.emit('error', error)
	}

	function isDefined (v) {
	  return typeof v !== 'undefined'
	}

	module.exports = {
	    defaultOptions  : defaultOptions
	  , getOptions      : getOptions
	  , getLevelDOWN    : getLevelDOWN
	  , dispatchError   : dispatchError
	  , isDefined       : isDefined
	}


/***/ },
/* 56 */
/***/ function(module, exports) {

	/*!
	  * prr
	  * (c) 2013 Rod Vagg <rod@vagg.org>
	  * https://github.com/rvagg/prr
	  * License: MIT
	  */

	(function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports)
	    module.exports = definition()
	  else
	    context[name] = definition()
	})('prr', this, function() {

	  var setProperty = typeof Object.defineProperty == 'function'
	      ? function (obj, key, options) {
	          Object.defineProperty(obj, key, options)
	          return obj
	        }
	      : function (obj, key, options) { // < es5
	          obj[key] = options.value
	          return obj
	        }

	    , makeOptions = function (value, options) {
	        var oo = typeof options == 'object'
	          , os = !oo && typeof options == 'string'
	          , op = function (p) {
	              return oo
	                ? !!options[p]
	                : os
	                  ? options.indexOf(p[0]) > -1
	                  : false
	            }

	        return {
	            enumerable   : op('enumerable')
	          , configurable : op('configurable')
	          , writable     : op('writable')
	          , value        : value
	        }
	      }

	    , prr = function (obj, key, value, options) {
	        var k

	        options = makeOptions(value, options)

	        if (typeof key == 'object') {
	          for (k in key) {
	            if (Object.hasOwnProperty.call(key, k)) {
	              options.value = key[k]
	              setProperty(obj, k, options)
	            }
	          }
	          return obj
	        }

	        return setProperty(obj, key, options)
	      }

	  return prr
	})

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(33);
	/*</replacement>*/

	/*<replacement>*/
	var isArray = __webpack_require__(120);
	/*</replacement>*/

	/*<replacement>*/
	var Buffer = __webpack_require__(17).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(24);

	/*<replacement>*/
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(35);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(24).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(17).Buffer;

	/*<replacement>*/
	var util = __webpack_require__(13);
	util.inherits = __webpack_require__(7);
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = __webpack_require__(3);
	var debug = undefined;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/

	var StringDecoder;

	util.inherits(Readable, Stream);

	var Duplex;
	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(9);

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(60).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	var Duplex;
	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(9);

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(60).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended) return 0;

	  if (state.objectMode) return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
	  }

	  if (n <= 0) return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else {
	      return state.length;
	    }
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended) state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      if (state.pipesCount === 1 && state.pipes[0] === dest && src.listenerCount('data') === 1 && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error];

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && !this._readableState.endEmitted) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0) return null;

	  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode) ret = '';else ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = __webpack_require__(9);

	/*<replacement>*/
	var util = __webpack_require__(13);
	util.inherits = __webpack_require__(7);
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(33);
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Buffer = __webpack_require__(17).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = __webpack_require__(13);
	util.inherits = __webpack_require__(7);
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(138)
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(35);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(24).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(17).Buffer;

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	var Duplex;
	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(9);

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // create the two objects needed to store the corked requests
	  // they are not a linked list, as no new elements are inserted in there
	  this.corkedRequestsFree = new CorkedRequest(this);
	  this.corkedRequestsFree.next = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	var Duplex;
	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(9);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;

	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    state.corkedRequestsFree = holder.next;
	    holder.next = null;
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(17).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var AbstractLevelDOWN = __webpack_require__(38)

	function isLevelDOWN (db) {
	  if (!db || typeof db !== 'object')
	    return false
	  return Object.keys(AbstractLevelDOWN.prototype).filter(function (name) {
	    // TODO remove approximateSize check when method is gone
	    return name[0] != '_' && name != 'approximateSize'
	  }).every(function (name) {
	    return typeof db[name] == 'function'
	  })
	}

	module.exports = isLevelDOWN


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// import React, {Component} from 'react';
	// import ReactDOM from 'react-dom';
	// import tips from './notification';
	'use strict';

	var _regeneratorRuntime = __webpack_require__(42)['default'];

	var _db = __webpack_require__(64);

	var co = __webpack_require__(44);
	// var msg = require('./src/js/db');

	co(_regeneratorRuntime.mark(function callee$0$0() {
	    var a, c, d;
	    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                context$1$0.next = 2;
	                return msg.get().then(function (val) {});

	            case 2:
	                a = context$1$0.sent;
	                context$1$0.next = 5;
	                return [a];

	            case 5:
	                c = context$1$0.sent;
	                context$1$0.next = 8;
	                return msg.get();

	            case 8:
	                d = context$1$0.sent;

	            case 9:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, callee$0$0, this);
	}));

	// class ACT extends Component {
	//     constructor(props) {
	//         super(props);
	//         // tips.show('fuck!');
	//     }
	//     render() {
	//         return (
	//             <div>
	//                 ACT
	//             </div>
	//         );
	//     }
	// }
	// ReactDOM.render(
	//     <ACT />,
	//     document.querySelector('body')
	// )

	// var b = msg.insert({
	//     'content': 'Just Fun',
	//     'user': 'zwei'
	// }).then((val)=>{});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _regeneratorRuntime = __webpack_require__(42)['default'];

	var utility = __webpack_require__(149);
	var crypto = __webpack_require__(61);
	var leveldb = __webpack_require__(130);
	var memdown = __webpack_require__(132).clearGlobalStore();
	var co = __webpack_require__(44);
	var db = leveldb('./data/msg', {
	    valueEncoding: 'json',
	    db: memdown
	});

	exports.get = co.wrap(_regeneratorRuntime.mark(function callee$0$0() {
	    var err, items, stream, EventEnd;
	    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                err = null;
	                items = [];
	                stream = db.createReadStream();

	                stream.on('data', function (data) {
	                    var value = data.value;
	                    value.id = data.key;
	                    items.push(value);
	                });

	                EventEnd = function EventEnd(stream) {
	                    return function (done) {
	                        var called = false;
	                        function _done(err, data) {
	                            if (called) {
	                                return;
	                            }
	                            called = true;
	                            stream.removeListener('end', _done);
	                            done(err, data);
	                        }
	                        stream.once('end', _done);
	                    };
	                };

	                context$1$0.next = 7;
	                return EventEnd(stream);

	            case 7:
	                return context$1$0.abrupt('return', items);

	            case 8:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, callee$0$0, this);
	}));

	exports.insert = co.wrap(_regeneratorRuntime.mark(function callee$0$0(msg) {
	    var id;
	    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                id = utility.md5(msg.content + crypto.randomBytes(60).toString('hex'));
	                context$1$0.next = 3;
	                return _regeneratorRuntime.mark(function callee$1$0() {
	                    return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
	                        while (1) switch (context$2$0.prev = context$2$0.next) {
	                            case 0:
	                                db.put(id, msg);
	                            case 1:
	                            case 'end':
	                                return context$2$0.stop();
	                        }
	                    }, callee$1$0, this);
	                });

	            case 3:
	                return context$1$0.abrupt('return', id);

	            case 4:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, callee$0$0, this);
	}));

/***/ },
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(72)["default"];

	var _Object$create = __webpack_require__(68)["default"];

	var _Object$setPrototypeOf = __webpack_require__(70)["default"];

	var _Promise = __webpack_require__(71)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);

/***/ },
/* 74 */
/***/ function(module, exports) {

	/*!
	 * copy-to - index.js
	 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * slice() reference.
	 */

	var slice = Array.prototype.slice;

	/**
	 * Expose copy
	 *
	 * ```
	 * copy({foo: 'nar', hello: 'copy'}).to({hello: 'world'});
	 * copy({foo: 'nar', hello: 'copy'}).toCover({hello: 'world'});
	 * ```
	 *
	 * @param {Object} src
	 * @return {Copy}
	 */

	module.exports = Copy;


	/**
	 * Copy
	 * @param {Object} src
	 * @param {Boolean} withAccess
	 */

	function Copy(src, withAccess) {
	  if (!(this instanceof Copy)) return new Copy(src, withAccess);
	  this.src = src;
	  this._withAccess = withAccess;
	}

	/**
	 * copy properties include getter and setter
	 * @param {[type]} val [description]
	 * @return {[type]} [description]
	 */

	Copy.prototype.withAccess = function (w) {
	  this._withAccess = w !== false;
	  return this;
	};

	/**
	 * pick keys in src
	 *
	 * @api: public
	 */

	Copy.prototype.pick = function(keys) {
	  if (!Array.isArray(keys)) {
	    keys = slice.call(arguments);
	  }
	  if (keys.length) {
	    this.keys = keys;
	  }
	  return this;
	};

	/**
	 * copy src to target,
	 * do not cover any property target has
	 * @param {Object} to
	 *
	 * @api: public
	 */

	Copy.prototype.to = function(to) {
	  to = to || {};

	  if (!this.src) return to;
	  var keys = this.keys || Object.keys(this.src);

	  if (!this._withAccess) {
	    for (var i = 0; i < keys.length; i++) {
	      key = keys[i];
	      if (to[key] !== undefined) continue;
	      to[key] = this.src[key];
	    }
	    return to;
	  }

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!notDefined(to, key)) continue;
	    var getter = this.src.__lookupGetter__(key);
	    var setter = this.src.__lookupSetter__(key);
	    if (getter) to.__defineGetter__(key, getter);
	    if (setter) to.__defineSetter__(key, setter);

	    if (!getter && !setter) {
	      to[key] = this.src[key];
	    }
	  }
	  return to;
	};

	/**
	 * copy src to target,
	 * override any property target has
	 * @param {Object} to
	 *
	 * @api: public
	 */

	Copy.prototype.toCover = function(to) {
	  var keys = this.keys || Object.keys(this.src);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    delete to[key];
	    var getter = this.src.__lookupGetter__(key);
	    var setter = this.src.__lookupSetter__(key);
	    if (getter) to.__defineGetter__(key, getter);
	    if (setter) to.__defineSetter__(key, setter);

	    if (!getter && !setter) {
	      to[key] = this.src[key];
	    }
	  }
	};

	Copy.prototype.override = Copy.prototype.toCover;

	/**
	 * append another object to src
	 * @param {Obj} obj
	 * @return {Copy}
	 */

	Copy.prototype.and = function (obj) {
	  var src = {};
	  this.to(src);
	  this.src = obj;
	  this.to(src);
	  this.src = src;

	  return this;
	};

	/**
	 * check obj[key] if not defiend
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function notDefined(obj, key) {
	  return obj[key] === undefined
	    && obj.__lookupGetter__(key) === undefined
	    && obj.__lookupSetter__(key) === undefined;
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	module.exports = __webpack_require__(6).Object.setPrototypeOf;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(107);
	module.exports = __webpack_require__(6).Promise;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(109);
	__webpack_require__(53);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(1);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(11)
	  , call        = __webpack_require__(90)
	  , isArrayIter = __webpack_require__(88)
	  , anObject    = __webpack_require__(8)
	  , toLength    = __webpack_require__(103)
	  , getIterFn   = __webpack_require__(104);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(22)
	  , getNames  = __webpack_require__(1).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 86 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(12)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(10);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(8);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(1)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(21)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(28)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(1)
	  , toIObject = __webpack_require__(22);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(102).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(10)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(31);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(6)
	  , $           = __webpack_require__(1)
	  , DESCRIPTORS = __webpack_require__(18)
	  , SPECIES     = __webpack_require__(2)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(8)
	  , aFunction = __webpack_require__(26)
	  , SPECIES   = __webpack_require__(2)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(51)
	  , defined   = __webpack_require__(46);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(11)
	  , invoke             = __webpack_require__(86)
	  , html               = __webpack_require__(85)
	  , cel                = __webpack_require__(81)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(10)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(51)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(45)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(12);
	module.exports = __webpack_require__(6).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(80)
	  , step             = __webpack_require__(93)
	  , Iterators        = __webpack_require__(12)
	  , toIObject        = __webpack_require__(22);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(48)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(19);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(49).set});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(1)
	  , LIBRARY    = __webpack_require__(29)
	  , global     = __webpack_require__(4)
	  , ctx        = __webpack_require__(11)
	  , classof    = __webpack_require__(45)
	  , $export    = __webpack_require__(19)
	  , isObject   = __webpack_require__(20)
	  , anObject   = __webpack_require__(8)
	  , aFunction  = __webpack_require__(26)
	  , strictNew  = __webpack_require__(100)
	  , forOf      = __webpack_require__(83)
	  , setProto   = __webpack_require__(49).set
	  , same       = __webpack_require__(97)
	  , SPECIES    = __webpack_require__(2)('species')
	  , speciesConstructor = __webpack_require__(99)
	  , asap       = __webpack_require__(95)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(18)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(96)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(21)(P, PROMISE);
	__webpack_require__(98)(PROMISE);
	Wrapper = __webpack_require__(6)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(92)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(101)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(1)
	  , global         = __webpack_require__(4)
	  , has            = __webpack_require__(27)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(19)
	  , redefine       = __webpack_require__(31)
	  , $fails         = __webpack_require__(47)
	  , shared         = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(21)
	  , uid            = __webpack_require__(52)
	  , wks            = __webpack_require__(2)
	  , keyOf          = __webpack_require__(94)
	  , $names         = __webpack_require__(84)
	  , enumKeys       = __webpack_require__(82)
	  , isArray        = __webpack_require__(89)
	  , anObject       = __webpack_require__(8)
	  , toIObject      = __webpack_require__(22)
	  , createDesc     = __webpack_require__(30)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(29)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105);
	var Iterators = __webpack_require__(12);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(3)
	  , AbstractIterator = __webpack_require__(5).AbstractIterator


	function DeferredIterator (options) {
	  AbstractIterator.call(this, options)

	  this._options = options
	  this._iterator = null
	  this._operations = []
	}

	util.inherits(DeferredIterator, AbstractIterator)

	DeferredIterator.prototype.setDb = function (db) {
	  var it = this._iterator = db.iterator(this._options)
	  this._operations.forEach(function (op) {
	    it[op.method].apply(it, op.args)
	  })
	}

	DeferredIterator.prototype._operation = function (method, args) {
	  if (this._iterator)
	    return this._iterator[method].apply(this._iterator, args)
	  this._operations.push({ method: method, args: args })
	}

	'next end'.split(' ').forEach(function (m) {
	  DeferredIterator.prototype['_' + m] = function () {
	    this._operation(m, arguments)
	  }
	})

	module.exports = DeferredIterator;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var util              = __webpack_require__(3)
	  , AbstractLevelDOWN = __webpack_require__(5).AbstractLevelDOWN
	  , DeferredIterator  = __webpack_require__(113)

	function DeferredLevelDOWN (location) {
	  AbstractLevelDOWN.call(this, typeof location == 'string' ? location : '') // optional location, who cares?
	  this._db         = undefined
	  this._operations = []
	  this._iterators  = []
	}

	util.inherits(DeferredLevelDOWN, AbstractLevelDOWN)

	// called by LevelUP when we have a real DB to take its place
	DeferredLevelDOWN.prototype.setDb = function (db) {
	  this._db = db
	  this._operations.forEach(function (op) {
	    db[op.method].apply(db, op.args)
	  })
	  this._iterators.forEach(function (it) {
	    it.setDb(db)
	  })
	}

	DeferredLevelDOWN.prototype._open = function (options, callback) {
	  return process.nextTick(callback)
	}

	// queue a new deferred operation
	DeferredLevelDOWN.prototype._operation = function (method, args) {
	  if (this._db)
	    return this._db[method].apply(this._db, args)
	  this._operations.push({ method: method, args: args })
	}

	// deferrables
	'put get del batch approximateSize'.split(' ').forEach(function (m) {
	  DeferredLevelDOWN.prototype['_' + m] = function () {
	    this._operation(m, arguments)
	  }
	})

	DeferredLevelDOWN.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	}

	DeferredLevelDOWN.prototype._iterator = function (options) {
	  if (this._db)
	    return this._db.iterator.apply(this._db, arguments)
	  var it = new DeferredIterator(options)
	  this._iterators.push(it)
	  return it
	}

	module.exports                  = DeferredLevelDOWN
	module.exports.DeferredIterator = DeferredIterator


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var prr = __webpack_require__(56)

	function init (type, message, cause) {
	  prr(this, {
	      type    : type
	    , name    : type
	      // can be passed just a 'cause'
	    , cause   : typeof message != 'string' ? message : cause
	    , message : !!message && typeof message != 'string' ? message.message : message

	  }, 'ewr')
	}

	// generic prototype, not intended to be actually used - helpful for `instanceof`
	function CustomError (message, cause) {
	  Error.call(this)
	  if (Error.captureStackTrace)
	    Error.captureStackTrace(this, arguments.callee)
	  init.call(this, 'CustomError', message, cause)
	}

	CustomError.prototype = new Error()

	function createError (errno, type, proto) {
	  var err = function (message, cause) {
	    init.call(this, type, message, cause)
	    //TODO: the specificity here is stupid, errno should be available everywhere
	    if (type == 'FilesystemError') {
	      this.code    = this.cause.code
	      this.path    = this.cause.path
	      this.errno   = this.cause.errno
	      this.message =
	        (errno.errno[this.cause.errno]
	          ? errno.errno[this.cause.errno].description
	          : this.cause.message)
	        + (this.cause.path ? ' [' + this.cause.path + ']' : '')
	    }
	    Error.call(this)
	    if (Error.captureStackTrace)
	      Error.captureStackTrace(this, arguments.callee)
	  }
	  err.prototype = !!proto ? new proto() : new CustomError()
	  return err
	}

	module.exports = function (errno) {
	  var ce = function (type, proto) {
	    return createError(errno, type, proto)
	  }
	  return {
	      CustomError     : CustomError
	    , FilesystemError : ce('FilesystemError')
	    , createError     : ce
	  }
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var all = module.exports.all = [
	  {
	    errno: -2,
	    code: 'ENOENT',
	    description: 'no such file or directory'
	  },
	  {
	    errno: -1,
	    code: 'UNKNOWN',
	    description: 'unknown error'
	  },
	  {
	    errno: 0,
	    code: 'OK',
	    description: 'success'
	  },
	  {
	    errno: 1,
	    code: 'EOF',
	    description: 'end of file'
	  },
	  {
	    errno: 2,
	    code: 'EADDRINFO',
	    description: 'getaddrinfo error'
	  },
	  {
	    errno: 3,
	    code: 'EACCES',
	    description: 'permission denied'
	  },
	  {
	    errno: 4,
	    code: 'EAGAIN',
	    description: 'resource temporarily unavailable'
	  },
	  {
	    errno: 5,
	    code: 'EADDRINUSE',
	    description: 'address already in use'
	  },
	  {
	    errno: 6,
	    code: 'EADDRNOTAVAIL',
	    description: 'address not available'
	  },
	  {
	    errno: 7,
	    code: 'EAFNOSUPPORT',
	    description: 'address family not supported'
	  },
	  {
	    errno: 8,
	    code: 'EALREADY',
	    description: 'connection already in progress'
	  },
	  {
	    errno: 9,
	    code: 'EBADF',
	    description: 'bad file descriptor'
	  },
	  {
	    errno: 10,
	    code: 'EBUSY',
	    description: 'resource busy or locked'
	  },
	  {
	    errno: 11,
	    code: 'ECONNABORTED',
	    description: 'software caused connection abort'
	  },
	  {
	    errno: 12,
	    code: 'ECONNREFUSED',
	    description: 'connection refused'
	  },
	  {
	    errno: 13,
	    code: 'ECONNRESET',
	    description: 'connection reset by peer'
	  },
	  {
	    errno: 14,
	    code: 'EDESTADDRREQ',
	    description: 'destination address required'
	  },
	  {
	    errno: 15,
	    code: 'EFAULT',
	    description: 'bad address in system call argument'
	  },
	  {
	    errno: 16,
	    code: 'EHOSTUNREACH',
	    description: 'host is unreachable'
	  },
	  {
	    errno: 17,
	    code: 'EINTR',
	    description: 'interrupted system call'
	  },
	  {
	    errno: 18,
	    code: 'EINVAL',
	    description: 'invalid argument'
	  },
	  {
	    errno: 19,
	    code: 'EISCONN',
	    description: 'socket is already connected'
	  },
	  {
	    errno: 20,
	    code: 'EMFILE',
	    description: 'too many open files'
	  },
	  {
	    errno: 21,
	    code: 'EMSGSIZE',
	    description: 'message too long'
	  },
	  {
	    errno: 22,
	    code: 'ENETDOWN',
	    description: 'network is down'
	  },
	  {
	    errno: 23,
	    code: 'ENETUNREACH',
	    description: 'network is unreachable'
	  },
	  {
	    errno: 24,
	    code: 'ENFILE',
	    description: 'file table overflow'
	  },
	  {
	    errno: 25,
	    code: 'ENOBUFS',
	    description: 'no buffer space available'
	  },
	  {
	    errno: 26,
	    code: 'ENOMEM',
	    description: 'not enough memory'
	  },
	  {
	    errno: 27,
	    code: 'ENOTDIR',
	    description: 'not a directory'
	  },
	  {
	    errno: 28,
	    code: 'EISDIR',
	    description: 'illegal operation on a directory'
	  },
	  {
	    errno: 29,
	    code: 'ENONET',
	    description: 'machine is not on the network'
	  },
	  {
	    errno: 31,
	    code: 'ENOTCONN',
	    description: 'socket is not connected'
	  },
	  {
	    errno: 32,
	    code: 'ENOTSOCK',
	    description: 'socket operation on non-socket'
	  },
	  {
	    errno: 33,
	    code: 'ENOTSUP',
	    description: 'operation not supported on socket'
	  },
	  {
	    errno: 34,
	    code: 'ENOENT',
	    description: 'no such file or directory'
	  },
	  {
	    errno: 35,
	    code: 'ENOSYS',
	    description: 'function not implemented'
	  },
	  {
	    errno: 36,
	    code: 'EPIPE',
	    description: 'broken pipe'
	  },
	  {
	    errno: 37,
	    code: 'EPROTO',
	    description: 'protocol error'
	  },
	  {
	    errno: 38,
	    code: 'EPROTONOSUPPORT',
	    description: 'protocol not supported'
	  },
	  {
	    errno: 39,
	    code: 'EPROTOTYPE',
	    description: 'protocol wrong type for socket'
	  },
	  {
	    errno: 40,
	    code: 'ETIMEDOUT',
	    description: 'connection timed out'
	  },
	  {
	    errno: 41,
	    code: 'ECHARSET',
	    description: 'invalid Unicode character'
	  },
	  {
	    errno: 42,
	    code: 'EAIFAMNOSUPPORT',
	    description: 'address family for hostname not supported'
	  },
	  {
	    errno: 44,
	    code: 'EAISERVICE',
	    description: 'servname not supported for ai_socktype'
	  },
	  {
	    errno: 45,
	    code: 'EAISOCKTYPE',
	    description: 'ai_socktype not supported'
	  },
	  {
	    errno: 46,
	    code: 'ESHUTDOWN',
	    description: 'cannot send after transport endpoint shutdown'
	  },
	  {
	    errno: 47,
	    code: 'EEXIST',
	    description: 'file already exists'
	  },
	  {
	    errno: 48,
	    code: 'ESRCH',
	    description: 'no such process'
	  },
	  {
	    errno: 49,
	    code: 'ENAMETOOLONG',
	    description: 'name too long'
	  },
	  {
	    errno: 50,
	    code: 'EPERM',
	    description: 'operation not permitted'
	  },
	  {
	    errno: 51,
	    code: 'ELOOP',
	    description: 'too many symbolic links encountered'
	  },
	  {
	    errno: 52,
	    code: 'EXDEV',
	    description: 'cross-device link not permitted'
	  },
	  {
	    errno: 53,
	    code: 'ENOTEMPTY',
	    description: 'directory not empty'
	  },
	  {
	    errno: 54,
	    code: 'ENOSPC',
	    description: 'no space left on device'
	  },
	  {
	    errno: 55,
	    code: 'EIO',
	    description: 'i/o error'
	  },
	  {
	    errno: 56,
	    code: 'EROFS',
	    description: 'read-only file system'
	  },
	  {
	    errno: 57,
	    code: 'ENODEV',
	    description: 'no such device'
	  },
	  {
	    errno: 58,
	    code: 'ESPIPE',
	    description: 'invalid seek'
	  },
	  {
	    errno: 59,
	    code: 'ECANCELED',
	    description: 'operation canceled'
	  }
	]

	module.exports.errno = {}
	module.exports.code = {}

	all.forEach(function (error) {
	  module.exports.errno[error.errno] = error
	  module.exports.code[error.code] = error
	})

	module.exports.custom = __webpack_require__(115)(module.exports)
	module.exports.create = module.exports.custom.createError


/***/ },
/* 117 */
/***/ function(module, exports) {

	/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module variables.
	 * @private
	 */

	var matchHtmlRegExp = /["'&<>]/;

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = escapeHtml;

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index = 0;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34: // "
	        escape = '&quot;';
	        break;
	      case 38: // &
	        escape = '&amp;';
	        break;
	      case 39: // '
	        escape = '&#39;';
	        break;
	      case 60: // <
	        escape = '&lt;';
	        break;
	      case 62: // >
	        escape = '&gt;';
	        break;
	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index
	    ? html + str.substring(lastIndex, index)
	    : html;
	}


/***/ },
/* 118 */
/***/ function(module, exports) {

	var LIMIT = process.maxTickDepth / 2
	  , factory = function () {
	      var count = 0
	      return function (callback) {
	        if (count >= LIMIT){
	          global.setImmediate(callback)
	          count = 0
	        } else
	          process.nextTick(callback)
	        count++
	      }
	    }

	module.exports = global.setImmediate ? factory : function () { return process.nextTick }

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict"

	module.exports = createRBTree

	var RED   = 0
	var BLACK = 1

	function RBNode(color, key, value, left, right, count) {
	  this._color = color
	  this.key = key
	  this.value = value
	  this.left = left
	  this.right = right
	  this._count = count
	}

	function cloneNode(node) {
	  return new RBNode(node._color, node.key, node.value, node.left, node.right, node._count)
	}

	function repaint(color, node) {
	  return new RBNode(color, node.key, node.value, node.left, node.right, node._count)
	}

	function recount(node) {
	  node._count = 1 + (node.left ? node.left._count : 0) + (node.right ? node.right._count : 0)
	}

	function RedBlackTree(compare, root) {
	  this._compare = compare
	  this.root = root
	}

	var proto = RedBlackTree.prototype

	Object.defineProperty(proto, "keys", {
	  get: function() {
	    var result = []
	    this.forEach(function(k,v) {
	      result.push(k)
	    })
	    return result
	  }
	})

	Object.defineProperty(proto, "values", {
	  get: function() {
	    var result = []
	    this.forEach(function(k,v) {
	      result.push(v)
	    })
	    return result
	  }
	})

	//Returns the number of nodes in the tree
	Object.defineProperty(proto, "length", {
	  get: function() {
	    if(this.root) {
	      return this.root._count
	    }
	    return 0
	  }
	})

	//Insert a new item into the tree
	proto.insert = function(key, value) {
	  var cmp = this._compare
	  //Find point to insert new node at
	  var n = this.root
	  var n_stack = []
	  var d_stack = []
	  while(n) {
	    var d = cmp(key, n.key)
	    n_stack.push(n)
	    d_stack.push(d)
	    if(d <= 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  //Rebuild path to leaf node
	  n_stack.push(new RBNode(RED, key, value, null, null, 1))
	  for(var s=n_stack.length-2; s>=0; --s) {
	    var n = n_stack[s]
	    if(d_stack[s] <= 0) {
	      n_stack[s] = new RBNode(n._color, n.key, n.value, n_stack[s+1], n.right, n._count+1)
	    } else {
	      n_stack[s] = new RBNode(n._color, n.key, n.value, n.left, n_stack[s+1], n._count+1)
	    }
	  }
	  //Rebalance tree using rotations
	  //console.log("start insert", key, d_stack)
	  for(var s=n_stack.length-1; s>1; --s) {
	    var p = n_stack[s-1]
	    var n = n_stack[s]
	    if(p._color === BLACK || n._color === BLACK) {
	      break
	    }
	    var pp = n_stack[s-2]
	    if(pp.left === p) {
	      if(p.left === n) {
	        var y = pp.right
	        if(y && y._color === RED) {
	          //console.log("LLr")
	          p._color = BLACK
	          pp.right = repaint(BLACK, y)
	          pp._color = RED
	          s -= 1
	        } else {
	          //console.log("LLb")
	          pp._color = RED
	          pp.left = p.right
	          p._color = BLACK
	          p.right = pp
	          n_stack[s-2] = p
	          n_stack[s-1] = n
	          recount(pp)
	          recount(p)
	          if(s >= 3) {
	            var ppp = n_stack[s-3]
	            if(ppp.left === pp) {
	              ppp.left = p
	            } else {
	              ppp.right = p
	            }
	          }
	          break
	        }
	      } else {
	        var y = pp.right
	        if(y && y._color === RED) {
	          //console.log("LRr")
	          p._color = BLACK
	          pp.right = repaint(BLACK, y)
	          pp._color = RED
	          s -= 1
	        } else {
	          //console.log("LRb")
	          p.right = n.left
	          pp._color = RED
	          pp.left = n.right
	          n._color = BLACK
	          n.left = p
	          n.right = pp
	          n_stack[s-2] = n
	          n_stack[s-1] = p
	          recount(pp)
	          recount(p)
	          recount(n)
	          if(s >= 3) {
	            var ppp = n_stack[s-3]
	            if(ppp.left === pp) {
	              ppp.left = n
	            } else {
	              ppp.right = n
	            }
	          }
	          break
	        }
	      }
	    } else {
	      if(p.right === n) {
	        var y = pp.left
	        if(y && y._color === RED) {
	          //console.log("RRr", y.key)
	          p._color = BLACK
	          pp.left = repaint(BLACK, y)
	          pp._color = RED
	          s -= 1
	        } else {
	          //console.log("RRb")
	          pp._color = RED
	          pp.right = p.left
	          p._color = BLACK
	          p.left = pp
	          n_stack[s-2] = p
	          n_stack[s-1] = n
	          recount(pp)
	          recount(p)
	          if(s >= 3) {
	            var ppp = n_stack[s-3]
	            if(ppp.right === pp) {
	              ppp.right = p
	            } else {
	              ppp.left = p
	            }
	          }
	          break
	        }
	      } else {
	        var y = pp.left
	        if(y && y._color === RED) {
	          //console.log("RLr")
	          p._color = BLACK
	          pp.left = repaint(BLACK, y)
	          pp._color = RED
	          s -= 1
	        } else {
	          //console.log("RLb")
	          p.left = n.right
	          pp._color = RED
	          pp.right = n.left
	          n._color = BLACK
	          n.right = p
	          n.left = pp
	          n_stack[s-2] = n
	          n_stack[s-1] = p
	          recount(pp)
	          recount(p)
	          recount(n)
	          if(s >= 3) {
	            var ppp = n_stack[s-3]
	            if(ppp.right === pp) {
	              ppp.right = n
	            } else {
	              ppp.left = n
	            }
	          }
	          break
	        }
	      }
	    }
	  }
	  //Return new tree
	  n_stack[0]._color = BLACK
	  return new RedBlackTree(cmp, n_stack[0])
	}


	//Visit all nodes inorder
	function doVisitFull(visit, node) {
	  if(node.left) {
	    var v = doVisitFull(visit, node.left)
	    if(v) { return v }
	  }
	  var v = visit(node.key, node.value)
	  if(v) { return v }
	  if(node.right) {
	    return doVisitFull(visit, node.right)
	  }
	}

	//Visit half nodes in order
	function doVisitHalf(lo, compare, visit, node) {
	  var l = compare(lo, node.key)
	  if(l <= 0) {
	    if(node.left) {
	      var v = doVisitHalf(lo, compare, visit, node.left)
	      if(v) { return v }
	    }
	    var v = visit(node.key, node.value)
	    if(v) { return v }
	  }
	  if(node.right) {
	    return doVisitHalf(lo, compare, visit, node.right)
	  }
	}

	//Visit all nodes within a range
	function doVisit(lo, hi, compare, visit, node) {
	  var l = compare(lo, node.key)
	  var h = compare(hi, node.key)
	  var v
	  if(l <= 0) {
	    if(node.left) {
	      v = doVisit(lo, hi, compare, visit, node.left)
	      if(v) { return v }
	    }
	    if(h > 0) {
	      v = visit(node.key, node.value)
	      if(v) { return v }
	    }
	  }
	  if(h > 0 && node.right) {
	    return doVisit(lo, hi, compare, visit, node.right)
	  }
	}


	proto.forEach = function rbTreeForEach(visit, lo, hi) {
	  if(!this.root) {
	    return
	  }
	  switch(arguments.length) {
	    case 1:
	      return doVisitFull(visit, this.root)
	    break

	    case 2:
	      return doVisitHalf(lo, this._compare, visit, this.root)
	    break

	    case 3:
	      if(this._compare(lo, hi) >= 0) {
	        return
	      }
	      return doVisit(lo, hi, this._compare, visit, this.root)
	    break
	  }
	}

	//First item in list
	Object.defineProperty(proto, "begin", {
	  get: function() {
	    var stack = []
	    var n = this.root
	    while(n) {
	      stack.push(n)
	      n = n.left
	    }
	    return new RedBlackTreeIterator(this, stack)
	  }
	})

	//Last item in list
	Object.defineProperty(proto, "end", {
	  get: function() {
	    var stack = []
	    var n = this.root
	    while(n) {
	      stack.push(n)
	      n = n.right
	    }
	    return new RedBlackTreeIterator(this, stack)
	  }
	})

	//Find the ith item in the tree
	proto.at = function(idx) {
	  if(idx < 0) {
	    return new RedBlackTreeIterator(this, [])
	  }
	  var n = this.root
	  var stack = []
	  while(true) {
	    stack.push(n)
	    if(n.left) {
	      if(idx < n.left._count) {
	        n = n.left
	        continue
	      }
	      idx -= n.left._count
	    }
	    if(!idx) {
	      return new RedBlackTreeIterator(this, stack)
	    }
	    idx -= 1
	    if(n.right) {
	      if(idx >= n.right._count) {
	        break
	      }
	      n = n.right
	    } else {
	      break
	    }
	  }
	  return new RedBlackTreeIterator(this, [])
	}

	proto.ge = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  var stack = []
	  var last_ptr = 0
	  while(n) {
	    var d = cmp(key, n.key)
	    stack.push(n)
	    if(d <= 0) {
	      last_ptr = stack.length
	    }
	    if(d <= 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  stack.length = last_ptr
	  return new RedBlackTreeIterator(this, stack)
	}

	proto.gt = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  var stack = []
	  var last_ptr = 0
	  while(n) {
	    var d = cmp(key, n.key)
	    stack.push(n)
	    if(d < 0) {
	      last_ptr = stack.length
	    }
	    if(d < 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  stack.length = last_ptr
	  return new RedBlackTreeIterator(this, stack)
	}

	proto.lt = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  var stack = []
	  var last_ptr = 0
	  while(n) {
	    var d = cmp(key, n.key)
	    stack.push(n)
	    if(d > 0) {
	      last_ptr = stack.length
	    }
	    if(d <= 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  stack.length = last_ptr
	  return new RedBlackTreeIterator(this, stack)
	}

	proto.le = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  var stack = []
	  var last_ptr = 0
	  while(n) {
	    var d = cmp(key, n.key)
	    stack.push(n)
	    if(d >= 0) {
	      last_ptr = stack.length
	    }
	    if(d < 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  stack.length = last_ptr
	  return new RedBlackTreeIterator(this, stack)
	}

	//Finds the item with key if it exists
	proto.find = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  var stack = []
	  while(n) {
	    var d = cmp(key, n.key)
	    stack.push(n)
	    if(d === 0) {
	      return new RedBlackTreeIterator(this, stack)
	    }
	    if(d <= 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  return new RedBlackTreeIterator(this, [])
	}

	//Removes item with key from tree
	proto.remove = function(key) {
	  var iter = this.find(key)
	  if(iter) {
	    return iter.remove()
	  }
	  return this
	}

	//Returns the item at `key`
	proto.get = function(key) {
	  var cmp = this._compare
	  var n = this.root
	  while(n) {
	    var d = cmp(key, n.key)
	    if(d === 0) {
	      return n.value
	    }
	    if(d <= 0) {
	      n = n.left
	    } else {
	      n = n.right
	    }
	  }
	  return
	}

	//Iterator for red black tree
	function RedBlackTreeIterator(tree, stack) {
	  this.tree = tree
	  this._stack = stack
	}

	var iproto = RedBlackTreeIterator.prototype

	//Test if iterator is valid
	Object.defineProperty(iproto, "valid", {
	  get: function() {
	    return this._stack.length > 0
	  }
	})

	//Node of the iterator
	Object.defineProperty(iproto, "node", {
	  get: function() {
	    if(this._stack.length > 0) {
	      return this._stack[this._stack.length-1]
	    }
	    return null
	  },
	  enumerable: true
	})

	//Makes a copy of an iterator
	iproto.clone = function() {
	  return new RedBlackTreeIterator(this.tree, this._stack.slice())
	}

	//Swaps two nodes
	function swapNode(n, v) {
	  n.key = v.key
	  n.value = v.value
	  n.left = v.left
	  n.right = v.right
	  n._color = v._color
	  n._count = v._count
	}

	//Fix up a double black node in a tree
	function fixDoubleBlack(stack) {
	  var n, p, s, z
	  for(var i=stack.length-1; i>=0; --i) {
	    n = stack[i]
	    if(i === 0) {
	      n._color = BLACK
	      return
	    }
	    //console.log("visit node:", n.key, i, stack[i].key, stack[i-1].key)
	    p = stack[i-1]
	    if(p.left === n) {
	      //console.log("left child")
	      s = p.right
	      if(s.right && s.right._color === RED) {
	        //console.log("case 1: right sibling child red")
	        s = p.right = cloneNode(s)
	        z = s.right = cloneNode(s.right)
	        p.right = s.left
	        s.left = p
	        s.right = z
	        s._color = p._color
	        n._color = BLACK
	        p._color = BLACK
	        z._color = BLACK
	        recount(p)
	        recount(s)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.left === p) {
	            pp.left = s
	          } else {
	            pp.right = s
	          }
	        }
	        stack[i-1] = s
	        return
	      } else if(s.left && s.left._color === RED) {
	        //console.log("case 1: left sibling child red")
	        s = p.right = cloneNode(s)
	        z = s.left = cloneNode(s.left)
	        p.right = z.left
	        s.left = z.right
	        z.left = p
	        z.right = s
	        z._color = p._color
	        p._color = BLACK
	        s._color = BLACK
	        n._color = BLACK
	        recount(p)
	        recount(s)
	        recount(z)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.left === p) {
	            pp.left = z
	          } else {
	            pp.right = z
	          }
	        }
	        stack[i-1] = z
	        return
	      }
	      if(s._color === BLACK) {
	        if(p._color === RED) {
	          //console.log("case 2: black sibling, red parent", p.right.value)
	          p._color = BLACK
	          p.right = repaint(RED, s)
	          return
	        } else {
	          //console.log("case 2: black sibling, black parent", p.right.value)
	          p.right = repaint(RED, s)
	          continue  
	        }
	      } else {
	        //console.log("case 3: red sibling")
	        s = cloneNode(s)
	        p.right = s.left
	        s.left = p
	        s._color = p._color
	        p._color = RED
	        recount(p)
	        recount(s)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.left === p) {
	            pp.left = s
	          } else {
	            pp.right = s
	          }
	        }
	        stack[i-1] = s
	        stack[i] = p
	        if(i+1 < stack.length) {
	          stack[i+1] = n
	        } else {
	          stack.push(n)
	        }
	        i = i+2
	      }
	    } else {
	      //console.log("right child")
	      s = p.left
	      if(s.left && s.left._color === RED) {
	        //console.log("case 1: left sibling child red", p.value, p._color)
	        s = p.left = cloneNode(s)
	        z = s.left = cloneNode(s.left)
	        p.left = s.right
	        s.right = p
	        s.left = z
	        s._color = p._color
	        n._color = BLACK
	        p._color = BLACK
	        z._color = BLACK
	        recount(p)
	        recount(s)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.right === p) {
	            pp.right = s
	          } else {
	            pp.left = s
	          }
	        }
	        stack[i-1] = s
	        return
	      } else if(s.right && s.right._color === RED) {
	        //console.log("case 1: right sibling child red")
	        s = p.left = cloneNode(s)
	        z = s.right = cloneNode(s.right)
	        p.left = z.right
	        s.right = z.left
	        z.right = p
	        z.left = s
	        z._color = p._color
	        p._color = BLACK
	        s._color = BLACK
	        n._color = BLACK
	        recount(p)
	        recount(s)
	        recount(z)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.right === p) {
	            pp.right = z
	          } else {
	            pp.left = z
	          }
	        }
	        stack[i-1] = z
	        return
	      }
	      if(s._color === BLACK) {
	        if(p._color === RED) {
	          //console.log("case 2: black sibling, red parent")
	          p._color = BLACK
	          p.left = repaint(RED, s)
	          return
	        } else {
	          //console.log("case 2: black sibling, black parent")
	          p.left = repaint(RED, s)
	          continue  
	        }
	      } else {
	        //console.log("case 3: red sibling")
	        s = cloneNode(s)
	        p.left = s.right
	        s.right = p
	        s._color = p._color
	        p._color = RED
	        recount(p)
	        recount(s)
	        if(i > 1) {
	          var pp = stack[i-2]
	          if(pp.right === p) {
	            pp.right = s
	          } else {
	            pp.left = s
	          }
	        }
	        stack[i-1] = s
	        stack[i] = p
	        if(i+1 < stack.length) {
	          stack[i+1] = n
	        } else {
	          stack.push(n)
	        }
	        i = i+2
	      }
	    }
	  }
	}

	//Removes item at iterator from tree
	iproto.remove = function() {
	  var stack = this._stack
	  if(stack.length === 0) {
	    return this.tree
	  }
	  //First copy path to node
	  var cstack = new Array(stack.length)
	  var n = stack[stack.length-1]
	  cstack[cstack.length-1] = new RBNode(n._color, n.key, n.value, n.left, n.right, n._count)
	  for(var i=stack.length-2; i>=0; --i) {
	    var n = stack[i]
	    if(n.left === stack[i+1]) {
	      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
	    } else {
	      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
	    }
	  }

	  //Get node
	  n = cstack[cstack.length-1]
	  //console.log("start remove: ", n.value)

	  //If not leaf, then swap with previous node
	  if(n.left && n.right) {
	    //console.log("moving to leaf")

	    //First walk to previous leaf
	    var split = cstack.length
	    n = n.left
	    while(n.right) {
	      cstack.push(n)
	      n = n.right
	    }
	    //Copy path to leaf
	    var v = cstack[split-1]
	    cstack.push(new RBNode(n._color, v.key, v.value, n.left, n.right, n._count))
	    cstack[split-1].key = n.key
	    cstack[split-1].value = n.value

	    //Fix up stack
	    for(var i=cstack.length-2; i>=split; --i) {
	      n = cstack[i]
	      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
	    }
	    cstack[split-1].left = cstack[split]
	  }
	  //console.log("stack=", cstack.map(function(v) { return v.value }))

	  //Remove leaf node
	  n = cstack[cstack.length-1]
	  if(n._color === RED) {
	    //Easy case: removing red leaf
	    //console.log("RED leaf")
	    var p = cstack[cstack.length-2]
	    if(p.left === n) {
	      p.left = null
	    } else if(p.right === n) {
	      p.right = null
	    }
	    cstack.pop()
	    for(var i=0; i<cstack.length; ++i) {
	      cstack[i]._count--
	    }
	    return new RedBlackTree(this.tree._compare, cstack[0])
	  } else {
	    if(n.left || n.right) {
	      //Second easy case:  Single child black parent
	      //console.log("BLACK single child")
	      if(n.left) {
	        swapNode(n, n.left)
	      } else if(n.right) {
	        swapNode(n, n.right)
	      }
	      //Child must be red, so repaint it black to balance color
	      n._color = BLACK
	      for(var i=0; i<cstack.length-1; ++i) {
	        cstack[i]._count--
	      }
	      return new RedBlackTree(this.tree._compare, cstack[0])
	    } else if(cstack.length === 1) {
	      //Third easy case: root
	      //console.log("ROOT")
	      return new RedBlackTree(this.tree._compare, null)
	    } else {
	      //Hard case: Repaint n, and then do some nasty stuff
	      //console.log("BLACK leaf no children")
	      for(var i=0; i<cstack.length; ++i) {
	        cstack[i]._count--
	      }
	      var parent = cstack[cstack.length-2]
	      fixDoubleBlack(cstack)
	      //Fix up links
	      if(parent.left === n) {
	        parent.left = null
	      } else {
	        parent.right = null
	      }
	    }
	  }
	  return new RedBlackTree(this.tree._compare, cstack[0])
	}

	//Returns key
	Object.defineProperty(iproto, "key", {
	  get: function() {
	    if(this._stack.length > 0) {
	      return this._stack[this._stack.length-1].key
	    }
	    return
	  },
	  enumerable: true
	})

	//Returns value
	Object.defineProperty(iproto, "value", {
	  get: function() {
	    if(this._stack.length > 0) {
	      return this._stack[this._stack.length-1].value
	    }
	    return
	  },
	  enumerable: true
	})


	//Returns the position of this iterator in the sorted list
	Object.defineProperty(iproto, "index", {
	  get: function() {
	    var idx = 0
	    var stack = this._stack
	    if(stack.length === 0) {
	      var r = this.tree.root
	      if(r) {
	        return r._count
	      }
	      return 0
	    } else if(stack[stack.length-1].left) {
	      idx = stack[stack.length-1].left._count
	    }
	    for(var s=stack.length-2; s>=0; --s) {
	      if(stack[s+1] === stack[s].right) {
	        ++idx
	        if(stack[s].left) {
	          idx += stack[s].left._count
	        }
	      }
	    }
	    return idx
	  },
	  enumerable: true
	})

	//Advances iterator to next element in list
	iproto.next = function() {
	  var stack = this._stack
	  if(stack.length === 0) {
	    return
	  }
	  var n = stack[stack.length-1]
	  if(n.right) {
	    n = n.right
	    while(n) {
	      stack.push(n)
	      n = n.left
	    }
	  } else {
	    stack.pop()
	    while(stack.length > 0 && stack[stack.length-1].right === n) {
	      n = stack[stack.length-1]
	      stack.pop()
	    }
	  }
	}

	//Checks if iterator is at end of tree
	Object.defineProperty(iproto, "hasNext", {
	  get: function() {
	    var stack = this._stack
	    if(stack.length === 0) {
	      return false
	    }
	    if(stack[stack.length-1].right) {
	      return true
	    }
	    for(var s=stack.length-1; s>0; --s) {
	      if(stack[s-1].left === stack[s]) {
	        return true
	      }
	    }
	    return false
	  }
	})

	//Update value
	iproto.update = function(value) {
	  var stack = this._stack
	  if(stack.length === 0) {
	    throw new Error("Can't update empty node!")
	  }
	  var cstack = new Array(stack.length)
	  var n = stack[stack.length-1]
	  cstack[cstack.length-1] = new RBNode(n._color, n.key, value, n.left, n.right, n._count)
	  for(var i=stack.length-2; i>=0; --i) {
	    n = stack[i]
	    if(n.left === stack[i+1]) {
	      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
	    } else {
	      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
	    }
	  }
	  return new RedBlackTree(this.tree._compare, cstack[0])
	}

	//Moves iterator backward one element
	iproto.prev = function() {
	  var stack = this._stack
	  if(stack.length === 0) {
	    return
	  }
	  var n = stack[stack.length-1]
	  if(n.left) {
	    n = n.left
	    while(n) {
	      stack.push(n)
	      n = n.right
	    }
	  } else {
	    stack.pop()
	    while(stack.length > 0 && stack[stack.length-1].left === n) {
	      n = stack[stack.length-1]
	      stack.pop()
	    }
	  }
	}

	//Checks if iterator is at start of tree
	Object.defineProperty(iproto, "hasPrev", {
	  get: function() {
	    var stack = this._stack
	    if(stack.length === 0) {
	      return false
	    }
	    if(stack[stack.length-1].left) {
	      return true
	    }
	    for(var s=stack.length-1; s>0; --s) {
	      if(stack[s-1].right === stack[s]) {
	        return true
	      }
	    }
	    return false
	  }
	})

	//Default comparison function
	function defaultCompare(a, b) {
	  if(a < b) {
	    return -1
	  }
	  if(a > b) {
	    return 1
	  }
	  return 0
	}

	//Build a tree
	function createRBTree(compare) {
	  return new RedBlackTree(compare || defaultCompare, null)
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"leveldown@^1.4.6",
				"/Users/L3ve/IRIYA/client"
			]
		],
		"_from": "leveldown@>=1.4.6 <2.0.0",
		"_id": "leveldown@1.4.6",
		"_inCache": true,
		"_installable": true,
		"_location": "/leveldown",
		"_nodeVersion": "5.11.0",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/leveldown-1.4.6.tgz_1461965385354_0.789985854877159"
		},
		"_npmUser": {
			"email": "ralphtheninja@riseup.net",
			"name": "ralphtheninja"
		},
		"_npmVersion": "3.8.6",
		"_phantomChildren": {},
		"_requested": {
			"name": "leveldown",
			"raw": "leveldown@^1.4.6",
			"rawSpec": "^1.4.6",
			"scope": null,
			"spec": ">=1.4.6 <2.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/"
		],
		"_resolved": "https://registry.npmjs.org/leveldown/-/leveldown-1.4.6.tgz",
		"_shasum": "c627baa4c6765fd3ebf94f3b30a7aefdb9c893fb",
		"_shrinkwrap": null,
		"_spec": "leveldown@^1.4.6",
		"_where": "/Users/L3ve/IRIYA/client",
		"bugs": {
			"url": "https://github.com/level/leveldown/issues"
		},
		"contributors": [
			{
				"name": "David Björklund",
				"email": "david.bjorklund@gmail.com",
				"url": "https://github.com/kesla"
			},
			{
				"name": "Rod Vagg",
				"email": "r@va.gg",
				"url": "https://github.com/rvagg"
			},
			{
				"name": "Jake Verbaten",
				"email": "raynos2@gmail.com",
				"url": "https://github.com/raynos"
			},
			{
				"name": "Dominic Tarr",
				"email": "dominic.tarr@gmail.com",
				"url": "https://github.com/dominictarr"
			},
			{
				"name": "Max Ogden",
				"email": "max@maxogden.com",
				"url": "https://github.com/maxogden"
			},
			{
				"name": "Lars-Magnus Skog",
				"email": "ralphtheninja@riseup.net",
				"url": "https://github.com/ralphtheninja"
			},
			{
				"name": "John Chesley",
				"email": "john@chesl.es",
				"url": "https://github.com/chesles/"
			},
			{
				"name": "Julian Gruber",
				"email": "julian@juliangruber.com",
				"url": "https://github.com/juliangruber"
			},
			{
				"name": "Paolo Fragomeni",
				"email": "paolo@async.ly",
				"url": "https://github.com/hij1nx"
			},
			{
				"name": "Anton Whalley",
				"email": "anton.whalley@nearform.com",
				"url": "https://github.com/No9"
			},
			{
				"name": "Matteo Collina",
				"email": "matteo.collina@gmail.com",
				"url": "https://github.com/mcollina"
			},
			{
				"name": "Pedro Teixeira",
				"email": "pedro.teixeira@gmail.com",
				"url": "https://github.com/pgte"
			},
			{
				"name": "James Halliday",
				"email": "mail@substack.net",
				"url": "https://github.com/substack"
			}
		],
		"dependencies": {
			"abstract-leveldown": "~2.4.0",
			"bindings": "~1.2.1",
			"fast-future": "~1.0.0",
			"nan": "~2.3.0",
			"prebuild": "^4.1.1"
		},
		"description": "A Node.js LevelDB binding, primary backend for LevelUP",
		"devDependencies": {
			"async": "~1.5.0",
			"delayed": "~1.0.1",
			"du": "~0.1.0",
			"faucet": "0.0.1",
			"mkfiletree": "~1.0.1",
			"monotonic-timestamp": "~0.0.8",
			"node-uuid": "~1.4.3",
			"optimist": "~0.6.1",
			"readfiletree": "~0.0.1",
			"rimraf": "~2.5.0",
			"slump": "~2.0.0",
			"tape": "~4.5.1"
		},
		"directories": {},
		"dist": {
			"shasum": "c627baa4c6765fd3ebf94f3b30a7aefdb9c893fb",
			"tarball": "https://registry.npmjs.org/leveldown/-/leveldown-1.4.6.tgz"
		},
		"gitHead": "ef05005754f28c9cbaa26155b362c00c337e5b57",
		"gypfile": true,
		"homepage": "https://github.com/level/leveldown",
		"keywords": [
			"level",
			"leveldb"
		],
		"license": "MIT",
		"main": "leveldown.js",
		"maintainers": [
			{
				"name": "rvagg",
				"email": "rod@vagg.org"
			},
			{
				"name": "ralphtheninja",
				"email": "ralphtheninja@riseup.net"
			},
			{
				"name": "juliangruber",
				"email": "julian@juliangruber.com"
			}
		],
		"name": "leveldown",
		"optionalDependencies": {},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/level/leveldown.git"
		},
		"scripts": {
			"install": "prebuild --install",
			"prebuild": "prebuild --all --strip --verbose",
			"rebuild": "prebuild --compile",
			"test": "tape test/*-test.js | faucet"
		},
		"version": "1.4.6"
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"levelup",
				"/Users/L3ve/IRIYA/client"
			]
		],
		"_from": "levelup@*",
		"_id": "levelup@1.3.1",
		"_inCache": true,
		"_installable": true,
		"_location": "/levelup",
		"_nodeVersion": "4.2.2",
		"_npmUser": {
			"email": "ralphtheninja@riseup.net",
			"name": "ralphtheninja"
		},
		"_npmVersion": "3.5.0",
		"_phantomChildren": {},
		"_requested": {
			"name": "levelup",
			"raw": "levelup",
			"rawSpec": "",
			"scope": null,
			"spec": "*",
			"type": "range"
		},
		"_requiredBy": [
			"/"
		],
		"_resolved": "https://registry.npmjs.org/levelup/-/levelup-1.3.1.tgz",
		"_shasum": "8030758bb1b1dafdb71bfb55fff0caa2740cb846",
		"_shrinkwrap": null,
		"_spec": "levelup",
		"_where": "/Users/L3ve/IRIYA/client",
		"browser": {
			"leveldown": false,
			"leveldown/package": false,
			"semver": false
		},
		"bugs": {
			"url": "https://github.com/level/levelup/issues"
		},
		"contributors": [
			{
				"name": "Julian Gruber",
				"email": "julian@juliangruber.com",
				"url": "https://github.com/juliangruber"
			},
			{
				"name": "Rod Vagg",
				"email": "r@va.gg",
				"url": "https://github.com/rvagg"
			},
			{
				"name": "Jake Verbaten",
				"email": "raynos2@gmail.com",
				"url": "https://github.com/raynos"
			},
			{
				"name": "Dominic Tarr",
				"email": "dominic.tarr@gmail.com",
				"url": "https://github.com/dominictarr"
			},
			{
				"name": "Max Ogden",
				"email": "max@maxogden.com",
				"url": "https://github.com/maxogden"
			},
			{
				"name": "Lars-Magnus Skog",
				"email": "ralphtheninja@riseup.net",
				"url": "https://github.com/ralphtheninja"
			},
			{
				"name": "David Björklund",
				"email": "david.bjorklund@gmail.com",
				"url": "https://github.com/kesla"
			},
			{
				"name": "John Chesley",
				"email": "john@chesl.es",
				"url": "https://github.com/chesles/"
			},
			{
				"name": "Paolo Fragomeni",
				"email": "paolo@async.ly",
				"url": "https://github.com/hij1nx"
			},
			{
				"name": "Anton Whalley",
				"email": "anton.whalley@nearform.com",
				"url": "https://github.com/No9"
			},
			{
				"name": "Matteo Collina",
				"email": "matteo.collina@gmail.com",
				"url": "https://github.com/mcollina"
			},
			{
				"name": "Pedro Teixeira",
				"email": "pedro.teixeira@gmail.com",
				"url": "https://github.com/pgte"
			},
			{
				"name": "James Halliday",
				"email": "mail@substack.net",
				"url": "https://github.com/substack"
			},
			{
				"name": "Jarrett Cruger",
				"email": "jcrugzz@gmail.com",
				"url": "https://github.com/jcrugzz"
			}
		],
		"dependencies": {
			"deferred-leveldown": "~1.2.1",
			"level-codec": "~6.1.0",
			"level-errors": "~1.0.3",
			"level-iterator-stream": "~1.3.0",
			"prr": "~1.0.1",
			"semver": "~5.1.0",
			"xtend": "~4.0.0"
		},
		"description": "Fast & simple storage - a Node.js-style LevelDB wrapper",
		"devDependencies": {
			"async": "~1.5.0",
			"bustermove": "~1.0.0",
			"delayed": "~1.0.1",
			"faucet": "~0.0.1",
			"leveldown": "^1.1.0",
			"memdown": "~1.1.0",
			"msgpack-js": "~0.3.0",
			"referee": "~1.2.0",
			"rimraf": "~2.4.3",
			"slow-stream": "0.0.4",
			"tap": "~2.3.1",
			"tape": "~4.2.1"
		},
		"directories": {},
		"dist": {
			"shasum": "8030758bb1b1dafdb71bfb55fff0caa2740cb846",
			"tarball": "https://registry.npmjs.org/levelup/-/levelup-1.3.1.tgz"
		},
		"gitHead": "40bd66872974140c79a74d9411b992ddffa926a4",
		"homepage": "https://github.com/level/levelup",
		"keywords": [
			"database",
			"db",
			"json",
			"leveldb",
			"storage",
			"store",
			"stream"
		],
		"license": "MIT",
		"main": "lib/levelup.js",
		"maintainers": [
			{
				"name": "rvagg",
				"email": "rod@vagg.org"
			},
			{
				"name": "ralphtheninja",
				"email": "ralphtheninja@riseup.net"
			},
			{
				"name": "juliangruber",
				"email": "julian@juliangruber.com"
			}
		],
		"name": "levelup",
		"optionalDependencies": {},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/level/levelup.git"
		},
		"scripts": {
			"test": "tape test/*-test.js | faucet"
		},
		"version": "1.3.1"
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var encodings = __webpack_require__(124);

	module.exports = Codec;

	function Codec(opts){
	  this.opts = opts || {};
	  this.encodings = encodings;
	}

	Codec.prototype._encoding = function(encoding){
	  if (typeof encoding == 'string') encoding = encodings[encoding];
	  if (!encoding) encoding = encodings.id;
	  return encoding;
	};

	Codec.prototype._keyEncoding = function(opts, batchOpts){
	  return this._encoding(batchOpts && batchOpts.keyEncoding
	    || opts && opts.keyEncoding
	    || this.opts.keyEncoding);
	};

	Codec.prototype._valueEncoding = function(opts, batchOpts){
	  return this._encoding(
	    batchOpts && (batchOpts.valueEncoding || batchOpts.encoding)
	    || opts && (opts.valueEncoding || opts.encoding)
	    || (this.opts.valueEncoding || this.opts.encoding));
	};

	Codec.prototype.encodeKey = function(key, opts, batchOpts){
	  return this._keyEncoding(opts, batchOpts).encode(key);
	};

	Codec.prototype.encodeValue = function(value, opts, batchOpts){
	  return this._valueEncoding(opts, batchOpts).encode(value);
	};

	Codec.prototype.decodeKey = function(key, opts){
	  return this._keyEncoding(opts).decode(key);
	};

	Codec.prototype.decodeValue = function(value, opts){
	  return this._valueEncoding(opts).decode(value);
	};

	Codec.prototype.encodeBatch = function(ops, opts){
	  var self = this;

	  return ops.map(function(_op){
	    var op = {
	      type: _op.type,
	      key: self.encodeKey(_op.key, opts, _op)
	    };
	    if (self.keyAsBuffer(opts, _op)) op.keyEncoding = 'binary';
	    if (_op.prefix) op.prefix = _op.prefix;
	    if ('value' in _op) {
	      op.value = self.encodeValue(_op.value, opts, _op);
	      if (self.valueAsBuffer(opts, _op)) op.valueEncoding = 'binary';
	    }
	    return op;
	  });
	};

	var ltgtKeys = ['lt', 'gt', 'lte', 'gte', 'start', 'end'];

	Codec.prototype.encodeLtgt = function(ltgt){
	  var self = this;
	  var ret = {};
	  Object.keys(ltgt).forEach(function(key){
	    ret[key] = ltgtKeys.indexOf(key) > -1
	      ? self.encodeKey(ltgt[key], ltgt)
	      : ltgt[key]
	  });
	  return ret;
	};

	Codec.prototype.createStreamDecoder = function(opts){
	  var self = this;

	  if (opts.keys && opts.values) {
	    return function(key, value){
	      return {
	        key: self.decodeKey(key, opts),
	        value: self.decodeValue(value, opts)
	      };
	    };
	  } else if (opts.keys) {
	    return function(key) {
	      return self.decodeKey(key, opts);
	    }; 
	  } else if (opts.values) {
	    return function(_, value){
	      return self.decodeValue(value, opts);
	    }
	  } else {
	    return function(){};
	  }
	};

	Codec.prototype.keyAsBuffer = function(opts){
	  return this._keyEncoding(opts).buffer;
	};

	Codec.prototype.valueAsBuffer = function(opts){
	  return this._valueEncoding(opts).buffer;
	};



/***/ },
/* 124 */
/***/ function(module, exports) {

	
	exports.utf8 = exports['utf-8'] = {
	  encode: function(data){
	    return isBinary(data)
	      ? data
	      : String(data);
	  },
	  decode: identity,
	  buffer: false,
	  type: 'utf8'
	};

	exports.json = {
	  encode: JSON.stringify,
	  decode: JSON.parse,
	  buffer: false,
	  type: 'json'
	};

	exports.binary = {
	  encode: function(data){
	    return isBinary(data)
	      ? data
	      : new Buffer(data);      
	  },
	  decode: identity,
	  buffer: true,
	  type: 'binary'
	};

	exports.id = {
	  encode: function(data){
	    return data;
	  },
	  decode: function(data){
	    return data;
	  },
	  buffer: false,
	  type: 'id'
	};

	var bufferEncodings = [
	  'hex',
	  'ascii',
	  'base64',
	  'ucs2',
	  'ucs-2',
	  'utf16le',
	  'utf-16le'
	];

	bufferEncodings.forEach(function(type){
	  exports[type] = {
	    encode: function(data){
	      return isBinary(data)
	        ? data
	        : new Buffer(data, type);
	    },
	    decode: function(buffer){
	      return buffer.toString(type);
	    },
	    buffer: true,
	    type: type
	  };
	});

	function identity(value){
	  return value;
	}

	function isBinary(data){
	  return data === undefined
	    || data === null
	    || Buffer.isBuffer(data);
	}



/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(7);
	var Readable = __webpack_require__(134).Readable;
	var extend = __webpack_require__(23);
	var EncodingError = __webpack_require__(15).EncodingError;

	module.exports = ReadStream;
	inherits(ReadStream, Readable);

	function ReadStream(iterator, options){
	  if (!(this instanceof ReadStream)) return new ReadStream(iterator, options);
	  Readable.call(this, extend(options, {
	    objectMode: true
	  }));
	  this._iterator = iterator;
	  this._destroyed = false;
	  this._decoder = null;
	  if (options && options.decoder) this._decoder = options.decoder;
	  this.on('end', this._cleanup.bind(this));
	}

	ReadStream.prototype._read = function(){
	  var self = this;
	  if (this._destroyed) return;

	  this._iterator.next(function(err, key, value){
	    if (self._destroyed) return;
	    if (err) return self.emit('error', err);
	    if (key === undefined && value === undefined) {
	      self.push(null);
	    } else {
	      if (!self._decoder) return self.push({ key: key, value: value });

	      try {
	        var value = self._decoder(key, value);
	      } catch (err) {
	        self.emit('error', new EncodingError(err));
	        self.push(null);
	        return;
	      }
	      self.push(value);
	    }
	  });
	};

	ReadStream.prototype.destroy =
	ReadStream.prototype._cleanup = function(){
	  var self = this;
	  if (this._destroyed) return;
	  this._destroyed = true;

	  this._iterator.end(function(err){
	    if (err) return self.emit('error', err);
	    self.emit('close');
	  });
	};



/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	const util                 = __webpack_require__(3)
	    , AbstractChainedBatch = __webpack_require__(5).AbstractChainedBatch


	function ChainedBatch (db) {
	  AbstractChainedBatch.call(this, db)
	  this.binding = db.binding.batch()
	}


	ChainedBatch.prototype._put = function (key, value) {
	  this.binding.put(key, value)
	}


	ChainedBatch.prototype._del = function (key) {
	  this.binding.del(key)
	}


	ChainedBatch.prototype._clear = function (key) {
	  this.binding.clear(key)
	}


	ChainedBatch.prototype._write = function (options, callback) {
	  this.binding.write(options, callback)
	}

	util.inherits(ChainedBatch, AbstractChainedBatch)


	module.exports = ChainedBatch

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	const util             = __webpack_require__(3)
	    , AbstractIterator = __webpack_require__(5).AbstractIterator
	    , fastFuture       = __webpack_require__(118)


	function Iterator (db, options) {
	  AbstractIterator.call(this, db)

	  this.binding    = db.binding.iterator(options)
	  this.cache      = null
	  this.finished   = false
	  this.fastFuture = fastFuture()
	}

	util.inherits(Iterator, AbstractIterator)

	Iterator.prototype.seek = function (key) {
	  if (typeof key !== 'string')
	    throw new Error('seek requires a string key')
	  this.cache = null
	  this.binding.seek(key)
	}

	Iterator.prototype._next = function (callback) {
	  var that = this
	    , key
	    , value

	  if (this.cache && this.cache.length) {
	    key   = this.cache.pop()
	    value = this.cache.pop()

	    this.fastFuture(function () {
	      callback(null, key, value)
	    })

	  } else if (this.finished) {
	    this.fastFuture(function () {
	      callback()
	    })
	  } else {
	    this.binding.next(function (err, array, finished) {
	      if (err) return callback(err)

	      that.cache    = array
	      that.finished = finished
	      that._next(callback)
	    })
	  }

	  return this
	}


	Iterator.prototype._end = function (callback) {
	  delete this.cache
	  this.binding.end(callback)
	}


	module.exports = Iterator


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	const util              = __webpack_require__(3)
	    , AbstractLevelDOWN = __webpack_require__(5).AbstractLevelDOWN

	    , binding           = __webpack_require__(25)('leveldown').leveldown

	    , ChainedBatch      = __webpack_require__(126)
	    , Iterator          = __webpack_require__(127)


	function LevelDOWN (location) {
	  if (!(this instanceof LevelDOWN))
	    return new LevelDOWN(location)

	  AbstractLevelDOWN.call(this, location)
	  this.binding = binding(location)
	}

	util.inherits(LevelDOWN, AbstractLevelDOWN)


	LevelDOWN.prototype._open = function (options, callback) {
	  this.binding.open(options, callback)
	}


	LevelDOWN.prototype._close = function (callback) {
	  this.binding.close(callback)
	}


	LevelDOWN.prototype._put = function (key, value, options, callback) {
	  this.binding.put(key, value, options, callback)
	}


	LevelDOWN.prototype._get = function (key, options, callback) {
	  this.binding.get(key, options, callback)
	}


	LevelDOWN.prototype._del = function (key, options, callback) {
	  this.binding.del(key, options, callback)
	}


	LevelDOWN.prototype._chainedBatch = function () {
	  return new ChainedBatch(this)
	}


	LevelDOWN.prototype._batch = function (operations, options, callback) {
	  return this.binding.batch(operations, options, callback)
	}


	LevelDOWN.prototype._approximateSize = function (start, end, callback) {
	  this.binding.approximateSize(start, end, callback)
	}


	LevelDOWN.prototype.getProperty = function (property) {
	  if (typeof property != 'string')
	    throw new Error('getProperty() requires a valid `property` argument')

	  return this.binding.getProperty(property)
	}


	LevelDOWN.prototype._iterator = function (options) {
	  return new Iterator(this, options)
	}


	LevelDOWN.destroy = function (location, callback) {
	  if (arguments.length < 2)
	    throw new Error('destroy() requires `location` and `callback` arguments')

	  if (typeof location != 'string')
	    throw new Error('destroy() requires a location string argument')

	  if (typeof callback != 'function')
	    throw new Error('destroy() requires a callback function argument')

	  binding.destroy(location, callback)
	}


	LevelDOWN.repair = function (location, callback) {
	  if (arguments.length < 2)
	    throw new Error('repair() requires `location` and `callback` arguments')

	  if (typeof location != 'string')
	    throw new Error('repair() requires a location string argument')

	  if (typeof callback != 'function')
	    throw new Error('repair() requires a callback function argument')

	  binding.repair(location, callback)
	}


	module.exports = LevelDOWN


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2012-2015 LevelUP contributors
	 * See list at <https://github.com/level/levelup#contributing>
	 * MIT License
	 * <https://github.com/level/levelup/blob/master/LICENSE.md>
	 */

	var util          = __webpack_require__(55)
	  , WriteError    = __webpack_require__(15).WriteError

	  , getOptions    = util.getOptions
	  , dispatchError = util.dispatchError

	function Batch (levelup, codec) {
	  this._levelup = levelup
	  this._codec = codec
	  this.batch = levelup.db.batch()
	  this.ops = []
	  this.length = 0
	}

	Batch.prototype.put = function (key_, value_, options) {
	  options = getOptions(options)

	  var key   = this._codec.encodeKey(key_, options)
	    , value = this._codec.encodeValue(value_, options)

	  try {
	    this.batch.put(key, value)
	  } catch (e) {
	    throw new WriteError(e)
	  }
	  this.ops.push({ type : 'put', key : key, value : value })
	  this.length++

	  return this
	}

	Batch.prototype.del = function (key_, options) {
	  options = getOptions(options)

	  var key = this._codec.encodeKey(key_, options)

	  try {
	    this.batch.del(key)
	  } catch (err) {
	    throw new WriteError(err)
	  }
	  this.ops.push({ type : 'del', key : key })
	  this.length++

	  return this
	}

	Batch.prototype.clear = function () {
	  try {
	    this.batch.clear()
	  } catch (err) {
	    throw new WriteError(err)
	  }

	  this.ops = []
	  this.length = 0
	  return this
	}

	Batch.prototype.write = function (callback) {
	  var levelup = this._levelup
	    , ops     = this.ops

	  try {
	    this.batch.write(function (err) {
	      if (err)
	        return dispatchError(levelup, new WriteError(err), callback)
	      levelup.emit('batch', ops)
	      if (callback)
	        callback()
	    })
	  } catch (err) {
	    throw new WriteError(err)
	  }
	}

	module.exports = Batch


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2012-2015 LevelUP contributors
	 * See list at <https://github.com/level/levelup#contributing>
	 * MIT License
	 * <https://github.com/level/levelup/blob/master/LICENSE.md>
	 */

	var EventEmitter        = __webpack_require__(24).EventEmitter
	  , inherits            = __webpack_require__(3).inherits
	  , deprecate           = __webpack_require__(3).deprecate
	  , extend              = __webpack_require__(23)
	  , prr                 = __webpack_require__(56)
	  , DeferredLevelDOWN   = __webpack_require__(114)
	  , IteratorStream      = __webpack_require__(125)

	  , errors              = __webpack_require__(15)
	  , WriteError          = errors.WriteError
	  , ReadError           = errors.ReadError
	  , NotFoundError       = errors.NotFoundError
	  , OpenError           = errors.OpenError
	  , EncodingError       = errors.EncodingError
	  , InitializationError = errors.InitializationError

	  , util                = __webpack_require__(55)
	  , Batch               = __webpack_require__(129)
	  , Codec               = __webpack_require__(123)

	  , getOptions          = util.getOptions
	  , defaultOptions      = util.defaultOptions
	  , getLevelDOWN        = util.getLevelDOWN
	  , dispatchError       = util.dispatchError
	  , isDefined           = util.isDefined

	function getCallback (options, callback) {
	  return typeof options == 'function' ? options : callback
	}

	// Possible LevelUP#_status values:
	//  - 'new'     - newly created, not opened or closed
	//  - 'opening' - waiting for the database to be opened, post open()
	//  - 'open'    - successfully opened the database, available for use
	//  - 'closing' - waiting for the database to be closed, post close()
	//  - 'closed'  - database has been successfully closed, should not be
	//                 used except for another open() operation

	function LevelUP (location, options, callback) {
	  if (!(this instanceof LevelUP))
	    return new LevelUP(location, options, callback)

	  var error

	  EventEmitter.call(this)
	  this.setMaxListeners(Infinity)

	  if (typeof location == 'function') {
	    options = typeof options == 'object' ? options : {}
	    options.db = location
	    location = null
	  } else if (typeof location == 'object' && typeof location.db == 'function') {
	    options = location
	    location = null
	  }


	  if (typeof options == 'function') {
	    callback = options
	    options  = {}
	  }

	  if ((!options || typeof options.db != 'function') && typeof location != 'string') {
	    error = new InitializationError(
	        'Must provide a location for the database')
	    if (callback) {
	      return process.nextTick(function () {
	        callback(error)
	      })
	    }
	    throw error
	  }

	  options      = getOptions(options)
	  this.options = extend(defaultOptions, options)
	  this._codec = new Codec(this.options)
	  this._status = 'new'
	  // set this.location as enumerable but not configurable or writable
	  prr(this, 'location', location, 'e')

	  this.open(callback)
	}

	inherits(LevelUP, EventEmitter)

	LevelUP.prototype.open = function (callback) {
	  var self = this
	    , dbFactory
	    , db

	  if (this.isOpen()) {
	    if (callback)
	      process.nextTick(function () { callback(null, self) })
	    return this
	  }

	  if (this._isOpening()) {
	    return callback && this.once(
	        'open'
	      , function () { callback(null, self) }
	    )
	  }

	  this.emit('opening')

	  this._status = 'opening'
	  this.db      = new DeferredLevelDOWN(this.location)
	  dbFactory    = this.options.db || getLevelDOWN()
	  db           = dbFactory(this.location)

	  db.open(this.options, function (err) {
	    if (err) {
	      return dispatchError(self, new OpenError(err), callback)
	    } else {
	      self.db.setDb(db)
	      self.db = db
	      self._status = 'open'
	      if (callback)
	        callback(null, self)
	      self.emit('open')
	      self.emit('ready')
	    }
	  })
	}

	LevelUP.prototype.close = function (callback) {
	  var self = this

	  if (this.isOpen()) {
	    this._status = 'closing'
	    this.db.close(function () {
	      self._status = 'closed'
	      self.emit('closed')
	      if (callback)
	        callback.apply(null, arguments)
	    })
	    this.emit('closing')
	    this.db = new DeferredLevelDOWN(this.location)
	  } else if (this._status == 'closed' && callback) {
	    return process.nextTick(callback)
	  } else if (this._status == 'closing' && callback) {
	    this.once('closed', callback)
	  } else if (this._isOpening()) {
	    this.once('open', function () {
	      self.close(callback)
	    })
	  }
	}

	LevelUP.prototype.isOpen = function () {
	  return this._status == 'open'
	}

	LevelUP.prototype._isOpening = function () {
	  return this._status == 'opening'
	}

	LevelUP.prototype.isClosed = function () {
	  return (/^clos/).test(this._status)
	}

	function maybeError(db, options, callback) {
	  if (!db._isOpening() && !db.isOpen()) {
	    dispatchError(
	        db
	      , new ReadError('Database is not open')
	      , callback
	    )
	    return true
	  }
	}

	function writeError (db, message, callback) {
	  dispatchError(
	      db
	     , new WriteError(message)
	     , callback
	  )
	}

	function readError (db, message, callback) {
	  dispatchError(
	      db
	     , new ReadError(message)
	     , callback
	  )
	}


	LevelUP.prototype.get = function (key_, options, callback) {
	  var self = this
	    , key

	  callback = getCallback(options, callback)

	  if (maybeError(this, options, callback))
	    return

	  if (key_ === null || key_ === undefined || 'function' !== typeof callback)
	    return readError(this
	      , 'get() requires key and callback arguments', callback)

	  options = util.getOptions(options)
	  key = this._codec.encodeKey(key_, options)

	  options.asBuffer = this._codec.valueAsBuffer(options)

	  this.db.get(key, options, function (err, value) {
	    if (err) {
	      if ((/notfound/i).test(err) || err.notFound) {
	        err = new NotFoundError(
	            'Key not found in database [' + key_ + ']', err)
	      } else {
	        err = new ReadError(err)
	      }
	      return dispatchError(self, err, callback)
	    }
	    if (callback) {
	      try {
	        value = self._codec.decodeValue(value, options)
	      } catch (e) {
	        return callback(new EncodingError(e))
	      }
	      callback(null, value)
	    }
	  })
	}

	LevelUP.prototype.put = function (key_, value_, options, callback) {
	  var self = this
	    , key
	    , value

	  callback = getCallback(options, callback)

	  if (key_ === null || key_ === undefined)
	    return writeError(this, 'put() requires a key argument', callback)

	  if (maybeError(this, options, callback))
	    return

	  options = getOptions(options)
	  key     = this._codec.encodeKey(key_, options)
	  value   = this._codec.encodeValue(value_, options)

	  this.db.put(key, value, options, function (err) {
	    if (err) {
	      return dispatchError(self, new WriteError(err), callback)
	    } else {
	      self.emit('put', key_, value_)
	      if (callback)
	        callback()
	    }
	  })
	}

	LevelUP.prototype.del = function (key_, options, callback) {
	  var self = this
	    , key

	  callback = getCallback(options, callback)

	  if (key_ === null || key_ === undefined)
	    return writeError(this, 'del() requires a key argument', callback)

	  if (maybeError(this, options, callback))
	    return

	  options = getOptions(options)
	  key     = this._codec.encodeKey(key_, options)

	  this.db.del(key, options, function (err) {
	    if (err) {
	      return dispatchError(self, new WriteError(err), callback)
	    } else {
	      self.emit('del', key_)
	      if (callback)
	        callback()
	    }
	  })
	}

	LevelUP.prototype.batch = function (arr_, options, callback) {
	  var self = this
	    , keyEnc
	    , valueEnc
	    , arr

	  if (!arguments.length)
	    return new Batch(this, this._codec)

	  callback = getCallback(options, callback)

	  if (!Array.isArray(arr_))
	    return writeError(this, 'batch() requires an array argument', callback)

	  if (maybeError(this, options, callback))
	    return

	  options  = getOptions(options)
	  arr      = self._codec.encodeBatch(arr_, options)
	  arr      = arr.map(function (op) {
	    if (!op.type && op.key !== undefined && op.value !== undefined)
	      op.type = 'put'
	    return op
	  })

	  this.db.batch(arr, options, function (err) {
	    if (err) {
	      return dispatchError(self, new WriteError(err), callback)
	    } else {
	      self.emit('batch', arr_)
	      if (callback)
	        callback()
	    }
	  })
	}

	LevelUP.prototype.approximateSize = deprecate(function (start_, end_, options, callback) {   
	  var self = this    
	    , start    
	    , end    
	   
	  callback = getCallback(options, callback)    
	   
	  options = getOptions(options)    
	   
	  if (start_ === null || start_ === undefined    
	        || end_ === null || end_ === undefined || 'function' !== typeof callback)    
	    return readError(this, 'approximateSize() requires start, end and callback arguments', callback)   
	   
	  start = this._codec.encodeKey(start_, options)   
	  end   = this._codec.encodeKey(end_, options)   
	   
	  this.db.approximateSize(start, end, function (err, size) {   
	    if (err) {   
	      return dispatchError(self, new OpenError(err), callback)   
	    } else if (callback) {   
	      callback(null, size)   
	    }    
	  })   
	}, 'db.approximateSize() is deprecated. Use db.db.approximateSize() instead')

	LevelUP.prototype.readStream =
	LevelUP.prototype.createReadStream = function (options) {
	  options = extend( {keys: true, values: true}, this.options, options)

	  options.keyEncoding   = options.keyEncoding
	  options.valueEncoding = options.valueEncoding

	  options = this._codec.encodeLtgt(options);
	  options.keyAsBuffer   = this._codec.keyAsBuffer(options)
	  options.valueAsBuffer = this._codec.valueAsBuffer(options)

	  if ('number' !== typeof options.limit)
	    options.limit = -1

	  return new IteratorStream(this.db.iterator(options), extend(options, {
	    decoder: this._codec.createStreamDecoder(options)
	  }))
	}

	LevelUP.prototype.keyStream =
	LevelUP.prototype.createKeyStream = function (options) {
	  return this.createReadStream(extend(options, { keys: true, values: false }))
	}

	LevelUP.prototype.valueStream =
	LevelUP.prototype.createValueStream = function (options) {
	  return this.createReadStream(extend(options, { keys: false, values: true }))
	}

	LevelUP.prototype.toString = function () {
	  return 'LevelUP'
	}

	function utilStatic (name) {
	  return function (location, callback) {
	    getLevelDOWN()[name](location, callback || function () {})
	  }
	}

	module.exports         = LevelUP
	module.exports.errors  = __webpack_require__(15)
	module.exports.destroy = deprecate(
	    utilStatic('destroy')
	  , 'levelup.destroy() is deprecated. Use leveldown.destroy() instead'
	)
	module.exports.repair  = deprecate(
	    utilStatic('repair')
	  , 'levelup.repair() is deprecated. Use leveldown.repair() instead'
	)



/***/ },
/* 131 */
/***/ function(module, exports) {

	
	exports.compare = function (a, b) {

	  if(Buffer.isBuffer(a)) {
	    var l = Math.min(a.length, b.length)
	    for(var i = 0; i < l; i++) {
	      var cmp = a[i] - b[i]
	      if(cmp) return cmp
	    }
	    return a.length - b.length
	  }

	  return a < b ? -1 : a > b ? 1 : 0
	}

	function has(obj, key) {
	  return Object.hasOwnProperty.call(obj, key)
	}

	// to be compatible with the current abstract-leveldown tests
	// nullish or empty strings.
	// I could use !!val but I want to permit numbers and booleans,
	// if possible.

	function isDef (val) {
	  return val != null && val !== ''
	}

	var lowerBound = exports.lowerBound = function (range) {
	  return (
	      isDef(range.gt)                      ? range.gt
	    : isDef(range.gte)                     ? range.gte
	    : isDef(range.min)                     ? range.min
	    : isDef(range.start) && !range.reverse ? range.start
	    : isDef(range.end) && range.reverse    ? range.end
	    :                                        undefined
	  )
	}

	exports.lowerBoundInclusive = function (range) {
	  return isDef(range.gt) ? false : true
	}

	exports.upperBoundInclusive =
	  function (range) {
	    return isDef(range.lt) ? false : true
	  }

	var lowerBoundExclusive = exports.lowerBoundExclusive =
	  function (range) {
	    return isDef(range.gt) ? true : false
	  }

	var upperBoundExclusive = exports.upperBoundExclusive =
	  function (range) {
	    return isDef(range.lt) ? true : false
	  }

	var upperBound = exports.upperBound = function (range) {
	  return (
	      isDef(range.lt)                     ? range.lt
	    : isDef(range.lte)                    ? range.lte
	    : isDef(range.max)                    ? range.max
	    : isDef(range.start) && range.reverse ? range.start
	    : isDef(range.end) && !range.reverse  ? range.end
	    :                                       undefined
	  )
	}


	exports.contains = function (range, key, compare) {
	  compare = compare || exports.compare

	  var lb = lowerBound(range)
	  if(isDef(lb)) {
	    var cmp = compare(key, lb)
	    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
	      return false
	  }

	  var ub = upperBound(range)
	  if(isDef(ub)) {
	    var cmp = compare(key, ub)
	    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
	      return false
	  }

	  return true
	}

	exports.filter = function (range, compare) {
	  return function (key) {
	    return exports.contains(range, key, compare)
	  }
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var inherits          = __webpack_require__(7)
	  , AbstractLevelDOWN = __webpack_require__(5).AbstractLevelDOWN
	  , AbstractIterator  = __webpack_require__(5).AbstractIterator
	  , ltgt              = __webpack_require__(131)
	  , setImmediate      = global.setImmediate || process.nextTick
	  , createRBT = __webpack_require__(119)
	  , globalStore       = {}

	function toKey (key) {
	  return typeof key == 'string' ? '$' + key : JSON.stringify(key)
	}

	function gt(value) {
	  return ltgt.compare(value, this._end) > 0
	}

	function gte(value) {
	  return ltgt.compare(value, this._end) >= 0
	}

	function lt(value) {
	  return ltgt.compare(value, this._end) < 0
	}

	function lte(value) {
	  return ltgt.compare(value, this._end) <= 0
	}


	function MemIterator (db, options) {
	  AbstractIterator.call(this, db)
	  this._limit   = options.limit

	  if (this._limit === -1)
	    this._limit = Infinity

	  var tree = db._store[db._location];

	  this.keyAsBuffer = options.keyAsBuffer !== false
	  this.valueAsBuffer = options.valueAsBuffer !== false
	  this._reverse   = options.reverse
	  this._options = options
	  this._done = 0

	  if (!this._reverse) {
	    this._incr = 'next';
	    this._start = ltgt.lowerBound(options);
	    this._end = ltgt.upperBound(options)

	    if (typeof this._start === 'undefined')
	      this._tree = tree.begin;
	    else if (ltgt.lowerBoundInclusive(options))
	      this._tree = tree.ge(this._start);
	    else
	      this._tree = tree.gt(this._start);

	    if (this._end) {
	      if (ltgt.upperBoundInclusive(options))
	        this._test = lte
	      else
	        this._test = lt
	    }

	  } else {
	    this._incr = 'prev';
	    this._start = ltgt.upperBound(options)
	    this._end = ltgt.lowerBound(options)

	    if (typeof this._start === 'undefined')
	      this._tree = tree.end;
	    else if (ltgt.upperBoundInclusive(options))
	      this._tree = tree.le(this._start)
	    else
	      this._tree = tree.lt(this._start)

	    if (this._end) {
	      if (ltgt.lowerBoundInclusive(options))
	        this._test = gte
	      else
	        this._test = gt
	    }

	  }

	}

	inherits(MemIterator, AbstractIterator)

	MemIterator.prototype._next = function (callback) {
	  var key
	    , value

	  if (this._done++ >= this._limit)
	    return setImmediate(callback)

	  if (!this._tree.valid)
	    return setImmediate(callback)

	  key = this._tree.key
	  value = this._tree.value

	  if (!this._test(key))
	    return setImmediate(callback)

	  if (this.keyAsBuffer)
	    key = new Buffer(key)

	  if (this.valueAsBuffer)
	    value = new Buffer(value)

	  this._tree[this._incr]()

	  setImmediate(function callNext() {
	    callback(null, key, value)
	  })
	}

	MemIterator.prototype._test = function () {return true}

	function MemDOWN (location) {
	  if (!(this instanceof MemDOWN))
	    return new MemDOWN(location)

	  AbstractLevelDOWN.call(this, typeof location == 'string' ? location : '')

	  this._location = this.location ? toKey(this.location) : '_tree'
	  this._store = this.location ? globalStore: this
	  this._store[this._location] = this._store[this._location] || createRBT(ltgt.compare)
	}

	MemDOWN.clearGlobalStore = function (strict) {
	  if (strict) {
	    Object.keys(globalStore).forEach(function (key) {
	      delete globalStore[key];
	    })
	  } else {
	    globalStore = {}
	  }
	}

	inherits(MemDOWN, AbstractLevelDOWN)

	MemDOWN.prototype._open = function (options, callback) {
	  var self = this
	  setImmediate(function callNext() { callback(null, self) })
	}

	MemDOWN.prototype._put = function (key, value, options, callback) {
	  if (typeof value === 'undefined' || value === null) value = ''

	  var iter = this._store[this._location].find(key)

	  if (iter.valid) {
	    this._store[this._location] = iter.update(value)
	  } else {
	    this._store[this._location] = this._store[this._location].insert(key, value)
	  }

	  setImmediate(callback)
	}

	MemDOWN.prototype._get = function (key, options, callback) {
	  var value = this._store[this._location].get(key)

	  if (value === undefined) {
	    // 'NotFound' error, consistent with LevelDOWN API
	    var err = new Error('NotFound')
	    return setImmediate(function callNext() { callback(err) })
	  }

	  if (options.asBuffer !== false && !this._isBuffer(value))
	    value = new Buffer(String(value))

	  setImmediate(function callNext () {
	    callback(null, value)
	  })

	}

	MemDOWN.prototype._del = function (key, options, callback) {
	  this._store[this._location] = this._store[this._location].remove(key)
	  setImmediate(callback)
	}

	MemDOWN.prototype._batch = function (array, options, callback) {
	  var err
	    , i = -1
	    , key
	    , value
	    , iter
	    , len = array.length
	    , tree = this._store[this._location]

	  while (++i < len) {
	    if (!array[i])
	      continue;

	    key = this._isBuffer(array[i].key) ? array[i].key : String(array[i].key)
	    err = this._checkKey(key, 'key')
	    if (err)
	      return setImmediate(function errorCall() { callback(err) })

	    iter = tree.find(key)

	    if (array[i].type === 'put') {
	      value = this._isBuffer(array[i].value) ? array[i].value : String(array[i].value)
	      err = this._checkKey(value, 'value')

	      if (err)
	        return setImmediate(function errorCall() { callback(err) })

	      tree = iter.valid ? iter.update(value) : tree.insert(key, value)
	    } else {
	      tree = iter.remove()
	    }
	  }

	  this._store[this._location] = tree;

	  setImmediate(callback)
	}

	MemDOWN.prototype._iterator = function (options) {
	  return new MemIterator(this, options)
	}

	MemDOWN.prototype._isBuffer = function (obj) {
	  return Buffer.isBuffer(obj)
	}

	MemDOWN.destroy = function (name, callback) {
	  var key = toKey(name)

	  if (key in globalStore)
	    delete globalStore[key]

	  setImmediate(callback)
	}

	module.exports = MemDOWN


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = __webpack_require__(58);

	/*<replacement>*/
	var util = __webpack_require__(13);
	util.inherits = __webpack_require__(7);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = (function (){
	  try {
	    return __webpack_require__(35); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(57);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(59);
	exports.Duplex = __webpack_require__(9);
	exports.Transform = __webpack_require__(58);
	exports.PassThrough = __webpack_require__(133);


/***/ },
/* 135 */
/***/ function(module, exports) {

	exports = module.exports = SemVer;

	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ process.env &&
	    /* nomin */ process.env.NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};

	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';

	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


	// ## Main Version
	// Three dot-separated numeric identifiers.

	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';

	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';

	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';

	src[FULL] = '^' + FULLPLAIN + '$';

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';

	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';

	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';

	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';

	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';

	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';

	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';

	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';

	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';


	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';

	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';

	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';

	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}

	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer)
	    return version;

	  if (typeof version !== 'string')
	    return null;

	  if (version.length > MAX_LENGTH)
	    return null;

	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version))
	    return null;

	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}

	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}


	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}

	exports.SemVer = SemVer;

	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }

	  if (version.length > MAX_LENGTH)
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);

	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);

	  this.raw = version;

	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];

	  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
	    throw new TypeError('Invalid major version')

	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
	    throw new TypeError('Invalid minor version')

	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
	    throw new TypeError('Invalid patch version')

	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id
	        if (num >= 0 && num < MAX_SAFE_INTEGER)
	          return num
	      }
	      return id;
	    });

	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}

	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};

	SemVer.prototype.toString = function() {
	  return this.version;
	};

	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  return this.compareMain(other) || this.comparePre(other);
	};

	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};

	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);

	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;

	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};

	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;

	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
	        this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0)
	        this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1]))
	            this.prerelease = [identifier, 0];
	        } else
	          this.prerelease = [identifier, 0];
	      }
	      break;

	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};

	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof(loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }

	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}

	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre'+key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}

	exports.compareIdentifiers = compareIdentifiers;

	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}

	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}

	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}

	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}

	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}

	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}

	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}

	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}

	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}

	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}

	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}

	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}

	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}

	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}

	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}

	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}

	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}

	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }

	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);

	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);

	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;

	  debug('comp', this);
	}

	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);

	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);

	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';

	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else
	    this.semver = new SemVer(m[2], this.loose);
	};

	Comparator.prototype.toString = function() {
	  return this.value;
	};

	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);

	  if (this.semver === ANY)
	    return true;

	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);

	  return cmp(version, this.operator, this.semver, this.loose);
	};


	exports.Range = Range;
	function Range(range, loose) {
	  if ((range instanceof Range) && range.loose === loose)
	    return range;

	  if (!(this instanceof Range))
	    return new Range(range, loose);

	  this.loose = loose;

	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });

	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }

	  this.format();
	}

	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};

	Range.prototype.toString = function() {
	  return this.range;
	};

	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);

	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);

	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);

	  // normalize spaces
	  range = range.split(/\s+/).join(' ');

	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.

	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });

	  return set;
	};

	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}

	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}

	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0- <1.3.0-
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';

	    debug('tilde return', ret);
	    return ret;
	  });
	}

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}

	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;

	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      else
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	    }

	    debug('caret return', ret);
	    return ret;
	  });
	}

	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}

	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;

	    if (gtlt === '=' && anyX)
	      gtlt = '';

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<'
	        if (xm)
	          M = +M + 1
	        else
	          m = +m + 1
	      }

	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }

	    debug('xRange return', ret);

	    return ret;
	  });
	}

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}

	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {

	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0';
	  else
	    from = '>=' + from;

	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;

	  return (from + ' ' + to).trim();
	}


	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;

	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);

	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};

	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }

	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY)
	        continue;

	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch)
	          return true;
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }

	  return true;
	}

	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}

	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function(version) {
	    return satisfies(version, range, loose);
	  }).sort(function(a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}

	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}

	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}

	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}

	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);

	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }

	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }

	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.

	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];

	    var high = null;
	    var low = null;

	    comparators.forEach(function(comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });

	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }

	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}


/***/ },
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */

	module.exports = __webpack_require__(3).deprecate;


/***/ },
/* 139 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/array.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * Array random slice with items count.
	 * @param {Array} arr
	 * @param {Number} num, number of sub items.
	 * @return {Array}
	 */
	exports.randomSlice = function randomSlice(arr, num) {
	  if (!num || num >= arr.length) {
	    return arr.slice();
	  }
	  var index = Math.floor(Math.random() * arr.length);
	  var a = [];
	  for (var i = 0, j = index; i < num; i++) {
	    a.push(arr[j++]);
	    if (j === arr.length) {
	      j = 0;
	    }
	  }
	  return a;
	};


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * utility - lib/crypto.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * Module dependencies.
	 */

	var crypto = __webpack_require__(61);

	/**
	 * hash
	 *
	 * @param {String} method hash method, e.g.: 'md5', 'sha1'
	 * @param {String|Buffer} s
	 * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
	 * @return {String} md5 hash string
	 * @public
	 */
	exports.hash = function hash(method, s, format) {
	  var sum = crypto.createHash(method);
	  var isBuffer = Buffer.isBuffer(s);
	  if (!isBuffer && typeof s === 'object') {
	    s = JSON.stringify(sortObject(s));
	  }
	  sum.update(s, isBuffer ? 'binary' : 'utf8');
	  return sum.digest(format || 'hex');
	};

	/**
	 * md5 hash
	 *
	 * @param {String|Buffer} s
	 * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
	 * @return {String} md5 hash string
	 * @public
	 */
	exports.md5 = function md5(s, format) {
	  return exports.hash('md5', s, format);
	};

	/**
	 * sha1 hash
	 *
	 * @param {String|Buffer} s
	 * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
	 * @return {String} sha1 hash string
	 * @public
	 */
	exports.sha1 = function sha1(s, format) {
	  return exports.hash('sha1', s, format);
	};

	/**
	 * sha256 hash
	 *
	 * @param {String|Buffer} s
	 * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
	 * @return {String} sha256 hash string
	 * @public
	 */
	exports.sha256 = function sha1(s, format) {
	  return exports.hash('sha256', s, format);
	};

	/**
	 * HMAC algorithm.
	 *
	 * Equal bash:
	 *
	 * ```bash
	 * $ echo -n "$data" | openssl dgst -binary -$algorithm -hmac "$key" | openssl $encoding
	 * ```
	 *
	 * @param {String} algorithm, dependent on the available algorithms supported by the version of OpenSSL on the platform.
	 *   Examples are 'sha1', 'md5', 'sha256', 'sha512', etc.
	 *   On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.
	 * @param {String} key, the hmac key to be used.
	 * @param {String|Buffer} data, content string.
	 * @param {String} [encoding='base64']
	 * @return {String} digest string.
	 */
	exports.hmac = function hmac(algorithm, key, data, encoding) {
	  encoding = encoding || 'base64';
	  var hmac = crypto.createHmac(algorithm, key);
	  hmac.update(data, Buffer.isBuffer(data) ? 'binary' : 'utf8');
	  return hmac.digest(encoding);
	};

	/**
	 * Base64 encode string.
	 *
	 * @param {String|Buffer} s
	 * @param {Boolean} [urlsafe=false] Encode string s using a URL-safe alphabet,
	 *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet.
	 * @return {String} base64 encode format string.
	 */
	exports.base64encode = function base64encode(s, urlsafe) {
	  if (!Buffer.isBuffer(s)) {
	    s = new Buffer(s);
	  }
	  var encode = s.toString('base64');
	  if (urlsafe) {
	    encode = encode.replace(/\+/g, '-').replace(/\//g, '_');
	  }
	  return encode;
	};

	/**
	 * Base64 string decode.
	 *
	 * @param {String} encode, base64 encoding string.
	 * @param {Boolean} [urlsafe=false] Decode string s using a URL-safe alphabet,
	 *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet.
	 * @param {encoding} [encoding=utf8] if encoding = buffer, will return Buffer instance
	 * @return {String|Buffer} plain text.
	 */
	exports.base64decode = function base64decode(encodeStr, urlsafe, encoding) {
	  if (urlsafe) {
	    encodeStr = encodeStr.replace(/\-/g, '+').replace(/_/g, '/');
	  }
	  var buf = new Buffer(encodeStr, 'base64');
	  if (encoding === 'buffer') {
	    return buf;
	  }
	  return buf.toString(encoding || 'utf8');
	};

	function sortObject(o) {
	  if (!o || Array.isArray(o) || typeof o !== 'object') {
	    return o;
	  }
	  var keys = Object.keys(o);
	  keys.sort();
	  var values = [];
	  for (var i = 0; i < keys.length; i++) {
	    var k = keys[i];
	    values.push([k, sortObject(o[k])]);
	  }
	  return values;
	}


/***/ },
/* 141 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/date.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	var MONTHS = [
	  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];

	// only set once.
	var TIMEZONE = ' ';
	var _hourOffset = parseInt(-(new Date().getTimezoneOffset()) / 60, 10);
	if (_hourOffset >= 0) {
	  TIMEZONE += '+';
	} else {
	  TIMEZONE += '-';
	}
	_hourOffset = Math.abs(_hourOffset);
	if (_hourOffset < 10) {
	  _hourOffset = '0' + _hourOffset;
	}
	TIMEZONE += _hourOffset + '00';

	/**
	 * Access log format date. format: `moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')`
	 *
	 * @return {String}
	 */
	exports.accessLogDate = function (d) {
	  // 16/Apr/2013:16:40:09 +0800
	  d = d || new Date();
	  var date = d.getDate();
	  if (date < 10) {
	    date = '0' + date;
	  }
	  var hours = d.getHours();
	  if (hours < 10) {
	    hours = '0' + hours;
	  }
	  var mintues = d.getMinutes();
	  if (mintues < 10) {
	    mintues = '0' + mintues;
	  }
	  var seconds = d.getSeconds();
	  if (seconds < 10) {
	    seconds = '0' + seconds;
	  }
	  return date + '/' + MONTHS[d.getMonth()] + '/' + d.getFullYear() +
	    ':' + hours + ':' + mintues + ':' + seconds + TIMEZONE;
	};

	/**
	 * Normal log format date. format: `moment().format('YYYY-MM-DD HH:mm:ss.SSS')`
	 *
	 * @return {String}
	 */
	exports.logDate = exports.YYYYMMDDHHmmssSSS = function (d, msSep) {
	  if (typeof d === 'string') {
	    // logDate(msSep)
	    msSep = d;
	    d = new Date();
	  } else {
	    // logDate(d, msSep)
	    d = d || new Date();
	  }
	  var date = d.getDate();
	  if (date < 10) {
	    date = '0' + date;
	  }
	  var month = d.getMonth() + 1;
	  if (month < 10) {
	    month = '0' + month;
	  }
	  var hours = d.getHours();
	  if (hours < 10) {
	    hours = '0' + hours;
	  }
	  var mintues = d.getMinutes();
	  if (mintues < 10) {
	    mintues = '0' + mintues;
	  }
	  var seconds = d.getSeconds();
	  if (seconds < 10) {
	    seconds = '0' + seconds;
	  }
	  var milliseconds = d.getMilliseconds();
	  if (milliseconds < 10) {
	    milliseconds = '00' + milliseconds;
	  } else if (milliseconds < 100) {
	    milliseconds = '0' + milliseconds;
	  }
	  return d.getFullYear() + '-' + month + '-' + date + ' ' +
	    hours + ':' + mintues + ':' + seconds + (msSep || '.') + milliseconds;
	};

	/**
	 * `moment().format('YYYY-MM-DD HH:mm:ss')` format date string.
	 *
	 * @return {String}
	 */
	exports.YYYYMMDDHHmmss = function (d, options) {
	  d = d || new Date();
	  if (!(d instanceof Date)) {
	    d = new Date(d);
	  }

	  var dateSep = '-';
	  var timeSep = ':';
	  if (options) {
	    if (options.dateSep) {
	      dateSep = options.dateSep;
	    }
	    if (options.timeSep) {
	      timeSep = options.timeSep;
	    }
	  }
	  var date = d.getDate();
	  if (date < 10) {
	    date = '0' + date;
	  }
	  var month = d.getMonth() + 1;
	  if (month < 10) {
	    month = '0' + month;
	  }
	  var hours = d.getHours();
	  if (hours < 10) {
	    hours = '0' + hours;
	  }
	  var mintues = d.getMinutes();
	  if (mintues < 10) {
	    mintues = '0' + mintues;
	  }
	  var seconds = d.getSeconds();
	  if (seconds < 10) {
	    seconds = '0' + seconds;
	  }
	  return d.getFullYear() + dateSep + month + dateSep + date + ' ' +
	    hours + timeSep + mintues + timeSep + seconds;
	};

	/**
	 * `moment().format('YYYY-MM-DD')` format date string.
	 *
	 * @return {String}
	 */
	exports.YYYYMMDD = function YYYYMMDD(d, sep) {
	  if (typeof d === 'string') {
	    // YYYYMMDD(sep)
	    sep = d;
	    d = new Date();
	  } else {
	    // YYYYMMDD(d, sep)
	    d = d || new Date();
	    if (typeof sep !== 'string') {
	      sep = '-';
	    }
	  }
	  var date = d.getDate();
	  if (date < 10) {
	    date = '0' + date;
	  }
	  var month = d.getMonth() + 1;
	  if (month < 10) {
	    month = '0' + month;
	  }
	  return d.getFullYear() + sep + month + sep + date;
	};

	/**
	 * return datetime struct.
	 *
	 * @return {Object} date
	 *  - {Number} YYYYMMDD, 20130401
	 *  - {Number} H, 0, 1, 9, 12, 23
	 */
	exports.datestruct = function (now) {
	  now = now || new Date();
	  return {
	    YYYYMMDD: now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate(),
	    H: now.getHours()
	  };
	};

	/**
	 * Get Unix's timestamp in seconds.
	 * @return {Number}
	 */
	exports.timestamp = function timestamp(t) {
	  if (t) {
	    var v = t;
	    if (typeof v === 'string') {
	      v = Number(v);
	    }
	    if (String(t).length === 10) {
	      v *= 1000;
	    }
	    return new Date(v);
	  }
	  return Math.round(Date.now() / 1000);
	};


/***/ },
/* 142 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/function.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * A empty function.
	 *
	 * @return {Function}
	 * @public
	 */
	exports.noop = function noop() {};

	/**
	 * Get a function parameter's names.
	 *
	 * @param {Function} func
	 * @param {Boolean} [useCache], default is true
	 * @return {Array} names
	 */
	exports.getParamNames = function getParamNames(func, cache) {
	  cache = cache !== false;
	  if (cache && func.__cache_names) {
	    return func.__cache_names;
	  }
	  var str = func.toString();
	  var names = str.slice(str.indexOf('(') + 1, str.indexOf(')')).match(/([^\s,]+)/g) || [];
	  func.__cache_names = names;
	  return names;
	};


/***/ },
/* 143 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/crypto.js
	 *
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * Module dependencies.
	 */

	exports.strictJSONParse = function (str) {
	  var obj = JSON.parse(str);
	  if (!obj || typeof obj !== 'object') {
	    throw new Error('JSON string is not object');
	  }
	  return obj;
	};


/***/ },
/* 144 */
/***/ function(module, exports) {

	/**
	 * Copyright(c) node-modules and other contributors.
	 * MIT Licensed
	 *
	 * Authors:
	 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
	 */

	'use strict';

	/**
	 * Module dependencies.
	 */

	exports.has = function has(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	};

	/**
	 * generate a real map object(clean object), no constructor, no __proto__
	 * @param {Object} [obj] - init object, optional
	 * @return {Object}
	 */
	exports.map = function map(obj) {
	  var map = new EmptyObject();
	  if (!obj) {
	    return map;
	  }

	  for (var key in obj) {
	    map[key] = obj[key];
	  }
	  return map;
	};

	// faster way like `Object.create(null)` to get a 'clean' empty object
	// https://github.com/nodejs/node/blob/master/lib/events.js#L5
	// https://cnodejs.org/topic/571e0c445a26c4a841ecbcf1
	function EmptyObject() {}
	EmptyObject.prototype = Object.create(null);


/***/ },
/* 145 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/number.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	// http://www.2ality.com/2013/10/safe-integers.html
	// http://es6.ruanyifeng.com/#docs/number
	exports.MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
	exports.MIN_SAFE_INTEGER = -exports.MAX_SAFE_INTEGER;
	var MAX_SAFE_INTEGER_STR = exports.MAX_SAFE_INTEGER_STR = String(exports.MAX_SAFE_INTEGER);
	var MAX_SAFE_INTEGER_STR_LENGTH = MAX_SAFE_INTEGER_STR.length;

	/**
	 * Detect a number string can safe convert to Javascript Number.
	 *
	 * @param {String} s number format string, like `"123"`, `"-1000123123123123123123"`
	 * @return {Boolean}
	 */
	exports.isSafeNumberString = function isSafeNumberString(s) {
	  if (s[0] === '-') {
	    s = s.substring(1);
	  }
	  if (s.length < MAX_SAFE_INTEGER_STR_LENGTH ||
	    (s.length === MAX_SAFE_INTEGER_STR_LENGTH && s <= MAX_SAFE_INTEGER_STR)) {
	    return true;
	  }
	  return false;
	};

	/**
	 * Convert string to Number if string in safe Number scope.
	 *
	 * @param {String} s number format string.
	 * @return {Number|String} success will return Number, otherise return the original string.
	 */
	exports.toSafeNumber = function toSafeNumber(s) {
	  if (typeof s === 'number') {
	    return s;
	  }

	  return exports.isSafeNumberString(s) ? Number(s) : s;
	};


/***/ },
/* 146 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/optimize.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * optimize try catch
	 * @param {Function} fn
	 * @return {Object}
	 *   - {Error} error
	 *   - {Mix} value
	 */
	exports.try = function (fn) {
	  var res = {
	    error: undefined,
	    value: undefined
	  };

	  try {
	    res.value = fn();
	  } catch (err) {
	    res.error = err instanceof Error
	      ? err
	      : new Error(err);
	  }

	  return res;
	};

	/**
	 * avoid if (a && a.b && a.b.c)
	 * @param {Object} obj
	 * @param {...String} keys
	 * @return {Object}
	 */
	exports.dig = function (obj) {
	  if (!obj) {
	    return;
	  }
	  if (arguments.length <= 1) {
	    return obj;
	  }

	  var value = obj[arguments[1]];
	  for (var i = 2; i < arguments.length; i++) {
	    if (!value) {
	      break;
	    }
	    value = value[arguments[i]];
	  }

	  return value;
	};

	/**
	 * optimize arguments to array
	 * @param {Arguments} args
	 * @return {Array}
	 */
	exports.argumentsToArray = function (args) {
	  var res = new Array(args.length);
	  for (var i = 0; i < args.length; i++) {
	    res[i] = args[i];
	  }
	  return res;
	};


/***/ },
/* 147 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/polyfill.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	exports.setImmediate = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){
	    process.nextTick(fn.bind.apply(fn, arguments));
	  };


/***/ },
/* 148 */
/***/ function(module, exports) {

	/*!
	 * utility - lib/string.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	exports.randomString = function randomString(length, charSet) {
	  var result = [];
	  length = length || 16;
	  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	  while (length--) {
	    result.push(charSet[Math.floor(Math.random() * charSet.length)]);
	  }
	  return result.join('');
	};

	/**
	 * split string to array
	 * @param  {String} str
	 * @param  {String} [sep] default is ','
	 * @return {Array}
	 */
	exports.split = function split(str, sep) {
	  str = str || '';
	  sep = sep || ',';
	  var items = str.split(sep);
	  var needs = [];
	  for (var i = 0; i < items.length; i++) {
	    var s = items[i].trim();
	    if (s.length > 0) {
	      needs.push(s);
	    }
	  }
	  return needs;
	};

	// always optimized
	exports.splitAlwaysOptimized = function splitAlwaysOptimized() {
	  var str = '';
	  var sep = ',';
	  if (arguments.length === 1) {
	    str = arguments[0] || '';
	  } else if (arguments.length === 2) {
	    str = arguments[0] || '';
	    sep = arguments[1] || ',';
	  }
	  var items = str.split(sep);
	  var needs = [];
	  for (var i = 0; i < items.length; i++) {
	    var s = items[i].trim();
	    if (s.length > 0) {
	      needs.push(s);
	    }
	  }
	  return needs;
	};

	/**
	 * Replace string
	 *
	 * @param  {String} str
	 * @param  {String|RegExp} substr
	 * @param  {String|Function} newSubstr
	 * @return {String}
	 */
	exports.replace = function replace(str, substr, newSubstr) {
	  var replaceFunction = newSubstr;
	  if (typeof replaceFunction !== 'function') {
	    replaceFunction = function () {
	      return newSubstr;
	    };
	  }
	  return str.replace(substr, replaceFunction);
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * utility - lib/utility.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * Module dependencies.
	 */

	var copy = __webpack_require__(74);

	copy(__webpack_require__(142))
	.and(__webpack_require__(147))
	.and(__webpack_require__(146))
	.and(__webpack_require__(140))
	.and(__webpack_require__(145))
	.and(__webpack_require__(148))
	.and(__webpack_require__(139))
	.and(__webpack_require__(143))
	.and(__webpack_require__(141))
	.and(__webpack_require__(144))
	.and(__webpack_require__(150))
	.to(module.exports);


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * utility - lib/web.js
	 *
	 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
	 * MIT Licensed
	 */

	"use strict";

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @public
	 */
	exports.escape = __webpack_require__(117);

	/**
	 * Safe encodeURIComponent, won't throw any error.
	 * If `encodeURIComponent` error happen, just return the original value.
	 *
	 * @param {String} text
	 * @return {String} URL encode string.
	 */
	exports.encodeURIComponent = function encodeURIComponent_(text) {
	  try {
	    return encodeURIComponent(text);
	  } catch (e) {
	    return text;
	  }
	};

	/**
	 * Safe decodeURIComponent, won't throw any error.
	 * If `decodeURIComponent` error happen, just return the original value.
	 *
	 * @param {String} encodeText
	 * @return {String} URL decode original string.
	 */
	exports.decodeURIComponent = function decodeURIComponent_(encodeText) {
	  try {
	    return decodeURIComponent(encodeText);
	  } catch (e) {
	    return encodeText;
	  }
	};


/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ])
});
;