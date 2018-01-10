import PropTypes from "prop-types"
import React, { Component } from "react"
import { FormattedRelative } from "react-intl"
import defaultPicture from "../../../src/assets/img/default-logo.png"
import Linkify from "linkifyjs/react"

class Message extends Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    picture: defaultPicture
  }

  render() {
    const { picture, name, date, text } = this.props

    return (
      <div className="box message">
        <div className="list-item">
          <div className="list-body">
            <div className="list-thumb small hide-m">
              <img
                alt="User"
                src={picture}
                onError={e => {
                  e.target.src = defaultPicture
                }}
                width="40"
              />
            </div>
            <div className="list-info">
              <h2 className="list-item-subtitle">{name}</h2>
            </div>
          </div>
          <div className="list-controlls text-right">
            <div className="expire hide-m">
              <FormattedRelative value={date} />
            </div>
          </div>
        </div>
        <div className="message-text">
          {text.split(/\r\n|\r|\n/g).map((chunk, idx) => {
            return (
              <Linkify key={idx} tagName="p">
                {chunk}
              </Linkify>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Message
