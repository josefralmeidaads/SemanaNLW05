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
          children: (_episode$durationForm = episode === null || episode === void 0 ? void 0 : episode.durationFormatted) !== null && _episode$durationForm !== void 0 ? _episode$durationForm : '00:00:00'
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsZSIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24iLCJlcGlzb2RlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImR1cmF0aW9uRm9ybWF0dGVkIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWtCQTs7QUFFQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRDZCLGtCQUVHQyxzREFBUSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BRXRCQyxRQUZzQjtBQUFBLE1BRVpDLFdBRlk7O0FBQUEsbUJBaUJ6QkMseUVBQVMsRUFqQmdCO0FBQUEsTUFLM0JDLFdBTDJCLGNBSzNCQSxXQUwyQjtBQUFBLE1BTTNCQyxtQkFOMkIsY0FNM0JBLG1CQU4yQjtBQUFBLE1BTzNCQyxTQVAyQixjQU8zQkEsU0FQMkI7QUFBQSxNQVEzQkMsU0FSMkIs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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQXFCRSxxRUFBQyxxREFBRDtBQUFlLGtCQUFRLEVBQUUsQ0FBQ1UsT0FBRCxJQUFZLENBQUNELDJCQUF0QztBQUFtRSxpQkFBTyxFQUFFRixRQUE1RTtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQWtCLGVBQUcsRUFBQyxnQkFBdEI7QUFBdUMsZUFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixlQXlCRSxxRUFBQyx5REFBRDtBQUNFLGtCQUFRLEVBQUUsQ0FBQ0csT0FEYjtBQUVFLGlCQUFPLEVBQUVOLGFBRlg7QUFHRSxjQUFJLEVBQUVILFNBSFI7QUFBQSxpQ0FLRSxxRUFBQyx3REFBRDtBQUFrQixlQUFHLEVBQUMsYUFBdEI7QUFBb0MsZUFBRyxFQUFDLFNBQXhDO0FBQWtELGlCQUFLLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5RkQsQ0F6SEQ7O0dBQU1WLE07VUFpQkFNLGlFOzs7S0FqQkFOLE07QUEySFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWYwZDJhNTFmMGQ1MmQwNWZhZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFNsaWRlclJDIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCB7IFxyXG4gIFBsYXllckNvbnRhaW5lcixcclxuICBQbGF5ZXJIZWFkZXIsXHJcbiAgUGxheWVySW1nLFxyXG4gIFBsYXllckVtcHR5LFxyXG4gIFBsYXllckN1cnJlbnRFcGlzb2RlLFxyXG4gIFBsYXllckZvb3RlcixcclxuICBQbGF5ZXJQcm9ncmVzcyxcclxuICBQcm9ncmVzc0N1cnJlbnQsXHJcbiAgRW1wdHlTbGlkZXIsXHJcbiAgU2xpZGVyLFxyXG4gIFBsYXllckJ1dHRvbnNEaXYsXHJcbiAgUGxheWVyQnV0dG9ucyxcclxuICBQbGF5ZXJCdXR0b25zTG9vcCxcclxuICBQbGF5ZXJCdXR0b25zU2h1ZmZsZSxcclxuICBCdXR0b25QbGF5LFxyXG4gIFBsYXllckJ1dHRvbnNJbWcsIFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCB7IFxyXG4gICAgZXBpc29kZUxpc3QsIFxyXG4gICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICBpc1BsYXlpbmcsXHJcbiAgICBpc0xvb3BpbmcsXHJcbiAgICBpc1NodWZmbGUsXHJcbiAgICB0b2dnbGVQbGF5LFxyXG4gICAgdG9nZ2xlTG9vcGluZyxcclxuICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICBvblBsYXlLZXlib2FyZCxcclxuICAgIHBsYXlOZXh0LFxyXG4gICAgcGxheVByZXZpb3VzLFxyXG4gICAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLCBcclxuICB9ID0gdXNlUGxheWVyKCk7XHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWF1ZGlvUmVmLmN1cnJlbnQpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNQbGF5aW5nKXtcclxuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgIH1cclxuICB9ICxbaXNQbGF5aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGFpbmVyPlxyXG4gICAgICA8UGxheWVySGVhZGVyPlxyXG4gICAgICAgIDxQbGF5ZXJJbWcgc3JjPXtcInBsYXlpbmcuc3ZnXCJ9IGFsdD1cIlRvY2FuZG8gYWdvcmFcIiAvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckhlYWRlcj5cclxuXHJcbiAgICAgIHshZXBpc29kZSA/IChcclxuICAgICAgPFBsYXllckVtcHR5PlxyXG4gICAgICAgIDxzdHJvbmc+U2VsZWNpb25lIHVtIHBvZGNhc3QgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICA8L1BsYXllckVtcHR5PlxyXG4gICAgICApIDogKFxyXG4gICAgICA8UGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICBoZWlnaHQ9ezU5Mn1cclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgIDwvUGxheWVyQ3VycmVudEVwaXNvZGU+XHJcbiAgICAgICkgfVxyXG5cclxuICAgICAgPFBsYXllckZvb3RlciBlbXB0eT17IWVwaXNvZGUgPyB0cnVlIDogZmFsc2V9PlxyXG4gICAgICAgIDxQbGF5ZXJQcm9ncmVzcz5cclxuICAgICAgICAgIDxQcm9ncmVzc0N1cnJlbnQ+e2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhwcm9ncmVzcyl9PC9Qcm9ncmVzc0N1cnJlbnQ+XHJcbiAgICAgICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICAgICAgeyFlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgPEVtcHR5U2xpZGVyIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxTbGlkZXJSQyBcclxuICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17e2JhY2tncm91bmQ6IFwiIzA0RDM2MVwifX1cclxuICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7YmFja2dyb3VuZDogXCIjOUY3NUZGXCJ9fVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiBcIiMwNEQzNjFcIn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPFByb2dyZXNzQ3VycmVudD57ZXBpc29kZT8uZHVyYXRpb25Gb3JtYXR0ZWQgPz8gJzAwOjAwOjAwJ308L1Byb2dyZXNzQ3VycmVudD5cclxuICAgICAgICA8L1BsYXllclByb2dyZXNzPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cclxuICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgICBvblBsYXk9eygpID0+IG9uUGxheUtleWJvYXJkKHRydWUpfVxyXG4gICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBvblBsYXlLZXlib2FyZChmYWxzZSl9IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8UGxheWVyQnV0dG9uc0Rpdj5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zU2h1ZmZsZSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b259IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaHVmZmxlfVxyXG4gICAgICAgICAgICBzaHVmbGxlPXtpc1NodWZmbGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnNTaHVmZmxlPlxyXG5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zIGRpc2FibGVkPXshZXBpc29kZSB8fCAhZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9ufSBvbkNsaWNrPXtwbGF5UHJldmlvdXN9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJ2b2x0YXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblBsYXkgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshaXNQbGF5aW5nID8gPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwidG9jYXJcIi8+XHJcbiAgICAgICAgICAgIDogPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cInRvY2FyXCIvPn1cclxuICAgICAgICAgIDwvQnV0dG9uUGxheT5cclxuXHJcbiAgICAgICAgICA8UGxheWVyQnV0dG9ucyBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbn0gb25DbGljaz17cGxheU5leHR9PlxyXG4gICAgICAgICAgICA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cImF2YW7Dp2FyXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zPlxyXG5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zTG9vcFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29waW5nfVxyXG4gICAgICAgICAgICBsb29wPXtpc0xvb3Bpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwicmVwZXRpclwiIGNvbG9yPVwiIzAwMFwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9uc0xvb3A+XHJcbiAgICAgICAgPC9QbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICA8L1BsYXllckZvb3Rlcj5cclxuXHJcbiAgICA8L1BsYXllckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==