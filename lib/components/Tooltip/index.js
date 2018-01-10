"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = require("react-tooltip");

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TooltipComponent = function TooltipComponent(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  if (children) {
    return _react2.default.createElement(
      _reactTooltip2.default,
      rest,
      children
    );
  }

  return _react2.default.createElement(_reactTooltip2.default, rest);
};

TooltipComponent.propTypes = {};

exports.default = TooltipComponent;
module.exports = exports["default"];