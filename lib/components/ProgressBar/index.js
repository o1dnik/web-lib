import _omit from 'lodash/omit';
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';

import cn from 'classnames';

var ProgressBarComponent = function ProgressBarComponent(props) {
  var className = props.className,
      label = props.label;


  var css = cn({
    progressbar: true
  }, className);

  return React.createElement(
    'div',
    { className: css },
    label,
    React.createElement(Line, _omit(props, Object.keys(ProgressBarComponent.propTypes)))
  );
};

ProgressBarComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node
};

export default ProgressBarComponent;
module.exports = exports['default'];