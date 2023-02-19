"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Settings_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/DashboardLayout */ "./resources/js/Layouts/DashboardLayout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Edit",
  layout: _Layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: this.$inertia.form({
        mail_driver: null,
        mail_host: null,
        mail_port: null,
        mail_username: null,
        mail_password: null,
        mail_encryption: null,
        mail_from_name: null
      }),
      formImages: this.$inertia.form({
        logo: null,
        favicon: null
      })
    };
  },
  mounted: function mounted() {
    this.editLogoJs();
    this.setImages();
    this.setValues();
  },
  computed: {
    settings: function settings() {
      return this.$page.props.settings;
    },
    errors: function errors() {
      return this.$page.props.errors;
    }
  },
  methods: {
    editLogoJs: function editLogoJs() {
      // Metronic edit user js
      new KTImageInput('kt_logo_edit');
      new KTImageInput('kt_favicon_edit');
    },
    setValues: function setValues() {
      //set form values
      this.formData.mail_driver = this.settings.mail_driver;
      this.formData.mail_host = this.settings.mail_host;
      this.formData.mail_port = this.settings.mail_port;
      this.formData.mail_username = this.settings.mail_username;
      this.formData.mail_password = this.settings.mail_password;
      this.formData.mail_encryption = this.settings.mail_encryption;
      this.formData.mail_from_name = this.settings.mail_from_name;
    },
    setImages: function setImages() {
      //apply image to tha input background
      if (this.settings.logo_img) {
        $('#kt_logo_edit').css('background-color', '#1a1a27');
        $('#kt_logo_edit').css('background-image', 'url("' + this.settings.logo_img + '")');
        $('#kt_favicon_edit').css('background-color', '#1a1a27');
        $('#kt_favicon_edit').css('background-image', 'url("' + this.settings.logo_img + '")');
      } else {
        $('#kt_logo_edit').css('background-color', '#1a1a27');
        $('#kt_logo_edit').css('background-image', 'url("/img/brand/logo.svg")');
        $('#kt_favicon_edit').css('background-color', '#1a1a27');
        $('#kt_favicon_edit').css('background-image', 'url("/img/brand/logo.svg")');
      }
    },
    submit: function submit() {
      this.formData.patch(this.route('settings.update', this.settings), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          alert('success');
        }
      });
    },
    submitImages: function submitImages() {
      this.formImages.post(this.route('settings.images'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          alert('success');
        }
      });
    },
    imageInput: function imageInput(evt, type) {
      switch (type) {
        case 'favicon':
          $('#kt_favicon_edit').css('background-color', '#1a1a27');
          $('#kt_favicon_edit').css('background-image', '');
          this.formImages.favicon = evt.target.files[0];
          return;

        case 'logo':
          $('#kt_logo_edit').css('background-color', '#1a1a27');
          $('#kt_logo_edit').css('background-image', '');
          this.formImages.logo = evt.target.files[0];
          return;

        default:
          return;
      }
    },
    cancel: function cancel(type) {
      $('#kt_logo_edit').css('background-color', '#1a1a27');

      switch (type) {
        case 'logo':
          $('#kt_logo_edit').css('background-image', 'url("' + this.settings.logo_img + '")');
          return;

        case 'favicon':
          $('#kt_favicon_edit').css('background-image', 'url("' + this.settings.logo_img + '")');
          return;

        default:
          return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content d-flex flex-column flex-column-fluid",
  id: "kt_content"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"subheader py-2 py-lg-6 subheader-solid\" id=\"kt_subheader\"><div class=\"container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"><div class=\"d-flex align-items-center flex-wrap mr-1\"><div class=\"d-flex align-items-baseline flex-wrap mr-5\"><h5 class=\"text-dark font-weight-bold my-1 mr-5\">Application Settings</h5><ul class=\"breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm\"><li class=\"breadcrumb-item\"><div class=\"text-muted\"></div></li></ul></div></div></div></div>", 1);

var _hoisted_3 = {
  "class": "container-fluid my-10"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-xl-12 order-xl-1"
};
var _hoisted_6 = {
  "class": "card"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mb-0"
}, "Application Settings")])])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  method: "post",
  id: "kt_form",
  action: "",
  enctype: "multipart/form-data",
  autocomplete: "off"
};
var _hoisted_10 = {
  "class": "pl-lg-4"
};
var _hoisted_11 = {
  "class": "form-group row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-xl-3 col-lg-3 col-form-label text-left"
}, "Logo", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "col-lg-9 col-xl-9"
};
var _hoisted_14 = {
  "class": "image-input image-input-outline w-120px",
  style: {
    "background-size": "contain"
  },
  id: "kt_logo_edit"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "image-input-wrapper w-auto",
  id: "output"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
  "data-action": "change",
  "data-toggle": "tooltip",
  title: "",
  "data-original-title": "Change avatar"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-pen icon-sm text-muted"
}, null, -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "profile_avatar_remove"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ki ki-bold-close icon-xs text-muted"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_19];
var _hoisted_21 = {
  "class": "form-group row"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-xl-3 col-lg-3 col-form-label text-left"
}, "Favicon", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "col-lg-9 col-xl-9"
};
var _hoisted_24 = {
  "class": "image-input image-input-outline w-120px",
  style: {
    "background-size": "contain"
  },
  id: "kt_favicon_edit"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "image-input-wrapper w-auto",
  id: "favoutput"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
  "data-action": "change",
  "data-toggle": "tooltip",
  title: "",
  "data-original-title": "Change avatar"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-pen icon-sm text-muted"
}, null, -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "profile_avatar_remove"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ki ki-bold-close icon-xs text-muted"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = [_hoisted_29];
var _hoisted_31 = {
  "class": "text-right"
};
var _hoisted_32 = {
  "class": "card mt-8"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mb-0"
}, "Email Settings")])])], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "card-body"
};
var _hoisted_35 = {
  method: "post",
  id: "Email_form",
  action: "",
  enctype: "multipart/form-data",
  autocomplete: "off"
};
var _hoisted_36 = {
  "class": "pl-lg-4"
};
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-lg-6"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_driver"
}, "Mail Driver", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "invalid-feedback"
};
var _hoisted_41 = {
  "class": "col-lg-6"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_host"
}, "Mail Host", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "invalid-feedback"
};
var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  "class": "col-lg-6"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_port"
}, "Mail Port", -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "invalid-feedback"
};
var _hoisted_48 = {
  "class": "col-lg-6"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_username"
}, "Mail username", -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "invalid-feedback"
};
var _hoisted_51 = {
  "class": "row"
};
var _hoisted_52 = {
  "class": "col-lg-6"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_password"
}, "Mail Password", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "invalid-feedback"
};
var _hoisted_55 = {
  "class": "col-lg-6"
};
var _hoisted_56 = {
  "class": "form-group"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "mail_encryption"
}, "Security Type", -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "ssl", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "tls", -1
/* HOISTED */
);

var _hoisted_60 = [_hoisted_58, _hoisted_59];

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-control-label",
  "for": "input-mail_from_name"
}, "Mail From Name", -1
/* HOISTED */
);

var _hoisted_62 = {
  "class": "invalid-feedback"
};
var _hoisted_63 = {
  "class": "text-right"
};
var _hoisted_64 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Group"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    name: "logo_img",
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $options.imageInput($event, 'logo');
    }),
    "class": "w-100",
    accept: ".png, .jpg, .jpeg"
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.cancel('logo');
    }),
    "data-action": "cancel",
    "data-toggle": "tooltip",
    title: "Cancel avatar"
  }, _hoisted_20)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Group"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Group"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    name: "favicon",
    onInput: _cache[2] || (_cache[2] = function ($event) {
      return $options.imageInput($event, 'favicon');
    }),
    "class": "w-100",
    accept: ".png, .jpg, .jpeg"
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_28]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.cancel('favicon');
    }),
    "data-action": "cancel",
    "data-toggle": "tooltip",
    title: "Cancel avatar"
  }, _hoisted_30)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.submitImages && $options.submitImages.apply($options, arguments);
    }),
    style: {
      "width": "100px"
    },
    type: "button",
    "class": "btn btn-primary mt-4"
  }, "Save")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_driver
    }])
  }, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "mail_driver",
    id: "input-mail_driver",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.formData.mail_driver = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $options.errors.mail_driver
    }]),
    placeholder: "Mail Driver",
    autofocus: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_driver]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_driver), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_host
    }])
  }, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "mail_host",
    id: "input-mail_host",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'is-invalid': $options.errors.mail_host
    }, "form-control"]),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.formData.mail_host = $event;
    }),
    placeholder: "Mail Host",
    autofocus: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_host]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_host), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_port
    }])
  }, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "mail_port",
    id: "input-mail_port",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'is-invalid': $options.errors.mail_port
    }, "form-control"]),
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.formData.mail_port = $event;
    }),
    placeholder: "Mail Port",
    autofocus: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_port]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_port), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_username
    }])
  }, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'is-invalid': $options.errors.mail_username
    }, "form-control"]),
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.formData.mail_username = $event;
    }),
    name: "mail_username",
    id: "input-mail_username",
    placeholder: "Mail username"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_username]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_username), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_password
    }])
  }, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "mail_password",
    id: "input-mail_password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'is-invalid': $options.errors.mail_password
    }, "form-control"]),
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.formData.mail_password = $event;
    }),
    placeholder: "Mail Password"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_password), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "mail_encryption",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.formData.mail_encryption = $event;
    }),
    id: "mail_encryption",
    "class": "form-control form-control-alternative"
  }, _hoisted_60, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.formData.mail_encryption]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-group", {
      'has-danger': $options.errors.mail_from_name
    }])
  }, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "mail_from_name",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'is-invalid': $options.errors.mail_from_name
    }, "form-control"]),
    id: "input-mail_from_name",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.formData.mail_from_name = $event;
    }),
    placeholder: "Mail From Name",
    autofocus: ""
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.mail_from_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errors.mail_from_name), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }),
    disabled: $data.formData.processing,
    style: {
      "width": "100px"
    },
    type: "button",
    "class": "btn btn-primary mt-4"
  }, "Save", 8
  /* PROPS */
  , _hoisted_64)])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Settings/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Settings/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_a9504a86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=a9504a86 */ "./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js");
/* harmony import */ var D_Training_projects_MLMDashboard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Training_projects_MLMDashboard_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_a9504a86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Settings/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_a9504a86__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_a9504a86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=a9504a86 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/Edit.vue?vue&type=template&id=a9504a86");


/***/ })

}]);