import PropTypes from 'prop-types';
import React from 'react';

var sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
};

var Loader = function Loader(props) {
  var animatedStrokeColor = props.animatedStrokeColor,
      strokeColor = props.strokeColor;


  return React.createElement(
    'svg',
    {
      width: sizeMap[props.size],
      height: sizeMap[props.size],
      className: 'loader',
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'xMidYMid'
    },
    React.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: strokeColor,
      fill: 'none',
      strokeWidth: '10',
      strokeLinecap: 'round'
    }),
    React.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: animatedStrokeColor,
      fill: 'none',
      strokeWidth: '6',
      strokeLinecap: 'round',
      className: 'inner-circle'
    })
  );
};

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  animatedStrokeColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired
};

Loader.defaultProps = {
  size: 'medium',
  animatedStrokeColor: '#111111',
  strokeColor: '#eeeeee'
};

export default Loader;
module.exports = exports['default'];