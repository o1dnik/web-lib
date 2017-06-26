import _get from 'lodash/get';

var _actionHandlers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { GET, CREATE, START, SUCCESS, FAIL, NONE, THREADS, THREAD, LOADING, LOGOUT, SESSION_EXPIRED, SET, FILTER, MESSAGES } from '../constants';

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

export var actionHandlers = (_actionHandlers = {}, _defineProperty(_actionHandlers, getActionType(THREADS, GET, START), function (state) {
  return _extends({}, state, {
    loading: LOADING
  });
}), _defineProperty(_actionHandlers, getActionType(THREADS, GET, SUCCESS), function (state, action) {
  var threads = _get(action, 'res.data.results', []);

  return _extends({}, state, {
    filter: _extends({}, state.filter, {
      limit: action.payload.limit,
      page: action.payload.page
    }),
    count: action.payload.appendToList ? _get(action, 'res.data.count') : state.count,
    result: action.payload.appendToList ? threads.map(function (t) {
      return t.id;
    }) : [].concat(_toConsumableArray(state.result)),
    entities: _extends({}, state.entities, arrayToObject(threads, 'id')),
    loading: SUCCESS
  });
}), _defineProperty(_actionHandlers, getActionType(THREADS, GET, FAIL), function (state) {
  return _extends({}, state, { loading: FAIL });
}), _defineProperty(_actionHandlers, getActionType(MESSAGES, GET, SUCCESS), function (state, action) {
  return _extends({}, state, {
    entities: _extends({}, state.entities, _defineProperty({}, action.payload.threadId, _extends({}, state.entities[action.payload.threadId], {
      unread_count: 0
    })))
  });
}), _defineProperty(_actionHandlers, getActionType(THREAD, CREATE, START), function (state) {
  return _extends({}, state, {
    creating: LOADING
  });
}), _defineProperty(_actionHandlers, getActionType(THREAD, CREATE, SUCCESS), function (state, action) {
  var thread = _get(action, 'res.data');

  return _extends({}, state, {
    entities: _extends({}, state.entities, _defineProperty({}, thread.id, thread)),
    result: [thread.id].concat(_toConsumableArray(state.result)),
    count: state.count ? state.count + 1 : 1,
    creating: SUCCESS
  });
}), _defineProperty(_actionHandlers, getActionType(THREAD, CREATE, FAIL), function (state) {
  return _extends({}, state, {
    creating: FAIL
  });
}), _defineProperty(_actionHandlers, getActionType(THREADS, FILTER, SET), function (state, action) {
  return _extends({}, state, {
    filter: _extends({}, _get(action, 'payload.filter', state.filter))
  });
}), _defineProperty(_actionHandlers, getActionType(LOGOUT), function () {
  return _extends({}, defaultState);
}), _defineProperty(_actionHandlers, getActionType(SESSION_EXPIRED), function () {
  return _extends({}, defaultState);
}), _actionHandlers);

export default createReducer(actionHandlers, defaultState);