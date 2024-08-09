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

/***/ "__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Navbar: () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Db250YWluZXIsTmF2LE5hdmJhciE9IS4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNrRDtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2luZGV4LmpzP2NhNjkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdiB9IGZyb20gXCIuL05hdlwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\n");

/***/ }),

/***/ "./src/Components/layout.js":
/*!**********************************!*\
  !*** ./src/Components/layout.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useAuth */ \"./src/useAuth.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./src/Components/search.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuth__WEBPACK_IMPORTED_MODULE_3__, _search__WEBPACK_IMPORTED_MODULE_4__]);\n([_useAuth__WEBPACK_IMPORTED_MODULE_3__, _search__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { logout, user, isAuthenticated } = (0,_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n        const handleStorageChange = ()=>{\n            setAuthStatus(isAuthenticated);\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>{\n            window.removeEventListener(\"storage\", handleStorageChange);\n        };\n    }, [\n        isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n                className: \"navbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                            href: \"/\",\n                            children: \"Crypto Market App\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                            icon: \"home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/AllCoins\",\n                                            children: \"All Coins\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                            as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        authStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                href: \"#\",\n                                                onClick: (e)=>{\n                                                    e.preventDefault();\n                                                    logout();\n                                                    alert(\"you are signed out\");\n                                                },\n                                                children: \"Sign out\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                                    href: \"/login\",\n                                                    children: \"Login\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                    as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                                    href: \"/register\",\n                                                    children: \"Register\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"ms-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                                            icon: \"fa-solid fa-magnifying-glass\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"main-content\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\layout.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUM0QjtBQUNwQjtBQUNQO0FBQ21DO0FBQ2pFLE1BQU1VLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsZUFBZSxFQUFFLEdBQUdQLGlEQUFPQTtJQUNqRCxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUNZO0lBRTdDYixnREFBU0EsQ0FBQztRQUNSLElBQUksS0FBa0IsRUFBYSxFQUVsQztRQUVELE1BQU1nQixzQkFBc0I7WUFDMUJELGNBQWNGO1FBQ2hCO1FBRUFJLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdGO1FBRW5DLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0g7UUFDeEM7SUFDRixHQUFHO1FBQUNIO0tBQWdCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ1IsK0ZBQU1BO2dCQUFDZSxXQUFVOzBCQUNsQiw0RUFBQ2pCLGtHQUFTQTs7c0NBQ04sOERBQUNFLCtGQUFNQSxDQUFDZ0IsS0FBSzs0QkFBQ0MsTUFBSztzQ0FBSTs7Ozs7O3NDQUN2Qiw4REFBQ2pCLCtGQUFNQSxDQUFDa0IsTUFBTTs0QkFBQ0MsaUJBQWM7Ozs7OztzQ0FDN0IsOERBQUNuQiwrRkFBTUEsQ0FBQ29CLFFBQVE7NEJBQUNDLElBQUc7OzhDQUNsQiw4REFBQ3RCLDRGQUFHQTtvQ0FBQ2dCLFdBQVU7O3NEQUNmLDhEQUFDWiwyRUFBZUE7NENBQUNtQixNQUFLOzs7Ozs7c0RBRXBCLDhEQUFDdkIsNEZBQUdBLENBQUNGLElBQUk7NENBQUMwQixJQUFJMUIsa0RBQUlBOzRDQUFFb0IsTUFBSztzREFBWTs7Ozs7O3NEQUNyQyw4REFBQ2xCLDRGQUFHQSxDQUFDRixJQUFJOzRDQUFDMEIsSUFBSTFCLGtEQUFJQTs0Q0FBRW9CLE1BQUs7c0RBQVM7Ozs7Ozt3Q0FDakNSLDJCQUNDO3NEQUlFLDRFQUFDViw0RkFBR0EsQ0FBQ0YsSUFBSTtnREFBQ29CLE1BQUs7Z0RBQUlPLFNBQVMsQ0FBQ0M7b0RBQVFBLEVBQUVDLGNBQWM7b0RBQUlwQjtvREFBVXFCLE1BQU07Z0RBQXNCOzBEQUFHOzs7Ozs7MEVBR3BHOzs4REFDRSw4REFBQzVCLDRGQUFHQSxDQUFDRixJQUFJO29EQUFDMEIsSUFBSTFCLGtEQUFJQTtvREFBRW9CLE1BQUs7OERBQVM7Ozs7Ozs4REFFbEMsOERBQUNsQiw0RkFBR0EsQ0FBQ0YsSUFBSTtvREFBQzBCLElBQUkxQixrREFBSUE7b0RBQUVvQixNQUFLOzhEQUFZOzs7Ozs7Ozs7Ozs7Ozs4Q0FJM0MsOERBQUNsQiw0RkFBR0E7b0NBQUNnQixXQUFVOztzREFDZiw4REFBQ1osMkVBQWVBOzRDQUFDbUIsTUFBSzs7Ozs7O3NEQUNwQiw4REFBQ3BCLCtDQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZiw4REFBQ0osa0dBQVNBOzBCQUNSLDRFQUFDOEI7b0JBQUtiLFdBQVU7OEJBQ2JWOzs7Ozs7Ozs7Ozs7O0FBS1g7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvQ29tcG9uZW50cy9sYXlvdXQuanM/MzM3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXYsIE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi91c2VBdXRoJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ291dCwgdXNlciwgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGUoaXNBdXRoZW50aWNhdGVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcmFnZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgc2V0QXV0aFN0YXR1cyhpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZiYXInPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPkNyeXB0byBNYXJrZXQgQXBwPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiaG9tZVwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9BbGxDb2luc1wiPkFsbCBDb2luczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGFzPXtMaW5rfSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIHthdXRoU3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmF2b3JpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvZmF2b3VyaXRlc1wiPkZhdm9yaXRlczwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGxvZ291dCgpOyBhbGVydCgneW91IGFyZSBzaWduZWQgb3V0JykgfX0+U2lnbiBvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9OYXYuTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBhcz17TGlua30gaHJlZj1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1wiIC8+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJ1c2VBdXRoIiwiU2VhcmNoIiwiRm9udEF3ZXNvbWVJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2dvdXQiLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXR1cyIsInNldEF1dGhTdGF0dXMiLCJoYW5kbGVTdG9yYWdlQ2hhbmdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJCcmFuZCIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsImljb24iLCJhcyIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/layout.js\n");

/***/ }),

/***/ "./src/Components/search.js":
/*!**********************************!*\
  !*** ./src/Components/search.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);\n([axios__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Components/Search.js\n\n\n\n\n\n\nconst Search = ()=>{\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        setError(null);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/crypto\");\n            const cryptos = response.data.data;\n            const crypto = cryptos.find((c)=>c.name.toLowerCase() === query.toLowerCase());\n            if (crypto) {\n                router.push(`/crypto/${crypto.id}`);\n            } else {\n                setError(\"Cryptocurrency not found\");\n            }\n        } catch (err) {\n            console.error(\"Error searching for cryptocurrency:\", err);\n            setError(\"An error occurred while searching for the cryptocurrency\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"search-container\",\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"search\",\n                        className: \"search-input\",\n                        placeholder: \"Search for a cryptocurrency\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"search-btn\",\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSearch\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\Components\\\\search.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ1U7QUFDTztBQUNkO0FBQ3VDO0FBQ0o7QUFJN0QsTUFBTUssU0FBUztJQUNiLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVUsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJKLFNBQVM7UUFFVCxJQUFJO1lBQ0YsTUFBTUssV0FBVyxNQUFNWixpREFBUyxDQUFDO1lBQ2pDLE1BQU1jLFVBQVVGLFNBQVNHLElBQUksQ0FBQ0EsSUFBSTtZQUVsQyxNQUFNQyxTQUFTRixRQUFRRyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxDQUFDQyxXQUFXLE9BQU9oQixNQUFNZ0IsV0FBVztZQUU3RSxJQUFJSixRQUFRO2dCQUNWUixPQUFPYSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUVMLE9BQU9NLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE9BQU87Z0JBQ0xmLFNBQVM7WUFDWDtRQUNGLEVBQUUsT0FBT2dCLEtBQUs7WUFDWkMsUUFBUWxCLEtBQUssQ0FBQyx1Q0FBdUNpQjtZQUNyRGhCLFNBQVM7UUFDWDtJQUNGO0lBSUEscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNDO2dCQUFLQyxXQUFVO2dCQUFtQkMsVUFBVW5COztrQ0FDM0MsOERBQUNvQjt3QkFDQ0MsTUFBSzt3QkFDTFgsTUFBSzt3QkFDTFEsV0FBVTt3QkFDVkksYUFBWTt3QkFDWkMsT0FBTzVCO3dCQUNQNkIsVUFBVSxDQUFDdkIsSUFBTUwsU0FBU0ssRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUUxQyw4REFBQ0c7d0JBQU9SLFdBQVU7d0JBQWFHLE1BQUs7a0NBQ3BDLDRFQUFDN0IsMkVBQWVBOzRCQUFDbUMsTUFBTWxDLHVFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJaENJLHVCQUFTLDhEQUFDK0I7MEJBQUcvQjs7Ozs7Ozs7Ozs7O0FBSXBCO0FBRUEsaUVBQWVILE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL0NvbXBvbmVudHMvc2VhcmNoLmpzPzZjNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29tcG9uZW50cy9TZWFyY2guanNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NyeXB0bycpO1xyXG4gICAgICBjb25zdCBjcnlwdG9zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgY29uc3QgY3J5cHRvID0gY3J5cHRvcy5maW5kKChjKSA9PiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICBpZiAoY3J5cHRvKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jcnlwdG8vJHtjcnlwdG8uaWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0NyeXB0b2N1cnJlbmN5IG5vdCBmb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIGZvciBjcnlwdG9jdXJyZW5jeTonLCBlcnIpO1xyXG4gICAgICBzZXRFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2VhcmNoaW5nIGZvciB0aGUgY3J5cHRvY3VycmVuY3knKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3NlYXJjaC1jb250YWluZXInIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtaW5wdXQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjcnlwdG9jdXJyZW5jeVwiXHJcbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzZWFyY2gtYnRuJyB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNlYXJjaH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTZWFyY2giLCJTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZ2V0IiwiY3J5cHRvcyIsImRhdGEiLCJjcnlwdG8iLCJmaW5kIiwiYyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJpZCIsImVyciIsImNvbnNvbGUiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJpY29uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/search.js\n");

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst API_KEY = \"AIzaSyDMQdm0ajy8qWSbDQaIR79_TwqJ52UgxrU\";\nconst firebaseConfig = {\n    apiKey: API_KEY,\n    authDomain: \"webserver-17338.firebaseapp.com\",\n    projectId: \"webserver-17338\",\n    storageBucket: \"webserver-17338.appspot.com\",\n    messagingSenderId: \"581777767329\",\n    appId: \"1:581777767329:web:f730df70f5a0ea02a3a9e0\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNVO0FBRWxELE1BQU1HLFVBQVVDLHlDQUFvQztBQUVwRCxNQUFNRyxpQkFBaUI7SUFDckJDLFFBQVFMO0lBQ1JNLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsTUFBTWQsMkRBQWFBLENBQUNPO0FBQ25CLE1BQU1RLE9BQU9kLHNEQUFPQSxDQUFDYSxLQUFLO0FBQzFCLE1BQU1FLEtBQUtkLGdFQUFZQSxDQUFDWSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9maXJlYmFzZS5qcz82N2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfS0VZO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBBUElfS0VZLFxyXG4gIGF1dGhEb21haW46ICd3ZWJzZXJ2ZXItMTczMzguZmlyZWJhc2VhcHAuY29tJyxcclxuICBwcm9qZWN0SWQ6ICd3ZWJzZXJ2ZXItMTczMzgnLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICd3ZWJzZXJ2ZXItMTczMzguYXBwc3BvdC5jb20nLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNTgxNzc3NzY3MzI5JyxcclxuICBhcHBJZDogJzE6NTgxNzc3NzY3MzI5OndlYjpmNzMwZGY3MGY1YTBlYTAyYTNhOWUwJyxcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfS0VZIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/layout */ \"./src/Components/layout.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emailjs/browser */ \"@emailjs/browser\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_layout__WEBPACK_IMPORTED_MODULE_3__]);\n_Components_layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Initialize EmailJS with your public key\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_4___default().init(\"mDct-VJnimxzudmJR\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\New folder (2)\\\\Web422\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2hCO0FBQ1c7QUFDRjtBQUNMO0FBRW5CLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFFbERILGdEQUFTQSxDQUFDO1FBQ1IsMENBQTBDO1FBQzFDRCw0REFBWSxDQUFDO0lBQ2YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNELDBEQUFNQTtrQkFDTCw0RUFBQ0k7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICdAL0NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEluaXRpYWxpemUgRW1haWxKUyB3aXRoIHlvdXIgcHVibGljIGtleVxyXG4gICAgZW1haWxqcy5pbml0KFwibURjdC1WSm5pbXh6dWRtSlJcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiZW1haWxqcyIsInVzZUVmZmVjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/useAuth.js":
/*!************************!*\
  !*** ./src/useAuth.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst useAuth = ()=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [authStatus, setAuthStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            if (user) {\n                setUser(user);\n                setAuthStatus(true);\n            } else {\n                setUser(null);\n                setAuthStatus(false);\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const register = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during registration:\", error);\n            throw error;\n        }\n    };\n    const login = async ({ email, password })=>{\n        try {\n            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n            setUser(userCredential.user);\n            setAuthStatus(true);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n            throw error;\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n            setUser(null);\n            setAuthStatus(false);\n            router.push(\"/login\");\n        } catch (error) {\n            console.error(\"Error during logout:\", error);\n            throw error;\n        }\n    };\n    return {\n        user,\n        register,\n        login,\n        logout,\n        isAuthenticated: authStatus\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDTjtBQUNzRjtBQUVqSCxNQUFNUSxVQUFVO0lBQ3JCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTWEsU0FBU1gsc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWNQLGlFQUFrQkEsQ0FBQ0osMkNBQUlBLEVBQUUsQ0FBQ007WUFDNUMsSUFBSUEsTUFBTTtnQkFDUkMsUUFBUUQ7Z0JBQ1JHLGNBQWM7WUFDaEIsT0FBTztnQkFDTEYsUUFBUTtnQkFDUkUsY0FBYztZQUNoQjtRQUNGO1FBRUEsT0FBTyxJQUFNRTtJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFdBQVcsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtRQUN6QyxJQUFJO1lBQ0YsTUFBTUMsaUJBQWlCLE1BQU1kLDZFQUE4QkEsQ0FBQ0QsMkNBQUlBLEVBQUVhLE9BQU9DO1lBQ3pFUCxRQUFRUSxlQUFlVCxJQUFJO1lBQzNCRyxjQUFjO1lBQ2RDLE9BQU9NLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM1QyxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNRSxRQUFRLE9BQU8sRUFBRU4sS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDdEMsSUFBSTtZQUNGLE1BQU1DLGlCQUFpQixNQUFNYix5RUFBMEJBLENBQUNGLDJDQUFJQSxFQUFFYSxPQUFPQztZQUNyRVAsUUFBUVEsZUFBZVQsSUFBSTtZQUMzQkcsY0FBYztZQUNkQyxPQUFPTSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7WUFDckMsTUFBTUE7UUFDUjtJQUNGO0lBRUEsTUFBTUcsU0FBUztRQUNiLElBQUk7WUFDRixNQUFNakIsc0RBQU9BLENBQUNILDJDQUFJQTtZQUNsQk8sUUFBUTtZQUNSRSxjQUFjO1lBQ2RDLE9BQU9NLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN0QyxNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xYO1FBQ0FNO1FBQ0FPO1FBQ0FDO1FBQ0FDLGlCQUFpQmI7SUFDbkI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy91c2VBdXRoLmpzPzJhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F1dGhTdGF0dXMsIHNldEF1dGhTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHNldEF1dGhTdGF0dXModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICBzZXRBdXRoU3RhdHVzKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xyXG4gICAgICBzZXRBdXRoU3RhdHVzKHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcclxuICAgICAgc2V0QXV0aFN0YXR1cyh0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBsb2dpbjonLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgIHNldEF1dGhTdGF0dXMoZmFsc2UpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgbG9nb3V0OicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGxvZ2luLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBhdXRoU3RhdHVzLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJhdXRoU3RhdHVzIiwic2V0QXV0aFN0YXR1cyIsInJvdXRlciIsInVuc3Vic2NyaWJlIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9naW4iLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useAuth.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@emailjs/browser":
/*!***********************************!*\
  !*** external "@emailjs/browser" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emailjs/browser");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-extra/lib/all":
/*!*******************************************!*\
  !*** external "prop-types-extra/lib/all" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types-extra/lib/all");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();