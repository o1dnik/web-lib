'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOldValue = getOldValue;

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOldValue(props) {
  var value = props.value,
      input = props.input;

  var oldValue = {};

  if (!(0, _isEmpty2.default)(input.value) || typeof input.value === 'string') {
    return oldValue = input.value;
  }

  if (!(0, _isEmpty2.default)(value) || typeof value === 'string') {
    return oldValue = value;
  }

  return oldValue;
}