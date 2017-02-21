import React, {Component, PropTypes} from 'react';
import Select from '../Select';
import Tag from '../Tag/index';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';

class SelectWithLevels extends Component {
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

  static defaultProps = {
    iconClassName: 'ion-close',
    input: {},
    meta: {}
  };

  render() {

    const {value, selectOptions, levelOptions, input, meta} = this.props;
    const {subLabel, label, onRemove, iconClassName, disabled} = this.props;
    const {disabledIfValid} = this.props;

    const {error, invalid, valid, touched, dirty} = meta;

    const css = cn({
      'select-with-levels': true,
      'options-box': true,
      'select-with-levels-error': (touched && invalid),
      'select-with-levels-success': (touched && valid),
      done: valid
    });

    const inputMessageCss = cn({
      'input-message': true,
      'input-message-error': (touched && invalid),
      'input-message-success': (touched && valid)
    });

    const selectValid = Boolean(
      (value && value.select) || (input.value && input.value.select)
    );
    const selectInValid = !selectValid;

    return (
      <div className={css}>

        {onRemove &&
        <span className='close' onClick={!disabled && onRemove}>
          <i className={iconClassName}/>
        </span>}

        <Select
          label={label}
          value={value && value.select || input.value && input.value.select}
          onInputChange={this.props.onInputChange}
          onChange={this.handleSelectChange}
          onBlur={this.handleSelectBlur}
          onFocus={this.handleSelectFocus}
          options={selectOptions}
          clearable={false}
          searchable={false}
          meta={{
            touched,
            valid: selectValid,
            invalid: selectInValid
          }}
          noArrow={disabled || disabledIfValid && valid}
          disabled={disabled || disabledIfValid && valid}
        />

        {selectValid &&
        <div>
          <label>{subLabel}</label>

          <div className='select-with-levels-tags-wrapper'>
            {
              levelOptions.map(o =>
                <Tag {...this.getCurrentTagProps(o)}>
                  {o.label}
                </Tag>
              )
            }
          </div>
        </div>
        }

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && error}
          </span>

      </div>
    );
  }

  getCurrentTagProps = (currentTag) => {
    const {disabled} = this.props;

    // use gel old values, case its object with empty strings propetrys by
    // default
    const currentValue = this.getOldValue();

    const props = {
      key: currentTag.value,
      size: 'medium',
      disabled,
      onClick: this.handleLevelChange(currentTag.value)
    };

    // currentTag.value - from options
    // currentValue.level - from selected value
    if (currentTag.value === currentValue.level) {
      props.color = 'primary';
      props.bordered = true;
    } else {
      props.color = 'default';
      props.value = true;
    }

    return props;

  }

  handleSelectChange = (selectValue) => {
    const onChange = this.props.onChange || this.props.input.onChange;

    const oldVal = this.getOldValue();

    const newVal = {
      ...oldVal,
      select: selectValue && selectValue.value || selectValue
    };

    onChange(newVal, oldVal);
  }

  handleSelectBlur = (e) => {

    if (this.props.onBlur) {
      return this.props.onBlur(e);
    }

    if (this.props.input.onBlur) {
      this.props.input.onBlur(this.getOldValue());
    }

  }

  handleSelectFocus = (e) => {
    const onFocus = this.props.onFocus || this.props.input.onFocus;
    onFocus && onFocus(e);
  }

  handleLevelChange = (level) => (e) => {
    if (e) e.preventDefault();
    const onChange = this.props.onChange || this.props.input.onChange;

    const oldVal = this.getOldValue();

    const newVal = {...oldVal, level};

    onChange(newVal, oldVal);
    setTimeout(() => this.handleSelectBlur(), 1000);
  }

  getOldValue = () => {
    let oldValue = {};

    if (!isEmpty(this.props.input.value)) {
      return oldValue = this.props.input.value;
    }

    if (!isEmpty(this.props.value)) {
      return oldValue = this.props.value;
    }

    return oldValue;
  }

}

export default SelectWithLevels;
