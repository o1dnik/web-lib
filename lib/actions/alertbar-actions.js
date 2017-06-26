'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showAlertBar = showAlertBar;
exports.hideAlertBar = hideAlertBar;

var _constants = require('../constants');

var _utils = require('../helpers/utils');

function showAlertBar(notification) {
  return {
    type: (0, _utils.getActionType)(_constants.ALERT, _constants.SHOW),
    payload: { notification: notification }
  };
}

function hideAlertBar() {
  return {
    type: (0, _utils.getActionType)(_constants.ALERT, _constants.HIDE)
  };
}