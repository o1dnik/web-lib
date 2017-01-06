import React, {PropTypes, Component} from 'react';
import Select from '../Select';
import Tags from '../Tags';


/**********
 * How to use:
 *
 * <Multiselect
 *   options={this.state.options}
 *   value={this.state.selected}
 *   onChange={(selected) => this.setState({selected})}
 *   onSelect={(selected) => this.setState({selected})}
 * />
 *********/
class Multiselect extends Component {

  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onTagRemove = this.onTagRemove.bind(this);
    this.onTagAdd = this.onTagAdd.bind(this);
  }

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onInputChange: PropTypes.func,
    label: PropTypes.string,
    selectLabel: PropTypes.string,
    tagsLabel: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,

    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,  // mutates the redux-form Field data
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
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
    meta: {}
  };

  render() {
    const {meta, input, label, id} = this.props;
    const {error, invalid, touched, dirty} = meta;

    const selectProps = {
      label: this.props.selectLabel,
      name: this.props.name || input.name,
      placeholder: this.props.placeholder,
      value: this.props.value || input.value,
      loadOptions: this.props.loadOptions,
      options: this.props.options,
      optionRenderer: this.props.optionRenderer,
      onInputChange: this.props.onInputChange,
      onChange: this.onTagAdd || input.onChange,
      onSelect: this.props.onSelect,
      onBlur: this.onBlur,
      onFocus: this.props.onFocus || input.onFocus,
      isLoading: this.props.isLoading,
      noResultsText: this.props.noResultsText,
      matchPos: this.props.matchPos,
      matchProp: this.props.matchProp,
      arrowRenderer: this.props.arrowRenderer,
      multi: true,
      simpleValue: this.props.simpleValue,
      disabled: this.props.disabled,
      clearable: this.props.clearable,
      searchable: this.props.searchable,
      clearIcon: this.props.clearIcon,
      clearIconHTML: this.props.clearIconHTML,
      noArrow: this.props.noArrow
    };
    const tagsProps = {
      id: this.props.tagsId,
      label: this.props.tagsLabel,
      tags: this.props.value,
      onClick: this.props.onClick,
      onTagRemove: this.onTagRemove,
      hideClose: this.props.hideClose,
      closeIcon: this.props.closeIcon,
      extended: this.props.extended,
      inactive: this.props.inactive
    };

    return (
      <div className='multiselect'>

        {label && <label htmlFor={id}>{label}</label>}

        <Select {...selectProps} />
        <Tags   {...tagsProps} />

        <span>{(dirty || touched) && invalid && error}</span>

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

  onTagRemove(tag) {
    const {input, value, onChange} = this.props;
    const newTags = value.filter(t => t.value !== tag.value);

    if (onChange) onChange(newTags);
    if (!onChange && input.onChange) input.onChange(newTags);
  }

  onTagAdd({value, label}) {
    const {input, onChange} = this.props;
    const newValues = [this.props.value, {value, label}];

    if (onChange) onChange(newValues);
    if (!onChange && input.onChange) input.onChange(newValues);
  }

}

export default Multiselect;
