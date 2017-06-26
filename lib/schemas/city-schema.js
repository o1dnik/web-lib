'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({

  id: _yup2.default.string().required().default(''),

  name: _yup2.default.string().required().default('')

}).noUnknown();
module.exports = exports['default'];