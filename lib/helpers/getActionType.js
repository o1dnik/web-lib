'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActionType = getActionType;
function getActionType() {
  for (var _len = arguments.length, strings = Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return strings.join('_');
}