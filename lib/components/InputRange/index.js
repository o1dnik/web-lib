"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactInputRange = require("react-input-range");

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputRange = function InputRange(props) {
  var id = props.id,
      input = props.input,
      onChange = props.onChange,
      label = props.label,
      disabled = props.disabled;
  var minValue = props.minValue,
      maxValue = props.maxValue,
      step = props.step,
      formatLabel = props.formatLabel;


  var wrapperCss = (0, _classnames2.default)({
    "input-range-wrapper": true
  });

  return _react2.default.createElement(
    "div",
    { className: wrapperCss },
    label && _react2.default.createElement(
      "label",
      { htmlFor: id },
      label
    ),
    _react2.default.createElement(_reactInputRange2.default, {
      name: props.name || input.name,
      minValue: minValue,
      disabled: disabled,
      maxValue: maxValue,
      step: step,
      value: props.value || input.value,
      formatLabel: formatLabel,
      labelPrefix: props.labelPrefix,
      labelSuffix: props.labelSuffix,
      onChange: onChange || input.onChange,
      onChangeComplete: props.onChangeComplete
    })
  );
};

InputRange.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChangeComplete: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onDrop: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.any,
  minValue: _propTypes2.default.number,
  maxValue: _propTypes2.default.number,
  step: _propTypes2.default.number,
  labelPrefix: _propTypes2.default.string,
  labelSuffix: _propTypes2.default.string,
  formatLabel: _propTypes2.default.func,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.any
  })
};

InputRange.defaultProps = {
  input: {}
};

exports.default = InputRange;
module.exports = exports["default"];