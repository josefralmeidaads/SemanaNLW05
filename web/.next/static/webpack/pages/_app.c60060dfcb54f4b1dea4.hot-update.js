webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Player/styles.ts");


var _jsxFileName = "C:\\NLW05\\web\\src\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Player = function Player() {
  _s();

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerFooter"], {
      empty: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsDiv"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtons"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsImg"], {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtons"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ButtonPlay"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtons"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtons"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["PlayerButtonsImg"], {
            src: "/repeat.svg",
            alt: "repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Player, "qaxf1OSUoobCmfJN/QJP2X/BSXE=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_2__["usePlayer"]];
});

_c = Player;
/* harmony default export */ __webpack_exports__["default"] = (Player);

var _c;

$RefreshReg$(_c, "Player");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VQbGF5ZXIiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJlcGlzb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFnQkEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUFBLG1CQUNnQkMseUVBQVMsRUFEekI7QUFBQSxNQUNyQkMsV0FEcUIsY0FDckJBLFdBRHFCO0FBQUEsTUFDUkMsbUJBRFEsY0FDUkEsbUJBRFE7O0FBRTdCLE1BQU1DLE9BQU8sR0FBR0YsV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNFLHFFQUFDLHVEQUFEO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxpREFBRDtBQUFXLFdBQUcsRUFBRSxhQUFoQjtBQUErQixXQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLG1EQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFVRSxxRUFBQyxvREFBRDtBQUFjLFdBQUssRUFBRSxJQUFyQjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFSSxxRUFBQyw4Q0FBRDtBQUFBLGlDQUNFLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBS0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFTRSxxRUFBQyx3REFBRDtBQUFBLGdDQUNFLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBa0IsZUFBRyxFQUFDLGNBQXRCO0FBQXFDLGVBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBa0IsZUFBRyxFQUFDLG9CQUF0QjtBQUEyQyxlQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFTRSxxRUFBQyxrREFBRDtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxXQUF0QjtBQUFrQyxlQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFhRSxxRUFBQyxxREFBRDtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxnQkFBdEI7QUFBdUMsZUFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBaUJFLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBa0IsZUFBRyxFQUFDLGFBQXRCO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2Q0QsQ0FqREQ7O0dBQU1ILE07VUFDeUNDLGlFOzs7S0FEekNELE07QUFtRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzYwMDYwZGZjYjU0ZjRiMWRlYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCB7IFxyXG4gIFBsYXllckNvbnRhaW5lcixcclxuICBQbGF5ZXJIZWFkZXIsXHJcbiAgUGxheWVySW1nLFxyXG4gIFBsYXllckVtcHR5LFxyXG4gIFBsYXllckZvb3RlcixcclxuICBQbGF5ZXJQcm9ncmVzcyxcclxuICBQcm9ncmVzc0N1cnJlbnQsXHJcbiAgRW1wdHlTbGlkZXIsXHJcbiAgU2xpZGVyLFxyXG4gIFBsYXllckJ1dHRvbnNEaXYsXHJcbiAgUGxheWVyQnV0dG9ucyxcclxuICBCdXR0b25QbGF5LFxyXG4gIFBsYXllckJ1dHRvbnNJbWcsIFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBlcGlzb2RlTGlzdCwgY3VycmVudEVwaXNvZGVJbmRleCB9ID0gdXNlUGxheWVyKCk7XHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRhaW5lcj5cclxuICAgICAgPFBsYXllckhlYWRlcj5cclxuICAgICAgICA8UGxheWVySW1nIHNyYz17XCJwbGF5aW5nLnN2Z1wifSBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmE8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJIZWFkZXI+XHJcblxyXG4gICAgICA8UGxheWVyRW1wdHk+XHJcbiAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgIDwvUGxheWVyRW1wdHk+XHJcblxyXG4gICAgICA8UGxheWVyRm9vdGVyIGVtcHR5PXt0cnVlfT5cclxuICAgICAgICA8UGxheWVyUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50PjAwOjAwPC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICAgICAgPEVtcHR5U2xpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPFByb2dyZXNzQ3VycmVudD4wMDowMDwvUHJvZ3Jlc3NDdXJyZW50PlxyXG4gICAgICAgIDwvUGxheWVyUHJvZ3Jlc3M+XHJcblxyXG4gICAgICAgIDxQbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cInZvbHRhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uUGxheT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwidG9jYXJcIi8+XHJcbiAgICAgICAgICA8L0J1dHRvblBsYXk+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiYXZhbsOnYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwicmVwZXRpclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuICAgICAgICA8L1BsYXllckJ1dHRvbnNEaXY+XHJcbiAgICAgIDwvUGxheWVyRm9vdGVyPlxyXG5cclxuICAgIDwvUGxheWVyQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9