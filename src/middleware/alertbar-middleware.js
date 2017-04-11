import {showAlertBar} from '../actions/alertbar-actions';
import serverErrorsMap from '../server-errors-map';
import config from 'config';
import {get, has} from 'lodash';

import {
  START,
  SUCCESS,
  FAIL,
  DEFAULT_ERROR,
  DEFAULT_SUCCESS,
  DEFAULT_START
} from '../constants';

const isDev = Boolean(config.env.isDev || config.branch.isMaster);

export default ({dispatch}) => next => action => {

  const {type, alert, ...rest} = action;

  switch (true) {

    case Boolean(type.includes(SUCCESS) && alert && alert.success):
      dispatch(showAlertBar({
        type: get(alert, 'success.type', 'success'),
        message: get(alert, 'success.message', DEFAULT_SUCCESS),
        dismissAfter: get(alert, 'success.dismissAfter', 3000),
        hideOnRouteChange: get(alert, 'success.hideOnRouteChange')
      }));
      break;

    case Boolean(type.includes(START) && alert && alert.start):
      dispatch(showAlertBar({
        type: get(alert, 'start.type', 'success'),
        message: get(alert, 'start.message', DEFAULT_START),
        dismissAfter: get(alert, 'start.dismissAfter', 3000),
        hideOnRouteChange: get(alert, 'start.hideOnRouteChange')
      }));
      break;

    case Boolean(type.includes(FAIL) && alert && alert.fail):
      dispatch(showAlertBar({
        type: get(alert, 'fail.type', 'error'),
        message: get(alert, 'fail.message', getErrorMessage(action)),
        dismissAfter: get(alert, 'fail.dismissAfter', false),
        hideOnRouteChange: get(alert, 'fail.hideOnRouteChange')
      }));
      break;

    case Boolean(alert && Boolean(alert.type || alert.message)):
      dispatch(showAlertBar({
        type: alert.type || 'success',
        message: alert.message || DEFAULT_SUCCESS,
        dismissAfter: alert.dismissAfter || 3000,
        hideOnRouteChange: alert.hideOnRouteChange
      }));
      break;

    case Boolean(type.includes(FAIL)): {

      if (alert === null) {
        break;
      }

      if (alert && alert.fail === null) {
        break;
      }

      dispatch(showAlertBar({type: 'error', message: getErrorMessage(action)}));
      break;
    }

  }

  next({type, alert, ...rest});

};

function getErrorMessage(action) {
  let errorCode = null;
  let message = DEFAULT_ERROR;

  errorCode = get(action, 'err.data.code');

  if (!errorCode && has(action, 'err.data')) {
    message = `Backend error: ${action.err.data}`;
  }

  if (errorCode && serverErrorsMap[errorCode]) {
    message = serverErrorsMap[errorCode];
  }

  if (isDev && errorCode && !serverErrorsMap[errorCode]) {
    message = `Missing error code handling for: '${errorCode}'. Add correct message to serverErrorsMap.js`;
  }

  if (!isDev && (!errorCode || !serverErrorsMap[errorCode])) {
    message = DEFAULT_ERROR;
  }

  return message;
}
