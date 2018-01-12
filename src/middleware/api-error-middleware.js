import { SESSION_EXPIRED } from "../constants"
import { getActionType } from "../helpers/utils"

export default () => next => action => {
  const { err, apiError, ...rest } = action

  if (!apiError || !err) return next(action)

  if (err.response) {
    if (err.response.status >= 500) {
      if (!err.response.data) {
        err.response.data = { code: "server_error" }
      }

      if (!err.response.data.code) {
        err.response.data.code = "server_error"
      }
    }

    if (err.response.status < 500 && err.response.status >= 400) {
      if (err.response.status === 401 || err.response.status === 403) {
        next({ type: getActionType(SESSION_EXPIRED) })

        if (err.response.status === 401) {
          if (!err.response.data) {
            err.response.data = { code: "authentication_failed" }
          }

          if (!err.response.data.code) {
            err.response.data.code = "authentication_failed"
          }
        } else if (err.response.status === 403) {
          if (!err.response.data) {
            err.response.data = { code: "authorization_failed" }
          }

          if (!err.response.data.code) {
            err.response.data.code = "authorization_failed"
          }
        }
      } else if (err.response.status === 404) {
        if (!err.response.data) {
          err.response.data = { code: "not_found" }
        }

        if (!err.response.data.code) {
          err.response.data.code = "not_found"
        }
      } else {
        if (!err.response.data) {
          err.response.data = { code: "bad_request" }
        }

        if (!err.response.data.code) {
          err.response.data.code = "bad_request"
        }
      }
    }
  } else if (err.request) {
    if ("onLine" in window.navigator) {
      const { onLine } = window.navigator

      if (onLine) {
        err.response = { data: { code: "default_error", onLine } }
      } else {
        err.response = { data: { code: "network_error", onLine } }
      }
    } else {
      err.response = { data: { code: "network_error", onLine: "unknown" } }
    }
  } else {
    err.response = { data: { code: "default_error" } }
  }

  next({ err: err.response, ...rest })
}
