import _has from 'lodash/has';
import _get from 'lodash/get';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { showAlertBar } from '../actions/alertbar-actions';
import serverErrorsMap from '../server-errors-map';
import config from 'config';


import { START, SUCCESS, FAIL, DEFAULT_ERROR, DEFAULT_SUCCESS, DEFAULT_START } from '../constants';

var isDev = Boolean(config.env.isDev || config.branch.isMaster);

export default (function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      var type = action.type,
          alert = action.alert,
          rest = _objectWithoutProperties(action, ['type', 'alert']);

      switch (true) {
        case Boolean(type.includes(SUCCESS) && alert && alert.success):
          dispatch(showAlertBar({
            type: _get(alert, 'success.type', 'success'),
            message: _get(alert, 'success.message', DEFAULT_SUCCESS),
            dismissAfter: _get(alert, 'success.dismissAfter', 3000),
            hideOnRouteChange: _get(alert, 'success.hideOnRouteChange')
          }));
          break;

        case Boolean(type.includes(START) && alert && alert.start):
          dispatch(showAlertBar({
            type: _get(alert, 'start.type', 'success'),
            message: _get(alert, 'start.message', DEFAULT_START),
            dismissAfter: _get(alert, 'start.dismissAfter', 3000),
            hideOnRouteChange: _get(alert, 'start.hideOnRouteChange')
          }));
          break;

        case Boolean(type.includes(FAIL) && alert && alert.fail):
          dispatch(showAlertBar({
            type: _get(alert, 'fail.type', 'error'),
            message: _get(alert, 'fail.message', getErrorMessage(action)),
            dismissAfter: _get(alert, 'fail.dismissAfter', false),
            hideOnRouteChange: _get(alert, 'fail.hideOnRouteChange')
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

        case Boolean(type.includes(FAIL)):
          {
            if (alert === null) {
              break;
            }

            if (alert && alert.fail === null) {
              break;
            }

            dispatch(showAlertBar({ type: 'error', message: getErrorMessage(action) }));
            break;
          }
      }

      next(_extends({ type: type, alert: alert }, rest));
    };
  };
});

function getErrorMessage(action) {
  var errorCode = null;
  var message = DEFAULT_ERROR;

  errorCode = _get(action, 'err.data.code');

  if (!errorCode && _has(action, 'err.data')) {
    if (_typeof(action.err.data) === 'object') {
      try {
        var error = JSON.stringify(action.err.data);
        message = 'Backend error: ' + error;
      } catch (err) {
        message = 'Backend error: ' + action.err.data;
      }
    } else {
      message = 'Backend error: ' + action.err.data;
    }
  }

  if (errorCode && serverErrorsMap[errorCode]) {
    message = serverErrorsMap[errorCode];
  }

  if (isDev && errorCode && !serverErrorsMap[errorCode]) {
    message = 'Missing error code handling for: \'' + errorCode + '\'. Add correct message to serverErrorsMap.js';
  }

  if (!isDev && (!errorCode || !serverErrorsMap[errorCode])) {
    message = DEFAULT_ERROR;
  }

  return message;
}
module.exports = exports['default'];