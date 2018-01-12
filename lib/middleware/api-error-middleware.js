"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("../constants");

var _utils = require("../helpers/utils");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function () {
  return function (next) {
    return function (action) {
      var err = action.err,
          apiError = action.apiError,
          rest = _objectWithoutProperties(action, ["err", "apiError"]);

      if (!apiError || !err) return next(action);

      if (err.response) {
        if (err.response.status >= 500) {
          if (!err.response.data) {
            err.response.data = { code: "server_error" };
          }

          if (!err.response.data.code) {
            err.response.data.code = "server_error";
          }
        }

        if (err.response.status < 500 && err.response.status >= 400) {
          if (err.response.status === 401 || err.response.status === 403) {
            next({ type: (0, _utils.getActionType)(_constants.SESSION_EXPIRED) });

            if (err.response.status === 401) {
              if (!err.response.data) {
                err.response.data = { code: "authentication_failed" };
              }

              if (!err.response.data.code) {
                err.response.data.code = "authentication_failed";
              }
            } else if (err.response.status === 403) {
              if (!err.response.data) {
                err.response.data = { code: "authorization_failed" };
              }

              if (!err.response.data.code) {
                err.response.data.code = "authorization_failed";
              }
            }
          } else if (err.response.status === 404) {
            if (!err.response.data) {
              err.response.data = { code: "not_found" };
            }

            if (!err.response.data.code) {
              err.response.data.code = "not_found";
            }
          } else {
            if (!err.response.data) {
              err.response.data = { code: "bad_request" };
            }

            if (!err.response.data.code) {
              err.response.data.code = "bad_request";
            }
          }
        }
      } else if (err.request) {
        if ("onLine" in window.navigator) {
          var onLine = window.navigator.onLine;


          if (onLine) {
            err.response = { data: { code: "default_error", onLine: onLine } };
          } else {
            err.response = { data: { code: "network_error", onLine: onLine } };
          }
        } else {
          err.response = { data: { code: "network_error", onLine: "unknown" } };
        }
      } else {
        err.response = { data: { code: "default_error" } };
      }

      next(_extends({ err: err.response }, rest));
    };
  };
};

module.exports = exports["default"];