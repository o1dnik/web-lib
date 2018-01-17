import React, { Fragment } from "react"
import ReactPopover from "react-popover"
import PropTypes from "prop-types"
import openClose from "../../decorators/openClose"

export const PopoverComponent = props => {
  const { children, toggle, onOuterAction, toggleOnOut, ...rest } = props

  let newChildren

  if (typeof children === "function") {
    newChildren = children(props)
  } else {
    newChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {
        ...child.props,
        onClick: toggle
      })
    })
  }

  return (
    <ReactPopover
      {...rest}
      onOuterAction={(...args) => {
        if (toggleOnOut) toggle()
        if (onOuterAction && typeof onOuterAction === "function")
          onOuterAction(...args)
      }}
    >
      <Fragment>{newChildren}</Fragment>
    </ReactPopover>
  )
}

PopoverComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  place: PropTypes.string,
  preferPlace: PropTypes.string,
  body: PropTypes.node.isRequired,
  onOuterAction: PropTypes.func,
  toggleOnOut: PropTypes.bool.isRequired
}

PopoverComponent.defaultProps = {
  isOpen: false,
  toggleOnOut: false
}

export default openClose(PopoverComponent)
