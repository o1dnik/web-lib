import _get from 'lodash/get';

var _actionHandlers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { GET, CREATE, START, SUCCESS, FAIL, NONE, MESSAGES, MESSAGE, LOADING, LOGOUT, SESSION_EXPIRED, SET, THREAD, FILTER } from '../constants';

import { createReducer, getActionType, arrayToObject } from '../helpers/utils';

export var defaultState = {
  loading: NONE,
  creating: NONE,

  filter: {
    limit: 10,
    page: 1
  },

  count: null,
  result: [],
  entities: {}
};

export var actionHandlers = (_actionHandlers = {}, _defineProperty(_actionHandlers, getActionType(MESSAGES, GET, START), function (state) {
  return _extends({}, state, {
    loading: LOADING
  });
}), _defineProperty(_actionHandlers, getActionType(MESSAGES, GET, SUCCESS), function (state, action) {
  var messages = _get(action, 'res.data.results', []);

  return _extends({}, state, {
    filter: _extends({}, state.filter, {
      limit: action.payload.limit,
      page: action.payload.page
    }),
    count: _get(action, 'res.data.count'),
    result: messages.map(function (t) {
      return t.id;
    }),
    entities: _extends({}, state.entities, arrayToObject(messages, 'id')),
    loading: SUCCESS
  });
}), _defineProperty(_actionHandlers, getActionType(MESSAGES, GET, FAIL), function (state) {
  return _extends({}, state, { loading: FAIL });
}), _defineProperty(_actionHandlers, getActionType(MESSAGE, CREATE, START), function (state) {
  return _extends({}, state, {
    creating: LOADING
  });
}), _defineProperty(_actionHandlers, getActionType(MESSAGE, CREATE, SUCCESS), function (state, action) {
  var message = _get(action, 'res.data');
  var result = state.filter.page === 1 ? [message.id].concat(_toConsumableArray(state.result)) : state.result;

  return _extends({}, state, {
    count: state.count + 1,
    result: result,
    entities: _extends({}, state.entities, _defineProperty({}, message.id, message)),
    creating: SUCCESS
  });
}), _defineProperty(_actionHandlers, getActionType(MESSAGE, CREATE, FAIL), function (state) {
  return _extends({}, state, {
    creating: FAIL
  });
}), _defineProperty(_actionHandlers, getActionType(MESSAGES, FILTER, SET), function (state, action) {
  return _extends({}, state, {
    filter: _extends({}, _get(action, 'payload.filter', state.filter))
  });
}), _defineProperty(_actionHandlers, getActionType(THREAD, CREATE, SUCCESS), function (state, action) {
  return _extends({}, state, {
    result: [],
    count: null
  });
}), _defineProperty(_actionHandlers, getActionType(LOGOUT), function () {
  return _extends({}, defaultState);
}), _defineProperty(_actionHandlers, getActionType(SESSION_EXPIRED), function () {
  return _extends({}, defaultState);
}), _actionHandlers);

export default createReducer(actionHandlers, defaultState);