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
  small: 24,
  medium: 56,
  large: 76,
  xlarge: 96
};

var sizeBordermap = {
  xsmall: 3,
  small: 4,
  medium: 5,
  large: 6,
  xlarge: 8
};

var Loader = function Loader(props) {
  return _react2.default.createElement("div", {
    className: "loader",
    style: {
      width: sizeMap[props.size],
      height: sizeMap[props.size],
      borderWidth: sizeBordermap[props.size],
      marginLeft: sizeMap[props.size] / -2
    }
  });
};

Loader.propTypes = {
  size: _propTypes2.default.string.isRequired
};

Loader.defaultProps = {
  size: "medium"
};

exports.default = Loader;
module.exports = exports["default"];