import PropTypes from "prop-types"
import React, { Component } from "react"
import cn from "classnames"
import { FormattedRelative } from "react-intl"

import DEFAULT_PROFILE_IMAGE from "../../../src/assets/img/default-logo.png"

class ThreadCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isUnread: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    image: DEFAULT_PROFILE_IMAGE,
    isUnread: false,
  }

  render() {
    const { image, title, subtitle, date, isUnread, onClick } = this.props

    const listItemCss = cn({
      "list-item": true,
      box: true,
      "box-shadow": true,
      "is-unread": isUnread,
    })

    return (
      <li className="list-wrapper" onClick={onClick}>
        <div className={listItemCss}>
          <div className="list-body">
            <div className="list-thumb hide-m">
              <img
                alt="Avatar"
                src={image === null ? DEFAULT_PROFILE_IMAGE : image}
                onError={e => {
                  e.target.src = DEFAULT_PROFILE_IMAGE
                }}
              />
            </div>

            <div className="list-info">
              <div className="list-item-subtitle">{subtitle}</div>
              <h2 className="list-item-title">{title}</h2>
            </div>
          </div>

          {date && (
            <div className="list-controlls text-right">
              <div className="expire">
                <FormattedRelative value={date} />
              </div>
            </div>
          )}
        </div>
      </li>
    )
  }
}

export default ThreadCard
