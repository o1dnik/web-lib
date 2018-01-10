"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.as = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var as = exports.as = function as() {
  return _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).apply(undefined, arguments);
};