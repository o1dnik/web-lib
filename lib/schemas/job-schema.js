'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

var _citySchema = require('./city-schema');

var _citySchema2 = _interopRequireDefault(_citySchema);

var _countrySchema = require('./country-schema');

var _countrySchema2 = _interopRequireDefault(_countrySchema);

var _languageSchema = require('./language-schema');

var _languageSchema2 = _interopRequireDefault(_languageSchema);

var _roleSchema = require('./role-schema');

var _roleSchema2 = _interopRequireDefault(_roleSchema);

var _skillSchema = require('./skill-schema');

var _skillSchema2 = _interopRequireDefault(_skillSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({

  id: _yup2.default.string().required(),

  title: _yup2.default.string().default(''),

  city: _citySchema2.default.nullable(true).default(null),

  country: _countrySchema2.default.nullable(true).default(null),

  skills: _yup2.default.array().of(_skillSchema2.default).required().ensure(),

  company: _yup2.default.object({
    id: _yup2.default.string().required().default(''),
    name: _yup2.default.string().required().default(''),
    logo: _yup2.default.string().nullable(true).required().default(''),
    website: _yup2.default.string().required().default(''),
    slug: _yup2.default.string().required().default(''),
    about: _yup2.default.string().required().default('')
  }).nullable(true).default(null),

  languages: _yup2.default.array().of(_languageSchema2.default).required().ensure(),

  job_types: _yup2.default.array().of(_yup2.default.number()).required().ensure(),

  job_roles: _yup2.default.array().of(_roleSchema2.default).required().ensure(),

  status: _yup2.default.string().required().default(''),

  salary: _yup2.default.object({
    min: _yup2.default.number().required().default(10000),
    max: _yup2.default.number().required().default(100000)
  }).required(),

  created_at: _yup2.default.string().required().default(''),
  changed_at: _yup2.default.string().required().default(''),

  relocate: _yup2.default.bool().required().default(false),

  statistics: _yup2.default.object({}).nullable(true).default(null),

  match: _yup2.default.object({
    id: _yup2.default.string().required(),
    status: _yup2.default.string().required().default(''),
    expired_at: _yup2.default.string().required().default('')
  }).required().nullable(true).default(null),

  liked: _yup2.default.bool().required().default(false)

});
module.exports = exports['default'];