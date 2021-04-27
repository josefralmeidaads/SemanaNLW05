webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProvider", function() { return PlayerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayer", function() { return usePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\NLW05\\web\\src\\contexts\\PlayerContext.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var PlayerProvider = function PlayerProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState2[0],
      setIsPlaying = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState3[0],
      setCurrentEpisodeIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      enablePreviousAndNextButton = _useState4[0],
      setEnablePreviousAndNextButton = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLooping = _useState5[0],
      setIsLooping = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isShuffle = _useState6[0],
      setIsShuffle = _useState6[1];

  var play = function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
    setEnablePreviousAndNextButton(false);
  };

  var playList = function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
    setEnablePreviousAndNextButton(true);
  };

  var togglePlay = function togglePlay() {
    setIsPlaying(!isPlaying);
  };

  var toggleLooping = function toggleLooping() {
    setIsLooping(!isLooping);
  };

  var toggleShuffle = function toggleShuffle() {
    setIsShuffle(!isShuffle);
  };

  var onPlayKeyboard = function onPlayKeyboard(data) {
    setIsPlaying(data);
  };

  var playNext = function playNext() {
    if (currentEpisodeIndex >= episodeList.length - 1) {
      return setCurrentEpisodeIndex(0);
    }

    setCurrentEpisodeIndex(currentEpisodeIndex + 1);
  };

  var playPrevious = function playPrevious() {
    if (currentEpisodeIndex <= 0) {
      return setCurrentEpisodeIndex(episodeList.length - 1);
    }

    setCurrentEpisodeIndex(currentEpisodeIndex - 1);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      currentEpisodeIndex: currentEpisodeIndex,
      episodeList: episodeList,
      isPlaying: isPlaying,
      isLooping: isLooping,
      isShuffle: isShuffle,
      play: play,
      togglePlay: togglePlay,
      onPlayKeyboard: onPlayKeyboard,
      playList: playList,
      playNext: playNext,
      playPrevious: playPrevious,
      toggleLooping: toggleLooping,
      toggleShuffle: toggleShuffle,
      enablePreviousAndNextButton: enablePreviousAndNextButton
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, _this);
};

_s(PlayerProvider, "xHay41yZ46aCNWzFpJ6oxSLo/m8=");

_c = PlayerProvider;
function usePlayer() {
  _s2();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext),
      play = _useContext.play,
      togglePlay = _useContext.togglePlay,
      onPlayKeyboard = _useContext.onPlayKeyboard,
      playList = _useContext.playList,
      playNext = _useContext.playNext,
      playPrevious = _useContext.playPrevious,
      toggleLooping = _useContext.toggleLooping,
      toggleShuffle = _useContext.toggleShuffle,
      isLooping = _useContext.isLooping,
      enablePreviousAndNextButton = _useContext.enablePreviousAndNextButton,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      episodeList = _useContext.episodeList,
      isPlaying = _useContext.isPlaying,
      isShuffle = _useContext.isShuffle;

  return {
    play: play,
    togglePlay: togglePlay,
    onPlayKeyboard: onPlayKeyboard,
    playList: playList,
    playNext: playNext,
    playPrevious: playPrevious,
    toggleLooping: toggleLooping,
    toggleShuffle: toggleShuffle,
    isLooping: isLooping,
    enablePreviousAndNextButton: enablePreviousAndNextButton,
    currentEpisodeIndex: currentEpisodeIndex,
    episodeList: episodeList,
    isPlaying: isPlaying,
    isShuffle: isShuffle
  };
}

_s2(usePlayer, "cXc/oYn1pIBH8GspJUZnL1lv5LM=");

var _c;

$RefreshReg$(_c, "PlayerProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwic2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwiZGF0YSIsInBsYXlOZXh0IiwibGVuZ3RoIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUNPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQW9CLEVBQXBCLENBQW5DO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUE4QztBQUFBOztBQUFBLE1BQTNDQyxRQUEyQyxRQUEzQ0EsUUFBMkM7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLEVBQUQsQ0FENEI7QUFBQSxNQUNuRUMsV0FEbUU7QUFBQSxNQUN0REMsY0FEc0Q7O0FBQUEsbUJBRXhDRixzREFBUSxDQUFDLEtBQUQsQ0FGZ0M7QUFBQSxNQUVuRUcsU0FGbUU7QUFBQSxNQUV4REMsWUFGd0Q7O0FBQUEsbUJBR3BCSixzREFBUSxDQUFDLENBQUQsQ0FIWTtBQUFB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ZGVzL1tzbHVnXS4xOGFhNGQwZTc1YTgyYWQ5ZTIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBFcGlzb2RlIHtcclxuICBpZDogc3RyaW5nLCAgICAgIFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgbWVtYmVyczogc3RyaW5nLFxyXG4gIHB1Ymxpc2hlZF9hdDogc3RyaW5nLFxyXG4gIHRodW1ibmFpbDogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgZHVyYXRpb246IG51bWJlcixcclxuICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBzdHJpbmcsXHJcbiAgZHVyYXRpb25Gb3JtYXR0ZWQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQ29udGV4dERhdGEge1xyXG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIGlzUGxheWluZzogYm9vbGVhbjtcclxuICBpc0xvb3Bpbmc6IGJvb2xlYW47XHJcbiAgaXNTaHVmZmxlOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbiAgb25QbGF5S2V5Ym9hcmQ6IChkYXRhOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xyXG4gIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZDtcclxuICB0b2dnbGVMb29waW5nOiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVNodWZmbGU6ICgpID0+IHZvaWQ7XHJcbiAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFBsYXllckNvbnRleHREYXRhPih7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgc2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1NodWZmbGUsIHNldElzU2h1ZmZsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHBsYXkgPSAoZXBpc29kZTogRXBpc29kZSkgPT4ge1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICBzZXRFbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheUxpc3QgPSAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgc2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxvb3BpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaHVmZmxlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaHVmZmxlKCFpc1NodWZmbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25QbGF5S2V5Ym9hcmQgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0SXNQbGF5aW5nKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheU5leHQgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKGN1cnJlbnRFcGlzb2RlSW5kZXggPj0gZXBpc29kZUxpc3QubGVuZ3RoIC0gMSl7XHJcbiAgICAgIHJldHVybiBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5UHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZihjdXJyZW50RXBpc29kZUluZGV4IDw9IDApe1xyXG4gICAgICByZXR1cm4gc2V0Q3VycmVudEVwaXNvZGVJbmRleChlcGlzb2RlTGlzdC5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGF5ZXJDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXHJcbiAgICAgICAgZXBpc29kZUxpc3QsXHJcbiAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICBpc1NodWZmbGUsXHJcbiAgICAgICAgcGxheSxcclxuICAgICAgICB0b2dnbGVQbGF5LFxyXG4gICAgICAgIG9uUGxheUtleWJvYXJkLFxyXG4gICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgIHBsYXlOZXh0LFxyXG4gICAgICAgIHBsYXlQcmV2aW91cyxcclxuICAgICAgICB0b2dnbGVMb29waW5nLFxyXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgICAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXllcigpe1xyXG4gICBjb25zdCB7IFxyXG4gICAgIHBsYXksXHJcbiAgICAgdG9nZ2xlUGxheSwgXHJcbiAgICAgb25QbGF5S2V5Ym9hcmQsIFxyXG4gICAgIHBsYXlMaXN0LCBcclxuICAgICBwbGF5TmV4dCwgXHJcbiAgICAgcGxheVByZXZpb3VzLCBcclxuICAgICB0b2dnbGVMb29waW5nICwgXHJcbiAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICBpc0xvb3BpbmcsIFxyXG4gICAgIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgXHJcbiAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgIGlzUGxheWluZyxcclxuICAgICBpc1NodWZmbGUsIFxyXG4gICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgIHJldHVybiB7IFxyXG4gICAgIHBsYXksIFxyXG4gICAgIHRvZ2dsZVBsYXksIFxyXG4gICAgIG9uUGxheUtleWJvYXJkLCBcclxuICAgICBwbGF5TGlzdCwgXHJcbiAgICAgcGxheU5leHQsIFxyXG4gICAgIHBsYXlQcmV2aW91cywgXHJcbiAgICAgdG9nZ2xlTG9vcGluZyxcclxuICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgIGlzTG9vcGluZywgXHJcbiAgICAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLCBcclxuICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcclxuICAgICBlcGlzb2RlTGlzdCwgXHJcbiAgICAgaXNQbGF5aW5nLFxyXG4gICAgIGlzU2h1ZmZsZSwgXHJcbiAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==