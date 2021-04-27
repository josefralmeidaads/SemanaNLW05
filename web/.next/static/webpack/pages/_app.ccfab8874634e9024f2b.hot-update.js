webpackHotUpdate_N_E("pages/_app",{

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
    if (isShuffle) {
      var nextEpisode = Math.floor(Math.random() * episodeList.length);
      return setCurrentEpisodeIndex(nextEpisode);
    } else {
      if (currentEpisodeIndex >= episodeList.length - 1) {
        return setCurrentEpisodeIndex(0);
      }

      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
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
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwic2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwiZGF0YSIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQ08sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBb0IsRUFBcEIsQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsRUFBRCxDQUQ0QjtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSxtQkFFeENGLHNEQUFRLENBQUMsS0FBRCxDQUZnQztBQUFBLE1BRW5FRyxTQUZtRTtBQUFBLE1BRXhEQyxZQUZ3RDs7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LEVBQWJBLGFBUks7QUFTTFgsYUFBUyxFQUFUQSxTQVRLO0FBVUxGLCtCQUEyQixFQUEzQkEsMkJBVks7QUFXTEYsdUJBQW1CLEVBQW5CQSxtQkFYSztBQVlMSixlQUFXLEVBQVhBLFdBWks7QUFhTEUsYUFBUyxFQUFUQSxTQWJLO0FBY0xRLGFBQVMsRUFBVEE7QUFkSyxHQUFQO0FBZ0JGOztJQWxDZW1CLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jY2ZhYjg4NzQ2MzRlOTAyNGYyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBFcGlzb2RlIHtcclxuICBpZDogc3RyaW5nLCAgICAgIFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgbWVtYmVyczogc3RyaW5nLFxyXG4gIHB1Ymxpc2hlZF9hdDogc3RyaW5nLFxyXG4gIHRodW1ibmFpbDogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgZHVyYXRpb246IG51bWJlcixcclxuICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBzdHJpbmcsXHJcbiAgZHVyYXRpb25Gb3JtYXR0ZWQ6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQ29udGV4dERhdGEge1xyXG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XHJcbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gIGlzUGxheWluZzogYm9vbGVhbjtcclxuICBpc0xvb3Bpbmc6IGJvb2xlYW47XHJcbiAgaXNTaHVmZmxlOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbiAgb25QbGF5S2V5Ym9hcmQ6IChkYXRhOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xyXG4gIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZDtcclxuICB0b2dnbGVMb29waW5nOiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZVNodWZmbGU6ICgpID0+IHZvaWQ7XHJcbiAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFBsYXllckNvbnRleHREYXRhPih7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgc2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1NodWZmbGUsIHNldElzU2h1ZmZsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHBsYXkgPSAoZXBpc29kZTogRXBpc29kZSkgPT4ge1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICBzZXRFbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheUxpc3QgPSAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgc2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcclxuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxvb3BpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTaHVmZmxlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaHVmZmxlKCFpc1NodWZmbGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25QbGF5S2V5Ym9hcmQgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0SXNQbGF5aW5nKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZihpc1NodWZmbGUpe1xyXG4gICAgICBjb25zdCBuZXh0RXBpc29kZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgIHJldHVybiBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgaWYoY3VycmVudEVwaXNvZGVJbmRleCA+PSBlcGlzb2RlTGlzdC5sZW5ndGggLSAxKXtcclxuICAgICAgICByZXR1cm4gc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlQcmV2aW91cyA9ICgpID0+IHtcclxuICAgIGlmKGN1cnJlbnRFcGlzb2RlSW5kZXggPD0gMCl7XHJcbiAgICAgIHJldHVybiBzZXRDdXJyZW50RXBpc29kZUluZGV4KGVwaXNvZGVMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBpc1BsYXlpbmcsXHJcbiAgICAgICAgaXNMb29waW5nLFxyXG4gICAgICAgIGlzU2h1ZmZsZSxcclxuICAgICAgICBwbGF5LFxyXG4gICAgICAgIHRvZ2dsZVBsYXksXHJcbiAgICAgICAgb25QbGF5S2V5Ym9hcmQsXHJcbiAgICAgICAgcGxheUxpc3QsXHJcbiAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIHRvZ2dsZUxvb3BpbmcsXHJcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICAgICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGxheWVyKCl7XHJcbiAgIGNvbnN0IHsgXHJcbiAgICAgcGxheSxcclxuICAgICB0b2dnbGVQbGF5LCBcclxuICAgICBvblBsYXlLZXlib2FyZCwgXHJcbiAgICAgcGxheUxpc3QsIFxyXG4gICAgIHBsYXlOZXh0LCBcclxuICAgICBwbGF5UHJldmlvdXMsIFxyXG4gICAgIHRvZ2dsZUxvb3BpbmcgLCBcclxuICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgIGlzTG9vcGluZywgXHJcbiAgICAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLCBcclxuICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcclxuICAgICBlcGlzb2RlTGlzdCwgXHJcbiAgICAgaXNQbGF5aW5nLFxyXG4gICAgIGlzU2h1ZmZsZSwgXHJcbiAgIH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG5cclxuICAgcmV0dXJuIHsgXHJcbiAgICAgcGxheSwgXHJcbiAgICAgdG9nZ2xlUGxheSwgXHJcbiAgICAgb25QbGF5S2V5Ym9hcmQsIFxyXG4gICAgIHBsYXlMaXN0LCBcclxuICAgICBwbGF5TmV4dCwgXHJcbiAgICAgcGxheVByZXZpb3VzLCBcclxuICAgICB0b2dnbGVMb29waW5nLFxyXG4gICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgaXNMb29waW5nLCBcclxuICAgICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sIFxyXG4gICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgIGVwaXNvZGVMaXN0LCBcclxuICAgICBpc1BsYXlpbmcsXHJcbiAgICAgaXNTaHVmZmxlLCBcclxuICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9