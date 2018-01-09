'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.arrayToObject = arrayToObject;
exports.pageToOffset = pageToOffset;
exports.getBase64 = getBase64;
exports.getExpires = getExpires;
exports.handleFieldArrayItemAdd = handleFieldArrayItemAdd;
exports.handleFieldArrayItemRemove = handleFieldArrayItemRemove;
exports.filterDoubleSelectEmptyValues = filterDoubleSelectEmptyValues;
exports.createReducer = createReducer;
exports.getActionType = getActionType;
exports.getAsyncActionHandler = getAsyncActionHandler;

var _difference_in_milliseconds = require('date-fns/difference_in_milliseconds');

var _difference_in_milliseconds2 = _interopRequireDefault(_difference_in_milliseconds);

var _reactIntl = require('react-intl');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messages = (0, _reactIntl.defineMessages)({
  expires: { id: 'app.common.expires' },
  expired: { id: 'app.common.expired' }
});

function arrayToObject(array, idProp) {
  var obj = {};
  array.forEach(function (i) {
    obj[i[idProp]] = i;
  });
  return obj;
}

function pageToOffset(page, limit) {
  return limit * (page - 1);
}

function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new window.FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onabort = function (error) {
      reject(error);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
}

function getExpires(expiresAt) {
  var diff = (0, _difference_in_milliseconds2.default)(expiresAt, Date.now());

  return diff > 0 ? _extends({}, messages.expires, { values: { time: expiresAt } }) : _extends({}, messages.expired, { values: { time: expiresAt } });
}

function handleFieldArrayItemAdd(fields) {
  return function () {
    return fields.push({});
  };
}

function handleFieldArrayItemRemove(fields, idx) {
  var amountRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return function () {
    if (fields.length > amountRequired) {
      fields.remove(idx);
    }
  };
}

function filterDoubleSelectEmptyValues(item) {
  if (!item || (0, _isEmpty3.default)(item)) return false;

  if ((0, _isNil3.default)(item.id) || item.id === '') return false;

  if ((0, _isNil3.default)(item.level) || item.level === '') return false;

  return true;
}

function createReducer(actionHandlers, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    if ((0, _has3.default)(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action);
    }

    return state;
  };
}

function getActionType() {
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

function getAsyncActionHandler(_ref) {
  var _ref2;

  var type = _ref.type,
      props = _ref.props,
      onStart = _ref.onStart,
      onSuccess = _ref.onSuccess,
      onFail = _ref.onFail;

  var start = buildReduce(props, _constants.LOADING, onStart);
  var success = buildReduce(props, _constants.SUCCESS, onSuccess);
  var fail = buildReduce(props, _constants.FAIL, onFail);
  return _ref2 = {}, _defineProperty(_ref2, getActionType(type, _constants.START), start), _defineProperty(_ref2, getActionType(type, _constants.SUCCESS), success), _defineProperty(_ref2, getActionType(type, _constants.FAIL), fail), _ref2;
}