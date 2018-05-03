import React, { Component } from "react"
import { connect } from "react-redux"
import { NotificationStack } from "react-notification"
import { hideNotification } from "../../actions/notifications-actions"

class Notifications extends Component {
  handleDismiss = notification => {
    this.props.hideNotification(notification)
  }

  render() {
    const { notifications } = this.props
    if (!notifications.length) return null

    return (
      <NotificationStack
        notifications={notifications.map(n => ({
          ...n,
          className: "notification-bar-custom",
        }))}
        onDismiss={this.handleDismiss}
      />
    )
  }
}

export default connect(
  ({ notifications }) => ({
    notifications: notifications.entities,
  }),
  { hideNotification },
)(Notifications)
