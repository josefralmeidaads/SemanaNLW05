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

  var setupProgressListener = function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', function () {
      setProgress(audioRef.current.currentTime);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerImg"], {
        src: "playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerEmpty"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerCurrentEpisode"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: episode.thumbnail,
        width: 592,
        height: 592,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerFooter"], {
      empty: !episode ? true : false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerProgress"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["default"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["Slider"], {
          children: !episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["EmptySlider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
            max: episode.duration,
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
            lineNumber: 98,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ProgressCurrent"], {
          children: (_episode$durationForm = episode === null || episode === void 0 ? void 0 : episode.durationFormatted) !== null && _episode$durationForm !== void 0 ? _episode$durationForm : '00:00:00'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
        },
        onLoadedMetadata: setupProgressListener
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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
            lineNumber: 127,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode || !enablePreviousAndNextButton,
          onClick: playPrevious,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-previous.svg",
            alt: "voltar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonPlay"], {
          disabled: !episode,
          onClick: togglePlay,
          children: !isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 27
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/pause.svg",
            alt: "tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtons"], {
          disabled: !episode || !enablePreviousAndNextButton,
          onClick: playNext,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_6__["PlayerButtonsImg"], {
            src: "/play-next.svg",
            alt: "avan\xE7ar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsZSIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24iLCJlcGlzb2RlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInNldHVwUHJvZ3Jlc3NMaXN0ZW5lciIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBa0JBOztBQUVBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFENkIsa0JBRUdDLHNEQUFRLENBQUMsQ0FBRCxDQUZYO0FBQUEsTUFFdEJDLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSxtQkFpQnpCQyx5RUFBUyxFQWpCZ0I7QUFBQSxNQUszQkMsV0FMMkIsY0FLM0JBLFdBTDJCO0FBQUEsTUFNM0JDLG1C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LGFBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkZELENBbklEOztHQUFNVixNO1VBaUJBTSxpRTs7O0tBakJBTixNO0FBcUlTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA1M2ZhZGYwZTcxMjA5Mzc2ZjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBTbGlkZXJSQyBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG5pbXBvcnQgeyBcclxuICBQbGF5ZXJDb250YWluZXIsXHJcbiAgUGxheWVySGVhZGVyLFxyXG4gIFBsYXllckltZyxcclxuICBQbGF5ZXJFbXB0eSxcclxuICBQbGF5ZXJDdXJyZW50RXBpc29kZSxcclxuICBQbGF5ZXJGb290ZXIsXHJcbiAgUGxheWVyUHJvZ3Jlc3MsXHJcbiAgUHJvZ3Jlc3NDdXJyZW50LFxyXG4gIEVtcHR5U2xpZGVyLFxyXG4gIFNsaWRlcixcclxuICBQbGF5ZXJCdXR0b25zRGl2LFxyXG4gIFBsYXllckJ1dHRvbnMsXHJcbiAgUGxheWVyQnV0dG9uc0xvb3AsXHJcbiAgUGxheWVyQnV0dG9uc1NodWZmbGUsXHJcbiAgQnV0dG9uUGxheSxcclxuICBQbGF5ZXJCdXR0b25zSW1nLCBcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgeyBcclxuICAgIGVwaXNvZGVMaXN0LCBcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgaXNMb29waW5nLFxyXG4gICAgaXNTaHVmZmxlLFxyXG4gICAgdG9nZ2xlUGxheSxcclxuICAgIHRvZ2dsZUxvb3BpbmcsXHJcbiAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgb25QbGF5S2V5Ym9hcmQsXHJcbiAgICBwbGF5TmV4dCxcclxuICAgIHBsYXlQcmV2aW91cyxcclxuICAgIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgXHJcbiAgfSA9IHVzZVBsYXllcigpO1xyXG4gIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzUGxheWluZyl7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSAsW2lzUGxheWluZ10pO1xyXG5cclxuICBjb25zdCBzZXR1cFByb2dyZXNzTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XHJcbiAgICAgIHNldFByb2dyZXNzKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRhaW5lcj5cclxuICAgICAgPFBsYXllckhlYWRlcj5cclxuICAgICAgICA8UGxheWVySW1nIHNyYz17XCJwbGF5aW5nLnN2Z1wifSBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmE8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJIZWFkZXI+XHJcblxyXG4gICAgICB7IWVwaXNvZGUgPyAoXHJcbiAgICAgIDxQbGF5ZXJFbXB0eT5cclxuICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cclxuICAgICAgPC9QbGF5ZXJFbXB0eT5cclxuICAgICAgKSA6IChcclxuICAgICAgPFBsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICB3aWR0aD17NTkyfVxyXG4gICAgICAgICAgaGVpZ2h0PXs1OTJ9XHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICA8L1BsYXllckN1cnJlbnRFcGlzb2RlPlxyXG4gICAgICApIH1cclxuXHJcbiAgICAgIDxQbGF5ZXJGb290ZXIgZW1wdHk9eyFlcGlzb2RlID8gdHJ1ZSA6IGZhbHNlfT5cclxuICAgICAgICA8UGxheWVyUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NDdXJyZW50Pntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcocHJvZ3Jlc3MpfTwvUHJvZ3Jlc3NDdXJyZW50PlxyXG4gICAgICAgICAgICA8U2xpZGVyPlxyXG4gICAgICAgICAgICAgIHshZXBpc29kZSA/IChcclxuICAgICAgICAgICAgICAgIDxFbXB0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyUkMgXHJcbiAgICAgICAgICAgICAgICAgIG1heD17ZXBpc29kZS5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17e2JhY2tncm91bmQ6IFwiIzA0RDM2MVwifX1cclxuICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7YmFja2dyb3VuZDogXCIjOUY3NUZGXCJ9fVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiBcIiMwNEQzNjFcIn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPFByb2dyZXNzQ3VycmVudD57ZXBpc29kZT8uZHVyYXRpb25Gb3JtYXR0ZWQgPz8gJzAwOjAwOjAwJ308L1Byb2dyZXNzQ3VycmVudD5cclxuICAgICAgICA8L1BsYXllclByb2dyZXNzPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgIDxhdWRpbyBcclxuICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cclxuICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgICBvblBsYXk9eygpID0+IG9uUGxheUtleWJvYXJkKHRydWUpfVxyXG4gICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBvblBsYXlLZXlib2FyZChmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9e3NldHVwUHJvZ3Jlc3NMaXN0ZW5lcn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxQbGF5ZXJCdXR0b25zRGl2PlxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnNTaHVmZmxlIFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbn0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICAgIHNodWZsbGU9e2lzU2h1ZmZsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9uc1NodWZmbGU+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnMgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b259IG9uQ2xpY2s9e3BsYXlQcmV2aW91c30+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cInZvbHRhclwiLz5cclxuICAgICAgICAgIDwvUGxheWVyQnV0dG9ucz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uUGxheSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfSBcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFpc1BsYXlpbmcgPyA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJ0b2NhclwiLz5cclxuICAgICAgICAgICAgOiA8UGxheWVyQnV0dG9uc0ltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwidG9jYXJcIi8+fVxyXG4gICAgICAgICAgPC9CdXR0b25QbGF5PlxyXG5cclxuICAgICAgICAgIDxQbGF5ZXJCdXR0b25zIGRpc2FibGVkPXshZXBpc29kZSB8fCAhZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9ufSBvbkNsaWNrPXtwbGF5TmV4dH0+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJCdXR0b25zSW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiYXZhbsOnYXJcIi8+XHJcbiAgICAgICAgICA8L1BsYXllckJ1dHRvbnM+XHJcblxyXG4gICAgICAgICAgPFBsYXllckJ1dHRvbnNMb29wXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxvb3Bpbmd9XHJcbiAgICAgICAgICAgIGxvb3A9e2lzTG9vcGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsYXllckJ1dHRvbnNJbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJyZXBldGlyXCIgY29sb3I9XCIjMDAwXCIvPlxyXG4gICAgICAgICAgPC9QbGF5ZXJCdXR0b25zTG9vcD5cclxuICAgICAgICA8L1BsYXllckJ1dHRvbnNEaXY+XHJcbiAgICAgIDwvUGxheWVyRm9vdGVyPlxyXG5cclxuICAgIDwvUGxheWVyQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9