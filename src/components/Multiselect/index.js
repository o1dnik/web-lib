import React, {PropTypes, Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';
import cn from 'classnames';
import Select from '../Select';
import Tag from '../Tag/index';

/**********
 *    Interface:
 * @options  {array} list of options in "dropdown"
 * @value    {array} list of selected items from the "dropdown"
 * @onChange {func}  cb on any value selected/removed
 *
 *    How to use:
 * <Multiselect
 *   options={this.state.options}
 *   value={this.state.selected}
 *   onChange={(selected) => this.setState({selected})}
 * />
 *
 * or as following for redux-forms:
 *
 * <Multiselect
 *   options={this.state.skills}
 *   input={{
 *     value: this.state.selected,
 *     onChange: (selected) => this.setState({selected}),
 *   }}
 * />
 *********/
class Multiselect extends Component {

  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
  }

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),

    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    label: PropTypes.string,
    selectLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    tagsLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
    multi: true,
    renderTags: false
  };

  render() {
    const {meta, input, label, id} = this.props;
    const {error, invalid, touched, dirty, valid} = meta;
    const value = this.props.value || input.value;

    const selectProps = {
      // rendering or state
      label: this.props.selectLabel,
      name: this.props.name || input.name,
      placeholder: this.props.placeholder,
      noResultsText: this.props.noResultsText,
      optionRenderer: this.props.optionRenderer,
      arrowRenderer: this.props.arrowRenderer,
      isLoading: this.props.isLoading,
      matchPos: this.props.matchPos,
      matchProp: this.props.matchProp,
      multi: this.props.multi,
      simpleValue: this.props.simpleValue,
      disabled: this.props.disabled,
      clearable: this.props.clearable,
      searchable: this.props.searchable,
      clearIcon: this.props.clearIcon,
      clearIconHTML: this.props.clearIconHTML,
      noArrow: this.props.noArrow,
      renderTags: this.props.renderTags,

      // data entries
      value,
      options: this.props.options,

      // callbacks
      onInputChange: this.props.onInputChange,
      onSelect: this.onTagAdd,              // uses onChange
      onBlur: this.onBlur,
      onFocus: this.props.onFocus || input.onFocus,
      loadOptions: this.props.loadOptions  // react-select async cb
    };

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

        <Select {...selectProps} />

        <div className='multiselect-tags-wrapper'>

          {
            value.map(v =>
              <Tag
                key={v.value}
                color='primary'
                size='small'
              >
                {v.label}
                <i className='mb-ico-cross' onClick={this.onTagRemove(v)}/>
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

  // Replication of the same function in Select
  onBlur(e) {
    const {onBlur, value, input, options} = this.props;

    if (typeof onBlur === 'function') return onBlur(e);

    if (!onBlur && typeof input.onBlur === 'function') {

      const val = value || input.value;

      if (typeof val === 'string') {
        const loc = options.find(l => l.value === val);
        return input.onBlur(loc);
      }

      return input.onBlur(val);
    }

  }

  onTagRemove = (tag) => (e) => {
    if (e) e.preventDefault();
    const {input, value, onChange} = this.props;

    const newTags = value
      ? value.filter(t => t.value !== tag.value)
      : input.value.filter(t => t.value !== tag.value);

    if (onChange) onChange(newTags);
    if (!onChange && input.onChange) input.onChange(newTags);
  }

  onTagAdd = (updVal) => {
    const {input, onChange} = this.props;

    const oldVal = this.getOldValue();
    const newVal = merge(oldVal, updVal);  // multi => arrays merge

    if (onChange) onChange(newVal);
    if (!onChange && input.onChange) input.onChange(newVal);
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
