"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./features/counterSlice.ts":
/*!**********************************!*\
  !*** ./features/counterSlice.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: 0\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'counter',\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb3VudGVyU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2RDtBQU03RCxLQUFLLENBQUNDLFlBQVksR0FBaUIsQ0FBQztJQUNoQ0MsS0FBSyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRU0sS0FBSyxDQUFDQyxZQUFZLEdBQUdILDZEQUFXLENBQUMsQ0FBQztJQUNyQ0ksSUFBSSxFQUFFLENBQVM7SUFDZkgsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNQQyxTQUFTLEdBQUdDLEtBQUssR0FBSyxDQUFDO1lBQ25CLEVBQW9FO1lBQ3BFLEVBQXVFO1lBQ3ZFLEVBQW9FO1lBQ3BFLEVBQTBDO1lBQzFDQSxLQUFLLENBQUNMLEtBQUssSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFDRE0sU0FBUyxHQUFHRCxLQUFLLEdBQUssQ0FBQztZQUNuQkEsS0FBSyxDQUFDTCxLQUFLLElBQUksQ0FBQztRQUNwQixDQUFDO1FBQ0RPLGlCQUFpQixHQUFHRixLQUFLLEVBQUVHLE1BQTZCLEdBQUssQ0FBQztZQUMxREgsS0FBSyxDQUFDTCxLQUFLLElBQUlRLE1BQU0sQ0FBQ0MsT0FBTztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxFQUErRDtBQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDTCxTQUFTLEdBQUVFLFNBQVMsR0FBRUMsaUJBQWlCLEVBQUMsQ0FBQyxHQUFHTixZQUFZLENBQUNTLE9BQU87QUFFL0UsaUVBQWVULFlBQVksQ0FBQ1UsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2ZlYXR1cmVzL2NvdW50ZXJTbGljZS50cz82Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xuICAgIHZhbHVlOiBudW1iZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XG4gICAgdmFsdWU6IDAsXG59XG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NvdW50ZXInLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxuICAgICAgICAgICAgLy8gZG9lc24ndCBhY3R1YWxseSBtdXRhdGUgdGhlIHN0YXRlIGJlY2F1c2UgaXQgdXNlcyB0aGUgSW1tZXIgbGlicmFyeSxcbiAgICAgICAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcbiAgICAgICAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gMVxuICAgICAgICB9LFxuICAgICAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgLT0gMVxuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICB9LFxufSlcblxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/counterSlice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n// redux\n\n\nfunction MyApp(props) {\n    const { Component , pageProps  } = props;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Remove the server-side injected CSS.\n        const jssStyles = document.querySelector('#jss-server-side');\n        if (jssStyles) {\n            // @ts-ignore\n            jssStyles.parentElement.removeChild(jssStyles);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_6__.store,\n        __source: {\n            fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n            lineNumber: 26\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                    lineNumber: 27\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                            lineNumber: 28\n                        },\n                        __self: this,\n                        children: \"My page\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n                        __source: {\n                            fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                            lineNumber: 29\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                __source: {\n                    fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                    lineNumber: 31\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                            lineNumber: 33\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"/Users/user/Desktop/next-ts/pages/_app.tsx\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBRUc7QUFDNEI7QUFDRDtBQUN2QjtBQUdoQyxFQUFRO0FBQ3dCO0FBQ007QUFFdkIsUUFBUSxDQUFDTyxLQUFLLENBQUNDLEtBQWUsRUFBRSxDQUFDO0lBQzVDLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxTQUFTLEdBQUVDLFNBQVMsR0FBQyxHQUFHRixLQUFLO0lBRXBDUixzREFBZSxLQUFPLENBQUM7UUFDbkIsRUFBdUM7UUFDdkMsS0FBSyxDQUFDWSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQWtCO1FBQzNELEVBQUUsRUFBRUYsU0FBUyxFQUFFLENBQUM7WUFDWixFQUFhO1lBQ2JBLFNBQVMsQ0FBQ0csYUFBYSxDQUFDQyxXQUFXLENBQUNKLFNBQVM7UUFDakQsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNETixpREFBUTtRQUFDRCxLQUFLLEVBQUVBLHlDQUFLOzs7Ozs7O2tGQUNqQkosa0RBQUk7Ozs7Ozs7eUZBQ0FnQixDQUFLOzs7Ozs7a0NBQUMsQ0FBTzs7eUZBQ2JDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0Q7Ozs7Ozs7OztrRkFFdkZsQixtRUFBYTtnQkFBQ0UsS0FBSyxFQUFFQSxrREFBSzs7Ozs7Ozt5RkFFdEJELHNFQUFXOzs7Ozs7O3lGQUNYTSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUl4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcbmltcG9ydCB7QXBwUHJvcHN9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG4vLyByZWR1eFxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBBcHBQcm9wcykge1xuICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSBwcm9wcztcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgICAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwidGhlbWUiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a theme instance.\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#556cd6'\n        },\n        secondary: {\n            main: '#19857b'\n        },\n        background: {\n            default: '#fff'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELEVBQTJCO0FBQzNCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxxRUFBVyxDQUFDLENBQUM7SUFDekJFLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLElBQUksRUFBRSxDQUFTO1FBQ2pCLENBQUM7UUFDREMsU0FBUyxFQUFFLENBQUM7WUFDVkQsSUFBSSxFQUFFLENBQVM7UUFDakIsQ0FBQztRQUNERSxVQUFVLEVBQUUsQ0FBQztZQUNYQyxPQUFPLEVBQUUsQ0FBTTtRQUNqQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZU4sS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3RoZW1lLmpzP2FmYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM1NTZjZDYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzE5ODU3YicsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/counterSlice */ \"./features/counterSlice.ts\");\n// @ts-ignore\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        counter: _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBYTtBQUNvQztBQUNJO0FBRTlDLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDbkNHLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLE9BQU8sRUFBRUgsOERBQWM7SUFDekIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tICcuLi9mZWF0dXJlcy9jb3VudGVyU2xpY2UnXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyLFxuICB9LFxufSlcblxuLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG4vLyBJbmZlcnJlZCB0eXBlOiB7cG9zdHM6IFBvc3RzU3RhdGUsIGNvbW1lbnRzOiBDb21tZW50c1N0YXRlLCB1c2VyczogVXNlcnNTdGF0ZX1cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsImNvdW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();