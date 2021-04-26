webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Player/styles.ts ***!
  \*****************************************/
/*! exports provided: PlayerContainer, PlayerHeader, PlayerImg, PlayerEmpty, PlayerCurrentEpisode, PlayerFooter, PlayerProgress, ProgressCurrent, Slider, EmptySlider, PlayerButtonsDiv, PlayerButtons, ButtonPlay, PlayerButtonsImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContainer", function() { return PlayerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerHeader", function() { return PlayerHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerImg", function() { return PlayerImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEmpty", function() { return PlayerEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCurrentEpisode", function() { return PlayerCurrentEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerFooter", function() { return PlayerFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerProgress", function() { return PlayerProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressCurrent", function() { return ProgressCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptySlider", function() { return EmptySlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerButtonsDiv", function() { return PlayerButtonsDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerButtons", function() { return PlayerButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPlay", function() { return ButtonPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerButtonsImg", function() { return PlayerButtonsImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__PlayerContainer",
  componentId: "sc-13wt2ir-0"
})(["padding:3rem 4rem;width:25.6rem;height:100vh;background:", ";color:", ";display:flex;flex-direction:column;align-items:center;justify-content:space-between;"], function (props) {
  return props.theme.colors.purple_500;
}, function (props) {
  return props.theme.colors.white;
});
var PlayerHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "styles__PlayerHeader",
  componentId: "sc-13wt2ir-1"
})(["display:flex;align-items:center;justify-content:center;gap:1rem;strong{font-family:Lexend,sans-serif;font-weight:600;}"]);
var PlayerImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__PlayerImg",
  componentId: "sc-13wt2ir-2"
})([""]);
var PlayerEmpty = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__PlayerEmpty",
  componentId: "sc-13wt2ir-3"
})(["width:100%;height:20rem;border:1.5px dashed ", ";border-radius:1.5rem;background:linear-gradient( 143.8deg,rgba(145,100,250,0.8)0%,rgba(0,0,0,0)100%);padding:4rem;text-align:center;display:flex;align-items:center;justify-content:center;"], function (props) {
  return props.theme.colors.purple_300;
});
var PlayerCurrentEpisode = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__PlayerCurrentEpisode",
  componentId: "sc-13wt2ir-4"
})(["text-align:center;width:100%;height:20rem;img{border-radius:1.5rem;}strong{display:block;margin-top:2rem;font:600 Lexend,sans-serif;}"]);
var PlayerFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  displayName: "styles__PlayerFooter",
  componentId: "sc-13wt2ir-5"
})(["align-items:center;justify-content:center;", ""], function (props) {
  return props.empty && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0.5;"]);
});
var PlayerProgress = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  displayName: "styles__PlayerProgress",
  componentId: "sc-13wt2ir-6"
})(["display:flex;align-items:center;justify-content:center;gap:1rem;font-size:0.875rem;width:20rem;"]);
var ProgressCurrent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__ProgressCurrent",
  componentId: "sc-13wt2ir-7"
})(["display:inline-block;width:4rem;text-align:center;"]);
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Slider",
  componentId: "sc-13wt2ir-8"
})(["width:100%;background:red;"]);
var EmptySlider = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__EmptySlider",
  componentId: "sc-13wt2ir-9"
})(["width:100%;height:4px;background:", ";border-radius:2px;"], function (props) {
  return props.theme.colors.purple_300;
});
var PlayerButtonsDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__PlayerButtonsDiv",
  componentId: "sc-13wt2ir-10"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:2.5rem;gap:1.5rem;"]);
var PlayerButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styles__PlayerButtons",
  componentId: "sc-13wt2ir-11"
})(["background:transparent;border:0;font-size:0%;"]);
var ButtonPlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styles__ButtonPlay",
  componentId: "sc-13wt2ir-12"
})(["background:transparent;border:0;font-size:0;width:4rem;height:4rem;border-radius:1rem;background:", ";"], function (props) {
  return props.theme.colors.purple_400;
});
var PlayerButtonsImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__PlayerButtonsImg",
  componentId: "sc-13wt2ir-13"
})([""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJQbGF5ZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHVycGxlXzUwMCIsIndoaXRlIiwiUGxheWVySGVhZGVyIiwiaGVhZGVyIiwiUGxheWVySW1nIiwiaW1nIiwiUGxheWVyRW1wdHkiLCJwdXJwbGVfMzAwIiwiUGxheWVyQ3VycmVudEVwaXNvZGUiLCJQbGF5ZXJGb290ZXIiLCJmb290ZXIiLCJlbXB0eSIsImNzcyIsIlBsYXllclByb2dyZXNzIiwiUHJvZ3Jlc3NDdXJyZW50Iiwic3BhbiIsIlNsaWRlciIsIkVtcHR5U2xpZGVyIiwiUGxheWVyQnV0dG9uc0RpdiIsIlBsYXllckJ1dHRvbnMiLCJidXR0b24iLCJCdXR0b25QbGF5IiwicHVycGxlXzQwMCIsIlBsYXllckJ1dHRvbnNJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVU8sSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFLQUtaLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsVUFBdkI7QUFBQSxDQUxPLEVBTWpCLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsS0FBdkI7QUFBQSxDQU5ZLENBQXJCO0FBYUEsSUFBTUMsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxNQUFWO0FBQUE7QUFBQTtBQUFBLDhIQUFsQjtBQWFBLElBQU1DLFNBQVMsR0FBR1QseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBSUEsSUFBTUMsV0FBVyxHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFQQUdDLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQlEsVUFBdkI7QUFBQSxDQUhOLENBQWpCO0FBZUEsSUFBTUMsb0JBQW9CLEdBQUdiLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNklBQTFCO0FBZ0JBLElBQU1hLFlBQVksR0FBR2QseURBQU0sQ0FBQ2UsTUFBVjtBQUFBO0FBQUE7QUFBQSx1REFHckIsVUFBQWIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ2MsS0FBTixJQUFlQyw2REFBZixrQkFBSjtBQUFBLENBSGdCLENBQWxCO0FBUUEsSUFBTUMsY0FBYyxHQUFHbEIseURBQU0sQ0FBQ2UsTUFBVjtBQUFBO0FBQUE7QUFBQSx1R0FBcEI7QUFTQSxJQUFNSSxlQUFlLEdBQUduQix5REFBTSxDQUFDb0IsSUFBVjtBQUFBO0FBQUE7QUFBQSwwREFBckI7QUFNQSxJQUFNQyxNQUFNLEdBQUdyQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtDQUFaO0FBS0EsSUFBTXFCLFdBQVcsR0FBR3RCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUVBR1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CUSxVQUF2QjtBQUFBLENBSEcsQ0FBakI7QUFPQSxJQUFNVyxnQkFBZ0IsR0FBR3ZCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0dBQXRCO0FBU0EsSUFBTXVCLGFBQWEsR0FBR3hCLHlEQUFNLENBQUN5QixNQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUFuQjtBQU1BLElBQU1DLFVBQVUsR0FBRzFCLHlEQUFNLENBQUN5QixNQUFWO0FBQUE7QUFBQTtBQUFBLCtHQU9SLFVBQUF2QixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJ1QixVQUF2QjtBQUFBLENBUEcsQ0FBaEI7QUFVQSxJQUFNQyxnQkFBZ0IsR0FBRzVCLHlEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMzVmYzUyMDQ3MTk3ZTE0YmNhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9Qcm9wcyB7XHJcbiAgcGxheT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBGb290ZXJQbGF5ZXJQcm9wcyB7XHJcbiAgZW1wdHk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDNyZW0gNHJlbTtcclxuICB3aWR0aDogMjUuNnJlbTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wdXJwbGVfNTAwfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVySW1nID0gc3R5bGVkLmltZ2BcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyRW1wdHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjByZW07XHJcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHVycGxlXzMwMH07XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTQzLjhkZWcsIHJnYmEoMTQ1LCAxMDAsIDI1MCwgMC44KTAlLCByZ2JhKDAsIDAsIDAsIDApMTAwJSk7XHJcblxyXG4gIHBhZGRpbmc6IDRyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ3VycmVudEVwaXNvZGUgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGZvbnQ6IDYwMCBMZXhlbmQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckZvb3RlciA9IHN0eWxlZC5mb290ZXI8Rm9vdGVyUGxheWVyUHJvcHM+YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5lbXB0eSAmJiBjc3NgXHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllclByb2dyZXNzID0gc3R5bGVkLmZvb3RlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgd2lkdGg6IDIwcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQ3VycmVudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRW1wdHlTbGlkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnB1cnBsZV8zMDB9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJCdXR0b25zRGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgZ2FwOiAxLjVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQnV0dG9ucyA9IHN0eWxlZC5idXR0b25gXHJcbiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuIGJvcmRlcjogMDtcclxuIGZvbnQtc2l6ZTogMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uUGxheSA9IHN0eWxlZC5idXR0b25gXHJcbiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuIGJvcmRlcjogMDtcclxuIGZvbnQtc2l6ZTogMDtcclxuIHdpZHRoOiA0cmVtO1xyXG4gaGVpZ2h0OiA0cmVtO1xyXG4gYm9yZGVyLXJhZGl1czogMXJlbTtcclxuIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnB1cnBsZV80MDB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckJ1dHRvbnNJbWcgPSBzdHlsZWQuaW1nYFxyXG5cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9