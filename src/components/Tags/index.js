import PropTypes from "prop-types"
import React, { Component } from "react"
import cn from "classnames"
import Tag from "../Tag"
import toggleActive from "../../decorators/toggleActive"
import toggleActiveMultiple from "../../decorators/toggleActiveMultiple"

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onTagRemove: PropTypes.func,
    hideClose: PropTypes.bool,
    closeIcon: PropTypes.string,
    extended: PropTypes.bool,
    disabled: PropTypes.bool,

    // decorators
    activeItem: PropTypes.any,
    activeItems: PropTypes.any,
    isActive: PropTypes.func,
    toggleActive: PropTypes.func,
    disableAll: PropTypes.func
  }

  static defaultProps = {
    tags: []
  }

  render() {
    const {
      tags,
      label,
      id,
      isActive,
      disabled,
      onClick,
      toggleActive,
      ...rest
    } = this.props

    const css = cn({ tags: true })

    return (
      <div className={css}>
        {label && <label htmlFor={id}>{label}</label>}

        {tags.map((tag, key) => (
          <Tag
            {...rest}
            key={key}
            label={tag.label}
            active={isActive && isActive(tag.value)}
            disabled={disabled}
            onClick={onClick || (toggleActive && toggleActive(tag.value))}
            onClose={this.onClose(tag)}
          />
        ))}
      </div>
    )
  }

  onClose = tag => () => {
    const { onTagRemove } = this.props
    if (onTagRemove) onTagRemove(tag)
  }
}

Tags.toggleActive = toggleActive(Tags)
Tags.toggleActiveMultiple = toggleActiveMultiple(Tags)

export default Tags
