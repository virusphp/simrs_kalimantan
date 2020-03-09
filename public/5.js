(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js& ***!
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
    this.emailExists = false;
    this.$store.dispatch("remove_interval");
  },
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: [],
  data: function data() {
    return {
      namaIsInvalid: false,
      emailIsInvalid: false,
      identitasIsInvalid: false,
      identitasTypeIsInvalid: false,
      alamatIsInvalid: false,
      passwordIsInvalid: false,
      formControl: 'form-control',
      identitas_selected: 'KTP',
      email: '',
      nama: '',
      alamat: '',
      identitas_type: ['KTP', 'SIM'],
      no_identitas: '',
      password: '',
      konfirmasi_password: '',
      messageStyleObject: {
        color: 'red'
      },
      disableSubmit: false,
      identitas: '',
      emailExists: 1,
      emailMessage: ''
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      window.axios.post("/api/register", {
        email: this.email,
        password: this.password,
        password_confirmation: this.konfirmasi_password,
        nama: this.nama,
        alamat: this.alamat,
        no_identitas: this.no_identitas,
        identitas: this.identitas
      }).then(function (response) {
        // this.$swal("success");
        _this.$router.push('/login');
      });
    },
    fokusNoIdentitas: function fokusNoIdentitas() {
      this.no_identitas.focus;
    },
    checkValid: function checkValid(event) {
      var _this2 = this;

      var currentObj = this;
      this.emailExists = true;
      this.emailMessage = 'Sedang mengecek ketersedian email...';
      window.axios.post("/api/checkvalidemail", {
        email: this.email
      }).then(function (response) {
        _this2.emailExists = false;
        _this2.emailExists = response.data.email_exists;
        _this2.emailMessage = response.data.message;
      });
    }
  },
  computed: {
    getConfirmation: function getConfirmation() {
      console.log(this.password);

      if (this.password != this.konfirmasi_password) {
        this.messageStyleObject.color = 'red';
        return 'Password dan Konfirmasi password tidak sama';
      } else {
        if (this.password.length != 0) {
          this.messageStyleObject.color = 'green';
          return 'Password dan Konfirmasi Sama';
        }
      }
    }
  }
});
/*<select class="[formControl]" v-model="identitas_selected" @change="fokusNoIdentitas()">
<option v-for="identitas in identitas_type" v-bind:value="identitas.value">{{ identitas.text  }}</option>
</select>*/

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e& ***!
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Pendaftaran User Aplikasi Pesan Kamar")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: { method: "POST", action: "register_user" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.register($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Nama")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
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
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "email" }
                    },
                    [_vm._v("E-Mail Address")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      class: [
                        _vm.formControl,
                        { "is-invalid": _vm.passwordIsInvalid }
                      ],
                      attrs: {
                        id: "email",
                        type: "email",
                        name: "email",
                        required: "",
                        autocomplete: "email"
                      },
                      domProps: { value: _vm.email },
                      on: {
                        blur: _vm.checkValid,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.emailExists
                      ? _c("span", { staticStyle: { color: "red" } }, [
                          _c("strong", [_vm._v(_vm._s(_vm.emailMessage))])
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      class: [
                        _vm.formControl,
                        { "is-invalid": _vm.passwordIsInvalid }
                      ],
                      attrs: {
                        id: "password",
                        type: "password",
                        name: "password",
                        required: "",
                        autocomplete: "new-password"
                      },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password-confirm" }
                    },
                    [_vm._v("Konfirmasi Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.konfirmasi_password,
                          expression: "konfirmasi_password"
                        }
                      ],
                      class: [_vm.formControl],
                      attrs: {
                        id: "password-confirm",
                        type: "password",
                        name: "password_confirmation",
                        required: "",
                        autocomplete: "new-password"
                      },
                      domProps: { value: _vm.konfirmasi_password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.konfirmasi_password = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", {
                    staticClass: "col-md-4 col-form-label text-md-right",
                    attrs: { for: "" }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-offset-4 col-md-6",
                      style: _vm.messageStyleObject
                    },
                    [_vm._v(_vm._s(_vm.getConfirmation))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Identitas")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c("v-select", {
                        attrs: { options: _vm.identitas_type },
                        model: {
                          value: _vm.identitas,
                          callback: function($$v) {
                            _vm.identitas = $$v
                          },
                          expression: "identitas"
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
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "password-confirm" }
                    },
                    [_vm._v("Nomor " + _vm._s(_vm.identitas_selected))]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.no_identitas,
                          expression: "no_identitas"
                        }
                      ],
                      class: [_vm.formControl],
                      attrs: {
                        id: "nomor-identitas",
                        name: "no_identitas",
                        required: ""
                      },
                      domProps: { value: _vm.no_identitas },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.no_identitas = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-4 col-form-label text-md-right",
                      attrs: { for: "alamat" }
                    },
                    [_vm._v("Alamat")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
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
                      attrs: { id: "alamat", name: "alamat", required: "" },
                      domProps: { value: _vm.alamat },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.alamat = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row mb-0" }, [
                  _c("div", { staticClass: "col-md-6 offset-md-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { disabled: _vm.disableSubmit, type: "submit" }
                      },
                      [_vm._v("Daftar")]
                    )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/RegisterComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/auth/RegisterComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=template&id=73ff475e& */ "./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e&");
/* harmony import */ var _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/RegisterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=template&id=73ff475e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/RegisterComponent.vue?vue&type=template&id=73ff475e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_73ff475e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);