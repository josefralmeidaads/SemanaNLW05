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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/Player/styles.ts");


var _jsxFileName = "C:\\NLW05\\web\\src\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Player = function Player() {
  _s();

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      togglePlay = _usePlayer.togglePlay;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerCurrentEpisode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: episode.thumbnail,
        width: 592,
        height: 592,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerFooter"], {
      empty: !episode ? true : false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], {
          children: !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
            trackStyle: {
              background: "#04D361"
            },
            railStyle: {
              background: "#9F75FF"
            },
            handleStyle: {
              borderColor: "#04D361"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        autoPlay: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsDiv"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonPlay"], {
          disabled: !episode,
          onClick: togglePlay,
          children: !isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 27
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/pause.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/repeat.svg",
            alt: "repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Player, "/TuAtPHOmD6ERRhwj2XZkAr1uD8=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VQbGF5ZXIiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJ0b2dnbGVQbGF5IiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFpQkEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUFBLG1CQU16QkMseUVBQVMsRUFOZ0I7QUFBQSxNQUUzQkMsV0FGMkIsY0FFM0JBLFdBRjJCO0FBQUEsTUFHM0JDLG1CQUgyQixjQUczQkEsbUJBSDJCO0FBQUEsTUFJM0JDLFNBSjJCLGNBSTNCQSxTQUoyQjtBQUFBLE1BSzNCQyxVQUwyQixjQUszQkEsVUFMMkI7O0FBTzdCLE1BQU1DLE9BQU8sR0FBR0osV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNFLHFFQUFDLHVEQUFEO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxpREFBRDtBQUFXLFdBQUcsRUFBRSxhQUFoQjtBQUErQixXQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU1HLENBQUNHLE9BQUQsZ0JBQ0QscUVBQUMsbURBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxnQkFLRCxxRUFBQyw0REFBRDtBQUFBLDhCQUNFLHFF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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkVELENBdEZEOztHQUFNTixNO1VBTUFDLGlFOzs7S0FOQUQsTTtBQXdGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZjEyYzk3OWJmMzA3NGNiOGEyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgU2xpZGVyUkMgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgXHJcbiAgUGxheWVyQ29udGFpbmVyLFxyXG4gIFBsYXllckhlYWRlcixcclxuICBQbGF5ZXJJbWcsXHJcbiAgUGxheWVyRW1wdHksXHJcbiAgUGxheWVyQ3VycmVudEVwaXNvZGUsXHJcbiAgUGxheWVyRm9vdGVyLFxyXG4gIFBsYXllclByb2dyZXNzLFxyXG4gIFByb2dyZXNzQ3VycmVudCxcclxuICBFbXB0eVNsaWRlcixcclxuICBTbGlkZXIsXHJcbiAgUGxheWVyQnV0dG9uc0RpdixcclxuICBQbGF5ZXJCdXR0b25zLFxyXG4gIEJ1dHRvblBsYXksXHJcbiAgUGxheWVyQnV0dG9uc0ltZywgXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IFxyXG4gICAgZXBpc29kZUxpc3QsIFxyXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICBpc1BsYXlpbmcsXHJcbiAgICB0b2dnbGVQbGF5LCBcclxuICB9ID0gdXNlUGxheWVyKCk7XHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRhaW5lcj5cclxuICAgICAgPFBsYXllckhlYWRlcj5cclxuICAgICAgICA8UGxheWVySW1nIHNyYz17XCJwbGF5aW5nLnN2Z1wifSBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmE8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJIZWFkZXI+XHJcblxyXG4gICAgICB7IWVwaXNvZGUgPyAoXHJcbiAgICAgIDxQbGF5ZXJFbXB0eT5cclxuICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJFbXB0eT5cclxuICAgICAgKSA6IChcclxuICAgICAgPFBsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICB3aWR0aD17NTkyfVxyXG4gICAgICAgICAgaGVpZ2h0PXs1OTJ9XHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICA8L1BsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICApIH1cclxuXHJcbiAgICAgIDxQbGF5ZXJGb290ZXIgZW1wdHk9eyFlcGlzb2RlID8gdHJ1ZSA6IGZhbHNlfT5cclxuICAgICAgICA8UGxheWVyUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50PjAwOjAwPC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICAgICAgeyFlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgPEVtcHR5U2xpZGVyIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxTbGlkZXJSQyBcclxuICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17e2JhY2tncm91bmQ6IFwiIzA0RDM2MVwifX1cclxuICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7YmFja2dyb3VuZDogXCIjOUY3NUZGXCJ9fVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiBcIiMwNEQzNjFcIn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPFByb2dyZXNzQ3VycmVudD4wMDowMDwvUHJvZ3Jlc3NDdXJyZW50PlxyXG4gICAgICAgIDwvUGxheWVyUHJvZ3Jlc3M+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2VwaXNvZGUgJiYgKFxyXG4gICAgICAgICAgPGF1ZGlvIFxyXG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxyXG4gICAgICAgICAgICBhdXRvUGxheSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPFBsYXllckJ1dHRvbnNEaXY+XHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zPlxyXG5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zIGRpc2FibGVkPXshZXBpc29kZX0+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cInZvbHRhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uUGxheSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfSBcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFpc1BsYXlpbmcgPyA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJ0b2NhclwiLz5cclxuICAgICAgICAgICAgOiA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwidG9jYXJcIi8+fVxyXG4gICAgICAgICAgPC9CdXR0b25QbGF5PlxyXG5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zIGRpc2FibGVkPXshZXBpc29kZX0+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiYXZhbsOnYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJyZXBldGlyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zPlxyXG4gICAgICAgIDwvUGxheWVyQnV0dG9uc0Rpdj5cclxuICAgICAgPC9QbGF5ZXJGb290ZXI+XHJcblxyXG4gICAgPC9QbGF5ZXJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=