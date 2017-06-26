import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { getOldValue } from '../../helpers/getOldValue';

var Input = function Input(props) {
  var id = props.id,
      input = props.input,
      meta = props.meta,
      placeholder = props.placeholder,
      type = props.type,
      label = props.label,
      disabled = props.disabled;
  var error = meta.error,
      invalid = meta.invalid,
      valid = meta.valid,
      touched = meta.touched,
      dirty = meta.dirty;


  var inputCss = classNames({
    'input': true,
    'input-error': touched && invalid,
    'input-success': touched && valid
  });

  var inputMessageCss = classNames({
    'input-message': true,
    'input-message-error': touched && invalid,
    'input-message-success': touched && valid
  });

  return React.createElement(
    'div',
    null,
    label && React.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    React.createElement('input', {
      name: props.name || input.name,
      value: getOldValue(props),
      onChange: props.onChange || input.onChange,
      onBlur: props.onBlur || input.onBlur,
      onFocus: props.onFocus || input.onFocus,
      placeholder: placeholder,
      id: id,
      type: type,
      className: inputCss,
      disabled: disabled
    }),
    React.createElement(
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
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
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

export default Input;
module.exports = exports['default'];