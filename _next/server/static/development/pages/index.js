module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\ProgressBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const styles = {
  wrapper: {},
  progressBar: {
    backgroundImage: `linear-gradient(to right, ${_theme_colors__WEBPACK_IMPORTED_MODULE_1__["default"].progressGradientStart} 0%, ${_theme_colors__WEBPACK_IMPORTED_MODULE_1__["default"].progressGradientMiddle} 30%, ${_theme_colors__WEBPACK_IMPORTED_MODULE_1__["default"].progressGradientEnd} 100%)`,
    width: '100%',
    height: '8px',
    position: 'relative'
  },
  progressBarNotFundedPart: {
    backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_1__["default"].progressGradientEmpty,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '90%'
  }
};

const ProgressBar = ({
  amount,
  funded
}) => {
  const notFundedPercentage = funded > amount ? 0 : 100 - 100 * funded / amount;
  return __jsx("div", {
    style: styles.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.progressBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    style: _objectSpread({}, styles.progressBarNotFundedPart, {
      width: `${notFundedPercentage}%`
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony import */ var _mock_placeholderData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock/placeholderData */ "./mock/placeholderData.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\ProjectCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const styles = {
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

class ProjectCard extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmitClick", () => {
      const form = this.submitRef.current.getElementsByTagName('form')[0];

      if (form) {
        form.setAttribute('target', '_blank');
        form.submit();
      }
    });

    this.submitRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.state = {
      button: ''
    };
  }

  componentDidMount() {
    const {
      project
    } = this.props;
    const prefix = 'https://cors-anywhere.herokuapp.com/'; // TODO: Remove when CORS will be fixed

    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${prefix}https://back.donate.2.shpp.me/api/v1/projects/button?id=${project._id}`).then(res => res.json()).then(data => this.setState({
      button: data.button.replace(/\\/g, '')
    }));
  }

  render() {
    const {
      project
    } = this.props;
    const {
      button
    } = this.state;
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/projects/[id]",
      as: `/projects/${project._id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("img", {
      src: project.image || _mock_placeholderData__WEBPACK_IMPORTED_MODULE_5__["default"].imagePlaceholder,
      alt: "placeholder",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "project-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), __jsx("div", {
      style: styles.infoWrapper,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/projects/[id]",
      as: `/projects/${project._id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "project-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, project.name)), __jsx("p", {
      style: styles.description,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, project.description), !project.completed && __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "funded-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, `Вже зібрали: ${project.amountFunded} грн (з ${project.amount} грн)`), __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      amount: project.amount,
      funded: project.amountFunded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), !project.completed && __jsx("div", {
      ref: this.submitRef,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "button-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      onClick: this.onSubmitClick,
      onKeyPress: () => {},
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438"), __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: button
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1632828356", [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white]]]) + " " + "liqpay-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1632828356",
      dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white, _theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white],
      __self: this
    }, `.card.__jsx-style-dynamic-selector:hover{-webkit-transform:translateY(-4px);-ms-transform:translateY(-4px);transform:translateY(-4px);box-shadow:0 20px 25px rgba(0,0,0,0.15) !important;}.card.__jsx-style-dynamic-selector:hover h3.__jsx-style-dynamic-selector{color:${_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green};}.liqpay-form.__jsx-style-dynamic-selector{display:none;}.project-image.__jsx-style-dynamic-selector{height:150px;object-fit:cover;margin:0 0 10px;width:100%;cursor:pointer;}.project-title.__jsx-style-dynamic-selector{margin:5px 0;cursor:pointer;}.button-wrapper.__jsx-style-dynamic-selector{padding:25px 0 15px;text-align:center;}.funded-text.__jsx-style-dynamic-selector{margin-bottom:5px;display:inline-block;}.submit-button.__jsx-style-dynamic-selector{background-color:${_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].green};color:${_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white};border:none;padding:10px 25px;font-size:20px;display:inline-block;cursor:pointer;}.card.__jsx-style-dynamic-selector{margin:0 15px 50px;width:calc(100%/3 - 30px);max-width:540px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:${_theme_colors__WEBPACK_IMPORTED_MODULE_6__["default"].white};-webkit-transition:0.3s;transition:0.3s;box-shadow:0 1px 4px rgba(0,0,0,0.1);}@media screen and (max-width:1240px){.card.__jsx-style-dynamic-selector{margin:0 15px 40px;width:calc(100%/2 - 30px);}}@media screen and (max-width:768px){.card.__jsx-style-dynamic-selector{margin:0 0 30px;width:100%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxjb21wb25lbnRzXFxQcm9qZWN0Q2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR1ksQUFFMEMsQUFJUSxBQUd0QixBQUdBLEFBT0EsQUFJTyxBQUlGLEFBSTRCLEFBUzNCLEFBV0UsQUFNSCxhQS9DcEIsQUFHbUIsQUFPRixHQXNDRixFQTlCUSxDQWFLLEFBV0UsQ0E1QlYsT0FtQ2xCLENBdENGLEVBUGtCLEtBUGxCLEdBa0JBLENBSUEsTUFha0IsQUFXaEIsQ0F0Q1csQUFpQndCLFdBaEJwQixJQTJCRixXQTFCZixTQWdCYyxZQTlCMEMsQUErQnBDLGtCQUNILGVBQ00sU0FRQyxTQXhDeEIsR0FpQ2lCLGVBQ2pCLG1EQU9nRCw4Q0FDOUIsd0NBQ3dCLHFDQUMxQyIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcY29tcG9uZW50c1xcUHJvamVjdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHBsYWNlaG9sZGVyRGF0YSBmcm9tICcuLi9tb2NrL3BsYWNlaG9sZGVyRGF0YSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3RoZW1lL2NvbG9ycyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaW5mb1dyYXBwZXI6IHtcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBwdWJsaXNoZWRBdDoge1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICBvcGFjaXR5OiAnMC42JyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46ICcxMHB4IDAgMTVweCcsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59O1xuXG5jbGFzcyBQcm9qZWN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3VibWl0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJ1dHRvbjogJycsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmVmaXggPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJzsgLy8gVE9ETzogUmVtb3ZlIHdoZW4gQ09SUyB3aWxsIGJlIGZpeGVkXG4gICAgZmV0Y2goYCR7cHJlZml4fWh0dHBzOi8vYmFjay5kb25hdGUuMi5zaHBwLm1lL2FwaS92MS9wcm9qZWN0cy9idXR0b24/aWQ9JHtwcm9qZWN0Ll9pZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYnV0dG9uOiBkYXRhLmJ1dHRvbi5yZXBsYWNlKC9cXFxcL2csICcnKSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG9uU3VibWl0Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuc3VibWl0UmVmLmN1cnJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2plY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBidXR0b24gfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL1tpZF1cIiBhcz17YC9wcm9qZWN0cy8ke3Byb2plY3QuX2lkfWB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZSB8fCBwbGFjZWhvbGRlckRhdGEuaW1hZ2VQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGFsdD1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL1tpZF1cIiBhcz17YC9wcm9qZWN0cy8ke3Byb2plY3QuX2lkfWB9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHshcHJvamVjdC5jb21wbGV0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnVuZGVkLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7YNCS0LbQtSDQt9GW0LHRgNCw0LvQuDogJHtwcm9qZWN0LmFtb3VudEZ1bmRlZH0g0LPRgNC9ICjQtyAke3Byb2plY3QuYW1vdW50fSDQs9GA0L0pYH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3Byb2plY3QuYW1vdW50fVxuICAgICAgICAgICAgICAgIGZ1bmRlZD17cHJvamVjdC5hbW91bnRGdW5kZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshcHJvamVjdC5jb21wbGV0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiIHJlZj17dGhpcy5zdWJtaXRSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdENsaWNrfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHt9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0J/RltC00YLRgNC40LzQsNGC0LhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJ1dHRvbiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpcXBheS1mb3JtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGAuY2FyZDpob3ZlcntcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZDpob3ZlciBoM3tcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdyZWVufTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5saXFwYXktZm9ybSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLnByb2plY3QtdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTVweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLmZ1bmRlZC10ZXh0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZWVufTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHggNTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zIC0gMzBweCk7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNDBweCl7XG4gICAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8yIC0gMzBweCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXX0= */
/*@ sourceURL=C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\ProjectCard.js */`));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\SocialIcon.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const SocialIcon = ({
  children,
  link
}) => {
  return __jsx("a", {
    href: link,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1473928097", [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1473928097", [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1473928097",
    dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green],
    __self: undefined
  }, `div.__jsx-style-dynamic-selector{width:50px;height:50px;border-radius:15%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px;}a.__jsx-style-dynamic-selector{cursor:pointer;}div.__jsx-style-dynamic-selector:hover{border:1px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__["default"].green};-webkit-transition:all 0.2s;transition:all 0.2s;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxjb21wb25lbnRzXFxTb2NpYWxJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdVLEFBR3dCLEFBU0ksQUFHK0IsV0FYbEMsSUFTZCxRQVJvQixrQkFDTCxLQVVPLGdEQUN0QixxQkFWeUIsbUdBQ0osNkZBQ1AsWUFDZCIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcY29tcG9uZW50c1xcU29jaWFsSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5cbmNvbnN0IFNvY2lhbEljb24gPSAoeyBjaGlsZHJlbiwgbGluayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17bGlua30+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7ICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuZ3JlZW59O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7ICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEljb247XG4iXX0= */
/*@ sourceURL=C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\components\\SocialIcon.js */`));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SocialIcon */ "./components/SocialIcon.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Address = function Address(props) {
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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
  return __jsx("svg", _extends({}, props, {
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


const style = {
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
const instagram = 'https://www.instagram.com/shpp.kr/?igshid=1cuwl3vm5907d';
const facebook = 'https://www.facebook.com/pg/shpp.kr/posts/';
const telegram = 'https://t.me/shppkr';

const Footer = () => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]) + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]) + " " + "webpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://programming.kr.ua/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "https://programming.kr.ua/"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]) + " " + "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: instagram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(Instagram, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: telegram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(Telegram, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: facebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(Facebook, {
    style: style.iconMid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]) + " " + "flaticon_link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Icons made by\xA0", __jsx("a", {
    href: "https://www.flaticon.com/authors/freepik",
    title: "Freepik",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Freepik"), "\xA0from\xA0", __jsx("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "www.flaticon.com"))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(Address, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, \u043C. \u041A\u0440\u043E\u043F\u0438\u0432\u043D\u0438\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0432. \u0412\u0430\u0441\u0438\u043B\u0456\u0432\u0441\u044C\u043A\u0438\u0439, 10")), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(Phone, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "050 20 111 80")), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(Email, {
    style: style.iconSmall,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "info@programming.kr.ua"))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/agreement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0430 \u043E\u0444\u0435\u0440\u0442\u0430")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3229141235", [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(MasterCard, {
    style: style.iconBig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(Visa, {
    style: style.iconBig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3229141235",
    dynamic: [_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text, _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green],
    __self: undefined
  }, `.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:auto;}.container.__jsx-style-dynamic-selector{border-top:1px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green};padding:10px;width:80%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media screen and (max-width:768px){.container.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;}article.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:10px;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;color:${_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text};font-size:16px;-webkit-transition:all 0.3s;transition:all 0.3s;}a.__jsx-style-dynamic-selector:hover{color:${_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green};-webkit-text-decoration:none;text-decoration:none;}.flaticon_link.__jsx-style-dynamic-selector,.flaticon_link.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:10px;}i.__jsx-style-dynamic-selector{margin-right:10px;}.social.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RlMsQUFHeUIsQUFJcUMsQUFTMUIsQUFJWCxBQU1BLEFBSWEsQUFNUyxBQUlwQixBQUdHLEFBR0wsZUFMZixHQUdBLGlCQVB1QixlQTdCUixVQXVCc0IsR0F0QnpCLFVBQ0UsQ0FOSSxBQWlCTSxBQU1ILEFBb0JRLElBOUIzQixPQU5hLEFBMkJmLEtBakNBLEdBdUJBLEVBSWlCLGVBQ0ssMENBWFUsTUFZaEMsQ0F0QmdDLG9CQW9DaEMsd0ZBekJlLE9BVmYsTUFXQSIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbXlzZXJ2ZXJcXGRvbmF0ZS5zaHBwLmNvbS1mcm9udGVuZFxcbGF5b3V0XFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi4vYXNzZXRzL2ljb24vMDAxLXBpbi5zdmcnO1xuaW1wb3J0IFBob25lIGZyb20gJy4uL2Fzc2V0cy9pY29uLzAwMi1lbGVjdHJvbmljcy5zdmcnO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uL2Fzc2V0cy9pY29uLzAwMy1lbWFpbC5zdmcnO1xuaW1wb3J0IEluc3RhZ3JhbSBmcm9tICcuLi9hc3NldHMvaWNvbi8wMDQtaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgVGVsZWdyYW0gZnJvbSAnLi4vYXNzZXRzL2ljb24vMDA1LXRlbGVncmFtLnN2Zyc7XG5pbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi4vYXNzZXRzL2ljb24vMDA2LWZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgTWFzdGVyQ2FyZCBmcm9tICcuLi9hc3NldHMvbWNzYy5zdmcnO1xuaW1wb3J0IFZpc2EgZnJvbSAnLi4vYXNzZXRzL3Zidi5zdmcnO1xuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Tb2NpYWxJY29uJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgaWNvblNtYWxsOiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgfSxcbiAgaWNvbk1pZDoge1xuICAgIHdpZHRoOiAnMzBweCcsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gIH0sXG4gIGljb25CaWc6IHtcbiAgICB3aWR0aDogJzgwcHgnLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICB9LFxufTtcbmNvbnN0IGluc3RhZ3JhbSA9ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NocHAua3IvP2lnc2hpZD0xY3V3bDN2bTU5MDdkJztcbmNvbnN0IGZhY2Vib29rID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZy9zaHBwLmtyL3Bvc3RzLyc7XG5jb25zdCB0ZWxlZ3JhbSA9ICdodHRwczovL3QubWUvc2hwcGtyJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYnBhZ2VcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wcm9ncmFtbWluZy5rci51YS9cIj5odHRwczovL3Byb2dyYW1taW5nLmtyLnVhLzwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gbGluaz17aW5zdGFncmFtfT5cbiAgICAgICAgICAgICAgPEluc3RhZ3JhbSBzdHlsZT17c3R5bGUuaWNvbk1pZH0gLz5cbiAgICAgICAgICAgIDwvU29jaWFsSWNvbj5cbiAgICAgICAgICAgIDxTb2NpYWxJY29uIGxpbms9e3RlbGVncmFtfT5cbiAgICAgICAgICAgICAgPFRlbGVncmFtIHN0eWxlPXtzdHlsZS5pY29uTWlkfSAvPlxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gbGluaz17ZmFjZWJvb2t9PlxuICAgICAgICAgICAgICA8RmFjZWJvb2sgc3R5bGU9e3N0eWxlLmljb25NaWR9IC8+XG4gICAgICAgICAgICA8L1NvY2lhbEljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGF0aWNvbl9saW5rXCI+XG5JY29ucyBtYWRlIGJ5Jm5ic3A7XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+XG4gICAgICAgICAgJm5ic3A7ZnJvbSZuYnNwO1xuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+d3d3LmZsYXRpY29uLmNvbTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgIDxBZGRyZXNzIHN0eWxlPXtzdHlsZS5pY29uU21hbGx9IC8+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAg0KPQutGA0LDRl9C90LAsINC8LiDQmtGA0L7Qv9C40LLQvdC40YbRjNC60LjQuVxuICAgICAgICAgICAg0L/RgNC+0LIuINCS0LDRgdC40LvRltCy0YHRjNC60LjQuSwgMTBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICA8UGhvbmUgc3R5bGU9e3N0eWxlLmljb25TbWFsbH0gLz5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAwNTAgMjAgMTExIDgwXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgPEVtYWlsIHN0eWxlPXtzdHlsZS5pY29uU21hbGx9IC8+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgaW5mb0Bwcm9ncmFtbWluZy5rci51YVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWdyZWVtZW50XCI+XG4gICAgICAgICAgICA8YT7Qn9GD0LHQu9GW0YfQvdCwINC+0YTQtdGA0YLQsDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXN0ZXJDYXJkIHN0eWxlPXtzdHlsZS5pY29uQmlnfSAvPlxuICAgICAgICAgICAgPFZpc2Egc3R5bGU9e3N0eWxlLmljb25CaWd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge1xuICAgICAgICAgYFxuICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICB9XG4gICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuZ3JlZW59O1xuICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgIH0gICAgXG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXG4gICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICB9ICAgICBcbiAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgYSB7XG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgIH1cbiAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5ncmVlbn07XG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLmZsYXRpY29uX2xpbmssIC5mbGF0aWNvbl9saW5rIGEge1xuICAgICAgICAgICBmb250LXNpemU6IDEwcHg7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGkgeyBcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgLnNvY2lhbCB7ICAgICAgICAgIFxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgIGBcbiAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */
/*@ sourceURL=C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Footer.js */`));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burgers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burgers */ "react-burgers");
/* harmony import */ var react_burgers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burgers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const styles = {
  container: {
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `5px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green}`,
    backgroundColor: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white
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
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black
  },
  plus: {
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].green
  },
  slash: {
    fontSize: '70%',
    margin: '0 25px',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text
  },
  crowdfunding: {
    fontSize: '40%',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text
  },
  nav: {},
  navList: {
    display: 'flex',
    listStyle: 'none'
  },
  listItem: {
    padding: '5px 10px',
    color: _theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].text,
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

class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleMenu", () => {
      this.setState(prevState => {
        return {
          isMenuExpanded: !prevState.isMenuExpanded
        };
      });
    });

    this.state = {
      isMenuExpanded: false
    };
  }

  render() {
    const {
      isMenuExpanded
    } = this.state;
    return __jsx("header", {
      style: styles.container,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "site-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, !isMenuExpanded && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("a", {
      style: styles.logo,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("span", {
      style: styles.sh,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "\u0428"), __jsx("span", {
      style: styles.plus,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "++"), __jsx("span", {
      style: styles.slash,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "logo__slash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "/"), __jsx("span", {
      style: styles.crowdfunding,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "crowdfunding platform"))), __jsx("nav", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("ul", {
      style: styles.navList,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "nav-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("a", {
      style: styles.listItem,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "\u043F\u0440\u043E \u043D\u0430\u0441"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("a", {
      style: _objectSpread({}, styles.listItem, {}, styles.listItemMiddle),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "\u043F\u0440\u043E\u0435\u043A\u0442\u0438"))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "\u0432\u0436\u0435 \u0437\u0456\u0431\u0440\u0430\u043B\u0438"))))), __jsx("div", {
      onClick: this.toggleMenu,
      onKeyPress: () => {},
      style: styles.burgerWrapper,
      role: "button",
      tabIndex: "0",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1788626351", [isMenuExpanded ? 'flex' : 'none']]]) + " " + "burger-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(react_burgers__WEBPACK_IMPORTED_MODULE_2__["SliderReverse"], {
      active: isMenuExpanded,
      padding: "12px 10px",
      lineHeight: 3,
      width: 30,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1788626351",
      dynamic: [isMenuExpanded ? 'flex' : 'none'],
      __self: this
    }, `@media screen and (max-width:1240px){.logo.__jsx-style-dynamic-selector{line-height:50px !important;font-size:40px !important;}}@media screen and (max-width:768px){.nav-list.__jsx-style-dynamic-selector{display:${isMenuExpanded ? 'flex' : 'none'} !important;padding-left:0;margin:0;}.site-header.__jsx-style-dynamic-selector{-webkit-box-pack:justify !important;-webkit-justify-content:space-between !important;-ms-flex-pack:justify !important;justify-content:space-between !important;padding:5px 10px !important;}.burger-wrapper.__jsx-style-dynamic-selector{display:block !important;}}@media screen and (max-width:460px){.logo__slash.__jsx-style-dynamic-selector{margin:0 5px !important;}.logo.__jsx-style-dynamic-selector{line-height:40px !important;font-size:30px !important;}.list-item.__jsx-style-dynamic-selector{padding:5px !important;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySFksQUFHNkMsQUFPb0IsQUFNUCxBQUtoQixBQU1GLEFBSUssQUFLTCx1QkFDekIsQ0FUQSxDQU5BLEdBbEI0QixBQTRCQSxvQkFyQlgsTUFOakIsQUE0QkEsU0FyQlcsU0FDWCx1RkFJOEIsNEJBQzlCIiwiZmlsZSI6IkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTbGlkZXJSZXZlcnNlIH0gZnJvbSAncmVhY3QtYnVyZ2Vycyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6ICc1cHggMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlckJvdHRvbTogYDVweCBzb2xpZCAke2NvbG9ycy5ncmVlbn1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLndoaXRlLFxuICB9LFxuICBsb2dvOiB7XG4gICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICBmb250U2l6ZTogJzMzMCUnLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIGxpbmVIZWlnaHQ6ICc4MHB4JyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgc2g6IHtcbiAgICBjb2xvcjogY29sb3JzLmJsYWNrLFxuICB9LFxuICBwbHVzOiB7XG4gICAgY29sb3I6IGNvbG9ycy5ncmVlbixcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBmb250U2l6ZTogJzcwJScsXG4gICAgbWFyZ2luOiAnMCAyNXB4JyxcbiAgICBjb2xvcjogY29sb3JzLnRleHQsXG4gIH0sXG4gIGNyb3dkZnVuZGluZzoge1xuICAgIGZvbnRTaXplOiAnNDAlJyxcbiAgICBjb2xvcjogY29sb3JzLnRleHQsXG4gIH0sXG4gIG5hdjoge1xuICB9LFxuICBuYXZMaXN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB9LFxuICBsaXN0SXRlbU1pZGRsZToge1xuICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgIzJjM2U1MCcsXG4gICAgYm9yZGVyUmlnaHQ6ICcycHggc29saWQgIzJjM2U1MCcsXG4gIH0sXG4gIGJ1cmdlcldyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG59O1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNZW51RXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgaXNNZW51RXhwYW5kZWQ6ICFwcmV2U3RhdGUuaXNNZW51RXhwYW5kZWQgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc01lbnVFeHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwic2l0ZS1oZWFkZXJcIj5cbiAgICAgICAgeyFpc01lbnVFeHBhbmRlZFxuICAgICAgICAgICYmIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlcy5sb2dvfSBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2h9PtCoPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnBsdXN9PisrPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNsYXNofSBjbGFzc05hbWU9XCJsb2dvX19zbGFzaFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuY3Jvd2RmdW5kaW5nfT5jcm93ZGZ1bmRpbmcgcGxhdGZvcm08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZXMubmF2TGlzdH0gY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZXMubGlzdEl0ZW19IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPtC/0YDQviDQvdCw0YE8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgLi4uc3R5bGVzLmxpc3RJdGVtLCAuLi5zdHlsZXMubGlzdEl0ZW1NaWRkbGUgfX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICDQv9GA0L7QtdC60YLQuFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBmaWx0ZXI6ICdjb21wbGV0ZWQnIH0gfX0+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlcy5saXN0SXRlbX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+0LLQttC1INC30ZbQsdGA0LDQu9C4PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHt9fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnVyZ2VyV3JhcHBlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidXJnZXItd3JhcHBlclwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXJSZXZlcnNlXG4gICAgICAgICAgICBhY3RpdmU9e2lzTWVudUV4cGFuZGVkfVxuICAgICAgICAgICAgcGFkZGluZz1cIjEycHggMTBweFwiXG4gICAgICAgICAgICBsaW5lSGVpZ2h0PXszfVxuICAgICAgICAgICAgd2lkdGg9ezMwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpe1xuICAgICAgICAgICAgICAubG9nb3tcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgICAgLm5hdi1saXN0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7aXNNZW51RXhwYW5kZWQgPyAnZmxleCcgOiAnbm9uZSd9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNpdGUtaGVhZGVye1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5idXJnZXItd3JhcHBlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KXtcbiAgICAgICAgICAgICAgLmxvZ29fX3NsYXNoe1xuICAgICAgICAgICAgICAgIG1hcmdpbiAwIDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubG9nb3tcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubGlzdC1pdGVte1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */
/*@ sourceURL=C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Header.js */`));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./layout/Footer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\layout\\Page.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = ({
  children
}) => __jsx("div", {
  className: "jsx-1521399778" + " " + "wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1521399778",
  __self: undefined
}, "html{height:100%;}body{padding:0;margin:0;font-family:'Open Sans',sans-serif;color:#2c3e50;background-color:#f5f5f5;box-sizing:border-box;height:100%;}*{box-sizing:inherit;}.wrapper{min-height:100vh;margin:0 auto -100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT08sQUFHcUIsQUFHRixBQVNTLEFBR0YsVUFYUixFQUhYLEtBZXVCLEVBWGMsQUFRckMsbUJBSWUsZ0JBWEMsY0FDVyx5QkFDSCxtQkFVQSxHQVJ6QixZQUFDLCtEQVNBIiwiZmlsZSI6IkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxsYXlvdXRcXFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICBodG1sICB7XG4gICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICB9XG4gICAgICBib2R5IHsgXG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gLTEwMHB4OyBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+0KgrKyBDcm93ZGZ1bmRpbmcgcG9ydGFsPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\layout\\\\Page.js */"), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-1521399778",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "\u0428++ Crowdfunding portal"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-1521399778",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}));

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

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
  return (href, as) => {
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
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Page */ "./layout/Page.js");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.js");
var _jsxFileName = "C:\\xampp\\htdocs\\myserver\\donate.shpp.com-frontend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const styles = {
  container: {
    maxWidth: '85%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    padding: '30px 0 0 0'
  }
};

const HomePage = props => {
  const getSortedProjects = projects => {
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    const {
      filter
    } = router.query;
    const completedProjects = projects.filter(project => project.completed);
    const notCompletedProjects = projects.filter(project => !project.completed);
    return filter === 'completed' ? [...completedProjects.sort((a, b) => a.creationTime < b.creationTime ? 1 : -1)] : [...notCompletedProjects.sort((a, b) => a.creationTime < b.creationTime ? 1 : -1), ...completedProjects.sort((a, b) => a.creationTime < b.creationTime ? 1 : -1)];
  };

  const {
    projects
  } = props;
  return __jsx(_layout_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    style: styles.container,
    className: "jsx-680452456" + " " + "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, getSortedProjects(projects).map(project => __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    project: project,
    key: project._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "680452456",
    __self: undefined
  }, "@media screen and (max-width:1240px){.homepage.jsx-680452456{max-width:initial !important;width:100% !important;padding:30px 30px 0 !important;}}@media screen and (max-width:768px){.homepage.jsx-680452456{padding:20px 20px 0!important;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxteXNlcnZlclxcZG9uYXRlLnNocHAuY29tLWZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNRLEFBRzRDLEFBT0MsNkJBTlIsQ0FPQyxxQkFOUSwrQkFDakMsK0NBTUEiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXG15c2VydmVyXFxkb25hdGUuc2hwcC5jb20tZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0L1BhZ2UnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmQnO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzMwcHggMCAwIDAnLFxuICB9LFxufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZ2V0U29ydGVkUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGZpbHRlciB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnN0IGNvbXBsZXRlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmNvbXBsZXRlZCk7XG4gICAgY29uc3Qgbm90Q29tcGxldGVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+ICFwcm9qZWN0LmNvbXBsZXRlZCk7XG5cblxuICAgIHJldHVybiBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnXG4gICAgICA/IFsuLi4oY29tcGxldGVkUHJvamVjdHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWUgPyAxIDogLTEpKSldXG4gICAgICA6IFtcbiAgICAgICAgLi4uKG5vdENvbXBsZXRlZFByb2plY3RzLnNvcnQoKGEsIGIpID0+IChhLmNyZWF0aW9uVGltZSA8IGIuY3JlYXRpb25UaW1lID8gMSA6IC0xKSkpLFxuICAgICAgICAuLi4oY29tcGxldGVkUHJvamVjdHMuc29ydCgoYSwgYikgPT4gKGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWUgPyAxIDogLTEpKSksXG4gICAgICBdO1xuICB9O1xuXG4gIGNvbnN0IHsgcHJvamVjdHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cbiAgICAgICAge2dldFNvcnRlZFByb2plY3RzKHByb2plY3RzKS5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgIHByb2plY3Q9e3Byb2plY3R9XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QuX2lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7XG4gICAgICAgIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpe1xuICAgICAgICAgICAgLmhvbWVwYWdlIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgICAgIC5ob21lcGFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIWltcG9ydGFudDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICBjb25zdCBwcmVmaXggPSBwcm9jZXNzLmJyb3dzZXIgPyAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJyA6ICcnOyAvLyBUT0RPOiBSZW1vdmUgd2hlbiBDT1JTIHdpbGwgYmUgZml4ZWRcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcmVmaXh9aHR0cHM6Ly9iYWNrLmRvbmF0ZS4yLnNocHAubWUvYXBpL3YxL3Byb2plY3RzL2xpc3RgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0czogZGF0YS5wcm9qZWN0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\myserver\\\\donate.shpp.com-frontend\\\\pages\\\\index.js */"));
};

HomePage.getInitialProps = async function getInitialProps() {
  const prefix = false ? undefined : ''; // TODO: Remove when CORS will be fixed

  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${prefix}https://back.donate.2.shpp.me/api/v1/projects/list`);
  const data = await res.json();
  return {
    projects: data.projects
  };
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\myserver\donate.shpp.com-frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burgers":
/*!********************************!*\
  !*** external "react-burgers" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burgers");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map