"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
};

var FontLoader = function FontLoader(props) {
  return _react2.default.createElement("i", {
    style: { fontSize: sizeMap[props.size] },
    className: "ion-load-c animate-spin font-loader"
  });
};

FontLoader.propTypes = {
  size: _propTypes2.default.string.isRequired
};

FontLoader.defaultProps = {
  size: "medium"
};

exports.default = FontLoader;
module.exports = exports["default"];