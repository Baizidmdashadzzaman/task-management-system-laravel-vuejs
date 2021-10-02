(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Product_AddProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "login",
  props: ['lang'],
  data: function data() {
    return {
      user: {
        category_id: 0,
        brand_id: 0,
        product_name: "",
        product_image: "",
        product_status: 1,
        product_original_price: "",
        product_sell_price: "",
        product_description: "",
        product_stock: "",
        product_code_custome: ""
      },
      allCategory: [],
      allBrand: [],
      processing: false,
      productcodestatus: 1
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/category-list").then(function (response) {
      _this.allCategory = response.data.allData;
    });
    axios.get("/api/brand-list").then(function (response) {
      _this.allBrand = response.data.allData;
    });
    window.scrollTo(0, 0);
    this.$emit("listenerChild", 8);
  },
  methods: {
    keymonitor: function keymonitor() {
      var _this2 = this;

      var uri = '/api/product-checkcode';
      axios.post(uri, this.user).then(function (response) {
        _this2.productcodestatus = response.data.available;
      });
    },
    onImageChange: function onImageChange(e) {
      this.user.product_image = e.target.files[0];
    },
    submitdata: function submitdata(e) {
      var _this3 = this;

      e.preventDefault();
      this.processing = true;
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('category_id', this.user.category_id);
      formData.append('brand_id', this.user.brand_id);
      formData.append('product_name', this.user.product_name);
      formData.append('product_code_custome', this.user.product_code_custome);
      formData.append('product_image', this.user.product_image);
      formData.append('product_status', this.user.product_status);
      formData.append('product_original_price', this.user.product_original_price);
      formData.append('product_sell_price', this.user.product_sell_price);
      formData.append('product_description', this.user.product_description);
      formData.append('product_stock', this.user.product_stock);
      axios.post('/api/product-store', formData, config).then(function (res) {
        _this3.processing = false;
        _this3.user.category_id = 0;
        _this3.user.brand_id = 0;
        _this3.user.product_name = '';
        _this3.user.product_code_custome = '';
        _this3.user.product_image = '';
        _this3.user.product_status = 1;
        _this3.user.product_original_price = '';
        _this3.user.product_sell_price = '';
        _this3.user.product_description = '';
        _this3.user.product_stock = '';
        _this3.productcodestatus = 1;
        _this3.$refs.file.type = 'text';
        _this3.$refs.file.type = 'file';
        _this3.messages = res.data.msg;

        if (res.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: res.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        } else {
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

/***/ "./resources/js/components/Product/AddProduct.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Product/AddProduct.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=1997fcf9& */ "./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9&");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product/AddProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_template_id_1997fcf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddProduct.vue?vue&type=template&id=1997fcf9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Product/AddProduct.vue?vue&type=template&id=1997fcf9& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Product")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Add")
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
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Category")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.category_id,
                                expression: "user.category_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "category_id" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user,
                                  "category_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("-select category-")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.allCategory, function(category) {
                              return _c(
                                "option",
                                {
                                  key: category,
                                  domProps: { value: category.id }
                                },
                                [_vm._v(_vm._s(category.category_name))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Brand")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.brand_id,
                                expression: "user.brand_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "brand_id" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user,
                                  "brand_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("-select brand-")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.allBrand, function(brand) {
                              return _c(
                                "option",
                                { key: brand, domProps: { value: brand.id } },
                                [_vm._v(_vm._s(brand.brand_name))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_name,
                              expression: "user.product_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "product_name",
                            id: "product_name",
                            placeholder: "Enter product name",
                            required: ""
                          },
                          domProps: { value: _vm.user.product_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product Code")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_code_custome,
                              expression: "user.product_code_custome"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "product_code_custome",
                            id: "product_code_custome",
                            placeholder: "Enter product code",
                            required: ""
                          },
                          domProps: { value: _vm.user.product_code_custome },
                          on: {
                            keyup: _vm.keymonitor,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_code_custome",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      this.productcodestatus == 0
                        ? _c("font", { staticStyle: { color: "green" } }, [
                            _vm._v("Code available to use.")
                          ])
                        : _c("font", { staticStyle: { color: "red" } }, [
                            _vm._v("Code not available,enter to check again.")
                          ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product Image")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          ref: "file",
                          staticClass: "form-control",
                          attrs: {
                            type: "file",
                            name: "product_image",
                            id: "product_image",
                            placeholder: "Enter product image",
                            required: ""
                          },
                          on: { change: _vm.onImageChange }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product original price")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_original_price,
                              expression: "user.product_original_price"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            step: "0.01",
                            min: "0",
                            name: "product_original_price",
                            id: "product_original_price",
                            placeholder: "Enter product original price",
                            required: ""
                          },
                          domProps: { value: _vm.user.product_original_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_original_price",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product sell price")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_sell_price,
                              expression: "user.product_sell_price"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            step: "0.01",
                            min: "0",
                            name: "product_sell_price",
                            id: "product_sell_price",
                            placeholder: "Enter product original price",
                            required: ""
                          },
                          domProps: { value: _vm.user.product_sell_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_sell_price",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product description")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_description,
                              expression: "user.product_description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "product_description",
                            id: "product_description",
                            placeholder: "Enter product description"
                          },
                          domProps: { value: _vm.user.product_description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Product Stocks")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.product_stock,
                              expression: "user.product_stock"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "product_stock",
                            id: "product_stock",
                            placeholder: "Enter product stocks",
                            required: ""
                          },
                          domProps: { value: _vm.user.product_stock },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "product_stock",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Status")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.product_status,
                                expression: "user.product_status"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "product_status" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user,
                                  "product_status",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "1", selected: "" } },
                              [_vm._v("Active")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Inactive")
                            ])
                          ]
                        )
                      ])
                    ],
                    1
                  ),
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
                          _vm._s(_vm.processing ? "Please wait" : "Submit")
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
      _c("h1", [_vm._v("Product")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Add product")])
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