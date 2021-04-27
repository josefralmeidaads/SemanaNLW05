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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwic2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwiZGF0YSIsInBsYXlOZXh0IiwibGVuZ3RoIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUNPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQW9CLEVBQXBCLENBQW5DO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUE4QztBQUFBOztBQUFBLE1BQTNDQyxRQUEyQyxRQUEzQ0EsUUFBMkM7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLEVBQUQsQ0FENEI7QUFBQSxNQUNuRUMsV0FEbUU7QUFBQSxNQUN0REMsY0FEc0Q7O0FBQUEsbUJBRXhDRixzREFBUSxDQUFDLEtBQUQsQ0FGZ0M7QUFBQSxNQUVuRUcsU0FGbUU7QUFBQSxNQUV4REMsWUFGd0Q7O0FBQUEsbUJBR3BCSixzREFBUSxDQUFDLENBQUQsQ0FIWTtBQUFB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MThhYTRkMGU3NWE4MmFkOWUyMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgRXBpc29kZSB7XHJcbiAgaWQ6IHN0cmluZywgICAgICBcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIG1lbWJlcnM6IHN0cmluZyxcclxuICBwdWJsaXNoZWRfYXQ6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIHVybDogc3RyaW5nLFxyXG4gIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogc3RyaW5nLFxyXG4gIGR1cmF0aW9uRm9ybWF0dGVkOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFBsYXllckNvbnRleHREYXRhIHtcclxuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xyXG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICBpc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgaXNMb29waW5nOiBib29sZWFuO1xyXG4gIGlzU2h1ZmZsZTogYm9vbGVhbjtcclxuICBwbGF5OiAoZXBpc29kZSkgPT4gdm9pZDtcclxuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gIG9uUGxheUtleWJvYXJkOiAoZGF0YTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcclxuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgdG9nZ2xlTG9vcGluZzogKCkgPT4gdm9pZDtcclxuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbjogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQbGF5ZXJDb250ZXh0RGF0YT4oe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sIHNldEVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTaHVmZmxlLCBzZXRJc1NodWZmbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwbGF5ID0gKGVwaXNvZGU6IEVwaXNvZGUpID0+IHtcclxuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgc2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlMaXN0ID0gKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIHNldEVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVMb29waW5nID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU2h1ZmZsZSA9ICgpID0+IHtcclxuICAgIHNldElzU2h1ZmZsZSghaXNTaHVmZmxlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUGxheUtleWJvYXJkID0gKGRhdGE6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldElzUGxheWluZyhkYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlOZXh0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBpZihjdXJyZW50RXBpc29kZUluZGV4ID49IGVwaXNvZGVMaXN0Lmxlbmd0aCAtIDEpe1xyXG4gICAgICByZXR1cm4gc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgaWYoY3VycmVudEVwaXNvZGVJbmRleCA8PSAwKXtcclxuICAgICAgcmV0dXJuIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoZXBpc29kZUxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICBpc0xvb3BpbmcsXHJcbiAgICAgICAgaXNTaHVmZmxlLFxyXG4gICAgICAgIHBsYXksXHJcbiAgICAgICAgdG9nZ2xlUGxheSxcclxuICAgICAgICBvblBsYXlLZXlib2FyZCxcclxuICAgICAgICBwbGF5TGlzdCxcclxuICAgICAgICBwbGF5TmV4dCxcclxuICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgdG9nZ2xlTG9vcGluZyxcclxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgICAgIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGF5ZXIoKXtcclxuICAgY29uc3QgeyBcclxuICAgICBwbGF5LFxyXG4gICAgIHRvZ2dsZVBsYXksIFxyXG4gICAgIG9uUGxheUtleWJvYXJkLCBcclxuICAgICBwbGF5TGlzdCwgXHJcbiAgICAgcGxheU5leHQsIFxyXG4gICAgIHBsYXlQcmV2aW91cywgXHJcbiAgICAgdG9nZ2xlTG9vcGluZyAsIFxyXG4gICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgaXNMb29waW5nLCBcclxuICAgICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sIFxyXG4gICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgIGVwaXNvZGVMaXN0LCBcclxuICAgICBpc1BsYXlpbmcsXHJcbiAgICAgaXNTaHVmZmxlLCBcclxuICAgfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XHJcblxyXG4gICByZXR1cm4geyBcclxuICAgICBwbGF5LCBcclxuICAgICB0b2dnbGVQbGF5LCBcclxuICAgICBvblBsYXlLZXlib2FyZCwgXHJcbiAgICAgcGxheUxpc3QsIFxyXG4gICAgIHBsYXlOZXh0LCBcclxuICAgICBwbGF5UHJldmlvdXMsIFxyXG4gICAgIHRvZ2dsZUxvb3BpbmcsXHJcbiAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICBpc0xvb3BpbmcsIFxyXG4gICAgIGVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbiwgXHJcbiAgICAgY3VycmVudEVwaXNvZGVJbmRleCwgXHJcbiAgICAgZXBpc29kZUxpc3QsIFxyXG4gICAgIGlzUGxheWluZyxcclxuICAgICBpc1NodWZmbGUsIFxyXG4gICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=