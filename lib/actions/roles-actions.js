'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = getRoles;

var _constants = require('../constants');

var _utils = require('../helpers/utils');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoles() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: (0, _utils.getActionType)(_constants.ROLES, _constants.GET),
    endpoint: '/jobrolecategories/?' + _qs2.default.stringify({ limit: limit, offset: offset, search: search }),
    apiV: 'v2'
  };
}