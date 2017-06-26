var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import React from 'react';
import { as } from '../../helpers/customPropTypes';

var Box = function Box(props) {
  var style = _extends({
    width: props.width,
    padding: props.padding
  }, props.style);

  var Element = props.as;

  return React.createElement(
    Element,
    { className: 'white-box', style: style },
    props.children
  );
};

Box.propTypes = {
  as: as,
  width: PropTypes.string,
  padding: PropTypes.string,
  style: PropTypes.object
};

Box.defaultProps = {
  as: 'div',
  width: '100%',
  style: {}
};

export default Box;
module.exports = exports['default'];