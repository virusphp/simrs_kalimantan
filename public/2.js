(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    console.log('Pendaftaran Pasien');
    this.getYear();
    this.propinsiLists();
    this.pekerjaanLists(); // this.poliLists()
  },
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      nama: '',
      nama_depan: '',
      day: '',
      month: '',
      year: '',
      namaDepanIsInvalid: false,
      namaIsInvalid: false,
      tanggalLahirIsInvalid: false,
      genderIsInvalid: false,
      gender: '',
      alamat: '',
      alamatIsInvalid: false,
      disableSubmit: false,
      formControl: 'form-control',
      pageOneOpen: true,
      pageTwoOpen: false,
      pageThreeOpen: false,
      summaryPage: false,
      submitRegistration: false,
      gender_type: ['Laki-laki', 'Perempuan'],
      days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      months: [{
        value: '01',
        label: 'Januari'
      }, {
        value: '02',
        label: 'Februari'
      }, {
        value: '03',
        label: 'Maret'
      }, {
        value: '04',
        label: 'April'
      }, {
        value: '05',
        label: 'Mei'
      }, {
        value: '06',
        label: 'Juni'
      }, {
        value: '07',
        label: 'Juli'
      }, {
        value: '08',
        label: 'Agustus'
      }, {
        value: '09',
        label: 'September'
      }, {
        value: '10',
        label: 'Oktober'
      }, {
        value: '11',
        label: 'Nopember'
      }, {
        value: '12',
        label: 'Desember'
      }],
      years: [],
      propinsi_lists: [{
        propinsi_id: -1,
        propinsi_nama: 'Loading...'
      }],
      kabupaten_lists: [{
        kabupaten_id: -1,
        kabupaten_nama: 'Loading...'
      }],
      kecamatan_lists: [{
        kecamatan_id: -1,
        kecamatan_nama: 'Loading...'
      }],
      kelurahan_lists: [{
        kelurahan_id: -1,
        kelurahan_nama: 'Loading...'
      }],
      propinsi: '',
      kabupaten: '',
      kecamatan: '',
      kelurahan: '',
      propinsiIsInvalid: false,
      kabupatenIsInvalid: false,
      kecamatanIsInvalid: false,
      kelurahanIsInvalid: false,
      pekerjaanIsInvalid: false,
      warganegaraIsInvalid: false,
      pekerjaan_lists: [{
        pekerjaan_id: -1,
        pekerjaan_nama: 'Loading...'
      }],
      warganegara_lists: ['INDONESIA', 'ASING'],
      agama_lists: ['ISLAM', 'BUDHA', 'HINDU', 'KATOLIK', 'PROTESTAN', 'KONGHUCU'],
      pekerjaan: '',
      warganegara: '',
      agama: '',
      dismissCountDown: 0,
      showDimissibleAlert: false,
      dismissSecs: 100,
      submitted: false,
      allValid: false,
      no_rekam_medis: '',
      agamaData: false,
      infoFormulir: false,
      pilihPoli: true
    };
  },
  methods: {
    getYear: function getYear() {
      var d = new Date();
      var cy = d.getFullYear();

      for (var i = cy; i >= 1880; i--) {
        this.years.push({
          label: i,
          year: i
        });
      }
    },
    confirmSubmitRegistration: function confirmSubmitRegistration() {
      console.log('all valid', this.allValid);

      if (this.allValid) {
        this.$bvModal.show('modal-1');
      }
    },
    allValidCheck: function allValidCheck() {
      if (this.allValid) {
        this.$bvModal.show('modal-error');
        return false;
      }
    },
    submitRegistrationAction: function submitRegistrationAction() {
      var _this = this;

      // TODO
      this.$bvModal.show('modal-loading');
      var day = this.day.length < 2 ? '0' + this.day : this.day;
      this.$store.dispatch("submit_action", {
        form: {
          namadepan: this.nama_depan,
          nama_pasien: this.nama,
          tanggal_lahir: this.year.label + '-' + this.month.value + '-' + day,
          jeniskelamin: this.gender,
          alamat_pasien: this.alamat,
          propinsi_id: this.propinsi.propinsi_id,
          kabupaten_id: this.kabupaten.kabupaten_id,
          kecamatan_id: this.kecamatan.kecamatan_id,
          kelurahan_id: this.kelurahan.kelurahan_id,
          pekerjaan_id: this.pekerjaan.pekerjaan_id,
          warga_negara: this.warganegara,
          agama: this.agama
        },
        endpoint: 'registerpasienbaru'
      }).then(function (resp) {
        _this.$bvModal.hide('modal-loading');

        if (resp.data.status == 'Success') {
          _this.no_rekam_medik = resp.data.no_rekam_medik;
          console.log(resp.data.no_rekam_medik);
          _this.submitted = true; // this.$bvToast.show('pesan-penyimpanan');
          // alert('Kamar telah berhasil di pesan')

          _this.dismissCountDown = 5;

          _this.$bvModal.msgBoxOk("Anda berhasil mendaftarkan Pasien dengan rekam medis: " + resp.data.no_rekam_medik).then(function (value) {
            _this.$router.push('/pesankamar');
          }); // this.$bvModal.show('modal-success')
          // setTimeout(function(){
          //	this.$router.push('/pesankamar')
          // }, 1000)

        } else {
          _this.$bvModal.show('modal-error-1');

          setTimeout(function () {
            _this.$router.push('/pesankamar');
          }, 1000);
        }
      });
    },
    regiterPasien: function regiterPasien() {//  TODO
    },
    nextPage: function nextPage(page) {
      switch (page) {
        case 1:
          this.pageTwoOpen = false;
          this.pageOneOpen = true;
          this.allValid = false;
          break;

        case 2:
          if (this.checkValidationPageOne()) {
            this.pageOneOpen = false;
            this.pageTwoOpen = true;
            this.pageThreeOpen = false;
            this.allValid = false;
          }

          break;

        case 3:
          if (this.checkValidationPageTwo()) {
            this.pageTwoOpen = false;
            this.pageThreeOpen = true;
            this.infoFormulir = true;
            this.summaryPage = false;
            this.allValid = false;
          }

          break;

        default:
          if (this.checkValidationPageThree()) {
            this.pageThreeOpen = false;
            this.summaryPage = true;
            this.infoFormulir = false;
            this.allValid = true;
          }

      }
    },
    prevPage: function prevPage(page) {
      switch (page) {
        case 1:
          this.pageTwoOpen = false;
          this.pageOneOpen = true;
          break;

        case 2:
          this.pageOneOpen = false;
          this.pageTwoOpen = true;
          this.pageThreeOpen = false;
          break;

        case 3:
          this.pageTwoOpen = false;
          this.pageThreeOpen = true;
          this.infoFormulir = true;
          this.summaryPage = false;
          break;

        default:
          this.pageThreeOpen = false;
          this.summaryPage = true;
          this.infoFormulir = false;
      }
    },
    checkValidationPageOne: function checkValidationPageOne() {
      if (this.nama_depan == '' || this.nama == '' || this.day == '' || this.month == '' || this.year == '' || this.gender == '' || this.agama == '') {
        this.namaDepanIsInvalid = this.nama_depan == '' ? true : false;
        this.namaIsInvalid = this.nama == '' ? true : false;
        this.tanggalLahirIsInvalid = this.day == '' || this.month == '' || this.year == '' ? true : false;
        this.genderIsInvalid = this.gender == '' ? true : false;
        this.agamaData = this.agama == '' ? true : false;
        console.log('Modal Error show...');
        this.$bvModal.show('modal-error');
        return false;
      }

      return true;
    },
    checkValidationPageTwo: function checkValidationPageTwo() {
      if (this.alamat == '' || this.propinsi == '' || this.kabupaten == '' || this.kecamatan == '' || this.kelurahan == '') {
        this.alamatIsInvalid = this.alamat == '' ? true : false;
        this.propinsiIsInvalid = this.propinsi == '' ? true : false;
        this.kabupatenIsInvalid = this.kabupaten == '' ? true : false;
        this.kecamatanIsInvalid = this.kecamatan == '' ? true : false;
        this.kelurahanIsInvalid = this.kelurahan == '' ? true : false;
        this.$bvModal.show('modal-error');
        return false;
      }

      return true;
    },
    checkValidationPageThree: function checkValidationPageThree() {
      if (this.pekerjaan == '' || this.warganegara == '') {
        this.pekerjaanIsInvalid = this.pekerjaan == '' ? true : false;
        this.warganegaraIsInvalid = this.warganegara == '' ? true : false;
        this.$bvModal.show('modal-error');
        return false;
      }

      return true;
    },
    propinsiLists: function propinsiLists() {
      var _this2 = this;

      window.axios.get('/api/provinsi', {}).then(function (response) {
        _this2.propinsi_lists = response.data;
      });
    },
    refresh_state: function refresh_state() {
      console.log('Refresh state');
      this.kecamatan_lists = [{
        'kecamatan_id': -1,
        'kecamatan_nama': 'Loading...'
      }];
      this.kelurahan_lists = [{
        'kelurahan_id': -1,
        'kelurahan_nama': 'Loading...'
      }];
    },
    loadKabupaten: function loadKabupaten(value) {
      var _this3 = this;

      console.log('Load Kabupaten', value);
      this.refresh_state();
      this.kabupaten_lists = [{
        'kabupaten_id': -1,
        'kabupaten_nama': 'Loading...'
      }];
      this.$store.dispatch('fetch', {
        endpoint: 'kabupaten',
        params: {
          propinsi_id: value.propinsi_id
        }
      }).then(function (response) {
        _this3.kabupaten_lists = response.data;
      });
    },
    loadKecamatan: function loadKecamatan(value) {
      var _this4 = this;

      console.log('Load Kecamatan', value);
      this.kelurahan_lists = [{
        'kelurahan_id': -1,
        'kelurahan_nama': 'Loading...'
      }];
      this.kecamatan_lists = [{
        'kecamatan_id': -1,
        'kecamatan_nama': 'Loading...'
      }];
      this.$store.dispatch('fetch', {
        endpoint: 'kecamatan',
        params: {
          kabupaten_id: value.kabupaten_id
        }
      }).then(function (response) {
        _this4.kecamatan_lists = response.data;
      });
    },
    loadKelurahan: function loadKelurahan(value) {
      var _this5 = this;

      console.log('Load Kelurahan', value);
      this.kelurahan_lists = [{
        'kelurahan_id': -1,
        'kelurahan_nama': 'Loading...'
      }];
      this.$store.dispatch('fetch', {
        endpoint: 'kelurahan',
        params: {
          kecamatan_id: value.kecamatan_id
        }
      }).then(function (response) {
        _this5.kelurahan_lists = response.data;
      });
    },
    pekerjaanLists: function pekerjaanLists() {
      var _this6 = this;

      this.$store.dispatch('fetch', {
        endpoint: 'pekerjaan',
        params: {}
      }).then(function (resp) {
        _this6.pekerjaan_lists = resp.data;
      });
    },
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = this.dismissSecs;
    },
    poliLists: function poliLists() {
      var _this7 = this;

      this.$store.dispatch('fetch', {
        endpoint: 'poli',
        params: {}
      }).then(function (resp) {
        _this7.poli = resp.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.white-box .vs__search::-webkit-input-placeholder {\n    background: #ffffff;\n}\n.white-box .vs__search::-moz-placeholder {\n    background: #ffffff;\n}\n.white-box .vs__search:-ms-input-placeholder {\n    background: #ffffff;\n}\n.white-box .vs__search::-ms-input-placeholder {\n    background: #ffffff;\n}\n.white-box .vs__search::placeholder,\n.white-box .vs__dropdown-toggle,\n.white-box .vs__dropdown-menu {\n    background: #ffffff;\n}\n.is-invalid .vs__search::-webkit-input-placeholder {\n    background: #ffffff;\n    border: 1px solid #ff0000;\n}\n.is-invalid .vs__search::-moz-placeholder {\n    background: #ffffff;\n    border: 1px solid #ff0000;\n}\n.is-invalid .vs__search:-ms-input-placeholder {\n    background: #ffffff;\n    border: 1px solid #ff0000;\n}\n.is-invalid .vs__search::-ms-input-placeholder {\n    background: #ffffff;\n    border: 1px solid #ff0000;\n}\n.is-invalid .vs__search::placeholder,\n.is-invalid .vs__dropdown-toggle,\n.is-invalid .vs__dropdown-menu {\n    background: #ffffff;\n    border: 1px solid #ff0000;\n}\n.is-invalid-box {\n    border: 1px solid #ff0000;\n    margin: 0px;\n    padding: 3px;\n}\n.not-filled .vs__search::-webkit-input-placeholder {\n    border: 1px solid #ff0000;\n}\n.not-filled .vs__search::-moz-placeholder {\n    border: 1px solid #ff0000;\n}\n.not-filled .vs__search:-ms-input-placeholder {\n    border: 1px solid #ff0000;\n}\n.not-filled .vs__search::-ms-input-placeholder {\n    border: 1px solid #ff0000;\n}\n.not-filled .vs__search::placeholder,\n.not-filled .vs__dropdown-toggle,\n.not-filled .vs__dropdown-menu {\n    border: 1px solid #ff0000;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section section-shaped section-lg my-0 py-4" },
    [
      _c(
        "b-alert",
        {
          attrs: {
            variant: "success",
            show: _vm.dismissCountDown,
            dismissible: ""
          },
          on: {
            dismissed: function($event) {
              _vm.dismissCountDown = 0
            },
            "dimiss-count-down": _vm.countDownChanged
          }
        },
        [
          _vm._v(
            "\n\t\t\t\t\tAnda berhasil mendaftarkan pasien dengan nomor rekam medis: " +
              _vm._s(_vm.no_rekam_medis) +
              "\t\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        { attrs: { id: "modal-loading", title: "Sedang Proses" } },
        [
          _vm._v(
            "\n                Tunggu, sedang proses penyimpanan\t\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("b-modal", { attrs: { id: "modal-success", title: "Konfirmasi" } }, [
        _vm._v(
          "\n                Anda berhasil mendaftarkan pasien dengan nomor rekam_medis: "
        ),
        _c("b", [_vm._v(_vm._s(_vm.no_rekam_medis))])
      ]),
      _vm._v(" "),
      _c("b-modal", { attrs: { id: "modal-error-2", title: "Konfirmasi" } }, [
        _vm._v(
          "\n                Anda berhasil mendaftarkan pasien dengan nomor rekam_medis: " +
            _vm._s(_vm.no_rekam_medis) +
            "\t\n        "
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { id: "modal-1", title: "Konfirmasi" },
          on: { ok: _vm.submitRegistrationAction }
        },
        [
          _vm._v(
            "\n            Anda ingin meneruskan Registrasi Pasien " +
              _vm._s(_vm.nama_depan) +
              " " +
              _vm._s(_vm.nama) +
              "?\t\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c("b-modal", { attrs: { id: "modal-error", title: "Perhatian" } }, [
        _vm._v("\n            Isi semua data di dalam formulir\t\n        ")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container pt-0" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-lg-5" },
            [
              _c(
                "card",
                {
                  staticClass: "border-0",
                  attrs: {
                    type: "secondary",
                    shadow: "",
                    "header-classes": "bg-white pb-5",
                    "body-classes": "px-lg-5 py-lg-5"
                  }
                },
                [
                  [
                    _c("div", { staticClass: "text-center text-muted mb-4" }, [
                      _c("small", [_vm._v("Pendaftaran Pasien Baru")])
                    ]),
                    _vm._v(" "),
                    _c("form", [
                      _vm.pilihPoli
                        ? _c("section", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-xs-6 px-2 py-2" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [_vm._v("Poli Gigi")]
                                )
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.infoFormulir
                        ? _c("small", { staticStyle: { color: "red" } }, [
                            _vm._v("Isi semua data dalam formulir")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pageOneOpen
                        ? _c("section", [
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "name" }
                                },
                                [_vm._v("Nama")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-4" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box mb-3",
                                      { "is-invalid": _vm.namaDepanIsInvalid }
                                    ],
                                    attrs: {
                                      options: [
                                        "An.",
                                        "By.",
                                        "Nn.",
                                        "Ny.",
                                        "Tn."
                                      ],
                                      autofocus: ""
                                    },
                                    model: {
                                      value: _vm.nama_depan,
                                      callback: function($$v) {
                                        _vm.nama_depan = $$v
                                      },
                                      expression: "nama_depan"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.namaDepanIsInvalid
                                ? _c(
                                    "span",
                                    { staticStyle: { color: "red" } },
                                    [
                                      _c("small", [
                                        _vm._v("Nama Depan tidak boleh kosong")
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.nama,
                                      expression: "nama"
                                    }
                                  ],
                                  class: [
                                    _vm.formControl,
                                    { "is-invalid": _vm.namaIsInvalid }
                                  ],
                                  attrs: {
                                    id: "name",
                                    type: "text",
                                    name: "name",
                                    required: "",
                                    autocomplete: "name",
                                    autofocus: ""
                                  },
                                  domProps: { value: _vm.nama },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.nama = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.namaIsInvalid
                                  ? _c(
                                      "span",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _c("small", [
                                          _vm._v("Nama tidak boleh kosong")
                                        ])
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "tgl_lahir" }
                                },
                                [_vm._v("Tanggal Lahir")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  {
                                    class: [
                                      "row",
                                      {
                                        "is-invalid-box row":
                                          _vm.tanggalLahirIsInvalid
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "col-4 pr-1" },
                                      [
                                        _c("v-select", {
                                          staticClass: "white-box",
                                          attrs: { options: _vm.days },
                                          model: {
                                            value: _vm.day,
                                            callback: function($$v) {
                                              _vm.day = $$v
                                            },
                                            expression: "day"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-4 pl-0 pr-1" },
                                      [
                                        _c("v-select", {
                                          staticClass: "white-box",
                                          attrs: { options: _vm.months },
                                          model: {
                                            value: _vm.month,
                                            callback: function($$v) {
                                              _vm.month = $$v
                                            },
                                            expression: "month"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-4 pr-1 pl-0" },
                                      [
                                        _c("v-select", {
                                          staticClass: "white-box",
                                          attrs: { options: _vm.years },
                                          model: {
                                            value: _vm.year,
                                            callback: function($$v) {
                                              _vm.year = $$v
                                            },
                                            expression: "year"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.tanggalLahirIsInvalid
                                  ? _c(
                                      "span",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _c("small", [
                                          _vm._v(
                                            "Tanggal lahir harus diisi semua"
                                          )
                                        ])
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "Agama" }
                                },
                                [_vm._v("Agama")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "not-filled": _vm.agamaData }
                                    ],
                                    attrs: {
                                      placeholder: "Pilih Agama",
                                      options: _vm.agama_lists
                                    },
                                    model: {
                                      value: _vm.agama,
                                      callback: function($$v) {
                                        _vm.agama = $$v
                                      },
                                      expression: "agama"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.agamaData
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v("Agama tidak boleh kosong")
                                          ])
                                        ]
                                      )
                                    : _vm._e()
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
                                  attrs: { for: "gender" }
                                },
                                [_vm._v("Gender")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.genderIsInvalid }
                                    ],
                                    attrs: {
                                      placeholder: "Pilih Jenis Kelamin",
                                      options: _vm.gender_type
                                    },
                                    model: {
                                      value: _vm.gender,
                                      callback: function($$v) {
                                        _vm.gender = $$v
                                      },
                                      expression: "gender"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.genderIsInvalid
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              "Jenis kelamin tidak boleh kosong"
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "text-right" },
                              [
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "my-4",
                                    attrs: { type: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.nextPage(2)
                                      }
                                    }
                                  },
                                  [_vm._v("Lanjut >")]
                                )
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pageTwoOpen
                        ? _c("section", [
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "alamat" }
                                },
                                [_vm._v("Alamat")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.alamat,
                                      expression: "alamat"
                                    }
                                  ],
                                  class: [
                                    _vm.formControl,
                                    { "is-invalid": _vm.alamatIsInvalid }
                                  ],
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    id: "alamat",
                                    cols: "100",
                                    rows: "2",
                                    name: "alamat",
                                    required: ""
                                  },
                                  domProps: { value: _vm.alamat },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.alamat = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.alamatIsInvalid
                                  ? _c(
                                      "span",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _c("small", [
                                          _vm._v("Alamat tidak boleh kosong")
                                        ])
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "Propinsi" }
                                },
                                [_vm._v("Propinsi")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.propinsiIsInvalid }
                                    ],
                                    attrs: {
                                      label: "propinsi_nama",
                                      placeholder: "Pilih Propinsi",
                                      options: _vm.propinsi_lists
                                    },
                                    on: { input: _vm.loadKabupaten },
                                    model: {
                                      value: _vm.propinsi,
                                      callback: function($$v) {
                                        _vm.propinsi = $$v
                                      },
                                      expression: "propinsi"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.propinsiIsInvalid
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              "Propinsi tidak boleh kosong"
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
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
                                  attrs: { for: "Kabupaten" }
                                },
                                [_vm._v("Kabupaten")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.kabupatenIsInvalid }
                                    ],
                                    attrs: {
                                      label: "kabupaten_nama",
                                      placeholder: "Pilih Kabupaten",
                                      options: _vm.kabupaten_lists
                                    },
                                    on: { input: _vm.loadKecamatan },
                                    model: {
                                      value: _vm.kabupaten,
                                      callback: function($$v) {
                                        _vm.kabupaten = $$v
                                      },
                                      expression: "kabupaten"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.kabupatenIsInvalid
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              "Kabupaten tidak boleh kosong"
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
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
                                  attrs: { for: "Kecamatan" }
                                },
                                [_vm._v("Kecamatan")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.kecamatanIsInvalid }
                                    ],
                                    attrs: {
                                      label: "kecamatan_nama",
                                      placeholder: "Pilih Kecamatan",
                                      options: _vm.kecamatan_lists
                                    },
                                    on: { input: _vm.loadKelurahan },
                                    model: {
                                      value: _vm.kecamatan,
                                      callback: function($$v) {
                                        _vm.kecamatan = $$v
                                      },
                                      expression: "kecamatan"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.kecamatanIsInvalid
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              "Kecamatan tidak boleh kosong"
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
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
                                  attrs: { for: "Kelurahan" }
                                },
                                [_vm._v("Kelurahan")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.kelurahanIsInvalid }
                                    ],
                                    attrs: {
                                      placeholder: "Pilih Kelurahan",
                                      label: "kelurahan_nama",
                                      options: _vm.kelurahan_lists
                                    },
                                    model: {
                                      value: _vm.kelurahan,
                                      callback: function($$v) {
                                        _vm.kelurahan = $$v
                                      },
                                      expression: "kelurahan"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.kelurahanIsInvalid
                                    ? _c(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              "Kelurahan tidak boleh kosong"
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
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
                                          return _vm.prevPage(1)
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
                                          return _vm.nextPage(3)
                                        }
                                      }
                                    },
                                    [_vm._v("Lanjut >")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pageThreeOpen
                        ? _c("section", [
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "col-md-12 col-form-label",
                                  attrs: { for: "Pekerjaaan" }
                                },
                                [_vm._v("Pekerjaaan")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.pekerjaanIsInvalid }
                                    ],
                                    attrs: {
                                      label: "pekerjaan_nama",
                                      placeholder: "Pilih Pekerjaan",
                                      options: _vm.pekerjaan_lists
                                    },
                                    model: {
                                      value: _vm.pekerjaan,
                                      callback: function($$v) {
                                        _vm.pekerjaan = $$v
                                      },
                                      expression: "pekerjaan"
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
                                  attrs: { for: "WargaNegara" }
                                },
                                [_vm._v("Warga Negara")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("v-select", {
                                    class: [
                                      "white-box",
                                      { "is-invalid": _vm.warganegaraIsInvalid }
                                    ],
                                    attrs: {
                                      placeholder: "Pilih warganegara",
                                      options: _vm.warganegara_lists
                                    },
                                    model: {
                                      value: _vm.warganegara,
                                      callback: function($$v) {
                                        _vm.warganegara = $$v
                                      },
                                      expression: "warganegara"
                                    }
                                  })
                                ],
                                1
                              )
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
                                          return _vm.prevPage(2)
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
                                      staticClass: "my-4",
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.nextPage(4)
                                        }
                                      }
                                    },
                                    [_vm._v("Lanjut >")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.summaryPage
                        ? _c("section", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-12" }, [
                                _c("p", [
                                  _vm._v(
                                    'Tolong Periksa Kembali data yang diisikan di dalam formulir, apabila telah yakin dapat melanjutkan\n                                                dengan menekan tombol "Submit" di bawah ini\n                                            '
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Nama")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(
                                  _vm._s(_vm.nama_depan) + _vm._s(_vm.nama)
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Tanggal Lahir")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(
                                  _vm._s(_vm.day) +
                                    " " +
                                    _vm._s(_vm.month.label) +
                                    " " +
                                    _vm._s(_vm.year.label)
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Agama")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.agama))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Jenis Kelamin")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.gender))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Alamat")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.alamat))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Propinsi")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.propinsi.propinsi_nama))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Kabupaten")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.kabupaten.kabupaten_nama))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Kecamatan")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.kecamatan.kecamatan_nama))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Kelurahan")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.kelurahan.kelurahan_nama))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _vm._v("Pekerjaan")
                              ]),
                              _c("div", { staticClass: "col-7" }, [
                                _vm._v(_vm._s(_vm.pekerjaan.pekerjaan_nama))
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
                                          return _vm.prevPage(3)
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
                                      staticClass: "my-4",
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.confirmSubmitRegistration(
                                            $event
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Submit")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  ]
                ],
                2
              )
            ],
            1
          )
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
    return _c(
      "div",
      { staticClass: "shape shape-style-1 bg-gradient-default" },
      [_c("span")]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pasien/RegisterPasienBaru.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pasien/RegisterPasienBaru.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9& */ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9&");
/* harmony import */ var _RegisterPasienBaru_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPasienBaru.vue?vue&type=script&lang=js& */ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterPasienBaru_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pasien/RegisterPasienBaru.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPasienBaru.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPasienBaru.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pasien/RegisterPasienBaru.vue?vue&type=template&id=3e4f6cb9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPasienBaru_vue_vue_type_template_id_3e4f6cb9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);