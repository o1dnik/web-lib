'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.boolean,
    checked: _propTypes2.default.boolean
  }),

  meta: _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    asyncValidating: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    dispatch: _propTypes2.default.func,
    error: _propTypes2.default.string,
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    warning: _propTypes2.default.string
  })
};

Checkbox.defaultProps = {
  input: {},
  meta: {}
};

exports.default = Checkbox;
module.exports = exports['default'];