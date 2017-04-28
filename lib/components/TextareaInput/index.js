'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _getOldValue = require('../../helpers/getOldValue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaInput = function TextareaInput(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      rows = props.rows,
      meta = props.meta,
      input = props.input;
  var error = meta.error,
      invalid = meta.invalid,
      valid = meta.valid,
      touched = meta.touched,
      dirty = meta.dirty;

  var styles = (0, _classnames2.default)({
    'textareainput': true,
    'textareainput-success': touched && valid,
    'textareainput-error': touched && invalid
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
    _react2.default.createElement('textarea', {
      name: name || input.name,
      value: (0, _getOldValue.getOldValue)(props),
      onChange: onChange || input.onChange,
      onBlur: onBlur || input.onBlur,
      onFocus: onFocus || input.onFocus,
      placeholder: placeholder,
      rows: rows,
      className: styles,
      id: id
    }),
    _react2.default.createElement(
      'span',
      { className: inputMessageCss },
      (dirty || touched) && invalid && error
    )
  );
};

TextareaInput.propTypes = {
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  label: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  value: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  rows: _react.PropTypes.number,

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

TextareaInput.defaultProps = {
  input: {},
  meta: {}
};

exports.default = TextareaInput;
module.exports = exports['default'];