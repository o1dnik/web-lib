'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  var id = props.id,
      label = props.label,
      input = props.input,
      name = props.name,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur;


  var checked = false;

  if (input) {
    if (typeof input.value === 'boolean' || typeof input.checked === 'boolean') {
      checked = input.checked;
    }
  }

  if (typeof props.checked === 'boolean') {
    checked = props.checked;
  }

  var checkbox = _react2.default.createElement('input', {
    id: id,
    name: name,
    checked: checked,
    onChange: onChange || input.onChange,
    onFocus: onFocus || input.onFocus,
    onBlur: onBlur || input.onBlur,
    type: 'checkbox'
  });

  if (!props.label) {
    return checkbox;
  }

  return _react2.default.createElement(
    'label',
    { htmlFor: id, className: 'inline' },
    checkbox,
    label
  );
};

Checkbox.propTypes = {
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  checked: _react.PropTypes.bool,
  label: _react.PropTypes.string
};

Checkbox.defaultProps = {
  input: {},
  meta: {}
};

exports.default = Checkbox;