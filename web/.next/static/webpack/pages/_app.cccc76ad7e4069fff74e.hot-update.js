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
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerCurrentEpisode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: episode.thumbnail,
        width: 592,
        height: 592,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerFooter"], {
      empty: !episode ? true : false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], {
          children: !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
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
            lineNumber: 59,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/funcional.m4a",
        autoPlay: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsDiv"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonPlay"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/repeat.svg",
            alt: "repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Player, "qaxf1OSUoobCmfJN/QJP2X/BSXE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ1c2VQbGF5ZXIiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQWlCQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUEsbUJBQ2dCQyx5RUFBUyxFQUR6QjtBQUFBLE1BQ3JCQyxXQURxQixjQUNyQkEsV0FEcUI7QUFBQSxNQUNSQyxtQkFEUSxjQUNSQSxtQkFEUTs7QUFFN0IsTUFBTUMsT0FBTyxHQUFHRixXQUFXLENBQUNDLG1CQUFELENBQTNCO0FBRUEsc0JBQ0UscUVBQUMsdURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQVcsV0FBRyxFQUFFLGFBQWhCO0FBQStCLFdBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUcsQ0FBQ0MsT0FBRCxnQkFDRCxxRUFBQyxtREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLGdCQUtELHFFQUFDLDREQUFEO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxXQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsU0FEZjtBQUVFLGFBQUssRUFBRSxHQUZUO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxpQkFBUyxFQUFD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NzZhZDdlNDA2OWZmZjc0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgU2xpZGVyUkMgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgXHJcbiAgUGxheWVyQ29udGFpbmVyLFxyXG4gIFBsYXllckhlYWRlcixcclxuICBQbGF5ZXJJbWcsXHJcbiAgUGxheWVyRW1wdHksXHJcbiAgUGxheWVyQ3VycmVudEVwaXNvZGUsXHJcbiAgUGxheWVyRm9vdGVyLFxyXG4gIFBsYXllclByb2dyZXNzLFxyXG4gIFByb2dyZXNzQ3VycmVudCxcclxuICBFbXB0eVNsaWRlcixcclxuICBTbGlkZXIsXHJcbiAgUGxheWVyQnV0dG9uc0RpdixcclxuICBQbGF5ZXJCdXR0b25zLFxyXG4gIEJ1dHRvblBsYXksXHJcbiAgUGxheWVyQnV0dG9uc0ltZywgXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGVwaXNvZGVMaXN0LCBjdXJyZW50RXBpc29kZUluZGV4IH0gPSB1c2VQbGF5ZXIoKTtcclxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGFpbmVyPlxyXG4gICAgICA8UGxheWVySGVhZGVyPlxyXG4gICAgICAgIDxQbGF5ZXJJbWcgc3JjPXtcInBsYXlpbmcuc3ZnXCJ9IGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckhlYWRlcj5cclxuXHJcbiAgICAgIHshZXBpc29kZSA/IChcclxuICAgICAgPFBsYXllckVtcHR5PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckVtcHR5PlxyXG4gICAgICApIDogKFxyXG4gICAgICA8UGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICBoZWlnaHQ9ezU5Mn1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgIDwvUGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICkgfVxyXG5cclxuICAgICAgPFBsYXllckZvb3RlciBlbXB0eT17IWVwaXNvZGUgPyB0cnVlIDogZmFsc2V9PlxyXG4gICAgICAgIDxQbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICAgIDxQcm9ncmVzc0N1cnJlbnQ+MDA6MDA8L1Byb2dyZXNzQ3VycmVudD5cclxuICAgICAgICAgICAgPFNsaWRlcj5cclxuICAgICAgICAgICAgICB7IWVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclJDIFxyXG4gICAgICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7YmFja2dyb3VuZDogXCIjMDREMzYxXCJ9fVxyXG4gICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiM5Rjc1RkZcIn19XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7Ym9yZGVyQ29sb3I6IFwiIzA0RDM2MVwifX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50PjAwOjAwPC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgPC9QbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICBcclxuICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9nb2xkZW4td2luZC9uZXh0bGV2ZWx3ZWVrLzA1LXBvZGNhc3RyL2F1ZGlvcy9mdW5jaW9uYWwubTRhXCJcclxuICAgICAgICAgICAgYXV0b1BsYXkgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxQbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJ2b2x0YXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblBsYXkgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwidG9jYXJcIi8+XHJcbiAgICAgICAgICA8L0J1dHRvblBsYXk+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJhdmFuw6dhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cInJlcGV0aXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgPC9QbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICA8L1BsYXllckZvb3Rlcj5cclxuXHJcbiAgICA8L1BsYXllckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==