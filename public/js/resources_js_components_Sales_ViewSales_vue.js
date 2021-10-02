(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Sales_ViewSales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "user",
  props: ['lang'],
  data: function data() {
    return {
      printLoading: true,
      printObj: {
        id: "printMe",
        popTitle: 'Sales invoice',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback: function beforeOpenCallback(vue) {
          vue.printLoading = true;
          console.log('asadzaman');
        },
        openCallback: function openCallback(vue) {
          vue.printLoading = false;
          console.log('asadzaman');
        },
        closeCallback: function closeCallback(vue) {
          console.log('asadzaman');
        }
      },
      processing: false,
      ThisIsField1: '',
      search: {
        query: ''
      },
      setting: {},
      sales: {},
      salesproduct: [],
      customer: {},
      customerstatus: 0
    };
  },
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
    this.$emit("listenerChild", 9);
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/sales-view/".concat(this.$route.params.id)).then(function (response) {
        _this.setting = response.data.setting;
        _this.sales = response.data.sales;
        _this.printObj.popTitle = 'Sales-' + response.data.sales.sales_number;
        _this.salesproduct = response.data.salesproduct;
        _this.customer = response.data.customer;

        if (response.data.customer != null) {
          _this.customerstatus = 1;
        }
      });
    },
    keymonitor: function keymonitor() {
      var _this2 = this;

      this.search.query = this.ThisIsField1;
      var uri = '/api/sales-search';
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(uri, this.search).then(function (response) {
        _this2.alldata = response.data.allData;
      });
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

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
          axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/sales-delete/".concat(id)).then(function (response) {
            if (response.data.status == 0) {
              Swal.fire({
                icon: 'error',
                text: response.data.message,
                showConfirmButton: true,
                timer: 6000
              });
              _this3.processing = false;
            } else {
              _this3.alldata = response.data.allData;
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
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Sales/ViewSales.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Sales/ViewSales.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewSales.vue?vue&type=template&id=707bb669& */ "./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669&");
/* harmony import */ var _ViewSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewSales.vue?vue&type=script&lang=js& */ "./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ViewSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sales/ViewSales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewSales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewSales_vue_vue_type_template_id_707bb669___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewSales.vue?vue&type=template&id=707bb669& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/ViewSales.vue?vue&type=template&id=707bb669& ***!
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
  return _c("div", { staticStyle: { "min-height": "1604.8px" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "callout callout-info" }, [
              _c("div", { staticClass: "row no-print" }, [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-success float-right",
                        staticStyle: {
                          color: "white",
                          "text-decoration": "none"
                        },
                        attrs: {
                          to: {
                            name: "salesedit",
                            params: { id: _vm.sales.id }
                          }
                        }
                      },
                      [
                        _c("font", { staticStyle: { color: "white" } }, [
                          _c("i", { staticClass: "fas fa-edit" }),
                          _vm._v(" Edit Sales")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "print",
                            rawName: "v-print",
                            value: _vm.printObj,
                            expression: "printObj"
                          }
                        ],
                        staticClass: "btn btn-primary float-right",
                        staticStyle: { "margin-right": "5px" },
                        attrs: { type: "button" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-print" }),
                        _vm._v(" Print Invoice\r\n                  ")
                      ]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "invoice p-3 mb-3", attrs: { id: "printMe" } },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("h4", [
                      _c("img", {
                        staticStyle: { width: "50px" },
                        attrs: {
                          src: "/settingimages/" + _vm.setting.site_logo,
                          alt: ""
                        }
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.setting.site_name) +
                          "\r\n                    "
                      ),
                      _c("small", { staticClass: "float-right" }, [
                        _vm._v("Date: " + _vm._s(_vm.sales.sales_date))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row invoice-info" }, [
                  _c("div", { staticClass: "col-sm-4 invoice-col" }, [
                    _vm._v("\r\n                  From\r\n                  "),
                    _c("address", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.setting.site_name) + ".")
                      ]),
                      _c("br"),
                      _vm._v(
                        "\r\n                    " +
                          _vm._s(_vm.setting.site_information)
                      ),
                      _c("br"),
                      _vm._v(
                        "\r\n                    Phone: " +
                          _vm._s(_vm.setting.site_phone)
                      ),
                      _c("br"),
                      _vm._v(
                        "\r\n                    Email: " +
                          _vm._s(_vm.setting.site_email) +
                          "\r\n                  "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4 invoice-col" }, [
                    _vm._v("\r\n                  To\r\n                  "),
                    this.customerstatus == 1
                      ? _c("address", [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.customer.customer_name))
                          ]),
                          _c("br"),
                          _vm._v(
                            "\r\n                    " +
                              _vm._s(_vm.customer.customer_address)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                    Phone: " +
                              _vm._s(_vm.customer.customer_phone)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                    CUID: " +
                              _vm._s(_vm.customer.customer_code) +
                              "\r\n                  "
                          )
                        ])
                      : _c("address", [
                          _c("strong", [_vm._v("Walking customer")]),
                          _c("br"),
                          _vm._v("\r\n                    Phone: 01XXXXXXXXX"),
                          _c("br"),
                          _vm._v(
                            "\r\n                    Email: Not avaibale\r\n                  "
                          )
                        ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4 invoice-col" },
                    [
                      _c("b", [
                        _vm._v("Invoice #inv-" + _vm._s(_vm.sales.sales_number))
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Sales ID:")]),
                      _vm._v(" " + _vm._s(_vm.sales.sales_number)),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Sales time:")]),
                      _vm._v(" " + _vm._s(_vm.sales.created_at)),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Status:")]),
                      _vm._v(" "),
                      _vm.sales.status == 0
                        ? _c("font", [_vm._v("Pending")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sales.status == 1
                        ? _c("font", [_vm._v("Accepted")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.sales.status == 2
                        ? _c("font", [_vm._v("Cancel")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("br")
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 table-responsive" }, [
                    _c("table", { staticClass: "table table-striped" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.salesproduct, function(sproduct) {
                          return _c("tr", { key: sproduct }, [
                            _c("td", [_vm._v(_vm._s(sproduct.id))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "rounded",
                                staticStyle: { width: "50px", height: "50px" },
                                attrs: {
                                  src:
                                    "/productimages/" + sproduct.product_image,
                                  alt: ""
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(sproduct.product_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(sproduct.product_price))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(sproduct.sales_quantity))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  sproduct.sales_quantity *
                                    sproduct.product_price -
                                    sproduct.product_sales_totalprice
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(sproduct.product_sales_totalprice))
                            ])
                          ])
                        }),
                        0
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table" }, [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", { staticStyle: { width: "50%" } }, [
                              _vm._v("Subtotal:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.sales.sub_total))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Discount:")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _vm._v(
                                  _vm._s(_vm.sales.discount) +
                                    " \r\n                          "
                                ),
                                _vm.sales.discount_type == 0
                                  ? _c("font", [_vm._v(" taka")])
                                  : _c("font", [_vm._v(" percent")])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Total:")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.sales.total_amount) +
                                  " \r\n                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Paid:")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.sales.paid_amount))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Remaing:")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.sales.remaining_ammount))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            )
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
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v("Sales View")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Sales")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("View")
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
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