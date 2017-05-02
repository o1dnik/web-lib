import PropTypes from 'prop-types'
import React from 'react'
import {as} from '../../helpers/customPropTypes'

const Box = (props) => {
  const style = {
    width: props.width,
    padding: props.padding,
    ...props.style
  }

  const Element = props.as

  return (
    <Element className='white-box' style={style}>
      {props.children}
    </Element>
  )
}

Box.propTypes = {
  as,
  width: PropTypes.string,
  padding: PropTypes.string,
  style: PropTypes.object
}

Box.defaultProps = {
  as: 'div',
  width: '100%',
  style: {}
}

export default Box
