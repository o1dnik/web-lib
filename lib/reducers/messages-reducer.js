"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionHandlers = exports.defaultState = undefined;

var _get2 = require("lodash/get");

var _get3 = _interopRequireDefault(_get2);

var _actionHandlers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("../constants");

var _utils = require("../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = exports.defaultState = {
  loading: _constants.NONE,
  creating: _constants.NONE,

  filter: {
    limit: 10,
    page: 1
  },

  count: null,
  result: [],
  entities: {}
};

var actionHandlers = exports.actionHandlers = (_actionHandlers = {}, _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGES, _constants.GET, _constants.START), function (state) {
  return _extends({}, state, {
    loading: _constants.LOADING
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGES, _constants.GET, _constants.SUCCESS), function (state, action) {
  var messages = (0, _get3.default)(action, "res.data.results", []);

  return _extends({}, state, {
    filter: _extends({}, state.filter, {
      limit: action.payload.limit,
      page: action.payload.page
    }),
    count: (0, _get3.default)(action, "res.data.count"),
    result: messages.map(function (t) {
      return t.id;
    }),
    entities: _extends({}, state.entities, (0, _utils.arrayToObject)(messages, "id")),
    loading: _constants.SUCCESS
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGES, _constants.GET, _constants.FAIL), function (state) {
  return _extends({}, state, { loading: _constants.FAIL });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGE, _constants.CREATE, _constants.START), function (state) {
  return _extends({}, state, {
    creating: _constants.LOADING
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGE, _constants.CREATE, _constants.SUCCESS), function (state, action) {
  var message = (0, _get3.default)(action, "res.data");
  var result = state.filter.page === 1 ? [message.id].concat(_toConsumableArray(state.result)) : state.result;

  return _extends({}, state, {
    count: state.count + 1,
    result: result,
    entities: _extends({}, state.entities, _defineProperty({}, message.id, message)),
    creating: _constants.SUCCESS
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGE, _constants.CREATE, _constants.FAIL), function (state) {
  return _extends({}, state, {
    creating: _constants.FAIL
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.MESSAGES, _constants.FILTER, _constants.SET), function (state, action) {
  return _extends({}, state, {
    filter: _extends({}, (0, _get3.default)(action, "payload.filter", state.filter))
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.THREAD, _constants.CREATE, _constants.SUCCESS), function (state, action) {
  return _extends({}, state, {
    result: [],
    count: null
  });
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.LOGOUT), function () {
  return _extends({}, defaultState);
}), _defineProperty(_actionHandlers, (0, _utils.getActionType)(_constants.SESSION_EXPIRED), function () {
  return _extends({}, defaultState);
}), _actionHandlers);

exports.default = (0, _utils.createReducer)(actionHandlers, defaultState);