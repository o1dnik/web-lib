'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlertBar = showAlertBar;
exports.hideAlertBar = hideAlertBar;

var _constants = require('../constants');

function showAlertBar(notification) {
  return {
    type: _constants.ALERT + _constants.SHOW,
    payload: { notification: notification }
  };
}

function hideAlertBar() {
  return {
    type: _constants.ALERT + _constants.HIDE
  };
}