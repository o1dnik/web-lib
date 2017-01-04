import React, {PropTypes, Component} from 'react';
import Checkbox from '../Checkbox';
import cn from 'classnames';

class CheckboxGroup extends Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })),
    value: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })),

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
    options: [],
    input: {},
    meta: {}
  };

  render() {

    const {id, input, meta, label, options, value} = this.props;
    const {error, invalid, valid, touched, dirty} = meta;

    const css = cn({
      'checkbox-group': true,
      'checkbox-group-error': (touched && invalid),
      'checkbox-group-success': (touched && valid)
    });

    const checkboxes = options.map(o => {

      let checked = false;

      if (input.value) {
        checked = input.value.map(i => i.value).includes(o.value);
      }

      if (value) {
        checked = value.map(i => i.value).includes(o.value);
      }

      // add simpleValue see react-select ?

      return (
        <Checkbox
          name={o.value}
          id={o.value + o.label}
          key={o.value || o.label}
          label={o.label || o.value}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          checked={checked}
        />
      );
    });

    return (
      <div id={id} className={css}>

        {label && <label>{label}</label>}

        {checkboxes}

        <span>{(dirty || touched) && invalid && error}</span>

      </div>
    );
  }

  handleBlur = () => {
    const onBlur = this.props.onBlur || this.props.input.onBlur;
    const val = this.props.value || this.props.input.value;
    onBlur && onBlur(val);
  }

  handleFocus = (e) => {
    const onFocus = this.props.onFocus || this.props.input.onFocus;
    onFocus && onFocus(e);
  }

  handleChange = (e) => {
    const {name, checked} = e.target;
    const {options} = this.props;
    const onChange = this.props.onChange || this.props.input.onChange;
    const oldValue = this.props.value || this.props.input.value;

    let newValue;

    if (checked) {
      newValue = oldValue
        .concat({
          value: name,
          label: options.find(i => i.value === name).label || ''
        });
    } else {
      newValue = oldValue.filter(i => i.value !== name);
    }

    onChange(newValue, oldValue);
  }

}

export default CheckboxGroup;
