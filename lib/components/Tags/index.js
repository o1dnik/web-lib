import React, {PropTypes} from 'react';
import cn from 'classnames';
import Tag from '../Tag';


const Tags = (props) => {
  const {tags, meta, label, id, ...rest} = props;
  const {error, invalid, touched, dirty} = meta;

  const css = cn({'tags': true});

  return (
    <div className={css}>

      {label && <label htmlFor={id}>{label}</label>}

      {tags.map((tag, key) =>
        <Tag {...rest} key={key} id={tag.id} label={tag.label} />
      )}

      <span>{(dirty || touched) && invalid && error}</span>

    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  inactive: PropTypes.bool,

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
Tags.defaultProps = {
  input: {},
  meta: {},
  tags: []
};

export default Tags;
