import React, {PropTypes} from 'react';

const sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
};

const FontLoader = (props) => {

  return (
    <i
      style={{fontSize: sizeMap[props.size]}}
      className='ion-load-c animate-spin font-loader'
    />
  );

};

FontLoader.propTypes = {
  size: PropTypes.string.isRequired
};

FontLoader.defaultProps = {
  size: 'medium'
};

export default FontLoader;
