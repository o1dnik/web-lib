import React from "react"
import PropTypes from "prop-types"
import { Line } from "rc-progress"
import { omit } from "lodash"
import cn from "classnames"

const ProgressBarComponent = props => {
  const { className, label } = props

  const css = cn(
    {
      progressbar: true,
    },
    className,
  )

  return (
    <div className={css}>
      {label}
      <Line {...omit(props, Object.keys(ProgressBarComponent.propTypes))} />
    </div>
  )
}

ProgressBarComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
}

export default ProgressBarComponent
