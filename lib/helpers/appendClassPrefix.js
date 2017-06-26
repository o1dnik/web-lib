"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendClassPrefix = appendClassPrefix;
function appendClassPrefix(prefix) {
  return function (className) {
    return prefix + "-" + className;
  };
}