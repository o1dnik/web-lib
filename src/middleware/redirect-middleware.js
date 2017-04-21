import {REDIRECT, SUCCESS, START, FAIL} from '../constants'
import {history} from '../history'
import {redirectTo} from '../actions/redirect-actions'

export default ({dispatch}) => next => action => {
  const {type, redirect} = action

  if (type !== REDIRECT && !redirect) return next(action)

  switch (true) {
    case Boolean(type === REDIRECT):
      doRedirect(action.payload)
      break

    case Boolean(type.includes(START) && redirect && redirect.start):
      dispatch(redirectTo(redirect.start.path, redirect.start.delay))
      break

    case Boolean(type.includes(SUCCESS) && redirect && redirect.success):
      dispatch(redirectTo(redirect.success.path, redirect.success.delay))
      break

    case Boolean(type.includes(FAIL) && redirect && redirect.fail):
      dispatch(redirectTo(redirect.fail.path, redirect.fail.delay))
      break

    case Boolean(redirect && redirect.path):
      dispatch(redirectTo(redirect.path, redirect.delay))
      break
  }

  next(action)
}

function doRedirect (payload) {
  if (payload.delay) {
    setTimeout(() =>
      history.push(payload.path), payload.delay)
  } else {
    history.push(payload.path)
  }
}
