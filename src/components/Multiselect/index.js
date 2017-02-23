import React, {PropTypes, Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import unionBy from 'lodash/unionBy';
import cn from 'classnames';
import Select from '../Select';
import Tag from '../Tag';

class Multiselect extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectProps: PropTypes.object.isRequired,

    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),

    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    disabled: PropTypes.bool,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.oneOfType([
        PropTypes.string,
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
    input: {},
    meta: {},
    selectProps: {
      multi: true,
      renderTags: false
    }
  };

  render() {

    const {meta, input, label, id, disabled} = this.props;
    const {error, invalid, touched, dirty, valid} = meta;
    const value = this.props.value || input.value;
    const selectProps = Object.assign(
      {}, Multiselect.defaultProps.selectProps, this.props.selectProps
    );

    const css = cn({
      'multiselect': true,
      'multiselect-error': (touched && invalid),
      'multiselect-success': (touched && valid)
    });

    const inputMessageCss = cn({
      'input-message': true,
      'input-message-error': (touched && invalid),
      'input-message-success': (touched && valid)
    });

    return (
      <div className={css}>

        {label && <label htmlFor={id}>{label}</label>}

        <Select
          {...selectProps}
          name={this.props.name || input.name}
          disabled={selectProps.disabled || disabled}
          noArrow={selectProps.noArrow || disabled}
          value={value}
          onChange={this.onValueAdd}
          onBlur={this.onBlur}
          onFocus={this.props.onFocus || input.onFocus}
        />

        <div className='multiselect-tags-wrapper'>

          {
            value.map(v =>
              <Tag
                key={v.value}
                color={touched && valid ? 'primary' : 'default'}
                size='small'
                disabled={disabled}
              >
                {v.label}
                <i
                  className='ion-close'
                  onClick={this.onValueRemove(v)}
                />
              </Tag>
            )
          }

        </div>

        <span className={inputMessageCss}>
          {(dirty || touched) && invalid && error}
        </span>

      </div>
    );
  }

  onBlur = (e) => {

    const {onBlur, input, options} = this.props;

    if (onBlur) return onBlur(e);

    if (input.onBlur) {

      const val = this.getOldValue();

      if (typeof val === 'string') {
        const loc = options.find(l => l.value === val);
        return input.onBlur(loc);
      }

      return input.onBlur(val);
    }

  }

  onValueAdd = (updVal) => {
    const {input, onChange} = this.props;

    const oldVal = this.getOldValue();
    // multi => arrays merge
    const newValues = unionBy(oldVal, updVal, 'value');

    if (onChange) return onChange(newValues);
    if (input.onChange) input.onChange(newValues);
  }

  onValueRemove = (tag) => (e) => {
    if (e) e.preventDefault();

    const {input, onChange} = this.props;

    const val = this.getOldValue();

    const newValues = val.filter(t => t.value !== tag.value);

    if (onChange) return onChange(newValues);
    if (input.onChange) input.onChange(newValues);

  }

  getOldValue = () => {
    let oldValue = [];  // Array because multi

    if (!isEmpty(this.props.input.value)) {
      return oldValue = this.props.input.value;
    }

    if (!isEmpty(this.props.value)) {
      return oldValue = this.props.value;
    }

    return oldValue;
  }

}

export default Multiselect;
