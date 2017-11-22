import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import { Notification } from 'react-notification'
import {FormattedMessage} from 'react-intl'
import { hideAlertBar } from '../../actions/alertbar-actions'

class AlertBar extends Component {
  static PropTypes = {
    location: PropTypes.object.isRequired,

    type: PropTypes.string.isRequired,
    values: PropTypes.object,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    dismissAfter: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
    hideAlertBar: PropTypes.func.isRequired,
    hideOnRouteChange: PropTypes.bool.isRequired
  }

  static defaultProps = {
    type: 'success',
    message: '',
    values: {},
    dismissAfter: false,
    hideOnRouteChange: true,
    action: ' '
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (nextProps.isActive && nextProps.hideOnRouteChange) {
        nextProps.hideAlertBar()
      }
    }
  }

  render () {
    const {type, hideAlertBar, message, dismissAfter, values, ...rest} = this.props

    const activeClasses = cn({
      shown: true,
      [`alert-${type}`]: Boolean(type)
    })

    const classes = cn({
      'alert-bar': true
    })

    const iconClasses = cn({
      'ion-checkmark-round': type === 'success',
      'ion-alert': type === 'info',
      'ion-close-circled': type === 'error',
      'ion-alert-circled': type === 'warning'
    })

    const messageBody =
      <div>
        <i className={iconClasses} />
        {message && message.id && typeof message.id === 'string' && <FormattedMessage {...message} values={values} />}
        {(!message || !message.id) && <span>{message}</span>}
      </div>

    return (
      <Notification
        {...rest}
        message={messageBody}
        style={false}
        isLast={false} // https://github.com/pburtchaell/react-notification/pull/108
        // someone did pull request and added check that clear
        // timeout on willReceiveProps
        dismissAfter={dismissAfter}
        activeClassName={activeClasses}
        className={classes}
        onDismiss={dismissAfter ? hideAlertBar : null}
        onClick={hideAlertBar}
      />
    )
  }
}

export default connect(({alertbar}) => ({
  ...alertbar
}), {hideAlertBar})(AlertBar)
