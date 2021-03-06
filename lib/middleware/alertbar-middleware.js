"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has2 = require("lodash/has");

var _has3 = _interopRequireDefault(_has2);

var _get2 = require("lodash/get");

var _get3 = _interopRequireDefault(_get2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _alertbarActions = require("../actions/alertbar-actions");

var _serverErrorsMap = require("../server-errors-map");

var _serverErrorsMap2 = _interopRequireDefault(_serverErrorsMap);

var _config = require("config");

var _config2 = _interopRequireDefault(_config);

var _reactIntl = require("react-intl");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var messages = (0, _reactIntl.defineMessages)({
  defaultError: { id: "app.error.code.default_error" },
  defaultSuccess: { id: "app.alertbar.default.success" },
  defaultStart: { id: "app.alertbar.default.start" }
});

var isDev = Boolean(_config2.default.env.isDev || _config2.default.branch.isMaster);

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      var type = action.type,
          alert = action.alert,
          rest = _objectWithoutProperties(action, ["type", "alert"]);

      if (action.type.includes("redux-form")) {
        return next(action);
      }

      switch (true) {
        case Boolean(type.includes(_constants.SUCCESS) && alert && alert.success):
          dispatch((0, _alertbarActions.showAlertBar)({
            type: (0, _get3.default)(alert, "success.type", "success"),
            message: (0, _get3.default)(alert, "success.message", messages.defaultSuccess),
            values: alert.success.values,
            dismissAfter: (0, _get3.default)(alert, "success.dismissAfter", 3000),
            hideOnRouteChange: (0, _get3.default)(alert, "success.hideOnRouteChange")
          }));
          break;

        case Boolean(type.includes(_constants.START) && alert && alert.start):
          dispatch((0, _alertbarActions.showAlertBar)({
            type: (0, _get3.default)(alert, "start.type", "success"),
            message: (0, _get3.default)(alert, "start.message", messages.defaultStart),
            values: alert.start.values,
            dismissAfter: (0, _get3.default)(alert, "start.dismissAfter", 3000),
            hideOnRouteChange: (0, _get3.default)(alert, "start.hideOnRouteChange")
          }));
          break;

        case Boolean(type.includes(_constants.FAIL) && alert && alert.fail):
          dispatch((0, _alertbarActions.showAlertBar)({
            type: (0, _get3.default)(alert, "fail.type", "error"),
            message: (0, _get3.default)(alert, "fail.message", getErrorMessage(action)),
            values: alert.fail.values,
            dismissAfter: (0, _get3.default)(alert, "fail.dismissAfter", false),
            hideOnRouteChange: (0, _get3.default)(alert, "fail.hideOnRouteChange")
          }));
          break;

        case Boolean(alert && Boolean(alert.type || alert.message)):
          dispatch((0, _alertbarActions.showAlertBar)({
            type: alert.type || "success",
            message: alert.message || messages.defaultSuccess,
            values: alert.values,
            dismissAfter: alert.dismissAfter || 3000,
            hideOnRouteChange: alert.hideOnRouteChange
          }));
          break;

        case Boolean(type.includes(_constants.FAIL)):
          {
            if (alert === null) {
              break;
            }

            if (alert && alert.fail === null) {
              break;
            }

            dispatch((0, _alertbarActions.showAlertBar)({ type: "error", message: getErrorMessage(action) }));
            break;
          }

        default:
          break;
      }

      next(_extends({ type: type, alert: alert }, rest));
    };
  };
};

function getErrorMessage(action) {
  var errorCode = null;
  var message = messages.defaultError;

  errorCode = (0, _get3.default)(action, "err.data.code");

  if (errorCode && errorCode === "validation_error" && (0, _has3.default)(action, "err.data.field_errors")) {
    Object.values(action.err.data.field_errors).forEach(function (value) {
      if (value && value.length) {
        errorCode = value[0].code;
      }
    });
  }

  if ((0, _has3.default)(action, "err.data.non_field_errors") && action.err.data.non_field_errors.length) {
    errorCode = action.err.data.non_field_errors[0].code;
  }

  if (!errorCode && (0, _has3.default)(action, "err.data")) {
    if (_typeof(action.err.data) === "object") {
      try {
        var error = JSON.stringify(action.err.data);
        message = "Backend error: " + error;
      } catch (err) {
        message = "Backend error: " + action.err.data;
      }
    } else {
      message = "Backend error: " + action.err.data;
    }
  }

  if (errorCode && _serverErrorsMap2.default[errorCode]) {
    message = _serverErrorsMap2.default[errorCode];
  }

  if (isDev && errorCode && !_serverErrorsMap2.default[errorCode]) {
    message = "Missing error code handling for: '" + errorCode + "'. Add correct message to serverErrorsMap.js";
  }

  if (!isDev && (!errorCode || !_serverErrorsMap2.default[errorCode])) {
    message = messages.defaultError;
  }

  if (typeof message === "function") {
    message = message(action);
  }

  return message;
}
module.exports = exports["default"];