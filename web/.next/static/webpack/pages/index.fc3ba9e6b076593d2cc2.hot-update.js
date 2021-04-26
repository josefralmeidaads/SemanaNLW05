webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/styleIndex */ "./styles/styleIndex.ts");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");


var _jsxFileName = "C:\\NLW05\\web\\src\\pages\\index.tsx",
    _s = $RefreshSig$();





var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var allEpisodes = _ref.allEpisodes,
      latestEpisodes = _ref.latestEpisodes;

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["usePlayer"])(),
      play = _usePlayer.play;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["HomePage"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["LatestEpisodes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItem"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemDetails"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemTitle"], {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemMembers"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemButton"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "play-green.svg",
                alt: "tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodesTitle"], {
        children: " Todos os Epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TableEpisodes"], {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TheadEpisodes"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TrEpisodes"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TbodyEpisodes"], {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TrEpisodes"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  src: episode.thumbnail,
                  alt: episode.title,
                  width: 120,
                  height: 120,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                style: {
                  width: 110
                },
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodesButton"], {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "play-green.svg",
                    alt: "tocar podcast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(Home, "mptMREsNBTdRfLLVAN69g5qilFU=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__["usePlayer"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsRXBpc29kZXMiLCJsYXRlc3RFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXkiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRfYXRfRm9ybWF0dGVkIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFvQkE7O0FBb0JlLFNBQVNBLElBQVQsT0FBeUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0Qjs7QUFBQSxtQkFDckRDLHlFQUFTLEVBRDRDO0FBQUEsTUFDOURDLElBRDhELGNBQzlEQSxJQUQ4RDs7QUFHdEUsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDhCQUNsQixxRUFBQyw4REFBRDtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsbUJBQUssRUFBRSxHQURUO0FBRUUsb0JBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUhmO0FBSUUsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUpmO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRSxxRUFBQyxxRUFBRDtBQUFBLHNDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksc0JBQWVGLE9BQU8sQ0FBQ0csRUFBdkIsQ0FBVjtBQUFBLHVDQUNFLHFFQUFDLG1FQUFEO0FB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T0FBTyxDQUFDTTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJCRixlQXNCRSxxRUFBQyw2REFBRDtBQUFBLHVDQUNFLHFFQUFDLG9FQUFEO0FBQW1CLHNCQUFJLEVBQUMsUUFBeEI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsdUJBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdEJGO0FBQUEsZUFBaUJOLE9BQU8sQ0FBQ0csRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZTtBQUFBLFdBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvRkQ7O0dBdkZ1QlQsSTtVQUNMRyxpRTs7O0tBREtILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmMzYmE5ZTZiMDc2NTkzZDJjYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XG5cbmltcG9ydCB7XG4gIEhvbWVQYWdlLFxuICBMYXRlc3RFcGlzb2RlcyxcbiAgQWxsRXBpc29kZXMsXG4gIEVwaXNvZGVJdGVtLFxuICBFcGlzb2RlSXRlbURldGFpbHMsXG4gIEVwaXNvZGVJdGVtVGl0bGUsXG4gIEVwaXNvZGVJdGVtTWVtYmVycyxcbiAgRXBpc29kZUl0ZW1CdXR0b24sXG4gIEFsbEVwaXNvZGVzVGl0bGUsXG4gIFRhYmxlRXBpc29kZXMsXG4gIFRoZWFkRXBpc29kZXMsXG4gIFRoRXBpc29kZXMsXG4gIFRib2R5RXBpc29kZXMsXG4gIFRyRXBpc29kZXMsXG4gIFRkRXBpc29kZXMsXG4gIEFsbEVwaXNvZGVzQnV0dG9uLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVJbmRleCc7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIGlkOiBzdHJpbmcsICAgICAgXG4gIHRpdGxlOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgcHVibGlzaGVkX2F0OiBzdHJpbmcsXG4gIHRodW1ibmFpbDogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbiAgZHVyYXRpb246IG51bWJlcixcbiAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogc3RyaW5nLFxuICBkdXJhdGlvbkZvcm1hdHRlZDogc3RyaW5nXG59XG5cbnR5cGUgSG9tZVByb3BzID0ge1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWxsRXBpc29kZXMsIGxhdGVzdEVwaXNvZGVzIH06IEhvbWVQcm9wcyl7XG4gIGNvbnN0IHsgcGxheSB9ID0gdXNlUGxheWVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9tZVBhZ2U+XG4gICAgICA8TGF0ZXN0RXBpc29kZXM+XG4gICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlKSA9PiAoXG4gICAgICAgICAgICA8RXBpc29kZUl0ZW0ga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOTJ9IFxuICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfSBcbiAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1EZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtVGl0bGU+e2VwaXNvZGUudGl0bGV9PC9FcGlzb2RlSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1NZW1iZXJzPntlcGlzb2RlLm1lbWJlcnN9PC9FcGlzb2RlSXRlbU1lbWJlcnM+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkX2F0X0Zvcm1hdHRlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Gb3JtYXR0ZWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0VwaXNvZGVJdGVtRGV0YWlscz5cblxuICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJwbGF5LWdyZWVuLnN2Z1wiIGFsdD1cInRvY2FyIGVwaXNvZGlvXCIvPlxuICAgICAgICAgICAgICA8L0VwaXNvZGVJdGVtQnV0dG9uPlxuICAgICAgICAgICAgPC9FcGlzb2RlSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvTGF0ZXN0RXBpc29kZXM+XG5cbiAgICAgIDxBbGxFcGlzb2Rlcz5cbiAgICAgICAgPEFsbEVwaXNvZGVzVGl0bGU+IFRvZG9zIG9zIEVwaXPDs2Rpb3M8L0FsbEVwaXNvZGVzVGl0bGU+XG5cbiAgICAgICAgPFRhYmxlRXBpc29kZXMgY2VsbFNwYWNpbmc9ezB9PlxuICAgICAgICAgIDxUaGVhZEVwaXNvZGVzPlxuICAgICAgICAgICAgPFRyRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPjwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+UG9kY2FzdDwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+SW50ZWdyYW50ZXM8L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPkRhdGE8L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPkR1cmHDp8OjbzwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+PC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8L1RyRXBpc29kZXM+XG4gICAgICAgICAgPC9UaGVhZEVwaXNvZGVzPlxuXG4gICAgICAgICAgPFRib2R5RXBpc29kZXM+XG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKChlcGlzb2RlKSA9PiAoXG4gICAgICAgICAgICAgIDxUckVwaXNvZGVzIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+e2VwaXNvZGUubWVtYmVyc308L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXNcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDExMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2VwaXNvZGUucHVibGlzaGVkX2F0X0Zvcm1hdHRlZH1cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+e2VwaXNvZGUuZHVyYXRpb25Gb3JtYXR0ZWR9PC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgICAgPEFsbEVwaXNvZGVzQnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJwbGF5LWdyZWVuLnN2Z1wiIGFsdD1cInRvY2FyIHBvZGNhc3RcIi8+XG4gICAgICAgICAgICAgICAgICA8L0FsbEVwaXNvZGVzQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPC9UckVwaXNvZGVzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYm9keUVwaXNvZGVzPlxuICAgICAgICA8L1RhYmxlRXBpc29kZXM+XG4gICAgICA8L0FsbEVwaXNvZGVzPlxuICAgIDwvSG9tZVBhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJy9lcGlzb2RlcycsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIF9saW1pdDogMTIsXG4gICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcCgoZXBpc29kZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXBpc29kZS5pZCxcbiAgICAgIHRpdGxlOiBlcGlzb2RlLnRpdGxlLFxuICAgICAgbWVtYmVyczogZXBpc29kZS5tZW1iZXJzLFxuICAgICAgcHVibGlzaGVkX2F0OiBlcGlzb2RlLnB1Ymxpc2hlZF9hdCxcbiAgICAgIHB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgdGh1bWJuYWlsOiBlcGlzb2RlLnRodW1ibmFpbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Gb3JtYXR0ZWQ6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSksXG4gICAgICB1cmw6IE51bWJlcihlcGlzb2RlLmZpbGUudXJsKSxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBsYXRlc3RFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIDIpO1xuICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDIsIGVwaXNvZGVzLmxlbmd0aCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGF0ZXN0RXBpc29kZXMsXG4gICAgICBhbGxFcGlzb2RlcyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA4LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==