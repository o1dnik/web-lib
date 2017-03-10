'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var defaultState = {
  isActive: false,
  message: '',
  action: '',
  dismissAfter: false,
  hideOnRouteChange: true,
  type: ' '
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {

    case _constants.ALERT + _constants.SHOW:
      {
        var _payload$notification = payload.notification,
            message = _payload$notification.message,
            _payload$notification2 = _payload$notification.type,
            _type = _payload$notification2 === undefined ? 'success' : _payload$notification2,
            dismissAfter = _payload$notification.dismissAfter,
            _action = _payload$notification.action,
            _payload$notification3 = _payload$notification.hideOnRouteChange,
            hideOnRouteChange = _payload$notification3 === undefined ? true : _payload$notification3;

        return _extends({}, state, {
          isActive: true,
          message: message || '',
          type: _type || 'success',
          dismissAfter: dismissAfter || (_type === 'success' ? 3000 : false),
          action: _action || ' ',
          hideOnRouteChange: hideOnRouteChange
        });
      }

    case _constants.ALERT + _constants.HIDE:
      return _extends({}, state, { isActive: false, dismissAfter: false });

  }

  return state;
};

module.exports = exports['default'];