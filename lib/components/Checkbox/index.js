import React, {PropTypes} from 'react';

const Checkbox = (props) => {

  const {id, label, input, name, onChange, onFocus, onBlur} = props;

  let checked = false;

  if (input) {
    if (typeof input.value === 'boolean' || typeof input.checked === 'boolean') {
      checked = input.checked;
    }
  }

  if (typeof props.checked === 'boolean') {
    checked = props.checked;
  }

  const checkbox =
    <input
      id={id}
      name={name}
      checked={checked}
      onChange={onChange || input.onChange}
      onFocus={onFocus || input.onFocus}
      onBlur={onBlur || input.onBlur}
      type='checkbox'
    />;

  if (!props.label) {
    return checkbox;
  }

  return (
    <label htmlFor={id} className='inline'>
      {checkbox}
      {label}
    </label>
  );

};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string
};

Checkbox.defaultProps = {
  input: {},
  meta: {}
};

export default Checkbox;
