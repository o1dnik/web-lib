'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactInputRange = require('react-input-range');

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _react = require('react');

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


  var wrapperCss = (0, _classnames2.default)({ 'input-range': true });

  return _react2.default.createElement(
    'div',
    { className: wrapperCss },
    label && _react2.default.createElement(
      'label',
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
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onChangeComplete: _react.PropTypes.func,
  onDragStart: _react.PropTypes.func,
  onDrop: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  value: _react.PropTypes.any,
  minValue: _react.PropTypes.number,
  maxValue: _react.PropTypes.number,
  step: _react.PropTypes.number,
  labelPrefix: _react.PropTypes.string,
  labelSuffix: _react.PropTypes.string,
  formatLabel: _react.PropTypes.func,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.any
  })

};

InputRange.defaultProps = {
  input: {}
};

exports.default = InputRange;
module.exports = exports['default'];