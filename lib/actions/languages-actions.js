'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguages = getLanguages;

var _constants = require('../constants');

function getLanguages() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: _constants.LANGUAGES + _constants.GET,
    endpoint: '/languages/?limit=' + limit + '&offset=' + offset + '&q=' + query
  };
}