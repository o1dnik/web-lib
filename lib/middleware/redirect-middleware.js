"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("../constants");

var _history = require("../history");

var _redirectActions = require("../actions/redirect-actions");

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      var type = action.type,
          redirect = action.redirect;


      if (type !== _constants.REDIRECT && !redirect) return next(action);

      switch (true) {
        case Boolean(type === _constants.REDIRECT):
          doRedirect(action.payload);
          break;

        case Boolean(type.includes(_constants.START) && redirect && redirect.start):
          dispatch((0, _redirectActions.redirectTo)(redirect.start.path, redirect.start.delay));
          break;

        case Boolean(type.includes(_constants.SUCCESS) && redirect && redirect.success):
          dispatch((0, _redirectActions.redirectTo)(redirect.success.path, redirect.success.delay));
          break;

        case Boolean(type.includes(_constants.FAIL) && redirect && redirect.fail):
          dispatch((0, _redirectActions.redirectTo)(redirect.fail.path, redirect.fail.delay));
          break;

        case Boolean(redirect && redirect.path):
          dispatch((0, _redirectActions.redirectTo)(redirect.path, redirect.delay));
          break;

        default:
          break;
      }

      next(action);
    };
  };
};

function doRedirect(payload) {
  if (payload.delay) {
    setTimeout(function () {
      return _history.history.push(payload.path);
    }, payload.delay);
  } else {
    _history.history.push(payload.path);
  }
}
module.exports = exports["default"];