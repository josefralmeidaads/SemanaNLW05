webpackHotUpdate_N_E("pages/index",{

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

  var play = function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  };

  var pause = function pause() {
    setIsPlaying(false);
  };

  var togglePlay = function togglePlay() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      currentEpisodeIndex: currentEpisodeIndex,
      episodeList: episodeList,
      isPlaying: isPlaying,
      play: play,
      pause: pause
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(PlayerProvider, "FYThUPiyGCPUBm4cPNVH/JgCWm4=");

_c = PlayerProvider;
function usePlayer() {
  _s2();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext),
      play = _useContext.play,
      pause = _useContext.pause,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      episodeList = _useContext.episodeList,
      isPlaying = _useContext.isPlaying;

  return {
    play: play,
    pause: pause,
    currentEpisodeIndex: currentEpisodeIndex,
    episodeList: episodeList,
    isPlaying: isPlaying
  };
}

_s2(usePlayer, "1pn8A3iurQjxNVn15K+TqNb1V1E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwicGxheSIsImVwaXNvZGUiLCJwYXVzZSIsInRvZ2dsZVBsYXkiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBb0IsRUFBcEIsQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLEVBQUQsQ0FEQTtBQUFBLE1BQ3ZDQyxXQUR1QztBQUFBLE1BQzFCQyxjQUQwQjs7QUFBQSxtQkFFWkYsc0RBQVEsQ0FBQyxLQUFELENBRkk7QUFBQSxNQUV2Q0csU0FGdUM7QUFBQSxNQUU1QkMsWUFGNEI7O0FBQUEsbUJBR1FKLHNEQUFRLENBQUMsQ0FBRCxDQUhoQjtBQUFBLE1BR3ZDSyxtQkFIdUM7QUFBQSxNQUdsQkMsc0JBSGtCOztBQUs5QyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxPQUFELEVBQWE7QUFDeEJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUYsMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSkQ7O0FBTUEsTUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkwsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU0sQ0FFeEIsQ0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFBRTtBQUNMTCx5QkFBbUIsRUFBbkJBLG1CQURLO0FBRUxKLGlCQUFXLEVBQVhBLFdBRks7QUFHTEUsZUFBUyxFQUFUQSxTQUhLO0FBSUxJLFVBQUksRUFBSkEsSUFKSztBQUtMRSxXQUFLLEVBQUxBO0FBTEssS0FEVDtBQUFBLGNBU0dWO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQ007O0dBQU1ELGM7O0tBQUFBLGM7QUFrQ04sU0FBU2EsU0FBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUM2Q0Msd0RBQVUsQ0FBQ2hCLGFBQUQsQ0FEdkQ7QUFBQSxNQUNoQlcsSUFEZ0IsZUFDaEJBLElBRGdCO0FBQUEsTUFDVkUsS0FEVSxlQUNWQSxLQURVO0FBQUEsTUFDSEosbUJBREcsZUFDSEEsbUJBREc7QUFBQSxNQUNrQkosV0FEbEIsZUFDa0JBLFdBRGxCO0FBQUEsTUFDK0JFLFNBRC9CLGVBQytCQSxTQUQvQjs7QUFHeEIsU0FBTztBQUFFSSxRQUFJLEVBQUpBLElBQUY7QUFBUUUsU0FBSyxFQUFMQSxLQUFSO0FBQWVKLHVCQUFtQixFQUFuQkEsbUJBQWY7QUFBb0NKLGVBQVcsRUFBWEEsV0FBcEM7QUFBaURFLGFBQVMsRUFBVEE7QUFBakQsR0FBUDtBQUNGOztJQUplUSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiYmI5NTM4NmVkZTc3MzczZWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEVwaXNvZGUge1xyXG4gIGlkOiBudW1iZXIsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxuICBtZW1iZXJzOiBzdHJpbmcsXHJcbiAgcHVibGlzaGVkX2F0OiBEYXRlLFxyXG4gIHB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQ6IHN0cmluZyxcclxuICB0aHVtYm5haWw6IHN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gIGR1cmF0aW9uOiBOdW1iZXIsXHJcbiAgZHVyYXRpb25Gb3JtYXR0ZWQ6IHN0cmluZyxcclxuICB1cmw6IHN0cmluZyxcclxufVxyXG5cclxuaW50ZXJmYWNlIFBsYXllckNvbnRleHREYXRhIHtcclxuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xyXG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICBpc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgcGxheTogKGVwaXNvZGUpID0+IHZvaWQ7XHJcbiAgcGF1c2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQbGF5ZXJDb250ZXh0RGF0YT4oe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHBsYXkgPSAoZXBpc29kZSkgPT4ge1xyXG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXVzZSA9ICgpID0+IHtcclxuICAgIHNldElzUGxheWluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBpc1BsYXlpbmcsXHJcbiAgICAgICAgcGxheSxcclxuICAgICAgICBwYXVzZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGF5ZXIoKXtcclxuICAgY29uc3QgeyBwbGF5LCBwYXVzZSwgY3VycmVudEVwaXNvZGVJbmRleCwgZXBpc29kZUxpc3QsIGlzUGxheWluZyB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgIHJldHVybiB7IHBsYXksIHBhdXNlLCBjdXJyZW50RXBpc29kZUluZGV4LCBlcGlzb2RlTGlzdCwgaXNQbGF5aW5nIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==