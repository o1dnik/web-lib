'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguages = getLanguages;

var _constants = require('../constants');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLanguages() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: _constants.LANGUAGES + _constants.GET,
    endpoint: '/languages/?' + _qs2.default.stringify({ limit: limit, offset: offset, query: query })
  };
}