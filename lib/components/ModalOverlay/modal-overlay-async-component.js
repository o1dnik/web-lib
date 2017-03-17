'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webLib = require('web-lib');

exports.default = (0, _webLib.asyncComponent)(function (cb) {
  require.ensure([], function (require) {
    cb(require('./modal-overlay-component'));
  }, 'modal-overlay');
});
module.exports = exports['default'];