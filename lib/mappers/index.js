"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapRolesFactory = undefined;

var _flatMap2 = require("lodash/flatMap");

var _flatMap3 = _interopRequireDefault(_flatMap2);

var _memoize2 = require("lodash/memoize");

var _memoize3 = _interopRequireDefault(_memoize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mapRolesFactory = exports.mapRolesFactory = function mapRolesFactory() {
  return (0, _memoize3.default)(function (items) {
    return (0, _flatMap3.default)(items, function (c) {
      return [{ name: c.name, isCategory: true, id: c.name }].concat(_toConsumableArray(c.roles));
    });
  });
};