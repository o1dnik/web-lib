import React, {PropTypes} from 'react';
import {as} from '../../helpers/customPropTypes';

const Box = (props) => {

  const style = {
    width: props.width,
    padding: props.padding
  };

  const Element = props.as;

  return (
    <Element className='white-box' style={style}>
      {props.children}
    </Element>
  );
};

Box.propTypes = {
  as,
  width: PropTypes.string,
  padding: PropTypes.string
};

Box.defaultProps = {
  as: 'div',
  width: '100%'
};

export default Box;
