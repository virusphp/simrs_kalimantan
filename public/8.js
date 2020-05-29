(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    if (this.$store.state.isAdminLogin == false) {
      this.$router.push('/');
    }

    console.log('Current Id: ', this.$store.state.curr_id);
    this.id_daftar_poli = this.$store.state.curr_id;
    this.$store.dispatch('fetch', {
      endpoint: 'listdaftarpolibyid',
      params: {
        id: this.id_daftar_poli
      }
    }).then(function (resp) {
      _this.dataFetch = resp.data;
      _this.dataCalonPasien = _this.filtered();
      _this.nama_pasien = _this.dataFetch.nama_depan + ' ' + _this.dataFetch.nama_pasien;
      console.log(_this.dataFetch);
      _this.loaded = false;
    });
    this.getPoliLists();
  },
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      dataPasien: true,
      nama_pasien: '',
      id_daftar_poli: 0,
      dataFetch: {},
      dataCalonPasien: {},
      loaded: true,
      pilihPoli: false,
      nama_poli: [{
        ruangan_id: '',
        ruangan_nama: ''
      }],
      nama_poli_lists: [{
        ruangan_id: -1,
        ruangan_nama: 'Loading ....'
      }],
      nama_dokter_lists: [{
        pegawai_id: -1,
        nama_pegawai: 'Pilih Dokter'
      }],
      polibuka_lists: [{
        jadwalbukapoli_id: -1,
        buka: 'Pilih Jadwal'
      }],
      propinsi_lists: [{
        propinsi_id: -1,
        propinsi_nama: 'Loading...'
      }],
      ruanganIsInvalid: false,
      pegawaiIsInvalid: false,
      hariJamIsInvlid: false,
      nama_dokter: [{
        pegawai_id: '',
        nama_pegawai: ''
      }],
      hari_jam: [{
        jadwaldokter_id: '',
        buka: ''
      }],
      tanggal_pesan: '',
      debugOny: false,
      formControl: 'form-control',
      tanggalPesanIsInvalid: false
    };
  },
  methods: {
    filtered: function filtered() {
      var data = this.dataFetch;
      console.log(data);
      return {
        No_Rekam_Medis: data.no_rm ? data.no_rm : '-',
        Nama: data.nama_depan + ' ' + data.nama_pasien,
        Keluhan: data.keluhan,
        Alamat: data.alamat_pasien,
        Ruangan: data.ruangan.ruangan_nama,
        Nama_Dokter: data.pegawai.nama_pegawai,
        Jadwal_Dokter: data.jadwaldokter.jadwaldokter_hari + ' ' + data.jadwaldokter.jadwaldokter_buka,
        Tanggal_Pesan: data.tanggal_pesan,
        No_Telepon: data.no_hp,
        No_HP: data.no_mobile
      };
    },
    gantiPoli: function gantiPoli() {
      this.pilihPoli = true;
      this.dataPasien = false;
    },
    goBack: function goBack() {
      this.pilihPoli = false;
      this.dataPasien = true;
    },
    gantiPoliConfirm: function gantiPoliConfirm() {
      if (this.validAll()) {
        this.$bvModal.show('modal-1');
      }
    },
    validAll: function validAll() {
      if (this.hari_jam == '' || this.nama_dokter.pegawai_id == '' || this.hari_jam.jadwaldokter_id == '' || this.tanggal_pesan == '' || this.nama_poli.ruangan_id == '') {
        this.$bvModal.show('modal-error');
        this.tanggalPesanIsInvalid = this.tanggal_pesan == '' ? true : false;
        this.ruanganIsInvalid = this.nama_poli.ruangan_id == '' ? true : false;
        this.pegawaiIsInvalid = this.nama_dokter.pegawai_id == '' ? true : false;
        this.hariJamIsInvlid = this.hari_jam.jadwaldokter_id == '' ? true : false;
        return false;
      }

      return true;
    },
    submitKonfirmasiAction: function submitKonfirmasiAction() {
      var _this2 = this;

      this.$bvModal.show('modal-loading');
      var data = new FormData();
      data.append('id_daftar_poli', this.id_daftar_poli);
      data.append('ruangan_id', this.nama_poli.ruangan_id);
      data.append('pegawai_id', this.nama_dokter.pegawai_id);
      data.append('jadwaldokter_id', this.hari_jam.jadwaldokter_id);
      data.append('tanggal_pesan', this.tanggal_pesan);
      this.$store.dispatch('submit_action', {
        endpoint: 'gantiPoli',
        form: data
      }).then(function (resp) {
        console.log(resp.data.status);

        if (resp.data.status == 'Success') {
          _this2.$bvModal.msgBoxOk("Anda berhasil merubah Poli").then(function (value) {
            _this2.goToList();
          });
        }

        _this2.$bvModal.hide('modal-loading');
      });
    },
    goToList: function goToList() {
      this.$router.push('/adminrs');
    },
    getPoliLists: function getPoliLists() {
      var _this3 = this;

      this.nama_dokter_lists = [{
        pegawai_id: -1,
        nama_pegawai: 'Loading...'
      }];
      this.polibuka_lists = [{
        jadwaldokter_id: -1,
        buka: "Loading..."
      }];
      this.nama_dokter = '';
      this.hari_jam = '';
      this.$store.dispatch('fetch', {
        endpoint: 'poli',
        params: {}
      }).then(function (resp) {
        _this3.nama_poli_lists = resp.data;
        _this3.nama_dokter_lists = [{
          pegawai_id: -1,
          nama_pegawai: 'Loading...'
        }];
        _this3.nama_dokter = '';
        _this3.hari_jam = '';
      });
    },
    getDokter: function getDokter(ruangan) {
      var _this4 = this;

      this.nama_dokter_lists = [{
        pegawai_id: -1,
        nama_pegawai: 'Loading...'
      }];
      this.polibuka_lists = [{
        jadwaldokter_id: -1,
        buka: "Loading..."
      }];
      this.hari_jam = '';
      this.nama_dokter = '';
      this.$store.dispatch('fetch', {
        endpoint: 'getdokter',
        params: {
          'ruangan_id': ruangan.ruangan_id
        }
      }).then(function (resp) {
        _this4.nama_dokter_lists = resp.data;
        _this4.hari_jam = '';
      });
    },
    getJadwalPoli: function getJadwalPoli(pegawai) {
      var _this5 = this;

      this.polibuka_lists = [{
        jadwalbukapoli_id: -1,
        buka: 'Loading...'
      }], this.$store.dispatch('fetch', {
        endpoint: 'jadwaldokter',
        params: {
          'pegawai_id': pegawai.pegawai_id,
          'ruangan_id': this.nama_poli.ruangan_id
        }
      }).then(function (resp) {
        _this5.polibuka_lists = resp.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400& ***!
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
      { staticClass: "mt-4" },
      [
        _c(
          "b-modal",
          { attrs: { id: "modal-loading", title: "Sedang Proses" } },
          [
            _vm._v(
              "\n                    Tunggu, sedang proses penyimpanan\t\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: { id: "modal-1", title: "Konfirmasi" },
            on: { ok: _vm.submitKonfirmasiAction }
          },
          [
            _vm._v(
              "\n                Anda ingin meneruskan Mengganti Poli dari Calon Pasien " +
                _vm._s(_vm.nama_pasien) +
                "?\t\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c("b-modal", { attrs: { id: "modal-error", title: "Perhatian" } }, [
          _vm._v(
            "\n                Isi semua data di dalam formulir\t\n            "
          )
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          { attrs: { id: "modal-s", title: "Info" }, on: { ok: _vm.goToList } },
          [
            _vm._v(
              "\n                Berhasil di konfirmasi, Lakukan Konfirmasi Lagi untuk Memasukkan Calon Pasien Menjadi Pasien\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c(
                "card",
                {
                  staticClass: "border-0",
                  attrs: {
                    type: "secondary",
                    shadow: "",
                    "header-clases": "bg-white pb-5",
                    "body-classes": "px-lg-5 py-lg-5"
                  }
                },
                [
                  [
                    _vm.dataPasien
                      ? _c("section", [
                          _c(
                            "table",
                            { staticClass: "table table-striped text-center" },
                            [
                              _c(
                                "tbody",
                                [
                                  _vm.loaded
                                    ? _c("tr", [
                                        _c("td", { attrs: { colspan: "2" } }, [
                                          _vm._v("Loading...")
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(_vm.dataCalonPasien, function(
                                    value,
                                    name
                                  ) {
                                    return _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(name.replace("_", " ")))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(value))])
                                    ])
                                  })
                                ],
                                2
                              )
                            ]
                          ),
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
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-6 text-right" },
                              [
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "my-4 text-right",
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.gantiPoli($event)
                                      }
                                    }
                                  },
                                  [_vm._v(" Ganti Poli")]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.pilihPoli
                      ? _c("section", [
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "label",
                              {
                                staticClass: "col-md-12 col-form-label",
                                attrs: { for: "Poli" }
                              },
                              [_vm._v("Poli")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("v-select", {
                                  class: [
                                    "white-box mb-3",
                                    { "is-invalid": _vm.ruanganIsInvalid }
                                  ],
                                  attrs: {
                                    options: _vm.nama_poli_lists,
                                    label: "ruangan_nama",
                                    autofocus: ""
                                  },
                                  on: { input: _vm.getDokter },
                                  model: {
                                    value: _vm.nama_poli,
                                    callback: function($$v) {
                                      _vm.nama_poli = $$v
                                    },
                                    expression: "nama_poli"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "label",
                              {
                                staticClass: "col-md-12 col-form-label",
                                attrs: { for: "Poli" }
                              },
                              [_vm._v("Dokter")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("v-select", {
                                  class: [
                                    "white-box mb-3",
                                    { "is-invalid": _vm.pegawaiIsInvalid }
                                  ],
                                  attrs: {
                                    options: _vm.nama_dokter_lists,
                                    label: "nama_pegawai",
                                    autofocus: ""
                                  },
                                  on: { input: _vm.getJadwalPoli },
                                  model: {
                                    value: _vm.nama_dokter,
                                    callback: function($$v) {
                                      _vm.nama_dokter = $$v
                                    },
                                    expression: "nama_dokter"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "label",
                              {
                                staticClass: "col-md-12 col-form-label",
                                attrs: { for: "hari_jam" }
                              },
                              [_vm._v("Pilih Hari dan Jam")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("v-select", {
                                  class: [
                                    "white-box mb-3",
                                    { "is-invalid": _vm.hariJamIsInvlid }
                                  ],
                                  attrs: {
                                    options: _vm.polibuka_lists,
                                    label: "buka",
                                    autofocus: ""
                                  },
                                  model: {
                                    value: _vm.hari_jam,
                                    callback: function($$v) {
                                      _vm.hari_jam = $$v
                                    },
                                    expression: "hari_jam"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group row" }, [
                            _c(
                              "label",
                              {
                                staticClass: "col-md-12 col-form-label",
                                attrs: { for: "tanggal_pesan" }
                              },
                              [_vm._v("Tanggal")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.tanggal_pesan,
                                    expression: "tanggal_pesan"
                                  }
                                ],
                                class: [
                                  _vm.formControl,
                                  { "is-invalid": _vm.tanggalPesanIsInvalid }
                                ],
                                attrs: { type: "date" },
                                domProps: { value: _vm.tanggal_pesan },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.tanggal_pesan = $event.target.value
                                  }
                                }
                              })
                            ])
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
                                        return _vm.goBack($event)
                                      }
                                    }
                                  },
                                  [_vm._v("< Kembali")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-6 text-right" },
                              [
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "my-4 text-right",
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.gantiPoliConfirm($event)
                                      }
                                    }
                                  },
                                  [_vm._v(" Ganti Poli")]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      : _vm._e()
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AdminRsGantiPoli.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsGantiPoli.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRsGantiPoli.vue?vue&type=template&id=6d58c400& */ "./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400&");
/* harmony import */ var _AdminRsGantiPoli_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminRsGantiPoli.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminRsGantiPoli_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AdminRsGantiPoli.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsGantiPoli_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRsGantiPoli.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsGantiPoli_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminRsGantiPoli.vue?vue&type=template&id=6d58c400& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AdminRsGantiPoli.vue?vue&type=template&id=6d58c400&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminRsGantiPoli_vue_vue_type_template_id_6d58c400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);