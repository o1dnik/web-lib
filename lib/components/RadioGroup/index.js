'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeValueProp = function safeValueProp(obj) {
  return obj ? obj['value'] : '';
};
var RadioGroup = function RadioGroup(props) {
  var name = props.name,
      label = props.label,
      options = props.options,
      value = props.value,
      _onChange = props.onChange,
      input = props.input,
      meta = props.meta;
  var error = meta.error,
      invalid = meta.invalid,
      valid = meta.valid,
      touched = meta.touched,
      dirty = meta.dirty;


  var styles = (0, _classnames2.default)({
    'radio-group': true,
    'radio-group-error': touched && invalid,
    'radio-group-success': touched && valid
  });

  var inputMessageCss = (0, _classnames2.default)({
    'input-message': true,
    'input-message-error': touched && invalid,
    'input-message-success': touched && valid
  });

  var selected = safeValueProp(value) === '' ? safeValueProp(input) : safeValueProp(value);

  return _react2.default.createElement(
    'div',
    { className: styles },
    options.map(function (opt) {
      return _react2.default.createElement(
        'label',
        { htmlFor: name + opt.value, key: opt.value },
        _react2.default.createElement('input', {
          type: 'radio',
          id: name + opt.value,
          name: name,
          checked: opt.value === selected,
          onChange: function onChange() {
            return _onChange(opt);
          }
        }),
        _react2.default.createElement(
          'span',
          null,
          opt.label
        )
      );
    }),
    _react2.default.createElement(
      'span',
      { className: inputMessageCss },
      (dirty || touched) && invalid && (0, _helpers.extractErrorMessage)(error)
    )
  );
};

RadioGroup.propTypes = {
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string,
    label: _propTypes2.default.string
  })).isRequired,
  value: _propTypes2.default.shape({
    value: _propTypes2.default.string,
    label: _propTypes2.default.string
  }),

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      value: _propTypes2.default.string,
      label: _propTypes2.default.string
    }))
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

RadioGroup.defaultProps = {
  options: [],
  input: {},
  meta: {}
};

exports.default = RadioGroup;
module.exports = exports['default'];