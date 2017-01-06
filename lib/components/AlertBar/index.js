import React, {PropTypes} from 'react';
import cn from 'classnames';
import {Notification} from 'react-notification';


/**
 * Main component: https://github.com/pburtchaell/react-notification/
 * For props: blob/master/docs/guides/props.md
 */
const AlertBar = (props) => {
  const {type, isActive, ...rest} = props;

  const css = cn({
    'alert': true,
    [`alert-${type}`]: true,
    'shown': isActive
  });

  return (
    <Notification
      {...rest}
      className={css}
      style={false}  // disable default inline styles
    />
  );
};

AlertBar.defaultProps = {
  type: 'error',
  message: 'Test',
  dismissAfter: false,  // in react-notification default = 2000
  action: 'X'
};
AlertBar.PropTypes = {
  type: PropTypes.string  // => Notification.props.action
};

export default AlertBar;