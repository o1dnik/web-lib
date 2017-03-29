'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showNotification = showNotification;
exports.hideNotification = hideNotification;

var _constants = require('../constants');

function showNotification(notification) {
  if (!notification.key) {
    notification.key = Date.now();
  }

  return {
    type: _constants.NOTIFICATION + _constants.SHOW,
    payload: { notification: notification }
  };
}

function hideNotification(notification) {
  return {
    type: _constants.NOTIFICATION + _constants.HIDE,
    payload: { notification: notification }
  };
}