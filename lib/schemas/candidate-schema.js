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

var _jobTypesSchema = require('./job-types-schema');

var _jobTypesSchema2 = _interopRequireDefault(_jobTypesSchema);

var _languageSchema = require('./language-schema');

var _languageSchema2 = _interopRequireDefault(_languageSchema);

var _roleSchema = require('./role-schema');

var _roleSchema2 = _interopRequireDefault(_roleSchema);

var _skillSchema = require('./skill-schema');

var _skillSchema2 = _interopRequireDefault(_skillSchema);

var _webReferenceSchema = require('./web-reference-schema');

var _webReferenceSchema2 = _interopRequireDefault(_webReferenceSchema);

var _statisticsSchema = require('./statistics-schema');

var _statisticsSchema2 = _interopRequireDefault(_statisticsSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({

  id: _yup2.default.string().required(),

  active: _yup2.default.bool().required().default(false),
  active_at: _yup2.default.string(),

  career_level: _yup2.default.string().default(''),

  city: _citySchema2.default.nullable(true).default(null),

  complete: _yup2.default.bool().required().default(false),

  completed_at: _yup2.default.string(),

  completion: _yup2.default.number().default(0),

  statistics: _statisticsSchema2.default.nullable(true).default(null),

  country: _countrySchema2.default.nullable(true).default(null),

  cv_files: _yup2.default.object({
    txt: _yup2.default.string().url(),
    pdf: _yup2.default.string().url(),
    original: _yup2.default.string(),
    images: _yup2.default.array().of(_yup2.default.string().url())
  }).nullable(true).default(null),

  first_name: _yup2.default.string().required().default(''),
  last_name: _yup2.default.string().required().default(''),

  is_deleted: _yup2.default.bool().required().default(false),

  job_types: _yup2.default.array().of(_jobTypesSchema2.default).required().ensure(),

  languages: _yup2.default.array().of(_languageSchema2.default).required().ensure(),

  referral: _yup2.default.object({
    id: _yup2.default.string().required().default(''),
    name: _yup2.default.string().required().default(''),
    slug: _yup2.default.string().required().default('')
  }).nullable(true).default(null),

  relocate: _yup2.default.bool().required().default(false),

  skills: _yup2.default.array().of(_skillSchema2.default).required().ensure(),

  user: _yup2.default.string().required().default(''),

  relocations: _yup2.default.array().of(_citySchema2.default).required().ensure(),

  web_references: _yup2.default.array().of(_webReferenceSchema2.default).required().ensure(),

  roles: _yup2.default.array().of(_roleSchema2.default).required().ensure(),

  email: _yup2.default.string().email().required().default(''),

  salary: _yup2.default.object({
    min: _yup2.default.number().required().default(10000),
    max: _yup2.default.number().required().default(100000)
  }).required(),

  picture: _yup2.default.string().required().default('')

}).noUnknown();
module.exports = exports['default'];