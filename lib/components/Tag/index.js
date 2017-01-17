import React, {PropTypes} from 'react';
import cn from 'classnames';

const Tag = (props) => {
  const {
    label,
    hideClose,
    closeIcon,
    extended,
    className,
    onClick,
    onClose,
    type,
    disabled
  } = props;

  const isInactive = type === 'inactive' ||
                     (className && className.includes('inactive'));

  const isExtended = extended || (className && className.includes('extended'));

  const css = {
    wrapper: '',
    label: cn({
      'tag': true,
      [type]: Boolean(type),
      'inactive': isInactive,
      'extended': isExtended
    }),
    close: cn({
      'remove': true,  // conditional ?
      'close': true    // conditional ?
    })
  };

  const onclick = (disabled || isInactive) ? undefined : onClick;
  const onclose = (disabled || isInactive) ? undefined : onClose;

  return (
    <span className={css.wrapper}>
      <span
        className={css.label}
        onClick={onclick}
        style={{cursor: (onClick && !isInactive) ? 'pointer' : 'default'}}
      >
        {label}
        {props.children}
      </span>

      {(!isInactive && !hideClose && onClose) && (
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
  type: PropTypes.string, // active, pending, default
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
