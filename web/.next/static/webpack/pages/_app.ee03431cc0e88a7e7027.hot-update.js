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

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      togglePlay = _usePlayer.togglePlay;

  var episode = episodeList[currentEpisodeIndex];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.paused;
    }
  }, [isPlaying]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerCurrentEpisode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: episode.thumbnail,
        width: 592,
        height: 592,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerFooter"], {
      empty: !episode ? true : false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], {
          children: !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
            lineNumber: 76,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        ref: audioRef,
        src: episode.url,
        autoPlay: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsDiv"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonPlay"], {
          disabled: !episode,
          onClick: togglePlay,
          children: !isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 27
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/pause.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/repeat.svg",
            alt: "repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Player, "P+pPDGyaKxm2JhI/hB1ZNGvT1cA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInRvZ2dsZVBsYXkiLCJlcGlzb2RlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBhdXNlZCIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFpQkEsSUFBTUEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQXZCOztBQUQ2QixtQkFRekJDLHlFQUFTLEVBUmdCO0FBQUEsTUFJM0JDLFdBSjJCLGNBSTNCQSxXQUoyQjtBQUFBLE1BSzNCQyxtQkFMMkIsY0FLM0JBLG1CQUwyQjtBQUFBLE1BTTNCQyxTQU4yQixjQU0zQkEsU0FOMkI7QUFBQSxNQU8zQkMsVUFQMkIsY0FPM0JBLFVBUDJCOztBQVM3QixNQUFNQyxPQUFPLEdBQUdKLFdBQVcsQ0FBQ0MsbUJBQUQsQ0FBM0I7QUFFQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxDQUFDUixRQUFRLENBQUNTLE9BQWIsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxRQUFHSixTQUFILEVBQWE7QUFDWEwsY0FBUSxDQUFDUyxPQUFULENBQWlCQyxNQUFqQjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNMLFNBQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0UscUVBQUMsdURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQVcsV0FBRyxFQUFFLGFBQWhCO0FBQStCLFdBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUcsQ0FBQ0UsT0FBRCxnQkFDRCxxRUFBQyxtREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLGdCQUtELHFFQUFDLDREQUFEO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxXQUFHLEVBQUVBLE9BQU8sQ0FBQ0ksU0FEZjtBQUVFLGFBQUssRUFBRSxHQUZUO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFBQSxrQkFBU0osT0FBTyxDQUFDSztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFRRTtBQUFBLGtCQUFPTCxPQUFPLENBQUNNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBdUJFLHFFQUFDLG9EQUFEO0FBQWMsV0FBSyxFQUFFLENBQUNOLE9BQUQsR0FBVyxJQUFYLEdBQWtCLEtBQXZDO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBQSxnQ0FDRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVJLHFFQUFDLDhDQUFEO0FBQUEsb0JBQ0csQ0FBQ0EsT0FBRCxnQkFDQyxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGdCQUdDLHFFQUFDLGlEQUFEO0FBQ0Usc0JBQVUsRUFBRTtBQUFDTyx3QkFBVSxFQUFFO0FBQWIsYUFEZDtBQUVFLHFCQUFTLEVBQUU7QUFBQ0Esd0JBQVUsRUFBRTtBQUFiLGFBRmI7QUFHRSx1QkFBVyxFQUFFO0FBQUNDLHlCQUFXLEVBQUU7QUFBZDtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBYUUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFpQkdSLE9BQU8saUJBQ047QUFDRSxXQUFHLEVBQUVQLFFBRFA7QUFFRSxXQUFHLEVBQUVPLE9BQU8sQ0FBQ1MsR0FGZjtBQUdFLGdCQUFRO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCSixlQXlCRSxxRUFBQyx3REFBRDtBQUFBLGdDQUNFLHFFQUFDLHFEQUFEO0FBQWUsa0JBQVEsRUFBRSxDQUFDVCxPQUExQjtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxjQUF0QjtBQUFxQyxlQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSxxRUFBQyxxREFBRDtBQUFlLGtCQUFRLEVBQUUsQ0FBQ0EsT0FBMUI7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUFrQixlQUFHLEVBQUMsb0JBQXRCO0FBQTJDLGVBQUcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFLHFFQUFDLGtEQUFEO0FBQ0Usa0JBQVEsRUFBRSxDQUFDQSxPQURiO0FBRUUsaUJBQU8sRUFBRUQsVUFGWDtBQUFBLG9CQUlHLENBQUNELFNBQUQsZ0JBQWEscUVBQUMsd0RBQUQ7QUFBa0IsZUFBRyxFQUFDLFdBQXRCO0FBQWtDLGVBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFiLGdCQUNDLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxZQUF0QjtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFpQkUscUVBQUMscURBQUQ7QUFBZSxrQkFBUSxFQUFFLENBQUNFLE9BQTFCO0FBQUEsaUNBQ0UscUVBQUMsd0RBQUQ7QUFBa0IsZUFBRyxFQUFDLGdCQUF0QjtBQUF1QyxlQUFHLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBcUJFLHFFQUFDLHFEQUFEO0FBQWUsa0JBQVEsRUFBRSxDQUFDQSxPQUExQjtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxhQUF0QjtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4RUQsQ0FuR0Q7O0dBQU1SLE07VUFRQUcsaUU7OztLQVJBSCxNO0FBcUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlMDM0MzFjYzBlODhhN2U3MDI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFNsaWRlclJDIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCB7IFxyXG4gIFBsYXllckNvbnRhaW5lcixcclxuICBQbGF5ZXJIZWFkZXIsXHJcbiAgUGxheWVySW1nLFxyXG4gIFBsYXllckVtcHR5LFxyXG4gIFBsYXllckN1cnJlbnRFcGlzb2RlLFxyXG4gIFBsYXllckZvb3RlcixcclxuICBQbGF5ZXJQcm9ncmVzcyxcclxuICBQcm9ncmVzc0N1cnJlbnQsXHJcbiAgRW1wdHlTbGlkZXIsXHJcbiAgU2xpZGVyLFxyXG4gIFBsYXllckJ1dHRvbnNEaXYsXHJcbiAgUGxheWVyQnV0dG9ucyxcclxuICBCdXR0b25QbGF5LFxyXG4gIFBsYXllckJ1dHRvbnNJbWcsIFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgXHJcbiAgICBlcGlzb2RlTGlzdCwgXHJcbiAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcclxuICAgIGlzUGxheWluZyxcclxuICAgIHRvZ2dsZVBsYXksIFxyXG4gIH0gPSB1c2VQbGF5ZXIoKTtcclxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihpc1BsYXlpbmcpe1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlZDtcclxuICAgIH1cclxuICB9ICxbaXNQbGF5aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGFpbmVyPlxyXG4gICAgICA8UGxheWVySGVhZGVyPlxyXG4gICAgICAgIDxQbGF5ZXJJbWcgc3JjPXtcInBsYXlpbmcuc3ZnXCJ9IGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckhlYWRlcj5cclxuXHJcbiAgICAgIHshZXBpc29kZSA/IChcclxuICAgICAgPFBsYXllckVtcHR5PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckVtcHR5PlxyXG4gICAgICApIDogKFxyXG4gICAgICA8UGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICBoZWlnaHQ9ezU5Mn1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgIDwvUGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICkgfVxyXG5cclxuICAgICAgPFBsYXllckZvb3RlciBlbXB0eT17IWVwaXNvZGUgPyB0cnVlIDogZmFsc2V9PlxyXG4gICAgICAgIDxQbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICAgIDxQcm9ncmVzc0N1cnJlbnQ+MDA6MDA8L1Byb2dyZXNzQ3VycmVudD5cclxuICAgICAgICAgICAgPFNsaWRlcj5cclxuICAgICAgICAgICAgICB7IWVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclJDIFxyXG4gICAgICAgICAgICAgICAgICB0cmFja1N0eWxlPXt7YmFja2dyb3VuZDogXCIjMDREMzYxXCJ9fVxyXG4gICAgICAgICAgICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiM5Rjc1RkZcIn19XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7Ym9yZGVyQ29sb3I6IFwiIzA0RDM2MVwifX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50PjAwOjAwPC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgPC9QbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICBcclxuICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8UGxheWVyQnV0dG9uc0Rpdj5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zIGRpc2FibGVkPXshZXBpc29kZX0+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwidm9sdGFyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25QbGF5IFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IWlzUGxheWluZyA/IDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cInRvY2FyXCIvPlxyXG4gICAgICAgICAgICA6IDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJ0b2NhclwiLz59XHJcbiAgICAgICAgICA8L0J1dHRvblBsYXk+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJhdmFuw6dhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cInJlcGV0aXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcbiAgICAgICAgPC9QbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICA8L1BsYXllckZvb3Rlcj5cclxuXHJcbiAgICA8L1BsYXllckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==