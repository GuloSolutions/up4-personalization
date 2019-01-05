/*!
 * Name: Facebook Social Quiz
 * URI: https://up4probiotics.com
 * Author: Gulo - A Digital Agency
 * Author URI: http://gulo.co
 * Version: 1.0.19 (built on 2019-1-5 09:31:24)
 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(31);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(10);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = __webpack_require__(12);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _checklistOptions, _data;

var _vue = __webpack_require__(25);

var _vue2 = _interopRequireDefault(_vue);

var _vueFormWizard = __webpack_require__(28);

var _vueFormWizard2 = _interopRequireDefault(_vueFormWizard);

var _vueFormGenerator = __webpack_require__(29);

var _vueFormGenerator2 = _interopRequireDefault(_vueFormGenerator);

var _axios = __webpack_require__(30);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueFormWizard2.default);
_vue2.default.use(_vueFormGenerator2.default);
_vue2.default.config.devtools = false;
_vue2.default.config.productionTip = false;
_vue2.default.prototype.$http = _axios2.default;

window.app = vm;

var vm = new _vue2.default({
  el: '#survey-social-public',
  ref: 'wizard',
  data: (_data = {
    counter: 1,
    counterMax: 0,
    male_gender: '',

    model: {
      age: null,
      gender: null,
      travels_often: null,
      has_children: null,
      exercises_often: null,
      capsules: null,
      health_needs: null
    },

    formOptions: {
      validationErrorClass: "has-error",
      validationSuccessClass: "has-success",
      validateAfterChanged: true
    },

    ageTabSchema: {
      fields: [{
        type: "radios",
        model: "age",
        required: true,
        values: ["Under 25", "25-39", "40-49", "50+"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-6'
      }]
    },

    genderTabSchema: {
      fields: [{
        type: "radios",
        model: "gender",
        required: true,
        values: ["Female", "Male", "Other"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },

    travelTabSchema: {
      fields: [{
        type: "radios",
        model: "travels_often",
        required: true,
        values: ["Go-getter", "Jet setter", "Homebody", "Free spirit"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },

    childrenTabSchema: {
      fields: [{
        type: "radios",
        model: "has_children",
        required: true,
        values: ["Yes, and they’re out of the house", "Yes, and they're growing so fast", "Yes, little rugrats", "Nope"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },
    exerciseTabSchema: {
      fields: [{
        type: "radios",
        model: "exercises_often",
        required: true,
        values: ["I train to compete", "The gym is my domain", "Hey, life is busy", "I like my couch"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },
    capsulesTabSchema: {
      fields: [{
        type: "radios",
        model: "capsules",
        required: true,
        values: ["Gummies", "Capsules"],
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },
    healthTabSchema: {
      fields: [{
        type: "checklist",
        model: "health_needs",
        listBox: true,
        required: true,
        values: ["Digestive", "Immune", "Vaginal", "Urinary tract"],
        checklistOptions: (_checklistOptions = {
          name: "Digestive"
        }, (0, _defineProperty3.default)(_checklistOptions, 'name', "Immune"), (0, _defineProperty3.default)(_checklistOptions, 'name', "Vaginal"), (0, _defineProperty3.default)(_checklistOptions, 'name', "Urinary tract"), _checklistOptions),
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    },
    healthTabSchemaMale: {
      fields: [{
        type: "checklist",
        model: "health_needs",
        listBox: true,
        required: true,
        values: ["Digestive", "Immune"],
        checklistOptions: (0, _defineProperty3.default)({
          name: "Digestive"
        }, 'name', "Immune"),
        validator: _vueFormGenerator2.default.validators.required,
        styleClasses: 'col-xs-9'
      }]
    }

  }, (0, _defineProperty3.default)(_data, 'counterMax', document.querySelectorAll(' ul.wizard-nav.wizard-nav-pills li').length), (0, _defineProperty3.default)(_data, 'computed', {
    dynamicAge: function dynamicAge() {
      return this.model.age;
    }
  }), _data),
  methods: {
    onComplete: function onComplete(event) {

      if (this.model.age === "Under 25") {
        this.model.age = 20;
      }

      if (this.model.age === "25-39") {
        this.model.age = 30;
      }

      if (this.model.age === "40-49") {
        this.model.age = 45;
      }

      if (this.model.age === "50+") {
        this.model.age = 50;
      }

      if (this.model.gender === "Other") {
        this.model.gender = null;
      }

      if (this.model.has_children === "Yes, and they're growing so fast" || this.model.has_children === "Yes, little rugrats") {
        this.model.has_children = 1;
      };

      if (this.model.has_children === "Yes, and they’re out of the house" || this.model.has_children === "Nope") {
        this.model.has_children = 0;
      };

      if (this.model.travels_often === "Go-getter" || this.model.travels_often === "Jet setter") {
        this.model.travels_often = 1;
      };

      if (this.model.travels_often === "Homebody" || this.model.travels_often === "Free spirit") {
        this.model.travels_often = 0;
      };

      if (this.model.exercises_often === "I train to compete" || this.model.exercises_often === "The gym is my domain") {
        this.model.exercises_often = 1;
      };

      if (this.model.exercises_often === "Hey, life is busy" || this.model.exercises_often === "I like my couch") {
        this.model.exercises_often = 0;
      };

      if (this.model.capsules === "Capsules") {
        this.model.capsules = 1;
      }
      if (this.model.capsules === "Gummies") {
        this.model.capsules = 0;
      }

      $('#wizard-survey-finish').addClass('finish-loader').html('<div class="gif-loader"></div>');

      var params = {
        'action': 'survey_receiver',
        'response[age]': this.model.age,
        'response[gender]': this.model.gender,
        'response[has_children]': this.model.has_children,
        'response[travels_often]': this.model.travels_often,
        'response[exercises_often]': this.model.exercises_often,
        'response[capsules]': this.model.capsules,
        'response[health_needs]': this.model.health_needs
      };

      var recursiveDecoded = decodeURIComponent($.param(params));

      _axios2.default.post(ajax_receiver.ajax_url, recursiveDecoded, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(function (response) {
        var redirect = '/';

        if (!ajax_receiver.is_front_page && response.data.redirect) {
          redirect = response.data.redirect;
        }

        window.location = redirect;
      }).catch(function (error) {
        console.log(error);
      });
    },
    validateAgeTab: function validateAgeTab() {
      return this.$refs.ageTabForm.validate();
    },
    validateGenderTab: function validateGenderTab() {
      return this.$refs.genderTabForm.validate();
    },
    validateTravelTab: function validateTravelTab() {
      return this.$refs.travelTabForm.validate();
    },
    validateChildrenTab: function validateChildrenTab() {
      return this.$refs.childrenTabForm.validate();
    },
    validateExerciseTab: function validateExerciseTab() {
      return this.$refs.exerciseTabForm.validate();
    },
    validateCapsulesTab: function validateCapsulesTab() {
      return this.$refs.capsulesTabForm.validate();
    },
    validateHealthTab: function validateHealthTab() {
      return this.$refs.healthTabForm.validate();
    },
    incrementCounter: function incrementCounter(tabIndex, activeTabIndex, prevIndex, nextIndex) {
      this.counter = activeTabIndex + 1;
      this.$forceUpdate();
      return [this.counter, this.counterMax];
    },
    restartSurvey: function restartSurvey(event, tabIndex, activeTabIndex, prevIndex, nextIndex) {
      if (event) {
        this.$refs.wizard.navigateToTab(0);
      }
    },
    hideSurveyDiv: function hideSurveyDiv(event) {
      if (event) {
        $('#survey-social-public').removeClass('active');
        $('.site-header').removeClass('under');

        var after_hash = window.location.href.split('#')[1];
        var before_hash = window.location.href.split('#')[0];
        if (after_hash != undefined) {
          window.history.pushState({}, null, before_hash);
        }
      }
    },

    prettyJSON: function prettyJSON(json) {
      if (json) {
        json = (0, _stringify2.default)(json, undefined, 4);
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      }
    }
  },

  mounted: function mounted(event, tabIndex, activeTabIndex, prevIndex, nextIndex) {
    this.$nextTick(function (event) {
      this.counterMax = $('ul.wizard-nav.wizard-nav-pills li').length;
    }), $('#start-over').onclick = function () {
      vm.$refs.wizard.reset();
    };

    $("#survey-social-public input:radio").click(function (event) {
      setTimeout(function () {
        vm.$refs.wizard.nextTab();
      }, 500);
    });

    $("#survey-social-public button:contains('Next')").attr('id', 'wizard-survey-next');
  },

  updated: function updated() {

    $("#survey-social-public input:checkbox").click(function (event) {
      if ($("#survey-social-public input:checkbox:checked").length === 0) {
        $("#survey-social-public button:contains('Finish')").removeClass('pulse');
      } else {
        $("#survey-social-public button:contains('Finish')").addClass('pulse');
      }
    });

    $("#survey-social-public button:contains('Back')").attr('id', 'wizard-survey-back');
    $("#survey-social-public button:contains('Finish')").attr('id', 'wizard-survey-finish');
  },
  beforeUpdate: function checkGender() {

    if (this.model.gender == 'Male') {
      $("input[name='Vaginal']").closest('div[class^="list-row"]').hide();
      $("input[name='Urinary-tract']").closest('div[class^="list-row"]').hide();
    } else if (this.model.gender == 'Female' && this.model.capsules == 'Gummies') {
      $("input[name='Vaginal']").closest('div[class^="list-row"]').hide();
      $("input[name='Urinary-tract']").closest('div[class^="list-row"]').hide();
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(13);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(1);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false)
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (process.env.NODE_ENV !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production') {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          process.env.NODE_ENV !== 'production' &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(26).setImmediate))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(27);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(3)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueFormWizard=e():t.VueFormWizard=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,b=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),b(t,e)}):u.beforeCreate=b?[].concat(b,l):[l]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach(function(t){t.checked=!1}),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach(function(t){t.checked=!0})},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then(function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)}).catch(function(t){a.setLoading(!1),a.setValidationError(t)});else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find(function(a,n){var i=a.route===t;return i&&(e=n),i});if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach(function(t){t.active=!1})},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),r=a(11),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),r=a(13),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",function(){return n.a}),a.d(e,"TabContent",function(){return i.a}),a.d(e,"WizardButton",function(){return r.a}),a.d(e,"WizardStep",function(){return s.a});var o={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),r=a(15),s=a(0),o=n,c=s(i.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex(function(t){return t.tabId===e})}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=r,e.c=s},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})})],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:n,staticRenderFns:i};e.a=r},function(t,e,a){"use strict";var n=a(6),i=a(17),r=a(0),s=r(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:n,staticRenderFns:i};e.a=r}])});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vue-form-generator v2.3.3
 * https://github.com/vue-generators/vue-form-generator/
 * Released under the MIT License.
 */

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueFormGenerator=e():t.VueFormGenerator=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=112)}([function(t,e,n){"use strict";function r(t,e,n,r,i,o,u,a){t=t||{};var c=typeof t.default;"object"!==c&&"function"!==c||(t=t.default);var s="function"==typeof t?t.options:t;e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId=o);var l;if(u?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(s.functional){s._injectStyles=l;var f=s.render;s.render=function(t,e){return l.call(e),f(t,e)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:s}}e.a=r},function(t,e,n){"use strict";function r(t){return p()(t)?null!=x.default[t]?x.default[t]:(console.warn("'"+t+"' is not a validator function!"),null):t}function i(t,e,n){var r=b()(n.context,"schema.attributes",{}),i=e.value||"input";p()(i)&&(r=b()(r,i)||r),_()(r,function(e,n){t.setAttribute(n,e)})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(50),u=n.n(o),a=n(198),c=n.n(a),s=n(82),l=n.n(s),f=n(2),d=n.n(f),h=n(45),p=n.n(h),v=n(5),m=n.n(v),g=n(23),_=n.n(g),y=n(8),b=n.n(y),x=n(84),w=n(28);e.default={props:["vfg","model","schema","formOptions","disabled"],data:function(){return{errors:[],debouncedValidateFunc:null,debouncedFormatFunc:null}},directives:{attributes:{bind:i,updated:i,componentUpdated:i}},computed:{value:{cache:!1,get:function(){var t=void 0;return t=m()(b()(this.schema,"get"))?this.schema.get(this.model):b()(this.model,this.schema.model),this.formatValueToField(t)},set:function(t){var e=this.value;t=this.formatValueToModel(t),m()(t)?t(t,e):this.updateModelValue(t,e)}}},methods:{validate:function(t){var e=this;this.clearValidationErrors();var n=b()(this.formOptions,"validateAsync",!1),i=[];if(this.schema.validator&&!0!==this.schema.readonly&&!0!==this.disabled){var o=[];d()(this.schema.validator)?_()(this.schema.validator,function(t){o.push(r(t).bind(e))}):o.push(r(this.schema.validator).bind(this)),_()(o,function(t){if(n)i.push(t(e.value,e.schema,e.model));else{var r=t(e.value,e.schema,e.model);r&&m()(r.then)?r.then(function(t){t&&(e.errors=e.errors.concat(t));var n=0===e.errors.length;e.$emit("validated",n,e.errors,e)}):r&&(i=i.concat(r))}})}var a=function(n){var r=[];_()(n,function(t){d()(t)&&t.length>0?r=r.concat(t):p()(t)&&r.push(t)}),m()(e.schema.onValidated)&&e.schema.onValidated.call(e,e.model,r,e.schema);var i=0===r.length;return t||e.$emit("validated",i,r,e),e.errors=r,r};return n?u.a.all(i).then(a):a(i)},debouncedValidate:function(){m()(this.debouncedValidateFunc)||(this.debouncedValidateFunc=l()(this.validate.bind(this),b()(this,"$parent.options.validateDebounceTime",500))),this.debouncedValidateFunc()},updateModelValue:function(t,e){var n=!1;m()(this.schema.set)?(this.schema.set(this.model,t),n=!0):this.schema.model&&(this.setModelValueByPath(this.schema.model,t),n=!0),n&&(this.$emit("model-updated",t,this.schema.model),m()(this.schema.onChanged)&&this.schema.onChanged.call(this,this.model,t,e,this.schema),!0===b()(this.$parent,"options.validateAfterChanged",!1)&&(b()(this.$parent,"options.validateDebounceTime",0)>0?this.debouncedValidate():this.validate()))},clearValidationErrors:function(){this.errors.splice(0)},setModelValueByPath:function(t,e){var n=t.replace(/\[(\w+)\]/g,".$1");n=n.replace(/^\./,"");for(var r=this.model,i=n.split("."),o=0,u=i.length;o<u;){var a=i[o];if(!(o<u-1))return void this.$root.$set(r,a,e);void 0!==r[a]?r=r[a]:(this.$root.$set(r,a,{}),r=r[a]),++o}},getFieldID:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=b()(this.formOptions,"fieldIdPrefix","");return Object(w.slugifyFormID)(t,n)+(e?"-"+c()():"")},getFieldClasses:function(){return b()(this.schema,"fieldClasses",[])},formatValueToField:function(t){return t},formatValueToModel:function(t){return t}}}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(56)("wks"),i=n(57),o=n(6).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e,n){function r(t){if(!o(t))return!1;var e=i(t);return e==a||e==c||e==u||e==s}var i=n(43),o=n(7),u="[object AsyncFunction]",a="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){function r(t,e,n){var r=null==t?void 0:i(t,e);return void 0===r?n:r}var i=n(150);t.exports=r},function(t,e,n){var r=n(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(207),i=n(46),o=n(212),u=n(75),a=Object.prototype,c=a.hasOwnProperty,s=r(function(t,e){t=Object(t);var n=-1,r=e.length,s=r>2?e[2]:void 0;for(s&&o(e[0],e[1],s)&&(r=1);++n<r;)for(var l=e[n],f=u(l),d=-1,h=f.length;++d<h;){var p=f[d],v=t[p];(void 0===v||i(v,a[p])&&!c.call(t,p))&&(t[p]=l[p])}return t});t.exports=s},function(t,e,n){var r=n(6),i=n(3),o=n(18),u=n(12),a=function(t,e,n){var c,s,l,f=t&a.F,d=t&a.G,h=t&a.S,p=t&a.P,v=t&a.B,m=t&a.W,g=d?i:i[e]||(i[e]={}),_=g.prototype,y=d?r:h?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(s=!f&&y&&void 0!==y[c])&&c in g||(l=s?y[c]:n[c],g[c]=d&&"function"!=typeof y[c]?n[c]:v&&s?o(l,r):m&&y[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):p&&"function"==typeof l?o(Function.call,l):l,p&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&_&&!_[c]&&u(_,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(16),i=n(53);t.exports=n(13)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e){function n(t){return null==t}t.exports=n},function(t,e,n){var r=n(9),i=n(118),o=n(119),u=Object.defineProperty;e.f=n(13)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){function r(t,e){return(a(t)?i:o)(t,u(e))}var i=n(65),o=n(143),u=n(149),a=n(2);t.exports=r},function(t,e,n){var r=n(25),i=r(Object.keys,Object);t.exports=i},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){var r=n(156),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"createDefaultObject",function(){return g}),n.d(e,"getMultipleFields",function(){return _}),n.d(e,"mergeMultiObjectFields",function(){return y}),n.d(e,"slugifyFormID",function(){return b}),n.d(e,"slugify",function(){return x});var r=n(164),i=n.n(r),o=n(5),u=n.n(o),a=n(2),c=n.n(a),s=n(7),l=n.n(s),f=n(190),d=n.n(f),h=n(191),p=n.n(h),v=n(8),m=n.n(v),g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d()(t.fields,function(n){void 0===m()(e,n.model)&&void 0!==n.default&&(u()(n.default)?p()(e,n.model,n.default(n,t,e)):l()(n.default)||c()(n.default)?p()(e,n.model,i()(n.default)):p()(e,n.model,n.default))}),e},_=function(t){var e=[];return d()(t.fields,function(t){!0===t.multi&&e.push(t)}),e},y=function(t,e){var n={},r=_(t);return d()(r,function(t){var r=void 0,i=!0,o=t.model;d()(e,function(t){var e=m()(t,o);i?(r=e,i=!1):r!==e&&(r=void 0)}),p()(n,o,r)}),n},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return void 0!==t.id?e+t.id:e+(t.inputName||t.label||t.model||"").toString().trim().toLowerCase().replace(/ |_/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/([^a-zA-Z0-9-]+)/g,"")},x=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().trim().replace(/ /g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/([^a-zA-Z0-9-_\/.\/:]+)/g,"")}},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(i(t[n][0],e))return n;return-1}var i=n(46);t.exports=r},function(t,e,n){function r(t,e,n,r){var u=!n;n||(n={});for(var a=-1,c=e.length;++a<c;){var s=e[a],l=r?r(n[s],t[s],s,n,t):void 0;void 0===l&&(l=t[s]),u?o(n,s,l):i(n,s,l)}return n}var i=n(47),o=n(74);t.exports=r},function(t,e,n){"use strict";var r=n(117)(!0);n(51)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(17),i=n(6).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(124),i=n(58);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(54),i=n(33);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(56)("keys"),i=n(57);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(16).f,i=n(21),o=n(4)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(33);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(128);for(var r=n(6),i=n(12),o=n(14),u=n(4)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var s=a[c],l=r[s],f=l&&l.prototype;f&&!f[u]&&i(f,u,s),o[s]=o.Array}},function(t,e,n){var r=n(22),i=n(4)("toStringTag"),o="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=i(e),this.reject=i(n)}var i=n(19);t.exports.f=function(t){return new r(t)}},function(t,e){function n(t){return i.call(t)}var r=Object.prototype,i=r.toString;t.exports=n},function(t,e,n){function r(t){return null!=t&&o(t.length)&&!i(t)}var i=n(5),o=n(148);t.exports=r},function(t,e,n){function r(t){return"string"==typeof t||!o(t)&&u(t)&&i(t)==a}var i=n(43),o=n(2),u=n(71),a="[object String]";t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t,e,n){var r=t[e];a.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||i(t,e,n)}var i=n(74),o=n(46),u=Object.prototype,a=u.hasOwnProperty;t.exports=r},function(t,e,n){var r;!function(i){"use strict";function o(t,e){for(var n=[],r=0,i=t.length;r<i;r++)n.push(t[r].substr(0,e));return n}function u(t){return function(e,n,r){var i=r[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~i&&(e.month=i)}}function a(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var c={},s=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,l=/\d\d?/,f=/\d{3}/,d=/\d{4}/,h=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,p=/\[([^]*?)\]/gm,v=function(){},m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=["January","February","March","April","May","June","July","August","September","October","November","December"],_=o(g,3),y=o(m,3);c.i18n={dayNamesShort:y,dayNames:m,monthNamesShort:_,monthNames:g,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var b={D:function(t){return t.getDate()},DD:function(t){return a(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return a(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return a(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return String(t.getFullYear()).substr(2)},YYYY:function(t){return a(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return a(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return a(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return a(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return a(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return a(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return a(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+a(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},x={D:[l,function(t,e){t.day=e}],Do:[new RegExp(l.source+h.source),function(t,e){t.day=parseInt(e,10)}],M:[l,function(t,e){t.month=e-1}],YY:[l,function(t,e){var n=new Date,r=+(""+n.getFullYear()).substr(0,2);t.year=""+(e>68?r-1:r)+e}],h:[l,function(t,e){t.hour=e}],m:[l,function(t,e){t.minute=e}],s:[l,function(t,e){t.second=e}],YYYY:[d,function(t,e){t.year=e}],S:[/\d/,function(t,e){t.millisecond=100*e}],SS:[/\d{2}/,function(t,e){t.millisecond=10*e}],SSS:[f,function(t,e){t.millisecond=e}],d:[l,v],ddd:[h,v],MMM:[h,u("monthNamesShort")],MMMM:[h,u("monthNames")],a:[h,function(t,e,n){var r=e.toLowerCase();r===n.amPm[0]?t.isPm=!1:r===n.amPm[1]&&(t.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(t,e){"Z"===e&&(e="+00:00");var n,r=(e+"").match(/([\+\-]|\d\d)/gi);r&&(n=60*r[1]+parseInt(r[2],10),t.timezoneOffset="+"===r[0]?n:-n)}]};x.dd=x.d,x.dddd=x.ddd,x.DD=x.D,x.mm=x.m,x.hh=x.H=x.HH=x.h,x.MM=x.M,x.ss=x.s,x.A=x.a,c.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},c.format=function(t,e,n){var r=n||c.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=c.masks[e]||e||c.masks.default;var i=[];return e=e.replace(p,function(t,e){return i.push(e),"??"}),e=e.replace(s,function(e){return e in b?b[e](t,r):e.slice(1,e.length-1)}),e.replace(/\?\?/g,function(){return i.shift()})},c.parse=function(t,e,n){var r=n||c.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=c.masks[e]||e,t.length>1e3)return!1;var i=!0,o={};if(e.replace(s,function(e){if(x[e]){var n=x[e],u=t.search(n[0]);~u?t.replace(n[0],function(e){return n[1](o,e,r),t=t.substr(u+e.length),e}):i=!1}return x[e]?"":e.slice(1,e.length-1)}),!i)return!1;var u=new Date;!0===o.isPm&&null!=o.hour&&12!=+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12==+o.hour&&(o.hour=0);var a;return null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,a=new Date(Date.UTC(o.year||u.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):a=new Date(o.year||u.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),a},void 0!==t&&t.exports?t.exports=c:void 0!==(r=function(){return c}.call(e,n,e,t))&&(t.exports=r)}()},function(t,e,n){"use strict";var r=n(50),i=n.n(r),o=n(2),u=n.n(o),a=n(15),c=n.n(a),s=n(5),l=n.n(s),f=n(23),d=n.n(f),h=n(8),p=n.n(h),v=n(70),m=n(162);e.a={name:"formGenerator",components:{formGroup:m.a},mixins:[v.a],props:{schema:Object,model:Object,options:{type:Object,default:function(){return{validateAfterLoad:!1,validateAsync:!1,validateAfterChanged:!1,validationErrorClass:"error",validationSuccessClass:""}}},multiple:{type:Boolean,default:!1},isNewModel:{type:Boolean,default:!1},tag:{type:String,default:"fieldset",validator:function(t){return t.length>0}}},data:function(){return{vfg:this,errors:[]}},computed:{fields:function(){var t=this,e=[];return this.schema&&this.schema.fields&&d()(this.schema.fields,function(n){t.multiple&&!0!==n.multi||e.push(n)}),e},groups:function(){var t=[];return this.schema&&this.schema.groups&&d()(this.schema.groups.slice(0),function(e){t.push(e)}),t}},watch:{model:function(t,e){var n=this;e!==t&&null!=t&&this.$nextTick(function(){!0===n.options.validateAfterLoad&&!0!==n.isNewModel?n.validate():n.clearValidationErrors()})}},mounted:function(){var t=this;this.$nextTick(function(){t.model&&(!0===t.options.validateAfterLoad&&!0!==t.isNewModel?t.validate():t.clearValidationErrors())})},methods:{fieldVisible:function(t){return l()(t.visible)?t.visible.call(this,this.model,t,this):!!c()(t.visible)||t.visible},onFieldValidated:function(t,e,n){var r=this;this.errors=this.errors.filter(function(t){return t.field!==n.schema}),!t&&e&&e.length>0&&d()(e,function(t){r.errors.push({field:n.schema,error:t})});var i=0===this.errors.length;this.$emit("validated",i,this.errors,this)},onModelUpdated:function(t,e){this.$emit("model-updated",t,e)},validate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e&&(e=p()(this.options,"validateAsync",!1)),this.clearValidationErrors();var n=[],r=[];d()(this.$children,function(t){l()(t.validate)&&(n.push(t.$refs.child),r.push(t.validate(!0)))});var o=function(r){var i=[];d()(r,function(t,e){u()(t)&&t.length>0&&d()(t,function(t){i.push({field:n[e].schema,error:t})})}),t.errors=i;var o=0===i.length;return t.$emit("validated",o,i,t),e?i:o};return e?i.a.all(r).then(o):o(r)},clearValidationErrors:function(){this.errors.splice(0),d()(this.$children,function(t){t.clearValidationErrors()})}}}},function(t,e,n){t.exports={default:n(115),__esModule:!0}},function(t,e,n){"use strict";var r=n(52),i=n(11),o=n(120),u=n(12),a=n(21),c=n(14),s=n(121),l=n(38),f=n(127),d=n(4)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,m,g,_){s(n,e,v);var y,b,x,w=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",j="values"==m,k=!1,S=t.prototype,C=S[d]||S["@@iterator"]||m&&S[m],M=C||w(m),T=m?j?w("entries"):M:void 0,I="Array"==e?S.entries||C:C;if(I&&(x=f(I.call(new t)))!==Object.prototype&&x.next&&(l(x,O,!0),r||a(x,d)||u(x,d,p)),j&&C&&"values"!==C.name&&(k=!0,M=function(){return C.call(this)}),r&&!_||!h&&!k&&S[d]||u(S,d,M),c[e]=M,c[O]=p,m)if(y={values:j?M:w("values"),keys:g?M:w("keys"),entries:T},_)for(b in y)b in S||o(S,b,y[b]);else i(i.P+i.F*(h||k),e,y);return y}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(32),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(6),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(6).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(41),i=n(4)("iterator"),o=n(14);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(9),i=n(19),o=n(4)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[o])?e:i(n)}},function(t,e,n){var r,i,o,u=n(18),a=n(136),c=n(59),s=n(34),l=n(6),f=l.process,d=l.setImmediate,h=l.clearImmediate,p=l.MessageChannel,v=l.Dispatch,m=0,g={},_=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},y=function(t){_.call(t.data)};d&&h||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},h=function(t){delete g[t]},"process"==n(22)(f)?r=function(t){f.nextTick(u(_,t,1))}:v&&v.now?r=function(t){v.now(u(_,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=y,r=u(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",y,!1)):r="onreadystatechange"in s("script")?function(t){c.appendChild(s("script")).onreadystatechange=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:d,clear:h}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(9),i=n(17),o=n(42);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}t.exports=n},function(t,e,n){function r(t,e){return i(t)?t:o(t,e)?[t]:u(a(t))}var i=n(2),o=n(151),u=n(152),a=n(67);t.exports=r},function(t,e,n){function r(t){return null==t?"":i(t)}var i=n(154);t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){function r(t){if("string"==typeof t||i(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}var i=n(26),o=1/0;t.exports=r},function(t,e,n){"use strict";var r=n(158),i=n.n(r),o=n(5),u=n.n(o),a=n(45),c=n.n(a),s=n(2),l=n.n(s),f=n(15),d=n.n(f),h=n(23),p=n.n(h),v=n(8),m=n.n(v);e.a={methods:{getFieldRowClasses:function(t){var e,n=this.fieldErrors(t).length>0,r=(e={},i()(e,m()(this.options,"validationErrorClass","error"),n),i()(e,m()(this.options,"validationSuccessClass","valid"),!n),i()(e,"disabled",this.fieldDisabled(t)),i()(e,"readonly",this.fieldReadonly(t)),i()(e,"featured",this.fieldFeatured(t)),i()(e,"required",this.fieldRequired(t)),e);return l()(t.styleClasses)?p()(t.styleClasses,function(t){return r[t]=!0}):c()(t.styleClasses)&&(r[t.styleClasses]=!0),d()(t.type)||(r["field-"+t.type]=!0),r},fieldErrors:function(t){return this.errors.filter(function(e){return e.field===t}).map(function(t){return t.error})},fieldDisabled:function(t){return u()(t.disabled)?t.disabled.call(this,this.model,t,this):!d()(t.disabled)&&t.disabled},fieldReadonly:function(t){return u()(t.readonly)?t.readonly.call(this,this.model,t,this):!d()(t.readonly)&&t.readonly},fieldFeatured:function(t){return u()(t.featured)?t.featured.call(this,this.model,t,this):!d()(t.featured)&&t.featured},fieldRequired:function(t){return u()(t.required)?t.required.call(this,this.model,t,this):!d()(t.required)&&t.required}}}},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(15),u=n.n(o),a=n(8),c=n.n(a),s=n(28),l=n(70),f=n(80),d=n.n(f);e.a={name:"form-group",components:d.a,mixins:[l.a],props:{vfg:{type:Object,required:!0},model:Object,options:{type:Object},field:{type:Object,required:!0},errors:{type:Array,default:function(){return[]}}},methods:{fieldTypeHasLabel:function(t){if(u()(t.label))return!1;switch("input"===t.type?t.inputType:t.type){case"button":case"submit":case"reset":return!1;default:return!0}},getFieldID:function(t){var e=c()(this.options,"fieldIdPrefix","");return Object(s.slugifyFormID)(t,e)},getFieldType:function(t){return"field-"+t.type},getButtonType:function(t){return c()(t,"type","button")},onFieldValidated:function(t,e,n){this.$emit("validated",t,e,n)},buttonVisibility:function(t){return t.buttons&&t.buttons.length>0},buttonClickHandler:function(t,e,n){return t.onclick.call(this,this.model,e,n,this)},fieldHint:function(t){return i()(t.hint)?t.hint.call(this,this.model,t,this):t.hint},fieldErrors:function(t){return this.errors.filter(function(e){return e.field===t}).map(function(t){return t.error})},onModelUpdated:function(t,e){this.$emit("model-updated",t,e)},validate:function(t){return this.$refs.child.validate(t)},clearValidationErrors:function(){if(this.$refs.child)return this.$refs.child.clearValidationErrors()}}}},function(t,e,n){function r(t,e,n,E,$,F){var D,N=e&k,L=e&S,R=e&C;if(n&&(D=$?n(t,E,$,F):n(t)),void 0!==D)return D;if(!w(t))return t;var V=y(t);if(V){if(D=m(t),!N)return l(t,D)}else{var z=v(t),U=z==T||z==I;if(b(t))return s(t,N);if(z==P||z==M||U&&!$){if(D=L||U?{}:_(t),!N)return L?d(t,c(D,t)):f(t,a(D,t))}else{if(!A[z])return $?t:{};D=g(t,z,N)}}F||(F=new i);var Y=F.get(t);if(Y)return Y;if(F.set(t,D),O(t))return t.forEach(function(i){D.add(r(i,e,n,i,t,F))}),D;if(x(t))return t.forEach(function(i,o){D.set(o,r(i,e,n,o,t,F))}),D;var q=R?L?p:h:L?keysIn:j,B=V?void 0:q(t);return o(B||t,function(i,o){B&&(o=i,i=t[o]),u(D,o,r(i,e,n,o,t,F))}),D}var i=n(165),o=n(65),u=n(47),a=n(173),c=n(174),s=n(175),l=n(176),f=n(177),d=n(179),h=n(181),p=n(182),v=n(77),m=n(183),g=n(184),_=n(185),y=n(2),b=n(79),x=n(188),w=n(7),O=n(189),j=n(24),k=1,S=2,C=4,M="[object Arguments]",T="[object Function]",I="[object GeneratorFunction]",P="[object Object]",A={};A[M]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A[P]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Error]"]=A[T]=A["[object WeakMap]"]=!1,t.exports=r},function(t,e,n){function r(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var i=n(171);t.exports=r},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){function n(t){return i.call(t)}var r=Object.prototype,i=r.toString;t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){var r=n(194).forEach,i={},o=n(195);r(o.keys(),function(t){var e=t.replace(/^\.\//,"").replace(/\.vue/,"");i[e]=o(t).default});var u=n(247);r(u.keys(),function(t){var e=t.replace(/^\.\//,"").replace(/\.vue/,"");i[e]=u(t).default}),t.exports=i},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default]}},function(t,e,n){function r(t,e,n){function r(e){var n=_,r=y;return _=y=void 0,j=e,x=t.apply(r,n)}function l(t){return j=t,w=setTimeout(h,e),k?r(t):x}function f(t){var n=t-O,r=t-j,i=e-n;return S?s(i,b-r):i}function d(t){var n=t-O,r=t-j;return void 0===O||n>=e||n<0||S&&r>=b}function h(){var t=o();if(d(t))return p(t);w=setTimeout(h,f(t))}function p(t){return w=void 0,C&&_?r(t):(_=y=void 0,x)}function v(){void 0!==w&&clearTimeout(w),j=0,_=O=y=w=void 0}function m(){return void 0===w?x:p(o())}function g(){var t=o(),n=d(t);if(_=arguments,y=this,O=t,n){if(void 0===w)return l(O);if(S)return w=setTimeout(h,e),r(O)}return void 0===w&&(w=setTimeout(h,e)),x}var _,y,b,x,w,O,j=0,k=!1,S=!1,C=!0;if("function"!=typeof t)throw new TypeError(a);return e=u(e)||0,i(n)&&(k=!!n.leading,S="maxWait"in n,b=S?c(u(n.maxWait)||0,e):b,C="trailing"in n?!!n.trailing:C),g.cancel=v,g.flush=m,g}var i=n(7),o=n(199),u=n(83),a="Expected a function",c=Math.max,s=Math.min;t.exports=r},function(t,e,n){function r(t){if("number"==typeof t)return t;if(o(t))return u;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):c.test(t)?u:+t}var i=n(7),o=n(26),u=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return b()(t)||""===t?e?[i(n.fieldIsRequired)]:[]:null}function i(t){if(null!=t&&arguments.length>1)for(var e=1;e<arguments.length;e++)t=t.replace("{"+(e-1)+"}",arguments[e]);return t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(200),u=n.n(o),a=n(204),c=n.n(a),s=n(5),l=n.n(s),f=n(2),d=n.n(f),h=n(45),p=n.n(h),v=n(205),m=n.n(v),g=n(86),_=n.n(g),y=n(15),b=n.n(y),x=n(10),w=n.n(x),O=n(48),j=n.n(O),k={fieldIsRequired:"This field is required!",invalidFormat:"Invalid format!",numberTooSmall:"The number is too small! Minimum: {0}",numberTooBig:"The number is too big! Maximum: {0}",invalidNumber:"Invalid number",invalidInteger:"The value is not an integer",textTooSmall:"The length of text is too small! Current: {0}, Minimum: {1}",textTooBig:"The length of text is too big! Current: {0}, Maximum: {1}",thisNotText:"This is not a text!",thisNotArray:"This is not an array!",selectMinItems:"Select minimum {0} items!",selectMaxItems:"Select maximum {0} items!",invalidDate:"Invalid date!",dateIsEarly:"The date is too early! Current: {0}, Minimum: {1}",dateIsLate:"The date is too late! Current: {0}, Maximum: {1}",invalidEmail:"Invalid e-mail address!",invalidURL:"Invalid URL!",invalidCard:"Invalid card format!",invalidCardNumber:"Invalid card number!",invalidTextContainNumber:"Invalid text! Cannot contains numbers or special characters",invalidTextContainSpec:"Invalid text! Cannot contains special characters"},S={resources:k,required:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k;return r(t,e.required,i)},number:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;var a=[];return c()(t)?(!b()(e.min)&&t<e.min&&a.push(i(o.numberTooSmall,e.min)),!b()(e.max)&&t>e.max&&a.push(i(o.numberTooBig,e.max))):a.push(i(o.invalidNumber)),a},integer:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;var a=S.number(t,e,n,o);return m()(t)||a.push(i(o.invalidInteger)),a},double:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);return null!=u?u:!_()(t)||isNaN(t)?[i(o.invalidNumber)]:void 0},string:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;var a=[];return p()(t)?(!b()(e.min)&&t.length<e.min&&a.push(i(o.textTooSmall,t.length,e.min)),!b()(e.max)&&t.length>e.max&&a.push(i(o.textTooBig,t.length,e.max))):a.push(i(o.thisNotText)),a},array:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k;if(e.required){if(!d()(t))return[i(r.thisNotArray)];if(0===t.length)return[i(r.fieldIsRequired)]}if(!b()(t)){if(!b()(e.min)&&t.length<e.min)return[i(r.selectMinItems,e.min)];if(!b()(e.max)&&t.length>e.max)return[i(r.selectMaxItems,e.max)]}},date:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;var a=new Date(t);if(!a)return[i(o.invalidDate)];var c=[];if(!b()(e.min)){var s=new Date(e.min);a.valueOf()<s.valueOf()&&c.push(i(o.dateIsEarly,j.a.format(a),j.a.format(s)))}if(!b()(e.max)){var l=new Date(e.max);a.valueOf()>l.valueOf()&&c.push(i(o.dateIsLate,j.a.format(a),j.a.format(l)))}return c},regexp:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;if(!b()(e.pattern)){if(!new RegExp(e.pattern).test(t))return[i(o.invalidFormat)]}},email:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);return null!=u?u:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?void 0:[i(o.invalidEmail)]},url:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);return null!=u?u:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g.test(t)?void 0:[i(o.invalidURL)]},creditCard:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);if(null!=u)return u;var a=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,c=t.replace(/[^0-9]+/g,"");if(!a.test(c))return[i(o.invalidCard)];for(var s=0,l=void 0,f=void 0,d=void 0,h=c.length-1;h>=0;h--)l=c.substring(h,h+1),f=parseInt(l,10),d?(f*=2,s+=f>=10?f%10+1:f):s+=f,d=!d;return s%10==0&&c?void 0:[i(o.invalidCardNumber)]},alpha:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);return null!=u?u:/^[a-zA-Z]*$/.test(t)?void 0:[i(o.invalidTextContainNumber)]},alphaNumeric:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,u=r(t,e.required,o);return null!=u?u:/^[a-zA-Z0-9]*$/.test(t)?void 0:[i(o.invalidTextContainSpec)]}};u()(S).forEach(function(t){var e=S[t];l()(e)&&(e.locale=function(t){return function(n,r,i){return e(n,r,i,w()(t,k))}})}),e.default=S},function(t,e,n){function r(t){var e=i(t),n=e%1;return e===e?n?e-n:e:0}var i=n(206);t.exports=r},function(t,e,n){function r(t){return"number"==typeof t||o(t)&&i(t)==u}var i=n(43),o=n(71),u="[object Number]";t.exports=r},function(t,e,n){"use strict";var r=n(216),i=n.n(r),o=n(15),u=n.n(o),a=n(7),c=n.n(a),s=n(1),l=n(28);e.a={mixins:[s.default],data:function(){return{comboExpanded:!1}},computed:{items:function(){var t=this.schema.values;return"function"==typeof t?t.apply(this,[this.model,this.schema]):t},selectedCount:function(){return this.value?this.value.length:0}},methods:{getInputName:function(t){return this.schema&&this.schema.inputName&&this.schema.inputName.length>0?Object(l.slugify)(this.schema.inputName+"_"+this.getItemValue(t)):Object(l.slugify)(this.getItemValue(t))},getItemValue:function(t){if(c()(t)){if(void 0!==this.schema.checklistOptions&&void 0!==this.schema.checklistOptions.value)return t[this.schema.checklistOptions.value];if(void 0!==t.value)return t.value;throw"`value` is not defined. If you want to use another key name, add a `value` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values"}return t},getItemName:function(t){if(c()(t)){if(void 0!==this.schema.checklistOptions&&void 0!==this.schema.checklistOptions.name)return t[this.schema.checklistOptions.name];if(void 0!==t.name)return t.name;throw"`name` is not defined. If you want to use another key name, add a `name` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values"}return t},isItemChecked:function(t){return this.value&&-1!==this.value.indexOf(this.getItemValue(t))},onChanged:function(t,e){if(!u()(this.value)&&Array.isArray(this.value)||(this.value=[]),t.target.checked){var n=i()(this.value);n.push(this.getItemValue(e)),this.value=n}else{var r=i()(this.value);r.splice(this.value.indexOf(this.getItemValue(e)),1),this.value=r}},onExpandCombo:function(){this.comboExpanded=!this.comboExpanded}}}},function(t,e,n){"use strict";var r=n(86),i=n.n(r),o=n(5),u=n.n(o),a=n(8),c=n.n(a),s=n(82),l=n.n(s),f=n(1),d=n(48),h=n.n(d),p={date:"YYYY-MM-DD",datetime:"YYYY-MM-DD HH:mm:ss","datetime-local":"YYYY-MM-DDTHH:mm:ss"};e.a={mixins:[f.default],computed:{inputType:function(){return this.schema&&"datetime"===this.schema.inputType?"datetime-local":this.schema.inputType}},methods:{formatValueToModel:function(t){var e=this;if(null!=t)switch(this.schema.inputType.toLowerCase()){case"date":case"datetime":case"datetime-local":case"number":case"range":return function(n,r){e.debouncedFormatFunc(t,r)}}return t},formatValueToField:function(t){switch(this.schema.inputType.toLowerCase()){case"date":case"datetime":case"datetime-local":return this.formatDatetimeValueToField(t)}return t},formatDatetimeToModel:function(t,e){var n=p[this.schema.inputType.toLowerCase()],r=h.a.parse(t,n);!1!==r&&(t=this.schema.format?h.a.format(r,this.schema.format):r.valueOf()),this.updateModelValue(t,e)},formatDatetimeValueToField:function(t){if(null===t||void 0===t)return null;var e=p[this.schema.inputType.toLowerCase()],n=t;return i()(t)||(n=h.a.parse(t,e)),!1!==n?h.a.format(n,e):t},formatNumberToModel:function(t,e){i()(t)||(t=NaN),this.updateModelValue(t,e)},onInput:function(t){var e=t.target.value;switch(this.schema.inputType.toLowerCase()){case"number":case"range":i()(parseFloat(t.target.value))&&(e=parseFloat(t.target.value))}this.value=e},onBlur:function(){u()(this.debouncedFormatFunc)&&this.debouncedFormatFunc.flush()}},mounted:function(){var t=this;switch(this.schema.inputType.toLowerCase()){case"number":case"range":this.debouncedFormatFunc=l()(function(e,n){t.formatNumberToModel(e,n)},parseInt(c()(this.schema,"debounceFormatTimeout",1e3)),{trailing:!0,leading:!1});break;case"date":case"datetime":case"datetime-local":this.debouncedFormatFunc=l()(function(e,n){t.formatDatetimeToModel(e,n)},parseInt(c()(this.schema,"debounceFormatTimeout",1e3)),{trailing:!0,leading:!1})}},created:function(){"file"===this.schema.inputType.toLowerCase()&&console.warn("The 'file' type in input field is deprecated. Use 'file' field instead.")}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default]}},function(t,e,n){"use strict";var r=n(8),i=n.n(r),o=n(5),u=n.n(o),a=n(7),c=n.n(a),s=n(1);e.a={mixins:[s.default],computed:{items:function(){var t=this.schema.values;return"function"==typeof t?t.apply(this,[this.model,this.schema]):t},id:function(){return this.schema.model}},methods:{getItemValue:function(t){if(c()(t)){if(void 0!==this.schema.radiosOptions&&void 0!==this.schema.radiosOptions.value)return t[this.schema.radiosOptions.value];if(void 0!==t.value)return t.value;throw"`value` is not defined. If you want to use another key name, add a `value` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values"}return t},getItemName:function(t){if(c()(t)){if(void 0!==this.schema.radiosOptions&&void 0!==this.schema.radiosOptions.name)return t[this.schema.radiosOptions.name];if(void 0!==t.name)return t.name;throw"`name` is not defined. If you want to use another key name, add a `name` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values"}return t},onSelection:function(t){this.value=this.getItemValue(t)},isItemChecked:function(t){return this.getItemValue(t)===this.value},isItemDisabled:function(t){if(this.disabled)return!0;var e=i()(t,"disabled",!1);return u()(e)?e(this.model):e}}}},function(t,e,n){"use strict";var r=n(229),i=n.n(r),o=n(15),u=n.n(o),a=n(7),c=n.n(a),s=n(1);e.a={mixins:[s.default],computed:{selectOptions:function(){return this.schema.selectOptions||{}},items:function(){var t=this.schema.values;return"function"==typeof t?this.groupValues(t.apply(this,[this.model,this.schema])):this.groupValues(t)}},methods:{formatValueToField:function(t){return u()(t)?null:t},groupValues:function(t){var e=[],n={};return t.forEach(function(t){n=null,t.group&&c()(t)?(n=i()(e,function(e){return e.group===t.group}),n?n.ops.push({id:t.id,name:t.name}):(n={group:"",ops:[]},n.group=t.group,n.ops.push({id:t.id,name:t.name}),e.push(n))):e.push(t)}),e},getGroupName:function(t){if(t&&t.group)return t.group;throw"Group name is missing! https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items"},getItemValue:function(t){if(c()(t)){if(void 0!==this.schema.selectOptions&&void 0!==this.schema.selectOptions.value)return t[this.schema.selectOptions.value];if(void 0!==t.id)return t.id;throw"`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items"}return t},getItemName:function(t){if(c()(t)){if(void 0!==this.schema.selectOptions&&void 0!==this.schema.selectOptions.name)return t[this.schema.selectOptions.name];if(void 0!==t.name)return t.name;throw"`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items"}return t}}}},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){"use strict";var r=n(236),i=n.n(r),o=n(5),u=n.n(o),a=n(8),c=n.n(a),s=n(1);e.a={mixins:[s.default],methods:{onClick:function(t){var e=this;if(!0===this.schema.validateBeforeSubmit){t.preventDefault();var n=c()(this.formOptions,"validateAsync",!1),r=this.vfg.validate(),o=function(r){n&&!i()(r)||!n&&!r?u()(e.schema.onValidationError)&&e.schema.onValidationError(e.model,e.schema,r,t):u()(e.schema.onSubmit)&&e.schema.onSubmit(e.model,e.schema,t)};r&&u()(r.then)?r.then(o):o(r)}else u()(this.schema.onSubmit)&&this.schema.onSubmit(this.model,this.schema,t)}}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default]}},function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(1);e.a={mixins:[o.default],methods:{onChange:function(t){i()(this.schema.onChanged)&&this.schema.onChanged.call(this,this.model,this.schema,t,this)}}}},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(1);e.a={mixins:[o.default],data:function(){return{cleave:null}},mounted:function(){this.$nextTick(function(){var t=this;window.Cleave?(this.cleave=new window.Cleave(this.$el,i()(this.schema.cleaveOptions||{},{creditCard:!1,phone:!1,phoneRegionCode:"AU",date:!1,datePattern:["d","m","Y"],numeral:!1,numeralThousandsGroupStyle:"thousand",numeralDecimalScale:2,numeralDecimalMark:".",blocks:[],delimiter:" ",prefix:null,numericOnly:!1,uppercase:!1,lowercase:!1,maxLength:0})),this.cleave.properties&&this.cleave.properties.hasOwnProperty("result")?this.$watch("cleave.properties.result",function(){t.value=t.cleave.properties.result}):this.$el.addEventListener("input",this.inputChange)):console.warn("Cleave is missing. Please download from https://github.com/nosir/cleave.js/ and load the script in the HTML head section!")})},methods:{inputChange:function(){this.value=this.$el.value}},beforeDestroy:function(){this.cleave&&(this.cleave.destroy(),this.$el.removeEventListener("input",this.inputChange))}}},function(t,e,n){"use strict";var r=n(98),i=n.n(r),o=n(10),u=n.n(o),a=n(1),c=n(99);e.a={mixins:[a.default],methods:i()({getDateFormat:function(){return this.schema.dateTimePickerOptions&&this.schema.dateTimePickerOptions.format?this.schema.dateTimePickerOptions.format:"YYYY-MM-DD HH:mm:ss"}},c.a),mounted:function(){this.$nextTick(function(){var t=this;if(window.$&&window.$.fn.datetimepicker){var e=this.$el.querySelector(".form-control");$(this.$el).datetimepicker(u()(this.schema.dateTimePickerOptions||{},{format:"YYYY-MM-DD HH:mm:ss"})).on("dp.change",function(){t.value=e.value})}else console.warn("Bootstrap datetimepicker library is missing. Please download from https://eonasdan.github.io/bootstrap-datetimepicker/ and load the script and CSS in the HTML head section!")})},beforeDestroy:function(){window.$&&window.$.fn.datetimepicker&&$(this.$el).data("DateTimePicker").destroy()}}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(253),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";var r=n(48),i=n.n(r);e.a={formatValueToField:function(t){if(null!=t){var e=this.schema.format?i.a.parse(t,this.schema.format):new Date(t);return i.a.format(e,this.getDateFormat())}return t},formatValueToModel:function(t){if(null!=t){var e=i.a.parse(t,this.getDateFormat());t=this.schema.format?i.a.format(e,this.schema.format):e.valueOf()}return t}}},function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(1);e.a={mixins:[o.default],data:function(){return{autocomplete:"",inputs:{street_number:"long_name",route:"long_name",country:"long_name",administrative_area_level_1:"long_name",administrative_area_level_2:"long_name",locality:"long_name",postal_code:"short_name"}}},mounted:function(){var t=this;this.$nextTick(function(){window.google&&window.google.maps&&window.google.maps.places&&window.google.maps.places.Autocomplete?(t.autocomplete=new google.maps.places.Autocomplete(t.$el,{types:["geocode"]}),t.autocomplete.addListener("place_changed",t.pipeAddress)):console.warn("Google Maps API is missing. Please add https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places script in the HTML head section!")})},methods:{pipeAddress:function(){var t=this.autocomplete.getPlace();if(t){this.value=t.formatted_address;var e={};if(void 0!==t.address_components)for(var n=0;n<t.address_components.length;n++){var r=t.address_components[n].types[0];this.inputs[r]&&(e[r]=t.address_components[n][this.inputs[r]])}i()(this.schema.onPlaceChanged)&&this.schema.onPlaceChanged(this.value,e,t,this.model,this.schema)}},geolocate:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude},r=new window.google.maps.Circle({center:n,radius:e.coords.accuracy});t.autocomplete.setBounds(r.getBounds())})}}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default],computed:{previewStyle:function(){return!1!==this.schema.preview?{display:"block","background-image":null!=this.value?"url("+this.value+")":"none"}:{display:"none"}},wrappedValue:{get:function(){return this.value&&0===this.value.indexOf("data")?"<inline base64 image>":this.value},set:function(t){t&&0===t.indexOf("http")&&(this.value=t)}}},watch:{model:function(){var t=this.$el.querySelector("input.file");t&&(t.value="")}},methods:{remove:function(){this.value=""},fileChanged:function(t){var e=this,n=new FileReader;n.onload=function(t){e.value=t.target.result},t.target.files&&t.target.files.length>0&&n.readAsDataURL(t.target.files[0])}}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default],mounted:function(){this.$nextTick(function(){window.$&&window.$.fn.mask?$(this.$el).unmask().mask(this.schema.mask,this.schema.maskOptions):console.warn("JQuery MaskedInput library is missing. Please download from https://github.com/digitalBush/jquery.maskedinput and load the script in the HTML head section!")})},beforeDestroy:function(){window.$&&window.$.fn.mask&&$(this.$el).unmask()}}},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(2),u=n.n(o),a=n(1);e.a={mixins:[a.default],data:function(){return{slider:null}},watch:{model:function(){window.noUiSlider&&this.slider&&this.slider.noUiSlider&&this.slider.noUiSlider.set(this.value)}},computed:{containPips:function(){return this.schema.noUiSliderOptions&&void 0!==this.schema.noUiSliderOptions.pips},containTooltip:function(){return this.schema.noUiSliderOptions&&this.schema.noUiSliderOptions.tooltips}},methods:{onChange:function(t){u()(t)?this.value=[parseFloat(t[0]),parseFloat(t[1])]:this.value=parseFloat(t)},formatValueToField:function(t){null!==this.slider&&void 0!==this.slider.noUiSlider&&this.slider.noUiSlider.set(t)},formatValueToModel:function(t){if(void 0!==this.slider.noUiSlider)return t instanceof Array?[Number(t[0]),Number(t[1])]:Number(t)},getStartValue:function(){return null!=this.value?this.value:void 0!==this.schema.noUiSliderOptions&&this.schema.noUiSliderOptions.double?[this.schema.min,this.schema.min]:this.schema.min}},mounted:function(){var t=this;this.$nextTick(function(){window.noUiSlider?(t.slider=t.$el,window.noUiSlider.create(t.slider,i()(t.schema.noUiSliderOptions||{},{start:t.getStartValue(),range:{min:t.schema.min,max:t.schema.max}})),t.slider.noUiSlider.on("change",t.onChange.bind(t))):console.warn("noUiSlider is missing. Please download from https://github.com/leongersen/noUiSlider and load the script and CSS in the HTML head section!")})},beforeDestroy:function(){this.slider&&this.slider.noUiSlider.off("change")}}},function(t,e,n){"use strict";var r=n(98),i=n.n(r),o=n(8),u=n.n(o),a=n(10),c=n.n(a),s=n(1),l=n(99);e.a={mixins:[s.default],data:function(){return{picker:null,options:null}},methods:i()({getDateFormat:function(){return u()(this.schema,"pikadayOptions.format","YYYY-MM-DD")}},l.a,{initialize:function(t){var e=this;this.picker&&this.picker.destroy&&this.picker.destroy(),this.$nextTick(function(){window.Pikaday?(e.options=c()({},t,{field:e.$el,onSelect:function(){e.value=e.picker.toString()}}),e.picker=new window.Pikaday(e.options)):console.warn("Pikaday is missing. Please download from https://github.com/dbushell/Pikaday/ and load the script and CSS in the HTML head section!")})}}),mounted:function(){this.initialize(u()(this.schema,"pikadayOptions",{}))},beforeDestroy:function(){this.picker&&this.picker.destroy()}}},function(t,e,n){"use strict";var r=n(276),i=n.n(r),o=n(2),u=n.n(o),a=n(10),c=n.n(a),s=n(1);e.a={mixins:[s.default],data:function(){return{slider:null}},watch:{model:function(){if(window.$&&window.$.fn.ionRangeSlider){var t=void 0,e=void 0;if(u()(this.value)){var n=i()(this.value,2);t=n[0],e=n[1]}else t=this.value;this.slider&&this.slider.update({from:t,to:e})}}},mounted:function(){this.$nextTick(function(){if(window.$&&window.$.fn.ionRangeSlider){var t=void 0,e=void 0;if(u()(this.value)){var n=i()(this.value,2);t=n[0],e=n[1]}else t=this.value;var r=this;$(this.$el).ionRangeSlider(c()(this.schema.rangeSliderOptions||{},{type:"single",grid:!0,hide_min_max:!0,from:t,to:e,onChange:function(t){"double"===r.slider.options.type?r.value=[t.from,t.to]:r.value=t.from}})),this.slider=$(this.$el).data("ionRangeSlider")}else console.warn("ion.rangeSlider library is missing. Please download from https://github.com/IonDen/ion.rangeSlider and load the script and CSS in the HTML head section!")})},beforeDestroy:function(){this.slider&&this.slider.destroy()}}},function(t,e,n){t.exports={default:n(280),__esModule:!0}},function(t,e,n){"use strict";var r=n(7),i=n.n(r),o=n(1);e.a={mixins:[o.default],computed:{items:function(){var t=this.schema.values;return"function"==typeof t?t.apply(this,[this.model,this.schema]):t}},methods:{getItemValue:function(t){if(i()(t)){if(void 0!==this.schema.selectOptions&&void 0!==this.schema.selectOptions.value)return t[this.schema.selectOptions.value];if(void 0!==t.id)return t.id;throw"`id` is not defined. If you want to use another key name, add a `value` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items"}return t},getItemName:function(t){if(i()(t)){if(void 0!==this.schema.selectOptions&&void 0!==this.schema.selectOptions.name)return t[this.schema.selectOptions.name];if(void 0!==t.name)return t.name;throw"`name` is not defined. If you want to use another key name, add a `name` property under `selectOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/select.html#select-field-with-object-items"}return t}},watch:{model:function(){$.fn.selectpicker&&$(this.$el).selectpicker("refresh")}},mounted:function(){this.$nextTick(function(){$.fn.selectpicker?$(this.$el).selectpicker("destroy").selectpicker(this.schema.selectOptions):console.warn("Bootstrap-select library is missing. Please download from https://silviomoreto.github.io/bootstrap-select/ and load the script and CSS in the HTML head section!")})},beforeDestroy:function(){$.fn.selectpicker&&$(this.$el).selectpicker("destroy")}}},function(t,e,n){"use strict";var r=n(10),i=n.n(r),o=n(1);e.a={mixins:[o.default],data:function(){return{picker:null}},watch:{model:function(){window.$&&window.$.fn.spectrum&&this.picker.spectrum("set",this.value)},disabled:function(t){t?this.picker.spectrum("disable"):this.picker.spectrum("enable")}},mounted:function(){this.$nextTick(function(){var t=this;window.$&&window.$.fn.spectrum?(this.picker=$(this.$el).spectrum("destroy").spectrum(i()(this.schema.colorOptions||{},{showInput:!0,showAlpha:!0,disabled:this.schema.disabled,allowEmpty:!this.schema.required,preferredFormat:"hex",change:function(e){t.value=e?e.toString():null}})),this.picker.spectrum("set",this.value)):console.warn("Spectrum color library is missing. Please download from http://bgrins.github.io/spectrum/ and load the script and CSS in the HTML head section!")})},beforeDestroy:function(){this.picker&&this.picker.spectrum("destroy")}}},function(t,e,n){"use strict";var r=n(106),i=n.n(r),o=n(10),u=n.n(o),a=n(1);e.a={mixins:[a.default],computed:{mapLink:function(){if(this.value){var t=void 0,e=void 0,n=u()(this.schema.staticMapOptions||{},{lat:"lat",lng:"lng",zoom:8,sizeX:640,sizeY:640});t=this.value[n.lat],e=this.value[n.lng];var r="http://maps.googleapis.com/maps/api/staticmap?center="+t+","+e+"&zoom="+n.zoom+"&size="+n.sizeX+"x"+n.sizeY,o=["scale","format","maptype","language","region","markers","path","visible","style","key","signature"],a=!0,c=!1,s=void 0;try{for(var l,f=i()(o);!(a=(l=f.next()).done);a=!0){var d=l.value;void 0!==n[d]&&(r+="&"+d+"="+n[d])}}catch(t){c=!0,s=t}finally{try{!a&&f.return&&f.return()}finally{if(c)throw s}}if(t&&e)return r}}}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default],methods:{formatValueToField:function(t){return null!=t&&this.schema.valueOn?t===this.schema.valueOn:t},formatValueToModel:function(t){return null!=t&&this.schema.valueOn?t?this.schema.valueOn:this.schema.valueOff:t}}}},function(t,e,n){"use strict";var r=n(1);e.a={mixins:[r.default],computed:{selectOptions:function(){return this.schema.selectOptions||{}},options:function(){var t=this.schema.values;return"function"==typeof t?t.apply(this,[this.model,this.schema]):t},customLabel:function(){return void 0!==this.schema.selectOptions&&void 0!==this.schema.selectOptions.customLabel&&"function"==typeof this.schema.selectOptions.customLabel?this.schema.selectOptions.customLabel:void 0}},methods:{updateSelected:function(t){this.value=t},addTag:function(t,e){var n=this.selectOptions.onNewTag;"function"==typeof n&&n(t,e,this.options,this.value)},onSearchChange:function(t,e){var n=this.selectOptions.onSearch;"function"==typeof n&&n(t,e,this.options)},onSelect:function(){},onRemove:function(){},onOpen:function(){},onClose:function(){}},created:function(){this.$root.$options.components.multiselect||console.error("'vue-multiselect' is missing. Please download from https://github.com/monterail/vue-multiselect and register the component globally!")}}},function(t,e,n){var r=n(113).default,i=n(28),o=n(84).default,u=n(80).default,a=n(1).default,c=function(e,n){if(e.component("VueFormGenerator",t.exports.component),n&&n.validators)for(var r in n.validators)({}).hasOwnProperty.call(n.validators,r)&&(o[r]=n.validators[r])};t.exports={component:r,schema:i,validators:o,abstractField:a,fieldComponents:u,install:c}},function(t,e,n){"use strict";function r(t){n(114)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(49),o=n(298),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){n(116),n(31),n(40),n(131),n(141),n(142),t.exports=n(3).Promise},function(t,e){},function(t,e,n){var r=n(32),i=n(33);t.exports=function(t){return function(e,n){var o,u,a=String(i(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536)}}},function(t,e,n){t.exports=!n(13)&&!n(20)(function(){return 7!=Object.defineProperty(n(34)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(17);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(12)},function(t,e,n){"use strict";var r=n(122),i=n(53),o=n(38),u={};n(12)(u,n(4)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(9),i=n(123),o=n(58),u=n(37)("IE_PROTO"),a=function(){},c=function(){var t,e=n(34)("iframe"),r=o.length;for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(16),i=n(9),o=n(35);t.exports=n(13)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(21),i=n(36),o=n(125)(!1),u=n(37)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(s,n)||s.push(n));return s}},function(t,e,n){var r=n(36),i=n(55),o=n(126);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=i(c.length),l=o(u,s);if(t&&n!=n){for(;s>l;)if((a=c[l++])!=a)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(32),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(21),i=n(39),o=n(37)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(129),i=n(130),o=n(14),u=n(36);t.exports=n(51)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,i,o,u,a=n(52),c=n(6),s=n(18),l=n(41),f=n(11),d=n(17),h=n(19),p=n(132),v=n(133),m=n(61),g=n(62).set,_=n(137)(),y=n(42),b=n(63),x=n(64),w=c.TypeError,O=c.process,j=c.Promise,k="process"==l(O),S=function(){},C=i=y.f,M=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[n(4)("species")]=function(t){t(S,S)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e}catch(t){}}(),T=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;_(function(){for(var r=t._v,i=1==t._s,o=0;n.length>o;)!function(e){var n,o,u=i?e.ok:e.fail,a=e.resolve,c=e.reject,s=e.domain;try{u?(i||(2==t._h&&E(t),t._h=1),!0===u?n=r:(s&&s.enter(),n=u(r),s&&s.exit()),n===e.promise?c(w("Promise-chain cycle")):(o=T(n))?o.call(n,a,c):a(n)):c(r)}catch(t){c(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&P(t)})}},P=function(t){g.call(c,function(){var e,n,r,i=t._v,o=A(t);if(o&&(e=b(function(){k?O.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=k||A(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},A=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!A(e.promise))return!1;return!0},E=function(t){g.call(c,function(){var e;k?O.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},$=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=T(t))?_(function(){var r={_w:n,_d:!1};try{e.call(t,s(F,r,1),s($,r,1))}catch(t){$.call(r,t)}}):(n._v=t,n._s=1,I(n,!1))}catch(t){$.call({_w:n,_d:!1},t)}}};M||(j=function(t){p(this,j,"Promise","_h"),h(t),r.call(this);try{t(s(F,this,1),s($,this,1))}catch(t){$.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(138)(j.prototype,{then:function(t,e){var n=C(m(this,j));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=s(F,t,1),this.reject=s($,t,1)},y.f=C=function(t){return t===j||t===u?new o(t):i(t)}),f(f.G+f.W+f.F*!M,{Promise:j}),n(38)(j,"Promise"),n(139)("Promise"),u=n(3).Promise,f(f.S+f.F*!M,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(a||!M),"Promise",{resolve:function(t){return x(a&&this===u?j:this,t)}}),f(f.S+f.F*!(M&&n(140)(function(t){j.all(t).catch(S)})),"Promise",{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=b(function(){var n=[],o=0,u=1;v(t,!1,function(t){var a=o++,c=!1;n.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--u||r(n))},i)}),--u||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=b(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(18),i=n(134),o=n(135),u=n(9),a=n(55),c=n(60),s={},l={},e=t.exports=function(t,e,n,f,d){var h,p,v,m,g=d?function(){return t}:c(t),_=r(n,f,e?2:1),y=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(h=a(t.length);h>y;y++)if((m=e?_(u(p=t[y])[0],p[1]):_(t[y]))===s||m===l)return m}else for(v=g.call(t);!(p=v.next()).done;)if((m=i(v,_,p.value,e))===s||m===l)return m};e.BREAK=s,e.RETURN=l},function(t,e,n){var r=n(9);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(14),i=n(4)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(6),i=n(62).set,o=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c="process"==n(22)(u);t.exports=function(){var t,e,n,s=function(){var r,i;for(c&&(r=u.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(s)};else if(o){var l=!0,f=document.createTextNode("");new o(s).observe(f,{characterData:!0}),n=function(){f.data=l=!l}}else if(a&&a.resolve){var d=a.resolve();n=function(){d.then(s)}}else n=function(){i.call(r,s)};return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},function(t,e,n){"use strict";var r=n(6),i=n(3),o=n(16),u=n(13),a=n(4)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];u&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(4)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(11),i=n(3),o=n(6),u=n(61),a=n(64);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(11),i=n(42),o=n(63);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(144),i=n(147),o=i(r);t.exports=o},function(t,e,n){function r(t,e){return t&&i(t,e,o)}var i=n(145),o=n(24);t.exports=r},function(t,e,n){var r=n(146),i=r();t.exports=i},function(t,e){function n(t){return function(e,n,r){for(var i=-1,o=Object(e),u=r(e),a=u.length;a--;){var c=u[t?a:++i];if(!1===n(o[c],c,o))break}return e}}t.exports=n},function(t,e,n){function r(t,e){return function(n,r){if(null==n)return n;if(!i(n))return t(n,r);for(var o=n.length,u=e?o:-1,a=Object(n);(e?u--:++u<o)&&!1!==r(a[u],u,a););return n}}var i=n(44);t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t,e){e=i(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[o(e[n++])];return n&&n==r?t:void 0}var i=n(66),o=n(69);t.exports=r},function(t,e,n){function r(t,e){if(i(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!u.test(t)||null!=e&&t in Object(e))}var i=n(2),o=n(26),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=r},function(t,e,n){var r=n(153),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,u=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t)}),e});t.exports=u},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t){if("string"==typeof t)return t;if(u(t))return o(t,r)+"";if(a(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var i=n(155),o=n(157),u=n(2),a=n(26),c=1/0,s=i?i.prototype:void 0,l=s?s.toString:void 0;t.exports=r},function(t,e,n){var r=n(27),i=r.Symbol;t.exports=i},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(68))},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var r=n(159),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={default:n(160),__esModule:!0}},function(t,e,n){n(161);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(11);r(r.S+r.F*!n(13),"Object",{defineProperty:n(16).f})},function(t,e,n){"use strict";function r(t){n(163)}var i=n(72),o=n(297),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.a=c.exports},function(t,e){},function(t,e,n){function r(t){return i(t,o|u)}var i=n(73),o=1,u=4;t.exports=r},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var i=n(166),o=n(167),u=n(168),a=n(169),c=n(170);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=u,r.prototype.has=a,r.prototype.set=c,t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():u.call(e,n,1),--this.size,!0)}var i=n(29),o=Array.prototype,u=o.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]}var i=n(29);t.exports=r},function(t,e,n){function r(t){return i(this.__data__,t)>-1}var i=n(29);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var i=n(29);t.exports=r},function(t,e,n){var r=n(172),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(t,e){return t&&i(e,o(e),t)}var i=n(30),o=n(24);t.exports=r},function(t,e,n){function r(t,e){return t&&i(e,o(e),t)}var i=n(30),o=n(75);t.exports=r},function(t,e,n){(function(t){function r(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}var i=n(27),o="object"==typeof e&&e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=u&&u.exports===o,c=a?i.Buffer:void 0,s=c?c.allocUnsafe:void 0;t.exports=r}).call(e,n(76)(t))},function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},function(t,e,n){function r(t,e){return i(t,o(t),e)}var i=n(30),o=n(178);t.exports=r},function(t,e){function n(){return[]}t.exports=n},function(t,e,n){function r(t,e){return i(t,o(t),e)}var i=n(30),o=n(180);t.exports=r},function(t,e){function n(){return[]}t.exports=n},function(t,e,n){var r=n(25),i=r(Object.keys,Object);t.exports=i},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e){function n(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&i.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var r=Object.prototype,i=r.hasOwnProperty;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t){return"function"!=typeof t.constructor||u(t)?{}:i(o(t))}var i=n(186),o=n(187),u=n(78);t.exports=r},function(t,e,n){var r=n(7),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=o},function(t,e,n){var r=n(25),i=r(Object.getPrototypeOf,Object);t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){t.exports=n(23)},function(t,e,n){function r(t,e,n){return null==t?t:i(t,e,n)}var i=n(192);t.exports=r},function(t,e,n){function r(t,e,n,r){if(!a(t))return t;e=o(e,t);for(var s=-1,l=e.length,f=l-1,d=t;null!=d&&++s<l;){var h=c(e[s]),p=n;if(s!=f){var v=d[h];p=r?r(v,h,d):void 0,void 0===p&&(p=a(v)?v:u(e[s+1])?[]:{})}i(d,h,p),d=d[h]}return t}var i=n(47),o=n(66),u=n(193),a=n(7),c=n(69);t.exports=r},function(t,e){function n(t,e){var n=typeof t;return!!(e=null==e?r:e)&&("number"==n||"symbol"!=n&&i.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){(function(t,r){var i;(function(){function o(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function u(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var u=t[i];e(r,u,n(u),t)}return r}function a(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function c(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function s(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function l(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var u=t[n];e(u,n,t)&&(o[i++]=u)}return o}function f(t,e){return!!(null==t?0:t.length)&&w(t,e,0)>-1}function d(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function h(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function p(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function v(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function m(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function g(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function _(t){return t.split("")}function y(t){return t.match(Le)||[]}function b(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function x(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function w(t,e,n){return e===e?K(t,e,n):x(t,j,n)}function O(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function j(t){return t!==t}function k(t,e){var n=null==t?0:t.length;return n?I(t,e)/n:$t}function S(t){return function(e){return null==e?rt:e[t]}}function C(t){return function(e){return null==t?rt:t[e]}}function M(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function T(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function I(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);o!==rt&&(n=n===rt?o:n+o)}return n}function P(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function A(t,e){return h(e,function(e){return[e,t[e]]})}function E(t){return function(e){return t(e)}}function $(t,e){return h(e,function(e){return t[e]})}function F(t,e){return t.has(e)}function D(t,e){for(var n=-1,r=t.length;++n<r&&w(e,t[n],0)>-1;);return n}function N(t,e){for(var n=t.length;n--&&w(e,t[n],0)>-1;);return n}function L(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}function R(t){return"\\"+Sn[t]}function V(t,e){return null==t?rt:t[e]}function z(t){return gn.test(t)}function U(t){return _n.test(t)}function Y(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function q(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function B(t,e){return function(n){return t(e(n))}}function H(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var u=t[n];u!==e&&u!==st||(t[n]=st,o[i++]=n)}return o}function W(t,e){return"__proto__"==e?rt:t[e]}function Z(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function G(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t]}),n}function K(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function J(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}function X(t){return z(t)?tt(t):Yn(t)}function Q(t){return z(t)?et(t):_(t)}function tt(t){for(var e=vn.lastIndex=0;vn.test(t);)++e;return e}function et(t){return t.match(vn)||[]}function nt(t){return t.match(mn)||[]}var rt,it=200,ot="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",ut="Expected a function",at="__lodash_hash_undefined__",ct=500,st="__lodash_placeholder__",lt=1,ft=2,dt=4,ht=1,pt=2,vt=1,mt=2,gt=4,_t=8,yt=16,bt=32,xt=64,wt=128,Ot=256,jt=512,kt=30,St="...",Ct=800,Mt=16,Tt=1,It=2,Pt=1/0,At=9007199254740991,Et=1.7976931348623157e308,$t=NaN,Ft=4294967295,Dt=Ft-1,Nt=Ft>>>1,Lt=[["ary",wt],["bind",vt],["bindKey",mt],["curry",_t],["curryRight",yt],["flip",jt],["partial",bt],["partialRight",xt],["rearg",Ot]],Rt="[object Arguments]",Vt="[object Array]",zt="[object AsyncFunction]",Ut="[object Boolean]",Yt="[object Date]",qt="[object DOMException]",Bt="[object Error]",Ht="[object Function]",Wt="[object GeneratorFunction]",Zt="[object Map]",Gt="[object Number]",Kt="[object Null]",Jt="[object Object]",Xt="[object Proxy]",Qt="[object RegExp]",te="[object Set]",ee="[object String]",ne="[object Symbol]",re="[object Undefined]",ie="[object WeakMap]",oe="[object WeakSet]",ue="[object ArrayBuffer]",ae="[object DataView]",ce="[object Float32Array]",se="[object Float64Array]",le="[object Int8Array]",fe="[object Int16Array]",de="[object Int32Array]",he="[object Uint8Array]",pe="[object Uint8ClampedArray]",ve="[object Uint16Array]",me="[object Uint32Array]",ge=/\b__p \+= '';/g,_e=/\b(__p \+=) '' \+/g,ye=/(__e\(.*?\)|\b__t\)) \+\n'';/g,be=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,we=RegExp(be.source),Oe=RegExp(xe.source),je=/<%-([\s\S]+?)%>/g,ke=/<%([\s\S]+?)%>/g,Se=/<%=([\s\S]+?)%>/g,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Me=/^\w*$/,Te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ie=/[\\^$.*+?()[\]{}|]/g,Pe=RegExp(Ie.source),Ae=/^\s+|\s+$/g,Ee=/^\s+/,$e=/\s+$/,Fe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,De=/\{\n\/\* \[wrapped with (.+)\] \*/,Ne=/,? & /,Le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Re=/\\(\\)?/g,Ve=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ze=/\w*$/,Ue=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,qe=/^\[object .+?Constructor\]$/,Be=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,We=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ze=/($^)/,Ge=/['\n\r\u2028\u2029\\]/g,Ke="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Je="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xe="["+Je+"]",Qe="["+Ke+"]",tn="[a-z\\xdf-\\xf6\\xf8-\\xff]",en="[^\\ud800-\\udfff"+Je+"\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",nn="\\ud83c[\\udffb-\\udfff]",rn="(?:\\ud83c[\\udde6-\\uddff]){2}",on="[\\ud800-\\udbff][\\udc00-\\udfff]",un="[A-Z\\xc0-\\xd6\\xd8-\\xde]",an="(?:"+tn+"|"+en+")",cn="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",sn="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rn,on].join("|")+")[\\ufe0e\\ufe0f]?"+cn+")*",ln="[\\ufe0e\\ufe0f]?"+cn+sn,fn="(?:"+["[\\u2700-\\u27bf]",rn,on].join("|")+")"+ln,dn="(?:"+["[^\\ud800-\\udfff]"+Qe+"?",Qe,rn,on,"[\\ud800-\\udfff]"].join("|")+")",hn=RegExp("['’]","g"),pn=RegExp(Qe,"g"),vn=RegExp(nn+"(?="+nn+")|"+dn+ln,"g"),mn=RegExp([un+"?"+tn+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Xe,un,"$"].join("|")+")","(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Xe,un+an,"$"].join("|")+")",un+"?"+an+"+(?:['’](?:d|ll|m|re|s|t|ve))?",un+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",fn].join("|"),"g"),gn=RegExp("[\\u200d\\ud800-\\udfff"+Ke+"\\ufe0e\\ufe0f]"),_n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,yn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bn=-1,xn={};xn[ce]=xn[se]=xn[le]=xn[fe]=xn[de]=xn[he]=xn[pe]=xn[ve]=xn[me]=!0,xn[Rt]=xn[Vt]=xn[ue]=xn[Ut]=xn[ae]=xn[Yt]=xn[Bt]=xn[Ht]=xn[Zt]=xn[Gt]=xn[Jt]=xn[Qt]=xn[te]=xn[ee]=xn[ie]=!1;var wn={};wn[Rt]=wn[Vt]=wn[ue]=wn[ae]=wn[Ut]=wn[Yt]=wn[ce]=wn[se]=wn[le]=wn[fe]=wn[de]=wn[Zt]=wn[Gt]=wn[Jt]=wn[Qt]=wn[te]=wn[ee]=wn[ne]=wn[he]=wn[pe]=wn[ve]=wn[me]=!0,wn[Bt]=wn[Ht]=wn[ie]=!1;var On={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},jn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},kn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Mn=parseInt,Tn="object"==typeof t&&t&&t.Object===Object&&t,In="object"==typeof self&&self&&self.Object===Object&&self,Pn=Tn||In||Function("return this")(),An="object"==typeof e&&e&&!e.nodeType&&e,En=An&&"object"==typeof r&&r&&!r.nodeType&&r,$n=En&&En.exports===An,Fn=$n&&Tn.process,Dn=function(){try{var t=En&&En.require&&En.require("util").types;return t||Fn&&Fn.binding&&Fn.binding("util")}catch(t){}}(),Nn=Dn&&Dn.isArrayBuffer,Ln=Dn&&Dn.isDate,Rn=Dn&&Dn.isMap,Vn=Dn&&Dn.isRegExp,zn=Dn&&Dn.isSet,Un=Dn&&Dn.isTypedArray,Yn=S("length"),qn=C(On),Bn=C(jn),Hn=C(kn),Wn=function t(e){function n(t){if(ec(t)&&!hd(t)&&!(t instanceof _)){if(t instanceof i)return t;if(dl.call(t,"__wrapped__"))return Xo(t)}return new i(t)}function r(){}function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=rt}function _(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ft,this.__views__=[]}function C(){var t=new _(this.__wrapped__);return t.__actions__=Ei(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Ei(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Ei(this.__views__),t}function K(){if(this.__filtered__){var t=new _(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function tt(){var t=this.__wrapped__.value(),e=this.__dir__,n=hd(t),r=e<0,i=n?t.length:0,o=Oo(0,i,this.__views__),u=o.start,a=o.end,c=a-u,s=r?a:u-1,l=this.__iteratees__,f=l.length,d=0,h=Ul(c,this.__takeCount__);if(!n||!r&&i==c&&h==c)return mi(t,this.__actions__);var p=[];t:for(;c--&&d<h;){s+=e;for(var v=-1,m=t[s];++v<f;){var g=l[v],_=g.iteratee,y=g.type,b=_(m);if(y==It)m=b;else if(!b){if(y==Tt)continue t;break t}}p[d++]=m}return p}function et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Le(){this.__data__=Xl?Xl(null):{},this.size=0}function Ke(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Je(t){var e=this.__data__;if(Xl){var n=e[t];return n===at?rt:n}return dl.call(e,t)?e[t]:rt}function Xe(t){var e=this.__data__;return Xl?e[t]!==rt:dl.call(e,t)}function Qe(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Xl&&e===rt?at:e,this}function tn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function en(){this.__data__=[],this.size=0}function nn(t){var e=this.__data__,n=Zn(e,t);return!(n<0)&&(n==e.length-1?e.pop():Sl.call(e,n,1),--this.size,!0)}function rn(t){var e=this.__data__,n=Zn(e,t);return n<0?rt:e[n][1]}function on(t){return Zn(this.__data__,t)>-1}function un(t,e){var n=this.__data__,r=Zn(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function an(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function cn(){this.size=0,this.__data__={hash:new et,map:new(Zl||tn),string:new et}}function sn(t){var e=yo(this,t).delete(t);return this.size-=e?1:0,e}function ln(t){return yo(this,t).get(t)}function fn(t){return yo(this,t).has(t)}function dn(t,e){var n=yo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function vn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new an;++e<n;)this.add(t[e])}function mn(t){return this.__data__.set(t,at),this}function gn(t){return this.__data__.has(t)}function _n(t){var e=this.__data__=new tn(t);this.size=e.size}function On(){this.__data__=new tn,this.size=0}function jn(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function kn(t){return this.__data__.get(t)}function Sn(t){return this.__data__.has(t)}function Tn(t,e){var n=this.__data__;if(n instanceof tn){var r=n.__data__;if(!Zl||r.length<it-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new an(r)}return n.set(t,e),this.size=n.size,this}function In(t,e){var n=hd(t),r=!n&&dd(t),i=!n&&!r&&vd(t),o=!n&&!r&&!i&&bd(t),u=n||r||i||o,a=u?P(t.length,ol):[],c=a.length;for(var s in t)!e&&!dl.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Po(s,c))||a.push(s);return a}function An(t){var e=t.length;return e?t[Jr(0,e-1)]:rt}function En(t,e){return Zo(Ei(t),tr(e,0,t.length))}function Fn(t){return Zo(Ei(t))}function Dn(t,e,n){(n===rt||za(t[e],n))&&(n!==rt||e in t)||Xn(t,e,n)}function Yn(t,e,n){var r=t[e];dl.call(t,e)&&za(r,n)&&(n!==rt||e in t)||Xn(t,e,n)}function Zn(t,e){for(var n=t.length;n--;)if(za(t[n][0],e))return n;return-1}function Gn(t,e,n,r){return ff(t,function(t,i,o){e(r,t,n(t),o)}),r}function Kn(t,e){return t&&$i(e,Dc(e),t)}function Jn(t,e){return t&&$i(e,Nc(e),t)}function Xn(t,e,n){"__proto__"==e&&Il?Il(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Qn(t,e){for(var n=-1,r=e.length,i=Xs(r),o=null==t;++n<r;)i[n]=o?rt:Ec(t,e[n]);return i}function tr(t,e,n){return t===t&&(n!==rt&&(t=t<=n?t:n),e!==rt&&(t=t>=e?t:e)),t}function er(t,e,n,r,i,o){var u,c=e&lt,s=e&ft,l=e&dt;if(n&&(u=i?n(t,r,i,o):n(t)),u!==rt)return u;if(!tc(t))return t;var f=hd(t);if(f){if(u=So(t),!c)return Ei(t,u)}else{var d=Of(t),h=d==Ht||d==Wt;if(vd(t))return Oi(t,c);if(d==Jt||d==Rt||h&&!i){if(u=s||h?{}:Co(t),!c)return s?Di(t,Jn(u,t)):Fi(t,Kn(u,t))}else{if(!wn[d])return i?t:{};u=Mo(t,d,c)}}o||(o=new _n);var p=o.get(t);if(p)return p;if(o.set(t,u),yd(t))return t.forEach(function(r){u.add(er(r,e,n,r,t,o))}),u;if(gd(t))return t.forEach(function(r,i){u.set(i,er(r,e,n,i,t,o))}),u;var v=l?s?vo:po:s?Nc:Dc,m=f?rt:v(t);return a(m||t,function(r,i){m&&(i=r,r=t[i]),Yn(u,i,er(r,e,n,i,t,o))}),u}function nr(t){var e=Dc(t);return function(n){return rr(n,t,e)}}function rr(t,e,n){var r=n.length;if(null==t)return!r;for(t=rl(t);r--;){var i=n[r],o=e[i],u=t[i];if(u===rt&&!(i in t)||!o(u))return!1}return!0}function ir(t,e,n){if("function"!=typeof t)throw new ul(ut);return Sf(function(){t.apply(rt,n)},e)}function or(t,e,n,r){var i=-1,o=f,u=!0,a=t.length,c=[],s=e.length;if(!a)return c;n&&(e=h(e,E(n))),r?(o=d,u=!1):e.length>=it&&(o=F,u=!1,e=new vn(e));t:for(;++i<a;){var l=t[i],p=null==n?l:n(l);if(l=r||0!==l?l:0,u&&p===p){for(var v=s;v--;)if(e[v]===p)continue t;c.push(l)}else o(e,p,r)||c.push(l)}return c}function ur(t,e){var n=!0;return ff(t,function(t,r,i){return n=!!e(t,r,i)}),n}function ar(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],u=e(o);if(null!=u&&(a===rt?u===u&&!dc(u):n(u,a)))var a=u,c=o}return c}function cr(t,e,n,r){var i=t.length;for(n=_c(n),n<0&&(n=-n>i?0:i+n),r=r===rt||r>i?i:_c(r),r<0&&(r+=i),r=n>r?0:yc(r);n<r;)t[n++]=e;return t}function sr(t,e){var n=[];return ff(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function lr(t,e,n,r,i){var o=-1,u=t.length;for(n||(n=Io),i||(i=[]);++o<u;){var a=t[o];e>0&&n(a)?e>1?lr(a,e-1,n,r,i):p(i,a):r||(i[i.length]=a)}return i}function fr(t,e){return t&&hf(t,e,Dc)}function dr(t,e){return t&&pf(t,e,Dc)}function hr(t,e){return l(e,function(e){return Ja(t[e])})}function pr(t,e){e=xi(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[Go(e[n++])];return n&&n==r?t:rt}function vr(t,e,n){var r=e(t);return hd(t)?r:p(r,n(t))}function mr(t){return null==t?t===rt?re:Kt:Tl&&Tl in rl(t)?wo(t):Uo(t)}function gr(t,e){return t>e}function _r(t,e){return null!=t&&dl.call(t,e)}function yr(t,e){return null!=t&&e in rl(t)}function br(t,e,n){return t>=Ul(e,n)&&t<zl(e,n)}function xr(t,e,n){for(var r=n?d:f,i=t[0].length,o=t.length,u=o,a=Xs(o),c=1/0,s=[];u--;){var l=t[u];u&&e&&(l=h(l,E(e))),c=Ul(l.length,c),a[u]=!n&&(e||i>=120&&l.length>=120)?new vn(u&&l):rt}l=t[0];var p=-1,v=a[0];t:for(;++p<i&&s.length<c;){var m=l[p],g=e?e(m):m;if(m=n||0!==m?m:0,!(v?F(v,g):r(s,g,n))){for(u=o;--u;){var _=a[u];if(!(_?F(_,g):r(t[u],g,n)))continue t}v&&v.push(g),s.push(m)}}return s}function wr(t,e,n,r){return fr(t,function(t,i,o){e(r,n(t),i,o)}),r}function Or(t,e,n){e=xi(e,t),t=qo(t,e);var r=null==t?t:t[Go(gu(e))];return null==r?rt:o(r,t,n)}function jr(t){return ec(t)&&mr(t)==Rt}function kr(t){return ec(t)&&mr(t)==ue}function Sr(t){return ec(t)&&mr(t)==Yt}function Cr(t,e,n,r,i){return t===e||(null==t||null==e||!ec(t)&&!ec(e)?t!==t&&e!==e:Mr(t,e,n,r,Cr,i))}function Mr(t,e,n,r,i,o){var u=hd(t),a=hd(e),c=u?Vt:Of(t),s=a?Vt:Of(e);c=c==Rt?Jt:c,s=s==Rt?Jt:s;var l=c==Jt,f=s==Jt,d=c==s;if(d&&vd(t)){if(!vd(e))return!1;u=!0,l=!1}if(d&&!l)return o||(o=new _n),u||bd(t)?so(t,e,n,r,i,o):lo(t,e,c,n,r,i,o);if(!(n&ht)){var h=l&&dl.call(t,"__wrapped__"),p=f&&dl.call(e,"__wrapped__");if(h||p){var v=h?t.value():t,m=p?e.value():e;return o||(o=new _n),i(v,m,n,r,o)}}return!!d&&(o||(o=new _n),fo(t,e,n,r,i,o))}function Tr(t){return ec(t)&&Of(t)==Zt}function Ir(t,e,n,r){var i=n.length,o=i,u=!r;if(null==t)return!o;for(t=rl(t);i--;){var a=n[i];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=n[i];var c=a[0],s=t[c],l=a[1];if(u&&a[2]){if(s===rt&&!(c in t))return!1}else{var f=new _n;if(r)var d=r(s,l,c,t,e,f);if(!(d===rt?Cr(l,s,ht|pt,r,f):d))return!1}}return!0}function Pr(t){return!(!tc(t)||Do(t))&&(Ja(t)?_l:qe).test(Ko(t))}function Ar(t){return ec(t)&&mr(t)==Qt}function Er(t){return ec(t)&&Of(t)==te}function $r(t){return ec(t)&&Qa(t.length)&&!!xn[mr(t)]}function Fr(t){return"function"==typeof t?t:null==t?Ss:"object"==typeof t?hd(t)?zr(t[0],t[1]):Vr(t):$s(t)}function Dr(t){if(!No(t))return Vl(t);var e=[];for(var n in rl(t))dl.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Nr(t){if(!tc(t))return zo(t);var e=No(t),n=[];for(var r in t)("constructor"!=r||!e&&dl.call(t,r))&&n.push(r);return n}function Lr(t,e){return t<e}function Rr(t,e){var n=-1,r=Ua(t)?Xs(t.length):[];return ff(t,function(t,i,o){r[++n]=e(t,i,o)}),r}function Vr(t){var e=bo(t);return 1==e.length&&e[0][2]?Ro(e[0][0],e[0][1]):function(n){return n===t||Ir(n,t,e)}}function zr(t,e){return Eo(t)&&Lo(e)?Ro(Go(t),e):function(n){var r=Ec(n,t);return r===rt&&r===e?Fc(n,t):Cr(e,r,ht|pt)}}function Ur(t,e,n,r,i){t!==e&&hf(e,function(o,u){if(tc(o))i||(i=new _n),Yr(t,e,u,n,Ur,r,i);else{var a=r?r(W(t,u),o,u+"",t,e,i):rt;a===rt&&(a=o),Dn(t,u,a)}},Nc)}function Yr(t,e,n,r,i,o,u){var a=W(t,n),c=W(e,n),s=u.get(c);if(s)return void Dn(t,n,s);var l=o?o(a,c,n+"",t,e,u):rt,f=l===rt;if(f){var d=hd(c),h=!d&&vd(c),p=!d&&!h&&bd(c);l=c,d||h||p?hd(a)?l=a:Ya(a)?l=Ei(a):h?(f=!1,l=Oi(c,!0)):p?(f=!1,l=Mi(c,!0)):l=[]:sc(c)||dd(c)?(l=a,dd(a)?l=xc(a):(!tc(a)||r&&Ja(a))&&(l=Co(c))):f=!1}f&&(u.set(c,l),i(l,c,r,o,u),u.delete(c)),Dn(t,n,l)}function qr(t,e){var n=t.length;if(n)return e+=e<0?n:0,Po(e,n)?t[e]:rt}function Br(t,e,n){var r=-1;return e=h(e.length?e:[Ss],E(_o())),T(Rr(t,function(t,n,i){return{criteria:h(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return Ii(t,e,n)})}function Hr(t,e){return Wr(t,e,function(e,n){return Fc(t,n)})}function Wr(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var u=e[r],a=pr(t,u);n(a,u)&&ri(o,xi(u,t),a)}return o}function Zr(t){return function(e){return pr(e,t)}}function Gr(t,e,n,r){var i=r?O:w,o=-1,u=e.length,a=t;for(t===e&&(e=Ei(e)),n&&(a=h(t,E(n)));++o<u;)for(var c=0,s=e[o],l=n?n(s):s;(c=i(a,l,c,r))>-1;)a!==t&&Sl.call(a,c,1),Sl.call(t,c,1);return t}function Kr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;Po(i)?Sl.call(t,i,1):hi(t,i)}}return t}function Jr(t,e){return t+Fl(Bl()*(e-t+1))}function Xr(t,e,n,r){for(var i=-1,o=zl($l((e-t)/(n||1)),0),u=Xs(o);o--;)u[r?o:++i]=t,t+=n;return u}function Qr(t,e){var n="";if(!t||e<1||e>At)return n;do{e%2&&(n+=t),(e=Fl(e/2))&&(t+=t)}while(e);return n}function ti(t,e){return Cf(Yo(t,e,Ss),t+"")}function ei(t){return An(Gc(t))}function ni(t,e){var n=Gc(t);return Zo(n,tr(e,0,n.length))}function ri(t,e,n,r){if(!tc(t))return t;e=xi(e,t);for(var i=-1,o=e.length,u=o-1,a=t;null!=a&&++i<o;){var c=Go(e[i]),s=n;if(i!=u){var l=a[c];s=r?r(l,c,a):rt,s===rt&&(s=tc(l)?l:Po(e[i+1])?[]:{})}Yn(a,c,s),a=a[c]}return t}function ii(t){return Zo(Gc(t))}function oi(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Xs(i);++r<i;)o[r]=t[r+e];return o}function ui(t,e){var n;return ff(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function ai(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=Nt){for(;r<i;){var o=r+i>>>1,u=t[o];null!==u&&!dc(u)&&(n?u<=e:u<e)?r=o+1:i=o}return i}return ci(t,e,Ss,n)}function ci(t,e,n,r){e=n(e);for(var i=0,o=null==t?0:t.length,u=e!==e,a=null===e,c=dc(e),s=e===rt;i<o;){var l=Fl((i+o)/2),f=n(t[l]),d=f!==rt,h=null===f,p=f===f,v=dc(f);if(u)var m=r||p;else m=s?p&&(r||d):a?p&&d&&(r||!h):c?p&&d&&!h&&(r||!v):!h&&!v&&(r?f<=e:f<e);m?i=l+1:o=l}return Ul(o,Dt)}function si(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var u=t[n],a=e?e(u):u;if(!n||!za(a,c)){var c=a;o[i++]=0===u?0:u}}return o}function li(t){return"number"==typeof t?t:dc(t)?$t:+t}function fi(t){if("string"==typeof t)return t;if(hd(t))return h(t,fi)+"";if(dc(t))return sf?sf.call(t):"";var e=t+"";return"0"==e&&1/t==-Pt?"-0":e}function di(t,e,n){var r=-1,i=f,o=t.length,u=!0,a=[],c=a;if(n)u=!1,i=d;else if(o>=it){var s=e?null:yf(t);if(s)return Z(s);u=!1,i=F,c=new vn}else c=e?[]:a;t:for(;++r<o;){var l=t[r],h=e?e(l):l;if(l=n||0!==l?l:0,u&&h===h){for(var p=c.length;p--;)if(c[p]===h)continue t;e&&c.push(h),a.push(l)}else i(c,h,n)||(c!==a&&c.push(h),a.push(l))}return a}function hi(t,e){return e=xi(e,t),null==(t=qo(t,e))||delete t[Go(gu(e))]}function pi(t,e,n,r){return ri(t,e,n(pr(t,e)),r)}function vi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?oi(t,r?0:o,r?o+1:i):oi(t,r?o+1:0,r?i:o)}function mi(t,e){var n=t;return n instanceof _&&(n=n.value()),v(e,function(t,e){return e.func.apply(e.thisArg,p([t],e.args))},n)}function gi(t,e,n){var r=t.length;if(r<2)return r?di(t[0]):[];for(var i=-1,o=Xs(r);++i<r;)for(var u=t[i],a=-1;++a<r;)a!=i&&(o[i]=or(o[i]||u,t[a],e,n));return di(lr(o,1),e,n)}function _i(t,e,n){for(var r=-1,i=t.length,o=e.length,u={};++r<i;){var a=r<o?e[r]:rt;n(u,t[r],a)}return u}function yi(t){return Ya(t)?t:[]}function bi(t){return"function"==typeof t?t:Ss}function xi(t,e){return hd(t)?t:Eo(t,e)?[t]:Mf(Oc(t))}function wi(t,e,n){var r=t.length;return n=n===rt?r:n,!e&&n>=r?t:oi(t,e,n)}function Oi(t,e){if(e)return t.slice();var n=t.length,r=wl?wl(n):new t.constructor(n);return t.copy(r),r}function ji(t){var e=new t.constructor(t.byteLength);return new xl(e).set(new xl(t)),e}function ki(t,e){var n=e?ji(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Si(t){var e=new t.constructor(t.source,ze.exec(t));return e.lastIndex=t.lastIndex,e}function Ci(t){return cf?rl(cf.call(t)):{}}function Mi(t,e){var n=e?ji(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Ti(t,e){if(t!==e){var n=t!==rt,r=null===t,i=t===t,o=dc(t),u=e!==rt,a=null===e,c=e===e,s=dc(e);if(!a&&!s&&!o&&t>e||o&&u&&c&&!a&&!s||r&&u&&c||!n&&c||!i)return 1;if(!r&&!o&&!s&&t<e||s&&n&&i&&!r&&!o||a&&n&&i||!u&&i||!c)return-1}return 0}function Ii(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,u=i.length,a=n.length;++r<u;){var c=Ti(i[r],o[r]);if(c){if(r>=a)return c;return c*("desc"==n[r]?-1:1)}}return t.index-e.index}function Pi(t,e,n,r){for(var i=-1,o=t.length,u=n.length,a=-1,c=e.length,s=zl(o-u,0),l=Xs(c+s),f=!r;++a<c;)l[a]=e[a];for(;++i<u;)(f||i<o)&&(l[n[i]]=t[i]);for(;s--;)l[a++]=t[i++];return l}function Ai(t,e,n,r){for(var i=-1,o=t.length,u=-1,a=n.length,c=-1,s=e.length,l=zl(o-a,0),f=Xs(l+s),d=!r;++i<l;)f[i]=t[i];for(var h=i;++c<s;)f[h+c]=e[c];for(;++u<a;)(d||i<o)&&(f[h+n[u]]=t[i++]);return f}function Ei(t,e){var n=-1,r=t.length;for(e||(e=Xs(r));++n<r;)e[n]=t[n];return e}function $i(t,e,n,r){var i=!n;n||(n={});for(var o=-1,u=e.length;++o<u;){var a=e[o],c=r?r(n[a],t[a],a,n,t):rt;c===rt&&(c=t[a]),i?Xn(n,a,c):Yn(n,a,c)}return n}function Fi(t,e){return $i(t,xf(t),e)}function Di(t,e){return $i(t,wf(t),e)}function Ni(t,e){return function(n,r){var i=hd(n)?u:Gn,o=e?e():{};return i(n,t,_o(r,2),o)}}function Li(t){return ti(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:rt,u=i>2?n[2]:rt;for(o=t.length>3&&"function"==typeof o?(i--,o):rt,u&&Ao(n[0],n[1],u)&&(o=i<3?rt:o,i=1),e=rl(e);++r<i;){var a=n[r];a&&t(e,a,r,o)}return e})}function Ri(t,e){return function(n,r){if(null==n)return n;if(!Ua(n))return t(n,r);for(var i=n.length,o=e?i:-1,u=rl(n);(e?o--:++o<i)&&!1!==r(u[o],o,u););return n}}function Vi(t){return function(e,n,r){for(var i=-1,o=rl(e),u=r(e),a=u.length;a--;){var c=u[t?a:++i];if(!1===n(o[c],c,o))break}return e}}function zi(t,e,n){function r(){return(this&&this!==Pn&&this instanceof r?o:t).apply(i?n:this,arguments)}var i=e&vt,o=qi(t);return r}function Ui(t){return function(e){e=Oc(e);var n=z(e)?Q(e):rt,r=n?n[0]:e.charAt(0),i=n?wi(n,1).join(""):e.slice(1);return r[t]()+i}}function Yi(t){return function(e){return v(xs(es(e).replace(hn,"")),t,"")}}function qi(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=lf(t.prototype),r=t.apply(n,e);return tc(r)?r:n}}function Bi(t,e,n){function r(){for(var u=arguments.length,a=Xs(u),c=u,s=go(r);c--;)a[c]=arguments[c];var l=u<3&&a[0]!==s&&a[u-1]!==s?[]:H(a,s);return(u-=l.length)<n?no(t,e,Zi,r.placeholder,rt,a,l,rt,rt,n-u):o(this&&this!==Pn&&this instanceof r?i:t,this,a)}var i=qi(t);return r}function Hi(t){return function(e,n,r){var i=rl(e);if(!Ua(e)){var o=_o(n,3);e=Dc(e),n=function(t){return o(i[t],t,i)}}var u=t(e,n,r);return u>-1?i[o?e[u]:u]:rt}}function Wi(t){return ho(function(e){var n=e.length,r=n,o=i.prototype.thru;for(t&&e.reverse();r--;){var u=e[r];if("function"!=typeof u)throw new ul(ut);if(o&&!a&&"wrapper"==mo(u))var a=new i([],!0)}for(r=a?r:n;++r<n;){u=e[r];var c=mo(u),s="wrapper"==c?bf(u):rt;a=s&&Fo(s[0])&&s[1]==(wt|_t|bt|Ot)&&!s[4].length&&1==s[9]?a[mo(s[0])].apply(a,s[3]):1==u.length&&Fo(u)?a[c]():a.thru(u)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&hd(r))return a.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}function Zi(t,e,n,r,i,o,u,a,c,s){function l(){for(var g=arguments.length,_=Xs(g),y=g;y--;)_[y]=arguments[y];if(p)var b=go(l),x=L(_,b);if(r&&(_=Pi(_,r,i,p)),o&&(_=Ai(_,o,u,p)),g-=x,p&&g<s){var w=H(_,b);return no(t,e,Zi,l.placeholder,n,_,w,a,c,s-g)}var O=d?n:this,j=h?O[t]:t;return g=_.length,a?_=Bo(_,a):v&&g>1&&_.reverse(),f&&c<g&&(_.length=c),this&&this!==Pn&&this instanceof l&&(j=m||qi(j)),j.apply(O,_)}var f=e&wt,d=e&vt,h=e&mt,p=e&(_t|yt),v=e&jt,m=h?rt:qi(t);return l}function Gi(t,e){return function(n,r){return wr(n,t,e(r),{})}}function Ki(t,e){return function(n,r){var i;if(n===rt&&r===rt)return e;if(n!==rt&&(i=n),r!==rt){if(i===rt)return r;"string"==typeof n||"string"==typeof r?(n=fi(n),r=fi(r)):(n=li(n),r=li(r)),i=t(n,r)}return i}}function Ji(t){return ho(function(e){return e=h(e,E(_o())),ti(function(n){var r=this;return t(e,function(t){return o(t,r,n)})})})}function Xi(t,e){e=e===rt?" ":fi(e);var n=e.length;if(n<2)return n?Qr(e,t):e;var r=Qr(e,$l(t/X(e)));return z(e)?wi(Q(r),0,t).join(""):r.slice(0,t)}function Qi(t,e,n,r){function i(){for(var e=-1,c=arguments.length,s=-1,l=r.length,f=Xs(l+c),d=this&&this!==Pn&&this instanceof i?a:t;++s<l;)f[s]=r[s];for(;c--;)f[s++]=arguments[++e];return o(d,u?n:this,f)}var u=e&vt,a=qi(t);return i}function to(t){return function(e,n,r){return r&&"number"!=typeof r&&Ao(e,n,r)&&(n=r=rt),e=gc(e),n===rt?(n=e,e=0):n=gc(n),r=r===rt?e<n?1:-1:gc(r),Xr(e,n,r,t)}}function eo(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=bc(e),n=bc(n)),t(e,n)}}function no(t,e,n,r,i,o,u,a,c,s){var l=e&_t,f=l?u:rt,d=l?rt:u,h=l?o:rt,p=l?rt:o;e|=l?bt:xt,(e&=~(l?xt:bt))&gt||(e&=~(vt|mt));var v=[t,e,i,h,f,p,d,a,c,s],m=n.apply(rt,v);return Fo(t)&&kf(m,v),m.placeholder=r,Ho(m,t,e)}function ro(t){var e=nl[t];return function(t,n){if(t=bc(t),n=null==n?0:Ul(_c(n),292)){var r=(Oc(t)+"e").split("e");return r=(Oc(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}function io(t){return function(e){var n=Of(e);return n==Zt?q(e):n==te?G(e):A(e,t(e))}}function oo(t,e,n,r,i,o,u,a){var c=e&mt;if(!c&&"function"!=typeof t)throw new ul(ut);var s=r?r.length:0;if(s||(e&=~(bt|xt),r=i=rt),u=u===rt?u:zl(_c(u),0),a=a===rt?a:_c(a),s-=i?i.length:0,e&xt){var l=r,f=i;r=i=rt}var d=c?rt:bf(t),h=[t,e,n,r,i,l,f,o,u,a];if(d&&Vo(h,d),t=h[0],e=h[1],n=h[2],r=h[3],i=h[4],a=h[9]=h[9]===rt?c?0:t.length:zl(h[9]-s,0),!a&&e&(_t|yt)&&(e&=~(_t|yt)),e&&e!=vt)p=e==_t||e==yt?Bi(t,e,a):e!=bt&&e!=(vt|bt)||i.length?Zi.apply(rt,h):Qi(t,e,n,r);else var p=zi(t,e,n);return Ho((d?vf:kf)(p,h),t,e)}function uo(t,e,n,r){return t===rt||za(t,sl[n])&&!dl.call(r,n)?e:t}function ao(t,e,n,r,i,o){return tc(t)&&tc(e)&&(o.set(e,t),Ur(t,e,rt,ao,o),o.delete(e)),t}function co(t){return sc(t)?rt:t}function so(t,e,n,r,i,o){var u=n&ht,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var s=o.get(t);if(s&&o.get(e))return s==e;var l=-1,f=!0,d=n&pt?new vn:rt;for(o.set(t,e),o.set(e,t);++l<a;){var h=t[l],p=e[l];if(r)var v=u?r(p,h,l,e,t,o):r(h,p,l,t,e,o);if(v!==rt){if(v)continue;f=!1;break}if(d){if(!g(e,function(t,e){if(!F(d,e)&&(h===t||i(h,t,n,r,o)))return d.push(e)})){f=!1;break}}else if(h!==p&&!i(h,p,n,r,o)){f=!1;break}}return o.delete(t),o.delete(e),f}function lo(t,e,n,r,i,o,u){switch(n){case ae:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ue:return!(t.byteLength!=e.byteLength||!o(new xl(t),new xl(e)));case Ut:case Yt:case Gt:return za(+t,+e);case Bt:return t.name==e.name&&t.message==e.message;case Qt:case ee:return t==e+"";case Zt:var a=q;case te:var c=r&ht;if(a||(a=Z),t.size!=e.size&&!c)return!1;var s=u.get(t);if(s)return s==e;r|=pt,u.set(t,e);var l=so(a(t),a(e),r,i,o,u);return u.delete(t),l;case ne:if(cf)return cf.call(t)==cf.call(e)}return!1}function fo(t,e,n,r,i,o){var u=n&ht,a=po(t),c=a.length;if(c!=po(e).length&&!u)return!1;for(var s=c;s--;){var l=a[s];if(!(u?l in e:dl.call(e,l)))return!1}var f=o.get(t);if(f&&o.get(e))return f==e;var d=!0;o.set(t,e),o.set(e,t);for(var h=u;++s<c;){l=a[s];var p=t[l],v=e[l];if(r)var m=u?r(v,p,l,e,t,o):r(p,v,l,t,e,o);if(!(m===rt?p===v||i(p,v,n,r,o):m)){d=!1;break}h||(h="constructor"==l)}if(d&&!h){var g=t.constructor,_=e.constructor;g!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return o.delete(t),o.delete(e),d}function ho(t){return Cf(Yo(t,rt,su),t+"")}function po(t){return vr(t,Dc,xf)}function vo(t){return vr(t,Nc,wf)}function mo(t){for(var e=t.name+"",n=tf[e],r=dl.call(tf,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function go(t){return(dl.call(n,"placeholder")?n:t).placeholder}function _o(){var t=n.iteratee||Cs;return t=t===Cs?Fr:t,arguments.length?t(arguments[0],arguments[1]):t}function yo(t,e){var n=t.__data__;return $o(e)?n["string"==typeof e?"string":"hash"]:n.map}function bo(t){for(var e=Dc(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Lo(i)]}return e}function xo(t,e){var n=V(t,e);return Pr(n)?n:rt}function wo(t){var e=dl.call(t,Tl),n=t[Tl];try{t[Tl]=rt;var r=!0}catch(t){}var i=vl.call(t);return r&&(e?t[Tl]=n:delete t[Tl]),i}function Oo(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],u=o.size;switch(o.type){case"drop":t+=u;break;case"dropRight":e-=u;break;case"take":e=Ul(e,t+u);break;case"takeRight":t=zl(t,e-u)}}return{start:t,end:e}}function jo(t){var e=t.match(De);return e?e[1].split(Ne):[]}function ko(t,e,n){e=xi(e,t);for(var r=-1,i=e.length,o=!1;++r<i;){var u=Go(e[r]);if(!(o=null!=t&&n(t,u)))break;t=t[u]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&Qa(i)&&Po(u,i)&&(hd(t)||dd(t))}function So(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&dl.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function Co(t){return"function"!=typeof t.constructor||No(t)?{}:lf(Ol(t))}function Mo(t,e,n){var r=t.constructor;switch(e){case ue:return ji(t);case Ut:case Yt:return new r(+t);case ae:return ki(t,n);case ce:case se:case le:case fe:case de:case he:case pe:case ve:case me:return Mi(t,n);case Zt:return new r;case Gt:case ee:return new r(t);case Qt:return Si(t);case te:return new r;case ne:return Ci(t)}}function To(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Fe,"{\n/* [wrapped with "+e+"] */\n")}function Io(t){return hd(t)||dd(t)||!!(Cl&&t&&t[Cl])}function Po(t,e){var n=typeof t;return!!(e=null==e?At:e)&&("number"==n||"symbol"!=n&&He.test(t))&&t>-1&&t%1==0&&t<e}function Ao(t,e,n){if(!tc(n))return!1;var r=typeof e;return!!("number"==r?Ua(n)&&Po(e,n.length):"string"==r&&e in n)&&za(n[e],t)}function Eo(t,e){if(hd(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!dc(t))||(Me.test(t)||!Ce.test(t)||null!=e&&t in rl(e))}function $o(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Fo(t){var e=mo(t),r=n[e];if("function"!=typeof r||!(e in _.prototype))return!1;if(t===r)return!0;var i=bf(r);return!!i&&t===i[0]}function Do(t){return!!pl&&pl in t}function No(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||sl)}function Lo(t){return t===t&&!tc(t)}function Ro(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==rt||t in rl(n)))}}function Vo(t,e){var n=t[1],r=e[1],i=n|r,o=i<(vt|mt|wt),u=r==wt&&n==_t||r==wt&&n==Ot&&t[7].length<=e[8]||r==(wt|Ot)&&e[7].length<=e[8]&&n==_t;if(!o&&!u)return t;r&vt&&(t[2]=e[2],i|=n&vt?0:gt);var a=e[3];if(a){var c=t[3];t[3]=c?Pi(c,a,e[4]):a,t[4]=c?H(t[3],st):e[4]}return a=e[5],a&&(c=t[5],t[5]=c?Ai(c,a,e[6]):a,t[6]=c?H(t[5],st):e[6]),a=e[7],a&&(t[7]=a),r&wt&&(t[8]=null==t[8]?e[8]:Ul(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function zo(t){var e=[];if(null!=t)for(var n in rl(t))e.push(n);return e}function Uo(t){return vl.call(t)}function Yo(t,e,n){return e=zl(e===rt?t.length-1:e,0),function(){for(var r=arguments,i=-1,u=zl(r.length-e,0),a=Xs(u);++i<u;)a[i]=r[e+i];i=-1;for(var c=Xs(e+1);++i<e;)c[i]=r[i];return c[e]=n(a),o(t,this,c)}}function qo(t,e){return e.length<2?t:pr(t,oi(e,0,-1))}function Bo(t,e){for(var n=t.length,r=Ul(e.length,n),i=Ei(t);r--;){var o=e[r];t[r]=Po(o,n)?i[o]:rt}return t}function Ho(t,e,n){var r=e+"";return Cf(t,To(r,Jo(jo(r),n)))}function Wo(t){var e=0,n=0;return function(){var r=Yl(),i=Mt-(r-n);if(n=r,i>0){if(++e>=Ct)return arguments[0]}else e=0;return t.apply(rt,arguments)}}function Zo(t,e){var n=-1,r=t.length,i=r-1;for(e=e===rt?r:e;++n<e;){var o=Jr(n,i),u=t[o];t[o]=t[n],t[n]=u}return t.length=e,t}function Go(t){if("string"==typeof t||dc(t))return t;var e=t+"";return"0"==e&&1/t==-Pt?"-0":e}function Ko(t){if(null!=t){try{return fl.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jo(t,e){return a(Lt,function(n){var r="_."+n[0];e&n[1]&&!f(t,r)&&t.push(r)}),t.sort()}function Xo(t){if(t instanceof _)return t.clone();var e=new i(t.__wrapped__,t.__chain__);return e.__actions__=Ei(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Qo(t,e,n){e=(n?Ao(t,e,n):e===rt)?1:zl(_c(e),0);var r=null==t?0:t.length;if(!r||e<1)return[];for(var i=0,o=0,u=Xs($l(r/e));i<r;)u[o++]=oi(t,i,i+=e);return u}function tu(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i}function eu(){var t=arguments.length;if(!t)return[];for(var e=Xs(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return p(hd(n)?Ei(n):[n],lr(e,1))}function nu(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===rt?1:_c(e),oi(t,e<0?0:e,r)):[]}function ru(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===rt?1:_c(e),e=r-e,oi(t,0,e<0?0:e)):[]}function iu(t,e){return t&&t.length?vi(t,_o(e,3),!0,!0):[]}function ou(t,e){return t&&t.length?vi(t,_o(e,3),!0):[]}function uu(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&Ao(t,e,n)&&(n=0,r=i),cr(t,e,n,r)):[]}function au(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:_c(n);return i<0&&(i=zl(r+i,0)),x(t,_o(e,3),i)}function cu(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==rt&&(i=_c(n),i=n<0?zl(r+i,0):Ul(i,r-1)),x(t,_o(e,3),i,!0)}function su(t){return(null==t?0:t.length)?lr(t,1):[]}function lu(t){return(null==t?0:t.length)?lr(t,Pt):[]}function fu(t,e){return(null==t?0:t.length)?(e=e===rt?1:_c(e),lr(t,e)):[]}function du(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r}function hu(t){return t&&t.length?t[0]:rt}function pu(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:_c(n);return i<0&&(i=zl(r+i,0)),w(t,e,i)}function vu(t){return(null==t?0:t.length)?oi(t,0,-1):[]}function mu(t,e){return null==t?"":Rl.call(t,e)}function gu(t){var e=null==t?0:t.length;return e?t[e-1]:rt}function _u(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==rt&&(i=_c(n),i=i<0?zl(r+i,0):Ul(i,r-1)),e===e?J(t,e,i):x(t,j,i,!0)}function yu(t,e){return t&&t.length?qr(t,_c(e)):rt}function bu(t,e){return t&&t.length&&e&&e.length?Gr(t,e):t}function xu(t,e,n){return t&&t.length&&e&&e.length?Gr(t,e,_o(n,2)):t}function wu(t,e,n){return t&&t.length&&e&&e.length?Gr(t,e,rt,n):t}function Ou(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=_o(e,3);++r<o;){var u=t[r];e(u,r,t)&&(n.push(u),i.push(r))}return Kr(t,i),n}function ju(t){return null==t?t:Hl.call(t)}function ku(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Ao(t,e,n)?(e=0,n=r):(e=null==e?0:_c(e),n=n===rt?r:_c(n)),oi(t,e,n)):[]}function Su(t,e){return ai(t,e)}function Cu(t,e,n){return ci(t,e,_o(n,2))}function Mu(t,e){var n=null==t?0:t.length;if(n){var r=ai(t,e);if(r<n&&za(t[r],e))return r}return-1}function Tu(t,e){return ai(t,e,!0)}function Iu(t,e,n){return ci(t,e,_o(n,2),!0)}function Pu(t,e){if(null==t?0:t.length){var n=ai(t,e,!0)-1;if(za(t[n],e))return n}return-1}function Au(t){return t&&t.length?si(t):[]}function Eu(t,e){return t&&t.length?si(t,_o(e,2)):[]}function $u(t){var e=null==t?0:t.length;return e?oi(t,1,e):[]}function Fu(t,e,n){return t&&t.length?(e=n||e===rt?1:_c(e),oi(t,0,e<0?0:e)):[]}function Du(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===rt?1:_c(e),e=r-e,oi(t,e<0?0:e,r)):[]}function Nu(t,e){return t&&t.length?vi(t,_o(e,3),!1,!0):[]}function Lu(t,e){return t&&t.length?vi(t,_o(e,3)):[]}function Ru(t){return t&&t.length?di(t):[]}function Vu(t,e){return t&&t.length?di(t,_o(e,2)):[]}function zu(t,e){return e="function"==typeof e?e:rt,t&&t.length?di(t,rt,e):[]}function Uu(t){if(!t||!t.length)return[];var e=0;return t=l(t,function(t){if(Ya(t))return e=zl(t.length,e),!0}),P(e,function(e){return h(t,S(e))})}function Yu(t,e){if(!t||!t.length)return[];var n=Uu(t);return null==e?n:h(n,function(t){return o(e,rt,t)})}function qu(t,e){return _i(t||[],e||[],Yn)}function Bu(t,e){return _i(t||[],e||[],ri)}function Hu(t){var e=n(t);return e.__chain__=!0,e}function Wu(t,e){return e(t),t}function Zu(t,e){return e(t)}function Gu(){return Hu(this)}function Ku(){return new i(this.value(),this.__chain__)}function Ju(){this.__values__===rt&&(this.__values__=mc(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?rt:this.__values__[this.__index__++]}}function Xu(){return this}function Qu(t){for(var e,n=this;n instanceof r;){var i=Xo(n);i.__index__=0,i.__values__=rt,e?o.__wrapped__=i:e=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,e}function ta(){var t=this.__wrapped__;if(t instanceof _){var e=t;return this.__actions__.length&&(e=new _(this)),e=e.reverse(),e.__actions__.push({func:Zu,args:[ju],thisArg:rt}),new i(e,this.__chain__)}return this.thru(ju)}function ea(){return mi(this.__wrapped__,this.__actions__)}function na(t,e,n){var r=hd(t)?s:ur;return n&&Ao(t,e,n)&&(e=rt),r(t,_o(e,3))}function ra(t,e){return(hd(t)?l:sr)(t,_o(e,3))}function ia(t,e){return lr(la(t,e),1)}function oa(t,e){return lr(la(t,e),Pt)}function ua(t,e,n){return n=n===rt?1:_c(n),lr(la(t,e),n)}function aa(t,e){return(hd(t)?a:ff)(t,_o(e,3))}function ca(t,e){return(hd(t)?c:df)(t,_o(e,3))}function sa(t,e,n,r){t=Ua(t)?t:Gc(t),n=n&&!r?_c(n):0;var i=t.length;return n<0&&(n=zl(i+n,0)),fc(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&w(t,e,n)>-1}function la(t,e){return(hd(t)?h:Rr)(t,_o(e,3))}function fa(t,e,n,r){return null==t?[]:(hd(e)||(e=null==e?[]:[e]),n=r?rt:n,hd(n)||(n=null==n?[]:[n]),Br(t,e,n))}function da(t,e,n){var r=hd(t)?v:M,i=arguments.length<3;return r(t,_o(e,4),n,i,ff)}function ha(t,e,n){var r=hd(t)?m:M,i=arguments.length<3;return r(t,_o(e,4),n,i,df)}function pa(t,e){return(hd(t)?l:sr)(t,Ma(_o(e,3)))}function va(t){return(hd(t)?An:ei)(t)}function ma(t,e,n){return e=(n?Ao(t,e,n):e===rt)?1:_c(e),(hd(t)?En:ni)(t,e)}function ga(t){return(hd(t)?Fn:ii)(t)}function _a(t){if(null==t)return 0;if(Ua(t))return fc(t)?X(t):t.length;var e=Of(t);return e==Zt||e==te?t.size:Dr(t).length}function ya(t,e,n){var r=hd(t)?g:ui;return n&&Ao(t,e,n)&&(e=rt),r(t,_o(e,3))}function ba(t,e){if("function"!=typeof e)throw new ul(ut);return t=_c(t),function(){if(--t<1)return e.apply(this,arguments)}}function xa(t,e,n){return e=n?rt:e,e=t&&null==e?t.length:e,oo(t,wt,rt,rt,rt,rt,e)}function wa(t,e){var n;if("function"!=typeof e)throw new ul(ut);return t=_c(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=rt),n}}function Oa(t,e,n){e=n?rt:e;var r=oo(t,_t,rt,rt,rt,rt,rt,e);return r.placeholder=Oa.placeholder,r}function ja(t,e,n){e=n?rt:e;var r=oo(t,yt,rt,rt,rt,rt,rt,e);return r.placeholder=ja.placeholder,r}function ka(t,e,n){function r(e){var n=d,r=h;return d=h=rt,_=e,v=t.apply(r,n)}function i(t){return _=t,m=Sf(a,e),y?r(t):v}function o(t){var n=t-g,r=t-_,i=e-n;return b?Ul(i,p-r):i}function u(t){var n=t-g,r=t-_;return g===rt||n>=e||n<0||b&&r>=p}function a(){var t=ed();if(u(t))return c(t);m=Sf(a,o(t))}function c(t){return m=rt,x&&d?r(t):(d=h=rt,v)}function s(){m!==rt&&_f(m),_=0,d=g=h=m=rt}function l(){return m===rt?v:c(ed())}function f(){var t=ed(),n=u(t);if(d=arguments,h=this,g=t,n){if(m===rt)return i(g);if(b)return m=Sf(a,e),r(g)}return m===rt&&(m=Sf(a,e)),v}var d,h,p,v,m,g,_=0,y=!1,b=!1,x=!0;if("function"!=typeof t)throw new ul(ut);return e=bc(e)||0,tc(n)&&(y=!!n.leading,b="maxWait"in n,p=b?zl(bc(n.maxWait)||0,e):p,x="trailing"in n?!!n.trailing:x),f.cancel=s,f.flush=l,f}function Sa(t){return oo(t,jt)}function Ca(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new ul(ut);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var u=t.apply(this,r);return n.cache=o.set(i,u)||o,u};return n.cache=new(Ca.Cache||an),n}function Ma(t){if("function"!=typeof t)throw new ul(ut);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Ta(t){return wa(2,t)}function Ia(t,e){if("function"!=typeof t)throw new ul(ut);return e=e===rt?e:_c(e),ti(t,e)}function Pa(t,e){if("function"!=typeof t)throw new ul(ut);return e=null==e?0:zl(_c(e),0),ti(function(n){var r=n[e],i=wi(n,0,e);return r&&p(i,r),o(t,this,i)})}function Aa(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new ul(ut);return tc(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ka(t,e,{leading:r,maxWait:e,trailing:i})}function Ea(t){return xa(t,1)}function $a(t,e){return ad(bi(e),t)}function Fa(){if(!arguments.length)return[];var t=arguments[0];return hd(t)?t:[t]}function Da(t){return er(t,dt)}function Na(t,e){return e="function"==typeof e?e:rt,er(t,dt,e)}function La(t){return er(t,lt|dt)}function Ra(t,e){return e="function"==typeof e?e:rt,er(t,lt|dt,e)}function Va(t,e){return null==e||rr(t,e,Dc(e))}function za(t,e){return t===e||t!==t&&e!==e}function Ua(t){return null!=t&&Qa(t.length)&&!Ja(t)}function Ya(t){return ec(t)&&Ua(t)}function qa(t){return!0===t||!1===t||ec(t)&&mr(t)==Ut}function Ba(t){return ec(t)&&1===t.nodeType&&!sc(t)}function Ha(t){if(null==t)return!0;if(Ua(t)&&(hd(t)||"string"==typeof t||"function"==typeof t.splice||vd(t)||bd(t)||dd(t)))return!t.length;var e=Of(t);if(e==Zt||e==te)return!t.size;if(No(t))return!Dr(t).length;for(var n in t)if(dl.call(t,n))return!1;return!0}function Wa(t,e){return Cr(t,e)}function Za(t,e,n){n="function"==typeof n?n:rt;var r=n?n(t,e):rt;return r===rt?Cr(t,e,rt,n):!!r}function Ga(t){if(!ec(t))return!1;var e=mr(t);return e==Bt||e==qt||"string"==typeof t.message&&"string"==typeof t.name&&!sc(t)}function Ka(t){return"number"==typeof t&&Ll(t)}function Ja(t){if(!tc(t))return!1;var e=mr(t);return e==Ht||e==Wt||e==zt||e==Xt}function Xa(t){return"number"==typeof t&&t==_c(t)}function Qa(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=At}function tc(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function ec(t){return null!=t&&"object"==typeof t}function nc(t,e){return t===e||Ir(t,e,bo(e))}function rc(t,e,n){return n="function"==typeof n?n:rt,Ir(t,e,bo(e),n)}function ic(t){return cc(t)&&t!=+t}function oc(t){if(jf(t))throw new tl(ot);return Pr(t)}function uc(t){return null===t}function ac(t){return null==t}function cc(t){return"number"==typeof t||ec(t)&&mr(t)==Gt}function sc(t){if(!ec(t)||mr(t)!=Jt)return!1;var e=Ol(t);if(null===e)return!0;var n=dl.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&fl.call(n)==ml}function lc(t){return Xa(t)&&t>=-At&&t<=At}function fc(t){return"string"==typeof t||!hd(t)&&ec(t)&&mr(t)==ee}function dc(t){return"symbol"==typeof t||ec(t)&&mr(t)==ne}function hc(t){return t===rt}function pc(t){return ec(t)&&Of(t)==ie}function vc(t){return ec(t)&&mr(t)==oe}function mc(t){if(!t)return[];if(Ua(t))return fc(t)?Q(t):Ei(t);if(Ml&&t[Ml])return Y(t[Ml]());var e=Of(t);return(e==Zt?q:e==te?Z:Gc)(t)}function gc(t){if(!t)return 0===t?t:0;if((t=bc(t))===Pt||t===-Pt){return(t<0?-1:1)*Et}return t===t?t:0}function _c(t){var e=gc(t),n=e%1;return e===e?n?e-n:e:0}function yc(t){return t?tr(_c(t),0,Ft):0}function bc(t){if("number"==typeof t)return t;if(dc(t))return $t;if(tc(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=tc(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ae,"");var n=Ye.test(t);return n||Be.test(t)?Mn(t.slice(2),n?2:8):Ue.test(t)?$t:+t}function xc(t){return $i(t,Nc(t))}function wc(t){return t?tr(_c(t),-At,At):0===t?t:0}function Oc(t){return null==t?"":fi(t)}function jc(t,e){var n=lf(t);return null==e?n:Kn(n,e)}function kc(t,e){return b(t,_o(e,3),fr)}function Sc(t,e){return b(t,_o(e,3),dr)}function Cc(t,e){return null==t?t:hf(t,_o(e,3),Nc)}function Mc(t,e){return null==t?t:pf(t,_o(e,3),Nc)}function Tc(t,e){return t&&fr(t,_o(e,3))}function Ic(t,e){return t&&dr(t,_o(e,3))}function Pc(t){return null==t?[]:hr(t,Dc(t))}function Ac(t){return null==t?[]:hr(t,Nc(t))}function Ec(t,e,n){var r=null==t?rt:pr(t,e);return r===rt?n:r}function $c(t,e){return null!=t&&ko(t,e,_r)}function Fc(t,e){return null!=t&&ko(t,e,yr)}function Dc(t){return Ua(t)?In(t):Dr(t)}function Nc(t){return Ua(t)?In(t,!0):Nr(t)}function Lc(t,e){var n={};return e=_o(e,3),fr(t,function(t,r,i){Xn(n,e(t,r,i),t)}),n}function Rc(t,e){var n={};return e=_o(e,3),fr(t,function(t,r,i){Xn(n,r,e(t,r,i))}),n}function Vc(t,e){return zc(t,Ma(_o(e)))}function zc(t,e){if(null==t)return{};var n=h(vo(t),function(t){return[t]});return e=_o(e),Wr(t,n,function(t,n){return e(t,n[0])})}function Uc(t,e,n){e=xi(e,t);var r=-1,i=e.length;for(i||(i=1,t=rt);++r<i;){var o=null==t?rt:t[Go(e[r])];o===rt&&(r=i,o=n),t=Ja(o)?o.call(t):o}return t}function Yc(t,e,n){return null==t?t:ri(t,e,n)}function qc(t,e,n,r){return r="function"==typeof r?r:rt,null==t?t:ri(t,e,n,r)}function Bc(t,e,n){var r=hd(t),i=r||vd(t)||bd(t);if(e=_o(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:tc(t)&&Ja(o)?lf(Ol(t)):{}}return(i?a:fr)(t,function(t,r,i){return e(n,t,r,i)}),n}function Hc(t,e){return null==t||hi(t,e)}function Wc(t,e,n){return null==t?t:pi(t,e,bi(n))}function Zc(t,e,n,r){return r="function"==typeof r?r:rt,null==t?t:pi(t,e,bi(n),r)}function Gc(t){return null==t?[]:$(t,Dc(t))}function Kc(t){return null==t?[]:$(t,Nc(t))}function Jc(t,e,n){return n===rt&&(n=e,e=rt),n!==rt&&(n=bc(n),n=n===n?n:0),e!==rt&&(e=bc(e),e=e===e?e:0),tr(bc(t),e,n)}function Xc(t,e,n){return e=gc(e),n===rt?(n=e,e=0):n=gc(n),t=bc(t),br(t,e,n)}function Qc(t,e,n){if(n&&"boolean"!=typeof n&&Ao(t,e,n)&&(e=n=rt),n===rt&&("boolean"==typeof e?(n=e,e=rt):"boolean"==typeof t&&(n=t,t=rt)),t===rt&&e===rt?(t=0,e=1):(t=gc(t),e===rt?(e=t,t=0):e=gc(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=Bl();return Ul(t+i*(e-t+Cn("1e-"+((i+"").length-1))),e)}return Jr(t,e)}function ts(t){return Hd(Oc(t).toLowerCase())}function es(t){return(t=Oc(t))&&t.replace(We,qn).replace(pn,"")}function ns(t,e,n){t=Oc(t),e=fi(e);var r=t.length;n=n===rt?r:tr(_c(n),0,r);var i=n;return(n-=e.length)>=0&&t.slice(n,i)==e}function rs(t){return t=Oc(t),t&&Oe.test(t)?t.replace(xe,Bn):t}function is(t){return t=Oc(t),t&&Pe.test(t)?t.replace(Ie,"\\$&"):t}function os(t,e,n){t=Oc(t),e=_c(e);var r=e?X(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Xi(Fl(i),n)+t+Xi($l(i),n)}function us(t,e,n){t=Oc(t),e=_c(e);var r=e?X(t):0;return e&&r<e?t+Xi(e-r,n):t}function as(t,e,n){t=Oc(t),e=_c(e);var r=e?X(t):0;return e&&r<e?Xi(e-r,n)+t:t}function cs(t,e,n){return n||null==e?e=0:e&&(e=+e),ql(Oc(t).replace(Ee,""),e||0)}function ss(t,e,n){return e=(n?Ao(t,e,n):e===rt)?1:_c(e),Qr(Oc(t),e)}function ls(){var t=arguments,e=Oc(t[0]);return t.length<3?e:e.replace(t[1],t[2])}function fs(t,e,n){return n&&"number"!=typeof n&&Ao(t,e,n)&&(e=n=rt),(n=n===rt?Ft:n>>>0)?(t=Oc(t),t&&("string"==typeof e||null!=e&&!_d(e))&&!(e=fi(e))&&z(t)?wi(Q(t),0,n):t.split(e,n)):[]}function ds(t,e,n){return t=Oc(t),n=null==n?0:tr(_c(n),0,t.length),e=fi(e),t.slice(n,n+e.length)==e}function hs(t,e,r){var i=n.templateSettings;r&&Ao(t,e,r)&&(e=rt),t=Oc(t),e=kd({},e,i,uo);var o,u,a=kd({},e.imports,i.imports,uo),c=Dc(a),s=$(a,c),l=0,f=e.interpolate||Ze,d="__p += '",h=il((e.escape||Ze).source+"|"+f.source+"|"+(f===Se?Ve:Ze).source+"|"+(e.evaluate||Ze).source+"|$","g"),p="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++bn+"]")+"\n";t.replace(h,function(e,n,r,i,a,c){return r||(r=i),d+=t.slice(l,c).replace(Ge,R),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),a&&(u=!0,d+="';\n"+a+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=c+e.length,e}),d+="';\n";var v=e.variable;v||(d="with (obj) {\n"+d+"\n}\n"),d=(u?d.replace(ge,""):d).replace(_e,"$1").replace(ye,"$1;"),d="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Wd(function(){return el(c,p+"return "+d).apply(rt,s)});if(m.source=d,Ga(m))throw m;return m}function ps(t){return Oc(t).toLowerCase()}function vs(t){return Oc(t).toUpperCase()}function ms(t,e,n){if((t=Oc(t))&&(n||e===rt))return t.replace(Ae,"");if(!t||!(e=fi(e)))return t;var r=Q(t),i=Q(e);return wi(r,D(r,i),N(r,i)+1).join("")}function gs(t,e,n){if((t=Oc(t))&&(n||e===rt))return t.replace($e,"");if(!t||!(e=fi(e)))return t;var r=Q(t);return wi(r,0,N(r,Q(e))+1).join("")}function _s(t,e,n){if((t=Oc(t))&&(n||e===rt))return t.replace(Ee,"");if(!t||!(e=fi(e)))return t;var r=Q(t);return wi(r,D(r,Q(e))).join("")}function ys(t,e){var n=kt,r=St;if(tc(e)){var i="separator"in e?e.separator:i;n="length"in e?_c(e.length):n,r="omission"in e?fi(e.omission):r}t=Oc(t);var o=t.length;if(z(t)){var u=Q(t);o=u.length}if(n>=o)return t;var a=n-X(r);if(a<1)return r;var c=u?wi(u,0,a).join(""):t.slice(0,a);if(i===rt)return c+r;if(u&&(a+=c.length-a),_d(i)){if(t.slice(a).search(i)){var s,l=c;for(i.global||(i=il(i.source,Oc(ze.exec(i))+"g")),i.lastIndex=0;s=i.exec(l);)var f=s.index;c=c.slice(0,f===rt?a:f)}}else if(t.indexOf(fi(i),a)!=a){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r}function bs(t){return t=Oc(t),t&&we.test(t)?t.replace(be,Hn):t}function xs(t,e,n){return t=Oc(t),e=n?rt:e,e===rt?U(t)?nt(t):y(t):t.match(e)||[]}function ws(t){var e=null==t?0:t.length,n=_o();return t=e?h(t,function(t){if("function"!=typeof t[1])throw new ul(ut);return[n(t[0]),t[1]]}):[],ti(function(n){for(var r=-1;++r<e;){var i=t[r];if(o(i[0],this,n))return o(i[1],this,n)}})}function Os(t){return nr(er(t,lt))}function js(t){return function(){return t}}function ks(t,e){return null==t||t!==t?e:t}function Ss(t){return t}function Cs(t){return Fr("function"==typeof t?t:er(t,lt))}function Ms(t){return Vr(er(t,lt))}function Ts(t,e){return zr(t,er(e,lt))}function Is(t,e,n){var r=Dc(e),i=hr(e,r);null!=n||tc(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=hr(e,Dc(e)));var o=!(tc(n)&&"chain"in n&&!n.chain),u=Ja(t);return a(i,function(n){var r=e[n];t[n]=r,u&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__);return(n.__actions__=Ei(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,p([this.value()],arguments))})}),t}function Ps(){return Pn._===this&&(Pn._=gl),this}function As(){}function Es(t){return t=_c(t),ti(function(e){return qr(e,t)})}function $s(t){return Eo(t)?S(Go(t)):Zr(t)}function Fs(t){return function(e){return null==t?rt:pr(t,e)}}function Ds(){return[]}function Ns(){return!1}function Ls(){return{}}function Rs(){return""}function Vs(){return!0}function zs(t,e){if((t=_c(t))<1||t>At)return[];var n=Ft,r=Ul(t,Ft);e=_o(e),t-=Ft;for(var i=P(r,e);++n<t;)e(n);return i}function Us(t){return hd(t)?h(t,Go):dc(t)?[t]:Ei(Mf(Oc(t)))}function Ys(t){var e=++hl;return Oc(t)+e}function qs(t){return t&&t.length?ar(t,Ss,gr):rt}function Bs(t,e){return t&&t.length?ar(t,_o(e,2),gr):rt}function Hs(t){return k(t,Ss)}function Ws(t,e){return k(t,_o(e,2))}function Zs(t){return t&&t.length?ar(t,Ss,Lr):rt}function Gs(t,e){return t&&t.length?ar(t,_o(e,2),Lr):rt}function Ks(t){return t&&t.length?I(t,Ss):0}function Js(t,e){return t&&t.length?I(t,_o(e,2)):0}e=null==e?Pn:Wn.defaults(Pn.Object(),e,Wn.pick(Pn,yn));var Xs=e.Array,Qs=e.Date,tl=e.Error,el=e.Function,nl=e.Math,rl=e.Object,il=e.RegExp,ol=e.String,ul=e.TypeError,al=Xs.prototype,cl=el.prototype,sl=rl.prototype,ll=e["__core-js_shared__"],fl=cl.toString,dl=sl.hasOwnProperty,hl=0,pl=function(){var t=/[^.]+$/.exec(ll&&ll.keys&&ll.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),vl=sl.toString,ml=fl.call(rl),gl=Pn._,_l=il("^"+fl.call(dl).replace(Ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yl=$n?e.Buffer:rt,bl=e.Symbol,xl=e.Uint8Array,wl=yl?yl.allocUnsafe:rt,Ol=B(rl.getPrototypeOf,rl),jl=rl.create,kl=sl.propertyIsEnumerable,Sl=al.splice,Cl=bl?bl.isConcatSpreadable:rt,Ml=bl?bl.iterator:rt,Tl=bl?bl.toStringTag:rt,Il=function(){try{var t=xo(rl,"defineProperty");return t({},"",{}),t}catch(t){}}(),Pl=e.clearTimeout!==Pn.clearTimeout&&e.clearTimeout,Al=Qs&&Qs.now!==Pn.Date.now&&Qs.now,El=e.setTimeout!==Pn.setTimeout&&e.setTimeout,$l=nl.ceil,Fl=nl.floor,Dl=rl.getOwnPropertySymbols,Nl=yl?yl.isBuffer:rt,Ll=e.isFinite,Rl=al.join,Vl=B(rl.keys,rl),zl=nl.max,Ul=nl.min,Yl=Qs.now,ql=e.parseInt,Bl=nl.random,Hl=al.reverse,Wl=xo(e,"DataView"),Zl=xo(e,"Map"),Gl=xo(e,"Promise"),Kl=xo(e,"Set"),Jl=xo(e,"WeakMap"),Xl=xo(rl,"create"),Ql=Jl&&new Jl,tf={},ef=Ko(Wl),nf=Ko(Zl),rf=Ko(Gl),of=Ko(Kl),uf=Ko(Jl),af=bl?bl.prototype:rt,cf=af?af.valueOf:rt,sf=af?af.toString:rt,lf=function(){function t(){}return function(e){if(!tc(e))return{};if(jl)return jl(e);t.prototype=e;var n=new t;return t.prototype=rt,n}}();n.templateSettings={escape:je,evaluate:ke,interpolate:Se,variable:"",imports:{_:n}},n.prototype=r.prototype,n.prototype.constructor=n,i.prototype=lf(r.prototype),i.prototype.constructor=i,_.prototype=lf(r.prototype),_.prototype.constructor=_,et.prototype.clear=Le,et.prototype.delete=Ke,et.prototype.get=Je,et.prototype.has=Xe,et.prototype.set=Qe,tn.prototype.clear=en,tn.prototype.delete=nn,tn.prototype.get=rn,tn.prototype.has=on,tn.prototype.set=un,an.prototype.clear=cn,an.prototype.delete=sn,an.prototype.get=ln,an.prototype.has=fn,an.prototype.set=dn,vn.prototype.add=vn.prototype.push=mn,vn.prototype.has=gn,_n.prototype.clear=On,_n.prototype.delete=jn,_n.prototype.get=kn,_n.prototype.has=Sn,_n.prototype.set=Tn;var ff=Ri(fr),df=Ri(dr,!0),hf=Vi(),pf=Vi(!0),vf=Ql?function(t,e){return Ql.set(t,e),t}:Ss,mf=Il?function(t,e){return Il(t,"toString",{configurable:!0,enumerable:!1,value:js(e),writable:!0})}:Ss,gf=ti,_f=Pl||function(t){return Pn.clearTimeout(t)},yf=Kl&&1/Z(new Kl([,-0]))[1]==Pt?function(t){return new Kl(t)}:As,bf=Ql?function(t){return Ql.get(t)}:As,xf=Dl?function(t){return null==t?[]:(t=rl(t),l(Dl(t),function(e){return kl.call(t,e)}))}:Ds,wf=Dl?function(t){for(var e=[];t;)p(e,xf(t)),t=Ol(t);return e}:Ds,Of=mr;(Wl&&Of(new Wl(new ArrayBuffer(1)))!=ae||Zl&&Of(new Zl)!=Zt||Gl&&"[object Promise]"!=Of(Gl.resolve())||Kl&&Of(new Kl)!=te||Jl&&Of(new Jl)!=ie)&&(Of=function(t){var e=mr(t),n=e==Jt?t.constructor:rt,r=n?Ko(n):"";if(r)switch(r){case ef:return ae;case nf:return Zt;case rf:return"[object Promise]";case of:return te;case uf:return ie}return e});var jf=ll?Ja:Ns,kf=Wo(vf),Sf=El||function(t,e){return Pn.setTimeout(t,e)},Cf=Wo(mf),Mf=function(t){var e=Ca(t,function(t){return n.size===ct&&n.clear(),t}),n=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Te,function(t,n,r,i){e.push(r?i.replace(Re,"$1"):n||t)}),e}),Tf=ti(function(t,e){return Ya(t)?or(t,lr(e,1,Ya,!0)):[]}),If=ti(function(t,e){var n=gu(e);return Ya(n)&&(n=rt),Ya(t)?or(t,lr(e,1,Ya,!0),_o(n,2)):[]}),Pf=ti(function(t,e){var n=gu(e);return Ya(n)&&(n=rt),Ya(t)?or(t,lr(e,1,Ya,!0),rt,n):[]}),Af=ti(function(t){var e=h(t,yi);return e.length&&e[0]===t[0]?xr(e):[]}),Ef=ti(function(t){var e=gu(t),n=h(t,yi);return e===gu(n)?e=rt:n.pop(),n.length&&n[0]===t[0]?xr(n,_o(e,2)):[]}),$f=ti(function(t){var e=gu(t),n=h(t,yi);return e="function"==typeof e?e:rt,e&&n.pop(),n.length&&n[0]===t[0]?xr(n,rt,e):[]}),Ff=ti(bu),Df=ho(function(t,e){var n=null==t?0:t.length,r=Qn(t,e);return Kr(t,h(e,function(t){return Po(t,n)?+t:t}).sort(Ti)),r}),Nf=ti(function(t){return di(lr(t,1,Ya,!0))}),Lf=ti(function(t){var e=gu(t);return Ya(e)&&(e=rt),di(lr(t,1,Ya,!0),_o(e,2))}),Rf=ti(function(t){var e=gu(t);return e="function"==typeof e?e:rt,di(lr(t,1,Ya,!0),rt,e)}),Vf=ti(function(t,e){return Ya(t)?or(t,e):[]}),zf=ti(function(t){return gi(l(t,Ya))}),Uf=ti(function(t){var e=gu(t);return Ya(e)&&(e=rt),gi(l(t,Ya),_o(e,2))}),Yf=ti(function(t){var e=gu(t);return e="function"==typeof e?e:rt,gi(l(t,Ya),rt,e)}),qf=ti(Uu),Bf=ti(function(t){var e=t.length,n=e>1?t[e-1]:rt;return n="function"==typeof n?(t.pop(),n):rt,Yu(t,n)}),Hf=ho(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return Qn(e,t)};return!(e>1||this.__actions__.length)&&r instanceof _&&Po(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Zu,args:[o],thisArg:rt}),new i(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(rt),t})):this.thru(o)}),Wf=Ni(function(t,e,n){dl.call(t,n)?++t[n]:Xn(t,n,1)}),Zf=Hi(au),Gf=Hi(cu),Kf=Ni(function(t,e,n){dl.call(t,n)?t[n].push(e):Xn(t,n,[e])}),Jf=ti(function(t,e,n){var r=-1,i="function"==typeof e,u=Ua(t)?Xs(t.length):[];return ff(t,function(t){u[++r]=i?o(e,t,n):Or(t,e,n)}),u}),Xf=Ni(function(t,e,n){Xn(t,n,e)}),Qf=Ni(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),td=ti(function(t,e){if(null==t)return[];var n=e.length;return n>1&&Ao(t,e[0],e[1])?e=[]:n>2&&Ao(e[0],e[1],e[2])&&(e=[e[0]]),Br(t,lr(e,1),[])}),ed=Al||function(){return Pn.Date.now()},nd=ti(function(t,e,n){var r=vt;if(n.length){var i=H(n,go(nd));r|=bt}return oo(t,r,e,n,i)}),rd=ti(function(t,e,n){var r=vt|mt;if(n.length){var i=H(n,go(rd));r|=bt}return oo(e,r,t,n,i)}),id=ti(function(t,e){return ir(t,1,e)}),od=ti(function(t,e,n){return ir(t,bc(e)||0,n)});Ca.Cache=an;var ud=gf(function(t,e){e=1==e.length&&hd(e[0])?h(e[0],E(_o())):h(lr(e,1),E(_o()));var n=e.length;return ti(function(r){for(var i=-1,u=Ul(r.length,n);++i<u;)r[i]=e[i].call(this,r[i]);return o(t,this,r)})}),ad=ti(function(t,e){var n=H(e,go(ad));return oo(t,bt,rt,e,n)}),cd=ti(function(t,e){var n=H(e,go(cd));return oo(t,xt,rt,e,n)}),sd=ho(function(t,e){return oo(t,Ot,rt,rt,rt,e)}),ld=eo(gr),fd=eo(function(t,e){return t>=e}),dd=jr(function(){return arguments}())?jr:function(t){return ec(t)&&dl.call(t,"callee")&&!kl.call(t,"callee")},hd=Xs.isArray,pd=Nn?E(Nn):kr,vd=Nl||Ns,md=Ln?E(Ln):Sr,gd=Rn?E(Rn):Tr,_d=Vn?E(Vn):Ar,yd=zn?E(zn):Er,bd=Un?E(Un):$r,xd=eo(Lr),wd=eo(function(t,e){return t<=e}),Od=Li(function(t,e){if(No(e)||Ua(e))return void $i(e,Dc(e),t);for(var n in e)dl.call(e,n)&&Yn(t,n,e[n])}),jd=Li(function(t,e){$i(e,Nc(e),t)}),kd=Li(function(t,e,n,r){$i(e,Nc(e),t,r)}),Sd=Li(function(t,e,n,r){$i(e,Dc(e),t,r)}),Cd=ho(Qn),Md=ti(function(t,e){t=rl(t);var n=-1,r=e.length,i=r>2?e[2]:rt;for(i&&Ao(e[0],e[1],i)&&(r=1);++n<r;)for(var o=e[n],u=Nc(o),a=-1,c=u.length;++a<c;){var s=u[a],l=t[s];(l===rt||za(l,sl[s])&&!dl.call(t,s))&&(t[s]=o[s])}return t}),Td=ti(function(t){return t.push(rt,ao),o($d,rt,t)}),Id=Gi(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=vl.call(e)),t[e]=n},js(Ss)),Pd=Gi(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=vl.call(e)),dl.call(t,e)?t[e].push(n):t[e]=[n]},_o),Ad=ti(Or),Ed=Li(function(t,e,n){Ur(t,e,n)}),$d=Li(function(t,e,n,r){Ur(t,e,n,r)}),Fd=ho(function(t,e){var n={};if(null==t)return n;var r=!1;e=h(e,function(e){return e=xi(e,t),r||(r=e.length>1),e}),$i(t,vo(t),n),r&&(n=er(n,lt|ft|dt,co));for(var i=e.length;i--;)hi(n,e[i]);return n}),Dd=ho(function(t,e){return null==t?{}:Hr(t,e)}),Nd=io(Dc),Ld=io(Nc),Rd=Yi(function(t,e,n){return e=e.toLowerCase(),t+(n?ts(e):e)}),Vd=Yi(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),zd=Yi(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),Ud=Ui("toLowerCase"),Yd=Yi(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),qd=Yi(function(t,e,n){return t+(n?" ":"")+Hd(e)}),Bd=Yi(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),Hd=Ui("toUpperCase"),Wd=ti(function(t,e){try{return o(t,rt,e)}catch(t){return Ga(t)?t:new tl(t)}}),Zd=ho(function(t,e){return a(e,function(e){e=Go(e),Xn(t,e,nd(t[e],t))}),t}),Gd=Wi(),Kd=Wi(!0),Jd=ti(function(t,e){return function(n){return Or(n,t,e)}}),Xd=ti(function(t,e){return function(n){return Or(t,n,e)}}),Qd=Ji(h),th=Ji(s),eh=Ji(g),nh=to(),rh=to(!0),ih=Ki(function(t,e){return t+e},0),oh=ro("ceil"),uh=Ki(function(t,e){return t/e},1),ah=ro("floor"),ch=Ki(function(t,e){return t*e},1),sh=ro("round"),lh=Ki(function(t,e){return t-e},0);return n.after=ba,n.ary=xa,n.assign=Od,n.assignIn=jd,n.assignInWith=kd,n.assignWith=Sd,n.at=Cd,n.before=wa,n.bind=nd,n.bindAll=Zd,n.bindKey=rd,n.castArray=Fa,n.chain=Hu,n.chunk=Qo,n.compact=tu,n.concat=eu,n.cond=ws,n.conforms=Os,n.constant=js,n.countBy=Wf,n.create=jc,n.curry=Oa,n.curryRight=ja,n.debounce=ka,n.defaults=Md,n.defaultsDeep=Td,n.defer=id,n.delay=od,n.difference=Tf,n.differenceBy=If,n.differenceWith=Pf,n.drop=nu,n.dropRight=ru,n.dropRightWhile=iu,n.dropWhile=ou,n.fill=uu,n.filter=ra,n.flatMap=ia,n.flatMapDeep=oa,n.flatMapDepth=ua,n.flatten=su,n.flattenDeep=lu,n.flattenDepth=fu,n.flip=Sa,n.flow=Gd,n.flowRight=Kd,n.fromPairs=du,n.functions=Pc,n.functionsIn=Ac,n.groupBy=Kf,n.initial=vu,n.intersection=Af,n.intersectionBy=Ef,n.intersectionWith=$f,n.invert=Id,n.invertBy=Pd,n.invokeMap=Jf,n.iteratee=Cs,n.keyBy=Xf,n.keys=Dc,n.keysIn=Nc,n.map=la,n.mapKeys=Lc,n.mapValues=Rc,n.matches=Ms,n.matchesProperty=Ts,n.memoize=Ca,n.merge=Ed,n.mergeWith=$d,n.method=Jd,n.methodOf=Xd,n.mixin=Is,n.negate=Ma,n.nthArg=Es,n.omit=Fd,n.omitBy=Vc,n.once=Ta,n.orderBy=fa,n.over=Qd,n.overArgs=ud,n.overEvery=th,n.overSome=eh,n.partial=ad,n.partialRight=cd,n.partition=Qf,n.pick=Dd,n.pickBy=zc,n.property=$s,n.propertyOf=Fs,n.pull=Ff,n.pullAll=bu,n.pullAllBy=xu,n.pullAllWith=wu,n.pullAt=Df,n.range=nh,n.rangeRight=rh,n.rearg=sd,n.reject=pa,n.remove=Ou,n.rest=Ia,n.reverse=ju,n.sampleSize=ma,n.set=Yc,n.setWith=qc,n.shuffle=ga,n.slice=ku,n.sortBy=td,n.sortedUniq=Au,n.sortedUniqBy=Eu,n.split=fs,n.spread=Pa,n.tail=$u,n.take=Fu,n.takeRight=Du,n.takeRightWhile=Nu,n.takeWhile=Lu,n.tap=Wu,n.throttle=Aa,n.thru=Zu,n.toArray=mc,n.toPairs=Nd,n.toPairsIn=Ld,n.toPath=Us,n.toPlainObject=xc,n.transform=Bc,n.unary=Ea,n.union=Nf,n.unionBy=Lf,n.unionWith=Rf,n.uniq=Ru,n.uniqBy=Vu,n.uniqWith=zu,n.unset=Hc,n.unzip=Uu,n.unzipWith=Yu,n.update=Wc,n.updateWith=Zc,n.values=Gc,n.valuesIn=Kc,n.without=Vf,n.words=xs,n.wrap=$a,n.xor=zf,n.xorBy=Uf,n.xorWith=Yf,n.zip=qf,n.zipObject=qu,n.zipObjectDeep=Bu,n.zipWith=Bf,n.entries=Nd,n.entriesIn=Ld,n.extend=jd,n.extendWith=kd,Is(n,n),n.add=ih,n.attempt=Wd,n.camelCase=Rd,n.capitalize=ts,n.ceil=oh,n.clamp=Jc,n.clone=Da,n.cloneDeep=La,n.cloneDeepWith=Ra,n.cloneWith=Na,n.conformsTo=Va,n.deburr=es,n.defaultTo=ks,n.divide=uh,n.endsWith=ns,n.eq=za,n.escape=rs,n.escapeRegExp=is,n.every=na,n.find=Zf,n.findIndex=au,n.findKey=kc,n.findLast=Gf,n.findLastIndex=cu,n.findLastKey=Sc,n.floor=ah,n.forEach=aa,n.forEachRight=ca,n.forIn=Cc,n.forInRight=Mc,n.forOwn=Tc,n.forOwnRight=Ic,n.get=Ec,n.gt=ld,n.gte=fd,n.has=$c,n.hasIn=Fc,n.head=hu,n.identity=Ss,n.includes=sa,n.indexOf=pu,n.inRange=Xc,n.invoke=Ad,n.isArguments=dd,n.isArray=hd,n.isArrayBuffer=pd,n.isArrayLike=Ua,n.isArrayLikeObject=Ya,n.isBoolean=qa,n.isBuffer=vd,n.isDate=md,n.isElement=Ba,n.isEmpty=Ha,n.isEqual=Wa,n.isEqualWith=Za,n.isError=Ga,n.isFinite=Ka,n.isFunction=Ja,n.isInteger=Xa,n.isLength=Qa,n.isMap=gd,n.isMatch=nc,n.isMatchWith=rc,n.isNaN=ic,n.isNative=oc,n.isNil=ac,n.isNull=uc,n.isNumber=cc,n.isObject=tc,n.isObjectLike=ec,n.isPlainObject=sc,n.isRegExp=_d,n.isSafeInteger=lc,n.isSet=yd,n.isString=fc,n.isSymbol=dc,n.isTypedArray=bd,n.isUndefined=hc,n.isWeakMap=pc,n.isWeakSet=vc,n.join=mu,n.kebabCase=Vd,n.last=gu,n.lastIndexOf=_u,n.lowerCase=zd,n.lowerFirst=Ud,n.lt=xd,n.lte=wd,n.max=qs,n.maxBy=Bs,n.mean=Hs,n.meanBy=Ws,n.min=Zs,n.minBy=Gs,n.stubArray=Ds,n.stubFalse=Ns,n.stubObject=Ls,n.stubString=Rs,n.stubTrue=Vs,n.multiply=ch,n.nth=yu,n.noConflict=Ps,n.noop=As,n.now=ed,n.pad=os,n.padEnd=us,n.padStart=as,n.parseInt=cs,n.random=Qc,n.reduce=da,n.reduceRight=ha,n.repeat=ss,n.replace=ls,n.result=Uc,n.round=sh,n.runInContext=t,n.sample=va,n.size=_a,n.snakeCase=Yd,n.some=ya,n.sortedIndex=Su,n.sortedIndexBy=Cu,n.sortedIndexOf=Mu,n.sortedLastIndex=Tu,n.sortedLastIndexBy=Iu,n.sortedLastIndexOf=Pu,n.startCase=qd,n.startsWith=ds,n.subtract=lh,n.sum=Ks,n.sumBy=Js,n.template=hs,n.times=zs,n.toFinite=gc,n.toInteger=_c,n.toLength=yc,n.toLower=ps,n.toNumber=bc,n.toSafeInteger=wc,n.toString=Oc,n.toUpper=vs,n.trim=ms,n.trimEnd=gs,n.trimStart=_s,n.truncate=ys,n.unescape=bs,n.uniqueId=Ys,n.upperCase=Bd,n.upperFirst=Hd,n.each=aa,n.eachRight=ca,n.first=hu,Is(n,function(){var t={};return fr(n,function(e,r){dl.call(n.prototype,r)||(t[r]=e)}),t}(),{chain:!1}),n.VERSION="4.17.10",a(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){n[t].placeholder=n}),a(["drop","take"],function(t,e){_.prototype[t]=function(n){n=n===rt?1:zl(_c(n),0);var r=this.__filtered__&&!e?new _(this):this.clone();return r.__filtered__?r.__takeCount__=Ul(n,r.__takeCount__):r.__views__.push({size:Ul(n,Ft),type:t+(r.__dir__<0?"Right":"")}),r},_.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),a(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==Tt||3==n;_.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:_o(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),a(["head","last"],function(t,e){var n="take"+(e?"Right":"");_.prototype[t]=function(){return this[n](1).value()[0]}}),a(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");_.prototype[t]=function(){return this.__filtered__?new _(this):this[n](1)}}),_.prototype.compact=function(){return this.filter(Ss)},_.prototype.find=function(t){return this.filter(t).head()},_.prototype.findLast=function(t){return this.reverse().find(t)},_.prototype.invokeMap=ti(function(t,e){return"function"==typeof t?new _(this):this.map(function(n){return Or(n,t,e)})}),_.prototype.reject=function(t){return this.filter(Ma(_o(t)))},_.prototype.slice=function(t,e){t=_c(t);var n=this;return n.__filtered__&&(t>0||e<0)?new _(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==rt&&(e=_c(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},_.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},_.prototype.toArray=function(){return this.take(Ft)},fr(_.prototype,function(t,e){var r=/^(?:filter|find|map|reject)|While$/.test(e),o=/^(?:head|last)$/.test(e),u=n[o?"take"+("last"==e?"Right":""):e],a=o||/^find/.test(e);u&&(n.prototype[e]=function(){var e=this.__wrapped__,c=o?[1]:arguments,s=e instanceof _,l=c[0],f=s||hd(e),d=function(t){var e=u.apply(n,p([t],c));return o&&h?e[0]:e};f&&r&&"function"==typeof l&&1!=l.length&&(s=f=!1);var h=this.__chain__,v=!!this.__actions__.length,m=a&&!h,g=s&&!v;if(!a&&f){e=g?e:new _(this);var y=t.apply(e,c);return y.__actions__.push({func:Zu,args:[d],thisArg:rt}),new i(y,h)}return m&&g?t.apply(this,c):(y=this.thru(d),m?o?y.value()[0]:y.value():y)})}),a(["pop","push","shift","sort","splice","unshift"],function(t){var e=al[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);n.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var n=this.value();return e.apply(hd(n)?n:[],t)}return this[r](function(n){return e.apply(hd(n)?n:[],t)})}}),fr(_.prototype,function(t,e){var r=n[e];if(r){var i=r.name+"";(tf[i]||(tf[i]=[])).push({name:e,func:r})}}),tf[Zi(rt,mt).name]=[{name:"wrapper",func:rt}],_.prototype.clone=C,_.prototype.reverse=K,_.prototype.value=tt,n.prototype.at=Hf,n.prototype.chain=Gu,n.prototype.commit=Ku,n.prototype.next=Ju,n.prototype.plant=Qu,n.prototype.reverse=ta,n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=ea,n.prototype.first=n.prototype.head,Ml&&(n.prototype[Ml]=Xu),n}();Pn._=Wn,(i=function(){return Wn}.call(e,n,e,r))!==rt&&(r.exports=i)}).call(this)}).call(e,n(68),n(76)(t))},function(t,e,n){function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./fieldCheckbox.vue":196,"./fieldChecklist.vue":214,"./fieldInput.vue":218,"./fieldLabel.vue":221,"./fieldRadios.vue":224,"./fieldSelect.vue":227,"./fieldSubmit.vue":234,"./fieldTextArea.vue":241,"./fieldUpload.vue":244};r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=195},function(t,e,n){"use strict";function r(t){n(197)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(81),o=n(213),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){function r(t){var e=++o;return i(t)+e}var i=n(67),o=0;t.exports=r},function(t,e,n){var r=n(27),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){t.exports={default:n(201),__esModule:!0}},function(t,e,n){n(202),t.exports=n(3).Object.keys},function(t,e,n){var r=n(39),i=n(35);n(203)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(11),i=n(3),o=n(20);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){function r(t){return"number"==typeof t&&o(t)}var i=n(27),o=i.isFinite;t.exports=r},function(t,e,n){function r(t){return"number"==typeof t&&t==i(t)}var i=n(85);t.exports=r},function(t,e,n){function r(t){if(!t)return 0===t?t:0;if((t=i(t))===o||t===-o){return(t<0?-1:1)*u}return t===t?t:0}var i=n(83),o=1/0,u=1.7976931348623157e308;t.exports=r},function(t,e,n){function r(t,e){return u(o(t,e,i),t+"")}var i=n(208),o=n(209),u=n(211);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var r=arguments,u=-1,a=o(r.length-e,0),c=Array(a);++u<a;)c[u]=r[e+u];u=-1;for(var s=Array(e+1);++u<e;)s[u]=r[u];return s[e]=n(c),i(t,this,s)}}var i=n(210),o=Math.max;t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema),type:"checkbox",autocomplete:t.schema.autocomplete,disabled:t.disabled,name:t.schema.inputName,required:t.schema.required},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var n=t.value,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.value=n.concat([null])):o>-1&&(t.value=n.slice(0,o).concat(n.slice(o+1)))}else t.value=i}}})},i=[]},function(t,e,n){"use strict";function r(t){n(215)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(87),o=n(217),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){function r(t){return i(t,o)}var i=n(73),o=4;t.exports=r},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"attributes",rawName:"v-attributes",value:"wrapper",expression:"'wrapper'"}],staticClass:"wrapper"},[t.schema.listBox?n("div",{staticClass:"listbox form-control",attrs:{disabled:t.disabled}},t._l(t.items,function(e){return n("div",{staticClass:"list-row",class:{"is-checked":t.isItemChecked(e)}},[n("label",[n("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],attrs:{id:t.getFieldID(t.schema,!0),type:"checkbox",disabled:t.disabled,name:t.getInputName(e)},domProps:{checked:t.isItemChecked(e)},on:{change:function(n){t.onChanged(n,e)}}}),t._v(t._s(t.getItemName(e)))])])})):t._e(),t.schema.listBox?t._e():n("div",{staticClass:"combobox form-control",attrs:{disabled:t.disabled}},[n("div",{staticClass:"mainRow",class:{expanded:t.comboExpanded},on:{click:t.onExpandCombo}},[n("div",{staticClass:"info"},[t._v(t._s(t.selectedCount)+" selected")]),n("div",{staticClass:"arrow"})]),n("div",{staticClass:"dropList"},t._l(t.items,function(e){return t.comboExpanded?n("div",{staticClass:"list-row",class:{"is-checked":t.isItemChecked(e)}},[n("label",[n("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],attrs:{id:t.getFieldID(t.schema,!0),type:"checkbox",disabled:t.disabled,name:t.getInputName(e)},domProps:{checked:t.isItemChecked(e)},on:{change:function(n){t.onChanged(n,e)}}}),t._v(t._s(t.getItemName(e)))])]):t._e()}))])])},i=[]},function(t,e,n){"use strict";function r(t){n(219)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(88),o=n(220),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"attributes",rawName:"v-attributes",value:"wrapper",expression:"'wrapper'"}],staticClass:"wrapper"},[n("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],staticClass:"form-control",class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema),type:t.inputType,disabled:t.disabled,accept:t.schema.accept,alt:t.schema.alt,autocomplete:t.schema.autocomplete,dirname:t.schema.dirname,formaction:t.schema.formaction,formenctype:t.schema.formenctype,formmethod:t.schema.formmethod,formnovalidate:t.schema.formnovalidate,formtarget:t.schema.formtarget,height:t.schema.height,list:t.schema.list,max:t.schema.max,maxlength:t.schema.maxlength,min:t.schema.min,minlength:t.schema.minlength,multiple:t.schema.multiple,name:t.schema.inputName,pattern:t.schema.pattern,placeholder:t.schema.placeholder,readonly:t.schema.readonly,required:t.schema.required,size:t.schema.size,src:t.schema.src,step:t.schema.step,width:t.schema.width,files:t.schema.files},domProps:{value:t.value,checked:t.schema.checked},on:{input:t.onInput,blur:t.onBlur,change:function(e){t.schema.onChange}}}),"color"===t.schema.inputType.toLowerCase()||"range"===t.schema.inputType.toLowerCase()?n("span",{staticClass:"helper"},[t._v(t._s(t.value))]):t._e()])},i=[]},function(t,e,n){"use strict";function r(t){n(222)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(89),o=n(223),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"attributes",rawName:"v-attributes",value:"label",expression:"'label'"}],class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema)}},[t._v(t._s(t.value))])},i=[]},function(t,e,n){"use strict";function r(t){n(225)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(90),o=n(226),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"attributes",rawName:"v-attributes",value:"wrapper",expression:"'wrapper'"}],staticClass:"radio-list",attrs:{disabled:t.disabled}},t._l(t.items,function(e){return n("label",{directives:[{name:"attributes",rawName:"v-attributes",value:"label",expression:"'label'"}],class:{"is-checked":t.isItemChecked(e)}},[n("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema,!0),type:"radio",disabled:t.isItemDisabled(e),name:t.id,required:t.schema.required},domProps:{value:t.getItemValue(e),checked:t.isItemChecked(e)},on:{click:function(n){t.onSelection(e)}}}),t._v(t._s(t.getItemName(e)))])}))},i=[]},function(t,e,n){"use strict";function r(t){n(228)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(91),o=n(233),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){var r=n(230),i=n(231),o=r(i);t.exports=o},function(t,e,n){function r(t){return function(e,n,r){var a=Object(e);if(!o(e)){var c=i(n,3);e=u(e),n=function(t){return c(a[t],t,a)}}var s=t(e,n,r);return s>-1?a[c?e[s]:s]:void 0}}var i=n(92),o=n(44),u=n(24);t.exports=r},function(t,e,n){function r(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var c=null==n?0:u(n);return c<0&&(c=a(r+c,0)),i(t,o(e,3),c)}var i=n(232),o=n(92),u=n(85),a=Math.max;t.exports=r},function(t,e){function n(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}t.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],staticClass:"form-control",class:t.schema.fieldClasses,attrs:{disabled:t.disabled,name:t.schema.inputName,id:t.getFieldID(t.schema)},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.value=e.target.multiple?n:n[0]}}},[t.selectOptions.hideNoneSelectedText?t._e():n("option",{attrs:{disabled:t.schema.required},domProps:{value:null}},[t._v(t._s(t.selectOptions.noneSelectedText||"<Nothing selected>"))]),t._l(t.items,function(e){return[e.group?n("optgroup",{attrs:{label:t.getGroupName(e)}},t._l(e.ops,function(r){return e.ops?n("option",{domProps:{value:t.getItemValue(r)}},[t._v(t._s(t.getItemName(r)))]):t._e()})):t._e(),e.group?t._e():n("option",{domProps:{value:t.getItemValue(e)}},[t._v(t._s(t.getItemName(e)))])]})],2)},i=[]},function(t,e,n){"use strict";function r(t){n(235)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(93),o=n(240),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){function r(t){if(null==t)return!0;if(c(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||s(t)||f(t)||u(t)))return!t.length;var e=o(t);if(e==d||e==h)return!t.size;if(l(t))return!i(t).length;for(var n in t)if(v.call(t,n))return!1;return!0}var i=n(237),o=n(77),u=n(238),a=n(2),c=n(44),s=n(79),l=n(78),f=n(239),d="[object Map]",h="[object Set]",p=Object.prototype,v=p.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(25),i=r(Object.keys,Object);t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema),type:"submit",name:t.schema.inputName,disabled:t.disabled},domProps:{value:t.schema.buttonText},on:{click:t.onClick}})},i=[]},function(t,e,n){"use strict";function r(t){n(242)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(94),o=n(243),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],staticClass:"form-control",class:t.schema.fieldClasses,attrs:{id:t.getFieldID(t.schema),disabled:t.disabled,maxlength:t.schema.max,minlength:t.schema.min,placeholder:t.schema.placeholder,readonly:t.schema.readonly,required:t.schema.required,rows:t.schema.rows||2,name:t.schema.inputName},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})},i=[]},function(t,e,n){"use strict";function r(t){n(245)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(95),o=n(246),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"attributes",rawName:"v-attributes",value:"wrapper",expression:"'wrapper'"}],staticClass:"wrapper"},[n("input",{directives:[{name:"attributes",rawName:"v-attributes",value:"input",expression:"'input'"}],staticClass:"form-control",attrs:{id:t.getFieldID(t.schema),type:"file",name:t.schema.inputName,accept:t.schema.accept,multiple:t.schema.multiple,placeholder:t.schema.placeholder,readonly:t.schema.readonly,required:t.schema.required,disabled:t.disabled},on:{change:t.onChange}})])},i=[]},function(t,e,n){function r(t){return n(i(t))}function i(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./fieldCleave.vue":248,"./fieldDateTimePicker.vue":251,"./fieldGoogleAddress.vue":260,"./fieldImage.vue":262,"./fieldMasked.vue":265,"./fieldNoUiSlider.vue":268,"./fieldPikaday.vue":271,"./fieldRangeSlider.vue":274,"./fieldSelectEx.vue":283,"./fieldSpectrum.vue":286,"./fieldStaticMap.vue":289,"./fieldSwitch.vue":292,"./fieldVueMultiSelect.vue":295};r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=247},function(t,e,n){"use strict";function r(t){n(249)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(96),o=n(250),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"form-control",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName,id:t.getFieldID(t.schema)},domProps:{value:t.value}})},i=[]},function(t,e,n){"use strict";function r(t){n(252)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(97),o=n(259),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){t.exports={default:n(254),__esModule:!0}},function(t,e,n){n(255),t.exports=n(3).Object.assign},function(t,e,n){var r=n(11);r(r.S+r.F,"Object",{assign:n(256)})},function(t,e,n){"use strict";var r=n(35),i=n(257),o=n(258),u=n(39),a=n(54),c=Object.assign;t.exports=!c||n(20)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,s=1,l=i.f,f=o.f;c>s;)for(var d,h=a(arguments[s++]),p=l?r(h).concat(l(h)):r(h),v=p.length,m=0;v>m;)f.call(h,d=p[m++])&&(n[d]=h[d]);return n}:c},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group date"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName,id:t.getFieldID(t.schema)},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-group-addon"},[n("span",{staticClass:"glyphicon glyphicon-calendar"})])}]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(100),i=n(261),o=n(0),u=Object(o.a)(r.a,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName,debounce:"500",id:t.getFieldID(t.schema)},domProps:{value:t.value},on:{focus:function(e){t.geolocate()},input:function(e){e.target.composing||(t.value=e.target.value)}}})},i=[]},function(t,e,n){"use strict";function r(t){n(263)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(101),o=n(264),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("input",{directives:[{name:"show",rawName:"v-show",value:!0!==t.schema.hideInput,expression:"schema.hideInput !== true"},{name:"model",rawName:"v-model",value:t.wrappedValue,expression:"wrappedValue"}],staticClass:"form-control link",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly},domProps:{value:t.wrappedValue},on:{input:function(e){e.target.composing||(t.wrappedValue=e.target.value)}}}),!1!==t.schema.browse?n("input",{staticClass:"form-control file",attrs:{type:"file",disabled:t.disabled,name:t.schema.inputName},on:{change:t.fileChanged}}):t._e(),n("div",{staticClass:"preview",style:t.previewStyle},[n("div",{staticClass:"remove",attrs:{title:"Remove image"},on:{click:t.remove}})])])},i=[]},function(t,e,n){"use strict";function r(t){n(266)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(102),o=n(267),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName,id:t.getFieldID(t.schema)},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})},i=[]},function(t,e,n){"use strict";function r(t){n(269)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(103),o=n(270),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"slider",class:{"contain-pips":t.containPips,"contain-tooltip":t.containTooltip},attrs:{disabled:t.disabled}})},i=[]},function(t,e,n){"use strict";function r(t){n(272)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(104),o=n(273),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})},i=[]},function(t,e,n){"use strict";function r(t){n(275)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(105),o=n(282),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(277),o=r(i),u=n(106),a=r(u);e.default=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,c=(0,a.default)(t);!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,o.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(278),__esModule:!0}},function(t,e,n){n(40),n(31),t.exports=n(279)},function(t,e,n){var r=n(41),i=n(4)("iterator"),o=n(14);t.exports=n(3).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},function(t,e,n){n(40),n(31),t.exports=n(281)},function(t,e,n){var r=n(9),i=n(60);t.exports=n(3).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"text",autocomplete:t.schema.autocomplete,"data-disable":t.disabled,"data-max":t.schema.max,"data-min":t.schema.min,"data-step":t.schema.step,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName}})},i=[]},function(t,e,n){"use strict";function r(t){n(284)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(107),o=n(285),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"selectpicker",attrs:{disabled:t.disabled,multiple:t.schema.multiSelect,title:t.schema.placeholder,"data-width":"100%",name:t.schema.inputName},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.value=e.target.multiple?n:n[0]}}},[!0!==t.schema.multiSelect?n("option",{attrs:{disabled:t.schema.required},domProps:{value:null,selected:void 0==t.value}}):t._e(),t._l(t.items,function(e){return n("option",{domProps:{value:t.getItemValue(e)}},[t._v(t._s(t.getItemName(e)))])})],2)},i=[]},function(t,e,n){"use strict";function r(t){n(287)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(108),o=n(288),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"text",autocomplete:t.schema.autocomplete,disabled:t.disabled,placeholder:t.schema.placeholder,readonly:t.schema.readonly,name:t.schema.inputName,id:t.getFieldID(t.schema)}})},i=[]},function(t,e,n){"use strict";function r(t){n(290)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(109),o=n(291),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.mapLink}})},i=[]},function(t,e,n){"use strict";function r(t){n(293)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(110),o=n(294),u=n(0),a=r,c=Object(u.a)(i.a,o.a,o.b,!1,a,null,null);e.default=c.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"checkbox",autocomplete:t.schema.autocomplete,disabled:t.disabled,name:t.schema.inputName,id:t.getFieldID(t.schema)},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var n=t.value,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.value=n.concat([null])):o>-1&&(t.value=n.slice(0,o).concat(n.slice(o+1)))}else t.value=i}}}),n("span",{staticClass:"label",attrs:{"data-on":t.schema.textOn||"On","data-off":t.schema.textOff||"Off",for:t.getFieldID(t.schema)}}),n("span",{staticClass:"handle"})])},i=[]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(111),i=n(296),o=n(0),u=Object(o.a)(r.a,i.a,i.b,!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("multiselect",{attrs:{id:t.selectOptions.id,options:t.options,value:t.value,multiple:t.selectOptions.multiple,"track-by":t.selectOptions.trackBy||null,label:t.selectOptions.label||null,searchable:t.selectOptions.searchable,"clear-on-select":t.selectOptions.clearOnSelect,"hide-selected":t.selectOptions.hideSelected,placeholder:t.schema.placeholder,"allow-empty":t.selectOptions.allowEmpty,"reset-after":t.selectOptions.resetAfter,"close-on-select":t.selectOptions.closeOnSelect,"custom-label":t.customLabel,taggable:t.selectOptions.taggable,"tag-placeholder":t.selectOptions.tagPlaceholder,max:t.schema.max||null,"options-limit":t.selectOptions.optionsLimit,"group-values":t.selectOptions.groupValues,"group-label":t.selectOptions.groupLabel,"block-keys":t.selectOptions.blockKeys,"internal-search":t.selectOptions.internalSearch,"select-label":t.selectOptions.selectLabel,"selected-label":t.selectOptions.selectedLabel,"deselect-label":t.selectOptions.deselectLabel,"show-labels":t.selectOptions.showLabels,limit:t.selectOptions.limit,"limit-text":t.selectOptions.limitText,loading:t.selectOptions.loading,disabled:t.disabled,"max-height":t.selectOptions.maxHeight,"show-pointer":t.selectOptions.showPointer,"option-height":t.selectOptions.optionHeight},on:{input:t.updateSelected,select:t.onSelect,remove:t.onRemove,"search-change":t.onSearchChange,tag:t.addTag,open:t.onOpen,close:t.onClose}},[n("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v(t._s(t.selectOptions.noResult))]),n("span",{attrs:{slot:"maxElements"},slot:"maxElements"},[t._v(t._s(t.selectOptions.maxElements))])])},i=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group",class:t.getFieldRowClasses(t.field)},[t.fieldTypeHasLabel(t.field)?n("label",{class:t.field.labelClasses,attrs:{for:t.getFieldID(t.field)}},[n("span",{domProps:{innerHTML:t._s(t.field.label)}}),t._v(" "),t.field.help?n("span",{staticClass:"help"},[n("i",{staticClass:"icon"}),t._v(" "),n("div",{staticClass:"helpText",domProps:{innerHTML:t._s(t.field.help)}})]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"field-wrap"},[n(t.getFieldType(t.field),{ref:"child",tag:"component",attrs:{vfg:t.vfg,disabled:t.fieldDisabled(t.field),model:t.model,schema:t.field,formOptions:t.options},on:{"model-updated":t.onModelUpdated,validated:t.onFieldValidated}}),t._v(" "),t.buttonVisibility(t.field)?n("div",{staticClass:"buttons"},t._l(t.field.buttons,function(e,r){return n("button",{key:r,class:e.classes,attrs:{type:t.getButtonType(e)},domProps:{textContent:t._s(e.label)},on:{click:function(n){t.buttonClickHandler(e,t.field,n)}}})})):t._e()],1),t._v(" "),t.field.hint?n("div",{staticClass:"hint",domProps:{innerHTML:t._s(t.fieldHint(t.field))}}):t._e(),t._v(" "),t.fieldErrors(t.field).length>0?n("div",{staticClass:"errors help-block"},t._l(t.fieldErrors(t.field),function(e,r){return n("span",{key:r,domProps:{innerHTML:t._s(e)}})})):t._e()])},i=[]},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.schema?n("div",{staticClass:"vue-form-generator"},[t.schema.fields?n(t.tag,{tag:"fieldset"},[t._l(t.fields,function(e){return[t.fieldVisible(e)?n("form-group",{attrs:{vfg:t.vfg,field:e,errors:t.errors,model:t.model,options:t.options},on:{validated:t.onFieldValidated,"model-updated":t.onModelUpdated}}):t._e()]})],2):t._e(),t._l(t.groups,function(e){return[n(t.tag,{tag:"fieldset",class:t.getFieldRowClasses(e)},[e.legend?n("legend",[t._v(t._s(e.legend))]):t._e(),t._l(e.fields,function(e){return[t.fieldVisible(e)?n("form-group",{attrs:{vfg:t.vfg,field:e,errors:t.errors,model:t.model,options:t.options},on:{validated:t.onFieldValidated,"model-updated":t.onModelUpdated}}):t._e()]})],2)]})],2):t._e()},i=[]}])});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* axios v0.17.1 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
    var showSurvey = function showSurvey() {
        var $survey = $('#survey-social-public');

        if ($survey.length) {
            $('html, body').animate({
                scrollTop: $survey.offset().top
            }, 1000);

            $survey.addClass('active');
            $('.site-header').addClass('under');
        }
    };

    $('#show-survey, #show-survey-again').on('click', function (e) {
        e.preventDefault();

        showSurvey();

        return false;
    });

    $(window).on('hashchange', function () {
        if (window.location.hash.slice(1) == "take-quiz") {
            showSurvey();
        }

        return false;
    });

    $('a[href="#take-quiz"]').click(function (e) {
        e.preventDefault();

        window.location.replace("#take-quiz");

        showSurvey();

        return false;
    });
})(jQuery);

/***/ })
/******/ ]);