import Raven from 'raven-js'
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
      // report all 50X server failures to Sentry
      if ((get(err, 'response.status') - (get(err, 'response.status') % 10)) === 500) {
        Raven.captureBreadcrumb({
          category: 'server_error',
          message: action.type,
          data: JSON.stringify(action) // use breadcrumbDataFromAction() ?
        })
        Raven.captureException(err, {
          extra: {
            action: JSON.stringify(action) // use actionTransformer() ?
            // state: stateTransformer(store.getState())
          }
        })

        err.response = {data: {code: 'server_error'}}
      }

      if (get(err, 'response.status') === 403 || get(err, 'response.status') === 401) {
        next({type: getActionType(SESSION_EXPIRED)})
      }

      if (!err.response) {
        err.response = {data: {code: 'network_error'}}
      }

      next({type: getActionType(type, FAIL), err: err.response, ...rest})
      throw err
    })
}
