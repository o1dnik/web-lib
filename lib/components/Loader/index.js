import React, {PropTypes} from 'react';

const sizeMap = {
  small: 25,
  medium: 55,
  large: 75
};

const Loader = (props) => {

  return (
    <svg className='mo-loader'
         width={sizeMap[props.size]}
         viewBox='0 0 66 66'
         style={{
           marginLeft: -(sizeMap[props.size] / 2)
         }}
         xmlns='http://www.w3.org/2000/svg'>
      <circle className='mo-loader__path'
              fill='none'
              strokeWidth='6'
              strokeLinecap='round'
              cx='33'
              cy='33'
              r='30'/>
    </svg>
  );
};

Loader.propTypes = {
  size: PropTypes.string.isRequired
};

Loader.defaultProps = {
  size: 'small'
};

export default Loader;
