import React, {PropTypes} from 'react';
import cn from 'classnames';

const Tag = (props) => {
  const {
    label,
    hideClose,
    closeIcon,
    extended,
    active,
    onClick,
    onClose,
    type,
    disabled
  } = props;

  const css = {
    wrapper: '',
    label: cn({
      'tag': true,
      'tag-active': active,
      [type]: Boolean(type),
      extended
    }),
    close: cn({
      'remove': true,  // conditional ?
      'close': true    // conditional ?
    })
  };

  const onclick = disabled ? undefined : onClick;
  const onclose = disabled ? undefined : onClose;

  return (
    <span className={css.wrapper}>
      <span
        className={css.label}
        onClick={onclick}
        style={{cursor: onClick ? 'pointer' : 'default'}}
      >
        {label}
        {props.children}
      </span>

      {(!hideClose && onClose) && (
        <span
          className={css.close}
          onClick={onclose}
          style={{cursor: 'pointer'}}
        >
          {closeIcon}
        </span>
      )}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string, // active, pending, default, inactive
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  disabled: PropTypes.bool
};

Tag.defaultProps = {
  type: 'default',
  hideClose: false,
  closeIcon: 'X',
  extended: false,
  disabled: false
};

export default Tag;
