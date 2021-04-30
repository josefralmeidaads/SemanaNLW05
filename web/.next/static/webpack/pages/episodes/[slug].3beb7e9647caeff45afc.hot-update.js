webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/stylesEpisode */ "./src/styles/stylesEpisode.ts");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\NLW05\\web\\src\\pages\\episodes\\[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();








var episodes = function episodes(_ref) {
  _s();

  var episode = _ref.episode;

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      play = _usePlayer.play;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["Episode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["ThumbnailContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["ThumbnailButton"], {
            type: "button",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/arrow-left.svg",
              alt: "voltar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: episode.thumbnail,
          alt: episode.title,
          width: 700,
          height: 160,
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["ButtonPlay"], {
          type: "button",
          onClick: function onClick() {
            return play(episode);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar epis\xF3dio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["Header"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: episode.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: episode.members
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: episode.published_at_Formatted
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: episode.durationFormatted
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_stylesEpisode__WEBPACK_IMPORTED_MODULE_4__["Description"], {
        dangerouslySetInnerHTML: {
          __html: episode.description
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(episodes, "mptMREsNBTdRfLLVAN69g5qilFU=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"]];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (episodes);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiZXBpc29kZXMiLCJlcGlzb2RlIiwidXNlUGxheWVyIiwicGxheSIsInRpdGxlIiwidGh1bWJuYWlsIiwibWVtYmVycyIsInB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQiLCJkdXJhdGlvbkZvcm1hdHRlZCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFRQTtBQVNBO0FBQ0E7O0FBbUJBLElBQU1BLFFBQWdDLEdBQUcsU0FBbkNBLFFBQW1DLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0Qjs7QUFBQSxtQkFDckRDLHlFQUFTLEVBRDRDO0FBQUEsTUFDOURDLElBRDhELGNBQzlEQSxJQUQ4RDs7QUFFdEUsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQVFGLE9BQU8sQ0FBQ0c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsd0VBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0UscUVBQUMscUVBQUQ7QUFBaUIsZ0JBQUksRUFBQyxRQUF0QjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBQyxpQkFBVDtBQUEyQixpQkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFFSCxPQUFPLENBQUNJLFNBRGY7QUFFRSxhQUFHLEVBQUVKLE9BQU8sQ0FBQ0csS0FGZjtBQUdFLGVBQUssRUFBRSxHQUhUO0FBSUUsZ0JBQU0sRUFBRSxHQUpWO0FBS0UsbUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFjRSxxRUFBQyxnRUFBRDtBQUFZLGNBQUksRUFBQyxRQUFqQjtBQUEwQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELElBQUksQ0FBQ0YsT0FBRCxDQUFWO0FBQUEsV0FBbkM7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQW9CRSxxRUFBQyw0REFBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQUtBLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBT0gsT0FBTyxDQUFDSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLG9CQUFPTCxPQUFPLENBQUNNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsb0JBQU9OLE9BQU8sQ0FBQ087QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQTJCRSxxRUFBQyxpRUFBRDtBQUNFLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBQUVSLE9BQU8sQ0FBQ1M7QUFBbEI7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQXhDRDs7R0FBTVYsUTtVQUNhRSxpRTs7OztBQXlGSkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZXMvW3NsdWddLjNiZWI3ZTk2NDdjYWVmZjQ1YWZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nO1xyXG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIGZyb20gJy4uLy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLCBcclxuICBFcGlzb2RlLFxyXG4gIFRodW1ibmFpbENvbnRhaW5lcixcclxuICBUaHVtYm5haWxCdXR0b24sXHJcbiAgQnV0dG9uUGxheSxcclxuICBIZWFkZXIsXHJcbiAgRGVzY3JpcHRpb24sIFxyXG59IGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXNFcGlzb2RlJztcclxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgaWQ6IHN0cmluZywgICAgICBcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIG1lbWJlcnM6IHN0cmluZyxcclxuICBwdWJsaXNoZWRfYXQ6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHVybDogc3RyaW5nLFxyXG4gIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogc3RyaW5nLFxyXG4gIGR1cmF0aW9uRm9ybWF0dGVkOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBFcGlzb2RlUHJvcHMgPSB7XHJcbiAgZXBpc29kZTogRXBpc29kZTtcclxufVxyXG5cclxuY29uc3QgZXBpc29kZXM6IFJlYWN0LkZDPEVwaXNvZGVQcm9wcz4gPSAoeyBlcGlzb2RlIH06IEVwaXNvZGVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGxheSB9ID0gdXNlUGxheWVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZXBpc29kZS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFcGlzb2RlPlxyXG4gICAgICAgIDxUaHVtYm5haWxDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8VGh1bWJuYWlsQnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cInZvbHRhclwiLz5cclxuICAgICAgICAgICAgPC9UaHVtYm5haWxCdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cclxuICAgICAgICAgICAgd2lkdGg9ezcwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXsxNjB9XHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblBsYXkgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXkoZXBpc29kZSl9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiLz5cclxuICAgICAgICAgIDwvQnV0dG9uUGxheT5cclxuICAgICAgICA8L1RodW1ibmFpbENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRfYXRfRm9ybWF0dGVkfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uRm9ybWF0dGVkfTwvc3Bhbj5cclxuICAgICAgICA8L0hlYWRlcj5cclxuXHJcbiAgICAgICAgPERlc2NyaXB0aW9uIFxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBlcGlzb2RlLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9FcGlzb2RlPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL2VwaXNvZGVzJywge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIF9saW1pdDogMixcclxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxyXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChlcGlzb2RlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBlcGlzb2RlLmlkXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucGFyYW1zO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoYC9lcGlzb2Rlcy8ke3NsdWd9YCk7XHJcblxyXG4gIGNvbnN0IGVwaXNvZGUgPSB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgbWVtYmVyczogZGF0YS5tZW1iZXJzLFxyXG4gICAgcHVibGlzaGVkX2F0OiBkYXRhLnB1Ymxpc2hlZF9hdCxcclxuICAgIHB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQ6IGZvcm1hdChwYXJzZUlTTyhkYXRhLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxyXG4gICAgdGh1bWJuYWlsOiBkYXRhLnRodW1ibmFpbCxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgZHVyYXRpb246IE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pLFxyXG4gICAgZHVyYXRpb25Gb3JtYXR0ZWQ6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZGF0YS5maWxlLmR1cmF0aW9uKSksXHJcbiAgICB1cmw6IFN0cmluZyhkYXRhLmZpbGUudXJsKSxcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGVwaXNvZGUsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyBzZWd1bmRvcyAqIG1pbnV0b3MgKiBob3Jhc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVwaXNvZGVzOyJdLCJzb3VyY2VSb290IjoiIn0=