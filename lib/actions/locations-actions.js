'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocations = getLocations;

var _constants = require('../constants');

function getLocations() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: _constants.LOCATIONS + _constants.GET,
    endpoint: '/locations/cities/?limit=' + limit + '&offset=' + offset + '&q=' + query
  };
}