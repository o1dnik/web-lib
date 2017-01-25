'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customPropTypes = require('./customPropTypes');

Object.keys(_customPropTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customPropTypes[key];
    }
  });
});

var _appendClassPrefix = require('./appendClassPrefix');

Object.keys(_appendClassPrefix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _appendClassPrefix[key];
    }
  });
});