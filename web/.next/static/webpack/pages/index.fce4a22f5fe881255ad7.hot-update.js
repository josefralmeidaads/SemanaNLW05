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
              onClick: function onClick() {
                play(episode);
              },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsRXBpc29kZXMiLCJsYXRlc3RFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXkiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRfYXRfRm9ybWF0dGVkIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFvQkE7O0FBcUJlLFNBQVNBLElBQVQsT0FBeUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0Qjs7QUFBQSxtQkFDckRDLHlFQUFTLEVBRDRDO0FBQUEsTUFDOURDLElBRDhELGNBQzlEQSxJQUQ4RDs7QUFHdEUsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDhCQUNsQixxRUFBQyw4REFBRDtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsbUJBQUssRUFBRSxHQURUO0FBRUUsb0JBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUhmO0FBSUUsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUpmO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRSxxRUFBQyxxRUFBRDtBQUFBLHNDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksc0JBQWVGLE9BQU8sQ0FBQ0csRUFBdkIsQ0FBVjtBQUFBLHVDQUNFLHFFQUFDLG1FQUFEO0FB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QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCRixlQXFCRSxxRUFBQyw2REFBRDtBQUFBLDBCQUFhTCxPQUFPLENBQUNNO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGLGVBc0JFLHFFQUFDLDZEQUFEO0FBQUEsdUNBQ0UscUVBQUMsb0VBQUQ7QUFBbUIsc0JBQUksRUFBQyxRQUF4QjtBQUFBLHlDQUNFO0FBQUssdUJBQUcsRUFBQyxnQkFBVDtBQUEwQix1QkFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF0QkY7QUFBQSxlQUFpQk4sT0FBTyxDQUFDRyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURlO0FBQUEsV0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9GRDs7R0F2RnVCVCxJO1VBQ0xHLGlFOzs7S0FES0gsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mY2U0YTIyZjVmZTg4MTI1NWFkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcblxuaW1wb3J0IHtcbiAgSG9tZVBhZ2UsXG4gIExhdGVzdEVwaXNvZGVzLFxuICBBbGxFcGlzb2RlcyxcbiAgRXBpc29kZUl0ZW0sXG4gIEVwaXNvZGVJdGVtRGV0YWlscyxcbiAgRXBpc29kZUl0ZW1UaXRsZSxcbiAgRXBpc29kZUl0ZW1NZW1iZXJzLFxuICBFcGlzb2RlSXRlbUJ1dHRvbixcbiAgQWxsRXBpc29kZXNUaXRsZSxcbiAgVGFibGVFcGlzb2RlcyxcbiAgVGhlYWRFcGlzb2RlcyxcbiAgVGhFcGlzb2RlcyxcbiAgVGJvZHlFcGlzb2RlcyxcbiAgVHJFcGlzb2RlcyxcbiAgVGRFcGlzb2RlcyxcbiAgQWxsRXBpc29kZXNCdXR0b24sXG59IGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZUluZGV4JztcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyBmcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5pbXBvcnQgZXBpc29kZXMgZnJvbSAnLi9lcGlzb2Rlcy9bc2x1Z10nO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIGlkOiBzdHJpbmcsICAgICAgXG4gIHRpdGxlOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgcHVibGlzaGVkX2F0OiBzdHJpbmcsXG4gIHRodW1ibmFpbDogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbiAgZHVyYXRpb246IG51bWJlcixcbiAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogc3RyaW5nLFxuICBkdXJhdGlvbkZvcm1hdHRlZDogc3RyaW5nXG59XG5cbnR5cGUgSG9tZVByb3BzID0ge1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWxsRXBpc29kZXMsIGxhdGVzdEVwaXNvZGVzIH06IEhvbWVQcm9wcyl7XG4gIGNvbnN0IHsgcGxheSB9ID0gdXNlUGxheWVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9tZVBhZ2U+XG4gICAgICA8TGF0ZXN0RXBpc29kZXM+XG4gICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlKSA9PiAoXG4gICAgICAgICAgICA8RXBpc29kZUl0ZW0ga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOTJ9IFxuICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfSBcbiAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1EZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtVGl0bGU+e2VwaXNvZGUudGl0bGV9PC9FcGlzb2RlSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1NZW1iZXJzPntlcGlzb2RlLm1lbWJlcnN9PC9FcGlzb2RlSXRlbU1lbWJlcnM+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkX2F0X0Zvcm1hdHRlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Gb3JtYXR0ZWR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0VwaXNvZGVJdGVtRGV0YWlscz5cblxuICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1CdXR0b24gb25DbGljaz17KCkgPT4ge3BsYXkoZXBpc29kZSl9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBsYXktZ3JlZW4uc3ZnXCIgYWx0PVwidG9jYXIgZXBpc29kaW9cIi8+XG4gICAgICAgICAgICAgIDwvRXBpc29kZUl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8L0VwaXNvZGVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9MYXRlc3RFcGlzb2Rlcz5cblxuICAgICAgPEFsbEVwaXNvZGVzPlxuICAgICAgICA8QWxsRXBpc29kZXNUaXRsZT4gVG9kb3Mgb3MgRXBpc8OzZGlvczwvQWxsRXBpc29kZXNUaXRsZT5cblxuICAgICAgICA8VGFibGVFcGlzb2RlcyBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPFRoZWFkRXBpc29kZXM+XG4gICAgICAgICAgICA8VHJFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+PC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5Qb2RjYXN0PC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5JbnRlZ3JhbnRlczwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+RGF0YTwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+RHVyYcOnw6NvPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz48L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDwvVHJFcGlzb2Rlcz5cbiAgICAgICAgICA8L1RoZWFkRXBpc29kZXM+XG5cbiAgICAgICAgICA8VGJvZHlFcGlzb2Rlcz5cbiAgICAgICAgICAgIHthbGxFcGlzb2Rlcy5tYXAoKGVwaXNvZGUpID0+IChcbiAgICAgICAgICAgICAgPFRyRXBpc29kZXMga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5tZW1iZXJzfTwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlc1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTEwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXBpc29kZS5wdWJsaXNoZWRfYXRfRm9ybWF0dGVkfVxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5kdXJhdGlvbkZvcm1hdHRlZH08L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8QWxsRXBpc29kZXNCdXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBsYXktZ3JlZW4uc3ZnXCIgYWx0PVwidG9jYXIgcG9kY2FzdFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvQWxsRXBpc29kZXNCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8L1RyRXBpc29kZXM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Rib2R5RXBpc29kZXM+XG4gICAgICAgIDwvVGFibGVFcGlzb2Rlcz5cbiAgICAgIDwvQWxsRXBpc29kZXM+XG4gICAgPC9Ib21lUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOkdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL2VwaXNvZGVzJywge1xuICAgIHBhcmFtczoge1xuICAgICAgX2xpbWl0OiAxMixcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKChlcGlzb2RlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG4gICAgICBwdWJsaXNoZWRfYXQ6IGVwaXNvZGUucHVibGlzaGVkX2F0LFxuICAgICAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxuICAgICAgZGVzY3JpcHRpb246IGVwaXNvZGUuZGVzY3JpcHRpb24sXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkZvcm1hdHRlZDogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIHVybDogTnVtYmVyKGVwaXNvZGUuZmlsZS51cmwpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG4gIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMiwgZXBpc29kZXMubGVuZ3RoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgIGFsbEVwaXNvZGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDgsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9