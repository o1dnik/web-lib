import { showAlertBar } from "../actions/alertbar-actions"
import serverErrorsMap from "../server-errors-map"
import config from "config"
import { get, has } from "lodash"
import { defineMessages } from "react-intl"

import { START, SUCCESS, FAIL } from "../constants"

const messages = defineMessages({
  defaultError: { id: "app.error.code.default_error" },
  defaultSuccess: { id: "app.alertbar.default.success" },
  defaultStart: { id: "app.alertbar.default.start" }
})

const isDev = Boolean(config.env.isDev || config.branch.isMaster)

export default ({ dispatch }) => next => action => {
  const { type, alert, ...rest } = action

  if (action.type.includes("redux-form")) {
    return next(action)
  }

  switch (true) {
    case Boolean(type.includes(SUCCESS) && alert && alert.success):
      dispatch(
        showAlertBar({
          type: get(alert, "success.type", "success"),
          message: get(alert, "success.message", messages.defaultSuccess),
          values: alert.success.values,
          dismissAfter: get(alert, "success.dismissAfter", 3000),
          hideOnRouteChange: get(alert, "success.hideOnRouteChange")
        })
      )
      break

    case Boolean(type.includes(START) && alert && alert.start):
      dispatch(
        showAlertBar({
          type: get(alert, "start.type", "success"),
          message: get(alert, "start.message", messages.defaultStart),
          values: alert.start.values,
          dismissAfter: get(alert, "start.dismissAfter", 3000),
          hideOnRouteChange: get(alert, "start.hideOnRouteChange")
        })
      )
      break

    case Boolean(type.includes(FAIL) && alert && alert.fail):
      dispatch(
        showAlertBar({
          type: get(alert, "fail.type", "error"),
          message: get(alert, "fail.message", getErrorMessage(action)),
          values: alert.fail.values,
          dismissAfter: get(alert, "fail.dismissAfter", false),
          hideOnRouteChange: get(alert, "fail.hideOnRouteChange")
        })
      )
      break

    case Boolean(alert && Boolean(alert.type || alert.message)):
      dispatch(
        showAlertBar({
          type: alert.type || "success",
          message: alert.message || messages.defaultSuccess,
          values: alert.values,
          dismissAfter: alert.dismissAfter || 3000,
          hideOnRouteChange: alert.hideOnRouteChange
        })
      )
      break

    case Boolean(type.includes(FAIL)): {
      if (alert === null) {
        break
      }

      if (alert && alert.fail === null) {
        break
      }

      dispatch(
        showAlertBar({ type: "error", message: getErrorMessage(action) })
      )
      break
    }

    default:
      break
  }

  next({ type, alert, ...rest })
}

function getErrorMessage(action) {
  let errorCode = null
  let message = messages.defaultError

  errorCode = get(action, "err.data.code")

  if (
    errorCode &&
    errorCode === "validation_error" &&
    has(action, "err.data.field_errors")
  ) {
    Object.values(action.err.data.field_errors).forEach(value => {
      if (value && value.length) {
        errorCode = value[0].code
      }
    })
  }

  if (
    has(action, "err.data.non_field_errors") &&
    action.err.data.non_field_errors.length
  ) {
    errorCode = action.err.data.non_field_errors[0].code
  }

  if (!errorCode && has(action, "err.data")) {
    if (typeof action.err.data === "object") {
      try {
        const error = JSON.stringify(action.err.data)
        message = `Backend error: ${error}`
      } catch (err) {
        message = `Backend error: ${action.err.data}`
      }
    } else {
      message = `Backend error: ${action.err.data}`
    }
  }

  if (errorCode && serverErrorsMap[errorCode]) {
    message = serverErrorsMap[errorCode]
  }

  if (isDev && errorCode && !serverErrorsMap[errorCode]) {
    message = `Missing error code handling for: '${errorCode}'. Add correct message to serverErrorsMap.js`
  }

  if (!isDev && (!errorCode || !serverErrorsMap[errorCode])) {
    message = messages.defaultError
  }

  if (typeof message === "function") {
    message = message(action)
  }

  return message
}
