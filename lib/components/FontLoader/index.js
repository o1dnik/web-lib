import PropTypes from 'prop-types';
import React from 'react';

var sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
};

var FontLoader = function FontLoader(props) {
  return React.createElement('i', {
    style: { fontSize: sizeMap[props.size] },
    className: 'ion-load-c animate-spin font-loader'
  });
};

FontLoader.propTypes = {
  size: PropTypes.string.isRequired
};

FontLoader.defaultProps = {
  size: 'medium'
};

export default FontLoader;