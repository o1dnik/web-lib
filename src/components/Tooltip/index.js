import React from 'react'
import ReactTooltip from 'react-tooltip'

const TooltipComponent = (props) => {
  const {children, ...rest} = props

  if (children) {
    return (
      <ReactTooltip {...rest}>
        {children}
      </ReactTooltip>
    )
  }

  return (
    <ReactTooltip {...rest} />
  )
}

TooltipComponent.propTypes = {}

export default TooltipComponent
