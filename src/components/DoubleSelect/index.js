import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Select from '../Select'
import cn from 'classnames'
import {isEmpty} from 'lodash'
import { extractErrorMessage } from '../../helpers'

class DoubleSelect extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    disabledIfValid: PropTypes.bool,
    selectOptions: PropTypes.array,
    levelOptions: PropTypes.array,
    iconClassName: PropTypes.string,
    onInputChange: PropTypes.func,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.any
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
  };

  static defaultProps = {
    iconClassName: 'ion-close',
    input: {},
    meta: {}
  };

  render () {
    const {value, selectOptions, levelOptions, input, meta} = this.props
    const {subLabel, label, onRemove, iconClassName, disabled} = this.props
    const {searchableSelect, isLoading, disabledIfValid} = this.props

    const {error, invalid, valid, touched, dirty} = meta

    const css = cn({
      'select-double': true,
      'options-box': true,
      'select-double-error': (touched && invalid),
      'select-double-success': (touched && valid),
      done: valid
    })

    const inputMessageCss = cn({
      'input-message': true,
      'input-message-error': (touched && invalid),
      'input-message-success': (touched && valid)
    })

    const selectValid = Boolean(
      (value && value.select) || (input.value && input.value.select)
    )
    const selectInValid = !selectValid

    const levelValid = Boolean(
      (value && value.level) || (input.value && input.value.level)
    )
    const levelInValid = !levelValid

    return (
      <div className={css}>

        {onRemove &&
        <span className='close' onClick={!disabled && onRemove}>
          <i className={iconClassName} />
        </span>}

        <Select
          label={label}
          value={(value && value.select) || (input.value && input.value.select)}
          onInputChange={this.props.onInputChange}
          onChange={this.handleSelectChange}
          onBlur={this.handleSelectBlur}
          onFocus={this.handleSelectFocus}
          noArrow={disabled || (disabledIfValid && valid)}
          options={selectOptions}
          clearable={false}
          meta={{
            touched,
            valid: selectValid,
            invalid: selectInValid
          }}
          searchable={searchableSelect}
          isLoading={isLoading}
          disabled={disabled || (disabledIfValid && valid)}
        />

        {selectValid &&
        <Select
          label={subLabel}
          value={(value && value.level) || (input.value && input.value.level)}
          onChange={this.handleLevelChange}
          onBlur={this.handleLevelBlur}
          onFocus={this.handleLevelFocus}
          options={levelOptions}
          clearable={false}
          searchable={false}
          meta={{
            touched,
            valid: levelValid,
            invalid: levelInValid
          }}
          noArrow={disabled}
          disabled={disabled}
        />
        }

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && extractErrorMessage(error)}
        </span>

      </div>
    )
  }

  handleSelectChange = (selectValue) => {
    const onChange = this.props.onChange || this.props.input.onChange

    const oldVal = this.getOldValue()

    const newVal = {
      ...oldVal,
      select: (selectValue && selectValue.value) || selectValue
    }

    onChange(newVal, oldVal)
  }

  handleSelectBlur = (e) => {
    if (this.props.onBlur) {
      return this.props.onBlur(e)
    }

    if (this.props.input.onBlur) {
      this.props.input.onBlur(this.getOldValue())
    }
  }

  handleSelectFocus = (e) => {
    const onFocus = this.props.onFocus || this.props.input.onFocus
    onFocus && onFocus(e)
  }

  handleLevelChange = (level) => {
    const onChange = this.props.onChange || this.props.input.onChange

    const oldVal = this.getOldValue()

    const newVal = {
      ...oldVal,
      level: (level && level.value) || level
    }

    onChange(newVal, oldVal)
  }

  handleLevelBlur = (e) => {
    if (this.props.onBlur) {
      return this.props.onBlur(e)
    }

    if (this.props.input.onBlur) {
      this.props.input.onBlur(this.getOldValue())
    }
  }

  handleLevelFocus = (e) => {
    const onFocus = this.props.onFocus || this.props.input.onFocus
    onFocus && onFocus(e)
  }

  getOldValue = () => {
    let oldValue = {}

    if (!isEmpty(this.props.input.value)) {
      oldValue = this.props.input.value
      return oldValue
    }

    if (!isEmpty(this.props.value)) {
      oldValue = this.props.value
      return oldValue
    }

    return oldValue
  }
}

export default DoubleSelect
