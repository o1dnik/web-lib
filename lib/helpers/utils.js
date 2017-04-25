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

exports.arrayToObject = arrayToObject;
exports.pageToOffset = pageToOffset;
exports.getBase64 = getBase64;
exports.renderExpires = renderExpires;
exports.handleFieldArrayItemAdd = handleFieldArrayItemAdd;
exports.handleFieldArrayItemRemove = handleFieldArrayItemRemove;
exports.filterDoubleSelectEmptyValues = filterDoubleSelectEmptyValues;
exports.createReducer = createReducer;
exports.getActionType = getActionType;

var _difference_in_milliseconds = require('date-fns/difference_in_milliseconds');

var _difference_in_milliseconds2 = _interopRequireDefault(_difference_in_milliseconds);

var _distance_in_words_to_now = require('date-fns/distance_in_words_to_now');

var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    reader.onerror = function (error) {
      reject(error);
    };
  });
}

function renderExpires(expiresAt) {
  var diff = (0, _difference_in_milliseconds2.default)(expiresAt, Date.now());
  var time = (0, _distance_in_words_to_now2.default)(expiresAt, { addSuffix: true });

  return diff > 0 ? 'Expires ' + time : 'Expired ' + time;
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