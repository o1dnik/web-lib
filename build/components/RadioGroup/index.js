'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
      (dirty || touched) && invalid && error
    )
  );
};

RadioGroup.propTypes = {
  name: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.string,
    label: _react.PropTypes.string
  })).isRequired,
  value: _react.PropTypes.shape({
    value: _react.PropTypes.string,
    label: _react.PropTypes.string
  }),

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.string,
      label: _react.PropTypes.string
    }))
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

RadioGroup.defaultProps = {
  options: [],
  input: {},
  meta: {}
};

exports.default = RadioGroup;