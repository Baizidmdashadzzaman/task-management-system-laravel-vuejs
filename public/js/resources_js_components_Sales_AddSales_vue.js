(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Sales_AddSales_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sales",
  props: ['lang'],
  data: function data() {
    return {
      sales: {
        subtotal: 0,
        discount: 0,
        discounttype: 0,
        discountammount: 0,
        paid: 0,
        total: 0,
        remaining: 0,
        customer_id: 0,
        processing: false,
        user_id: this.$store.state.auth.user.id
      },
      category_id: {
        id: 0
      },
      brand_id: {
        id: 0
      },
      allProduct: [],
      allCustomer: [],
      allCategory: [],
      allBrand: [],
      allSalesCart: [],
      processing: false,
      ThisIsField1: '',
      search: {
        query: ''
      },
      salesCartModal: {
        user_id: this.$store.state.auth.user.id,
        product_id: '',
        product_name: '',
        product_code: '',
        product_code_custome: '',
        product_image: '',
        product_stock: '',
        product_sellprice: '',
        product_original_price: '',
        discount_type: '',
        discount_ammount: '',
        product_sales_discount: '',
        product_sales_qty: '',
        product_sales_price: '',
        product_sales_totalprice: '',
        button: '',
        processing: false,
        salescartstatus: ''
      },
      userCartcheck: {
        user_id: this.$store.state.auth.user.id,
        product_id: ''
      },
      searchproductbycode: {
        productcode: '',
        user_id: this.$store.state.auth.user.id
      }
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/sales-add").then(function (response) {
      _this.allProduct = response.data.allProduct;
      _this.allCustomer = response.data.allCustomer;
      _this.allCategory = response.data.allCategory;
      _this.allBrand = response.data.allBrand;
      _this.allSalesCart = response.data.allSalesCart;
    });
    axios.get("/api/get-salescart/".concat(this.$store.state.auth.user.id)).then(function (response) {
      _this.allSalesCart = response.data.allSalesCart;
      var totalCalMoney = 0;
      $.each(response.data.allSalesCart, function (index, cartdata) {
        totalCalMoney = cartdata.product_sales_totalprice + totalCalMoney;
      });
      _this.sales.subtotal = totalCalMoney;
      _this.sales.total = _this.sales.subtotal - _this.sales.discountammount;
      _this.sales.remaining = _this.sales.total - _this.sales.paid;
    });
    window.scrollTo(0, 0);
    this.$emit("listenerChild", 10);
  },
  methods: {
    searchProductByCode: function searchProductByCode() {
      var _this2 = this;

      var uri = '/api/product-search-bycode';
      axios.post(uri, this.searchproductbycode).then(function (response) {
        if (response.data.status == 2) {
          Swal.fire({
            icon: 'error',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        } else {
          if (response.data.status == 0) {
            _this2.salesCartModal.button = 'Add to sales';
            _this2.salesCartModal.product_id = response.data.product.id;
            _this2.salesCartModal.product_name = response.data.product.product_name;
            _this2.salesCartModal.product_code = response.data.product.product_code;
            _this2.salesCartModal.product_code_custome = response.data.product.product_code_custome;
            _this2.salesCartModal.product_image = response.data.product.product_image;
            _this2.salesCartModal.product_stock = response.data.product.product_stock;
            _this2.salesCartModal.product_sellprice = response.data.product.product_sell_price;
            _this2.salesCartModal.product_original_price = response.data.product.product_original_price;
            _this2.salesCartModal.discount_type = 0;
            _this2.salesCartModal.discount_ammount = 0;
            _this2.salesCartModal.product_sales_discount = 0;
            _this2.salesCartModal.product_sales_qty = 1;
            _this2.salesCartModal.product_sales_price = response.data.product.product_sell_price;
            _this2.salesCartModal.product_sales_totalprice = response.data.product.product_sell_price;
            _this2.salesCartModal.salescartstatus = 0;
          } else {
            _this2.salesCartModal.button = 'Update sales';
            _this2.salesCartModal.product_id = response.data.product.id;
            _this2.salesCartModal.product_name = response.data.product.product_name;
            _this2.salesCartModal.product_code = response.data.product.product_code;
            _this2.salesCartModal.product_code_custome = response.data.product.product_code_custome;
            _this2.salesCartModal.product_image = response.data.product.product_image;
            _this2.salesCartModal.product_stock = response.data.product.product_stock;
            _this2.salesCartModal.product_sellprice = response.data.productSalesCart.product_sellprice;
            _this2.salesCartModal.product_original_price = response.data.productSalesCart.product_original_price;
            _this2.salesCartModal.discount_type = response.data.productSalesCart.discount_type;
            _this2.salesCartModal.discount_ammount = response.data.productSalesCart.discount_ammount;
            _this2.salesCartModal.product_sales_discount = response.data.productSalesCart.product_sales_discount;
            _this2.salesCartModal.product_sales_qty = response.data.productSalesCart.product_sales_qty;
            _this2.salesCartModal.product_sales_price = response.data.productSalesCart.product_sales_price;
            _this2.salesCartModal.product_sales_totalprice = response.data.productSalesCart.product_sales_totalprice;
            _this2.salesCartModal.salescartstatus = 1;
          }

          $('#modalAddtoSalesCart').modal('show');
        }
      });
    },
    submitSalesOrder: function submitSalesOrder() {
      var _this3 = this;

      this.sales.processing = true;
      var uri = '/api/sales-save';
      axios.post(uri, this.sales).then(function (response) {
        _this3.sales.processing = false;

        if (response.data.status == 0) {
          Swal.fire({
            icon: 'error',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        } else {
          $('#discountModalPopup').modal('hide');

          _this3.$router.push({
            name: 'salesview',
            params: {
              id: response.data.salesid
            }
          });

          Swal.fire({
            icon: 'success',
            text: response.data.message,
            showConfirmButton: true,
            timer: 6000
          });
        }
      });
    },
    calculateDiscount: function calculateDiscount() {
      if (this.sales.discounttype == 0) {
        this.sales.discountammount = this.sales.discount;
        this.sales.total = this.sales.subtotal - this.sales.discountammount;
        this.sales.remaining = this.sales.total - this.sales.paid;
      } else {
        this.sales.discountammount = this.sales.subtotal * (this.sales.discount / 100);
        this.sales.total = this.sales.subtotal - this.sales.discountammount;
        this.sales.remaining = this.sales.total - this.sales.paid;
      }
    },
    calculatePayment: function calculatePayment() {
      this.sales.remaining = this.sales.total - this.sales.paid;
    },
    discountModalPopup: function discountModalPopup() {
      $('#discountModalPopup').modal('show');
    },
    paymentModal: function paymentModal() {
      $('#paymentModal').modal('show');
    },
    deleteSalesCart: function deleteSalesCart(id) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios.get("/api/delete-salescart/".concat(id, "/").concat(_this4.$store.state.auth.user.id)).then(function (response) {
            if (response.data.status == 0) {
              Swal.fire({
                icon: 'error',
                text: response.data.message,
                showConfirmButton: true,
                timer: 6000
              });
            } else {
              _this4.allSalesCart = response.data.allSalesCart;
              var totalCalMoney = 0;
              $.each(response.data.allSalesCart, function (index, cartdata) {
                totalCalMoney = cartdata.product_sales_totalprice + totalCalMoney;
              });
              _this4.sales.subtotal = totalCalMoney;
              _this4.sales.total = _this4.sales.subtotal - _this4.sales.discountammount;
              _this4.sales.remaining = _this4.sales.total - _this4.sales.paid;
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
    submitSalesCart: function submitSalesCart() {
      var _this5 = this;

      this.salesCartModal.processing = true;
      var uri = '/api/product-addtosalescart-save';
      axios.post(uri, this.salesCartModal).then(function (response) {
        _this5.salesCartModal.processing = false;
        _this5.allSalesCart = response.data.allSalesCart;
        var totalCalMoney = 0;
        $.each(response.data.allSalesCart, function (index, cartdata) {
          totalCalMoney = cartdata.product_sales_totalprice + totalCalMoney;
        });
        _this5.sales.subtotal = totalCalMoney;
        _this5.sales.total = _this5.sales.subtotal - _this5.sales.discountammount;
        _this5.sales.remaining = _this5.sales.total - _this5.sales.paid;
        $('#modalAddtoSalesCart').modal('hide');
        Swal.fire({
          icon: 'success',
          text: response.data.message,
          showConfirmButton: true,
          timer: 6000
        });
      });
    },
    discountModal: function discountModal() {
      if (this.salesCartModal.discount_type == 0) {
        this.salesCartModal.product_sales_totalprice = this.salesCartModal.product_sales_qty * this.salesCartModal.product_sales_price - this.salesCartModal.discount_ammount;
      } else {
        this.salesCartModal.product_sales_totalprice = this.salesCartModal.product_sales_qty * this.salesCartModal.product_sales_price - this.salesCartModal.product_sales_qty * this.salesCartModal.product_sales_price * (this.salesCartModal.discount_ammount / 100);
      }
    },
    addToSalesCart: function addToSalesCart(id) {
      var _this6 = this;

      this.userCartcheck.product_id = id;
      var uri = '/api/product-addtosalescart-check';
      axios.post(uri, this.userCartcheck).then(function (response) {
        if (response.data.status == 0) {
          _this6.salesCartModal.button = 'Add to sales';
          _this6.salesCartModal.product_id = response.data.product.id;
          _this6.salesCartModal.product_name = response.data.product.product_name;
          _this6.salesCartModal.product_code = response.data.product.product_code;
          _this6.salesCartModal.product_code_custome = response.data.product.product_code_custome;
          _this6.salesCartModal.product_image = response.data.product.product_image;
          _this6.salesCartModal.product_stock = response.data.product.product_stock;
          _this6.salesCartModal.product_sellprice = response.data.product.product_sell_price;
          _this6.salesCartModal.product_original_price = response.data.product.product_original_price;
          _this6.salesCartModal.discount_type = 0;
          _this6.salesCartModal.discount_ammount = 0;
          _this6.salesCartModal.product_sales_discount = 0;
          _this6.salesCartModal.product_sales_qty = 1;
          _this6.salesCartModal.product_sales_price = response.data.product.product_sell_price;
          _this6.salesCartModal.product_sales_totalprice = response.data.product.product_sell_price;
          _this6.salesCartModal.salescartstatus = 0;
        } else {
          _this6.salesCartModal.button = 'Update sales';
          _this6.salesCartModal.product_id = response.data.product.id;
          _this6.salesCartModal.product_name = response.data.product.product_name;
          _this6.salesCartModal.product_code = response.data.product.product_code;
          _this6.salesCartModal.product_code_custome = response.data.product.product_code_custome;
          _this6.salesCartModal.product_image = response.data.product.product_image;
          _this6.salesCartModal.product_stock = response.data.product.product_stock;
          _this6.salesCartModal.product_sellprice = response.data.productSalesCart.product_sellprice;
          _this6.salesCartModal.product_original_price = response.data.productSalesCart.product_original_price;
          _this6.salesCartModal.discount_type = response.data.productSalesCart.discount_type;
          _this6.salesCartModal.discount_ammount = response.data.productSalesCart.discount_ammount;
          _this6.salesCartModal.product_sales_discount = response.data.productSalesCart.product_sales_discount;
          _this6.salesCartModal.product_sales_qty = response.data.productSalesCart.product_sales_qty;
          _this6.salesCartModal.product_sales_price = response.data.productSalesCart.product_sales_price;
          _this6.salesCartModal.product_sales_totalprice = response.data.productSalesCart.product_sales_totalprice;
          _this6.salesCartModal.salescartstatus = 1;
        }

        $('#modalAddtoSalesCart').modal('show');
      });
    },
    reloadData: function reloadData() {
      var _this7 = this;

      this.processing = true;
      axios.get("/api/sales-add").then(function (response) {
        _this7.allProduct = response.data.allProduct;
        _this7.allCustomer = response.data.allCustomer;
        _this7.allCategory = response.data.allCategory;
        _this7.allBrand = response.data.allBrand;
        _this7.allSalesCart = response.data.allSalesCart;
        var totalCalMoney = 0;
        $.each(response.data.allSalesCart, function (index, cartdata) {
          totalCalMoney = cartdata.product_sales_totalprice + totalCalMoney;
        });
        _this7.sales.subtotal = totalCalMoney;
        _this7.sales.total = _this7.sales.subtotal - _this7.sales.discountammount;
        _this7.sales.remaining = _this7.sales.total - _this7.sales.paid;
      });
      axios.get("/api/get-salescart/".concat(this.$store.state.auth.user.id)).then(function (response) {
        _this7.allSalesCart = response.data.allSalesCart;
        var totalCalMoney = 0;
        $.each(response.data.allSalesCart, function (index, cartdata) {
          totalCalMoney = cartdata.product_sales_totalprice + totalCalMoney;
        });
        _this7.sales.subtotal = totalCalMoney;
        _this7.sales.total = _this7.sales.subtotal - _this7.sales.discountammount;
        _this7.sales.remaining = _this7.sales.total - _this7.sales.paid;
        _this7.processing = false;
      });
    },
    keymonitor: function keymonitor() {
      var _this8 = this;

      this.search.query = this.ThisIsField1;
      var uri = '/api/product-search-sales';
      axios.post(uri, this.search).then(function (response) {
        _this8.allProduct = response.data.allData;
      });
    },
    getCategoryProduct: function getCategoryProduct() {
      var _this9 = this;

      var uri = '/api/product-bycategory-sales';
      axios.post(uri, this.category_id).then(function (response) {
        _this9.allProduct = response.data.allData;
      });
    },
    getBrandProduct: function getBrandProduct() {
      var _this10 = this;

      var uri = '/api/product-bybrand-sales';
      axios.post(uri, this.brand_id).then(function (response) {
        _this10.allProduct = response.data.allData;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Sales/AddSales.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Sales/AddSales.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSales.vue?vue&type=template&id=422b2a4e& */ "./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e&");
/* harmony import */ var _AddSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSales.vue?vue&type=script&lang=js& */ "./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sales/AddSales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddSales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSales_vue_vue_type_template_id_422b2a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddSales.vue?vue&type=template&id=422b2a4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sales/AddSales.vue?vue&type=template&id=422b2a4e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "min-height": "1302.4px" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "card card-primary card-outline " }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group", staticStyle: { padding: "8px" } },
                [
                  _c("label", [_vm._v("Customer")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.customer_id,
                          expression: "sales.customer_id"
                        }
                      ],
                      staticClass: "form-control",
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
                            _vm.sales,
                            "customer_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("Walk in customer")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.allCustomer, function(customer) {
                        return _c(
                          "option",
                          {
                            key: customer.id,
                            domProps: { value: customer.id }
                          },
                          [_vm._v(_vm._s(customer.customer_name))]
                        )
                      })
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-0" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-hover table-striped" },
                    [
                      _c(
                        "tbody",
                        _vm._l(_vm.allSalesCart, function(salescart) {
                          return _c("tr", { key: salescart }, [
                            _c("td", { staticClass: "mailbox-name" }, [
                              _c("img", {
                                staticClass: "rounded",
                                staticStyle: { width: "50px", height: "50px" },
                                attrs: {
                                  src:
                                    "/productimages/" + salescart.product_image,
                                  alt: ""
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "mailbox-subject" },
                              [
                                _c("b", [
                                  _vm._v(_vm._s(salescart.product_name))
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("font", { attrs: { size: "1px" } }, [
                                  _vm._v(
                                    "Price: " +
                                      _vm._s(salescart.product_sales_price) +
                                      " * Qty: " +
                                      _vm._s(salescart.product_sales_qty)
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "mailbox-attachment" },
                              [
                                _c("font", { attrs: { size: "2px" } }, [
                                  _vm._v(
                                    "Tk " +
                                      _vm._s(salescart.product_sales_totalprice)
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "mailbox-date" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addToSalesCart(
                                        salescart.product_id
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "mailbox-date" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteSalesCart(salescart.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "nav nav-pills flex-column" }, [
                  _c("li", { staticClass: "nav-item active" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fas fa-th" }),
                      _vm._v(" Sub total\r\n                    "),
                      _c("span", { staticClass: " float-right" }, [
                        _vm._v(_vm._s(_vm.sales.subtotal))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fas fa-th" }),
                      _vm._v(" Disocunt\r\n                    "),
                      _c("span", { staticClass: " float-right" }, [
                        _vm._v(_vm._s(_vm.sales.discountammount))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fas fa-th" }),
                      _vm._v(" Total\r\n                    "),
                      _c("span", { staticClass: " float-right" }, [
                        _vm._v(_vm._s(_vm.sales.total))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fas fa-th" }),
                      _vm._v(" Paid\r\n                    "),
                      _c("span", { staticClass: " float-right" }, [
                        _vm._v(_vm._s(_vm.sales.paid))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fas fa-th" }),
                      _vm._v(" Remaining\r\n                    "),
                      _c("span", { staticClass: " float-right" }, [
                        _vm._v(_vm._s(_vm.sales.remaining))
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 col-sm-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-block mb-3",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.discountModalPopup()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\r\n                  Submit order?\r\n                "
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "card card-primary card-outline" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Product list")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-tools" }, [
                  _c("div", { staticClass: "input-group input-group-md" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchproductbycode.productcode,
                          expression: "searchproductbycode.productcode"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter product code"
                      },
                      domProps: { value: _vm.searchproductbycode.productcode },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.searchProductByCode($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.searchproductbycode,
                            "productcode",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.searchProductByCode }
                        },
                        [_c("i", { staticClass: "fas fa-search" })]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-0" }, [
                _c("div", { staticClass: "mailbox-controls" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-md",
                      attrs: { type: "button" },
                      on: { click: _vm.reloadData }
                    },
                    [
                      _c("i", { staticClass: "fas fa-sync-alt" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.processing ? "Please wait" : "Reload") +
                          "\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "float-right" }, [
                    _c("div", { staticClass: "btn-group" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.category_id.id,
                                expression: "category_id.id"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.category_id,
                                    "id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.getCategoryProduct
                              ]
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
                                  key: category.id,
                                  domProps: { value: category.id }
                                },
                                [_vm._v(_vm._s(category.category_name))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v("   \r\n                    "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.brand_id.id,
                                expression: "brand_id.id"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.brand_id,
                                    "id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                _vm.getBrandProduct
                              ]
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
                                {
                                  key: brand.id,
                                  domProps: { value: brand.id }
                                },
                                [_vm._v(_vm._s(brand.brand_name))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v("   \r\n                    "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ThisIsField1,
                              expression: "ThisIsField1"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Search product by name"
                          },
                          domProps: { value: _vm.ThisIsField1 },
                          on: {
                            keyup: _vm.keymonitor,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.ThisIsField1 = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    staticStyle: { display: "block" }
                  },
                  [
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.allProduct, function(product) {
                        return _c(
                          "div",
                          {
                            key: product,
                            staticClass: "col-md-3 col-sm-6 col-12"
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.addToSalesCart(product.id)
                                  }
                                }
                              },
                              [
                                _c("center", [
                                  _c("div", { staticClass: "card" }, [
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "info-box-icon bg-success"
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "rounded",
                                            staticStyle: {
                                              width: "100px",
                                              height: "100px"
                                            },
                                            attrs: {
                                              src:
                                                "/productimages/" +
                                                product.product_image,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-text" },
                                        [
                                          _c(
                                            "b",
                                            { staticStyle: { color: "black" } },
                                            [
                                              _vm._v(
                                                _vm._s(product.product_name)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "info-box-number" },
                                        [
                                          _vm._v(
                                            "Price: " +
                                              _vm._s(product.product_sell_price)
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        staticStyle: { display: "none" },
        attrs: { id: "modalAddtoSalesCart", "aria-hidden": "true" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v("Product : " + _vm._s(_vm.salesCartModal.product_name))
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12 col-sm-12" },
                  [
                    _c("center", [
                      _c("img", {
                        staticClass: "rounded",
                        staticStyle: { width: "200px" },
                        attrs: {
                          src:
                            "/productimages/" +
                            _vm.salesCartModal.product_image,
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
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
                          value: _vm.salesCartModal.product_name,
                          expression: "salesCartModal.product_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_name",
                        placeholder: "Enter product name",
                        readonly: ""
                      },
                      domProps: { value: _vm.salesCartModal.product_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
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
                          value: _vm.salesCartModal.product_code_custome,
                          expression: "salesCartModal.product_code_custome"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_code_custome",
                        placeholder: "Enter product code",
                        readonly: ""
                      },
                      domProps: {
                        value: _vm.salesCartModal.product_code_custome
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_code_custome",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Sell price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_sellprice,
                          expression: "salesCartModal.product_sellprice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_sellprice",
                        placeholder: "Enter product name",
                        readonly: ""
                      },
                      domProps: { value: _vm.salesCartModal.product_sellprice },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_sellprice",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Purchase price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_original_price,
                          expression: "salesCartModal.product_original_price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_original_price",
                        placeholder: "Enter product name",
                        readonly: ""
                      },
                      domProps: {
                        value: _vm.salesCartModal.product_original_price
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_original_price",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Avaibale Stocks")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_stock,
                          expression: "salesCartModal.product_stock"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "product_stock",
                        placeholder: "Enter product stocks",
                        readonly: ""
                      },
                      domProps: { value: _vm.salesCartModal.product_stock },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_stock",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Discount ammount")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.discount_ammount,
                          expression: "salesCartModal.discount_ammount"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "discount_ammount",
                        placeholder: "Enter discount ammount",
                        min: "0"
                      },
                      domProps: { value: _vm.salesCartModal.discount_ammount },
                      on: {
                        keyup: _vm.discountModal,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "discount_ammount",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Discount type")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.salesCartModal.discount_type,
                            expression: "salesCartModal.discount_type"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "discount_type" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.salesCartModal,
                                "discount_type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.discountModal
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Taka")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Percent")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Product quantity")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_sales_qty,
                          expression: "salesCartModal.product_sales_qty"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_sales_qty",
                        placeholder: "Enter product quantity"
                      },
                      domProps: { value: _vm.salesCartModal.product_sales_qty },
                      on: {
                        keyup: _vm.discountModal,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_sales_qty",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Product price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_sales_price,
                          expression: "salesCartModal.product_sales_price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_sales_price",
                        placeholder: "Enter sales price"
                      },
                      domProps: {
                        value: _vm.salesCartModal.product_sales_price
                      },
                      on: {
                        keyup: _vm.discountModal,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_sales_price",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Total Price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.salesCartModal.product_sales_totalprice,
                          expression: "salesCartModal.product_sales_totalprice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "product_sales_totalprice",
                        placeholder: "Enter total price",
                        readonly: ""
                      },
                      domProps: {
                        value: _vm.salesCartModal.product_sales_totalprice
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.salesCartModal,
                            "product_sales_totalprice",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.submitSalesCart }
                },
                [
                  _vm._v(
                    "\r\n                " +
                      _vm._s(
                        _vm.salesCartModal.processing
                          ? "Please wait"
                          : _vm.salesCartModal.button
                      ) +
                      "\r\n              "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        staticStyle: { display: "none" },
        attrs: { id: "discountModalPopup", "aria-hidden": "true" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Sub total")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.subtotal,
                          expression: "sales.subtotal"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "discount",
                        placeholder: "Enter discount ammount",
                        min: "0",
                        readonly: ""
                      },
                      domProps: { value: _vm.sales.subtotal },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.sales, "subtotal", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Discount ammount")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.discount,
                          expression: "sales.discount"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "discount",
                        placeholder: "Enter discount ammount",
                        min: "0"
                      },
                      domProps: { value: _vm.sales.discount },
                      on: {
                        keyup: _vm.calculateDiscount,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.sales, "discount", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Discount type")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.sales.discounttype,
                            expression: "sales.discounttype"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "discounttype" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.sales,
                                "discounttype",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.calculateDiscount
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Taka")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Percent")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Total")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.total,
                          expression: "sales.total"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "discount",
                        placeholder: "Enter discount ammount",
                        min: "0",
                        readonly: ""
                      },
                      domProps: { value: _vm.sales.total },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.sales, "total", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Paid ammount")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.paid,
                          expression: "sales.paid"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "paid",
                        placeholder: "Enter paid ammount",
                        min: "0"
                      },
                      domProps: { value: _vm.sales.paid },
                      on: {
                        keyup: _vm.calculatePayment,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.sales, "paid", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Remaing")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sales.remaining,
                          expression: "sales.remaining"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "discount",
                        placeholder: "Enter discount ammount",
                        min: "0",
                        readonly: ""
                      },
                      domProps: { value: _vm.sales.remaining },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.sales, "remaining", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.submitSalesOrder }
                },
                [
                  _vm._v(
                    "\r\n                    " +
                      _vm._s(
                        _vm.sales.processing ? "Please wait" : "Submit order?"
                      ) +
                      "\r\n                  "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        staticStyle: { display: "none" },
        attrs: { id: "paymentModal", "aria-hidden": "true" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-md" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(5),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Paid ammount")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sales.paid,
                      expression: "sales.paid"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "paid",
                    placeholder: "Enter paid ammount",
                    min: "0"
                  },
                  domProps: { value: _vm.sales.paid },
                  on: {
                    keyup: _vm.calculatePayment,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.sales, "paid", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Sub total")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sales.subtotal,
                      expression: "sales.subtotal"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "discount",
                    placeholder: "Enter discount ammount",
                    min: "0",
                    readonly: ""
                  },
                  domProps: { value: _vm.sales.subtotal },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.sales, "subtotal", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Total")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sales.total,
                      expression: "sales.total"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "discount",
                    placeholder: "Enter discount ammount",
                    min: "0",
                    readonly: ""
                  },
                  domProps: { value: _vm.sales.total },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.sales, "total", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Remaing")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sales.remaining,
                      expression: "sales.remaining"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "discount",
                    placeholder: "Enter discount ammount",
                    min: "0",
                    readonly: ""
                  },
                  domProps: { value: _vm.sales.remaining },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.sales, "remaining", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(6)
          ])
        ])
      ]
    )
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
            _c("h1", [_vm._v("Point on sales")])
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
                _vm._v("POS")
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Sales cart")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: { type: "button", "data-card-widget": "collapse" }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer p-0" }, [
      _c("div", { staticClass: "mailbox-controls" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-default btn-sm checkbox-toggle",
            attrs: { type: "button" }
          },
          [_c("i", { staticClass: "far fa-square" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "btn-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm",
              attrs: { type: "button" }
            },
            [_c("i", { staticClass: "far fa-trash-alt" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm",
              attrs: { type: "button" }
            },
            [_c("i", { staticClass: "fas fa-reply" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-sm",
              attrs: { type: "button" }
            },
            [_c("i", { staticClass: "fas fa-share" })]
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-default btn-sm", attrs: { type: "button" } },
          [_c("i", { staticClass: "fas fa-sync-alt" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "float-right" }, [
          _vm._v("\r\n                  1-50/200\r\n                  "),
          _c("div", { staticClass: "btn-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-sm",
                attrs: { type: "button" }
              },
              [_c("i", { staticClass: "fas fa-chevron-left" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-sm",
                attrs: { type: "button" }
              },
              [_c("i", { staticClass: "fas fa-chevron-right" })]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Submit sales order")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Payment")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer justify-content-between" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-block",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
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