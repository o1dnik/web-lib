"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractErrorMessage = extractErrorMessage;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _isObject = require("lodash/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractErrorMessage(message) {
  if ((0, _isObject2.default)(message) && message.id) {
    return _react2.default.createElement(_reactIntl.FormattedMessage, message);
  }

  return message;
}