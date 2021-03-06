"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require("lodash/get");

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("../helpers/utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (axios) {
  return function () {
    return function (next) {
      return function (action) {
        var endpoint = action.endpoint,
            apiConfig = action.apiConfig,
            _action$apiV = action.apiV,
            apiV = _action$apiV === undefined ? "v1" : _action$apiV,
            type = action.type,
            token = action.token,
            rest = _objectWithoutProperties(action, ["endpoint", "apiConfig", "apiV", "type", "token"]);

        if (!endpoint) return next(action);

        var apiEndpoit = "/" + apiV + endpoint;

        next(_extends({ type: (0, _utils.getActionType)(type, _constants.START) }, rest));

        var promise = void 0;

        switch (true) {
          case Boolean(type.includes(_constants.GET) && token):
            promise = axios.get(apiEndpoit, _extends({
              headers: { cookie: "token=" + token }
            }, apiConfig));
            break;

          case type.includes(_constants.GET):
            promise = axios.get(apiEndpoit, apiConfig);
            break;

          case type.includes(_constants.CREATE):
            promise = axios.post(apiEndpoit, (0, _get3.default)(action, "payload.data"), apiConfig);
            break;

          case type.includes(_constants.UPDATE):
            promise = axios.put(apiEndpoit, (0, _get3.default)(action, "payload.data"), apiConfig);
            break;

          case type.includes(_constants.PATCH):
            promise = axios.patch(apiEndpoit, (0, _get3.default)(action, "payload.data"), apiConfig);
            break;

          case type.includes(_constants.DELETE):
            promise = axios.delete(apiEndpoit, apiConfig);
            break;

          default:
            break;
        }

        return promise.then(function (res) {
          next(_extends({ type: (0, _utils.getActionType)(type, _constants.SUCCESS), res: res }, rest));
          return res;
        }).catch(function (err) {
          next(_extends({ type: (0, _utils.getActionType)(type, _constants.FAIL), err: err }, rest, { apiError: true }));
          throw err;
        });
      };
    };
  };
};

module.exports = exports["default"];