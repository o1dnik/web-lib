'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = getRoles;

var _constants = require('../constants');

function getRoles() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: _constants.ROLES + _constants.GET,
    endpoint: '/roles/?limit=' + limit + '&offset=' + offset + '&q=' + query
  };
}