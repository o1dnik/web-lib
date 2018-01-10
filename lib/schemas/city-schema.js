"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yup = require("yup");

var _yup2 = _interopRequireDefault(_yup);

var _countrySchema = require("./country-schema");

var _countrySchema2 = _interopRequireDefault(_countrySchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({
  id: _yup2.default.string().required().default(""),

  name: _yup2.default.string().required().default(""),

  country: _countrySchema2.default.nullable(true).default(null)
}).noUnknown();
module.exports = exports["default"];