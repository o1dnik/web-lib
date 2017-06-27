'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _roleCategorySchema = require('./role-category-schema');

var _roleCategorySchema2 = _interopRequireDefault(_roleCategorySchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({

  id: _yup2.default.string().required().default(''),

  name: _yup2.default.string().required().default(''),

  level: _yup2.default.string().required().default(''),

  category: _roleCategorySchema2.default.nullable(true).default(null)

}).noUnknown();
module.exports = exports['default'];