import PropTypes from "prop-types"
import React, { Component, Children } from "react"
import { appendClassPrefix, wrapToStopPropagation } from "../../helpers"
import cn from "classnames"
import { noop } from "lodash"

class Tag extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    bordered: PropTypes.bool,
    extended: PropTypes.bool,
    apart: PropTypes.bool,
    value: PropTypes.bool,
    extra: PropTypes.bool,
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
    color: PropTypes.oneOf([
      "default",
      "primary",
      "light",
      "danger",
      "warm",
      "hot",
      "exclusive",
    ]),
  }

  static defaultProps = {
    size: "medium",
    color: "default",
    className: "",
    disabled: false,
    extended: false,
    apart: false,
    bordered: false,
    value: false,
    extra: false,
  }

  render() {
    const {
      children,
      onClick,
      color,
      size,
      bordered,
      extended,
      apart,
      disabled,
      value,
      className,
      extra,
      getRef,
      ...rest
    } = this.props

    const withPrefix = appendClassPrefix("tag")

    const newCildren = Children.map(children, c => {
      if (typeof c === "string" || typeof c === "number") {
        return <span>{c}</span>
      }

      if (c === null || c === undefined) {
        return null
      }

      let childClick
      let className = c.props.className

      if (c.props.onClick) {
        childClick = c.props.onClick
      }

      if (c.type === "i" && c.props.onClick) {
        childClick = wrapToStopPropagation(c.props.onClick)
        className = cn(
          {
            close: Boolean(childClick),
            "cursor-disabled": Boolean(disabled),
          },
          className,
        )
      }

      return React.cloneElement(c, {
        ...c.props,
        onClick: (!disabled && childClick) || noop,
        className,
      })
    })

    const hasIcon = Children.toArray(newCildren).some(c => c.type === "i")

    const css = cn(
      {
        tag: true,
        [withPrefix(color)]: Boolean(color),
        [withPrefix(size)]: Boolean(size),
        [withPrefix("bordered")]: Boolean(bordered),
        clickable: Boolean(onClick && !disabled),
        [withPrefix("extended")]: Boolean(extended),
        [withPrefix("apart")]: Boolean(apart),
        [withPrefix("disabled")]: Boolean(disabled),
        [withPrefix("value")]: Boolean(value),
        [withPrefix("icon")]: Boolean(hasIcon),
        [withPrefix("extra")]: Boolean(extra),
      },
      className,
    )

    return (
      <span
        {...rest}
        ref={getRef}
        onClick={(!disabled && onClick) || noop}
        className={css}
      >
        {newCildren}
      </span>
    )
  }
}

export default Tag
