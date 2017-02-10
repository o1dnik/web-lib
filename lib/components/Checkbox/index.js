'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      onBlur = props.onBlur,
      disabled = props.disabled;


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
    disabled: disabled,
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
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.boolean,
    checked: _react.PropTypes.boolean
  }),

  meta: _react.PropTypes.shape({
    active: _react.PropTypes.bool,
    asyncValidating: _react.PropTypes.bool,
    autofilled: _react.PropTypes.bool,
    dirty: _react.PropTypes.bool,
    dispatch: _react.PropTypes.func,
    error: _react.PropTypes.string,
    invalid: _react.PropTypes.bool,
    pristine: _react.PropTypes.bool,
    submitting: _react.PropTypes.bool,
    touched: _react.PropTypes.bool,
    valid: _react.PropTypes.bool,
    visited: _react.PropTypes.bool,
    warning: _react.PropTypes.string
  })
};

Checkbox.defaultProps = {
  input: {},
  meta: {}
};

exports.default = Checkbox;
module.exports = exports['default'];