(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    this.no_rm = this.$store.state.no_rm_curr;
    this.loadDaftarRiwayatPasien();
    this.loadDataPasien();
  },
  data: function data() {
    return {
      no_rm: '',
      notLoaded: true,
      loaded: true,
      listDaftarRiwayatPasien: {},
      loadingText: '',
      listPasien: {},
      pasienLoaded: false
    };
  },
  methods: {
    loadDaftarRiwayatPasien: function loadDaftarRiwayatPasien() {
      var _this = this;

      this.$store.dispatch('fetch', {
        endpoint: 'riwayatpasien',
        params: {
          no_rekam_medik: this.no_rm
        }
      }).then(function (resp) {
        _this.listDaftarRiwayatPasien = resp.data;

        if (parseInt(_this.listDaftarRiwayatPasien.length) > 0) {
          _this.notLoaded = false;
        } else {
          _this.loadingText = "Tidak ada record";
        }
      });
    },
    goToList: function goToList() {
      this.$router.push('/adminrs');
    },
    loadDataPasien: function loadDataPasien() {
      var _this2 = this;

      this.$store.dispatch('fetch', {
        endpoint: 'pasien',
        params: {
          no_rekam_medik: this.no_rm
        }
      }).then(function (resp) {
        _this2.listPasien = resp.data;
        _this2.pasienLoaded = true;
        _this2.loaded = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("section", [
    _c("div", { staticClass: "container pt-0 white-box" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("div", { staticClass: "card-title" }, [
              _vm._v("Daftar Riwayat Pasien")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-6" },
                [
                  _c(
                    "base-button",
                    {
                      staticClass: "my-4",
                      attrs: { type: "danger" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goToList($event)
                        }
                      }
                    },
                    [_vm._v("< Kembali")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            [
              _c("section", [
                _vm.loaded ? _c("span", [_vm._v("Loading...")]) : _vm._e(),
                _vm._v(" "),
                _vm.pasienLoaded
                  ? _c(
                      "table",
                      { staticClass: "table table-striped text-center" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v("Nomor Rekam Medik")]),
                            _c("td", [
                              _vm._v(_vm._s(_vm.listPasien.no_rekam_medik))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Nama Pasien")]),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.listPasien.namadepan) +
                                  " " +
                                  _vm._s(_vm.listPasien.nama_pasien)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Jenis Kelamin")]),
                            _c("td", [
                              _vm._v(_vm._s(_vm.listPasien.jeniskelamin))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Alamat Pasien")]),
                            _c("td", [
                              _vm._v(_vm._s(_vm.listPasien.alamat_pasien))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td"),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                            Kel. " +
                                  _vm._s(
                                    _vm.listPasien.kelurahan.kelurahan_nama
                                  ) +
                                  ",\n                                            Kec. " +
                                  _vm._s(
                                    _vm.listPasien.kecamatan.kecamatan_nama
                                  ) +
                                  ",\n                                            Kab. " +
                                  _vm._s(
                                    _vm.listPasien.kabupaten.kabupaten_nama
                                  ) +
                                  ",\n                                            " +
                                  _vm._s(
                                    _vm.listPasien.provinsi.propinsi_nama
                                  ) +
                                  "\n                                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v("Warga Negara")]),
                            _c("td", [
                              _vm._v(_vm._s(_vm.listPasien.warga_negara))
                            ])
                          ])
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ],
            _vm._v(" "),
            _c("span", [_vm._v("Data Riwayat")]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-responsive table-striped" },
              [
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
                    _vm._l(_vm.listDaftarRiwayatPasien, function(item, index) {
                      return _c("tr", { key: item.pendaftaran_id }, [
                        _c("td", [_vm._v(_vm._s(item.ruangan.ruangan_nama))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.no_pendaftaran))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.tgl_pendaftaran))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.statusmasuk))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              item.jeniskasuspenyakit.jeniskasuspenyakit_nama
                            )
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ]
            )
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Ruangan")]),
        _vm._v(" "),
        _c("th", [_vm._v("No Pendaftaran")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tanggal Pendaftaran")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status Masuk")]),
        _vm._v(" "),
        _c("th", [_vm._v("Jenis Kasus Penyakit")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminRsRiwayatPasien.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsRiwayatPasien.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394& */ "./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394&");
/* harmony import */ var _AdminRsRiwayatPasien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminRsRiwayatPasien.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminRsRiwayatPasien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminRsRiwayatPasien.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsRiwayatPasien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRsRiwayatPasien.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsRiwayatPasien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsRiwayatPasien.vue?vue&type=template&id=39f9c394&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsRiwayatPasien_vue_vue_type_template_id_39f9c394___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);