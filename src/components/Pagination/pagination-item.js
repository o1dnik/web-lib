import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"

const PaginationItem = ({ disabled, className, onClick, children }) => {
  const css = cn({ disabled }, className)
  return (
    <li className={css} onClick={onClick}>
      <a>{children}</a>
    </li>
  )
}

PaginationItem.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default PaginationItem
