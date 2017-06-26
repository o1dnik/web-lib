'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNotification = showNotification;
exports.hideNotification = hideNotification;

var _constants = require('../constants');

var _utils = require('../helpers/utils');

function showNotification(notification) {
  if (!notification.key) {
    notification.key = Date.now();
  }

  return {
    type: (0, _utils.getActionType)(_constants.NOTIFICATION, _constants.SHOW),
    payload: { notification: notification }
  };
}

function hideNotification(notification) {
  return {
    type: (0, _utils.getActionType)(_constants.NOTIFICATION, _constants.HIDE),
    payload: { notification: notification }
  };
}