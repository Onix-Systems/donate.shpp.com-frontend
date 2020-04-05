(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");

var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\ProgressBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var styles = {
  wrapper: {},
  progressBar: {
    backgroundImage: "linear-gradient(to right, ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].progressGradientStart, " 0%, ").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].progressGradientMiddle, " 30%, ").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].progressGradientEnd, " 100%)"),
    width: '100%',
    height: '8px',
    position: 'relative'
  },
  progressBarNotFundedPart: {
    backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].progressGradientEmpty,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '90%'
  }
};

var ProgressBar = function ProgressBar(_ref) {
  var amount = _ref.amount,
      funded = _ref.funded;
  var notFundedPercentage = funded > amount ? 0 : 100 - 100 * funded / amount;
  return __jsx("div", {
    style: styles.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    style: styles.progressBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    style: _objectSpread({}, styles.progressBarNotFundedPart, {
      width: "".concat(notFundedPercentage, "%")
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony import */ var _mock_placeholderData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mock/placeholderData */ "./mock/placeholderData.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");







var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\ProjectCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var styles = {
  infoWrapper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  publishedAt: {
    textAlign: 'right',
    opacity: '0.6'
  },
  description: {
    margin: '10px 0 15px',
    flexGrow: 1
  }
};

var ProjectCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProjectCard, _React$Component);

  function ProjectCard(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectCard);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectCard).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmitClick", function () {
      var form = _this.submitRef.current.getElementsByTagName('form')[0];

      if (form) {
        form.setAttribute('target', '_blank');
        form.submit();
      }
    });

    _this.submitRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.state = {
      button: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var project = this.props.project;
      var prefix = 'https://cors-anywhere.herokuapp.com/'; // TODO: Remove when CORS will be fixed

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefix, "https://back.donate.2.shpp.me/api/v1/projects/button?id=").concat(project._id)).then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this2.setState({
          button: data.button.replace(/\\/g, '')
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var project = this.props.project;
      var button = this.state.button;
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/projects/[id]",
        as: "/projects/".concat(project._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("img", {
        src: project.image || _mock_placeholderData__WEBPACK_IMPORTED_MODULE_12__["default"].imagePlaceholder,
        alt: "placeholder",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "project-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), __jsx("div", {
        style: styles.infoWrapper,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/projects/[id]",
        as: "/projects/".concat(project._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "project-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, project.name)), __jsx("p", {
        style: styles.description,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, project.description), !project.completed && __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "funded-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u0412\u0436\u0435 \u0437\u0456\u0431\u0440\u0430\u043B\u0438: ".concat(project.amountFunded, " \u0433\u0440\u043D (\u0437 ").concat(project.amount, " \u0433\u0440\u043D)")), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        amount: project.amount,
        funded: project.amountFunded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), !project.completed && __jsx("div", {
        ref: this.submitRef,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "button-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        onClick: this.onSubmitClick,
        onKeyPress: function onKeyPress() {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "submit-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438"), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: button
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white]]]) + " " + "liqpay-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1632828356",
        dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white],
        __self: this
      }, ".card.__jsx-style-dynamic-selector:hover{-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);box-shadow:0 20px 25px rgba(0,0,0,0.15) !important;}.card.__jsx-style-dynamic-selector:hover h3.__jsx-style-dynamic-selector{color:".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, ";}.liqpay-form.__jsx-style-dynamic-selector{display:none;}.project-image.__jsx-style-dynamic-selector{height:150px;object-fit:cover;margin:0 0 10px;width:100%;cursor:pointer;}.project-title.__jsx-style-dynamic-selector{margin:5px 0;cursor:pointer;}.button-wrapper.__jsx-style-dynamic-selector{padding:25px 0 15px;text-align:center;}.funded-text.__jsx-style-dynamic-selector{margin-bottom:5px;display:inline-block;}.submit-button.__jsx-style-dynamic-selector{background-color:").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].green, ";color:").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, ";border:none;padding:10px 25px;font-size:20px;display:inline-block;cursor:pointer;}.card.__jsx-style-dynamic-selector{margin:0 15px 50px;width:calc(100%/3 - 30px);max-width:540px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white, ";-webkit-transition:0.3s;transition:0.3s;box-shadow:0 1px 4px rgba(0,0,0,0.1);}@media screen and (max-width:1240px){.card.__jsx-style-dynamic-selector{margin:0 15px 40px;width:calc(100%/2 - 30px);}}@media screen and (max-width:768px){.card.__jsx-style-dynamic-selector{margin:0 0 30px;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxjb21wb25lbnRzXFxQcm9qZWN0Q2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR1ksQUFFMEMsQUFJUSxBQUd0QixBQUdBLEFBT0EsQUFJTyxBQUlGLEFBSTRCLEFBUzNCLEFBV0UsQUFNSCxhQS9DcEIsQUFHbUIsQUFPRixHQXNDRixFQTlCUSxDQWFLLEFBV0UsQ0E1QlYsT0FtQ2xCLENBdENGLEVBUGtCLEtBUGxCLEdBa0JBLENBSUEsTUFha0IsQUFXaEIsQ0F0Q1csQUFpQndCLFdBaEJwQixJQTJCRixXQTFCZixTQWdCYyxZQTlCMEMsQUErQnBDLGtCQUNILGVBQ00sU0FRQyxTQXhDeEIsR0FpQ2lCLGVBQ2pCLG1EQU9nRCw4Q0FDOUIsd0NBQ3dCLHFDQUMxQyIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcY29tcG9uZW50c1xcUHJvamVjdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHBsYWNlaG9sZGVyRGF0YSBmcm9tICcuLi9tb2NrL3BsYWNlaG9sZGVyRGF0YSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3RoZW1lL2NvbG9ycyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaW5mb1dyYXBwZXI6IHtcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwdWJsaXNoZWRBdDoge1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICBvcGFjaXR5OiAnMC42JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46ICcxMHB4IDAgMTVweCcsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59O1xuXG5jbGFzcyBQcm9qZWN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3VibWl0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJ1dHRvbjogJycsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmVmaXggPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJzsgLy8gVE9ETzogUmVtb3ZlIHdoZW4gQ09SUyB3aWxsIGJlIGZpeGVkXG4gICAgZmV0Y2goYCR7cHJlZml4fWh0dHBzOi8vYmFjay5kb25hdGUuMi5zaHBwLm1lL2FwaS92MS9wcm9qZWN0cy9idXR0b24/aWQ9JHtwcm9qZWN0Ll9pZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYnV0dG9uOiBkYXRhLmJ1dHRvbi5yZXBsYWNlKC9cXFxcL2csICcnKSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG9uU3VibWl0Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuc3VibWl0UmVmLmN1cnJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2plY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBidXR0b24gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL1tpZF1cIiBhcz17YC9wcm9qZWN0cy8ke3Byb2plY3QuX2lkfWB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZSB8fCBwbGFjZWhvbGRlckRhdGEuaW1hZ2VQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGFsdD1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL1tpZF1cIiBhcz17YC9wcm9qZWN0cy8ke3Byb2plY3QuX2lkfWB9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHshcHJvamVjdC5jb21wbGV0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnVuZGVkLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7YNCS0LbQtSDQt9GW0LHRgNCw0LvQuDogJHtwcm9qZWN0LmFtb3VudEZ1bmRlZH0g0LPRgNC9ICjQtyAke3Byb2plY3QuYW1vdW50fSDQs9GA0L0pYH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3Byb2plY3QuYW1vdW50fVxuICAgICAgICAgICAgICAgIGZ1bmRlZD17cHJvamVjdC5hbW91bnRGdW5kZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshcHJvamVjdC5jb21wbGV0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiIHJlZj17dGhpcy5zdWJtaXRSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENsaWNrfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHt9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0J/RltC00YLRgNC40LzQsNGC0LhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJ1dHRvbiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpcXBheS1mb3JtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGAuY2FyZDpob3ZlcntcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZDpob3ZlciBoM3tcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZWVufTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5saXFwYXktZm9ybSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByb2plY3QtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTVweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLmZ1bmRlZC10ZXh0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZWVufTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggNTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zIC0gMzBweCk7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNDBweCl7XG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8yIC0gMzBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\components\\\\ProjectCard.js */")));
    }
  }]);

  return ProjectCard;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./components/SocialIcon.js":
/*!**********************************!*\
  !*** ./components/SocialIcon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\SocialIcon.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SocialIcon = function SocialIcon(_ref) {
  var children = _ref.children,
      link = _ref.link;
  return __jsx("a", {
    href: link,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1473928097", [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1473928097", [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1473928097",
    dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green],
    __self: this
  }, "div.__jsx-style-dynamic-selector{width:50px;height:50px;border-radius:15%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px;}a.__jsx-style-dynamic-selector{cursor:pointer;}div.__jsx-style-dynamic-selector:hover{border:1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green, ";-webkit-transition:all 0.2s;transition:all 0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxjb21wb25lbnRzXFxTb2NpYWxJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdVLEFBR3dCLEFBU0ksQUFHK0IsV0FYbEMsSUFTZCxRQVJvQixrQkFDTCxLQVVPLGdEQUN0QixxQkFWeUIsbUdBQ0osNkZBQ1AsWUFDZCIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcY29tcG9uZW50c1xcU29jaWFsSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5cbmNvbnN0IFNvY2lhbEljb24gPSAoeyBjaGlsZHJlbiwgbGluayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17bGlua30+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JlZW59O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7ICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEljb247XG4iXX0= */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\components\\\\SocialIcon.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);

/***/ }),

/***/ "./layout/Footer.js":
/*!**************************!*\
  !*** ./layout/Footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SocialIcon */ "./components/SocialIcon.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");

var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Address = function Address(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M256 0C156.748 0 76 80.748 76 180c0 33.534 9.289 66.26 26.869 94.652l142.885 230.257A15 15 0 0 0 258.499 512h.119a14.997 14.997 0 0 0 12.75-7.292L410.611 272.22C427.221 244.428 436 212.539 436 180 436 80.748 355.252 0 256 0zm128.866 256.818L258.272 468.186l-129.905-209.34C113.734 235.214 105.8 207.95 105.8 180c0-82.71 67.49-150.2 150.2-150.2S406.1 97.29 406.1 180c0 27.121-7.411 53.688-21.234 76.818z",
    fill: "#5FAD88",
    __self: this
  }), __jsx("path", {
    d: "M256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z",
    fill: "#5FAD88",
    __self: this
  }));
};

Address.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  width: "512",
  height: "512"
};

var Phone = function Phone(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("g", {
    fill: "#5FAD88",
    __self: this
  }, __jsx("path", {
    d: "M356.5 0h-201C123.795 0 98 25.794 98 57.5v397c0 31.706 25.794 57.5 57.5 57.5h201c31.706 0 57.5-25.794 57.5-57.5v-397C414 25.794 388.206 0 356.5 0zm-201 30h201c15.164 0 27.5 12.337 27.5 27.5V395H128V57.5c0-15.163 12.337-27.5 27.5-27.5zm201 452.001h-201c-15.164 0-27.5-12.337-27.5-27.5V425h256v29.5c0 15.164-12.336 27.501-27.5 27.501z",
    __self: this
  }), __jsx("path", {
    d: "M256 437.001c-8.284 0-15 6.716-15 15v2c0 8.284 6.716 15 15 15s15-6.716 15-15v-2c0-8.284-6.715-15-15-15z",
    __self: this
  })));
};

Phone.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.001 512.001",
  width: "512",
  height: "512"
};

var Email = function Email(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M494.535 0H17.465C7.835 0 0 7.836 0 17.465v276.453c0 9.629 7.836 17.46 17.465 17.46h477.07c9.63 0 17.465-7.831 17.465-17.46V17.465C512 7.835 504.164 0 494.535 0zM30.031 43.027L173.54 138.41 30.031 263.332zM256 157.157L64.734 30.03h382.532zm-56.523-1.512l46.855 31.144a17.433 17.433 0 0 0 9.668 2.93c3.363 0 6.73-.98 9.668-2.93l46.855-31.144 144.403 125.703H55.074zm138.984-17.239l143.508-95.383v220.309zm0 0",
    fill: "#5FAD88",
    __self: this
  }));
};

Email.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 -100 512.00002 512",
  width: "512",
  height: "512"
};

var Instagram = function Instagram(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0",
    fill: "#666",
    __self: this
  }), __jsx("path", {
    d: "M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0",
    fill: "#666",
    __self: this
  }));
};

Instagram.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.00096 512.00096",
  width: "512",
  height: "512"
};

var Telegram = function Telegram(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M508.194 20.517c-4.43-4.96-11.42-6.29-17.21-3.76l-482 211a15.01 15.01 0 0 0-8.98 13.41 15.005 15.005 0 0 0 8.38 13.79l115.09 56.6 28.68 172.06c.93 6.53 6.06 11.78 12.74 12.73 4.8.69 9.57-1 12.87-4.4l90.86-90.86 129.66 92.62a15.02 15.02 0 0 0 14.24 1.74 15.01 15.01 0 0 0 9.19-11.01l90-451c.89-4.47-.26-9.26-3.52-12.92zm-372.84 263.45l-84.75-41.68 334.82-146.57-250.07 188.25zm46.94 44.59l-13.95 69.75-15.05-90.3 183.97-138.49-150.88 151.39c-2.12 2.12-3.53 4.88-4.09 7.65zm9.13 107.3l15.74-78.67 36.71 26.22-52.45 52.45zm205.41 19.94l-176.73-126.23 252.47-253.31-75.74 379.54z",
    fill: "#666",
    __self: this
  }));
};

Telegram.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.004 512.004",
  width: "512",
  height: "512"
};

var Facebook = function Facebook(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M180 512H98.008c-13.695 0-24.836-11.14-24.836-24.836V302.227H25.336C11.64 302.227.5 291.082.5 277.39v-79.246c0-13.696 11.14-24.836 24.836-24.836h47.836v-39.684c0-39.348 12.355-72.824 35.726-96.805C132.375 12.73 165.184 0 203.778 0l62.53.102c13.672.023 24.794 11.164 24.794 24.835v73.579c0 13.695-11.137 24.836-24.829 24.836l-42.101.015c-12.84 0-16.11 2.574-16.809 3.363-1.152 1.31-2.523 5.008-2.523 15.223v31.352h58.27c4.386 0 8.636 1.082 12.288 3.12 7.88 4.403 12.778 12.727 12.778 21.723l-.031 79.247c0 13.687-11.141 24.828-24.836 24.828h-58.47v184.941C204.84 500.86 193.696 512 180 512zm-76.813-30.016h71.633V288.79c0-9.144 7.442-16.582 16.582-16.582h66.727l.027-68.883h-66.758c-9.14 0-16.578-7.437-16.578-16.582v-44.789c0-11.726 1.192-25.062 10.043-35.086 10.696-12.117 27.551-13.515 39.301-13.515l36.922-.016V30.109l-57.332-.093c-62.024 0-100.566 39.703-100.566 103.609v53.117c0 9.14-7.438 16.582-16.579 16.582H30.516v68.883h56.093c9.141 0 16.579 7.438 16.579 16.582zM266.25 30.117h.004zm0 0",
    fill: "#666",
    __self: this
  }));
};

Facebook.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-110 1 511 511.99996",
  width: "512",
  height: "512"
};

var MasterCard = function MasterCard(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("title", {
    __self: this
  }, "597EFDFC-A414-4830-BD6B-B76803396F2D"), __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this
  }, __jsx("path", {
    d: "M8.239 19.012a6.486 6.486 0 0 0-1.493-.702 5.3 5.3 0 0 0-1.627-.25c-.37 0-.709.038-1.016.114-.307.077-.57.188-.79.334-.219.145-.39.32-.512.523a1.314 1.314 0 0 0-.182.688c0 .232.053.43.159.595.106.164.258.303.456.416.199.114.44.208.726.283.287.074.61.137.969.19l.77.103c.45.063.89.161 1.317.294.429.132.81.317 1.147.556.336.238.606.537.81.897.203.36.305.796.305 1.31 0 .566-.12 1.066-.357 1.5-.238.433-.562.798-.969 1.094-.408.297-.88.522-1.417.675a6.181 6.181 0 0 1-1.71.23 8.115 8.115 0 0 1-2.369-.377 7.183 7.183 0 0 1-1.132-.464 4.865 4.865 0 0 1-.968-.652l.976-1.428c.19.174.42.336.687.484a5.983 5.983 0 0 0 1.817.647c.33.061.658.092.98.092.366 0 .706-.037 1.02-.112a2.8 2.8 0 0 0 .822-.325c.233-.143.417-.316.552-.52.135-.204.202-.432.202-.686 0-.434-.213-.765-.639-.993-.426-.228-1.046-.397-1.861-.508l-.865-.119a6.812 6.812 0 0 1-1.21-.286 3.518 3.518 0 0 1-1.056-.559 2.693 2.693 0 0 1-.747-.904c-.188-.363-.281-.803-.281-1.322 0-.556.115-1.05.345-1.48.23-.432.544-.794.94-1.087a4.335 4.335 0 0 1 1.393-.671c.532-.154 1.1-.23 1.703-.23.81 0 1.54.107 2.194.321a7.56 7.56 0 0 1 1.822.877l-.911 1.452zm6.056.85c.529 0 1.015.097 1.456.29.442.193.82.465 1.136.817.314.352.56.773.738 1.262.177.49.265 1.03.265 1.624a6.126 6.126 0 0 1-.031.619h-5.62c.053.344.151.637.294.88.143.244.315.444.516.6.201.156.426.272.675.345a2.7 2.7 0 0 0 .778.111c.38 0 .763-.07 1.147-.21.383-.14.734-.337 1.051-.592l.826 1.183c-.466.397-.96.675-1.48.833a5.623 5.623 0 0 1-1.648.239 4.206 4.206 0 0 1-1.571-.285 3.567 3.567 0 0 1-1.23-.81 3.659 3.659 0 0 1-.802-1.262 4.519 4.519 0 0 1-.286-1.644c0-.593.092-1.135.278-1.627.185-.492.444-.914.778-1.266a3.46 3.46 0 0 1 1.195-.818c.462-.192.974-.29 1.535-.29zm-.032 1.476c-.296 0-.56.045-.79.134-.23.09-.428.219-.595.386a2.027 2.027 0 0 0-.408.595c-.106.23-.18.483-.222.758h3.945c-.09-.593-.302-1.053-.635-1.381-.334-.328-.766-.492-1.295-.492zm8.819-1.476c.572 0 1.103.101 1.595.305.493.204.908.507 1.247.91L24.86 22.21a3.186 3.186 0 0 0-.841-.583 2.319 2.319 0 0 0-.984-.202c-.318 0-.615.06-.89.178a2.126 2.126 0 0 0-.714.5 2.308 2.308 0 0 0-.473.77 2.76 2.76 0 0 0-.17.988c0 .36.056.69.17.989.114.298.272.555.473.77.2.214.438.38.714.5.275.119.572.178.89.178.365 0 .706-.076 1.023-.227.318-.15.599-.34.842-.567l1.023 1.143c-.349.402-.767.705-1.254.909a4.068 4.068 0 0 1-1.587.305 4.252 4.252 0 0 1-1.643-.305 3.75 3.75 0 0 1-1.262-.841 3.728 3.728 0 0 1-.81-1.266 4.316 4.316 0 0 1-.285-1.588c0-.571.095-1.1.286-1.587.19-.487.46-.91.81-1.266.349-.357.77-.637 1.261-.841a4.238 4.238 0 0 1 1.643-.306zm11.35 4.58c0 .603-.1 1.121-.301 1.555a3.024 3.024 0 0 1-.794 1.064 3.183 3.183 0 0 1-1.127.607 4.425 4.425 0 0 1-2.603 0 3.22 3.22 0 0 1-1.131-.607 2.96 2.96 0 0 1-.794-1.064c-.199-.434-.298-.953-.298-1.555V20.06h1.667v4.23c0 .366.047.677.143.933.095.257.226.465.393.624.167.158.364.273.591.345.228.071.471.107.73.107.26 0 .503-.036.73-.107.228-.071.425-.186.591-.345.167-.159.298-.367.393-.624a2.68 2.68 0 0 0 .143-.932v-4.23h1.667v4.38zm6.056-4.58c.255 0 .483.017.687.051.204.035.401.09.592.163l-.397 1.643a2.385 2.385 0 0 0-.611-.206 3.227 3.227 0 0 0-.651-.072c-.265 0-.508.045-.73.135-.222.09-.413.222-.572.397a1.867 1.867 0 0 0-.373.643c-.09.254-.135.542-.135.866v4.183H36.64V20.06h1.643v.857c.254-.365.57-.633.945-.802.375-.17.796-.254 1.261-.254zm5.573 0c.529 0 1.015.097 1.456.29.442.193.82.465 1.136.817.314.352.56.773.738 1.262.177.49.265 1.03.265 1.624a4.858 4.858 0 0 1-.032.619h-5.619c.053.344.151.637.294.88.143.244.314.444.516.6.201.156.426.272.675.345a2.7 2.7 0 0 0 .778.111c.38 0 .763-.07 1.147-.21.384-.14.734-.337 1.051-.592l.826 1.183a4.125 4.125 0 0 1-1.48.833 5.623 5.623 0 0 1-1.647.239 4.206 4.206 0 0 1-1.572-.285 3.567 3.567 0 0 1-1.23-.81 3.659 3.659 0 0 1-.802-1.262 4.519 4.519 0 0 1-.286-1.644c0-.593.093-1.135.278-1.627.185-.492.444-.914.778-1.266a3.469 3.469 0 0 1 1.194-.818c.463-.192.975-.29 1.536-.29zm-.032 1.476c-.297 0-.56.045-.79.134-.23.09-.429.219-.596.386a2.027 2.027 0 0 0-.408.595c-.106.23-.18.483-.222.758h3.945c-.09-.593-.302-1.053-.635-1.381-.333-.328-.765-.492-1.294-.492zm10.787-4.993c.492 0 .968.053 1.429.16.46.105.889.258 1.285.46.397.2.757.446 1.08.734.323.289.593.612.81.972l-1.5 1a3.64 3.64 0 0 0-1.307-1.175c-.532-.285-1.13-.428-1.797-.428-.567 0-1.09.098-1.572.293a3.672 3.672 0 0 0-1.246.826 3.818 3.818 0 0 0-.821 1.278 4.396 4.396 0 0 0-.298 1.643c0 .598.1 1.146.298 1.643.198.497.472.923.82 1.278.35.355.765.63 1.247.825a4.133 4.133 0 0 0 1.572.294c.66 0 1.255-.14 1.782-.42.527-.281.964-.673 1.314-1.176l1.46 1.072a4.807 4.807 0 0 1-.837.936 5.25 5.25 0 0 1-1.064.707 5.536 5.536 0 0 1-1.254.448 6.233 6.233 0 0 1-1.401.155 6.215 6.215 0 0 1-2.35-.432 5.45 5.45 0 0 1-1.841-1.203 5.447 5.447 0 0 1-1.2-1.825 6.07 6.07 0 0 1-.428-2.302c0-.831.143-1.598.429-2.302a5.438 5.438 0 0 1 1.199-1.826 5.46 5.46 0 0 1 1.841-1.202 6.218 6.218 0 0 1 2.35-.433zm9.803 3.517c.587 0 1.13.101 1.63.305a3.861 3.861 0 0 1 2.155 2.107c.207.487.31 1.017.31 1.587 0 .572-.103 1.102-.309 1.588a3.858 3.858 0 0 1-2.155 2.107c-.5.204-1.044.306-1.631.306a4.278 4.278 0 0 1-1.631-.306 3.941 3.941 0 0 1-1.294-.841 3.884 3.884 0 0 1-.854-1.266 4.024 4.024 0 0 1-.31-1.588c0-.571.104-1.1.31-1.587.207-.486.49-.909.854-1.265a3.932 3.932 0 0 1 1.294-.842 4.278 4.278 0 0 1 1.63-.305zm0 1.563c-.34 0-.654.06-.945.179a2.226 2.226 0 0 0-.753.5 2.333 2.333 0 0 0-.5.77 2.6 2.6 0 0 0-.183.987c0 .36.06.69.182.989.123.299.289.556.5.77.212.214.464.38.754.5.292.119.606.178.945.178.338 0 .653-.06.944-.178.291-.12.544-.286.758-.5.215-.214.382-.471.504-.77.122-.299.183-.629.183-.989 0-.359-.06-.689-.183-.987a2.305 2.305 0 0 0-.504-.77 2.274 2.274 0 0 0-.758-.5 2.476 2.476 0 0 0-.944-.179zm9.088-1.563c.546 0 1.014.101 1.405.305.392.204.72.475.985.814v-4.747h1.659v11.43h-1.659v-.912a2.931 2.931 0 0 1-.985.81c-.391.2-.86.301-1.405.301a3.699 3.699 0 0 1-2.698-1.127 3.827 3.827 0 0 1-.81-1.266 4.275 4.275 0 0 1-.293-1.607c0-.582.097-1.118.293-1.607a3.83 3.83 0 0 1 .81-1.266 3.707 3.707 0 0 1 2.698-1.128zm.199 1.563c-.36 0-.681.065-.965.195-.283.13-.522.304-.718.524-.196.219-.347.477-.452.773a2.786 2.786 0 0 0-.16.945c0 .334.054.648.16.945.105.296.256.554.452.773.196.22.434.394.718.525.284.13.604.194.965.194.344 0 .656-.062.937-.187.28-.123.52-.294.722-.511.2-.217.357-.474.468-.77.111-.296.166-.62.166-.969s-.056-.672-.166-.968a2.324 2.324 0 0 0-.468-.77 2.177 2.177 0 0 0-.722-.512 2.29 2.29 0 0 0-.937-.187zm9.374-1.563c.53 0 1.015.097 1.456.29.442.193.82.465 1.136.817.314.352.56.773.738 1.262.177.49.266 1.03.266 1.624a5.394 5.394 0 0 1-.032.619h-5.62c.053.344.151.637.295.88.143.244.314.444.516.6.2.156.425.272.674.345.25.075.509.111.778.111.381 0 .764-.07 1.147-.21.384-.14.734-.337 1.052-.592l.825 1.183c-.465.397-.959.675-1.48.833a5.617 5.617 0 0 1-1.647.239 4.208 4.208 0 0 1-1.572-.285 3.57 3.57 0 0 1-1.23-.81 3.659 3.659 0 0 1-.802-1.262 4.52 4.52 0 0 1-.286-1.644c0-.593.092-1.135.278-1.627.185-.492.444-.914.778-1.266a3.463 3.463 0 0 1 1.194-.818c.464-.192.976-.29 1.536-.29zm4.388 7.802v-.382h.154v-.078h-.392v.078h.154v.382h.084zm.763 0v-.461h-.12l-.14.317-.138-.317h-.12v.461h.085v-.348l.13.3h.088l.13-.3v.348h.085zm-5.182-6.326c-.297 0-.56.045-.79.134-.23.09-.429.219-.596.386a2.04 2.04 0 0 0-.409.595c-.106.23-.18.483-.222.758h3.945c-.09-.593-.301-1.053-.635-1.381-.333-.328-.764-.492-1.293-.492z",
    fill: "#F79E1B",
    __self: this
  }), __jsx("path", {
    d: "M13.7 11.985h-1.86V2.501l-3.367 8.356h-1.96L3.146 2.59v9.394h-1.86V.458h2.856l3.351 8.234L10.844.458h2.857v11.527zm9.798 0h-1.72v-.946a3.037 3.037 0 0 1-1.021.84c-.406.208-.893.313-1.457.313a3.87 3.87 0 0 1-1.548-.309 3.853 3.853 0 0 1-1.252-.86 3.983 3.983 0 0 1-.84-1.314 4.445 4.445 0 0 1-.304-1.667c0-.604.101-1.16.305-1.668a3.99 3.99 0 0 1 .84-1.313A3.844 3.844 0 0 1 19.3 3.892c.565 0 1.05.106 1.457.317.406.211.746.493 1.02.844v-.955h1.721v7.887zm-3.993-6.471c-.373 0-.706.067-1 .201a2.227 2.227 0 0 0-.745.544c-.203.228-.36.494-.47.802-.11.308-.164.635-.164.98 0 .346.055.672.165.98.11.307.266.575.47.803.202.228.45.409.744.543.294.134.627.202 1 .202.357 0 .68-.065.972-.194.29-.129.54-.305.75-.53.207-.226.37-.492.485-.8.115-.307.173-.641.173-1.004 0-.362-.058-.697-.173-1.004a2.414 2.414 0 0 0-.486-.8 2.263 2.263 0 0 0-.75-.53 2.37 2.37 0 0 0-.97-.193zm11.897.56a4.925 4.925 0 0 0-1.03-.445 6.161 6.161 0 0 0-.678-.165 4.03 4.03 0 0 0-.729-.066c-.472 0-.838.086-1.1.26-.26.172-.39.4-.39.679 0 .136.034.252.103.345.069.094.16.17.276.231.115.06.252.108.411.144.16.036.33.068.51.095l.816.123c.862.126 1.534.378 2.017.753.483.376.725.902.725 1.577a2.247 2.247 0 0 1-.943 1.856c-.304.228-.68.405-1.128.532a5.61 5.61 0 0 1-1.52.188c-.202 0-.439-.012-.707-.036a5.94 5.94 0 0 1-.856-.148 6.214 6.214 0 0 1-.923-.309 4.245 4.245 0 0 1-.897-.518l.799-1.293c.142.11.297.212.465.308.167.096.356.182.568.255.21.075.445.134.7.177.255.044.544.066.868.066.593 0 1.04-.086 1.342-.26.302-.172.453-.407.453-.703 0-.225-.11-.41-.329-.556-.22-.145-.565-.25-1.037-.317l-.824-.107c-.878-.12-1.543-.377-1.996-.77-.453-.392-.68-.907-.68-1.543 0-.39.076-.741.227-1.054.15-.313.368-.578.65-.795a3.118 3.118 0 0 1 1.025-.502c.4-.118.853-.177 1.359-.177.62 0 1.204.073 1.753.219.55.145 1.03.35 1.441.613l-.741 1.343zm8.167-.413h-3.021v3.434c0 .263.032.488.098.675.066.187.155.34.268.457.112.118.244.205.395.26.151.054.314.082.49.082.27 0 .542-.052.82-.157a4.27 4.27 0 0 0 .77-.378l.682 1.375a5.349 5.349 0 0 1-1.074.551c-.398.154-.847.231-1.346.231-.895 0-1.591-.248-2.088-.745-.496-.497-.745-1.27-.745-2.318V5.661h-1.573V4.098h1.573V1.71h1.729v2.388h3.022V5.66zm5.294-1.77c.549 0 1.052.1 1.51.301.46.2.852.483 1.179.848.326.365.58.802.765 1.309.184.507.276 1.07.276 1.683a6.587 6.587 0 0 1-.033.643h-5.83c.055.356.157.661.305.914.148.252.326.46.535.621.209.162.442.282.7.358.258.077.527.115.807.115.395 0 .792-.072 1.19-.218.398-.145.761-.35 1.09-.613l.857 1.226c-.483.412-.995.7-1.536.865-.54.165-1.11.247-1.708.247-.593 0-1.136-.099-1.63-.296a3.685 3.685 0 0 1-1.276-.84 3.787 3.787 0 0 1-.832-1.309 4.693 4.693 0 0 1-.296-1.704c0-.614.096-1.177.288-1.688a3.87 3.87 0 0 1 .807-1.313 3.577 3.577 0 0 1 1.239-.848 4.1 4.1 0 0 1 1.593-.3zm-.033 1.532c-.307 0-.58.047-.82.14a1.774 1.774 0 0 0-.616.4 2.11 2.11 0 0 0-.425.618 2.95 2.95 0 0 0-.23.785h4.092c-.093-.614-.313-1.092-.659-1.432-.346-.34-.793-.51-1.342-.51zm9.723-1.532c.264 0 .501.018.713.054.21.036.415.092.613.169l-.412 1.704a2.447 2.447 0 0 0-.634-.214 3.425 3.425 0 0 0-.675-.074c-.275 0-.527.047-.758.14-.23.093-.428.23-.592.411-.165.181-.294.403-.387.667a2.68 2.68 0 0 0-.14.897v4.339H50.56V4.097h1.703v.889c.264-.379.59-.656.98-.832a3.17 3.17 0 0 1 1.31-.263zm5.887 0c.593 0 1.145.106 1.655.318.51.21.941.525 1.292.942L62.284 6.33a3.309 3.309 0 0 0-.872-.605 2.405 2.405 0 0 0-1.021-.21 2.29 2.29 0 0 0-.922.186 2.185 2.185 0 0 0-.741.518 2.394 2.394 0 0 0-.49.798c-.118.31-.177.652-.177 1.026 0 .373.059.715.177 1.025.118.31.282.576.49.799.208.222.455.395.74.518.286.123.593.185.923.185a2.45 2.45 0 0 0 1.061-.234 3.4 3.4 0 0 0 .873-.59l1.062 1.187a3.479 3.479 0 0 1-1.3.942 4.228 4.228 0 0 1-1.647.318 4.416 4.416 0 0 1-1.704-.318 3.884 3.884 0 0 1-1.309-.872 3.87 3.87 0 0 1-.84-1.313 4.488 4.488 0 0 1-.296-1.647c0-.593.1-1.142.297-1.647a3.87 3.87 0 0 1 .839-1.314c.362-.37.799-.66 1.31-.872a4.402 4.402 0 0 1 1.703-.318zm12.12 8.094h-1.722v-.946a3.037 3.037 0 0 1-1.02.84c-.407.208-.892.313-1.458.313-.554 0-1.07-.103-1.547-.309a3.86 3.86 0 0 1-1.252-.86 3.994 3.994 0 0 1-.84-1.314 4.457 4.457 0 0 1-.305-1.667c0-.604.102-1.16.305-1.668a4 4 0 0 1 .84-1.313 3.844 3.844 0 0 1 2.8-1.169c.565 0 1.05.106 1.457.317.406.211.746.493 1.02.844v-.955h1.721v7.887zm-3.994-6.471c-.373 0-.707.067-1 .201a2.233 2.233 0 0 0-.745.544c-.203.228-.36.494-.47.802-.109.308-.164.635-.164.98 0 .346.055.672.165.98.11.307.266.575.469.803.203.228.452.409.745.543.294.134.627.202 1 .202.357 0 .68-.065.972-.194a2.26 2.26 0 0 0 .75-.53c.208-.226.37-.492.485-.8a2.83 2.83 0 0 0 .174-1.004 2.83 2.83 0 0 0-.174-1.004 2.394 2.394 0 0 0-.485-.8 2.263 2.263 0 0 0-.75-.53 2.375 2.375 0 0 0-.972-.193zM79.088 3.89c.264 0 .501.018.712.054.211.036.416.092.614.169l-.412 1.704a2.45 2.45 0 0 0-.633-.214 3.436 3.436 0 0 0-.676-.074 2 2 0 0 0-.757.14c-.23.093-.429.23-.593.411-.165.181-.294.403-.387.667a2.68 2.68 0 0 0-.14.897v4.339h-1.721V4.097h1.704v.889a2.37 2.37 0 0 1 .98-.832 3.17 3.17 0 0 1 1.31-.263zm5.648 0c.566 0 1.05.106 1.457.318.406.21.747.492 1.021.843V.13h1.72v11.856h-1.72v-.947a3.037 3.037 0 0 1-1.02.84c-.407.208-.892.313-1.458.313-.554 0-1.07-.103-1.548-.309a3.86 3.86 0 0 1-1.251-.86 3.984 3.984 0 0 1-.84-1.313 4.456 4.456 0 0 1-.305-1.668c0-.603.102-1.16.305-1.667a4 4 0 0 1 .84-1.313 3.844 3.844 0 0 1 2.8-1.17zm6.209 7.364a.504.504 0 0 1 .36.148.506.506 0 0 1 .15.355.474.474 0 0 1-.04.194.518.518 0 0 1-.835.16.509.509 0 0 1-.149-.354.489.489 0 0 1 .149-.355.518.518 0 0 1 .365-.147zm0 .893a.38.38 0 0 0 .357-.238.386.386 0 0 0 .03-.153.386.386 0 0 0-.387-.389.398.398 0 0 0-.28.113.386.386 0 0 0-.112.276.39.39 0 0 0 .237.36c.048.021.1.03.155.03zm.03-.625c.059 0 .105.013.137.04a.134.134 0 0 1 .049.109c0 .038-.013.07-.039.095a.19.19 0 0 1-.11.047l.152.175h-.12l-.14-.174h-.046v.174h-.1v-.465h.216v-.001zm-.116.087v.124h.114a.113.113 0 0 0 .063-.015c.015-.01.023-.027.023-.048a.052.052 0 0 0-.023-.046.113.113 0 0 0-.063-.015h-.114zm-5.917-6.096c-.373 0-.707.067-1 .201a2.233 2.233 0 0 0-.745.544c-.203.228-.36.494-.47.802-.11.308-.164.635-.164.98 0 .346.055.672.164.98.11.307.267.575.47.803.203.228.451.409.745.543.293.134.627.202 1 .202.357 0 .68-.065.972-.194a2.26 2.26 0 0 0 .75-.53c.207-.226.37-.492.485-.8a2.83 2.83 0 0 0 .174-1.004 2.83 2.83 0 0 0-.174-1.004 2.394 2.394 0 0 0-.486-.8 2.263 2.263 0 0 0-.749-.53 2.373 2.373 0 0 0-.972-.193z",
    fill: "#EB001B",
    __self: this
  })));
};

MasterCard.defaultProps = {
  width: "92",
  height: "28",
  viewBox: "0 0 92 28",
  xmlns: "http://www.w3.org/2000/svg"
};

var Visa = function Visa(props) {
  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), __jsx("title", {
    __self: this
  }, "37D4FDE5-FA83-4BE4-BAA4-5DDA87DD6EEA"), __jsx("g", {
    fill: "#3B477D",
    fillRule: "evenodd",
    __self: this
  }, __jsx("path", {
    d: "M3.712 9.812L.78.789h1.254l1.4 4.444c.386 1.217.72 2.315.96 3.373h.029c.252-1.044.626-2.182 1.025-3.36L6.968.789H8.21L4.995 9.812H3.712zM8.82 6.786c.027 1.593 1.04 2.248 2.214 2.248.84 0 1.346-.146 1.787-.334l.2.843c-.413.186-1.12.402-2.147.402-1.987 0-3.175-1.311-3.175-3.266s1.147-3.494 3.027-3.494c2.106 0 2.668 1.862 2.668 3.052 0 .24-.028.429-.04.549H8.82zm3.44-.843c.015-.75-.307-1.916-1.626-1.916-1.188 0-1.706 1.097-1.8 1.916h3.426zM14.314 5.355c0-.763-.013-1.419-.052-2.021h1.027l.039 1.271h.052c.294-.87 1-1.418 1.787-1.418.133 0 .228.013.333.04v1.111a1.682 1.682 0 0 0-.4-.04c-.825 0-1.411.628-1.572 1.513a3.198 3.198 0 0 0-.054.548v3.454h-1.16V5.355zM19.502 1.512c.013.402-.28.723-.747.723-.413 0-.707-.321-.707-.723 0-.415.307-.736.734-.736.44 0 .72.323.72.736zm-1.308 1.82h1.175V9.81h-1.175V3.332zM20.903 9.812V4.23h-.907v-.898h.907v-.308c0-.91.2-1.74.746-2.263.44-.428 1.026-.601 1.574-.601a2.7 2.7 0 0 1 .999.188l-.16.909a1.738 1.738 0 0 0-.747-.147c-1 0-1.254.883-1.254 1.873v.347h1.559v.898H22.06V9.81h-1.158v.002zM26.084 1.512c.015.402-.28.723-.746.723-.414 0-.708-.321-.708-.723 0-.415.309-.736.734-.736.44 0 .72.323.72.736zm-1.306 1.82h1.173V9.81h-1.173V3.332zM28.018 6.786c.028 1.593 1.04 2.248 2.215 2.248.84 0 1.346-.146 1.787-.334l.2.843c-.413.186-1.122.402-2.148.402-1.986 0-3.174-1.311-3.174-3.266s1.147-3.494 3.027-3.494c2.106 0 2.666 1.862 2.666 3.052 0 .24-.026.429-.04.549h-4.533zm3.44-.843c.012-.75-.308-1.916-1.627-1.916-1.188 0-1.706 1.097-1.801 1.916h3.427zM39.086.308v7.83c0 .577.013 1.232.053 1.674h-1.054l-.054-1.125h-.028c-.359.721-1.145 1.27-2.2 1.27-1.558 0-2.76-1.325-2.76-3.293-.012-2.156 1.321-3.48 2.895-3.48.986 0 1.654.47 1.946.99h.027V.306h1.175v.002zm-1.175 5.66c0-.146-.013-.347-.052-.495-.172-.75-.814-1.365-1.693-1.365-1.213 0-1.933 1.07-1.933 2.503 0 1.311.64 2.397 1.907 2.397.785 0 1.506-.522 1.719-1.407.04-.16.052-.321.052-.509V5.97zM43.43 9.812c.029-.444.053-1.1.053-1.674V.308h1.16v4.068h.028c.413-.721 1.16-1.19 2.2-1.19 1.601 0 2.733 1.338 2.72 3.305 0 2.316-1.453 3.465-2.894 3.465-.933 0-1.681-.36-2.159-1.217h-.04l-.053 1.07H43.43v.003zm1.213-2.598c0 .147.028.295.054.428.227.816.906 1.377 1.759 1.377 1.227 0 1.959-1.003 1.959-2.488 0-1.298-.666-2.41-1.92-2.41-.799 0-1.545.548-1.786 1.446-.028.133-.068.295-.068.481v1.166h.002zM50.871 3.332l1.413 3.828c.147.428.308.937.413 1.326h.028c.12-.39.253-.885.413-1.353l1.28-3.801h1.24l-1.76 4.618c-.84 2.222-1.413 3.36-2.213 4.055-.574.51-1.147.71-1.44.763l-.294-.992a3.11 3.11 0 0 0 1.027-.576c.32-.254.718-.71.987-1.311.053-.12.094-.214.094-.28 0-.068-.028-.161-.08-.308L49.59 3.33h1.28v.001z",
    __self: this
  }), __jsx("g", {
    __self: this
  }, __jsx("path", {
    d: "M20.242 14.232l-3.557 9.03-1.44-7.678c-.165-.856-.833-1.352-1.574-1.352H7.855l-.079.384c1.193.264 2.55.68 3.372 1.128.502.277.646.514.808 1.168l2.727 10.587h3.615l5.537-13.265h-3.593v-.002zM25.3 14.232l-2.824 13.266h3.418l2.82-13.266zM33.201 17.908c.012-.474.463-.981 1.45-1.113.493-.064 1.84-.112 3.374.591l.599-2.81a9.119 9.119 0 0 0-3.198-.59c-3.381 0-5.755 1.804-5.777 4.387-.018 1.907 1.7 2.976 2.993 3.612 1.332.647 1.78 1.062 1.772 1.647-.007.891-1.062 1.28-2.043 1.296-1.721.027-2.717-.466-3.514-.836L28.24 27c.796.368 2.272.689 3.803.705 3.585 0 5.934-1.785 5.947-4.54.013-3.502-4.823-3.693-4.789-5.257M43.098 22.799l1.816-4.981 1.022 4.98h-2.838zm1.297-8.567c-.656 0-1.21.38-1.457.974l-5.127 12.292h3.592l.713-1.982h4.376l.41 1.982h3.17l-2.756-13.266h-2.92z",
    __self: this
  }))));
};

Visa.defaultProps = {
  width: "56",
  height: "28",
  viewBox: "0 0 56 28",
  xmlns: "http://www.w3.org/2000/svg"
};


var style = {
  iconSmall: {
    width: '20px',
    height: '20px'
  },
  iconMid: {
    width: '30px',
    height: '30px'
  },
  iconBig: {
    width: '80px',
    height: '40px',
    paddingRight: '10px'
  }
};
var instagram = 'https://www.instagram.com/shpp.kr/?igshid=1cuwl3vm5907d';
var facebook = 'https://www.facebook.com/pg/shpp.kr/posts/';
var telegram = 'https://t.me/shppkr';

var Footer = function Footer() {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]) + " " + "webpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    href: "https://programming.kr.ua/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "https://programming.kr.ua/"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]) + " " + "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: instagram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Instagram, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: telegram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(Telegram, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: facebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(Facebook, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]) + " " + "flaticon_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Icons made by\xA0", __jsx("a", {
    href: "https://www.flaticon.com/authors/freepik",
    title: "Freepik",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Freepik"), "\xA0from\xA0", __jsx("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "www.flaticon.com"))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(Address, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, \u043C. \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0432. \u0412\u0430\u0441\u0438\u043B\u0456\u0432\u0441\u044C\u043A\u0438\u0439, 10")), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Phone, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "050 20 111 80")), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(Email, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "info@programming.kr.ua"))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/agreement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0430 \u043E\u0444\u0435\u0440\u0442\u0430")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(MasterCard, {
    style: style.iconBig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(Visa, {
    style: style.iconBig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3229141235",
    dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green],
    __self: this
  }, ".footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:auto;}.container.__jsx-style-dynamic-selector{border-top:1px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, ";padding:10px;width:80%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){.container.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;}article.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:10px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;color:").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].text, ";font-size:16px;-webkit-transition:all 0.3s;transition:all 0.3s;}a.__jsx-style-dynamic-selector:hover{color:").concat(_theme_colors__WEBPACK_IMPORTED_MODULE_5__["default"].green, ";-webkit-text-decoration:none;text-decoration:none;}.flaticon_link.__jsx-style-dynamic-selector,.flaticon_link.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:10px;}i.__jsx-style-dynamic-selector{margin-right:10px;}.social.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RlMsQUFHeUIsQUFJcUMsQUFTMUIsQUFJWCxBQU1BLEFBSWEsQUFNUyxBQUlwQixBQUdHLEFBR0wsZUFMZixHQUdBLGlCQVB1QixlQTdCUixVQXVCc0IsR0F0QnpCLFVBQ0UsQ0FOSSxBQWlCTSxBQU1ILEFBb0JRLElBOUIzQixPQU5hLEFBMkJmLEtBakNBLEdBdUJBLEVBSWlCLGVBQ0ssMENBWFUsTUFZaEMsQ0F0QmdDLG9CQW9DaEMsd0ZBekJlLE9BVmYsTUFXQSIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcbGF5b3V0XFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi4vYXNzZXRzL2ljb24vMDAxLXBpbi5zdmcnO1xuaW1wb3J0IFBob25lIGZyb20gJy4uL2Fzc2V0cy9pY29uLzAwMi1lbGVjdHJvbmljcy5zdmcnO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uL2Fzc2V0cy9pY29uLzAwMy1lbWFpbC5zdmcnO1xuaW1wb3J0IEluc3RhZ3JhbSBmcm9tICcuLi9hc3NldHMvaWNvbi8wMDQtaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgVGVsZWdyYW0gZnJvbSAnLi4vYXNzZXRzL2ljb24vMDA1LXRlbGVncmFtLnN2Zyc7XG5pbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi4vYXNzZXRzL2ljb24vMDA2LWZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgTWFzdGVyQ2FyZCBmcm9tICcuLi9hc3NldHMvbWNzYy5zdmcnO1xuaW1wb3J0IFZpc2EgZnJvbSAnLi4vYXNzZXRzL3Zidi5zdmcnO1xuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxJY29uJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgaWNvblNtYWxsOiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgfSxcbiAgaWNvbk1pZDoge1xuICAgIHdpZHRoOiAnMzBweCcsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gIH0sXG4gIGljb25CaWc6IHtcbiAgICB3aWR0aDogJzgwcHgnLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICB9LFxufTtcbmNvbnN0IGluc3RhZ3JhbSA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NocHAua3IvP2lnc2hpZD0xY3V3bDN2bTU5MDdkJztcbmNvbnN0IGZhY2Vib29rID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZy9zaHBwLmtyL3Bvc3RzLyc7XG5jb25zdCB0ZWxlZ3JhbSA9ICdodHRwczovL3QubWUvc2hwcGtyJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYnBhZ2VcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wcm9ncmFtbWluZy5rci51YS9cIj5odHRwczovL3Byb2dyYW1taW5nLmtyLnVhLzwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gbGluaz17aW5zdGFncmFtfT5cbiAgICAgICAgICAgICAgPEluc3RhZ3JhbSBzdHlsZT17c3R5bGUuaWNvbk1pZH0gLz5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uIGxpbms9e3RlbGVncmFtfT5cbiAgICAgICAgICAgICAgPFRlbGVncmFtIHN0eWxlPXtzdHlsZS5pY29uTWlkfSAvPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gbGluaz17ZmFjZWJvb2t9PlxuICAgICAgICAgICAgICA8RmFjZWJvb2sgc3R5bGU9e3N0eWxlLmljb25NaWR9IC8+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGF0aWNvbl9saW5rXCI+XG5JY29ucyBtYWRlIGJ5Jm5ic3A7XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+XG4gICAgICAgICAgJm5ic3A7ZnJvbSZuYnNwO1xuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+d3d3LmZsYXRpY29uLmNvbTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgIDxBZGRyZXNzIHN0eWxlPXtzdHlsZS5pY29uU21hbGx9IC8+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAg0KPQutGA0LDRl9C90LAsINC8LiDQmtGA0L7Qv9C40LLQvdC40YbRjNC60LjQuVxuICAgICAgICAgICAg0L/RgNC+0LIuINCS0LDRgdC40LvRltCy0YHRjNC60LjQuSwgMTBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICA8UGhvbmUgc3R5bGU9e3N0eWxlLmljb25TbWFsbH0gLz5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAwNTAgMjAgMTExIDgwXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgPEVtYWlsIHN0eWxlPXtzdHlsZS5pY29uU21hbGx9IC8+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgaW5mb0Bwcm9ncmFtbWluZy5rci51YVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWdyZWVtZW50XCI+XG4gICAgICAgICAgICA8YT7Qn9GD0LHQu9GW0YfQvdCwINC+0YTQtdGA0YLQsDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXN0ZXJDYXJkIHN0eWxlPXtzdHlsZS5pY29uQmlnfSAvPlxuICAgICAgICAgICAgPFZpc2Egc3R5bGU9e3N0eWxlLmljb25CaWd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge1xuICAgICAgICAgYFxuICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICB9XG4gICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuZ3JlZW59O1xuICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgIH0gICAgXG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXG4gICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICB9ICAgICBcbiAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgYSB7XG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgIH1cbiAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5ncmVlbn07XG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLmZsYXRpY29uX2xpbmssIC5mbGF0aWNvbl9saW5rIGEge1xuICAgICAgICAgICBmb250LXNpemU6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGkgeyBcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgLnNvY2lhbCB7ICAgICAgICAgIFxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGBcbiAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\layout\\\\Footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./layout/Header.js":
/*!**************************!*\
  !*** ./layout/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_burgers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-burgers */ "./node_modules/react-burgers/dist/index.js");
/* harmony import */ var react_burgers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_burgers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");







var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var styles = {
  container: {
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: "5px solid ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].green),
    backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].white
  },
  logo: {
    fontFamily: 'arial',
    fontSize: '330%',
    fontWeight: '700',
    lineHeight: '80px',
    textDecoration: 'none',
    display: 'flex'
  },
  sh: {
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].black
  },
  plus: {
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].green
  },
  slash: {
    fontSize: '70%',
    margin: '0 25px',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].text
  },
  crowdfunding: {
    fontSize: '40%',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].text
  },
  nav: {},
  navList: {
    display: 'flex',
    listStyle: 'none'
  },
  listItem: {
    padding: '5px 10px',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_11__["default"].text,
    whiteSpace: 'nowrap'
  },
  listItemMiddle: {
    borderLeft: '2px solid #2c3e50',
    borderRight: '2px solid #2c3e50'
  },
  burgerWrapper: {
    display: 'none'
  }
};

var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMenu", function () {
      _this.setState(function (prevState) {
        return {
          isMenuExpanded: !prevState.isMenuExpanded
        };
      });
    });

    _this.state = {
      isMenuExpanded: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var isMenuExpanded = this.state.isMenuExpanded;
      return __jsx("header", {
        style: styles.container,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "site-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, !isMenuExpanded && __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("a", {
        style: styles.logo,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("span", {
        style: styles.sh,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u0428"), __jsx("span", {
        style: styles.plus,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "++"), __jsx("span", {
        style: styles.slash,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "logo__slash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "/"), __jsx("span", {
        style: styles.crowdfunding,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "crowdfunding platform"))), __jsx("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("ul", {
        style: styles.navList,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("a", {
        style: styles.listItem,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "\u043F\u0440\u043E \u043D\u0430\u0441"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        style: _objectSpread({}, styles.listItem, {}, styles.listItemMiddle),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u043F\u0440\u043E\u0435\u043A\u0442\u0438"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: {
          pathname: '/',
          query: {
            filter: 'completed'
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("a", {
        style: styles.listItem,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u0432\u0436\u0435 \u0437\u0456\u0431\u0440\u0430\u043B\u0438"))))), __jsx("div", {
        onClick: this.toggleMenu,
        onKeyPress: function onKeyPress() {},
        style: styles.burgerWrapper,
        role: "button",
        tabIndex: "0",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "burger-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(react_burgers__WEBPACK_IMPORTED_MODULE_9__["SliderReverse"], {
        active: isMenuExpanded,
        padding: "12px 10px",
        lineHeight: 3,
        width: 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1788626351",
        dynamic: [isMenuExpanded ? 'flex' : 'none'],
        __self: this
      }, "@media screen and (max-width:1240px){.logo.__jsx-style-dynamic-selector{line-height:50px !important;font-size:40px !important;}}@media screen and (max-width:768px){.nav-list.__jsx-style-dynamic-selector{display:".concat(isMenuExpanded ? 'flex' : 'none', " !important;padding-left:0;margin:0;}.site-header.__jsx-style-dynamic-selector{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;padding:5px 10px !important;}.burger-wrapper.__jsx-style-dynamic-selector{display:block !important;}}@media screen and (max-width:460px){.logo__slash.__jsx-style-dynamic-selector{margin:0 5px !important;}.logo.__jsx-style-dynamic-selector{line-height:40px !important;font-size:30px !important;}.list-item.__jsx-style-dynamic-selector{padding:5px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySFksQUFHNkMsQUFPb0IsQUFNUCxBQUtoQixBQU1GLEFBSUssQUFLTCx1QkFDekIsQ0FUQSxDQU5BLEdBbEI0QixBQTRCQSxvQkFyQlgsTUFOakIsQUE0QkEsU0FyQlcsU0FDWCx1RkFJOEIsNEJBQzlCIiwiZmlsZSI6IkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTbGlkZXJSZXZlcnNlIH0gZnJvbSAncmVhY3QtYnVyZ2Vycyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6ICc1cHggMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke2NvbG9ycy5ncmVlbn1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLndoaXRlLFxuICB9LFxuICBsb2dvOiB7XG4gICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICBmb250U2l6ZTogJzMzMCUnLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIGxpbmVIZWlnaHQ6ICc4MHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgc2g6IHtcbiAgICBjb2xvcjogY29sb3JzLmJsYWNrLFxuICB9LFxuICBwbHVzOiB7XG4gICAgY29sb3I6IGNvbG9ycy5ncmVlbixcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBmb250U2l6ZTogJzcwJScsXG4gICAgbWFyZ2luOiAnMCAyNXB4JyxcbiAgICBjb2xvcjogY29sb3JzLnRleHQsXG4gIH0sXG4gIGNyb3dkZnVuZGluZzoge1xuICAgIGZvbnRTaXplOiAnNDAlJyxcbiAgICBjb2xvcjogY29sb3JzLnRleHQsXG4gIH0sXG4gIG5hdjoge1xuICB9LFxuICBuYXZMaXN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB9LFxuICBsaXN0SXRlbU1pZGRsZToge1xuICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgIzJjM2U1MCcsXG4gICAgYm9yZGVyUmlnaHQ6ICcycHggc29saWQgIzJjM2U1MCcsXG4gIH0sXG4gIGJ1cmdlcldyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG59O1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNZW51RXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgaXNNZW51RXhwYW5kZWQ6ICFwcmV2U3RhdGUuaXNNZW51RXhwYW5kZWQgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc01lbnVFeHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwic2l0ZS1oZWFkZXJcIj5cbiAgICAgICAgeyFpc01lbnVFeHBhbmRlZFxuICAgICAgICAgICYmIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlcy5sb2dvfSBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2h9PtCoPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnBsdXN9PisrPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNsYXNofSBjbGFzc05hbWU9XCJsb2dvX19zbGFzaFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuY3Jvd2RmdW5kaW5nfT5jcm93ZGZ1bmRpbmcgcGxhdGZvcm08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZXMubmF2TGlzdH0gY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZXMubGlzdEl0ZW19IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPtC/0YDQviDQvdCw0YE8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgLi4uc3R5bGVzLmxpc3RJdGVtLCAuLi5zdHlsZXMubGlzdEl0ZW1NaWRkbGUgfX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICDQv9GA0L7QtdC60YLQuFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBmaWx0ZXI6ICdjb21wbGV0ZWQnIH0gfX0+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlcy5saXN0SXRlbX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+0LLQttC1INC30ZbQsdGA0LDQu9C4PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHt9fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnVyZ2VyV3JhcHBlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidXJnZXItd3JhcHBlclwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXJSZXZlcnNlXG4gICAgICAgICAgICBhY3RpdmU9e2lzTWVudUV4cGFuZGVkfVxuICAgICAgICAgICAgcGFkZGluZz1cIjEycHggMTBweFwiXG4gICAgICAgICAgICBsaW5lSGVpZ2h0PXszfVxuICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpe1xuICAgICAgICAgICAgICAubG9nb3tcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgICAgLm5hdi1saXN0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNNZW51RXhwYW5kZWQgPyAnZmxleCcgOiAnbm9uZSd9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNpdGUtaGVhZGVye1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5idXJnZXItd3JhcHBlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KXtcbiAgICAgICAgICAgICAgLmxvZ29fX3NsYXNoe1xuICAgICAgICAgICAgICAgIG1hcmdpbiAwIDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubG9nb3tcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubGlzdC1pdGVte1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\layout\\\\Header.js */")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./layout/Page.js":
/*!************************!*\
  !*** ./layout/Page.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./layout/Footer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Page.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "jsx-1521399778" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1521399778",
    __self: this
  }, "html{height:100%;}body{padding:0;margin:0;font-family:'Open Sans',sans-serif;color:#2c3e50;background-color:#f5f5f5;box-sizing:border-box;height:100%;}*{box-sizing:inherit;}.wrapper{min-height:100vh;margin:0 auto -100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT08sQUFHcUIsQUFHRixBQVNTLEFBR0YsVUFYUixFQUhYLEtBZXVCLEVBWGMsQUFRckMsbUJBSWUsZ0JBWEMsY0FDVyx5QkFDSCxtQkFVQSxHQVJ6QixZQUFDLCtEQVNBIiwiZmlsZSI6IkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICBodG1sICB7XG4gICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICB9XG4gICAgICBib2R5IHsgXG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gLTEwMHB4OyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+0KgrKyBDcm93ZGZ1bmRpbmcgcG9ydGFsPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\layout\\\\Page.js */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1521399778",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u0428++ Crowdfunding portal"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1521399778",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./mock/placeholderData.js":
/*!*********************************!*\
  !*** ./mock/placeholderData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  imagePlaceholder: 'https://cdn.dribbble.com/users/476251/screenshots/2619255/attachments/523315/placeholder.png'
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5f137288facb1107b491 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cxampp%5Chtdocs%5Cmyserver%5Cdonate.shpp.com-frontend%5Cpages%5Cindex.js!./":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cxampp%5Chtdocs%5Cmyserver%5Cdonate.shpp.com-frontend%5Cpages%5Cindex.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = urlPropertyFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (/*#__PURE__*/function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5f137288facb1107b491 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-burgers/dist/base.js":
/*!*************************************************!*\
  !*** ./node_modules/react-burgers/dist/base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_React$Component) {
	(0, _inherits3.default)(Base, _React$Component);

	function Base() {
		(0, _classCallCheck3.default)(this, Base);
		return (0, _possibleConstructorReturn3.default)(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
	}

	(0, _createClass3.default)(Base, [{
		key: 'formattedSize',
		value: function formattedSize(size) {
			return isNaN(parseInt(size)) ? size : size + 'px';
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    color = _props.color,
			    active = _props.active,
			    onClick = _props.onClick,
			    borderRadius = _props.borderRadius,
			    lineSpacing = _props.lineSpacing,
			    padding = _props.padding,
			    className = _props.className,
			    typeClassName = _props.typeClassName,
			    children = _props.children;


			var height = lineSpacing * 2 + lineHeight * 3;
			var formattedWidth = this.formattedSize(width);
			var formattedHeight = this.formattedSize(height);

			var customProps = this.props.customProps || {};

			var classes = [typeClassName, 'Burger'];
			if (active) classes.push('BurgerActive');
			if (className) classes.push(className);

			return _react2.default.createElement(
				'button',
				(0, _extends3.default)({ onClick: onClick }, customProps, {
					className: _style2.default.dynamic([['2913973606', [padding, formattedWidth, formattedHeight, lineHeight / 2 * -1, color, lineHeight, borderRadius, (lineSpacing + lineHeight) * -1, (lineSpacing + lineHeight) * -1]]]) + ' ' + (customProps.className != null && customProps.className || classes.join(' ') || '')
				}),
				_react2.default.createElement(
					'div',
					{
						className: _style2.default.dynamic([['2913973606', [padding, formattedWidth, formattedHeight, lineHeight / 2 * -1, color, lineHeight, borderRadius, (lineSpacing + lineHeight) * -1, (lineSpacing + lineHeight) * -1]]]) + ' ' + 'BurgerBox'
					},
					_react2.default.createElement('div', {
						className: _style2.default.dynamic([['2913973606', [padding, formattedWidth, formattedHeight, lineHeight / 2 * -1, color, lineHeight, borderRadius, (lineSpacing + lineHeight) * -1, (lineSpacing + lineHeight) * -1]]]) + ' ' + 'BurgerInner'
					})
				),
				children,
				_react2.default.createElement(_style2.default, {
					styleId: '2913973606',
					css: '.Burger{padding:' + padding + ';display:inline-block;cursor:pointer;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;outline:0;}.BurgerBox{width:' + formattedWidth + ';height:' + formattedHeight + ';display:inline-block;position:relative;}.BurgerInner{top:50%;margin-top:' + lineHeight / 2 * -1 + 'px;}.BurgerInner:before,.BurgerInner:after{content:\'\';display:block;}.BurgerInner,.BurgerInner:before,.BurgerInner:after{position:absolute;width:100%;background-color:' + color + ';height:' + lineHeight + 'px;border-radius:' + borderRadius + 'px;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}.BurgerInner:before{top:' + (lineSpacing + lineHeight) * -1 + 'px;}.BurgerInner:after{bottom:' + (lineSpacing + lineHeight) * -1 + 'px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDdUIsQUFHNEMsQUFjRixBQU8zQixBQU1JLEFBT08sQUFXaUIsQUFJRyxRQTNCRyxHQU0zQixPQU9ILE9BTlosSUFPK0MsTUFyQlgsQUErQnBDLEVBN0NxQixDQWlEckIsWUEzQkQsUUFyQmdCLGFBY00sRUFiUixFQWtDMEIsV0FqQ3pCLE1BYUksUUFaRSxVQWFyQixHQW9CK0MsT0FoQ2pCLDZCQUNwQixTQUNBLEFBK0JzQixTQTlCZCxpQkFDUCxVQUNYLDhFQTZCNEIsNERBQ00sd0VBQ2pDIiwiZmlsZSI6Ii4uL3NyYy9iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Zm9ybWF0dGVkU2l6ZShzaXplKSB7XG5cdFx0cmV0dXJuIGlzTmFOKHBhcnNlSW50KHNpemUpKSA/IHNpemUgOiBgJHtzaXplfXB4YFxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGxldCB7XG5cdFx0XHR3aWR0aCxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRjb2xvcixcblx0XHRcdGFjdGl2ZSxcblx0XHRcdG9uQ2xpY2ssXG5cdFx0XHRib3JkZXJSYWRpdXMsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHRcdHBhZGRpbmcsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHR0eXBlQ2xhc3NOYW1lLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0fSA9IHRoaXMucHJvcHNcblxuXHRcdGNvbnN0IGhlaWdodCA9IGxpbmVTcGFjaW5nICogMiArIGxpbmVIZWlnaHQgKiAzXG5cdFx0Y29uc3QgZm9ybWF0dGVkV2lkdGggPSB0aGlzLmZvcm1hdHRlZFNpemUod2lkdGgpXG5cdFx0Y29uc3QgZm9ybWF0dGVkSGVpZ2h0ID0gdGhpcy5mb3JtYXR0ZWRTaXplKGhlaWdodClcblxuXHRcdGNvbnN0IGN1c3RvbVByb3BzID0gdGhpcy5wcm9wcy5jdXN0b21Qcm9wcyB8fCB7fVxuXG5cdFx0Y29uc3QgY2xhc3NlcyA9IFt0eXBlQ2xhc3NOYW1lLCAnQnVyZ2VyJ11cblx0XHRpZihhY3RpdmUpIGNsYXNzZXMucHVzaCgnQnVyZ2VyQWN0aXZlJylcblx0XHRpZihjbGFzc05hbWUpIGNsYXNzZXMucHVzaChjbGFzc05hbWUpXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfSBvbkNsaWNrPXtvbkNsaWNrfSB7Li4uY3VzdG9tUHJvcHN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQnVyZ2VyQm94Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQnVyZ2VySW5uZXInIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlcntcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICR7cGFkZGluZ307XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5CdXJnZXJCb3h7XG5cdFx0XHRcdFx0XHR3aWR0aDogJHtmb3JtYXR0ZWRXaWR0aH07XG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICR7Zm9ybWF0dGVkSGVpZ2h0fTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6ICR7KGxpbmVIZWlnaHQgLyAyKSAqIC0xfXB4O1xuXG5cdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdCY6YWZ0ZXJ7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Jixcblx0XHRcdFx0XHRcdCY6YmVmb3JlLFxuXHRcdFx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJHtsaW5lSGVpZ2h0fXB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1c31weDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRcdFx0XHR0b3A6ICR7KGxpbmVTcGFjaW5nICsgbGluZUhlaWdodCkgKiAtMX1weDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAkeyhsaW5lU3BhY2luZyArIGxpbmVIZWlnaHQpICogLTF9cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=../src/base.js */',
					dynamic: [padding, formattedWidth, formattedHeight, lineHeight / 2 * -1, color, lineHeight, borderRadius, (lineSpacing + lineHeight) * -1, (lineSpacing + lineHeight) * -1]
				})
			);
		}
	}]);
	return Base;
}(_react2.default.Component);

exports.default = Base;
module.exports = exports['default'];
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/default-props.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-burgers/dist/default-props.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	width: 40,
	lineHeight: 4,
	lineSpacing: 6,
	color: '#000',
	borderRadius: 0,
	active: false,
	padding: '15px'
};
module.exports = exports['default'];
//# sourceMappingURL=default-props.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-burgers/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arrow = __webpack_require__(/*! ./types/arrow */ "./node_modules/react-burgers/dist/types/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

var _arrowReverse = __webpack_require__(/*! ./types/arrow-reverse */ "./node_modules/react-burgers/dist/types/arrow-reverse.js");

var _arrowReverse2 = _interopRequireDefault(_arrowReverse);

var _arrowAlt = __webpack_require__(/*! ./types/arrow-alt */ "./node_modules/react-burgers/dist/types/arrow-alt.js");

var _arrowAlt2 = _interopRequireDefault(_arrowAlt);

var _arrowAltReverse = __webpack_require__(/*! ./types/arrow-alt-reverse */ "./node_modules/react-burgers/dist/types/arrow-alt-reverse.js");

var _arrowAltReverse2 = _interopRequireDefault(_arrowAltReverse);

var _arrowTurn = __webpack_require__(/*! ./types/arrow-turn */ "./node_modules/react-burgers/dist/types/arrow-turn.js");

var _arrowTurn2 = _interopRequireDefault(_arrowTurn);

var _arrowTurnReverse = __webpack_require__(/*! ./types/arrow-turn-reverse */ "./node_modules/react-burgers/dist/types/arrow-turn-reverse.js");

var _arrowTurnReverse2 = _interopRequireDefault(_arrowTurnReverse);

var _boring = __webpack_require__(/*! ./types/boring */ "./node_modules/react-burgers/dist/types/boring.js");

var _boring2 = _interopRequireDefault(_boring);

var _collapse = __webpack_require__(/*! ./types/collapse */ "./node_modules/react-burgers/dist/types/collapse.js");

var _collapse2 = _interopRequireDefault(_collapse);

var _collapseReverse = __webpack_require__(/*! ./types/collapse-reverse */ "./node_modules/react-burgers/dist/types/collapse-reverse.js");

var _collapseReverse2 = _interopRequireDefault(_collapseReverse);

var _elastic = __webpack_require__(/*! ./types/elastic */ "./node_modules/react-burgers/dist/types/elastic.js");

var _elastic2 = _interopRequireDefault(_elastic);

var _elasticReverse = __webpack_require__(/*! ./types/elastic-reverse */ "./node_modules/react-burgers/dist/types/elastic-reverse.js");

var _elasticReverse2 = _interopRequireDefault(_elasticReverse);

var _emphatic = __webpack_require__(/*! ./types/emphatic */ "./node_modules/react-burgers/dist/types/emphatic.js");

var _emphatic2 = _interopRequireDefault(_emphatic);

var _minus = __webpack_require__(/*! ./types/minus */ "./node_modules/react-burgers/dist/types/minus.js");

var _minus2 = _interopRequireDefault(_minus);

var _perspectiveX = __webpack_require__(/*! ./types/perspective-x */ "./node_modules/react-burgers/dist/types/perspective-x.js");

var _perspectiveX2 = _interopRequireDefault(_perspectiveX);

var _perspectiveXReverse = __webpack_require__(/*! ./types/perspective-x-reverse */ "./node_modules/react-burgers/dist/types/perspective-x-reverse.js");

var _perspectiveXReverse2 = _interopRequireDefault(_perspectiveXReverse);

var _perspectiveY = __webpack_require__(/*! ./types/perspective-y */ "./node_modules/react-burgers/dist/types/perspective-y.js");

var _perspectiveY2 = _interopRequireDefault(_perspectiveY);

var _perspectiveYReverse = __webpack_require__(/*! ./types/perspective-y-reverse */ "./node_modules/react-burgers/dist/types/perspective-y-reverse.js");

var _perspectiveYReverse2 = _interopRequireDefault(_perspectiveYReverse);

var _perspectiveXY = __webpack_require__(/*! ./types/perspective-x-y */ "./node_modules/react-burgers/dist/types/perspective-x-y.js");

var _perspectiveXY2 = _interopRequireDefault(_perspectiveXY);

var _perspectiveXYReverse = __webpack_require__(/*! ./types/perspective-x-y-reverse */ "./node_modules/react-burgers/dist/types/perspective-x-y-reverse.js");

var _perspectiveXYReverse2 = _interopRequireDefault(_perspectiveXYReverse);

var _slider = __webpack_require__(/*! ./types/slider */ "./node_modules/react-burgers/dist/types/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _sliderReverse = __webpack_require__(/*! ./types/slider-reverse */ "./node_modules/react-burgers/dist/types/slider-reverse.js");

var _sliderReverse2 = _interopRequireDefault(_sliderReverse);

var _spin = __webpack_require__(/*! ./types/spin */ "./node_modules/react-burgers/dist/types/spin.js");

var _spin2 = _interopRequireDefault(_spin);

var _spinReverse = __webpack_require__(/*! ./types/spin-reverse */ "./node_modules/react-burgers/dist/types/spin-reverse.js");

var _spinReverse2 = _interopRequireDefault(_spinReverse);

var _spring = __webpack_require__(/*! ./types/spring */ "./node_modules/react-burgers/dist/types/spring.js");

var _spring2 = _interopRequireDefault(_spring);

var _springReverse = __webpack_require__(/*! ./types/spring-reverse */ "./node_modules/react-burgers/dist/types/spring-reverse.js");

var _springReverse2 = _interopRequireDefault(_springReverse);

var _squeeze = __webpack_require__(/*! ./types/squeeze */ "./node_modules/react-burgers/dist/types/squeeze.js");

var _squeeze2 = _interopRequireDefault(_squeeze);

var _stand = __webpack_require__(/*! ./types/stand */ "./node_modules/react-burgers/dist/types/stand.js");

var _stand2 = _interopRequireDefault(_stand);

var _standReverse = __webpack_require__(/*! ./types/stand-reverse */ "./node_modules/react-burgers/dist/types/stand-reverse.js");

var _standReverse2 = _interopRequireDefault(_standReverse);

var _vortex = __webpack_require__(/*! ./types/vortex */ "./node_modules/react-burgers/dist/types/vortex.js");

var _vortex2 = _interopRequireDefault(_vortex);

var _vortexReverse = __webpack_require__(/*! ./types/vortex-reverse */ "./node_modules/react-burgers/dist/types/vortex-reverse.js");

var _vortexReverse2 = _interopRequireDefault(_vortexReverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	Arrow: _arrow2.default,
	ArrowReverse: _arrowReverse2.default,
	ArrowAlt: _arrowAlt2.default,
	ArrowAltReverse: _arrowAltReverse2.default,
	ArrowTurn: _arrowTurn2.default,
	ArrowTurnReverse: _arrowTurnReverse2.default,
	Boring: _boring2.default,
	Collapse: _collapse2.default,
	CollapseReverse: _collapseReverse2.default,
	Elastic: _elastic2.default,
	ElasticReverse: _elasticReverse2.default,
	Emphatic: _emphatic2.default,
	Minus: _minus2.default,
	PerspectiveX: _perspectiveX2.default,
	PerspectiveXReverse: _perspectiveXReverse2.default,
	PerspectiveY: _perspectiveY2.default,
	PerspectiveYReverse: _perspectiveYReverse2.default,
	PerspectiveXY: _perspectiveXY2.default,
	PerspectiveXYReverse: _perspectiveXYReverse2.default,
	Slider: _slider2.default,
	SliderReverse: _sliderReverse2.default,
	Spin: _spin2.default,
	SpinReverse: _spinReverse2.default,
	Spring: _spring2.default,
	SpringReverse: _springReverse2.default,
	Squeeze: _squeeze2.default,
	Stand: _stand2.default,
	StandReverse: _standReverse2.default,
	Vortex: _vortex2.default,
	VortexReverse: _vortexReverse2.default
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow-alt-reverse.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow-alt-reverse.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowAltReverse = function (_React$Component) {
	(0, _inherits3.default)(ArrowAltReverse, _React$Component);

	function ArrowAltReverse() {
		(0, _classCallCheck3.default)(this, ArrowAltReverse);
		return (0, _possibleConstructorReturn3.default)(this, (ArrowAltReverse.__proto__ || Object.getPrototypeOf(ArrowAltReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrowAltReverse, [{
		key: 'render',
		value: function render() {
			var width = this.props.width;

			var widthX = width * .2;
			var widthY = width * .25;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrowAltReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2719121416',
					css: '.BurgerArrowAltReverse .BurgerInner:before{-webkit-transition:top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165,0.84,0.44,1);-webkit-transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);}.BurgerArrowAltReverse .BurgerInner:after{-webkit-transition:bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165,0.84,0.44,1);-webkit-transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);}.BurgerArrowAltReverse.BurgerActive .BurgerInner:before{top:0;-webkit-transform:translate3d(' + widthX + 'px,-' + widthY + 'px,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(' + widthX + 'px,-' + widthY + 'px,0) rotate(45deg) scale(0.7,1);transform:translate3d(' + widthX + 'px,-' + widthY + 'px,0) rotate(45deg) scale(0.7,1);-webkit-transition:top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);-webkit-transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);}.BurgerArrowAltReverse.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:translate3d(' + widthX + 'px,' + widthY + 'px,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(' + widthX + 'px,' + widthY + 'px,0) rotate(-45deg) scale(0.7,1);transform:translate3d(' + widthX + 'px,' + widthY + 'px,0) rotate(-45deg) scale(0.7,1);-webkit-transition:bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);-webkit-transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy1hbHQtcmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZdUIsQUFJOEQsQUFJQSxBQUc5QyxBQU1HLE1BTDZHLEdBTUEseVBBYnhILFNBSUEsZ0dBS2dFLEdBTUEsMlFBTC9ELFlBTUEiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2Fycm93LWFsdC1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvd0FsdFJldmVyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IHdpZHRoIH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHdpZHRoWCA9IHdpZHRoICogLjJcblx0XHRsZXQgd2lkdGhZID0gd2lkdGggKiAuMjVcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyQXJyb3dBbHRSZXZlcnNlJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlckFycm93QWx0UmV2ZXJzZXtcblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjFzIGVhc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZle1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3dpZHRoWH1weCwgLSR7d2lkdGhZfXB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3dpZHRoWH1weCwgJHt3aWR0aFl9cHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5BcnJvd0FsdFJldmVyc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/arrow-alt-reverse.js */',
					dynamic: [widthX, widthY, widthX, widthY]
				})
			);
		}
	}]);
	return ArrowAltReverse;
}(_react2.default.Component);

exports.default = ArrowAltReverse;


ArrowAltReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow-alt-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow-alt.js":
/*!************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow-alt.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowAlt = function (_React$Component) {
	(0, _inherits3.default)(ArrowAlt, _React$Component);

	function ArrowAlt() {
		(0, _classCallCheck3.default)(this, ArrowAlt);
		return (0, _possibleConstructorReturn3.default)(this, (ArrowAlt.__proto__ || Object.getPrototypeOf(ArrowAlt)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrowAlt, [{
		key: 'render',
		value: function render() {
			var width = this.props.width;


			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrowAlt' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2121670619',
					css: '.BurgerArrowAlt .BurgerInner:before{-webkit-transition:top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165,0.84,0.44,1);-webkit-transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);}.BurgerArrowAlt .BurgerInner:after{-webkit-transition:bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165,0.84,0.44,1);-webkit-transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165,0.84,0.44,1);}.BurgerArrowAlt.BurgerActive .BurgerInner:before{top:0;-webkit-transform:translate3d(' + width * -0.2 + 'px,' + width * -0.25 + 'px,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(' + width * -0.2 + 'px,' + width * -0.25 + 'px,0) rotate(-45deg) scale(0.7,1);transform:translate3d(' + width * -0.2 + 'px,' + width * -0.25 + 'px,0) rotate(-45deg) scale(0.7,1);-webkit-transition:top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);-webkit-transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);}.BurgerArrowAlt.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:translate3d(' + width * -0.2 + 'px,' + width * 0.25 + 'px,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(' + width * -0.2 + 'px,' + width * 0.25 + 'px,0) rotate(45deg) scale(0.7,1);transform:translate3d(' + width * -0.2 + 'px,' + width * 0.25 + 'px,0) rotate(45deg) scale(0.7,1);-webkit-transition:bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);-webkit-transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895,0.03,0.685,0.22);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy1hbHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VCLEFBSTBELEFBSUEsQUFJMUMsQUFPRyxNQU42RyxHQU9ELHlQQWZ2SCxTQUlBLGdHQU02RCxBQU9BLDhRQU41RCxTQU9BIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9hcnJvdy1hbHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93QWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyB3aWR0aCB9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckFycm93QWx0JyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlckFycm93QWx0e1xuXG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLFxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjFzIGVhc2UsXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3dpZHRoICogLTAuMn1weCwgJHt3aWR0aCAqIC0wLjI1fXB4LCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMXMgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHt3aWR0aCAqIC0wLjJ9cHgsICR7d2lkdGggKiAwLjI1fXB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5BcnJvd0FsdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/arrow-alt.js */',
					dynamic: [width * -0.2, width * -0.25, width * -0.2, width * 0.25]
				})
			);
		}
	}]);
	return ArrowAlt;
}(_react2.default.Component);

exports.default = ArrowAlt;


ArrowAlt.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow-alt.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow-reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow-reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowReverse = function (_React$Component) {
	(0, _inherits3.default)(ArrowReverse, _React$Component);

	function ArrowReverse() {
		(0, _classCallCheck3.default)(this, ArrowReverse);
		return (0, _possibleConstructorReturn3.default)(this, (ArrowReverse.__proto__ || Object.getPrototypeOf(ArrowReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrowReverse, [{
		key: 'render',
		value: function render() {
			var width = this.props.width * .2;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrowReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3012389544',
					css: '.BurgerArrowReverse.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(' + width + 'px,0,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(' + width + 'px,0,0) rotate(45deg) scale(0.7,1);transform:translate3d(' + width + 'px,0,0) rotate(45deg) scale(0.7,1);}.BurgerArrowReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(' + width + 'px,0,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(' + width + 'px,0,0) rotate(-45deg) scale(0.7,1);transform:translate3d(' + width + 'px,0,0) rotate(-45deg) scale(0.7,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy1yZXZlcnNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV1QixBQUdrRyxBQUdDLDJRQUYxRixHQUdBIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9hcnJvdy1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvd1JldmVyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdGxldCB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGggKiAuMlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJBcnJvd1JldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyQXJyb3dSZXZlcnNle1xuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmV7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3dpZHRofXB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7d2lkdGh9cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cbkFycm93UmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/arrow-reverse.js */',
					dynamic: [width, width]
				})
			);
		}
	}]);
	return ArrowReverse;
}(_react2.default.Component);

exports.default = ArrowReverse;


ArrowReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow-turn-reverse.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow-turn-reverse.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowTurnReverse = function (_React$Component) {
	(0, _inherits3.default)(ArrowTurnReverse, _React$Component);

	function ArrowTurnReverse() {
		(0, _classCallCheck3.default)(this, ArrowTurnReverse);
		return (0, _possibleConstructorReturn3.default)(this, (ArrowTurnReverse.__proto__ || Object.getPrototypeOf(ArrowTurnReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrowTurnReverse, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrowTurnReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '426410509',
					css: '.BurgerArrowTurnReverse.BurgerActive .BurgerInner{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);}.BurgerArrowTurnReverse.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(-8px,0,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(-8px,0,0) rotate(-45deg) scale(0.7,1);transform:translate3d(-8px,0,0) rotate(-45deg) scale(0.7,1);}.BurgerArrowTurnReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(-8px,0,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(-8px,0,0) rotate(45deg) scale(0.7,1);transform:translate3d(-8px,0,0) rotate(45deg) scale(0.7,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy10dXJuLXJldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBR21DLEFBR3NDLEFBR0QsMEZBTGhFLG1HQU1DLEdBSEEiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2Fycm93LXR1cm4tcmV2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3dUdXJuUmV2ZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckFycm93VHVyblJldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyQXJyb3dUdXJuUmV2ZXJzZXtcblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZle1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuQXJyb3dUdXJuUmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/arrow-turn-reverse.js */'
				})
			);
		}
	}]);
	return ArrowTurnReverse;
}(_react2.default.Component);

exports.default = ArrowTurnReverse;


ArrowTurnReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow-turn-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow-turn.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow-turn.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowTurn = function (_React$Component) {
	(0, _inherits3.default)(ArrowTurn, _React$Component);

	function ArrowTurn() {
		(0, _classCallCheck3.default)(this, ArrowTurn);
		return (0, _possibleConstructorReturn3.default)(this, (ArrowTurn.__proto__ || Object.getPrototypeOf(ArrowTurn)).apply(this, arguments));
	}

	(0, _createClass3.default)(ArrowTurn, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrowTurn' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '58890798',
					css: '.BurgerArrowTurn.BurgerActive .BurgerInner{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);}.BurgerArrowTurn.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(8px,0,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(8px,0,0) rotate(45deg) scale(0.7,1);transform:translate3d(8px,0,0) rotate(45deg) scale(0.7,1);}.BurgerArrowTurn.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(8px,0,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(8px,0,0) rotate(-45deg) scale(0.7,1);transform:translate3d(8px,0,0) rotate(-45deg) scale(0.7,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy10dXJuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN1QixBQUdtQyxBQUlvQyxBQUlDLDBGQVBoRSxnR0FJQyxHQUlBIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9hcnJvdy10dXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvd1R1cm4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJBcnJvd1R1cm4nIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyQXJyb3dUdXJue1xuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmV7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cbkFycm93VHVybi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/arrow-turn.js */'
				})
			);
		}
	}]);
	return ArrowTurn;
}(_react2.default.Component);

exports.default = ArrowTurn;


ArrowTurn.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow-turn.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/arrow.js":
/*!********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/arrow.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function (_React$Component) {
	(0, _inherits3.default)(Arrow, _React$Component);

	function Arrow() {
		(0, _classCallCheck3.default)(this, Arrow);
		return (0, _possibleConstructorReturn3.default)(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
	}

	(0, _createClass3.default)(Arrow, [{
		key: 'render',
		value: function render() {
			var width = this.props.width;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerArrow' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '698417688',
					css: '.BurgerArrow.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(-45deg) scale(0.7,1);-ms-transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(-45deg) scale(0.7,1);transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(-45deg) scale(0.7,1);}.BurgerArrow.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(45deg) scale(0.7,1);-ms-transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(45deg) scale(0.7,1);transform:translate3d(' + width * -0.2 + 'px,0,0) rotate(45deg) scale(0.7,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9hcnJvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHbUcsQUFHRCwyUUFDekYsR0FIQSIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvYXJyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRsZXQgeyB3aWR0aCB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJBcnJvdycgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJBcnJvd3tcblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZle1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmV7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7d2lkdGggKiAtMC4yfXB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3dpZHRoICogLTAuMn1weCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5BcnJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/arrow.js */',
					dynamic: [width * -0.2, width * -0.2]
				})
			);
		}
	}]);
	return Arrow;
}(_react2.default.Component);

exports.default = Arrow;


Arrow.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=arrow.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/boring.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/boring.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boring = function (_React$Component) {
	(0, _inherits3.default)(Boring, _React$Component);

	function Boring() {
		(0, _classCallCheck3.default)(this, Boring);
		return (0, _possibleConstructorReturn3.default)(this, (Boring.__proto__ || Object.getPrototypeOf(Boring)).apply(this, arguments));
	}

	(0, _createClass3.default)(Boring, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerBoring' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1266111443',
					css: '.BurgerBoring .BurgerInner,.BurgerBoring .BurgerInner:before,.BurgerBoring .BurgerInner:after{-webkit-transition-property:none;transition-property:none;}.BurgerBoring.BurgerActive .BurgerInner{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.BurgerBoring.BurgerActive .BurgerInner:before{top:0;opacity:0;}.BurgerBoring.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9ib3JpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBS2tDLEFBR0QsQUFHakIsQUFJRyxNQUhDLEdBSWUsT0FIMUIsMENBUEQsMEJBR0EsWUFRQyIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvYm9yaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3JpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJCb3JpbmcnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyQm9yaW5ne1xuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0Jixcblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUsXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5Cb3JpbmcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/boring.js */'
				})
			);
		}
	}]);
	return Boring;
}(_react2.default.Component);

exports.default = Boring;


Boring.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=boring.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/collapse-reverse.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/collapse-reverse.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapseReverse = function (_React$Component) {
	(0, _inherits3.default)(CollapseReverse, _React$Component);

	function CollapseReverse() {
		(0, _classCallCheck3.default)(this, CollapseReverse);
		return (0, _possibleConstructorReturn3.default)(this, (CollapseReverse.__proto__ || Object.getPrototypeOf(CollapseReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(CollapseReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;


			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerCollapseReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2118920446',
					css: '.BurgerCollapseReverse .BurgerInner{top:auto;bottom:0;-webkit-transition-duration:0.13s;transition-duration:0.13s;-webkit-transition-delay:0.13s;transition-delay:0.13s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerCollapseReverse .BurgerInner:after{top:' + (lineSpacing * 2 + lineHeight * 2) * -1 + 'px;-webkit-transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0.1s linear;transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0.1s linear;}.BurgerCollapseReverse .BurgerInner:before{-webkit-transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), -webkit-transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerCollapseReverse.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(45deg);transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(45deg);-webkit-transition-delay:0.22s;transition-delay:0.22s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerCollapseReverse.BurgerActive .BurgerInner:after{top:0;opacity:0;-webkit-transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0.1s 0.22s linear;transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0.1s 0.22s linear;}.BurgerCollapseReverse.BurgerActive .BurgerInner:before{top:0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9jb2xsYXBzZS1yZXZlcnNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN1QixBQUdpQixBQVEyQixBQU91QixBQUdnQixBQUtuRSxBQU1BLE1BTEksQUFNYyxHQTdCakIsT0F5QnNCLEVBeEJMLGlCQVFGLDJDQVBELFlBNkJ3QywwQ0E1Qkcsa0VBdUJqRSxpQkFoQkQsYUFRd0Isc0NBZHpCLGdCQWVpRSxtR0FKaEUsNkJBS0Esc0VBWUMiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2NvbGxhcHNlLXJldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxhcHNlUmV2ZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHtcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckNvbGxhcHNlUmV2ZXJzZScgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJDb2xsYXBzZVJldmVyc2Uge1xuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0dG9wOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwLjEzcztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHsobGluZVNwYWNpbmcgKiAyICsgbGluZUhlaWdodCAqIDIpICogLTF9cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5IDAuMXMgbGluZWFyO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkeyhsaW5lU3BhY2luZyArIGxpbmVIZWlnaHQpICogLTF9cHgsIDApIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5Db2xsYXBzZVJldmVyc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/collapse-reverse.js */',
					dynamic: [(lineSpacing * 2 + lineHeight * 2) * -1, (lineSpacing + lineHeight) * -1]
				})
			);
		}
	}]);
	return CollapseReverse;
}(_react2.default.Component);

exports.default = CollapseReverse;


CollapseReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=collapse-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/collapse.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/collapse.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collapse = function (_React$Component) {
	(0, _inherits3.default)(Collapse, _React$Component);

	function Collapse() {
		(0, _classCallCheck3.default)(this, Collapse);
		return (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
	}

	(0, _createClass3.default)(Collapse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;


			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerCollapse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3337579274',
					css: '.BurgerCollapse .BurgerInner{top:auto;bottom:0;-webkit-transition-duration:0.13s;transition-duration:0.13s;-webkit-transition-delay:0.13s;transition-delay:0.13s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerCollapse .BurgerInner:after{top:' + (lineSpacing * 2 + lineHeight * 2) * -1 + 'px;-webkit-transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0.1s linear;transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0.1s linear;}.BurgerCollapse .BurgerInner:before{-webkit-transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), -webkit-transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerCollapse.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + (lineSpacing + lineHeight) * -1 + 'px,0) rotate(-45deg);-webkit-transition-delay:0.22s;transition-delay:0.22s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerCollapse.BurgerActive .BurgerInner:after{top:0;opacity:0;-webkit-transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0.1s 0.22s linear;transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0.1s 0.22s linear;}.BurgerCollapse.BurgerActive .BurgerInner:before{top:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.1s 0.16s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.25s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9jb2xsYXBzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHaUIsQUFRMkIsQUFPdUIsQUFHaUIsQUFLcEUsQUFNQSxNQUxJLEFBTWUsR0E3QmxCLE9BeUJzQixFQXhCTCxpQkFRRiwyQ0FQRCxlQTZCd0MsdUNBNUJHLGtFQXVCakUsaUJBaEJELGdCQVF3QixtQ0FkekIsbUJBZWlFLGdHQUpoRSxnQ0FLQSxzRUFZQyIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvY29sbGFwc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxhcHNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRsZXQge1xuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyQ29sbGFwc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyQ29sbGFwc2V7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0b3A6IGF1dG87XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAkeyhsaW5lU3BhY2luZyAqIDIgKyBsaW5lSGVpZ2h0ICogMikgKiAtMX1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMC4xcyBsaW5lYXI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMTJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7KGxpbmVTcGFjaW5nICsgbGluZUhlaWdodCkgKiAtMX1weCwgMCkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/collapse.js */',
					dynamic: [(lineSpacing * 2 + lineHeight * 2) * -1, (lineSpacing + lineHeight) * -1]
				})
			);
		}
	}]);
	return Collapse;
}(_react2.default.Component);

exports.default = Collapse;


Collapse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/elastic-reverse.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/elastic-reverse.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ElasticReverse = function (_React$Component) {
	(0, _inherits3.default)(ElasticReverse, _React$Component);

	function ElasticReverse() {
		(0, _classCallCheck3.default)(this, ElasticReverse);
		return (0, _possibleConstructorReturn3.default)(this, (ElasticReverse.__proto__ || Object.getPrototypeOf(ElasticReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(ElasticReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;


			var yOffset = lineSpacing + lineHeight;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerElasticReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '772287595',
					css: '.BurgerElasticReverse .BurgerInner{top:lineHeight / 2;-webkit-transition-duration:0.275s;transition-duration:0.275s;-webkit-transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);}.BurgerElasticReverse .BurgerInner:before{top:' + yOffset + 'px;-webkit-transition:opacity 0.125s 0.275s ease;transition:opacity 0.125s 0.275s ease;}.BurgerElasticReverse .BurgerInner:after{top:' + yOffset * 2 + 'px;-webkit-transition:-webkit-transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);-webkit-transition:transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);transition:transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);}.BurgerElasticReverse.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + yOffset + 'px,0) rotate(-135deg);-ms-transform:translate3d(0,' + yOffset + 'px,0) rotate(-135deg);transform:translate3d(0,' + yOffset + 'px,0) rotate(-135deg);-webkit-transition-delay:0.075s;transition-delay:0.075s;}.BurgerElasticReverse.BurgerActive .BurgerInner:before{-webkit-transition-delay:0s;transition-delay:0s;opacity:0;}.BurgerElasticReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(270deg);-ms-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(270deg);transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(270deg);-webkit-transition-delay:0.075s;transition-delay:0.075s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9lbGFzdGljLXJldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUcyQixBQU1pQixBQUtBLEFBSXlDLEFBSXZELEFBSXVELG1CQXRCbEQsZ0JBTVksQUFLNkIsYUFReEQsVUFDWCx1QkFuQmlFLHNDQU1sRSxnR0FMRCxnQkFxQjJCLEdBUkQsaUJBSHpCLG9DQVlDLEdBUkQiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2VsYXN0aWMtcmV2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxhc3RpY1JldmVyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQge1xuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cblx0XHRsZXQgeU9mZnNldCA9IGxpbmVTcGFjaW5nICsgbGluZUhlaWdodFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckVsYXN0aWNSZXZlcnNlJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlckVsYXN0aWNSZXZlcnNlIHtcblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdHRvcDogbGluZUhlaWdodCAvIDI7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6ICR7eU9mZnNldH1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt5T2Zmc2V0ICogMn1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7eU9mZnNldH1weCwgMCkgcm90YXRlKC0xMzVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt5T2Zmc2V0ICogLTJ9cHgsIDApIHJvdGF0ZSgyNzBkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4wNzVzO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5FbGFzdGljUmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/elastic-reverse.js */',
					dynamic: [yOffset, yOffset * 2, yOffset, yOffset * -2]
				})
			);
		}
	}]);
	return ElasticReverse;
}(_react2.default.Component);

exports.default = ElasticReverse;


ElasticReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=elastic-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/elastic.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/elastic.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elastic = function (_React$Component) {
	(0, _inherits3.default)(Elastic, _React$Component);

	function Elastic() {
		(0, _classCallCheck3.default)(this, Elastic);
		return (0, _possibleConstructorReturn3.default)(this, (Elastic.__proto__ || Object.getPrototypeOf(Elastic)).apply(this, arguments));
	}

	(0, _createClass3.default)(Elastic, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;


			var yOffset = lineSpacing + lineHeight;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerElastic' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2514207425',
					css: '.BurgerElastic .BurgerInner{top:' + lineHeight / 2 + 'px;-webkit-transition-duration:0.275s;transition-duration:0.275s;-webkit-transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);}.BurgerElastic .BurgerInner:before{top:' + yOffset + 'px;-webkit-transition:opacity 0.125s 0.275s ease;transition:opacity 0.125s 0.275s ease;}.BurgerElastic .BurgerInner:after{top:' + yOffset * 2 + 'px;-webkit-transition:-webkit-transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);-webkit-transition:transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);transition:transform 0.275s cubic-bezier(0.68,-0.55,0.265,1.55);}.BurgerElastic.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + yOffset + 'px,0) rotate(135deg);-ms-transform:translate3d(0,' + yOffset + 'px,0) rotate(135deg);transform:translate3d(0,' + yOffset + 'px,0) rotate(135deg);-webkit-transition-delay:0.075s;transition-delay:0.075s;}.BurgerElastic.BurgerActive .BurgerInner:before{-webkit-transition-delay:0s;transition-delay:0s;opacity:0;}.BurgerElastic.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-270deg);-ms-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-270deg);transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-270deg);-webkit-transition-delay:0.075s;transition-delay:0.075s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9lbGFzdGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCdUIsQUFHMkMsQUFNQyxBQUtBLEFBS3dDLEFBSXRELEFBSXdELG1DQXZCbkQsQUFNWSxBQUs2QixhQVN4RCxVQUNYLHVDQXBCaUUsc0JBTWxFLGdIQUxELEFBYzBCLEdBUUMsaUJBWjFCLG9DQUtBLEdBUUMiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2VsYXN0aWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsYXN0aWMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQge1xuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cblx0XHRsZXQgeU9mZnNldCA9IGxpbmVTcGFjaW5nICsgbGluZUhlaWdodFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckVsYXN0aWMnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyRWxhc3RpYyB7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0b3A6ICR7bGluZUhlaWdodCAvIDJ9cHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6ICR7eU9mZnNldH1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTI1cyAwLjI3NXMgZWFzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt5T2Zmc2V0ICogMn1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt5T2Zmc2V0fXB4LCAwKSByb3RhdGUoMTM1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7eU9mZnNldCAqIC0yfXB4LCAwKSByb3RhdGUoLTI3MGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cbkVsYXN0aWMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/elastic.js */',
					dynamic: [lineHeight / 2, yOffset, yOffset * 2, yOffset, yOffset * -2]
				})
			);
		}
	}]);
	return Elastic;
}(_react2.default.Component);

exports.default = Elastic;


Elastic.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=elastic.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/emphatic.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/emphatic.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emphatic = function (_React$Component) {
	(0, _inherits3.default)(Emphatic, _React$Component);

	function Emphatic() {
		(0, _classCallCheck3.default)(this, Emphatic);
		return (0, _possibleConstructorReturn3.default)(this, (Emphatic.__proto__ || Object.getPrototypeOf(Emphatic)).apply(this, arguments));
	}

	(0, _createClass3.default)(Emphatic, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing,
			    width = _props.width,
			    padding = _props.padding;


			var doubleWidth = width * 2;
			var negativeDoubleWidth = doubleWidth * -1;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerEmphatic' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3076239507',
					css: '.BurgerEmphatic{overflow:hidden;}.BurgerEmphatic .BurgerInner{-webkit-transition:background-color 0.125s 0.175s ease-in;transition:background-color 0.125s 0.175s ease-in;}.BurgerEmphatic .BurgerInner:before{left:0;-webkit-transition:-webkit-transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;-webkit-transition:transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;transition:transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;}.BurgerEmphatic .BurgerInner:after{top:' + (lineHeight + lineSpacing) + 'px;right:0;-webkit-transition:-webkit-transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;-webkit-transition:transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;transition:transform 0.125s cubic-bezier(0.6,0.04,0.98,0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;}.BurgerEmphatic.BurgerActive .BurgerInner{-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background-color:transparent !important;}.BurgerEmphatic.BurgerActive .BurgerInner:before{left:' + negativeDoubleWidth + 'px;top:' + negativeDoubleWidth + 'px;-webkit-transform:translate3d(' + doubleWidth + 'px,' + doubleWidth + 'px,0) rotate(45deg);-ms-transform:translate3d(' + doubleWidth + 'px,' + doubleWidth + 'px,0) rotate(45deg);transform:translate3d(' + doubleWidth + 'px,' + doubleWidth + 'px,0) rotate(45deg);-webkit-transition:left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);-webkit-transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);}.BurgerEmphatic.BurgerActive .BurgerInner:after{right:' + negativeDoubleWidth + 'px;top:' + negativeDoubleWidth + 'px;-webkit-transform:translate3d(' + negativeDoubleWidth + 'px,' + doubleWidth + 'px,0) rotate(-45deg);-ms-transform:translate3d(' + negativeDoubleWidth + 'px,' + doubleWidth + 'px,0) rotate(-45deg);transform:translate3d(' + negativeDoubleWidth + 'px,' + doubleWidth + 'px,0) rotate(-45deg);-webkit-transition:right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);-webkit-transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075,0.82,0.165,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9lbXBoYXRpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnVCLEFBR3VCLEFBSW1DLEFBSTFDLEFBTzRCLEFBUWYsQUFNaUIsQUFTQyxPQTNCUixTQVZqQyxtQkFlVyxDQWM0QixDQVNBLE1BcEJMLEtBS0ssdUJBT29FLENBU0Msb0NBbkMzRyxvQkFvQjBDLHdDQUN6QyxnTkFkQSxVQXNCaUUsSUFTQSx5QkF2QmpFLG9WQWVDLE9BU0EiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL2VtcGhhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBoYXRpYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHRsaW5lSGVpZ2h0LFxuXHRcdFx0bGluZVNwYWNpbmcsXG5cdFx0XHR3aWR0aCxcblx0XHRcdHBhZGRpbmcsXG5cdFx0fSA9IHRoaXMucHJvcHNcblxuXHRcdGxldCBkb3VibGVXaWR0aCA9IHdpZHRoICogMlxuXHRcdGxldCBuZWdhdGl2ZURvdWJsZVdpZHRoID0gZG91YmxlV2lkdGggKiAtMVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlckVtcGhhdGljJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlckVtcGhhdGljIHtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xMjVzIDAuMTc1cyBlYXNlLWluO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHtsaW5lSGVpZ2h0ICsgbGluZVNwYWNpbmd9cHg7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMHM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAke25lZ2F0aXZlRG91YmxlV2lkdGh9cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6ICR7bmVnYXRpdmVEb3VibGVXaWR0aH1weDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtkb3VibGVXaWR0aH1weCwgJHtkb3VibGVXaWR0aH1weCwgMCkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogJHtuZWdhdGl2ZURvdWJsZVdpZHRofXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAke25lZ2F0aXZlRG91YmxlV2lkdGh9cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7bmVnYXRpdmVEb3VibGVXaWR0aH1weCwgJHtkb3VibGVXaWR0aH1weCwgMCkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuRW1waGF0aWMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/emphatic.js */',
					dynamic: [lineHeight + lineSpacing, negativeDoubleWidth, negativeDoubleWidth, doubleWidth, doubleWidth, negativeDoubleWidth, negativeDoubleWidth, negativeDoubleWidth, doubleWidth]
				})
			);
		}
	}]);
	return Emphatic;
}(_react2.default.Component);

exports.default = Emphatic;


Emphatic.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=emphatic.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/minus.js":
/*!********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/minus.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Minus = function (_React$Component) {
	(0, _inherits3.default)(Minus, _React$Component);

	function Minus() {
		(0, _classCallCheck3.default)(this, Minus);
		return (0, _possibleConstructorReturn3.default)(this, (Minus.__proto__ || Object.getPrototypeOf(Minus)).apply(this, arguments));
	}

	(0, _createClass3.default)(Minus, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerMinus' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1752268168',
					css: '.BurgerMinus .BurgerInner:before,.BurgerMinus .BurgerInner:after{-webkit-transition:bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;transition:bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;}.BurgerMinus.BurgerActive .BurgerInner:before,.BurgerMinus.BurgerActive .BurgerInner:after{opacity:0;-webkit-transition:bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;transition:bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;}.BurgerMinus.BurgerActive .BurgerInner:before{top:0;}.BurgerMinus.BurgerActive .BurgerInner:after{bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9taW51cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFNNkIsQUFJVCxBQU1KLEFBR0csTUFGVixHQUdBLENBUDRCLDBKQU43QixVQU9DIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9taW51cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWludXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyTWludXMnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyTWludXMge1xuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUsXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9wIDAuMDhzIDBzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMHMgbGluZWFyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgZWFzZS1vdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvcCAwLjA4cyBlYXNlLW91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eSAwcyAwLjA4cyBsaW5lYXI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuTWludXMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/minus.js */'
				})
			);
		}
	}]);
	return Minus;
}(_react2.default.Component);

exports.default = Minus;


Minus.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=minus.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-x-reverse.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-x-reverse.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveXReverse = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveXReverse, _React$Component);

	function PerspectiveXReverse() {
		(0, _classCallCheck3.default)(this, PerspectiveXReverse);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveXReverse.__proto__ || Object.getPrototypeOf(PerspectiveXReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveXReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveXReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '125601623',
					css: '.BurgerPerspectiveXReverse .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveXReverse .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXReverse .BurgerInner:before,.BurgerPerspectiveXReverse .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXReverse.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);transform:rotateY(-180deg);}.BurgerPerspectiveXReverse.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveXReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS14LXJldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBR21ELEFBSXNCLEFBSUUsQUFHckMsQUFJOEMsQUFHQyw2QkFOakQsNkZBQzVCLG1FQVpELHdCQVFDLGVBT0MsR0FHQSw0SkFkRiIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvcGVyc3BlY3RpdmUteC1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzcGVjdGl2ZVhSZXZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHR3aWR0aCxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBvZmZzZXQgPSBsaW5lSGVpZ2h0ICsgbGluZVNwYWNpbmdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyUGVyc3BlY3RpdmVYUmV2ZXJzZScgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJQZXJzcGVjdGl2ZVhSZXZlcnNle1xuXHRcdFx0XHRcdFx0LkJ1cmdlckJveHtcblx0XHRcdFx0XHRcdFx0cGVyc3BlY3RpdmU6ICR7d2lkdGggKiAyfXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZle1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXR9cHgsIDApIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldCAqIC0xfXB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuUGVyc3BlY3RpdmVYUmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/perspective-x-reverse.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveXReverse;
}(_react2.default.Component);

exports.default = PerspectiveXReverse;


PerspectiveXReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-x-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-x-y-reverse.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-x-y-reverse.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveXYReverse = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveXYReverse, _React$Component);

	function PerspectiveXYReverse() {
		(0, _classCallCheck3.default)(this, PerspectiveXYReverse);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveXYReverse.__proto__ || Object.getPrototypeOf(PerspectiveXYReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveXYReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveXYReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3307760133',
					css: '.BurgerPerspectiveXYReverse .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveXYReverse .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXYReverse .BurgerInner:before,.BurgerPerspectiveXYReverse .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXYReverse.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg);-ms-transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg);transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg);}.BurgerPerspectiveXYReverse.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveXYReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS14LXktcmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFHbUQsQUFJc0IsQUFJRSxBQUdyQyxBQUk4QyxBQUdDLDZCQU5qQixnS0FYN0Qsd0JBUUMsS0FJQSxVQUdDLEdBR0EsNEpBZEYiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3BlcnNwZWN0aXZlLXgteS1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzcGVjdGl2ZVhZUmV2ZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHR3aWR0aCxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBvZmZzZXQgPSBsaW5lSGVpZ2h0ICsgbGluZVNwYWNpbmdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyUGVyc3BlY3RpdmVYWVJldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyUGVyc3BlY3RpdmVYWVJldmVyc2V7XG5cdFx0XHRcdFx0XHQuQnVyZ2VyQm94e1xuXHRcdFx0XHRcdFx0XHRwZXJzcGVjdGl2ZTogJHt3aWR0aCAqIDJ9cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZykgcm90YXRlWigtMTgwZGVnKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXR9cHgsIDApIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldCAqIC0xfXB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuUGVyc3BlY3RpdmVYWVJldmVyc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/perspective-x-y-reverse.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveXYReverse;
}(_react2.default.Component);

exports.default = PerspectiveXYReverse;


PerspectiveXYReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-x-y-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-x-y.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-x-y.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveXY = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveXY, _React$Component);

	function PerspectiveXY() {
		(0, _classCallCheck3.default)(this, PerspectiveXY);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveXY.__proto__ || Object.getPrototypeOf(PerspectiveXY)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveXY, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveXY' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3667810304',
					css: '.BurgerPerspectiveXY .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveXY .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXY .BurgerInner:before,.BurgerPerspectiveXY .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveXY.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateX(180deg) rotateY(180deg);-ms-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg);}.BurgerPerspectiveXY.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveXY.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS14LXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBR21ELEFBSXNCLEFBSUUsQUFHckMsQUFJOEMsQUFHQyw2QkFObEMsMElBQzNDLHNCQVpELHdCQVFDLGVBT0MsR0FHQSw0SkFkRiIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvcGVyc3BlY3RpdmUteC15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzcGVjdGl2ZVhZIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHtcblx0XHRcdHdpZHRoLFxuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IG9mZnNldCA9IGxpbmVIZWlnaHQgKyBsaW5lU3BhY2luZ1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJQZXJzcGVjdGl2ZVhZJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclBlcnNwZWN0aXZlWFl7XG5cdFx0XHRcdFx0XHQuQnVyZ2VyQm94e1xuXHRcdFx0XHRcdFx0XHRwZXJzcGVjdGl2ZTogJHt3aWR0aCAqIDJ9cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlLFxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmV7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGVZKDE4MGRlZyk7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7b2Zmc2V0fXB4LCAwKSByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldCAqIC0xfXB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuUGVyc3BlY3RpdmVYWS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/perspective-x-y.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveXY;
}(_react2.default.Component);

exports.default = PerspectiveXY;


PerspectiveXY.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-x-y.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-x.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-x.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveX = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveX, _React$Component);

	function PerspectiveX() {
		(0, _classCallCheck3.default)(this, PerspectiveX);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveX.__proto__ || Object.getPrototypeOf(PerspectiveX)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveX, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveX' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1047626400',
					css: '.BurgerPerspectiveX .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveX .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveX .BurgerInner:before,.BurgerPerspectiveX .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveX.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);}.BurgerPerspectiveX.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveX.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS14LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QixBQUdtRCxBQUlzQixBQUlFLEFBR3JDLEFBSThDLEFBR0MsNkJBTmxELDBGQUMzQixzRUFaRCx3QkFRQyxlQU9DLEdBR0EsNEpBZEYiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3BlcnNwZWN0aXZlLXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNwZWN0aXZlWCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHR3aWR0aCxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBvZmZzZXQgPSBsaW5lSGVpZ2h0ICsgbGluZVNwYWNpbmdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyUGVyc3BlY3RpdmVYJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclBlcnNwZWN0aXZlWHtcblx0XHRcdFx0XHRcdC5CdXJnZXJCb3h7XG5cdFx0XHRcdFx0XHRcdHBlcnNwZWN0aXZlOiAke3dpZHRoICogMn1weDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlLFxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldH1weCwgMCkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXQgKiAtMX1weCwgMCkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblBlcnNwZWN0aXZlWC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/perspective-x.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveX;
}(_react2.default.Component);

exports.default = PerspectiveX;


PerspectiveX.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-x.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-y-reverse.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-y-reverse.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveYReverse = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveYReverse, _React$Component);

	function PerspectiveYReverse() {
		(0, _classCallCheck3.default)(this, PerspectiveYReverse);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveYReverse.__proto__ || Object.getPrototypeOf(PerspectiveYReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveYReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveYReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1026865609',
					css: '.BurgerPerspectiveYReverse .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveYReverse .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveYReverse .BurgerInner:before,.BurgerPerspectiveYReverse .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveYReverse.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateX(180deg);-ms-transform:rotateX(180deg);transform:rotateX(180deg);}.BurgerPerspectiveYReverse.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveYReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS15LXJldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBR21ELEFBSXNCLEFBSUUsQUFHckMsQUFJOEMsQUFHQyw2QkFObEQsMEZBQzNCLHNFQVpELHdCQVFDLGVBT0MsR0FHQSw0SkFkRiIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvcGVyc3BlY3RpdmUteS1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzcGVjdGl2ZVlSZXZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHtcblx0XHRcdHdpZHRoLFxuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IG9mZnNldCA9IGxpbmVIZWlnaHQgKyBsaW5lU3BhY2luZ1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJQZXJzcGVjdGl2ZVlSZXZlcnNlJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclBlcnNwZWN0aXZlWVJldmVyc2V7XG5cdFx0XHRcdFx0XHQuQnVyZ2VyQm94IHtcblx0XHRcdFx0XHRcdFx0cGVyc3BlY3RpdmU6ICR7d2lkdGggKiAyfXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUsXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR7b2Zmc2V0fXB4LCAwKSByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldCAqIC0xfXB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuUGVyc3BlY3RpdmVZUmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/perspective-y-reverse.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveYReverse;
}(_react2.default.Component);

exports.default = PerspectiveYReverse;


PerspectiveYReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-y-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/perspective-y.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/perspective-y.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PerspectiveY = function (_React$Component) {
	(0, _inherits3.default)(PerspectiveY, _React$Component);

	function PerspectiveY() {
		(0, _classCallCheck3.default)(this, PerspectiveY);
		return (0, _possibleConstructorReturn3.default)(this, (PerspectiveY.__proto__ || Object.getPrototypeOf(PerspectiveY)).apply(this, arguments));
	}

	(0, _createClass3.default)(PerspectiveY, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var offset = lineHeight + lineSpacing;
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerPerspectiveY' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2620467554',
					css: '.BurgerPerspectiveY .BurgerBox{-webkit-perspective:' + width * 2 + 'px;-moz-perspective:' + width * 2 + 'px;-ms-perspective:' + width * 2 + 'px;perspective:' + width * 2 + 'px;}.BurgerPerspectiveY .BurgerInner{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveY .BurgerInner:before,.BurgerPerspectiveY .BurgerInner:after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.BurgerPerspectiveY.BurgerActive .BurgerInner{background-color:transparent;-webkit-transform:rotateX(-180deg);-ms-transform:rotateX(-180deg);transform:rotateX(-180deg);}.BurgerPerspectiveY.BurgerActive .BurgerInner:before{-webkit-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + offset + 'px,0) rotate(45deg);transform:translate3d(0,' + offset + 'px,0) rotate(45deg);}.BurgerPerspectiveY.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + offset * -1 + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9wZXJzcGVjdGl2ZS15LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV1QixBQUdtRCxBQUlzQixBQUlFLEFBR3JDLEFBSThDLEFBR0MsNkJBTmpELDZGQUM1QixtRUFaRCx3QkFRQyxlQU9DLEdBR0EsNEpBZEYiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3BlcnNwZWN0aXZlLXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNwZWN0aXZlWSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHR3aWR0aCxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBvZmZzZXQgPSBsaW5lSGVpZ2h0ICsgbGluZVNwYWNpbmdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyUGVyc3BlY3RpdmVZJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclBlcnNwZWN0aXZlWSB7XG5cdFx0XHRcdFx0XHQuQnVyZ2VyQm94IHtcblx0XHRcdFx0XHRcdFx0cGVyc3BlY3RpdmU6ICR7d2lkdGggKiAyfXB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUsXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke29mZnNldH1weCwgMCkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHtvZmZzZXQgKiAtMX1weCwgMCkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblBlcnNwZWN0aXZlWS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/perspective-y.js */',
					dynamic: [width * 2, offset, offset * -1]
				})
			);
		}
	}]);
	return PerspectiveY;
}(_react2.default.Component);

exports.default = PerspectiveY;


PerspectiveY.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=perspective-y.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/slider-reverse.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/slider-reverse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderReverse = function (_React$Component) {
	(0, _inherits3.default)(SliderReverse, _React$Component);

	function SliderReverse() {
		(0, _classCallCheck3.default)(this, SliderReverse);
		return (0, _possibleConstructorReturn3.default)(this, (SliderReverse.__proto__ || Object.getPrototypeOf(SliderReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(SliderReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing,
			    width = _props.width;


			var yOffset = lineSpacing + lineHeight;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSliderReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '63542277',
					css: '.BurgerSliderReverse .BurgerInner{top:' + lineHeight / 2 + 'px;}.BurgerSliderReverse .BurgerInner:before{top:' + yOffset + 'px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-property:transform,opacity;transition-property:transform,opacity;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:0.15s;transition-duration:0.15s;}.BurgerSliderReverse .BurgerInner:after{top:' + yOffset * 2 + 'px;}.BurgerSliderReverse.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + yOffset + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + yOffset + 'px,0) rotate(-45deg);transform:translate3d(0,' + yOffset + 'px,0) rotate(-45deg);}.BurgerSliderReverse.BurgerActive .BurgerInner:before{-webkit-transform:rotate(45deg) translate3d(' + width / 7 + 'px,' + lineSpacing * -1 + 'px,0);-ms-transform:rotate(45deg) translate3d(' + width / 7 + 'px,' + lineSpacing * -1 + 'px,0);transform:rotate(45deg) translate3d(' + width / 7 + 'px,' + lineSpacing * -1 + 'px,0);opacity:0;}.BurgerSliderReverse.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(90deg);-ms-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(90deg);transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zbGlkZXItcmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnVCLEFBRzJDLEFBSUMsQUFPQSxBQUd3QyxBQUc2QixBQUk3QixtQ0FwQjdFLEFBSXlDLEFBT3hDLDBJQU5pQyx1REFnQmhDLEdBUEQsY0FSMkIsNERBQzNCLFVBVVksVUFDWCIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvc2xpZGVyLXJldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlclJldmVyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdGxldCB7XG5cdFx0XHRsaW5lSGVpZ2h0LFxuXHRcdFx0bGluZVNwYWNpbmcsXG5cdFx0XHR3aWR0aCxcblx0XHR9ID0gdGhpcy5wcm9wc1xuXG5cdFx0bGV0IHlPZmZzZXQgPSBsaW5lU3BhY2luZyArIGxpbmVIZWlnaHRcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJTbGlkZXJSZXZlcnNlJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclNsaWRlclJldmVyc2V7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0b3A6ICR7bGluZUhlaWdodCAvIDJ9cHg7XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt5T2Zmc2V0fXB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6ICR7eU9mZnNldCAqIDJ9cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt5T2Zmc2V0fXB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUzZCgke3dpZHRoIC8gN31weCwgJHtsaW5lU3BhY2luZyAqIC0xfXB4LCAwKTtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke3lPZmZzZXQgKiAtMn1weCwgMCkgcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuU2xpZGVyUmV2ZXJzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/slider-reverse.js */',
					dynamic: [lineHeight / 2, yOffset, yOffset * 2, yOffset, width / 7, lineSpacing * -1, yOffset * -2]
				})
			);
		}
	}]);
	return SliderReverse;
}(_react2.default.Component);

exports.default = SliderReverse;


SliderReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=slider-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/slider.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/slider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function (_React$Component) {
	(0, _inherits3.default)(Slider, _React$Component);

	function Slider() {
		(0, _classCallCheck3.default)(this, Slider);
		return (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
	}

	(0, _createClass3.default)(Slider, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing,
			    width = _props.width;


			var yOffset = lineSpacing + lineHeight;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSlider' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1314878248',
					css: '.BurgerSlider{display:inline-block;}.BurgerSlider .BurgerInner{top:' + lineHeight / 2 + 'px;}.BurgerSlider .BurgerInner:before{top:' + yOffset + 'px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-property:transform,opacity;transition-property:transform,opacity;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:0.15s;transition-duration:0.15s;}.BurgerSlider .BurgerInner:after{top:' + yOffset * 2 + 'px;}.BurgerSlider.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + yOffset + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + yOffset + 'px,0) rotate(45deg);transform:translate3d(0,' + yOffset + 'px,0) rotate(45deg);}.BurgerSlider.BurgerActive .BurgerInner:before{-webkit-transform:rotate(-45deg) translate3d(' + width / -7 + 'px,' + lineSpacing * -1 + 'px,0);-ms-transform:rotate(-45deg) translate3d(' + width / -7 + 'px,' + lineSpacing * -1 + 'px,0);transform:rotate(-45deg) translate3d(' + width / -7 + 'px,' + lineSpacing * -1 + 'px,0);opacity:0;}.BurgerSlider.BurgerActive .BurgerInner:after{-webkit-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-90deg);-ms-transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-90deg);transform:translate3d(0,' + yOffset * -2 + 'px,0) rotate(-90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ1QixBQUc0QixBQUllLEFBSUMsQUFPQSxBQUl1QyxBQUkrQixBQUs3QixxQkEzQi9FLGNBSUMsQUFJeUMsQUFPeEMsMElBTmlDLHVEQVVqQyxHQVNDLGNBbEIwQiw0REFDM0IsYUFZWSxVQUNYIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHtcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHRsaW5lU3BhY2luZyxcblx0XHRcdHdpZHRoLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cblx0XHRsZXQgeU9mZnNldCA9IGxpbmVTcGFjaW5nICsgbGluZUhlaWdodFxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclNsaWRlcicgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJTbGlkZXJ7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0dG9wOiAke2xpbmVIZWlnaHQgLyAyfXB4O1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt5T2Zmc2V0fXB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXJ7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOiAke3lPZmZzZXQgKiAyfXB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZle1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke3lPZmZzZXR9cHgsIDApIHJvdGF0ZSg0NWRlZyk7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZXtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoJHt3aWR0aCAvIC03fXB4LCAke2xpbmVTcGFjaW5nICogLTF9cHgsIDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAke3lPZmZzZXQgKiAtMn1weCwgMCkgcm90YXRlKC05MGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuU2xpZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyJdfQ== */\n/*@ sourceURL=../../src/types/slider.js */',
					dynamic: [lineHeight / 2, yOffset, yOffset * 2, yOffset, width / -7, lineSpacing * -1, yOffset * -2]
				})
			);
		}
	}]);
	return Slider;
}(_react2.default.Component);

exports.default = Slider;


Slider.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/spin-reverse.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/spin-reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinReverse = function (_React$Component) {
	(0, _inherits3.default)(SpinReverse, _React$Component);

	function SpinReverse() {
		(0, _classCallCheck3.default)(this, SpinReverse);
		return (0, _possibleConstructorReturn3.default)(this, (SpinReverse.__proto__ || Object.getPrototypeOf(SpinReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(SpinReverse, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSpinReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '4284236964',
					css: '.BurgerSpinReverse .BurgerInner{-webkit-transition-duration:0.22s;transition-duration:0.22s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpinReverse .BurgerInner:before{-webkit-transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in;transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in;}.BurgerSpinReverse .BurgerInner:after{-webkit-transition:bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpinReverse.BurgerActive .BurgerInner{-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerSpinReverse.BurgerActive .BurgerInner:before{top:0;opacity:0;-webkit-transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out;}.BurgerSpinReverse.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zcGluLXJldmVyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBR2tDLEFBTUQsQUFLa0MsQUFHaEMsQUFLbkIsQUFNRyxNQUxDLEdBTWMsT0FKTyw0Q0FyQmlDLDhCQWMxQyxHQWF1QywyQkFyQi9ELG9CQWdCQyxJQVArRCxrREFkakUsOEVBZUMsc0JBTEEsdUZBaUJDIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9zcGluLXJldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5SZXZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyU3BpblJldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyU3BpblJldmVyc2Uge1xuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMXMgMC4yNXMgZWFzZS1pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMC4xcyBlYXNlLWluO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMjVzIGVhc2UtaW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblNwaW5SZXZlcnNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyJdfQ== */\n/*@ sourceURL=../../src/types/spin-reverse.js */'
				})
			);
		}
	}]);
	return SpinReverse;
}(_react2.default.Component);

exports.default = SpinReverse;


SpinReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=spin-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/spin.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/spin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spin = function (_React$Component) {
	(0, _inherits3.default)(Spin, _React$Component);

	function Spin() {
		(0, _classCallCheck3.default)(this, Spin);
		return (0, _possibleConstructorReturn3.default)(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).apply(this, arguments));
	}

	(0, _createClass3.default)(Spin, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSpin' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '2770435724',
					css: '.BurgerSpin .BurgerInner{-webkit-transition-duration:0.22s;transition-duration:0.22s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpin .BurgerInner:before{-webkit-transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in;transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in;}.BurgerSpin .BurgerInner:after{-webkit-transition:bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpin.BurgerActive .BurgerInner{-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerSpin.BurgerActive .BurgerInner:before{top:0;opacity:0;-webkit-transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out;}.BurgerSpin.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zcGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN1QixBQUdrQyxBQU1ELEFBS2tDLEFBR2pDLEFBS2xCLEFBTUcsTUFMQyxHQU1lLE9BSk0sNENBckJpQywyQkFjMUMsU0FhdUMsd0JBckIvRCxvQkFnQkMsQ0FQK0QscURBZGpFLDJFQWVDLHlCQUxBLDBGQWlCQyIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvc3Bpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclNwaW4nIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyU3BpbiB7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjIycztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eSAwLjFzIGVhc2UtaW47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuQnVyZ2VyQWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4yMnMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblNwaW4uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/spin.js */'
				})
			);
		}
	}]);
	return Spin;
}(_react2.default.Component);

exports.default = Spin;


Spin.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=spin.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/spring-reverse.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/spring-reverse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpringReverse = function (_React$Component) {
	(0, _inherits3.default)(SpringReverse, _React$Component);

	function SpringReverse() {
		(0, _classCallCheck3.default)(this, SpringReverse);
		return (0, _possibleConstructorReturn3.default)(this, (SpringReverse.__proto__ || Object.getPrototypeOf(SpringReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(SpringReverse, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var top = lineHeight + lineSpacing;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSpringReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3822457041',
					css: '.BurgerSpringReverse .BurgerInner{top:auto;bottom:0;-webkit-transition-duration:0.13s;transition-duration:0.13s;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpringReverse .BurgerInner:after{top:' + top * -2 + 'px;-webkit-transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0s linear;transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), opacity 0s linear;}.BurgerSpringReverse .BurgerInner:before{-webkit-transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), -webkit-transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpringReverse.BurgerActive .BurgerInner{-webkit-transform:translate3d(0,' + top * -1 + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + top * -1 + 'px,0) rotate(-45deg);transform:translate3d(0,' + top * -1 + 'px,0) rotate(-45deg);-webkit-transition-delay:0.22s;transition-delay:0.22s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerSpringReverse.BurgerActive .BurgerInner:after{top:0;opacity:0;-webkit-transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0s 0.22s linear;transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), opacity 0s 0.22s linear;}.BurgerSpringReverse.BurgerActive .BurgerInner:before{top:0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zcHJpbmctcmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFHaUIsQUFRMkIsQUFPdUIsQUFHaUIsQUFLcEUsQUFNQSxNQUxJLEFBTWMsR0E3QmpCLE9BeUJvQixFQXhCSCxpQkFRSiwyQ0FQRixZQTZCMkMsb0NBNUJHLG9FQXVCakUsaUJBaEJELG9CQVF3Qiw2QkFkekIseUJBZWlFLDZGQUpoRSxtQ0FLQSxtRUFZQyIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvc3ByaW5nLXJldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmluZ1JldmVyc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQge1xuXHRcdFx0bGluZUhlaWdodCxcblx0XHRcdGxpbmVTcGFjaW5nLFxuXHRcdH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHRvcCA9IGxpbmVIZWlnaHQgKyBsaW5lU3BhY2luZ1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclNwcmluZ1JldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyU3ByaW5nUmV2ZXJzZXtcblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0dG9wOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXG5cdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt0b3AgKiAtMn1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMHMgbGluZWFyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZXtcblx0XHRcdFx0XHRcdFx0LkJ1cmdlcklubmVye1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt0b3AgKiAtMX1weCwgMCkgcm90YXRlKC00NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5IDBzIDAuMjJzIGxpbmVhcjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xM3MgMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblNwcmluZ1JldmVyc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/spring-reverse.js */',
					dynamic: [top * -2, top * -1]
				})
			);
		}
	}]);
	return SpringReverse;
}(_react2.default.Component);

exports.default = SpringReverse;


SpringReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=spring-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/spring.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/spring.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spring = function (_React$Component) {
	(0, _inherits3.default)(Spring, _React$Component);

	function Spring() {
		(0, _classCallCheck3.default)(this, Spring);
		return (0, _possibleConstructorReturn3.default)(this, (Spring.__proto__ || Object.getPrototypeOf(Spring)).apply(this, arguments));
	}

	(0, _createClass3.default)(Spring, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    lineHeight = _props.lineHeight,
			    lineSpacing = _props.lineSpacing;

			var top = lineHeight + lineSpacing;

			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSpring' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1591618852',
					css: '.BurgerSpring .BurgerInner{top:' + lineHeight / 2 + 'px;-webkit-transition:background-color 0s 0.13s linear;transition:background-color 0s 0.13s linear;}.BurgerSpring .BurgerInner:before{top:' + top + 'px;-webkit-transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), -webkit-transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.1s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpring .BurgerInner:after{top:' + top * 2 + 'px;-webkit-transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), -webkit-transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1), transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSpring.BurgerActive .BurgerInner{-webkit-transition-delay:0.22s;transition-delay:0.22s;background-color:transparent;}.BurgerSpring.BurgerActive .BurgerInner:before{top:0;-webkit-transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.1s 0.15s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);-webkit-transform:translate3d(0,' + top + 'px,0) rotate(45deg);-ms-transform:translate3d(0,' + top + 'px,0) rotate(45deg);transform:translate3d(0,' + top + 'px,0) rotate(45deg);}.BurgerSpring.BurgerActive .BurgerInner:after{top:0;-webkit-transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.2s cubic-bezier(0.33333,0,0.66667,0.33333), transform 0.13s 0.22s cubic-bezier(0.215,0.61,0.355,1);-webkit-transform:translate3d(0,' + top + 'px,0) rotate(-45deg);-ms-transform:translate3d(0,' + top + 'px,0) rotate(-45deg);transform:translate3d(0,' + top + 'px,0) rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zcHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBRzJDLEFBS0MsQUFNQSxBQUtaLEFBSWhCLEFBTUEsTUFKdUQsQUFNQSw2QkEzQm5CLEFBTWUsQUFNQSxtQkFJN0IsNkJBQzlCLGdEQWhCRCx1UEEyQjhFLGtCQU5ELGlCQWY1RSxBQU1BLG9NQWdCQyxlQU5BIiwiZmlsZSI6Ii4uLy4uL3NyYy90eXBlcy9zcHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYXNlIGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4uL2RlZmF1bHQtcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCB7XG5cdFx0XHRsaW5lSGVpZ2h0LFxuXHRcdFx0bGluZVNwYWNpbmcsXG5cdFx0fSA9IHRoaXMucHJvcHNcblx0XHRsZXQgdG9wID0gbGluZUhlaWdodCArIGxpbmVTcGFjaW5nXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJhc2UgdHlwZUNsYXNzTmFtZT0nQnVyZ2VyU3ByaW5nJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclNwcmluZ3tcblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdHRvcDogJHtsaW5lSGVpZ2h0IC8gMn1weDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAwLjEzcyBsaW5lYXI7XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogJHt0b3B9cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0b3A6ICR7dG9wICogMn1weDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4ycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE1cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt0b3B9cHgsIDApIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHt0b3B9cHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9CYXNlPlxuXHRcdClcblx0fVxufVxuXG5TcHJpbmcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/spring.js */',
					dynamic: [lineHeight / 2, top, top * 2, top, top]
				})
			);
		}
	}]);
	return Spring;
}(_react2.default.Component);

exports.default = Spring;


Spring.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=spring.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/squeeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/squeeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Squeeze = function (_React$Component) {
	(0, _inherits3.default)(Squeeze, _React$Component);

	function Squeeze() {
		(0, _classCallCheck3.default)(this, Squeeze);
		return (0, _possibleConstructorReturn3.default)(this, (Squeeze.__proto__ || Object.getPrototypeOf(Squeeze)).apply(this, arguments));
	}

	(0, _createClass3.default)(Squeeze, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerSqueeze' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3338189773',
					css: '.BurgerSqueeze .BurgerInner{-webkit-transition-duration:0.075s;transition-duration:0.075s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSqueeze .BurgerInner:before{-webkit-transition:top 0.075s 0.12s ease, opacity 0.075s ease;transition:top 0.075s 0.12s ease, opacity 0.075s ease;}.BurgerSqueeze .BurgerInner:after{-webkit-transition:bottom 0.075s 0.12s ease, -webkit-transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerSqueeze.BurgerActive .BurgerInner{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.BurgerSqueeze.BurgerActive .BurgerInner:before{top:0;opacity:0;-webkit-transition:top 0.075s ease, opacity 0.075s 0.12s ease;transition:top 0.075s ease, opacity 0.075s 0.12s ease;}.BurgerSqueeze.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:bottom 0.075s ease, -webkit-transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zcXVlZXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN1QixBQUdtQyxBQU1ILEFBS29DLEFBR25DLEFBS2pCLEFBTUcsTUFMQyxHQU1lLE9BSkksOENBckJtQyxzQkFjMUMsWUFhd0Msb0JBckJoRSxnQkFnQkMsTUFQK0QsMERBZGpFLHNFQWVDLDRCQUxBLHVGQWlCQyIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvc3F1ZWV6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3F1ZWV6ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJTcXVlZXplJyB7Li4udGhpcy5wcm9wc30+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LkJ1cmdlclNxdWVlemUge1xuXHRcdFx0XHRcdFx0LkJ1cmdlcklubmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wNzVzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cblx0XHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xMnMgZWFzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMC4wNzVzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblxuXHRcdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgZWFzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuU3F1ZWV6ZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMiXX0= */\n/*@ sourceURL=../../src/types/squeeze.js */'
				})
			);
		}
	}]);
	return Squeeze;
}(_react2.default.Component);

exports.default = Squeeze;


Squeeze.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=squeeze.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/stand-reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/stand-reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandReverse = function (_React$Component) {
	(0, _inherits3.default)(StandReverse, _React$Component);

	function StandReverse() {
		(0, _classCallCheck3.default)(this, StandReverse);
		return (0, _possibleConstructorReturn3.default)(this, (StandReverse.__proto__ || Object.getPrototypeOf(StandReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(StandReverse, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerStandReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '385923597',
					css: '.BurgerStandReverse .BurgerInner{-webkit-transition:-webkit-transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;-webkit-transition:transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;transition:transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;}.BurgerStandReverse .BurgerInner:before{-webkit-transition:top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerStandReverse .BurgerInner:after{-webkit-transition:bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerStandReverse.BurgerActive .BurgerInner{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);background-color:transparent;-webkit-transition:-webkit-transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;-webkit-transition:transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;transition:transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;}.BurgerStandReverse.BurgerActive .BurgerInner:before{top:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);}.BurgerStandReverse.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zdGFuZC1yZXZlcnNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN1QixBQUk2QyxBQUswQixBQUtBLEFBR3JDLEFBTWxCLEFBTUcsTUFMZ0IsR0FNRCw4RUFaSSxNQVFrQyxBQU1BLHVCQVozQiw4TEFWckMsU0FLQSx3QkFWRCx5REFzQkUsU0FNQSw2QkFaRCIsImZpbGUiOiIuLi8uLi9zcmMvdHlwZXMvc3RhbmQtcmV2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhbmRSZXZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclN0YW5kUmV2ZXJzZScgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJTdGFuZFJldmVyc2V7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXJ7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyO1xuXG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLkJ1cmdlckFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuU3RhbmRSZXZlcnNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyJdfQ== */\n/*@ sourceURL=../../src/types/stand-reverse.js */'
				})
			);
		}
	}]);
	return StandReverse;
}(_react2.default.Component);

exports.default = StandReverse;


StandReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=stand-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/stand.js":
/*!********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/stand.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stand = function (_React$Component) {
	(0, _inherits3.default)(Stand, _React$Component);

	function Stand() {
		(0, _classCallCheck3.default)(this, Stand);
		return (0, _possibleConstructorReturn3.default)(this, (Stand.__proto__ || Object.getPrototypeOf(Stand)).apply(this, arguments));
	}

	(0, _createClass3.default)(Stand, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerStand' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '1492524211',
					css: '.BurgerStand .BurgerInner{-webkit-transition:-webkit-transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;-webkit-transition:transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;transition:transform 0.075s 0.15s cubic-bezier(0.55,0.055,0.675,0.19), background-color 0s 0.075s linear;}.BurgerStand .BurgerInner:before{-webkit-transition:top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerStand .BurgerInner:after{-webkit-transition:bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55,0.055,0.675,0.19);}.BurgerStand.BurgerActive .BurgerInner{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);background-color:transparent;-webkit-transition:-webkit-transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;-webkit-transition:transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;transition:transform 0.075s 0s cubic-bezier(0.215,0.61,0.355,1), background-color 0s 0.15s linear;}.BurgerStand.BurgerActive .BurgerInner:before{top:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);}.BurgerStand.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9zdGFuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFJNkMsQUFLMEIsQUFLQSxBQUd0QyxBQU1qQixBQU1HLE1BTGdCLEdBTUQsMkVBWkksU0FRa0MsQUFNQSxvQkFaM0IsaU1BVnJDLFNBS0Esd0JBVkQseURBc0JFLFNBTUEsMEJBWkQiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3N0YW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZSB0eXBlQ2xhc3NOYW1lPSdCdXJnZXJTdGFuZCcgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJTdGFuZCB7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3IgMHMgMC4wNzVzIGxpbmVhcjtcblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjA3NXMgZWFzZS1pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjA3NXMgZWFzZS1pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuU3RhbmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/stand.js */'
				})
			);
		}
	}]);
	return Stand;
}(_react2.default.Component);

exports.default = Stand;


Stand.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=stand.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/vortex-reverse.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/vortex-reverse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VortexReverse = function (_React$Component) {
	(0, _inherits3.default)(VortexReverse, _React$Component);

	function VortexReverse() {
		(0, _classCallCheck3.default)(this, VortexReverse);
		return (0, _possibleConstructorReturn3.default)(this, (VortexReverse.__proto__ || Object.getPrototypeOf(VortexReverse)).apply(this, arguments));
	}

	(0, _createClass3.default)(VortexReverse, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerVortexReverse' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '552048054',
					css: '.BurgerVortexReverse .BurgerInner{-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:cubic-bezier(0.19,1,0.22,1);transition-timing-function:cubic-bezier(0.19,1,0.22,1);}.BurgerVortexReverse .BurgerInner:before,.BurgerVortexReverse .BurgerInner:after{-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-delay:0.1s;transition-delay:0.1s;-webkit-transition-timing-function:linear;transition-timing-function:linear;}.BurgerVortexReverse .BurgerInner:before{-webkit-transition-property:top,opacity;transition-property:top,opacity;}.BurgerVortexReverse .BurgerInner:after{-webkit-transition-property:bottom,-webkit-transform;-webkit-transition-property:bottom,transform;transition-property:bottom,transform;}.BurgerVortexReverse.BurgerActive .BurgerInner{-webkit-transform:rotate(-765deg);-ms-transform:rotate(-765deg);transform:rotate(-765deg);-webkit-transition-timing-function:cubic-bezier(0.19,1,0.22,1);transition-timing-function:cubic-bezier(0.19,1,0.22,1);}.BurgerVortexReverse.BurgerActive .BurgerInner:before,.BurgerVortexReverse.BurgerActive .BurgerInner:after{-webkit-transition-delay:0s;transition-delay:0s;}.BurgerVortexReverse.BurgerActive .BurgerInner:before{top:0;opacity:0;}.BurgerVortexReverse.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy92b3J0ZXgtcmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFHaUMsQUFNRCxBQU1VLEFBSUssQUFHWixBQUtMLEFBR2QsQUFJRyxNQUhDLEdBSWUsT0FIMUIsZ0NBSkEsTUFsQnNCLElBTm1DLGNBWTFELGtCQU8yRCxNQWExRCxVQXpCa0MsNkJBU25DLHlDQWZELE1BT0MsMEJBWUEiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3ZvcnRleC1yZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuLi9kZWZhdWx0LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3J0ZXhSZXZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclZvcnRleFJldmVyc2UnIHsuLi50aGlzLnByb3BzfT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuQnVyZ2VyVm9ydGV4UmV2ZXJzZXtcblx0XHRcdFx0XHRcdC5CdXJnZXJJbm5lcntcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcblxuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4xcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC03NjVkZWcpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L0Jhc2U+XG5cdFx0KVxuXHR9XG59XG5cblZvcnRleFJldmVyc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzIl19 */\n/*@ sourceURL=../../src/types/vortex-reverse.js */'
				})
			);
		}
	}]);
	return VortexReverse;
}(_react2.default.Component);

exports.default = VortexReverse;


VortexReverse.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=vortex-reverse.js.map

/***/ }),

/***/ "./node_modules/react-burgers/dist/types/vortex.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-burgers/dist/types/vortex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(/*! styled-jsx/style */ "./node_modules/react-burgers/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(/*! ../base */ "./node_modules/react-burgers/dist/base.js");

var _base2 = _interopRequireDefault(_base);

var _defaultProps = __webpack_require__(/*! ../default-props */ "./node_modules/react-burgers/dist/default-props.js");

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vortex = function (_React$Component) {
	(0, _inherits3.default)(Vortex, _React$Component);

	function Vortex() {
		(0, _classCallCheck3.default)(this, Vortex);
		return (0, _possibleConstructorReturn3.default)(this, (Vortex.__proto__ || Object.getPrototypeOf(Vortex)).apply(this, arguments));
	}

	(0, _createClass3.default)(Vortex, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_base2.default,
				(0, _extends3.default)({ typeClassName: 'BurgerVortex' }, this.props),
				_react2.default.createElement(_style2.default, {
					styleId: '3285278599',
					css: '.BurgerVortex .BurgerInner{-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:cubic-bezier(0.19,1,0.22,1);transition-timing-function:cubic-bezier(0.19,1,0.22,1);}.BurgerVortex .BurgerInner:before,.BurgerVortex .BurgerInner:after{-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-delay:0.1s;transition-delay:0.1s;-webkit-transition-timing-function:linear;transition-timing-function:linear;}.BurgerVortex .BurgerInner:before{-webkit-transition-property:top,opacity;transition-property:top,opacity;}.BurgerVortex .BurgerInner:after{-webkit-transition-property:bottom,-webkit-transform;-webkit-transition-property:bottom,transform;transition-property:bottom,transform;}.BurgerVortex.BurgerActive .BurgerInner{-webkit-transform:rotate(765deg);-ms-transform:rotate(765deg);transform:rotate(765deg);-webkit-transition-timing-function:cubic-bezier(0.19,1,0.22,1);transition-timing-function:cubic-bezier(0.19,1,0.22,1);}.BurgerVortex.BurgerActive .BurgerInner:before,.BurgerVortex.BurgerActive .BurgerInner:after{-webkit-transition-delay:0s;transition-delay:0s;}.BurgerVortex.BurgerActive .BurgerInner:before{top:0;opacity:0;}.BurgerVortex.BurgerActive .BurgerInner:after{bottom:0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy92b3J0ZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBR2lDLEFBS0QsQUFLVSxBQUdLLEFBR2IsQUFLSixBQUdkLEFBSUcsTUFIQyxHQUljLE9BSHpCLGdDQUpBLE1BaEJzQixJQUxtQyxjQVUxRCxlQU0yRCxNQWExRCxhQXZCa0MsNkJBT25DLHlDQVpELE1BTUMsdUJBVUEiLCJmaWxlIjoiLi4vLi4vc3JjL3R5cGVzL3ZvcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi4vZGVmYXVsdC1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9ydGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCYXNlIHR5cGVDbGFzc05hbWU9J0J1cmdlclZvcnRleCcgey4uLnRoaXMucHJvcHN9PlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5CdXJnZXJWb3J0ZXh7XG5cdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xuXHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kZWxheTogMC4xcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIG9wYWNpdHk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm90dG9tLCB0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5CdXJnZXJBY3RpdmUge1xuXHRcdFx0XHRcdFx0XHQuQnVyZ2VySW5uZXIge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDc2NWRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvQmFzZT5cblx0XHQpXG5cdH1cbn1cblxuVm9ydGV4LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyJdfQ== */\n/*@ sourceURL=../../src/types/vortex.js */'
				})
			);
		}
	}]);
	return Vortex;
}(_react2.default.Component);

exports.default = Vortex;


Vortex.defaultProps = _defaultProps2.default;
module.exports = exports['default'];
//# sourceMappingURL=vortex.js.map

/***/ }),

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-burgers/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/style.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-burgers/node_modules/styled-jsx/dist/style.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = __webpack_require__(/*! ./stylesheet-registry */ "./node_modules/react-burgers/node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-burgers/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(/*! ./lib/stylesheet */ "./node_modules/react-burgers/node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/style.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-burgers/node_modules/styled-jsx/style.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/react-burgers/node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/Page */ "./layout/Page.js");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.js");


var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var styles = {
  container: {
    maxWidth: '85%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    padding: '30px 0 0 0'
  }
};

var HomePage = function HomePage(props) {
  var getSortedProjects = function getSortedProjects(projects) {
    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
    var filter = router.query.filter;
    var completedProjects = projects.filter(function (project) {
      return project.completed;
    });
    var notCompletedProjects = projects.filter(function (project) {
      return !project.completed;
    });
    return filter === 'completed' ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(completedProjects.sort(function (a, b) {
      return a.creationTime < b.creationTime ? 1 : -1;
    })) : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(notCompletedProjects.sort(function (a, b) {
      return a.creationTime < b.creationTime ? 1 : -1;
    })), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(completedProjects.sort(function (a, b) {
      return a.creationTime < b.creationTime ? 1 : -1;
    })));
  };

  var projects = props.projects;
  return __jsx(_layout_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    style: styles.container,
    className: "jsx-680452456" + " " + "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, getSortedProjects(projects).map(function (project) {
    return __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      project: project,
      key: project._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "680452456",
    __self: this
  }, "@media screen and (max-width:1240px){.homepage.jsx-680452456{max-width:initial !important;width:100% !important;padding:30px 30px 0 !important;}}@media screen and (max-width:768px){.homepage.jsx-680452456{padding:20px 20px 0!important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNRLEFBRzRDLEFBT0MsNkJBTlIsQ0FPQyxxQkFOUSwrQkFDakMsK0NBTUEiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXG15c2VydmVyXFxkb25hdGUuc2hwcC5jb20tZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0L1BhZ2UnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmQnO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzMwcHggMCAwIDAnLFxuICB9LFxufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZ2V0U29ydGVkUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGZpbHRlciB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnN0IGNvbXBsZXRlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgY29uc3Qgbm90Q29tcGxldGVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+ICFwcm9qZWN0LmNvbXBsZXRlZCk7XG5cblxuICAgIHJldHVybiBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnXG4gICAgICA/IFsuLi4oY29tcGxldGVkUHJvamVjdHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWUgPyAxIDogLTEpKSldXG4gICAgICA6IFtcbiAgICAgICAgLi4uKG5vdENvbXBsZXRlZFByb2plY3RzLnNvcnQoKGEsIGIpID0+IChhLmNyZWF0aW9uVGltZSA8IGIuY3JlYXRpb25UaW1lID8gMSA6IC0xKSkpLFxuICAgICAgICAuLi4oY29tcGxldGVkUHJvamVjdHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWUgPyAxIDogLTEpKSksXG4gICAgICBdO1xuICB9O1xuXG4gIGNvbnN0IHsgcHJvamVjdHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cbiAgICAgICAge2dldFNvcnRlZFByb2plY3RzKHByb2plY3RzKS5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgIHByb2plY3Q9e3Byb2plY3R9XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QuX2lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7XG4gICAgICAgIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpe1xuICAgICAgICAgICAgLmhvbWVwYWdlIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgIC5ob21lcGFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICBjb25zdCBwcmVmaXggPSBwcm9jZXNzLmJyb3dzZXIgPyAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJyA6ICcnOyAvLyBUT0RPOiBSZW1vdmUgd2hlbiBDT1JTIHdpbGwgYmUgZml4ZWRcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcmVmaXh9aHR0cHM6Ly9iYWNrLmRvbmF0ZS4yLnNocHAubWUvYXBpL3YxL3Byb2plY3RzL2xpc3RgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogZGF0YS5wcm9qZWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\pages\\\\index.js */"));
};

HomePage.getInitialProps = function getInitialProps() {
  var prefix, res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prefix = true ? 'https://cors-anywhere.herokuapp.com/' : undefined; // TODO: Remove when CORS will be fixed

          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefix, "https://back.donate.2.shpp.me/api/v1/projects/list")));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            projects: data.projects
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./theme/colors.js":
/*!*************************!*\
  !*** ./theme/colors.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  text: '#2c3e50',
  green: '#27ae60',
  white: '#fff',
  black: '#000',
  grey: '#acb8b6',
  insta: '#3f729b',
  facebook: '#3B5998',
  telegram: '#64A9DC',
  progressGradientStart: '#4e53bd',
  progressGradientMiddle: '#17aeb6',
  progressGradientEnd: '#27ae60',
  progressGradientEmpty: '#e1e9ee'
});

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cxampp%5Chtdocs%5Cmyserver%5Cdonate.shpp.com-frontend%5Cpages%5Cindex.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cxampp%5Chtdocs%5Cmyserver%5Cdonate.shpp.com-frontend%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cxampp%5Chtdocs%5Cmyserver%5Cdonate.shpp.com-frontend%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map