webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
/* harmony import */ var C_NLW05_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/styleIndex */ "./styles/styleIndex.ts");
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");



var _jsxFileName = "C:\\NLW05\\web\\src\\pages\\index.tsx",
    _s = $RefreshSig$();






var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var allEpisodes = _ref.allEpisodes,
      latestEpisodes = _ref.latestEpisodes;

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["usePlayer"])(),
      playList = _usePlayer.playList,
      isPlaying = _usePlayer.isPlaying;

  var episodesList = [].concat(Object(C_NLW05_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(latestEpisodes), Object(C_NLW05_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allEpisodes));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["HomePage"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "PodCast"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["LatestEpisodes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["EpisodeItem"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["EpisodeItemDetails"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["EpisodeItemTitle"], {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["EpisodeItemMembers"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["EpisodeItemButton"], {
              onClick: function onClick() {
                playList(episodesList, index);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "play-green.svg",
                alt: "tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["AllEpisodes"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["AllEpisodesTitle"], {
        children: " Todos os Epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TableEpisodes"], {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TheadEpisodes"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TrEpisodes"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["ThEpisodes"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TbodyEpisodes"], {
          children: allEpisodes.map(function (episode, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TrEpisodes"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  src: episode.thumbnail,
                  alt: episode.title,
                  width: 120,
                  height: 120,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                style: {
                  width: 110
                },
                children: episode.published_at_Formatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                children: episode.durationFormatted
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["TdEpisodes"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_styleIndex__WEBPACK_IMPORTED_MODULE_5__["AllEpisodesButton"], {
                  type: "button",
                  onClick: function onClick() {
                    playList(episodesList, index + latestEpisodes.length);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "play-green.svg",
                    alt: "tocar podcast"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Home, "jx4Hrw1yC9C3gyeuwjqJHzXicok=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["usePlayer"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsRXBpc29kZXMiLCJsYXRlc3RFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiZXBpc29kZXNMaXN0IiwibWFwIiwiZXBpc29kZSIsImluZGV4IiwidGh1bWJuYWlsIiwidGl0bGUiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRfYXRfRm9ybWF0dGVkIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ3aWR0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDdEQ7QUFDQTtBQUNBO0FBSUE7QUFvQkE7O0FBb0JlLFNBQVNBLElBQVQsT0FBeUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLGNBQTRCLFFBQTVCQSxjQUE0Qjs7QUFBQSxtQkFDdENDLHlFQUFTLEVBRDZCO0FBQUEsTUFDOURDLFFBRDhELGNBQzlEQSxRQUQ4RDtBQUFBLE1BQ3BEQyxTQURvRCxjQUNwREEsU0FEb0Q7O0FBR3RFLE1BQU1DLFlBQVksb0pBQU9KLGNBQVAsMElBQTBCRCxXQUExQixFQUFsQjtBQUVBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsa0JBQ0dDLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxP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bkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUZEOztHQTVGdUJaLEk7VUFDVUcsaUU7OztLQURWSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkNWVkYjk3MzZlNjI5MDBmYjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcblxuaW1wb3J0IHtcbiAgSG9tZVBhZ2UsXG4gIExhdGVzdEVwaXNvZGVzLFxuICBBbGxFcGlzb2RlcyxcbiAgRXBpc29kZUl0ZW0sXG4gIEVwaXNvZGVJdGVtRGV0YWlscyxcbiAgRXBpc29kZUl0ZW1UaXRsZSxcbiAgRXBpc29kZUl0ZW1NZW1iZXJzLFxuICBFcGlzb2RlSXRlbUJ1dHRvbixcbiAgQWxsRXBpc29kZXNUaXRsZSxcbiAgVGFibGVFcGlzb2RlcyxcbiAgVGhlYWRFcGlzb2RlcyxcbiAgVGhFcGlzb2RlcyxcbiAgVGJvZHlFcGlzb2RlcyxcbiAgVHJFcGlzb2RlcyxcbiAgVGRFcGlzb2RlcyxcbiAgQWxsRXBpc29kZXNCdXR0b24sXG59IGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZUluZGV4JztcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyBmcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cbnR5cGUgRXBpc29kZSA9IHtcbiAgaWQ6IHN0cmluZywgICAgICBcbiAgdGl0bGU6IHN0cmluZyxcbiAgbWVtYmVyczogc3RyaW5nLFxuICBwdWJsaXNoZWRfYXQ6IHN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBwdWJsaXNoZWRfYXRfRm9ybWF0dGVkOiBzdHJpbmcsXG4gIGR1cmF0aW9uRm9ybWF0dGVkOiBzdHJpbmdcbn1cblxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGFsbEVwaXNvZGVzOiBFcGlzb2RlW107XG4gIGxhdGVzdEVwaXNvZGVzOiBFcGlzb2RlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxFcGlzb2RlcywgbGF0ZXN0RXBpc29kZXMgfTogSG9tZVByb3BzKXtcbiAgY29uc3QgeyBwbGF5TGlzdCwgaXNQbGF5aW5nIH0gPSB1c2VQbGF5ZXIoKTtcblxuICBjb25zdCBlcGlzb2Rlc0xpc3QgPSBbLi4ubGF0ZXN0RXBpc29kZXMsIC4uLmFsbEVwaXNvZGVzXTtcblxuICByZXR1cm4gKFxuICAgIDxIb21lUGFnZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9kQ2FzdDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF0ZXN0RXBpc29kZXM+XG4gICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEVwaXNvZGVJdGVtIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICB3aWR0aD17MTkyfSBcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn0gXG4gICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtRGV0YWlscz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxFcGlzb2RlSXRlbVRpdGxlPntlcGlzb2RlLnRpdGxlfTwvRXBpc29kZUl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtTWVtYmVycz57ZXBpc29kZS5tZW1iZXJzfTwvRXBpc29kZUl0ZW1NZW1iZXJzPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZF9hdF9Gb3JtYXR0ZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uRm9ybWF0dGVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9FcGlzb2RlSXRlbURldGFpbHM+XG5cbiAgICAgICAgICAgICAgPEVwaXNvZGVJdGVtQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtwbGF5TGlzdChlcGlzb2Rlc0xpc3QsIGluZGV4KX19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwicGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJ0b2NhciBlcGlzb2Rpb1wiLz5cbiAgICAgICAgICAgICAgPC9FcGlzb2RlSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgIDwvRXBpc29kZUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0xhdGVzdEVwaXNvZGVzPlxuXG4gICAgICA8QWxsRXBpc29kZXM+XG4gICAgICAgIDxBbGxFcGlzb2Rlc1RpdGxlPiBUb2RvcyBvcyBFcGlzw7NkaW9zPC9BbGxFcGlzb2Rlc1RpdGxlPlxuXG4gICAgICAgIDxUYWJsZUVwaXNvZGVzIGNlbGxTcGFjaW5nPXswfT5cbiAgICAgICAgICA8VGhlYWRFcGlzb2Rlcz5cbiAgICAgICAgICAgIDxUckVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz48L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPlBvZGNhc3Q8L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPkludGVncmFudGVzPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5EYXRhPC9UaEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8VGhFcGlzb2Rlcz5EdXJhw6fDo288L1RoRXBpc29kZXM+XG4gICAgICAgICAgICAgIDxUaEVwaXNvZGVzPjwvVGhFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgPC9UckVwaXNvZGVzPlxuICAgICAgICAgIDwvVGhlYWRFcGlzb2Rlcz5cblxuICAgICAgICAgIDxUYm9keUVwaXNvZGVzPlxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRyRXBpc29kZXMga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5tZW1iZXJzfTwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlc1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTEwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXBpc29kZS5wdWJsaXNoZWRfYXRfRm9ybWF0dGVkfVxuICAgICAgICAgICAgICAgIDwvVGRFcGlzb2Rlcz5cbiAgICAgICAgICAgICAgICA8VGRFcGlzb2Rlcz57ZXBpc29kZS5kdXJhdGlvbkZvcm1hdHRlZH08L1RkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgPFRkRXBpc29kZXM+XG4gICAgICAgICAgICAgICAgICA8QWxsRXBpc29kZXNCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtwbGF5TGlzdChlcGlzb2Rlc0xpc3QsIGluZGV4ICsgbGF0ZXN0RXBpc29kZXMubGVuZ3RoKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBsYXktZ3JlZW4uc3ZnXCIgYWx0PVwidG9jYXIgcG9kY2FzdFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvQWxsRXBpc29kZXNCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9UZEVwaXNvZGVzPlxuICAgICAgICAgICAgICA8L1RyRXBpc29kZXM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Rib2R5RXBpc29kZXM+XG4gICAgICAgIDwvVGFibGVFcGlzb2Rlcz5cbiAgICAgIDwvQWxsRXBpc29kZXM+XG4gICAgPC9Ib21lUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOkdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL2VwaXNvZGVzJywge1xuICAgIHBhcmFtczoge1xuICAgICAgX2xpbWl0OiAxMixcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKChlcGlzb2RlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG4gICAgICBwdWJsaXNoZWRfYXQ6IGVwaXNvZGUucHVibGlzaGVkX2F0LFxuICAgICAgcHVibGlzaGVkX2F0X0Zvcm1hdHRlZDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxuICAgICAgZGVzY3JpcHRpb246IGVwaXNvZGUuZGVzY3JpcHRpb24sXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkZvcm1hdHRlZDogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIHVybDogU3RyaW5nKGVwaXNvZGUuZmlsZS51cmwpLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG4gIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMiwgZXBpc29kZXMubGVuZ3RoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgIGFsbEVwaXNvZGVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDgsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9