"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _default(element, styleObject) {
  if (_typeof(element) != 'object') console.error("Uncaught TypeError: check your element");

  for (var objProp in styleObject) {
    if (element.style[objProp] === undefined) console.warn("'".concat(objProp, "' is not css properties > ").concat(objProp, ": ").concat(styleObject[objProp], "."));
    element.style[objProp] = styleObject[objProp];
  }
}