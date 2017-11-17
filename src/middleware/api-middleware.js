import { get } from 'lodash'
import { getActionType } from '../helpers/utils'

import {
  START,
  SUCCESS,
  FAIL,
  GET,
  UPDATE,
  DELETE,
  CREATE,
  PATCH,
  SESSION_EXPIRED
} from '../constants'

export default (axios) => () => next => action => {
  const {endpoint, apiConfig, apiV = 'v1', type, token, ...rest} = action

  if (!endpoint) return next(action)

  const apiEndpoit = `/${apiV}${endpoint}`

  next({type: getActionType(type, START), ...rest})

  let promise

  switch (true) {
    case Boolean(type.includes(GET) && token):
      promise = axios.get(apiEndpoit, {
        headers: {'cookie': `token=${token}`},
        ...apiConfig
      })
      break

    case type.includes(GET):
      promise = axios.get(apiEndpoit, apiConfig)
      break

    case type.includes(CREATE):
      promise = axios.post(apiEndpoit, get(action, 'payload.data'), apiConfig)
      break

    case type.includes(UPDATE):
      promise = axios.put(apiEndpoit, get(action, 'payload.data'), apiConfig)
      break

    case type.includes(PATCH):
      promise = axios.patch(apiEndpoit, get(action, 'payload.data'), apiConfig)
      break

    case type.includes(DELETE):
      promise = axios.delete(apiEndpoit, apiConfig)
      break
  }

  return promise
    .then(res => {
      next({type: getActionType(type, SUCCESS), res, ...rest})
      return res
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status >= 500) {
          if (!err.response.data) {
            err.response.data = {code: 'server_error'}
          }

          if (!err.response.data.code) {
            err.response.data.code = 'server_error'
          }
        }

        if (err.response.status < 500 && err.response.status >= 400) {
          if (err.response.status === 401 || err.response.status === 403) {
            next({type: getActionType(SESSION_EXPIRED)})

            if (err.response.status === 401) {
              if (!err.response.data) {
                err.response.data = {code: 'authentication_failed'}
              }

              if (!err.response.data.code) {
                err.response.data.code = 'authentication_failed'
              }
            } else if (err.response.status === 403) {
              if (!err.response.data) {
                err.response.data = {code: 'authorization_failed'}
              }

              if (!err.response.data.code) {
                err.response.data.code = 'authorization_failed'
              }
            }
          } else if (err.response.status === 404) {
            if (!err.response.data) {
              err.response.data = {code: 'not_found'}
            }

            if (!err.response.data.code) {
              err.response.data.code = 'not_found'
            }
          } else {
            if (!err.response.data) {
              err.response.data = {code: 'bad_request'}
            }

            if (!err.response.data.code) {
              err.response.data.code = 'bad_request'
            }
          }
        }
      } else if (err.request) {
        if ('onLine' in window.navigator) {
          const {onLine} = window.navigator

          if (onLine) {
            err.response = {data: {code: 'default_error', onLine}}
          } else {
            err.response = {data: {code: 'network_error', onLine}}
          }
        } else {
          err.response = {data: {code: 'network_error', onLine: 'unknown'}}
        }
      } else {
        err.response = {data: {code: 'default_error'}}
      }

      next({type: getActionType(type, FAIL), err: err.response, ...rest})
      throw err
    })
}
