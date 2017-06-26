"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapToStopPropagation = wrapToStopPropagation;
function wrapToStopPropagation(fn) {
  return function (e) {
    if (e) e.stopPropagation();
    fn(e);
  };
}