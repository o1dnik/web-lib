import React, {PropTypes} from 'react';
import Select from '../Select';
import Tags from '../Tags';

const Multiselect = (props) => {
  const {meta, input, label, id} = props;
  const {error, invalid, touched, dirty} = meta;

  // Replication of the same function in Select
  const onBlur = (e) => {
    const {onBlur, value, input} = this.props;

    if (typeof onBlur === 'function') return onBlur(e);

    if (!onBlur && typeof input.onBlur === 'function') {

      const val = value || input.value;

      if (typeof val === 'string') {
        const loc = props.options.find(l => l.value === val);
        return input.onBlur(loc);
      }

      return input.onBlur(val);
    }

  };

  const onTagRemove = (tag) => {
    const newTags = props.tags.filter(t => t.value !== tag.value);

    if (props.onChange) props.onChange(newTags);
    if (!props.onChange && input.onChange) input.onChange(newTags);
  };

  const onTagAdd = ({value, label}) => {
    const newTags = [props.tags, {value, label}];

    if (props.onChange) props.onChange(newTags);
    if (!props.onChange && input.onChange) input.onChange(newTags);
  };

  const selectProps = {
    label: props.selectLabel,  // different
    name: props.name || input.name,
    placeholder: props.placeholder,
    value: props.value || input.value,
    loadOptions: props.loadOptions,
    options: props.options,
    optionRenderer: props.optionRenderer,
    onChange: props.onChange,
    onSelect: onTagAdd,        // different
    onBlur,
    onFocus: props.onFocus || input.onFocus,
    isLoading: props.isLoading,
    noResultsText: props.noResultsText,
    matchPos: props.matchPos,
    matchProp: props.matchProp,
    arrowRenderer: props.arrowRenderer,
    multi: props.multi,
    simpleValue: props.simpleValue,
    disabled: props.disabled,
    clearable: props.clearable,
    searchable: props.searchable,
    clearIcon: props.clearIcon,
    clearIconHTML: props.clearIconHTML,
    noArrow: props.noArrow
  };
  const tagsProps = {
    id: props.tagsId,        // different
    label: props.tagsLabel,  // different
    tags: props.tags,
    onClick: props.onClick,
    onTagRemove,    // different
    hideClose: props.hideClose,
    closeIcon: props.closeIcon,
    extended: props.extended,
    inactive: props.inactive
  };

  return (
    <div className='multiselect'>

      {label && <label htmlFor={id}>{label}</label>}

      <Select {...selectProps} />
      <Tags   {...tagsProps} />

      <span>{(dirty || touched) && invalid && error}</span>

    </div>
  );
};

Multiselect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tags: PropTypes.array,
  options: PropTypes.array,
  selectProps: PropTypes.object,
  tagsProps: PropTypes.object,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
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
Multiselect.defaultProps = {
  input: {},
  meta: {}
};

export default Multiselect;
