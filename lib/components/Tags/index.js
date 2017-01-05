import React, {PropTypes} from 'react';
import cn from 'classnames';
import Tag from '../Tag';


const Tags = (props) => {
  const {tags, label, id, onTagRemove, ...rest} = props;

  const onClose = (tag) => () => {
    if (onTagRemove) onTagRemove(tag);
  };

  const css = cn({'tags': true});

  return (
    <div className={css}>

      {label && <label htmlFor={id}>{label}</label>}

      {tags.map((tag, key) =>
        <Tag
          {...rest}
          key={key}
          id={tag.value}
          label={tag.label}
          onClose={onClose(tag)}
        />
      )}

    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onTagRemove: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  inactive: PropTypes.bool
};
Tags.defaultProps = {
  tags: []
};

export default Tags;
