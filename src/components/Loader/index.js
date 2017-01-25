import React, {PropTypes} from 'react';

const sizeMap = {
  tiny: 16,
  small: 25,
  medium: 55,
  big: 75,
  large: 95,
  xlarge: 115
};

const Loader = (props) => {

  const {animatedStrokeColor, strokeColor} = props;

  return (
    <svg
      width={sizeMap[props.size]}
      height={sizeMap[props.size]}
      className='loader'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx='50'
        cy='50'
        r='40'
        stroke={strokeColor}
        fill='none'
        strokeWidth='10'
        strokeLinecap='round'
      />
      <circle
        cx='50'
        cy='50'
        r='40'
        stroke={animatedStrokeColor}
        fill='none'
        strokeWidth='6'
        strokeLinecap='round'
      >
        <animate
          attributeName='stroke-dashoffset'
          dur='3s'
          repeatCount='indefinite'
          from='0'
          to='502'
        />
        <animate
          attributeName='stroke-dasharray'
          dur='3s'
          repeatCount='indefinite'
          values='150.6 100.4;1 250;150.6 100.4'
        />
      </circle>
    </svg>
  );

};

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  animatedStrokeColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired
};

Loader.defaultProps = {
  size: 'medium',
  animatedStrokeColor: '#dd1843',
  strokeColor: '#eeeeee'
};

export default Loader;
