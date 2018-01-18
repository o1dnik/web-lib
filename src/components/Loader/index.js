import PropTypes from "prop-types"
import React from "react"

const sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
}

const Loader = props => {
  return (
    <div
      className="loader"
      style={{ width: sizeMap[props.size], height: sizeMap[props.size] }}
    />
  )
}

Loader.propTypes = {
  size: PropTypes.string.isRequired
}

Loader.defaultProps = {
  size: "medium"
}

export default Loader
