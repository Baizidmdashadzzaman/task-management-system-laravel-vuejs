(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/layouts/dashboard"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dashboard-layout",
  data: function data() {
    return {
      user: this.$store.state.auth.user
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    signOut: "auth/logout"
  })), {}, {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/logout').then(function (_ref) {
                  var data = _ref.data;

                  _this.signOut();

                  _this.$router.push({
                    name: "login"
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

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

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  exports.keys = function(object) {
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
        var i = -1, next = function next() {
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
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./resources/js/components/Layouts/Dashboard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Layouts/Dashboard.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=581e4893& */ "./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_581e4893___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=581e4893& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Dashboard.vue?vue&type=template&id=581e4893& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "nav",
      {
        staticClass:
          "main-header navbar navbar-expand navbar-white navbar-light"
      },
      [
        _c("ul", { staticClass: "navbar-nav" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.logout }
              },
              [_vm._v("Logout")]
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(3)
      ]
    ),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "content-wrapper",
        staticStyle: { "min-height": "311px" }
      },
      [_vm._m(5), _vm._v(" "), _c("router-view")],
      1
    ),
    _vm._v(" "),
    _vm._m(6),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c("div", { attrs: { id: "sidebar-overlay" } })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "preloader flex-column justify-content-center align-items-center",
        staticStyle: { height: "0px" }
      },
      [
        _c("img", {
          staticClass: "animation__shake",
          staticStyle: { display: "none" },
          attrs: {
            src: "dist/img/AdminLTELogo.png",
            alt: "AdminLTELogo",
            width: "60",
            height: "60"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: { "data-widget": "pushmenu", href: "#", role: "button" }
        },
        [_c("i", { staticClass: "fas fa-bars" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "index3.html" } }, [
        _vm._v("Home")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav ml-auto" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { "data-widget": "navbar-search", href: "#", role: "button" }
          },
          [_c("i", { staticClass: "fas fa-search" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-search-block" }, [
          _c("form", { staticClass: "form-inline" }, [
            _c("div", { staticClass: "input-group input-group-sm" }, [
              _c("input", {
                staticClass: "form-control form-control-navbar",
                attrs: {
                  type: "search",
                  placeholder: "Search",
                  "aria-label": "Search"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-navbar", attrs: { type: "submit" } },
                  [_c("i", { staticClass: "fas fa-search" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-navbar",
                    attrs: { type: "button", "data-widget": "navbar-search" }
                  },
                  [_c("i", { staticClass: "fas fa-times" })]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item dropdown" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "far fa-comments" }),
            _vm._v(" "),
            _c("span", { staticClass: "badge badge-danger navbar-badge" }, [
              _vm._v("3")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown-menu dropdown-menu-lg dropdown-menu-right" },
          [
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass: "img-size-50 mr-3 img-circle",
                  attrs: {
                    src: "dist/img/user1-128x128.jpg",
                    alt: "User Avatar"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "dropdown-item-title" }, [
                    _vm._v(
                      "\n                  Brad Diesel\n                  "
                    ),
                    _c(
                      "span",
                      { staticClass: "float-right text-sm text-danger" },
                      [_c("i", { staticClass: "fas fa-star" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("Call me whenever you can...")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm text-muted" }, [
                    _c("i", { staticClass: "far fa-clock mr-1" }),
                    _vm._v(" 4 Hours Ago")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass: "img-size-50 img-circle mr-3",
                  attrs: {
                    src: "dist/img/user8-128x128.jpg",
                    alt: "User Avatar"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "dropdown-item-title" }, [
                    _vm._v(
                      "\n                  John Pierce\n                  "
                    ),
                    _c(
                      "span",
                      { staticClass: "float-right text-sm text-muted" },
                      [_c("i", { staticClass: "fas fa-star" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("I got your message bro")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm text-muted" }, [
                    _c("i", { staticClass: "far fa-clock mr-1" }),
                    _vm._v(" 4 Hours Ago")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass: "img-size-50 img-circle mr-3",
                  attrs: {
                    src: "dist/img/user3-128x128.jpg",
                    alt: "User Avatar"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body" }, [
                  _c("h3", { staticClass: "dropdown-item-title" }, [
                    _vm._v(
                      "\n                  Nora Silvester\n                  "
                    ),
                    _c(
                      "span",
                      { staticClass: "float-right text-sm text-warning" },
                      [_c("i", { staticClass: "fas fa-star" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("The subject goes here")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm text-muted" }, [
                    _c("i", { staticClass: "far fa-clock mr-1" }),
                    _vm._v(" 4 Hours Ago")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item dropdown-footer",
                attrs: { href: "#" }
              },
              [_vm._v("See All Messages")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item dropdown" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "far fa-bell" }),
            _vm._v(" "),
            _c("span", { staticClass: "badge badge-warning navbar-badge" }, [
              _vm._v("15")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown-menu dropdown-menu-lg dropdown-menu-right" },
          [
            _c("span", { staticClass: "dropdown-item dropdown-header" }, [
              _vm._v("15 Notifications")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-envelope mr-2" }),
              _vm._v(" 4 new messages\n            "),
              _c("span", { staticClass: "float-right text-muted text-sm" }, [
                _vm._v("3 mins")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-users mr-2" }),
              _vm._v(" 8 friend requests\n            "),
              _c("span", { staticClass: "float-right text-muted text-sm" }, [
                _vm._v("12 hours")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _c("i", { staticClass: "fas fa-file mr-2" }),
              _vm._v(" 3 new reports\n            "),
              _c("span", { staticClass: "float-right text-muted text-sm" }, [
                _vm._v("2 days")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item dropdown-footer",
                attrs: { href: "#" }
              },
              [_vm._v("See All Notifications")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { "data-widget": "fullscreen", href: "#", role: "button" }
          },
          [_c("i", { staticClass: "fas fa-expand-arrows-alt" })]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: {
              "data-widget": "control-sidebar",
              "data-slide": "true",
              href: "#",
              role: "button"
            }
          },
          [_c("i", { staticClass: "fas fa-th-large" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "aside",
      { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
      [
        _c("a", { staticClass: "brand-link", attrs: { href: "index3.html" } }, [
          _c("img", {
            staticClass: "brand-image img-circle elevation-3",
            staticStyle: { opacity: ".8" },
            attrs: { src: "dist/img/AdminLTELogo.png", alt: "AdminLTE Logo" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "brand-text font-weight-light" }, [
            _vm._v("AdminLTE 3")
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition"
          },
          [
            _c("div", { staticClass: "os-resize-observer-host observed" }, [
              _c("div", {
                staticClass: "os-resize-observer",
                staticStyle: { left: "0px", right: "auto" }
              })
            ]),
            _c(
              "div",
              {
                staticClass: "os-size-auto-observer observed",
                staticStyle: { height: "calc(100% + 1px)", float: "left" }
              },
              [_c("div", { staticClass: "os-resize-observer" })]
            ),
            _c("div", {
              staticClass: "os-content-glue",
              staticStyle: {
                margin: "0px -8px",
                width: "249px",
                height: "367px"
              }
            }),
            _c("div", { staticClass: "os-padding" }, [
              _c(
                "div",
                {
                  staticClass:
                    "os-viewport os-viewport-native-scrollbars-invisible",
                  staticStyle: { "overflow-y": "scroll" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "os-content",
                      staticStyle: {
                        padding: "0px 8px",
                        height: "100%",
                        width: "100%"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" },
                        [
                          _c("div", { staticClass: "image" }, [
                            _c("img", {
                              staticClass: "img-circle elevation-2",
                              attrs: {
                                src: "dist/img/user2-160x160.jpg",
                                alt: "User Image"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info" }, [
                            _c(
                              "a",
                              { staticClass: "d-block", attrs: { href: "#" } },
                              [_vm._v("Alexander Pierce")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-inline" }, [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            attrs: { "data-widget": "sidebar-search" }
                          },
                          [
                            _c("input", {
                              staticClass: "form-control form-control-sidebar",
                              attrs: {
                                type: "search",
                                placeholder: "Search",
                                "aria-label": "Search"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c("button", { staticClass: "btn btn-sidebar" }, [
                                _c("i", { staticClass: "fas fa-search fa-fw" })
                              ])
                            ])
                          ]
                        ),
                        _c("div", { staticClass: "sidebar-search-results" }, [
                          _c("div", { staticClass: "list-group" }, [
                            _c(
                              "a",
                              {
                                staticClass: "list-group-item",
                                attrs: { href: "#" }
                              },
                              [
                                _c("div", { staticClass: "search-title" }, [
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("N"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("o"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v(" "),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("e"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("l"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("e"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("m"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("e"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("n"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("t"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v(" "),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("f"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("o"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("u"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("n"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("d"),
                                  _c("strong", { staticClass: "text-light" }),
                                  _vm._v("!"),
                                  _c("strong", { staticClass: "text-light" })
                                ]),
                                _c("div", { staticClass: "search-path" })
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("nav", { staticClass: "mt-2" }, [
                        _c(
                          "ul",
                          {
                            staticClass:
                              "nav nav-pills nav-sidebar flex-column",
                            attrs: {
                              "data-widget": "treeview",
                              role: "menu",
                              "data-accordion": "false"
                            }
                          },
                          [
                            _c("li", { staticClass: "nav-item menu-open" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link active",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "nav-icon fas fa-tachometer-alt"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Dashboard\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "right fas fa-angle-left"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link active",
                                      attrs: { href: "./index.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Dashboard v1")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "./index2.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Dashboard v2")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "./index3.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Dashboard v3")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "pages/widgets.html" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-th"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Widgets\n                "
                                    ),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "right badge badge-danger"
                                      },
                                      [_vm._v("New")]
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-copy"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Layout Options\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "badge badge-info right" },
                                      [_vm._v("6")]
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/layout/top-nav.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Top Navigation")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/layout/top-nav-sidebar.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v("Top Navigation + Sidebar")
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/layout/boxed.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Boxed")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/layout/fixed-sidebar.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Fixed Sidebar")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/layout/fixed-sidebar-custom.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v("Fixed Sidebar "),
                                        _c("small", [_vm._v("+ Custom Area")])
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/layout/fixed-topnav.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Fixed Navbar")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/layout/fixed-footer.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Fixed Footer")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/layout/collapsed-sidebar.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Collapsed Sidebar")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-chart-pie"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Charts\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "right fas fa-angle-left"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/charts/chartjs.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("ChartJS")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/charts/flot.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Flot")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/charts/inline.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Inline")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/charts/uplot.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("uPlot")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-tree"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                UI Elements\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/general.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("General")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/icons.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Icons")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/buttons.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Buttons")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/sliders.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Sliders")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/modals.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Modals & Alerts")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/navbar.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Navbar & Tabs")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/timeline.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Timeline")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/UI/ribbons.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Ribbons")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-edit"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Forms\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/forms/general.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("General Elements")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/forms/advanced.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Advanced Elements")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/forms/editors.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Editors")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/forms/validation.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Validation")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-table"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Tables\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/tables/simple.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Simple Tables")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/tables/data.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("DataTables")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/tables/jsgrid.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("jsGrid")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-header" }, [
                              _vm._v("EXAMPLES")
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "pages/calendar.html" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon far fa-calendar-alt"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Calendar\n                "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "badge badge-info right" },
                                      [_vm._v("2")]
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "pages/gallery.html" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon far fa-image"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Gallery\n              "
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "pages/kanban.html" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-columns"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Kanban Board\n              "
                                    )
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon far fa-envelope"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Mailbox\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/mailbox/mailbox.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Inbox")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/mailbox/compose.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Compose")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/mailbox/read-mail.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Read")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-book"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Pages\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/invoice.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Invoice")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/profile.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Profile")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/e-commerce.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("E-commerce")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/projects.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Projects")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/project-add.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Project Add")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/project-edit.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Project Edit")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/examples/project-detail.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Project Detail")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/contacts.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Contacts")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/examples/faq.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("FAQ")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/contact-us.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Contact us")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon far fa-plus-square"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Extras\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "\n                    Login & Register v1\n                    "
                                        ),
                                        _c("i", {
                                          staticClass: "fas fa-angle-left right"
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "nav nav-treeview" },
                                    [
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href: "pages/examples/login.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Login v1")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/register.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Register v1")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/forgot-password.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v("Forgot Password v1")
                                            ])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/recover-password.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v("Recover Password v1")
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "\n                    Login & Register v2\n                    "
                                        ),
                                        _c("i", {
                                          staticClass: "fas fa-angle-left right"
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "nav nav-treeview" },
                                    [
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/login-v2.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Login v2")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/register-v2.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Register v2")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/forgot-password-v2.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v("Forgot Password v2")
                                            ])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: {
                                              href:
                                                "pages/examples/recover-password-v2.html"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v("Recover Password v2")
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/lockscreen.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Lockscreen")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/examples/legacy-user-menu.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Legacy User Menu")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href:
                                          "pages/examples/language-menu.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Language Menu")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/examples/404.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Error 404")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "pages/examples/500.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Error 500")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/pace.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Pace")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/examples/blank.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Blank Page")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "starter.html" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Starter Page")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-search"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Search\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "fas fa-angle-left right"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/search/simple.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Simple Search")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: {
                                        href: "pages/search/enhanced.html"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Enhanced")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-header" }, [
                              _vm._v("MISCELLANEOUS")
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "iframe.html" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-ellipsis-h"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Tabbed IFrame Plugin")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    href: "https://adminlte.io/docs/3.1/"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-file"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Documentation")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-header" }, [
                              _vm._v("MULTI LEVEL EXAMPLE")
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-circle nav-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Level 1")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-circle"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "\n                Level 1\n                "
                                    ),
                                    _c("i", {
                                      staticClass: "right fas fa-angle-left"
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("ul", { staticClass: "nav nav-treeview" }, [
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Level 2")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "\n                    Level 2\n                    "
                                        ),
                                        _c("i", {
                                          staticClass: "right fas fa-angle-left"
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "nav nav-treeview" },
                                    [
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: { href: "#" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-dot-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Level 3")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: { href: "#" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-dot-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Level 3")])
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { staticClass: "nav-item" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "nav-link",
                                            attrs: { href: "#" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-dot-circle nav-icon"
                                            }),
                                            _vm._v(" "),
                                            _c("p", [_vm._v("Level 3")])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "nav-item" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "nav-link",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-circle nav-icon"
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v("Level 2")])
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-circle nav-icon"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Level 1")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-header" }, [
                              _vm._v("LABELS")
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "nav-icon far fa-circle text-danger"
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text" }, [
                                    _vm._v("Important")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "nav-icon far fa-circle text-warning"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Warning")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "nav-icon far fa-circle text-info"
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Informational")])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ]),
            _c(
              "div",
              {
                staticClass:
                  "os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"
              },
              [
                _c("div", { staticClass: "os-scrollbar-track" }, [
                  _c("div", {
                    staticClass: "os-scrollbar-handle",
                    staticStyle: { width: "100%", transform: "translate(0px)" }
                  })
                ])
              ]
            ),
            _c(
              "div",
              {
                staticClass:
                  "os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"
              },
              [
                _c("div", { staticClass: "os-scrollbar-track" }, [
                  _c("div", {
                    staticClass: "os-scrollbar-handle",
                    staticStyle: {
                      height: "27.0787%",
                      transform: "translate(0px)"
                    }
                  })
                ])
              ]
            ),
            _c("div", { staticClass: "os-scrollbar-corner" })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard v1")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-footer" }, [
      _c("strong", [
        _vm._v("Copyright © 2014-2021 "),
        _c("a", { attrs: { href: "https://adminlte.io" } }, [
          _vm._v("AdminLTE.io")
        ]),
        _vm._v(".")
      ]),
      _vm._v("\n    All rights reserved.\n    "),
      _c("div", { staticClass: "float-right d-none d-sm-inline-block" }, [
        _c("b", [_vm._v("Version")]),
        _vm._v(" 3.1.0\n    ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "aside",
      {
        staticClass: "control-sidebar control-sidebar-dark",
        staticStyle: { display: "none", top: "57px", height: "368px" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "p-3 control-sidebar-content os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition",
            staticStyle: { height: "368px" }
          },
          [
            _c("div", { staticClass: "os-resize-observer-host observed" }, [
              _c("div", {
                staticClass: "os-resize-observer",
                staticStyle: { left: "0px", right: "auto" }
              })
            ]),
            _c(
              "div",
              {
                staticClass: "os-size-auto-observer observed",
                staticStyle: { height: "calc(100% + 1px)", float: "left" }
              },
              [_c("div", { staticClass: "os-resize-observer" })]
            ),
            _c("div", {
              staticClass: "os-content-glue",
              staticStyle: { margin: "-16px", width: "0px", height: "0px" }
            }),
            _c("div", { staticClass: "os-padding" }, [
              _c(
                "div",
                {
                  staticClass:
                    "os-viewport os-viewport-native-scrollbars-invisible"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "os-content",
                      staticStyle: {
                        padding: "16px",
                        height: "100%",
                        width: "100%"
                      }
                    },
                    [
                      _c("h5", [_vm._v("Customize AdminLTE")]),
                      _c("hr", { staticClass: "mb-2" }),
                      _c("div", { staticClass: "mb-4" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Dark Mode")])
                      ]),
                      _c("h6", [_vm._v("Header Options")]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Fixed")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Dropdown Legacy Offset")])
                      ]),
                      _c("div", { staticClass: "mb-4" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("No border")])
                      ]),
                      _c("h6", [_vm._v("Sidebar Options")]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Collapsed")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: {
                            type: "checkbox",
                            value: "1",
                            checked: "checked"
                          }
                        }),
                        _c("span", [_vm._v("Fixed")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: {
                            type: "checkbox",
                            value: "1",
                            checked: "checked"
                          }
                        }),
                        _c("span", [_vm._v("Sidebar Mini")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Sidebar Mini MD")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Sidebar Mini XS")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Nav Flat Style")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Nav Legacy Style")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Nav Compact")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Nav Child Indent")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Nav Child Hide on Collapse")])
                      ]),
                      _c("div", { staticClass: "mb-4" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Disable Hover/Focus Auto-Expand")])
                      ]),
                      _c("h6", [_vm._v("Footer Options")]),
                      _c("div", { staticClass: "mb-4" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Fixed")])
                      ]),
                      _c("h6", [_vm._v("Small Text Options")]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Body")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Navbar")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Brand")])
                      ]),
                      _c("div", { staticClass: "mb-1" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Sidebar Nav")])
                      ]),
                      _c("div", { staticClass: "mb-4" }, [
                        _c("input", {
                          staticClass: "mr-1",
                          attrs: { type: "checkbox", value: "1" }
                        }),
                        _c("span", [_vm._v("Footer")])
                      ]),
                      _c("h6", [_vm._v("Navbar Variants")]),
                      _c("div", { staticClass: "d-flex" }, [
                        _c(
                          "select",
                          {
                            staticClass:
                              "custom-select mb-3 text-light border-0 bg-white"
                          },
                          [
                            _c("option", { staticClass: "bg-primary" }, [
                              _vm._v("Primary")
                            ]),
                            _c("option", { staticClass: "bg-secondary" }, [
                              _vm._v("Secondary")
                            ]),
                            _c("option", { staticClass: "bg-info" }, [
                              _vm._v("Info")
                            ]),
                            _c("option", { staticClass: "bg-success" }, [
                              _vm._v("Success")
                            ]),
                            _c("option", { staticClass: "bg-danger" }, [
                              _vm._v("Danger")
                            ]),
                            _c("option", { staticClass: "bg-indigo" }, [
                              _vm._v("Indigo")
                            ]),
                            _c("option", { staticClass: "bg-purple" }, [
                              _vm._v("Purple")
                            ]),
                            _c("option", { staticClass: "bg-pink" }, [
                              _vm._v("Pink")
                            ]),
                            _c("option", { staticClass: "bg-navy" }, [
                              _vm._v("Navy")
                            ]),
                            _c("option", { staticClass: "bg-lightblue" }, [
                              _vm._v("Lightblue")
                            ]),
                            _c("option", { staticClass: "bg-teal" }, [
                              _vm._v("Teal")
                            ]),
                            _c("option", { staticClass: "bg-cyan" }, [
                              _vm._v("Cyan")
                            ]),
                            _c("option", { staticClass: "bg-dark" }, [
                              _vm._v("Dark")
                            ]),
                            _c("option", { staticClass: "bg-gray-dark" }, [
                              _vm._v("Gray dark")
                            ]),
                            _c("option", { staticClass: "bg-gray" }, [
                              _vm._v("Gray")
                            ]),
                            _c("option", { staticClass: "bg-light" }, [
                              _vm._v("Light")
                            ]),
                            _c("option", { staticClass: "bg-warning" }, [
                              _vm._v("Warning")
                            ]),
                            _c("option", { staticClass: "bg-white" }, [
                              _vm._v("White")
                            ]),
                            _c("option", { staticClass: "bg-orange" }, [
                              _vm._v("Orange")
                            ])
                          ]
                        )
                      ]),
                      _c("h6", [_vm._v("Accent Color Variants")]),
                      _c("div", { staticClass: "d-flex" }),
                      _c(
                        "select",
                        { staticClass: "custom-select mb-3 border-0" },
                        [
                          _c("option", [_vm._v("None Selected")]),
                          _c("option", { staticClass: "bg-primary" }, [
                            _vm._v("Primary")
                          ]),
                          _c("option", { staticClass: "bg-warning" }, [
                            _vm._v("Warning")
                          ]),
                          _c("option", { staticClass: "bg-info" }, [
                            _vm._v("Info")
                          ]),
                          _c("option", { staticClass: "bg-danger" }, [
                            _vm._v("Danger")
                          ]),
                          _c("option", { staticClass: "bg-success" }, [
                            _vm._v("Success")
                          ]),
                          _c("option", { staticClass: "bg-indigo" }, [
                            _vm._v("Indigo")
                          ]),
                          _c("option", { staticClass: "bg-lightblue" }, [
                            _vm._v("Lightblue")
                          ]),
                          _c("option", { staticClass: "bg-navy" }, [
                            _vm._v("Navy")
                          ]),
                          _c("option", { staticClass: "bg-purple" }, [
                            _vm._v("Purple")
                          ]),
                          _c("option", { staticClass: "bg-fuchsia" }, [
                            _vm._v("Fuchsia")
                          ]),
                          _c("option", { staticClass: "bg-pink" }, [
                            _vm._v("Pink")
                          ]),
                          _c("option", { staticClass: "bg-maroon" }, [
                            _vm._v("Maroon")
                          ]),
                          _c("option", { staticClass: "bg-orange" }, [
                            _vm._v("Orange")
                          ]),
                          _c("option", { staticClass: "bg-lime" }, [
                            _vm._v("Lime")
                          ]),
                          _c("option", { staticClass: "bg-teal" }, [
                            _vm._v("Teal")
                          ]),
                          _c("option", { staticClass: "bg-olive" }, [
                            _vm._v("Olive")
                          ])
                        ]
                      ),
                      _c("h6", [_vm._v("Dark Sidebar Variants")]),
                      _c("div", { staticClass: "d-flex" }),
                      _c(
                        "select",
                        {
                          staticClass:
                            "custom-select mb-3 text-light border-0 bg-primary"
                        },
                        [
                          _c("option", [_vm._v("None Selected")]),
                          _c("option", { staticClass: "bg-primary" }, [
                            _vm._v("Primary")
                          ]),
                          _c("option", { staticClass: "bg-warning" }, [
                            _vm._v("Warning")
                          ]),
                          _c("option", { staticClass: "bg-info" }, [
                            _vm._v("Info")
                          ]),
                          _c("option", { staticClass: "bg-danger" }, [
                            _vm._v("Danger")
                          ]),
                          _c("option", { staticClass: "bg-success" }, [
                            _vm._v("Success")
                          ]),
                          _c("option", { staticClass: "bg-indigo" }, [
                            _vm._v("Indigo")
                          ]),
                          _c("option", { staticClass: "bg-lightblue" }, [
                            _vm._v("Lightblue")
                          ]),
                          _c("option", { staticClass: "bg-navy" }, [
                            _vm._v("Navy")
                          ]),
                          _c("option", { staticClass: "bg-purple" }, [
                            _vm._v("Purple")
                          ]),
                          _c("option", { staticClass: "bg-fuchsia" }, [
                            _vm._v("Fuchsia")
                          ]),
                          _c("option", { staticClass: "bg-pink" }, [
                            _vm._v("Pink")
                          ]),
                          _c("option", { staticClass: "bg-maroon" }, [
                            _vm._v("Maroon")
                          ]),
                          _c("option", { staticClass: "bg-orange" }, [
                            _vm._v("Orange")
                          ]),
                          _c("option", { staticClass: "bg-lime" }, [
                            _vm._v("Lime")
                          ]),
                          _c("option", { staticClass: "bg-teal" }, [
                            _vm._v("Teal")
                          ]),
                          _c("option", { staticClass: "bg-olive" }, [
                            _vm._v("Olive")
                          ])
                        ]
                      ),
                      _c("h6", [_vm._v("Light Sidebar Variants")]),
                      _c("div", { staticClass: "d-flex" }),
                      _c(
                        "select",
                        { staticClass: "custom-select mb-3 border-0" },
                        [
                          _c("option", [_vm._v("None Selected")]),
                          _c("option", { staticClass: "bg-primary" }, [
                            _vm._v("Primary")
                          ]),
                          _c("option", { staticClass: "bg-warning" }, [
                            _vm._v("Warning")
                          ]),
                          _c("option", { staticClass: "bg-info" }, [
                            _vm._v("Info")
                          ]),
                          _c("option", { staticClass: "bg-danger" }, [
                            _vm._v("Danger")
                          ]),
                          _c("option", { staticClass: "bg-success" }, [
                            _vm._v("Success")
                          ]),
                          _c("option", { staticClass: "bg-indigo" }, [
                            _vm._v("Indigo")
                          ]),
                          _c("option", { staticClass: "bg-lightblue" }, [
                            _vm._v("Lightblue")
                          ]),
                          _c("option", { staticClass: "bg-navy" }, [
                            _vm._v("Navy")
                          ]),
                          _c("option", { staticClass: "bg-purple" }, [
                            _vm._v("Purple")
                          ]),
                          _c("option", { staticClass: "bg-fuchsia" }, [
                            _vm._v("Fuchsia")
                          ]),
                          _c("option", { staticClass: "bg-pink" }, [
                            _vm._v("Pink")
                          ]),
                          _c("option", { staticClass: "bg-maroon" }, [
                            _vm._v("Maroon")
                          ]),
                          _c("option", { staticClass: "bg-orange" }, [
                            _vm._v("Orange")
                          ]),
                          _c("option", { staticClass: "bg-lime" }, [
                            _vm._v("Lime")
                          ]),
                          _c("option", { staticClass: "bg-teal" }, [
                            _vm._v("Teal")
                          ]),
                          _c("option", { staticClass: "bg-olive" }, [
                            _vm._v("Olive")
                          ])
                        ]
                      ),
                      _c("h6", [_vm._v("Brand Logo Variants")]),
                      _c("div", { staticClass: "d-flex" }),
                      _c(
                        "select",
                        { staticClass: "custom-select mb-3 border-0" },
                        [
                          _c("option", [_vm._v("None Selected")]),
                          _c("option", { staticClass: "bg-primary" }, [
                            _vm._v("Primary")
                          ]),
                          _c("option", { staticClass: "bg-secondary" }, [
                            _vm._v("Secondary")
                          ]),
                          _c("option", { staticClass: "bg-info" }, [
                            _vm._v("Info")
                          ]),
                          _c("option", { staticClass: "bg-success" }, [
                            _vm._v("Success")
                          ]),
                          _c("option", { staticClass: "bg-danger" }, [
                            _vm._v("Danger")
                          ]),
                          _c("option", { staticClass: "bg-indigo" }, [
                            _vm._v("Indigo")
                          ]),
                          _c("option", { staticClass: "bg-purple" }, [
                            _vm._v("Purple")
                          ]),
                          _c("option", { staticClass: "bg-pink" }, [
                            _vm._v("Pink")
                          ]),
                          _c("option", { staticClass: "bg-navy" }, [
                            _vm._v("Navy")
                          ]),
                          _c("option", { staticClass: "bg-lightblue" }, [
                            _vm._v("Lightblue")
                          ]),
                          _c("option", { staticClass: "bg-teal" }, [
                            _vm._v("Teal")
                          ]),
                          _c("option", { staticClass: "bg-cyan" }, [
                            _vm._v("Cyan")
                          ]),
                          _c("option", { staticClass: "bg-dark" }, [
                            _vm._v("Dark")
                          ]),
                          _c("option", { staticClass: "bg-gray-dark" }, [
                            _vm._v("Gray dark")
                          ]),
                          _c("option", { staticClass: "bg-gray" }, [
                            _vm._v("Gray")
                          ]),
                          _c("option", { staticClass: "bg-light" }, [
                            _vm._v("Light")
                          ]),
                          _c("option", { staticClass: "bg-warning" }, [
                            _vm._v("Warning")
                          ]),
                          _c("option", { staticClass: "bg-white" }, [
                            _vm._v("White")
                          ]),
                          _c("option", { staticClass: "bg-orange" }, [
                            _vm._v("Orange")
                          ]),
                          _c("a", { attrs: { href: "#" } }, [_vm._v("clear")])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _c(
              "div",
              {
                staticClass:
                  "os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"
              },
              [
                _c("div", { staticClass: "os-scrollbar-track" }, [
                  _c("div", {
                    staticClass: "os-scrollbar-handle",
                    staticStyle: { transform: "translate(0px)" }
                  })
                ])
              ]
            ),
            _c(
              "div",
              {
                staticClass:
                  "os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden"
              },
              [
                _c("div", { staticClass: "os-scrollbar-track" }, [
                  _c("div", {
                    staticClass: "os-scrollbar-handle",
                    staticStyle: { transform: "translate(0px)" }
                  })
                ])
              ]
            ),
            _c("div", { staticClass: "os-scrollbar-corner" })
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);