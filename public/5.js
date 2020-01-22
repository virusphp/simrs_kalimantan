(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    // vip
    var Callback = function Callback() {
      console.log("**** fetch data" + new Date());

      _this.$store.dispatch("fetch", {
        params: {
          kelas: 'VIP'
        },
        endpoint: 'availablerooms'
      }).then(function (resp) {
        _this.vip = resp.data.res.jumlah_kamar_open;
        _this.vip_mark = parseInt(_this.vip) > 0 ? _this["default"] : 'danger';
      }); // kelas 1


      _this.$store.dispatch("fetch", {
        params: {
          kelas: 'Kelas I'
        },
        endpoint: 'availablerooms'
      }).then(function (resp) {
        _this.kelas1 = resp.data.res.jumlah_kamar_open;
        _this.kelas1_mark = parseInt(_this.kelas1) > 0 ? _this["default"] : 'danger';
      }); // kelas 2


      _this.$store.dispatch("fetch", {
        params: {
          kelas: 'Kelas II'
        },
        endpoint: 'availablerooms'
      }).then(function (resp) {
        _this.kelas2 = resp.data.res.jumlah_kamar_open;
        _this.kelas2_mark = parseInt(_this.kelas2) > 0 ? _this["default"] : 'danger';
      }); // kelas 3


      _this.$store.dispatch("fetch", {
        params: {
          kelas: 'Kelas III'
        },
        endpoint: 'availablerooms'
      }).then(function (resp) {
        _this.kelas3 = resp.data.res.jumlah_kamar_open;
        _this.kelas3_mark = parseInt(_this.kelas3) > 0 ? _this["default"] : 'danger';
      }); // icu


      _this.$store.dispatch("fetch", {
        params: {
          kelas: ''
        },
        endpoint: 'availableicurooms'
      }).then(function (resp) {
        _this.icu = resp.data.res;
        _this.icu_mark = parseInt(_this.icu) > 0 ? _this["default"] : 'danger';
      });
    };

    Callback();
    var intvid = setInterval(Callback, 30000);
    this.$store.dispatch("set_interval_id", intvid);
  },
  data: function data() {
    return {
      vip: '0',
      kelas1: '0',
      kelas2: '0',
      kelas3: '0',
      icu: '0',
      vip_mark: '',
      kelas1_mark: '',
      kelas2_mark: '',
      kelas3_mark: '',
      icu_mark: '',
      "default": ''
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "pt-4" },
      [
        _c(
          "b-card-group",
          { attrs: { deck: "" } },
          [
            _c(
              "b-card",
              { attrs: { header: "VIP", "bg-variant": "" } },
              [
                _c("b-card-text", [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.vip) + "\n\t\t\t\t")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              { attrs: { header: "Kelas I", "bg-variant": _vm.kelas1_mark } },
              [
                _c("b-card-text", [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.kelas1) + "\n\t\t\t\t")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              { attrs: { header: "Kelas II", "bg-variant": _vm.kelas2_mark } },
              [
                _c("b-card-text", [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.kelas2) + "\n\t\t\t\t")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              { attrs: { header: "Kelas III", "bg-variant": _vm.kelas3_mark } },
              [
                _c("b-card-text", [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.kelas3) + "\n\t\t\t\t")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card",
              { attrs: { header: "ICU", "bg-variant": _vm.icu_mark } },
              [
                _c("b-card-text", [
                  _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.icu) + "\n\t\t\t\t")
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/PublicComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/public/PublicComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicComponent.vue?vue&type=template&id=16524c4e& */ "./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e&");
/* harmony import */ var _PublicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PublicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/PublicComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PublicComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PublicComponent.vue?vue&type=template&id=16524c4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/PublicComponent.vue?vue&type=template&id=16524c4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicComponent_vue_vue_type_template_id_16524c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);