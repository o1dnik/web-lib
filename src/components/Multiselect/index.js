import PropTypes from "prop-types"
import React, { Component } from "react"
import { union } from "lodash"
import cn from "classnames"
import Select from "../Select"
import Tag from "../Tag"
import { extractErrorMessage } from "../../helpers"

class Multiselect extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectProps: PropTypes.object.isRequired,

    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object)
    ]),

    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    simpleValue: PropTypes.bool,

    disabled: PropTypes.bool,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.object)
      ])
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
    meta: {},
    valueKey: "value",
    labelKey: "label",
    simpleValue: false,
    selectProps: {
      multi: true,
      renderTags: false,
      options: []
    }
  }

  render() {
    const { meta, input, label, id, disabled, valueKey, labelKey } = this.props
    const { error, invalid, touched, dirty, valid } = meta
    const value = this.props.value || input.value
    const selectProps = Object.assign(
      {},
      Multiselect.defaultProps.selectProps,
      this.props.selectProps
    )

    const css = cn({
      multiselect: true,
      "multiselect-error": touched && invalid,
      "multiselect-success": touched && valid
    })

    const inputMessageCss = cn({
      "input-message": true,
      "input-message-error": touched && invalid,
      "input-message-success": touched && valid
    })

    return (
      <div className={css} id={`ghost-${id}`}>
        {label && <label htmlFor={id}>{label}</label>}

        <Select
          {...selectProps}
          name={this.props.name || input.name}
          disabled={selectProps.disabled || disabled}
          noArrow={selectProps.noArrow || disabled}
          valueKey={valueKey}
          labelKey={labelKey}
          onChange={this.handleValueAdd}
          onBlur={this.handleBlur}
          onFocus={this.props.onFocus || input.onFocus}
        />

        <div className="multiselect-tags-wrapper">
          {value.map(v => {
            const item = selectProps.options.find(o => o[valueKey] === v)

            if (!item || !item[labelKey]) return null

            return (
              <Tag
                key={v}
                color="primary"
                size="small"
                disabled={disabled}
                onClick={this.handleValueRemove(v)}
              >
                {item[labelKey]}
                <i className="ion-close" />
              </Tag>
            )
          })}
        </div>

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && extractErrorMessage(error)}
        </span>
      </div>
    )
  }

  handleBlur = e => {
    const { simpleValue, valueKey, input, selectProps } = this.props
    const val = this.props.value || input.value

    if (this.props.onBlur) return this.props.onBlur(e)

    if (val && input && input.onBlur) {
      if (simpleValue) {
        return input.onBlur(val)
      }

      input.onBlur(
        selectProps.options.filter(o => val.includes((o && o[valueKey]) || o))
      )
    }
  }

  handleValueAdd = updVal => {
    const { simpleValue, valueKey, input, selectProps } = this.props
    const onChange = this.props.onChange || input.onChange
    const val = this.props.value || input.value

    // multi => arrays merge
    const newValues = union(val, updVal.map(v => (v && v[valueKey]) || v))

    if (onChange && newValues) {
      if (simpleValue) {
        return onChange(newValues)
      }

      onChange(
        selectProps.options.filter(o =>
          newValues.includes((o && o[valueKey]) || o)
        )
      )
    }
  }

  handleValueRemove = tag => e => {
    if (e) e.preventDefault()

    const { simpleValue, valueKey, input, selectProps } = this.props
    const onChange = this.props.onChange || input.onChange
    const val = this.props.value || input.value

    const newValues = val.filter(v => v !== tag)

    if (onChange) {
      if (simpleValue) {
        return onChange(newValues)
      }

      onChange(
        selectProps.options.filter(o =>
          newValues.includes((o && o[valueKey]) || o)
        )
      )
    }
  }
}

export default Multiselect
