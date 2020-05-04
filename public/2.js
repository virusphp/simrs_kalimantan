(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
    if (this.$store.state.isAdminLogin == false) {
      this.$router.push('/');
    }

    console.log('admin mounted');
    this.loadDataDaftarPoli();
  },
  data: function data() {
    return {
      listDaftarPoli: {},
      item: {},
      notLoaded: true,
      loadingText: 'Loading...',
      nama_pasien: '',
      currentIdDaftarPoli: -1,
      row: {}
    };
  },
  methods: {
    loadDataDaftarPoli: function loadDataDaftarPoli() {
      var _this = this;

      this.$store.dispatch('fetch', {
        endpoint: 'listdaftarpoli',
        params: {}
      }).then(function (resp) {
        _this.listDaftarPoli = resp.data;

        if (parseInt(_this.listDaftarPoli.length) > 0) {
          _this.notLoaded = false;
        } else {
          _this.loadingText = "Tidak ada yang pesan.";
        }
      });
    },
    konfirmasi: function konfirmasi(item, index) {
      console.log(item);
      this.nama_pasien = item.nama_depan + ' ' + item.nama_pasien;
      this.$bvModal.show('modal-1');
      this.currentIdDaftarPoli = item.id;
      this.row.splice(index, 1);
    },
    submitKonfirmasiAction: function submitKonfirmasiAction() {
      var data = new FormData();
      data.append('id_daftar_poli', this.currentIdDaftarPoli);
      this.$store.dispatch('submit_action', {
        endpoint: 'addAsPasien',
        form: data
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.white-box {\n\tbackground: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    [
      _c(
        "b-modal",
        {
          attrs: { id: "modal-1", title: "Konfirmasi" },
          on: { ok: _vm.submitKonfirmasiAction }
        },
        [
          _vm._v(
            "\n            Anda ingin meneruskan Registrasi Calon Pasien " +
              _vm._s(_vm.nama_pasien) +
              "?\t\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container pt-0 white-box" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card-title" }, [
              _vm._v("Halaman Konfirmasi Daftar Poli")
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-responsive" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.notLoaded
                    ? _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "text-align": "left !important" },
                            attrs: { colspan: "7" }
                          },
                          [_c("center", [_vm._v(_vm._s(_vm.loadingText))])],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.listDaftarPoli, function(item, index) {
                    return _c("tr", { key: item.id, attrs: { row: _vm.row } }, [
                      _c("td", [
                        _vm._v(
                          _vm._s(item.nama_depan) +
                            " " +
                            _vm._s(item.nama_pasien)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.alamat_pasien))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.ruangan.ruangan_nama))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.pegawai.nama_pegawai))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(item.jadwaldokter.jadwaldokter_hari) +
                            " " +
                            _vm._s(item.jadwaldokter.jadwaldokter_buka)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.tanggal_pesan))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "base-button",
                            {
                              staticClass: "my-4",
                              attrs: { type: "primary" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.konfirmasi(item, index)
                                }
                              }
                            },
                            [_vm._v("Konfirmasi")]
                          )
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Nama Pasien")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Alamat")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Tanggal")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "3" } }, [_vm._v("Info Poli")]),
        _vm._v(" "),
        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Aksi")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", [_vm._v("Poli")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dokter")]),
        _vm._v(" "),
        _c("th", [_vm._v("Jadwal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminRs.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/admin/AdminRs.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRs.vue?vue&type=template&id=77b93a56& */ "./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56&");
/* harmony import */ var _AdminRs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminRs.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminRs.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminRs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminRs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRs.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRs.vue?vue&type=template&id=77b93a56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRs.vue?vue&type=template&id=77b93a56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRs_vue_vue_type_template_id_77b93a56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);