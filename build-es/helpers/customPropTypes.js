'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.as = undefined;

var _react = require('react');

var as = exports.as = function as() {
  return _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).apply(undefined, arguments);
};