(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dashboard",
  props: ['lang'],
  data: function data() {
    return {
      tasklist: [],
      task: {
        task: '',
        status: 0
      },
      processing: false
    };
  },
  created: function created() {
    var _this = this;

    window.scrollTo(0, 0);
    axios.get("/api/task-list").then(function (response) {
      _this.tasklist = response.data.allData;
    });
  },
  methods: {
    submitdata: function submitdata() {
      var _this2 = this;

      this.processing = true;
      var uri = '/api/task-store';
      axios.post(uri, this.task).then(function (response) {
        if (response.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
          _this2.processing = false;
        } else {
          Swal.fire({
            icon: 'success',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
          _this2.tasklist = response.data.allData;
          _this2.processing = false;
          _this2.task.task = "";
          _this2.task.status = 0;
        }
      });
    },
    completeTask: function completeTask(id) {
      var _this3 = this;

      axios.get("/api/task-complete/".concat(id)).then(function (response) {
        if (response.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
          _this3.processing = false;
        } else {
          _this3.tasklist = response.data.allData;
          Swal.fire({
            icon: 'success',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        }
      });
    },
    deleteTask: function deleteTask(id) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.get("/api/task-delete/".concat(id)).then(function (response) {
            if (response.data.status == 0) {
              Swal.fire({
                icon: 'error',
                text: response.data.message,
                showConfirmButton: true,
                timer: 6000
              });
              _this4.processing = false;
            } else {
              _this4.tasklist = response.data.allData;
              Swal.fire({
                icon: 'success',
                text: response.data.message,
                showConfirmButton: true,
                timer: 6000
              });
            }
          });
        }
      });
    },
    incompleteTask: function incompleteTask(id) {
      var _this5 = this;

      axios.get("/api/task-incomplete/".concat(id)).then(function (response) {
        if (response.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
          _this5.processing = false;
        } else {
          _this5.tasklist = response.data.allData;
          Swal.fire({
            icon: 'success',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "w3lvide-content",
      attrs: {
        id: "block",
        "data-vide-bg": "/images/slot",
        "data-vide-options": "position: 0% 50%"
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper" }, [
        _c("div", { staticClass: "workinghny-form-grid" }, [
          _c("div", { staticClass: "slot-w3l-comingsoon" }, [
            _c("div", { staticClass: "slot-w3content" }, [
              _c("h3", [_vm._v("Task Management System")]),
              _vm._v(" "),
              _c("h1", [_vm._v("Manage your everyday task.")]),
              _vm._v(" "),
              _c("p", { staticClass: "text-5 text-light mb-3" }, [
                _vm._v("Enter your task and submit.")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "w3hny-subscribe-form",
                  attrs: { action: "javascript:void(0)", method: "post" },
                  on: { submit: _vm.submitdata }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.task.task,
                        expression: "task.task"
                      }
                    ],
                    staticClass: "form-control required",
                    attrs: {
                      type: "text",
                      required: "",
                      placeholder: "Enter Your Task Here.."
                    },
                    domProps: { value: _vm.task.task },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.task, "task", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("font", { attrs: { size: "3px" } }, [
                        _vm._v(
                          _vm._s(_vm.processing ? "Please wait" : "Submit")
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "main-hotair", staticStyle: { width: "100%" } },
            [
              _c("div", { staticClass: "content-wthree" }, [
                _c("h2", [_vm._v("Task List")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-grids" }, [
                  _c(
                    "ul",
                    { attrs: { id: "myUL" } },
                    _vm._l(_vm.tasklist, function(singletask) {
                      return singletask.status == 0
                        ? _c("li", { key: singletask }, [
                            _vm._v(
                              _vm._s(singletask.task) +
                                " \n                                "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-success btn-sm",
                                staticStyle: { width: "20%", float: "right" },
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.completeTask(singletask.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-check",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-sm",
                                staticStyle: { width: "20%", float: "right" },
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteTask(singletask.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-trash",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          ])
                        : _c("li", { staticClass: "checked" }, [
                            _vm._v(
                              _vm._s(singletask.task) +
                                "\n                                "
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-warning btn-sm",
                                staticStyle: { width: "20%", float: "right" },
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.incompleteTask(singletask.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-close",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-sm",
                                staticStyle: { width: "20%", float: "right" },
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteTask(singletask.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-trash",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          ])
                    }),
                    0
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          position: "absolute",
          "z-index": "-1",
          inset: "0px",
          overflow: "hidden",
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "background-position": "center center"
        }
      },
      [
        _c(
          "video",
          {
            staticStyle: {
              visibility: "visible",
              margin: "auto",
              position: "absolute",
              "z-index": "-1",
              top: "50%",
              left: "0%",
              transform: "translate(0%, -50%)",
              width: "1351px",
              height: "auto"
            },
            attrs: { autoplay: "", loop: "" }
          },
          [
            _c("source", {
              attrs: { src: "images/slot.mp4", type: "video/mp4" }
            }),
            _c("source", {
              attrs: { src: "images/slot.webm", type: "video/webm" }
            }),
            _c("source", {
              attrs: { src: "images/slot.ogv", type: "video/ogg" }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "copyright text-center" }, [
      _c("p", { staticClass: "copy-footer-29" }, [
        _vm._v(
          "© 2021 Task management system. All rights reserved | Developed by "
        ),
        _c("a", { attrs: { href: "http://baizidmdashadzzaman.com/" } }, [
          _vm._v("Asadzaman")
        ])
      ])
    ])
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