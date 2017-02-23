import React, {PropTypes, Component} from 'react';
import Checkbox from '../Checkbox';
import cn from 'classnames';

class CheckboxGroup extends Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    oneRequired: PropTypes.bool,
    simpleValue: PropTypes.bool,
    options: PropTypes.array,
    value: PropTypes.array,

    valueKey: PropTypes.string,
    labelKey: PropTypes.string,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
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
  };

  static defaultProps = {
    oneRequired: false,
    simpleValue: false,
    valueKey: 'value',
    labelKey: 'label',
    options: [],
    input: {},
    meta: {}
  };

  render() {

    const {
      id, input, meta, label, options, value, disabled, valueKey, labelKey
    } = this.props;

    const {error, invalid, valid, touched, dirty} = meta;

    const css = cn({
      'checkbox-group': true,
      'checkbox-group-error': (touched && invalid),
      'checkbox-group-success': (touched && valid)
    });

    const inputMessageCss = cn({
      'input-message': true,
      'input-message-error': (touched && invalid),
      'input-message-success': (touched && valid)
    });

    const checkboxes = options.map(o => {

      let checked = false;

      if (input.value) {
        checked = input.value
          .map(i => i && i[valueKey] || i)
          .includes(o[valueKey]);
      }

      if (value) {
        checked = value
          .map(i => i && i[valueKey] || i)
          .includes(o[valueKey]);
      }

      return (
        <Checkbox
          name={o[valueKey]}
          id={o[valueKey] + o[labelKey]}
          key={o[valueKey] || o[labelKey]}
          label={o[labelKey] || o[valueKey]}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          checked={checked}
          disabled={disabled}
        />
      );
    });

    return (
      <div id={id} className={css}>

        {label && <label>{label}</label>}

        {checkboxes}

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && error}
        </span>

      </div>
    );
  }

  handleBlur = () => {
    const onBlur = this.props.onBlur || this.props.input.onBlur;
    const val = this.props.value || this.props.input.value;
    const {simpleValue, valueKey} = this.props;

    if (val && onBlur) {

      if (simpleValue) {
        return onBlur(val.map(v => v && v[valueKey] || v));
      }

      onBlur(val);

    }

  }

  handleFocus = (e) => {
    const onFocus = this.props.onFocus || this.props.input.onFocus;
    onFocus && onFocus(e);
  }

  handleChange = (e) => {
    const {name, checked} = e.target;
    const {options, oneRequired, simpleValue, valueKey, labelKey} = this.props;
    const onChange = this.props.onChange || this.props.input.onChange;
    const oldValue = this.props.value || this.props.input.value;

    let newValue;

    if (checked) {
      newValue = oldValue
        .concat({
          [valueKey]: name,
          [labelKey]: options.find(i => i[valueKey] === name)[labelKey] || ''
        });
    } else {
      newValue = oldValue.filter(i => (i && i[valueKey] || i) !== name);
      if (oneRequired && newValue.length < 1) {
        newValue = [...oldValue];
      }
    }

    if (newValue && onChange) {

      if (simpleValue) {
        return onChange(
          newValue.map(v => v && v[valueKey] || v),
          oldValue.map(v => v && v[valueKey] || v)
        );
      }

      onChange(newValue, oldValue);

    }
  }

}

export default CheckboxGroup;
