import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

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


  var styles = cn({
    'radio-group': true,
    'radio-group-error': touched && invalid,
    'radio-group-success': touched && valid
  });

  var inputMessageCss = cn({
    'input-message': true,
    'input-message-error': touched && invalid,
    'input-message-success': touched && valid
  });

  var selected = safeValueProp(value) === '' ? safeValueProp(input) : safeValueProp(value);

  return React.createElement(
    'div',
    { className: styles },
    options.map(function (opt) {
      return React.createElement(
        'label',
        { htmlFor: name + opt.value, key: opt.value },
        React.createElement('input', {
          type: 'radio',
          id: name + opt.value,
          name: name,
          checked: opt.value === selected,
          onChange: function onChange() {
            return _onChange(opt);
          }
        }),
        React.createElement(
          'span',
          null,
          opt.label
        )
      );
    }),
    React.createElement(
      'span',
      { className: inputMessageCss },
      (dirty || touched) && invalid && error
    )
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }),

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    }))
  }),

  meta: PropTypes.shape({
    active: PropTypes.bool,
    asyncValidating: PropTypes.bool,
    autofilled: PropTypes.bool,
    dirty: PropTypes.bool,
    dispatch: PropTypes.func,
    error: PropTypes.string,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.string
  })
};

RadioGroup.defaultProps = {
  options: [],
  input: {},
  meta: {}
};

export default RadioGroup;