import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"
import { getOldValue } from "../../helpers/getOldValue"
import { extractErrorMessage } from "../../helpers"

const Input = props => {
  const { id, input, meta, placeholder, type, label, disabled } = props
  const { error, invalid, valid, touched, dirty } = meta

  const inputCss = classNames({
    input: true,
    "input-error": touched && invalid,
    "input-success": touched && valid,
  })

  const inputMessageCss = classNames({
    "input-message": true,
    "input-message-error": touched && invalid,
    "input-message-success": touched && valid,
  })

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        name={props.name || input.name}
        value={getOldValue(props)}
        onChange={props.onChange || input.onChange}
        onBlur={props.onBlur || input.onBlur}
        onFocus={props.onFocus || input.onFocus}
        placeholder={placeholder}
        id={id}
        type={type}
        className={inputCss}
        disabled={disabled}
      />

      <span className={inputMessageCss}>
        {(dirty || touched) && invalid && extractErrorMessage(error)}
      </span>
    </div>
  )
}

Input.defaultProps = {
  input: {},
  meta: {},
  type: "text",
}

Input.propTypes = {
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
    value: PropTypes.string,
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
    warning: PropTypes.string,
  }),
}

export default Input
