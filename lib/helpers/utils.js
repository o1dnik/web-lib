import _has from 'lodash/has';
import _isNil from 'lodash/isNil';
import _isEmpty from 'lodash/isEmpty';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import { SUCCESS, START, FAIL, LOADING } from '../constants';

export function arrayToObject(array, idProp) {
  var obj = {};
  array.forEach(function (i) {
    obj[i[idProp]] = i;
  });
  return obj;
}

export function pageToOffset(page, limit) {
  return limit * (page - 1);
}

export function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new window.FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
}

export function renderExpires(expiresAt) {
  var diff = differenceInMilliseconds(expiresAt, Date.now());
  var time = distanceInWordsToNow(expiresAt, { addSuffix: true });

  return diff > 0 ? 'Expires ' + time : 'Expired ' + time;
}

export function handleFieldArrayItemAdd(fields) {
  return function () {
    return fields.push({});
  };
}

export function handleFieldArrayItemRemove(fields, idx) {
  var amountRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return function () {
    if (fields.length > amountRequired) {
      fields.remove(idx);
    }
  };
}

export function filterDoubleSelectEmptyValues(item) {
  if (!item || _isEmpty(item)) return false;

  if (_isNil(item.id) || item.id === '') return false;

  if (_isNil(item.level) || item.level === '') return false;

  return true;
}

export function createReducer(actionHandlers, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    if (_has(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action);
    }

    return state;
  };
}

export function getActionType() {
  for (var _len = arguments.length, strings = Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return strings.join('_');
}

// export function alwaysReturnObj (o, prop) {
//   if (typeof o === 'string') return {[o]: prop}

//   if (Array.isArray(o)) {
//     return arr.reduce((acc, cur) => {
//       acc[cur] = prop
//       return acc
//     }, {})
//   } else {
//     throw new Error('Only types of Array or String allowed')
//   }
// }

function buildReduce(props, type, cb) {
  var result = props.reduce(function (acc, cur) {
    acc[cur] = type;
    return acc;
  }, {});

  return function (state, action) {
    if (cb) {
      return _extends({}, state, result, cb(state, action));
    }
    return _extends({}, state, result);
  };
}

export function getAsyncActionHandler(_ref) {
  var _ref2;

  var type = _ref.type,
      props = _ref.props,
      onStart = _ref.onStart,
      onSuccess = _ref.onSuccess,
      onFail = _ref.onFail;

  var start = buildReduce(props, LOADING, onStart);
  var success = buildReduce(props, SUCCESS, onSuccess);
  var fail = buildReduce(props, FAIL, onFail);
  return _ref2 = {}, _defineProperty(_ref2, getActionType(type, START), start), _defineProperty(_ref2, getActionType(type, SUCCESS), success), _defineProperty(_ref2, getActionType(type, FAIL), fail), _ref2;
}