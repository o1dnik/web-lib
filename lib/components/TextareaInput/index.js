"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _getOldValue = require("../../helpers/getOldValue");

var _helpers = require("../../helpers");

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
    textareainput: true,
    "textareainput-success": touched && valid,
    "textareainput-error": touched && invalid
  });

  var inputMessageCss = (0, _classnames2.default)({
    "input-message": true,
    "input-message-error": touched && invalid,
    "input-message-success": touched && valid
  });

  return _react2.default.createElement(
    "div",
    null,
    label && _react2.default.createElement(
      "label",
      { htmlFor: id },
      label
    ),
    _react2.default.createElement("textarea", {
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
      "span",
      { className: inputMessageCss },
      (dirty || touched) && invalid && (0, _helpers.extractErrorMessage)(error)
    )
  );
};

TextareaInput.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  rows: _propTypes2.default.number,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.string
  }),

  meta: _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    asyncValidating: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    dispatch: _propTypes2.default.func,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    warning: _propTypes2.default.string
  })
};

TextareaInput.defaultProps = {
  input: {},
  meta: {}
};

exports.default = TextareaInput;
module.exports = exports["default"];