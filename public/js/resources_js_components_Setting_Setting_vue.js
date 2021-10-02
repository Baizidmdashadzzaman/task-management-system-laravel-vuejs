(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Setting_Setting_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "brand",
  props: ['lang'],
  data: function data() {
    return {
      user: {
        site_name: "",
        site_logo: "",
        site_favicon: 1,
        site_information: "",
        site_phone: "",
        site_email: "",
        site_fb: "",
        site_meta_keyword: "",
        site_meta_description: ""
      },
      processing: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/setting").then(function (response) {
      _this.user.site_name = response.data.allData.site_name;
      _this.user.site_logo = response.data.allData.site_logo;
      _this.user.site_favicon = response.data.allData.site_favicon;
      _this.user.site_information = response.data.allData.site_information;
      _this.user.site_phone = response.data.allData.site_phone;
      _this.user.site_email = response.data.allData.site_email;
      _this.user.site_fb = response.data.allData.site_fb;
      _this.user.site_meta_keyword = response.data.allData.site_meta_keyword;
      _this.user.site_meta_description = response.data.allData.site_meta_description;
    });
    window.scrollTo(0, 0);
    this.$emit("listenerChild", 5);
  },
  methods: {
    onImageChange: function onImageChange(e) {
      this.user.site_logo = e.target.files[0];
    },
    onImageChange2: function onImageChange2(e) {
      this.user.site_favicon = e.target.files[0];
    },
    submitdata: function submitdata(e) {
      var _this2 = this;

      e.preventDefault();
      this.processing = true;
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('site_name', this.user.site_name);
      formData.append('site_logo', this.user.site_logo);
      formData.append('site_favicon', this.user.site_favicon);
      formData.append('site_information', this.user.site_information);
      formData.append('site_phone', this.user.site_phone);
      formData.append('site_email', this.user.site_email);
      formData.append('site_fb', this.user.site_fb);
      formData.append('site_meta_keyword', this.user.site_meta_keyword);
      formData.append('site_meta_description', this.user.site_meta_description);
      axios.post('/api/setting-update', formData, config).then(function (res) {
        _this2.processing = false;
        _this2.$refs.file.type = 'text';
        _this2.$refs.file.type = 'file';
        _this2.messages = res.data.msg;

        if (res.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: res.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        } else {
          _this2.user.site_name = res.data.allData.site_name;
          _this2.user.site_logo = res.data.allData.site_logo;
          _this2.user.site_favicon = res.data.allData.site_favicon;
          _this2.user.site_information = res.data.allData.site_information;
          _this2.user.site_phone = res.data.allData.site_phone;
          _this2.user.site_email = res.data.allData.site_email;
          _this2.user.site_fb = res.data.allData.site_fb;
          _this2.user.site_meta_keyword = res.data.allData.site_meta_keyword;
          _this2.user.site_meta_description = res.data.allData.site_meta_description;
          Swal.fire({
            icon: 'success',
            text: res.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=085e8d56& */ "./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js& */ "./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__.render,
  _Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Setting/Setting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=template&id=085e8d56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "min-height": "1345.6px" } }, [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "dashboard" } } }, [
                    _vm._v("Home")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("System")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Setting")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card card-primary" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    action: "javascript:void(0)",
                    method: "post",
                    enctype: "multipart/form-data"
                  },
                  on: { submit: _vm.submitdata }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_name,
                            expression: "user.site_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_name",
                          id: "site_name",
                          placeholder: "Enter site name",
                          required: ""
                        },
                        domProps: { value: _vm.user.site_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "site_name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("center", [
                          _c("img", {
                            staticStyle: { width: "100px" },
                            attrs: {
                              src: "/settingimages/" + _vm.user.site_logo,
                              alt: ""
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site logo")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "file",
                        staticClass: "form-control",
                        attrs: {
                          type: "file",
                          name: "site_logo",
                          id: "site_logo",
                          placeholder: "Enter site logo"
                        },
                        on: { change: _vm.onImageChange }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("center", [
                          _c("img", {
                            staticStyle: { width: "100px" },
                            attrs: {
                              src: "/settingimages/" + _vm.user.site_favicon,
                              alt: ""
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site favicon")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "file",
                        staticClass: "form-control",
                        attrs: {
                          type: "file",
                          name: "site_favicon",
                          id: "site_favicon",
                          placeholder: "Enter site favicon"
                        },
                        on: { change: _vm.onImageChange2 }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site Information")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_information,
                            expression: "user.site_information"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_information",
                          id: "site_information",
                          placeholder: "Enter site information",
                          required: ""
                        },
                        domProps: { value: _vm.user.site_information },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "site_information",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site Phone")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_phone,
                            expression: "user.site_phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_phone",
                          id: "site_phone",
                          placeholder: "Enter site phone",
                          required: ""
                        },
                        domProps: { value: _vm.user.site_phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "site_phone",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site Email")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_email,
                            expression: "user.site_email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          name: "site_email",
                          id: "site_email",
                          placeholder: "Enter site email",
                          required: ""
                        },
                        domProps: { value: _vm.user.site_email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "site_email",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Site Facebook Link")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_fb,
                            expression: "user.site_fb"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_fb",
                          id: "site_fb",
                          placeholder: "Enter site fb link",
                          required: ""
                        },
                        domProps: { value: _vm.user.site_fb },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "site_fb", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Meta keywords (Seo)")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_meta_keyword,
                            expression: "user.site_meta_keyword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_meta_keyword",
                          id: "site_meta_keyword",
                          placeholder: "Enter meta keywords"
                        },
                        domProps: { value: _vm.user.site_meta_keyword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "site_meta_keyword",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Meta descriptions (Seo)")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.site_meta_description,
                            expression: "user.site_meta_description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "site_meta_description",
                          id: "site_meta_description",
                          placeholder: "Enter meta descriptions"
                        },
                        domProps: { value: _vm.user.site_meta_description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "site_meta_description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.processing ? "Please wait" : "Update")
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("System setting")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Update your setting information.")
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