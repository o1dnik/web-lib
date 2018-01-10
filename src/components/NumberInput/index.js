import React, { Component } from "react"
import PropTypes from "prop-types"

import { clamp, inRange, add, subtract } from "lodash"
import { getOldValue } from "../../helpers/getOldValue"

import Button from "../Button"

class NumberInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    label: PropTypes.string,
    placeholder: PropTypes.string,

    disabled: PropTypes.bool,

    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    step: PropTypes.number,

    input: PropTypes.shape({
      name: PropTypes.string,
      onChange: PropTypes.func,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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

  static defaultProps = {
    input: {},
    meta: {}
  }

  render() {
    const { id, input, placeholder, label, disabled } = this.props

    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}

        <div className="split-group">
          <div className="short">
            <Button
              disabled={
                disabled || getOldValue(this.props) <= this.props.minValue
              }
              onMouseUp={this.handleButtonUp(subtract)}
              onMouseDown={this.handleButtonDown(subtract)}
              onTouchEnd={this.handleButtonUp(subtract)}
              onTouchStart={this.handleButtonDown(subtract)}
            >
              <i className="ion-minus-round" />
            </Button>
          </div>

          <div className="long">
            <input
              pattern="\d*"
              min={this.props.minValue}
              max={this.props.maxValue}
              step={this.props.step}
              name={this.props.name || input.name}
              value={getOldValue(this.props)}
              id={id}
              placeholder={placeholder}
              disabled={disabled}
              type="number"
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
              onFocus={this.handleInputFocus}
            />
          </div>

          <div className="short">
            <Button
              disabled={
                disabled || getOldValue(this.props) >= this.props.maxValue
              }
              onMouseUp={this.handleButtonUp(add)}
              onMouseDown={this.handleButtonDown(add)}
              onTouchEnd={this.handleButtonUp(add)}
              onTouchStart={this.handleButtonDown(add)}
            >
              <i className="ion-plus-round" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  handleButtonClick = operator => e => {
    if (e) e.preventDefault()
    const onChange = this.props.onChange || this.props.input.onChange
    const oldValue = getOldValue(this.props)
    const { minValue, maxValue, step } = this.props

    const newValue = clamp(operator(oldValue, step), minValue, maxValue)

    if (onChange && inRange(newValue, minValue, maxValue + 1)) {
      onChange(newValue)
    }
  }

  handleButtonUp = operator => e => {
    if (e) e.preventDefault()
    const onChange = this.props.onChange || this.props.input.onChange
    const { minValue, maxValue, step } = this.props

    if (!this.pressed) {
      return
    }

    if (this.interval) {
      this.stopIntervals()
      return
    }

    if (this.timeout) {
      this.stopIntervals()
    }

    const oldValue = getOldValue(this.props)
    const newValue = clamp(operator(oldValue, step), minValue, maxValue)

    if (onChange && inRange(newValue, minValue, maxValue + 1)) {
      onChange(newValue)
    }
  }

  handleButtonDown = operator => e => {
    if (e) e.preventDefault()
    const onChange = this.props.onChange || this.props.input.onChange
    const { minValue, maxValue, step } = this.props

    if (this.pressed) {
      return
    }

    this.pressed = true

    this.timeout = setTimeout(() => {
      this.interval = setInterval(() => {
        const oldValue = getOldValue(this.props)
        const newValue = clamp(operator(oldValue, step), minValue, maxValue)

        if (newValue === minValue || newValue === maxValue) {
          this.stopIntervals()
        }

        if (onChange && inRange(newValue, minValue, maxValue + 1)) {
          onChange(newValue)
        }
      }, 100)
    }, 500)
  }

  stopIntervals = () => {
    this.pressed = false

    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }

    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  handleInputChange = e => {
    const onChange = this.props.onChange || this.props.input.onChange
    const { value } = e.target
    const { minValue, maxValue } = this.props

    if (value === "") {
      return onChange(value)
    }

    const newValue = clamp(value, minValue, maxValue)

    if (onChange && inRange(newValue, minValue, maxValue + 1)) {
      onChange(newValue)
    }
  }

  handleInputBlur = e => {
    const oldValue = getOldValue(this.props)

    if (this.props.onBlur) {
      this.props.onBlur(e)
    }

    if (this.props.input.onBlur) {
      this.props.input.onBlur(oldValue)
    }
  }

  handleInputFocus = e => {
    const onFocus = this.props.onFocus || this.props.input.onFocus
    if (onFocus) onFocus(e)
  }
}

export default NumberInput
