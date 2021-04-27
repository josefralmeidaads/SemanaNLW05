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
/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ "./src/utils/convertDurationToTimeString.ts");


var _jsxFileName = "C:\\NLW05\\web\\src\\components\\Player\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Player = function Player() {
  _s();

  var _episode$durationForm;

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      isLooping = _usePlayer.isLooping,
      isShuffle = _usePlayer.isShuffle,
      togglePlay = _usePlayer.togglePlay,
      toggleLooping = _usePlayer.toggleLooping,
      toggleShuffle = _usePlayer.toggleShuffle,
      onPlayKeyboard = _usePlayer.onPlayKeyboard,
      playNext = _usePlayer.playNext,
      playPrevious = _usePlayer.playPrevious,
      enablePreviousAndNextButton = _usePlayer.enablePreviousAndNextButton;

  var episode = episodeList[currentEpisodeIndex];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerCurrentEpisode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: episode.thumbnail,
        width: 592,
        height: 592,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerFooter"], {
      empty: !episode ? true : false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["default"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], {
          children: !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
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
            lineNumber: 90,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: (_episode$durationForm = episode === null || episode === void 0 ? void 0 : episode.durationFormatted) !== null && _episode$durationForm !== void 0 ? _episode$durationForm : '00:00'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        ref: audioRef,
        src: episode.url,
        autoPlay: true,
        loop: isLooping,
        onPlay: function onPlay() {
          return onPlayKeyboard(true);
        },
        onPause: function onPause() {
          return onPlayKeyboard(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsDiv"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsShuffle"], {
          disabled: !episode || !enablePreviousAndNextButton,
          onClick: toggleShuffle,
          shuflle: isShuffle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode || !enablePreviousAndNextButton,
          onClick: playPrevious,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonPlay"], {
          disabled: !episode,
          onClick: togglePlay,
          children: !isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 27
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/pause.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode || !enablePreviousAndNextButton,
          onClick: playNext,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsLoop"], {
          disabled: !episode,
          onClick: toggleLooping,
          loop: isLooping,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/repeat.svg",
            alt: "repetir",
            color: "#000"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(Player, "lZMwOQDgLR1cFT7b1X/RUgSM4vs=", false, function () {
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

/***/ }),

/***/ "./src/utils/convertDurationToTimeString.ts":
/*!**************************************************!*\
  !*** ./src/utils/convertDurationToTimeString.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var convertDurationToTimeString = function convertDurationToTimeString(duration) {
  var hours = Math.floor(duration / 3600);
  var minutes = Math.floor(duration % 3600 / 60);
  var seconds = Math.floor(duration % 60);
  var timeString = [hours, minutes, seconds].map(function (unit) {
    return String(unit).padStart(2, '0');
  }).join(':');
  return timeString;
};

/* harmony default export */ __webpack_exports__["default"] = (convertDurationToTimeString);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZy50cyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsZSIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24iLCJlcGlzb2RlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImR1cmF0aW9uRm9ybWF0dGVkIiwidXJsIiwiZHVyYXRpb24iLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGltZVN0cmluZyIsIm1hcCIsInVuaXQiLCJTdHJpbmciLCJwYWRTdGFydCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBa0JBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFENkIsa0JBRUdDLHNEQUFRLENBQUMsQ0FBRCxDQUZYO0FBQUEsTUFF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QixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0ssUUFBRCxFQUE2QjtBQUMvRCxNQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxRQUFRLEdBQUcsSUFBdEIsQ0FBZDtBQUNBLE1BQU1JLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsR0FBRyxJQUFaLEdBQW9CLEVBQS9CLENBQWhCO0FBQ0EsTUFBTUssT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxHQUFHLEVBQXRCLENBQWhCO0FBRUEsTUFBTU0sVUFBVSxHQUFHLENBQUNMLEtBQUQsRUFBUUcsT0FBUixFQUFpQkMsT0FBakIsRUFDbEJFLEdBRGtCLENBQ2QsVUFBQ0MsSUFBRDtBQUFBLFdBQVVDLE1BQU0sQ0FBQ0QsSUFBRCxDQUFOLENBQWFFLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsQ0FBVjtBQUFBLEdBRGMsRUFFbEJDLElBRmtCLENBRWIsR0FGYSxDQUFuQjtBQUdBLFNBQU9MLFVBQVA7QUFDRCxDQVREOztBQVdlWCwwRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1MGFhMTMzNjNkZDYxMDIxN2RlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZXJSQyBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG5pbXBvcnQgeyBcclxuICBQbGF5ZXJDb250YWluZXIsXHJcbiAgUGxheWVySGVhZGVyLFxyXG4gIFBsYXllckltZyxcclxuICBQbGF5ZXJFbXB0eSxcclxuICBQbGF5ZXJDdXJyZW50RXBpc29kZSxcclxuICBQbGF5ZXJGb290ZXIsXHJcbiAgUGxheWVyUHJvZ3Jlc3MsXHJcbiAgUHJvZ3Jlc3NDdXJyZW50LFxyXG4gIEVtcHR5U2xpZGVyLFxyXG4gIFNsaWRlcixcclxuICBQbGF5ZXJCdXR0b25zRGl2LFxyXG4gIFBsYXllckJ1dHRvbnMsXHJcbiAgUGxheWVyQnV0dG9uc0xvb3AsXHJcbiAgUGxheWVyQnV0dG9uc1NodWZmbGUsXHJcbiAgQnV0dG9uUGxheSxcclxuICBQbGF5ZXJCdXR0b25zSW1nLCBcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgeyBcclxuICAgIGVwaXNvZGVMaXN0LCBcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgaXNMb29waW5nLFxyXG4gICAgaXNTaHVmZmxlLFxyXG4gICAgdG9nZ2xlUGxheSxcclxuICAgIHRvZ2dsZUxvb3BpbmcsXHJcbiAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgb25QbGF5S2V5Ym9hcmQsXHJcbiAgICBwbGF5TmV4dCxcclxuICAgIHBsYXlQcmV2aW91cyxcclxuICAgIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgXHJcbiAgfSA9IHVzZVBsYXllcigpO1xyXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzUGxheWluZyl7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSAsW2lzUGxheWluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRhaW5lcj5cclxuICAgICAgPFBsYXllckhlYWRlcj5cclxuICAgICAgICA8UGxheWVySW1nIHNyYz17XCJwbGF5aW5nLnN2Z1wifSBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmE8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJIZWFkZXI+XHJcblxyXG4gICAgICB7IWVwaXNvZGUgPyAoXHJcbiAgICAgIDxQbGF5ZXJFbXB0eT5cclxuICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJFbXB0eT5cclxuICAgICAgKSA6IChcclxuICAgICAgPFBsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICB3aWR0aD17NTkyfVxyXG4gICAgICAgICAgaGVpZ2h0PXs1OTJ9XHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICA8L1BsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICApIH1cclxuXHJcbiAgICAgIDxQbGF5ZXJGb290ZXIgZW1wdHk9eyFlcGlzb2RlID8gdHJ1ZSA6IGZhbHNlfT5cclxuICAgICAgICA8UGxheWVyUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50Pntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcocHJvZ3Jlc3MpfTwvUHJvZ3Jlc3NDdXJyZW50PlxyXG4gICAgICAgICAgICA8U2xpZGVyPlxyXG4gICAgICAgICAgICAgIHshZXBpc29kZSA/IChcclxuICAgICAgICAgICAgICAgIDxFbXB0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyUkMgXHJcbiAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3tiYWNrZ3JvdW5kOiBcIiMwNEQzNjFcIn19XHJcbiAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17e2JhY2tncm91bmQ6IFwiIzlGNzVGRlwifX1cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3tib3JkZXJDb2xvcjogXCIjMDREMzYxXCJ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgIDxQcm9ncmVzc0N1cnJlbnQ+e2VwaXNvZGU/LmR1cmF0aW9uRm9ybWF0dGVkID8/ICcwMDowMCd9PC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgPC9QbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICBcclxuICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICA8YXVkaW8gXHJcbiAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS51cmx9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgIGxvb3A9e2lzTG9vcGluZ31cclxuICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBvblBsYXlLZXlib2FyZCh0cnVlKX1cclxuICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gb25QbGF5S2V5Ym9hcmQoZmFsc2UpfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPFBsYXllckJ1dHRvbnNEaXY+XHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9uc1NodWZmbGUgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCAhZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9ufSBcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2h1ZmZsZX1cclxuICAgICAgICAgICAgc2h1ZmxsZT17aXNTaHVmZmxlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zU2h1ZmZsZT5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbn0gb25DbGljaz17cGxheVByZXZpb3VzfT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwidm9sdGFyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25QbGF5IFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IWlzUGxheWluZyA/IDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cInRvY2FyXCIvPlxyXG4gICAgICAgICAgICA6IDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wYXVzZS5zdmdcIiBhbHQ9XCJ0b2NhclwiLz59XHJcbiAgICAgICAgICA8L0J1dHRvblBsYXk+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b259IG9uQ2xpY2s9e3BsYXlOZXh0fT5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXktbmV4dC5zdmdcIiBhbHQ9XCJhdmFuw6dhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9uc0xvb3BcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfSBcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTG9vcGluZ31cclxuICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cInJlcGV0aXJcIiBjb2xvcj1cIiMwMDBcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnNMb29wPlxyXG4gICAgICAgIDwvUGxheWVyQnV0dG9uc0Rpdj5cclxuICAgICAgPC9QbGF5ZXJGb290ZXI+XHJcblxyXG4gICAgPC9QbGF5ZXJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyA9IChkdXJhdGlvbjogbnVtYmVyKTpzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIDM2MDApO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkdXJhdGlvbiAlIDM2MDApIC8gNjApO1xyXG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApO1xyXG5cclxuICBjb25zdCB0aW1lU3RyaW5nID0gW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzXVxyXG4gIC5tYXAoKHVuaXQpID0+IFN0cmluZyh1bml0KS5wYWRTdGFydCgyLCAnMCcpKVxyXG4gIC5qb2luKCc6Jyk7XHJcbiAgcmV0dXJuIHRpbWVTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZzsiXSwic291cmNlUm9vdCI6IiJ9