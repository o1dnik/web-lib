'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncComponent = require('../../decorators/asyncComponent');

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncComponent2.default)(function (cb) {
  require.ensure([], function (require) {
    cb(require('./modal-overlay-component'));
  }, 'modal-overlay');
});
module.exports = exports['default'];