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
        lineNumber: 54,
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
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemDetails"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemTitle"], {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemMembers"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["EpisodeItemButton"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "play-green.svg",
                alt: "tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodesTitle"], {
        children: " Todos os Epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TableEpisodes"], {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TheadEpisodes"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TrEpisodes"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
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
                  lineNumber: 103,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                style: {
                  width: 110
                },
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_3__["AllEpisodesButton"], {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "play-green.svg",
                    alt: "tocar podcast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsRXBpc29kZXMiLCJsYXRlc3RFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXkiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRfYXRfRm9ybWF0dGVkIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFvQkE7O0FBcUJlLFNBQVNBLElBQVQsT0FBeUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0Qjs7QUFBQSxtQkFDckRDLHlFQUFTLEVBRDRDO0FBQUEsTUFDOURDLElBRDhELGNBQzlEQSxJQUQ4RDs7QUFHdEUsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDhCQUNsQixxRUFBQyw4REFBRDtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsbUJBQUssRUFBRSxHQURUO0FBRUUsb0JBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUhmO0FBSUUsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUpmO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRSxxRUFBQyxxRUFBRDtBQUFBLHNDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksc0JBQWVGLE9BQU8sQ0FBQ0csRUFBdkIsQ0FBVjtBQUFBLHVDQUNFLHFFQUFDLG1FQUFEO0FB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T0FBTyxDQUFDTTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJCRixlQXNCRSxxRUFBQyw2REFBRDtBQUFBLHVDQUNFLHFFQUFDLG9FQUFEO0FBQW1CLHNCQUFJLEVBQUMsUUFBeEI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsdUJBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdEJGO0FBQUEsZUFBaUJOLE9BQU8sQ0FBQ0csRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZTtBQUFBLFdBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvRkQ7O0dBdkZ1QlQsSTtVQUNMRyxpRTs7O0tBREtILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU0ZGIxNzdlM2M2MjNjMTU2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XG5cbmltcG9ydCB7XG4gIEhvbWVQYWdlLFxuICBMYXRlc3RFcGlzb2RlcyxcbiAgQWxsRXBpc29kZXMsXG4gIEVwaXNvZGVJdGVtLFxuICBFcGlzb2RlSXRlbURldGFpbHMsXG4gIEVwaXNvZGVJdGVtVGl0bGUsXG4gIEVwaXNvZGVJdGVtTWVtYmVycyxcbiAgRXBpc29kZUl0ZW1CdXR0b24sXG4gIEFsbEVwaXNvZGVzVGl0bGUsXG4gIFRhYmxlRXBpc29kZXMsXG4gIFRoZWFkRXBpc29kZXMsXG4gIFRoRXBpc29kZXMsXG4gIFRib2R5RXBpc29kZXMsXG4gIFRyRXBpc29kZXMsXG4gIFRkRXBpc29kZXMsXG4gIEFsbEVwaXNvZGVzQnV0dG9uLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVJbmRleCc7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuaW1wb3J0IGVwaXNvZGVzIGZyb20gJy4vZXBpc29kZXMvW3NsdWddJztcblxudHlwZSBFcGlzb2RlID0ge1xuICBpZDogc3RyaW5nLCAgICAgIFxuICB0aXRsZTogc3RyaW5nLFxuICBtZW1iZXJzOiBzdHJpbmcsXG4gIHB1Ymxpc2hlZF9hdDogc3RyaW5nLFxuICB0aHVtYm5haWw6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWQ6IHN0cmluZyxcbiAgZHVyYXRpb25Gb3JtYXR0ZWQ6IHN0cmluZ1xufVxuXG50eXBlIEhvbWVQcm9wcyA9IHtcbiAgYWxsRXBpc29kZXM6IEVwaXNvZGVbXTtcbiAgbGF0ZXN0RXBpc29kZXM6IEVwaXNvZGVbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbEVwaXNvZGVzLCBsYXRlc3RFcGlzb2RlcyB9OiBIb21lUHJvcHMpe1xuICBjb25zdCB7IHBsYXkgfSA9IHVzZVBsYXllcigpO1xuXG4gIHJldHVybiAoXG4gICAgPEhvbWVQYWdlPlxuICAgICAgPExhdGVzdEVwaXNvZGVzPlxuICAgICAgICA8aDI+w5psdGltb3MgbGFuw6dhbWVudG9zPC9oMj5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAge2xhdGVzdEVwaXNvZGVzLm1hcCgoZXBpc29kZSkgPT4gKFxuICAgICAgICAgICAgPEVwaXNvZGVJdGVtIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICB3aWR0aD17MTkyfSBcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn0gXG4gICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtRGV0YWlscz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxFcGlzb2RlSXRlbVRpdGxlPntlcGlzb2RlLnRpdGxlfTwvRXBpc29kZUl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtTWVtYmVycz57ZXBpc29kZS5tZW1iZXJzfTwvRXBpc29kZUl0ZW1NZW1iZXJzPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uRm9ybWF0dGVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9FcGlzb2RlSXRlbURldGFpbHM+XG5cbiAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwicGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJ0b2NhciBlcGlzb2Rpb1wiLz5cbiAgICAgICAgICAgICAgPC9FcGlzb2RlSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgIDwvRXBpc29kZUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0xhdGVzdEVwaXNvZGVzPlxuXG4gICAgICA8QWxsRXBpc29kZXM+XG4gICAgICAgIDxBbGxFcGlzb2Rlc1RpdGxlPiBUb2RvcyBvcyBFcGlzw7NkaW9zPC9BbGxFcGlzb2Rlc1RpdGxlPlxuXG4gICAgICAgIDxUYWJsZUVwaXNvZGVzIGNlbGxTcGFjaW5nPXswfT5cbiAgICAgICAgICA8VGhlYWRFcGlzb2Rlcz5cbiAgICAgICAgICAgIDxUckVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz48L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPlBvZGNhc3Q8L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPkludGVncmFudGVzPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5EYXRhPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5EdXJhw6fDo288L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPjwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPC9UckVwaXNvZGVzPlxuICAgICAgICAgIDwvVGhlYWRFcGlzb2Rlcz5cblxuICAgICAgICAgIDxUYm9keUVwaXNvZGVzPlxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcCgoZXBpc29kZSkgPT4gKFxuICAgICAgICAgICAgICA8VHJFcGlzb2RlcyBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzPntlcGlzb2RlLm1lbWJlcnN9PC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAxMTB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcGlzb2RlLnB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWR9XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICAgIDxUZEVwaXNvZGVzPntlcGlzb2RlLmR1cmF0aW9uRm9ybWF0dGVkfTwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICAgIDxBbGxFcGlzb2Rlc0J1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwicGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJ0b2NhciBwb2RjYXN0XCIvPlxuICAgICAgICAgICAgICAgICAgPC9BbGxFcGlzb2Rlc0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgIDwvVHJFcGlzb2Rlcz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGJvZHlFcGlzb2Rlcz5cbiAgICAgICAgPC9UYWJsZUVwaXNvZGVzPlxuICAgICAgPC9BbGxFcGlzb2Rlcz5cbiAgICA8L0hvbWVQYWdlPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6R2V0U3RhdGljUHJvcHMgPSBhc3luYygpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCcvZXBpc29kZXMnLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoKGVwaXNvZGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGVwaXNvZGUuaWQsXG4gICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcbiAgICAgIHB1Ymxpc2hlZF9hdDogZXBpc29kZS5wdWJsaXNoZWRfYXQsXG4gICAgICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBmb3JtYXQocGFyc2VJU08oZXBpc29kZS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUiB9KSxcbiAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG4gICAgICBkZXNjcmlwdGlvbjogZXBpc29kZS5kZXNjcmlwdGlvbixcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSxcbiAgICAgIGR1cmF0aW9uRm9ybWF0dGVkOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgdXJsOiBOdW1iZXIoZXBpc29kZS5maWxlLnVybCksXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgyLCBlcGlzb2Rlcy5sZW5ndGgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdEVwaXNvZGVzLFxuICAgICAgYWxsRXBpc29kZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=