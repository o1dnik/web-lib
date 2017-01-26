'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkConflictProps = checkConflictProps;

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkConflictProps(props, warnProps) {
  var conflicts = (0, _intersection2.default)(Object.keys(props), warnProps);
  if (!conflicts || !conflicts.length) {
    return;
  }
  console.warn('Conflicts props in decorator, they will be overridden: ' + conflicts);
}