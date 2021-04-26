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
    console.log('Episodio >', episode);
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      currentEpisodeIndex: currentEpisodeIndex,
      episodeList: episodeList,
      isPlaying: isPlaying,
      play: play
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(PlayerProvider, "FYThUPiyGCPUBm4cPNVH/JgCWm4=");

_c = PlayerProvider;
function usePlayer() {
  _s2();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext),
      play = _useContext.play,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      episodeList = _useContext.episodeList;

  return {
    play: play,
    currentEpisodeIndex: currentEpisodeIndex,
    episodeList: episodeList
  };
}

_s2(usePlayer, "WfEKQkmY5O5VD0R2Mlw62/3h9V8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwicGxheSIsImVwaXNvZGUiLCJjb25zb2xlIiwibG9nIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQW9CLEVBQXBCLENBQW5DO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxFQUFELENBREE7QUFBQSxNQUN2Q0MsV0FEdUM7QUFBQSxNQUMxQkMsY0FEMEI7O0FBQUEsbUJBRVpGLHNEQUFRLENBQUMsS0FBRCxDQUZJO0FBQUEsTUFFdkNHLFNBRnVDO0FBQUEsTUFFNUJDLFlBRjRCOztBQUFBLG1CQUdRSixzREFBUSxDQUFDLENBQUQsQ0FIaEI7QUFBQSxNQUd2Q0ssbUJBSHVDO0FBQUEsTUFHbEJDLHNCQUhrQjs7QUFLOUMsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsT0FBRCxFQUFhO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixPQUExQjtBQUNBTixrQkFBYyxDQUFDLENBQUNNLE9BQUQsQ0FBRCxDQUFkO0FBQ0FGLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDRCxHQUpEOztBQU1BLHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0UsU0FBSyxFQUFFO0FBQ0xELHlCQUFtQixFQUFuQkEsbUJBREs7QUFFTEosaUJBQVcsRUFBWEEsV0FGSztBQUdMRSxlQUFTLEVBQVRBLFNBSEs7QUFJTEksVUFBSSxFQUFKQTtBQUpLLEtBRFQ7QUFBQSxjQVFHUjtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBdkJNOztHQUFNRCxjOztLQUFBQSxjO0FBeUJOLFNBQVNhLFNBQVQsR0FBb0I7QUFBQTs7QUFBQSxvQkFDMkJDLHdEQUFVLENBQUNoQixhQUFELENBRHJDO0FBQUEsTUFDaEJXLElBRGdCLGVBQ2hCQSxJQURnQjtBQUFBLE1BQ1ZGLG1CQURVLGVBQ1ZBLG1CQURVO0FBQUEsTUFDV0osV0FEWCxlQUNXQSxXQURYOztBQUd4QixTQUFPO0FBQUVNLFFBQUksRUFBSkEsSUFBRjtBQUFRRix1QkFBbUIsRUFBbkJBLG1CQUFSO0FBQTZCSixlQUFXLEVBQVhBO0FBQTdCLEdBQVA7QUFDRjs7SUFKZVUsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTYyOGQyOWJjMzg4MjAxMDA5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBFcGlzb2RlIHtcclxuICBpZDogbnVtYmVyLFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgbWVtYmVyczogc3RyaW5nLFxyXG4gIHB1Ymxpc2hlZF9hdDogRGF0ZSxcclxuICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBzdHJpbmcsXHJcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICBkdXJhdGlvbjogTnVtYmVyLFxyXG4gIGR1cmF0aW9uRm9ybWF0dGVkOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGF5ZXJDb250ZXh0RGF0YSB7XHJcbiAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHBsYXk6IChlcGlzb2RlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGxheWVyQ29udGV4dERhdGE+KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBwbGF5ID0gKGVwaXNvZGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdFcGlzb2RpbyA+JywgZXBpc29kZSk7XHJcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xyXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICBwbGF5LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXllcigpe1xyXG4gICBjb25zdCB7IHBsYXksIGN1cnJlbnRFcGlzb2RlSW5kZXgsIGVwaXNvZGVMaXN0IH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG5cclxuICAgcmV0dXJuIHsgcGxheSwgY3VycmVudEVwaXNvZGVJbmRleCwgZXBpc29kZUxpc3QgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9