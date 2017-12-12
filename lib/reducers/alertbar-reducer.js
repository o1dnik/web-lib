'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _utils = require('../helpers/utils');

var defaultState = {
  isActive: false,
  message: '',
  action: '',
  dismissAfter: false,
  hideOnRouteChange: true,
  values: {},
  type: ' '
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case (0, _utils.getActionType)(_constants.ALERT, _constants.SHOW):
      {
        var _payload$notification = payload.notification,
            message = _payload$notification.message,
            _payload$notification2 = _payload$notification.type,
            _type = _payload$notification2 === undefined ? 'success' : _payload$notification2,
            dismissAfter = _payload$notification.dismissAfter,
            _action = _payload$notification.action,
            _payload$notification3 = _payload$notification.hideOnRouteChange,
            hideOnRouteChange = _payload$notification3 === undefined ? true : _payload$notification3,
            values = _payload$notification.values;

        return _extends({}, state, {
          isActive: true,
          values: values,
          message: message || '',
          type: _type || 'success',
          dismissAfter: dismissAfter || (_type === 'success' ? 3000 : false),
          action: _action || ' ',
          hideOnRouteChange: hideOnRouteChange
        });
      }

    case (0, _utils.getActionType)(_constants.ALERT, _constants.HIDE):
      return _extends({}, state, { isActive: false, dismissAfter: false });
  }

  return state;
};

module.exports = exports['default'];