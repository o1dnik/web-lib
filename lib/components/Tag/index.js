import React, {PropTypes} from 'react';
import cn from 'classnames';

const Tag = (props) => {
  const {
    label, hideClose, closeIcon,
    extended, inactive, className,
    onClick, onClose, type, active
  } = props;

  const isInactive = inactive || (className && className.includes('inactive'));
  const isExtended = extended || (className && className.includes('extended'));

  const css = {
    wrapper: '',
    label: cn({
      'tag': true,
      [type]: Boolean(type),
      active,
      'inactive': isInactive,
      'extended': isExtended
    }),
    close: cn({
      'remove': true,  // conditional ?
      'close': true    // conditional ?
    })
  };

  const onclick = isInactive ? undefined : onClick;
  const onclose = isInactive ? undefined : onClose;

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
  label: PropTypes.string.isRequired,
  type: PropTypes.string, // active, pending, default
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  inactive: PropTypes.bool,
  active: PropTypes.bool
};

Tag.defaultProps = {
  type: 'default',
  hideClose: false,
  closeIcon: 'X',
  extended: false,
  inactive: false,
  active: false
};

export default Tag;
