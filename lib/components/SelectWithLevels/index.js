import React, {Component, PropTypes} from 'react';
import Select from '../Select';
import Tags from '../Tags';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';

class SelectWithLevels extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.any,
    selectOptions: PropTypes.array,
    levelOptions: PropTypes.array,
    iconClassName: PropTypes.string,

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
    iconClassName: 'mb-ico-button-delete',
    value: {
      level: '',
      select: ''
    },
    input: {
      value: {
        level: '',
        select: ''
      }
    },
    meta: {}
  };

  render() {

    const {value, selectOptions, levelOptions, input, meta} = this.props;
    const {subLabel, label, onRemove, iconClassName} = this.props;

    const {error, invalid, valid, touched, dirty} = meta;

    const css = cn({
      'select-with-levels': true,
      'options-box': true,
      'select-with-levels-error': (touched && invalid),
      'select-with-levels-success': (touched && valid)
    });

    return (
      <div className={css}>

        {onRemove &&
        <span style={{cursor: 'pointer'}} onClick={onRemove}>
          <i className={iconClassName}/>
        </span>}

        {label && <label>{label}</label>}

        <Select
          value={value.select || input.value.select}
          onSelect={this.handleSelectChange}
          onBlur={this.handleSelectBlur}
          onFocus={this.handleSelectFocus}
          options={selectOptions}
          clearable={false}
          searchable={false}
        />

        <Tags.toggleActive label={subLabel}
                           tags={levelOptions}
                           hideClose
                           activeItem={value.level || input.value.level}
                           onChange={this.handleLevelChange}
        />

        <span>{(dirty || touched) && invalid && error}</span>

      </div>
    );
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

  handleLevelChange = (level) => {
    const onChange = this.props.onChange || this.props.input.onChange;

    const oldVal = this.getOldValue();

    const newVal = {...oldVal, level};

    onChange(newVal, oldVal);
  }

  getOldValue = () => {
    let oldValue = {};

    if (!isEmpty(this.props.input.value)) {
      oldValue = this.props.value;
    }

    if (!isEmpty(this.props.value)) {
      oldValue = this.props.value;
    }

    return oldValue;
  }

}

export default SelectWithLevels;