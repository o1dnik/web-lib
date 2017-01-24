'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
  var id = props.id,
      input = props.input,
      meta = props.meta,
      placeholder = props.placeholder,
      type = props.type,
      label = props.label;
  var error = meta.error,
      invalid = meta.invalid,
      valid = meta.valid,
      touched = meta.touched,
      dirty = meta.dirty;


  var inputCss = (0, _classnames2.default)({
    'input': true,
    'input-error': touched && invalid,
    'input-success': touched && valid
  });

  var inputMessageCss = (0, _classnames2.default)({
    'input-message': true,
    'input-message-error': touched && invalid,
    'input-message-success': touched && valid
  });

  return _react2.default.createElement(
    'div',
    null,
    label && _react2.default.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    _react2.default.createElement('input', { name: props.name || input.name,
      value: props.value || input.value,
      onChange: props.onChange || input.onChange,
      onBlur: props.onBlur || input.onBlur,
      onFocus: props.onFocus || input.onFocus,
      placeholder: placeholder,
      id: id,
      type: type,
      className: inputCss }),
    _react2.default.createElement(
      'span',
      { className: inputMessageCss },
      (dirty || touched) && invalid && error
    )
  );
};

Input.defaultProps = {
  input: {},
  meta: {},
  type: 'text'
};

Input.PropTypes = {
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onDragStart: _react.PropTypes.func,
  onDrop: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  value: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  type: _react.PropTypes.string,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.string
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

exports.default = Input;