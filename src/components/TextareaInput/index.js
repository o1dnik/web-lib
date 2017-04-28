import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { getOldValue } from '../../helpers/getOldValue'

const TextareaInput = (props) => {
  const {
    id,
    name,
    label,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    rows,
    meta,
    input
  } = props

  const {error, invalid, valid, touched, dirty} = meta
  const styles = classNames({
    'textareainput': true,
    'textareainput-success': (touched && valid),
    'textareainput-error': (touched && invalid)
  })

  const inputMessageCss = classNames({
    'input-message': true,
    'input-message-error': (touched && invalid),
    'input-message-success': (touched && valid)
  })

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        name={name || input.name}
        value={getOldValue(props)}
        onChange={onChange || input.onChange}
        onBlur={onBlur || input.onBlur}
        onFocus={onFocus || input.onFocus}
        placeholder={placeholder}
        rows={rows}
        className={styles}
        id={id}
      />
      <span className={inputMessageCss}>
        {(dirty || touched) && invalid && error}
      </span>
    </div>
  )
}

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
}

TextareaInput.defaultProps = {
  input: {},
  meta: {}
}

export default TextareaInput
