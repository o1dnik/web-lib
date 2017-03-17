'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncComponent = require('../../decorators/asyncComponent');

exports.default = (0, _asyncComponent.asyncComponent)(function (cb) {
  require.ensure([], function (require) {
    cb(require('./modal-overlay-component'));
  }, 'modal-overlay');
});
module.exports = exports['default'];