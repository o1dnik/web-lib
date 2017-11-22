import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactSelect from 'react-select'
import cn from 'classnames'
import { extractErrorMessage } from '../../helpers'

class Select extends Component {
  // this represents only our props, for full list react-select props
  // see https://github.com/JedWatson/react-select#further-options
  static propTypes = {

    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object
    ]),
    options: PropTypes.array,
    optionRenderer: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    matchPos: PropTypes.oneOf(['start', 'any']),
    matchProp: PropTypes.oneOf(['label', 'value', 'any']),
    arrowRenderer: PropTypes.func,
    simpleValue: PropTypes.bool,
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    clearIconHTML: PropTypes.string,  // DANGER !
    noArrow: PropTypes.bool,
    renderTags: PropTypes.bool,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,  // mutates the redux-form Field data
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
      ])
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

  static defaultProps = {
    input: {},
    meta: {},
    value: '',  // react-select expects a defined value
    valueKey: 'value',
    labelKey: 'label',
    matchPos: 'start',
    matchProp: 'label',
    options: [],
    simpleValue: false,
    renderTags: true,
    clearIconHTML: '<i class=\'mb-icons-cross\'/>'  // DANGER !
  }

  render () {
    const {
      id, input, value, name, meta, label, options, renderTags,
      onChange, onFocus, clearIconHTML, ...rest
    } = this.props

    const {error, invalid, valid, touched, dirty} = meta

    // option ~= {label, value, [disabled, isCategory]}
    const updOptions = this.mapOptions(options)

    const css = cn({
      'select-wrapper': true,
      'select-input': true,
      'select-input-error': (touched && invalid),
      'select-input-success': (touched && valid)
    })

    const inputMessageCss = cn({
      'input-message': true,
      'input-message-error': (touched && invalid),
      'input-message-success': (touched && valid)
    })

    // 'react-select' expects a function in props.valueComponent
    // If not multi - then should not pass this prop at all
    const valueComponent = {}
    if (!renderTags) valueComponent.valueComponent = () => null

    let val = value || input.value

    if (val === '') {
      val = null
    }

    return (
      <div className={css} id={`ghost-${id}`}>

        {label && <label htmlFor={id}>{label}</label>}

        <ReactSelect
          {...rest}
          {...valueComponent}
          name={name || input.name}
          value={val}
          onChange={onChange || input.onChange}
          onFocus={onFocus || input.onFocus}
          ref={this.handleSelectRef}
          onOpen={this.handleOpen}
          onBlur={this.handleBlur}
          optionRenderer={this.optionRenderer}
          arrowRenderer={this.arrowRenderer}
          options={updOptions}
          dangerouslySetInnerHTML={{__html: clearIconHTML}}
        />

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && extractErrorMessage(error)}
        </span>

      </div>
    )
  }

  // to make it work with redux-form:
  // https://github.com/erikras/redux-form/issues/82
  // https://github.com/JedWatson/react-select/issues/1129
  handleBlur = (e) => {
    const {onBlur, value, input, simpleValue, valueKey} = this.props

    if (onBlur && typeof onBlur === 'function') {
      return onBlur(e)
    }

    if (input && input.onBlur && typeof input.onBlur === 'function') {
      const val = value || input.value

      if (typeof val === 'string') {
        const obj = this.props.options.find(l => l[valueKey] === val)

        if (simpleValue && obj && obj[valueKey]) {
          return input.onBlur(obj[valueKey])
        } else {
          return input.onBlur(obj)
        }
      }

      return input.onBlur(val)
    }
  }

  mapOptions = (options) => {
    const {labelKey, valueKey} = this.props

    return options.map(o => {
      if (o.isCategory) {
        return {
          [labelKey]: o[labelKey],
          [valueKey]: o[valueKey],
          disabled: true,
          isCategory: true
        }
      }
      return o
    })
  }

  arrowRenderer = ({onMouseDown}) => {
    const {arrowRenderer, noArrow} = this.props

    if (noArrow) return <span />
    if (!noArrow && !!arrowRenderer) return arrowRenderer()
    if (!noArrow && !arrowRenderer) {
      return <span className='Select-arrow' onMouseDown={onMouseDown} />
    }
  }

  // WARNING !
  // The box with items which has any number of categories in the beginning
  // of the list will render scrolled to 1st disabled=false item.
  optionRenderer = (option, key) => {
    const {labelKey} = this.props

    if (option.isCategory) {
      return (
        <div className='category' key={key}>
          <span>{option[labelKey]}</span>
        </div>
      )
    }
    return (
      <div className='option' key={key}>
        <span>{option[labelKey]}</span>
      </div>
    )
  }

  handleSelectRef = (element) => {
    this.element = element
  }

  handleOpen = () => {
    let val = this.props.value || this.props.input.value
    if (this.element && !val && this.props.options.some(e => e.isCategory)) {
      this.element.hasScrolledToOption = true
    }
  }
}

export default Select
