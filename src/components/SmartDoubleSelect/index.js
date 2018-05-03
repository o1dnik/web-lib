import PropTypes from "prop-types"
import React, { Component } from "react"
import { Field } from "redux-form"
import cn from "classnames"
import Select from "../Select"

class SmartDoubleSelect extends Component {
  static propTypes = {
    onRemove: PropTypes.func,

    selectKey: PropTypes.string,
    levelKey: PropTypes.string,

    names: PropTypes.array,

    levelProps: PropTypes.object,
    selectProps: PropTypes.object,

    resetLevelOnSelectChange: PropTypes.bool,
    inOneRow: PropTypes.bool,
  }

  static defaultProps = {
    selectKey: "id",
    levelKey: "level",
    levelProps: {},
    selectProps: {},
    resetLevelOnSelectChange: false,
    inOneRow: false,
  }

  render() {
    const {
      levelProps,
      selectProps,
      onRemove,
      inOneRow,
      resetLevelOnSelectChange,
      selectKey,
      levelKey,
    } = this.props

    const select = this.props[selectKey]
    const level = this.props[levelKey]

    const valid = select.meta.valid && level.meta.valid

    const levelDisabled = Boolean(
      !select.input.value || select.meta.invalid || levelProps.disabled,
    )

    const selectDisabled =
      (selectProps.disabledIfValid && select.meta.valid) || selectProps.disabled

    const css = cn({
      "smart-double-select": true,
      "options-box": true,
      done: valid,
    })

    const wrapperCss = cn({
      "select-group-wrapper": inOneRow,
    })

    return (
      <div className={css}>
        {onRemove && (
          <span className="close" onClick={onRemove}>
            <i className="ion-close" />
          </span>
        )}

        <div className={wrapperCss}>
          <Field
            {...selectProps}
            component={Select}
            onChange={() => {
              resetLevelOnSelectChange && level.input.onChange(undefined)
            }}
            disabled={selectDisabled}
            noArrow={selectDisabled}
            name={selectKey}
          />

          <Field
            {...levelProps}
            component={Select}
            disabled={levelDisabled}
            noArrow={levelDisabled}
            name={levelKey}
          />
        </div>
      </div>
    )
  }
}

export default SmartDoubleSelect
