"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _omit2 = require("lodash/omit");

var _omit3 = _interopRequireDefault(_omit2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcProgress = require("rc-progress");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarComponent = function ProgressBarComponent(props) {
  var className = props.className,
      label = props.label;


  var css = (0, _classnames2.default)({
    progressbar: true
  }, className);

  return _react2.default.createElement(
    "div",
    { className: css },
    label,
    _react2.default.createElement(_rcProgress.Line, (0, _omit3.default)(props, Object.keys(ProgressBarComponent.propTypes)))
  );
};

ProgressBarComponent.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.node
};

exports.default = ProgressBarComponent;
module.exports = exports["default"];