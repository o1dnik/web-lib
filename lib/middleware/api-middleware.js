import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { getActionType } from '../helpers/utils';

import { START, SUCCESS, FAIL, GET, UPDATE, DELETE, CREATE, SESSION_EXPIRED } from '../constants';

export default (function (axios) {
  return function () {
    return function (next) {
      return function (action) {
        var endpoint = action.endpoint,
            apiConfig = action.apiConfig,
            _action$apiV = action.apiV,
            apiV = _action$apiV === undefined ? 'v1' : _action$apiV,
            type = action.type,
            token = action.token,
            rest = _objectWithoutProperties(action, ['endpoint', 'apiConfig', 'apiV', 'type', 'token']);

        if (!endpoint) return next(action);

        var apiEndpoit = '/' + apiV + endpoint;

        next(_extends({ type: getActionType(type, START) }, rest));

        var promise = void 0;

        switch (true) {
          case Boolean(type.includes(GET) && token):
            promise = axios.get(apiEndpoit, _extends({
              headers: { 'cookie': 'token=' + token }
            }, apiConfig));
            break;

          case type.includes(GET):
            promise = axios.get(apiEndpoit, apiConfig);
            break;

          case type.includes(CREATE):
            promise = axios.post(apiEndpoit, _get(action, 'payload.data'), apiConfig);
            break;

          case type.includes(UPDATE):
            promise = axios.put(apiEndpoit, _get(action, 'payload.data'), apiConfig);
            break;

          case type.includes(DELETE):
            promise = axios.delete(apiEndpoit, apiConfig);
            break;
        }

        return promise.then(function (res) {
          return next(_extends({ type: getActionType(type, SUCCESS), res: res }, rest));
        }).catch(function (err) {
          if (_get(err, 'response.status') === 403) {
            next({ type: getActionType(SESSION_EXPIRED) });
          }

          if (!err.response) {
            err.response = { data: { code: 'network_error' } };
          }

          next(_extends({ type: getActionType(type, FAIL), err: err.response }, rest));
        });
      };
    };
  };
});