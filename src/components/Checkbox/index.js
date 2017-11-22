import PropTypes from 'prop-types'
import React from 'react'

const Checkbox = (props) => {
  const {id, label, input, name, onChange, onFocus, onBlur, disabled} = props

  let checked = false

  if (input) {
    if (typeof input.value === 'boolean' || typeof input.checked === 'boolean') {
      checked = input.checked
    }
  }

  if (typeof props.checked === 'boolean') {
    checked = props.checked
  }

  const checkbox =
    <input
      id={id}
      disabled={disabled}
      name={name}
      checked={checked}
      onChange={onChange || input.onChange}
      onFocus={onFocus || input.onFocus}
      onBlur={onBlur || input.onBlur}
      type='checkbox'
    />

  if (!props.label) {
    return checkbox
  }

  return (
    <label htmlFor={id} className='inline'>
      {checkbox}
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.boolean,
    checked: PropTypes.boolean
  }),

  meta: PropTypes.shape({
    active: PropTypes.bool,
    asyncValidating: PropTypes.bool,
    autofilled: PropTypes.bool,
    dirty: PropTypes.bool,
    dispatch: PropTypes.func,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.string
  })
}

Checkbox.defaultProps = {
  input: {},
  meta: {}
}

export default Checkbox
