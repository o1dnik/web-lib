import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { getOldValue } from '../../helpers/getOldValue';

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

  var styles = classNames({
    'textareainput': true,
    'textareainput-success': touched && valid,
    'textareainput-error': touched && invalid
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
    React.createElement('textarea', {
      name: name || input.name,
      value: getOldValue(props),
      onChange: onChange || input.onChange,
      onBlur: onBlur || input.onBlur,
      onFocus: onFocus || input.onFocus,
      placeholder: placeholder,
      rows: rows,
      className: styles,
      id: id
    }),
    React.createElement(
      'span',
      { className: inputMessageCss },
      (dirty || touched) && invalid && error
    )
  );
};

TextareaInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,

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

TextareaInput.defaultProps = {
  input: {},
  meta: {}
};

export default TextareaInput;