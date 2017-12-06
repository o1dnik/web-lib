import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import { extractErrorMessage } from '../../helpers'

const safeValueProp = obj => obj ? obj['value'] : ''
const RadioGroup = props => {
  const {name, label, options, value, onChange, input, meta} = props
  const {error, invalid, valid, touched, dirty} = meta

  const styles = cn({
    'radio-group': true,
    'radio-group-error': (touched && invalid),
    'radio-group-success': (touched && valid)
  })

  const inputMessageCss = cn({
    'input-message': true,
    'input-message-error': (touched && invalid),
    'input-message-success': (touched && valid)
  })

  const selected = safeValueProp(value) === ''
    ? safeValueProp(input)
    : safeValueProp(value)

  return (
    <div className={styles}>
      {options.map(opt => (
        <label htmlFor={name + opt.value} key={opt.value}>
          <input
            type='radio'
            id={name + opt.value}
            name={name}
            checked={opt.value === selected}
            onChange={() => onChange(opt)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
      <span className={inputMessageCss}>
        {(dirty || touched) && invalid && extractErrorMessage(error)}
      </span>
    </div>
  )
}

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
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.string
  })
}

RadioGroup.defaultProps = {
  options: [],
  input: {},
  meta: {}
}

export default RadioGroup
