import {ALERT, SHOW, HIDE} from '../constants'
import {getActionType} from '../helpers/utils'

const defaultState = {
  isActive: false,
  message: '',
  action: '',
  dismissAfter: false,
  hideOnRouteChange: true,
  values: {},
  type: ' '
}

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch (type) {
    case getActionType(ALERT, SHOW): {
      const {
        message,
        type = 'success',
        dismissAfter,
        action,
        hideOnRouteChange = true,
        values
      } = payload.notification

      return {
        ...state,
        isActive: true,
        values,
        message: message || '',
        type: type || 'success',
        dismissAfter: dismissAfter || (type === 'success' ? 3000 : false),
        action: action || ' ',
        hideOnRouteChange
      }
    }

    case getActionType(ALERT, HIDE):
      return {...state, isActive: false, dismissAfter: false}
  }

  return state
}
