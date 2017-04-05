'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectTo = redirectTo;

var _constants = require('../constants');

function redirectTo() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var delay = arguments[1];

  return {
    type: _constants.REDIRECT,
    payload: { path: path, delay: delay }
  };
}