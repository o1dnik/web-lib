import React, {PropTypes, Component} from 'react';
import cn from 'classnames';


class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(React.PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    max: PropTypes.number
  };

  static defaultProps = {
    options: []
  };

  render() {
    const {options, disabled, loading} = this.props;

    const isDisabled = disabled || loading;

    const css = {
      wrapper: 'checkbox-group',
      label: cn({'inline': true}),
      input: '',
      control: 'control',
      value: 'text-label'
    };

    return (
      <div className={css.wrapper}>
        {options.map((value, key) => {
          return (
            <label className={css.label} key={key}>
              <input
                className={css.input}
                type='checkbox'
                name='checkbox'
                id={`checkbox-${key}`}
                value={value.id}
                checked={value.checked}
                onChange={this.onSelect.bind(this, key)}
                disabled={isDisabled}
              />
              <span className={css.control}></span>
              <span className={css.value}>{value.label}</span>
            </label>
          );
        })}
      </div>
    );
  }

  onSelect(key) {
    const {options, onChange, max} = this.props;

    const allowCheck = (
      max
      && options.filter(o => o.checked).length < max
      && !options[key].checked
    ) || !max;

    if (options[key].checked || allowCheck) {

      const newOpts = options.map((v, k) => {
        if (k === key) {
          return {...v, checked: !v.checked};
        }
        return v;
      });

      // return both - array and single option
      onChange(newOpts, newOpts[key]);
    }

  }
}

export default CheckboxGroup;
