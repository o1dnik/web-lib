import React, {PropTypes} from 'react';
import cn from 'classnames';
import Tag from '../Tag';


const Tags = (props) => {
  const {tags, label, id, onClose, ...rest} = props;

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
          onClose={() => {
            if (onClose) onClose(tag.value);
          }}
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
  onClose: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  inactive: PropTypes.bool
};
Tags.defaultProps = {
  tags: []
};

export default Tags;
