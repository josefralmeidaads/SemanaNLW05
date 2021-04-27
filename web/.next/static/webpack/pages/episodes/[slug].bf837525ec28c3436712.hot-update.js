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
    if (isShuffle) {
      var nextEpisode = Math.floor(Math.random() * episodeList.length);
      return setCurrentEpisodeIndex(nextEpisode);
    } else {
      if (currentEpisodeIndex <= 0) {
        return setCurrentEpisodeIndex(episodeList.length - 1);
      }

      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
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
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwic2V0RW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29waW5nIiwidG9nZ2xlU2h1ZmZsZSIsIm9uUGxheUtleWJvYXJkIiwiZGF0YSIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQ08sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBb0IsRUFBcEIsQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQzs7QUFBQSxrQkFDcENDLHNEQUFRLENBQUMsRUFBRCxDQUQ0QjtBQUFBLE1BQ25FQyxXQURtRTtBQUFBLE1BQ3REQyxjQURzRDs7QUFBQSxtQkFFeENGLHNEQUFRLENBQUMsS0FBRCxDQUZnQztBQUFBLE1BRW5FRyxTQUZtRTtBQUFBLE1BRXhEQyxZQUZ3RDs7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QU87QUFDTEUsUUFBSSxFQUFKQSxJQURLO0FBRUxLLGNBQVUsRUFBVkEsVUFGSztBQUdMRyxrQkFBYyxFQUFkQSxjQUhLO0FBSUxOLFlBQVEsRUFBUkEsUUFKSztBQUtMUSxZQUFRLEVBQVJBLFFBTEs7QUFNTE0sZ0JBQVksRUFBWkEsWUFOSztBQU9MVixpQkFBYSxFQUFiQSxhQVBLO0FBUUxDLGlCQUFhLEVBQWJBLGFBUks7QUFTTFgsYUFBUyxFQUFUQSxTQVRLO0FBVUxGLCtCQUEyQixFQUEzQkEsMkJBVks7QUFXTEYsdUJBQW1CLEVBQW5CQSxtQkFYSztBQVlMSixlQUFXLEVBQVhBLFdBWks7QUFhTEUsYUFBUyxFQUFUQSxTQWJLO0FBY0xRLGFBQVMsRUFBVEE7QUFkSyxHQUFQO0FBZ0JGOztJQWxDZW1CLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXBpc29kZXMvW3NsdWddLmJmODM3NTI1ZWMyOGMzNDM2NzEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEVwaXNvZGUge1xyXG4gIGlkOiBzdHJpbmcsICAgICAgXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBtZW1iZXJzOiBzdHJpbmcsXHJcbiAgcHVibGlzaGVkX2F0OiBzdHJpbmcsXHJcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICB1cmw6IHN0cmluZyxcclxuICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gIHB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQ6IHN0cmluZyxcclxuICBkdXJhdGlvbkZvcm1hdHRlZDogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGF5ZXJDb250ZXh0RGF0YSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICBpc1NodWZmbGU6IGJvb2xlYW47XHJcbiAgcGxheTogKGVwaXNvZGUpID0+IHZvaWQ7XHJcbiAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcclxuICBvblBsYXlLZXlib2FyZDogKGRhdGE6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xyXG4gIHRvZ2dsZUxvb3Bpbmc6ICgpID0+IHZvaWQ7XHJcbiAgdG9nZ2xlU2h1ZmZsZTogKCkgPT4gdm9pZDtcclxuICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b246IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGxheWVyQ29udGV4dERhdGE+KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLCBzZXRFbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzU2h1ZmZsZSwgc2V0SXNTaHVmZmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcGxheSA9IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIHNldEVuYWJsZVByZXZpb3VzQW5kTmV4dEJ1dHRvbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5TGlzdCA9IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICBzZXRFbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTG9vcGluZyA9ICgpID0+IHtcclxuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNodWZmbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1NodWZmbGUoIWlzU2h1ZmZsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblBsYXlLZXlib2FyZCA9IChkYXRhOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRJc1BsYXlpbmcoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5TmV4dCA9ICgpID0+IHtcclxuICAgIGlmKGlzU2h1ZmZsZSl7XHJcbiAgICAgIGNvbnN0IG5leHRFcGlzb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKTtcclxuICAgICAgcmV0dXJuIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dEVwaXNvZGUpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBpZihjdXJyZW50RXBpc29kZUluZGV4ID49IGVwaXNvZGVMaXN0Lmxlbmd0aCAtIDEpe1xyXG4gICAgICAgIHJldHVybiBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgaWYoaXNTaHVmZmxlKXtcclxuICAgICAgY29uc3QgbmV4dEVwaXNvZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpO1xyXG4gICAgICByZXR1cm4gc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0RXBpc29kZSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGlmKGN1cnJlbnRFcGlzb2RlSW5kZXggPD0gMCl7XHJcbiAgICAgICAgcmV0dXJuIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoZXBpc29kZUxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBpc1BsYXlpbmcsXHJcbiAgICAgICAgaXNMb29waW5nLFxyXG4gICAgICAgIGlzU2h1ZmZsZSxcclxuICAgICAgICBwbGF5LFxyXG4gICAgICAgIHRvZ2dsZVBsYXksXHJcbiAgICAgICAgb25QbGF5S2V5Ym9hcmQsXHJcbiAgICAgICAgcGxheUxpc3QsXHJcbiAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIHRvZ2dsZUxvb3BpbmcsXHJcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICAgICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGxheWVyKCl7XHJcbiAgIGNvbnN0IHsgXHJcbiAgICAgcGxheSxcclxuICAgICB0b2dnbGVQbGF5LCBcclxuICAgICBvblBsYXlLZXlib2FyZCwgXHJcbiAgICAgcGxheUxpc3QsIFxyXG4gICAgIHBsYXlOZXh0LCBcclxuICAgICBwbGF5UHJldmlvdXMsIFxyXG4gICAgIHRvZ2dsZUxvb3BpbmcgLCBcclxuICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgIGlzTG9vcGluZywgXHJcbiAgICAgZW5hYmxlUHJldmlvdXNBbmROZXh0QnV0dG9uLCBcclxuICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcclxuICAgICBlcGlzb2RlTGlzdCwgXHJcbiAgICAgaXNQbGF5aW5nLFxyXG4gICAgIGlzU2h1ZmZsZSwgXHJcbiAgIH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG5cclxuICAgcmV0dXJuIHsgXHJcbiAgICAgcGxheSwgXHJcbiAgICAgdG9nZ2xlUGxheSwgXHJcbiAgICAgb25QbGF5S2V5Ym9hcmQsIFxyXG4gICAgIHBsYXlMaXN0LCBcclxuICAgICBwbGF5TmV4dCwgXHJcbiAgICAgcGxheVByZXZpb3VzLCBcclxuICAgICB0b2dnbGVMb29waW5nLFxyXG4gICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgaXNMb29waW5nLCBcclxuICAgICBlbmFibGVQcmV2aW91c0FuZE5leHRCdXR0b24sIFxyXG4gICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsIFxyXG4gICAgIGVwaXNvZGVMaXN0LCBcclxuICAgICBpc1BsYXlpbmcsXHJcbiAgICAgaXNTaHVmZmxlLCBcclxuICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9