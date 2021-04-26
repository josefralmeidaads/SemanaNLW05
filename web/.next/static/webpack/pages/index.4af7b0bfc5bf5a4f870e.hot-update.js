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
                return play(episode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsRXBpc29kZXMiLCJsYXRlc3RFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXkiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRfYXRfRm9ybWF0dGVkIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFvQkE7O0FBcUJlLFNBQVNBLElBQVQsT0FBeUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0Qjs7QUFBQSxtQkFDckRDLHlFQUFTLEVBRDRDO0FBQUEsTUFDOURDLElBRDhELGNBQzlEQSxJQUQ4RDs7QUFHdEUsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRDtBQUFBLDhCQUNsQixxRUFBQyw4REFBRDtBQUFBLG9DQUNFLHFFQUFDLGlEQUFEO0FBQ0UsbUJBQUssRUFBRSxHQURUO0FBRUUsb0JBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQUcsRUFBRUEsT0FBTyxDQUFDQyxTQUhmO0FBSUUsaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUpmO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRSxxRUFBQyxxRUFBRDtBQUFBLHNDQUNFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksc0JBQWVGLE9BQU8sQ0FBQ0csRUFBdkIsQ0FBVjtBQUFBLHVDQUNFLHFFQUFDLG1FQUFEO0FB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QUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEJGLGVBcUJFLHFFQUFDLDZEQUFEO0FBQUEsMEJBQWFMLE9BQU8sQ0FBQ007QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkYsZUFzQkUscUVBQUMsNkRBQUQ7QUFBQSx1Q0FDRSxxRUFBQyxvRUFBRDtBQUFtQixzQkFBSSxFQUFDLFFBQXhCO0FBQUEseUNBQ0U7QUFBSyx1QkFBRyxFQUFDLGdCQUFUO0FBQTBCLHVCQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRCRjtBQUFBLGVBQWlCTixPQUFPLENBQUNHLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGU7QUFBQSxXQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0ZEOztHQXZGdUJULEk7VUFDTEcsaUU7OztLQURLSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhZjdiMGJmYzViZjVhNGY4NzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuXG5pbXBvcnQge1xuICBIb21lUGFnZSxcbiAgTGF0ZXN0RXBpc29kZXMsXG4gIEFsbEVwaXNvZGVzLFxuICBFcGlzb2RlSXRlbSxcbiAgRXBpc29kZUl0ZW1EZXRhaWxzLFxuICBFcGlzb2RlSXRlbVRpdGxlLFxuICBFcGlzb2RlSXRlbU1lbWJlcnMsXG4gIEVwaXNvZGVJdGVtQnV0dG9uLFxuICBBbGxFcGlzb2Rlc1RpdGxlLFxuICBUYWJsZUVwaXNvZGVzLFxuICBUaGVhZEVwaXNvZGVzLFxuICBUaEVwaXNvZGVzLFxuICBUYm9keUVwaXNvZGVzLFxuICBUckVwaXNvZGVzLFxuICBUZEVwaXNvZGVzLFxuICBBbGxFcGlzb2Rlc0J1dHRvbixcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlSW5kZXgnO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcbmltcG9ydCBlcGlzb2RlcyBmcm9tICcuL2VwaXNvZGVzL1tzbHVnXSc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgaWQ6IHN0cmluZywgICAgICBcbiAgdGl0bGU6IHN0cmluZyxcbiAgbWVtYmVyczogc3RyaW5nLFxuICBwdWJsaXNoZWRfYXQ6IHN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBzdHJpbmcsXG4gIGR1cmF0aW9uRm9ybWF0dGVkOiBzdHJpbmdcbn1cblxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGFsbEVwaXNvZGVzOiBFcGlzb2RlW107XG4gIGxhdGVzdEVwaXNvZGVzOiBFcGlzb2RlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxFcGlzb2RlcywgbGF0ZXN0RXBpc29kZXMgfTogSG9tZVByb3BzKXtcbiAgY29uc3QgeyBwbGF5IH0gPSB1c2VQbGF5ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxIb21lUGFnZT5cbiAgICAgIDxMYXRlc3RFcGlzb2Rlcz5cbiAgICAgICAgPGgyPsOabHRpbW9zIGxhbsOnYW1lbnRvczwvaDI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtsYXRlc3RFcGlzb2Rlcy5tYXAoKGVwaXNvZGUpID0+IChcbiAgICAgICAgICAgIDxFcGlzb2RlSXRlbSBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE5Mn0gXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxOTJ9IFxuICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9IFxuICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiIFxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxFcGlzb2RlSXRlbURldGFpbHM+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8RXBpc29kZUl0ZW1UaXRsZT57ZXBpc29kZS50aXRsZX08L0VwaXNvZGVJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxFcGlzb2RlSXRlbU1lbWJlcnM+e2VwaXNvZGUubWVtYmVyc308L0VwaXNvZGVJdGVtTWVtYmVycz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRfYXRfRm9ybWF0dGVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkZvcm1hdHRlZH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvRXBpc29kZUl0ZW1EZXRhaWxzPlxuXG4gICAgICAgICAgICAgIDxFcGlzb2RlSXRlbUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwbGF5KGVwaXNvZGUpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBsYXktZ3JlZW4uc3ZnXCIgYWx0PVwidG9jYXIgZXBpc29kaW9cIi8+XG4gICAgICAgICAgICAgIDwvRXBpc29kZUl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8L0VwaXNvZGVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9MYXRlc3RFcGlzb2Rlcz5cblxuICAgICAgPEFsbEVwaXNvZGVzPlxuICAgICAgICA8QWxsRXBpc29kZXNUaXRsZT4gVG9kb3Mgb3MgRXBpc8OzZGlvczwvQWxsRXBpc29kZXNUaXRsZT5cblxuICAgICAgICA8VGFibGVFcGlzb2RlcyBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPFRoZWFkRXBpc29kZXM+XG4gICAgICAgICAgICA8VHJFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+PC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5Qb2RjYXN0PC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5JbnRlZ3JhbnRlczwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+RGF0YTwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPFRoRXBpc29kZXM+RHVyYcOnw6NvPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz48L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDwvVHJFcGlzb2Rlcz5cbiAgICAgICAgICA8L1RoZWFkRXBpc29kZXM+XG5cbiAgICAgICAgICA8VGJvZHlFcGlzb2Rlcz5cbiAgICAgICAgICAgIHthbGxFcGlzb2Rlcy5tYXAoKGVwaXNvZGUpID0+IChcbiAgICAgICAgICAgICAgPFRyRXBpc29kZXMga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5tZW1iZXJzfTwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlc1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTEwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXBpc29kZS5wdWJsaXNoZWRfYXRfRm9ybWF0dGVkfVxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5kdXJhdGlvbkZvcm1hdHRlZH08L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8QWxsRXBpc29kZXNCdXR0b24gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBsYXktZ3JlZW4uc3ZnXCIgYWx0PVwidG9jYXIgcG9kY2FzdFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvQWxsRXBpc29kZXNCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8L1RyRXBpc29kZXM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Rib2R5RXBpc29kZXM+XG4gICAgICAgIDwvVGFibGVFcGlzb2Rlcz5cbiAgICAgIDwvQWxsRXBpc29kZXM+XG4gICAgPC9Ib21lUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOkdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL2VwaXNvZGVzJywge1xuICAgIHBhcmFtczoge1xuICAgICAgX2xpbWl0OiAxMixcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKChlcGlzb2RlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG4gICAgICBwdWJsaXNoZWRfYXQ6IGVwaXNvZGUucHVibGlzaGVkX2F0LFxuICAgICAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxuICAgICAgZGVzY3JpcHRpb246IGVwaXNvZGUuZGVzY3JpcHRpb24sXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkZvcm1hdHRlZDogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIHVybDogTnVtYmVyKGVwaXNvZGUuZmlsZS51cmwpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG4gIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMiwgZXBpc29kZXMubGVuZ3RoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgIGFsbEVwaXNvZGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDgsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9