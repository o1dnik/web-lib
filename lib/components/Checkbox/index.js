import React, {PropTypes} from 'react';

const Checkbox = (props) => {

  const {id, label, name, checked, onChange} = props;

  const checkbox =
    <input
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
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

export default Checkbox;
