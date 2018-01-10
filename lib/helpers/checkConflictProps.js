"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intersection2 = require("lodash/intersection");

var _intersection3 = _interopRequireDefault(_intersection2);

exports.checkConflictProps = checkConflictProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkConflictProps(props, warnProps) {
  var conflicts = (0, _intersection3.default)(Object.keys(props), warnProps);
  if (!conflicts || !conflicts.length) {
    return;
  }
  console.warn("Conflicts props in decorator, they will be overridden: " + conflicts);
}