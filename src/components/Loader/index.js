import PropTypes from "prop-types"
import React from "react"

const sizeMap = {
  xsmall: 16,
  small: 24,
  medium: 56,
  large: 76,
  xlarge: 96,
}

const sizeBordermap = {
  xsmall: 3,
  small: 4,
  medium: 5,
  large: 6,
  xlarge: 8,
}

const Loader = props => {
  return (
    <div
      className="loader"
      style={{
        width: sizeMap[props.size],
        height: sizeMap[props.size],
        borderWidth: sizeBordermap[props.size],
        marginLeft: sizeMap[props.size] / -2,
      }}
    />
  )
}

Loader.propTypes = {
  size: PropTypes.string.isRequired,
}

Loader.defaultProps = {
  size: "medium",
}

export default Loader
