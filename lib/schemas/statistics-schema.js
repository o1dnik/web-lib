"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yup = require("yup");

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _yup2.default.object().shape({
  offers_total: _yup2.default.number().required().default(0),
  matches_total: _yup2.default.number().required().default(0),
  like_count: _yup2.default.number().required().default(0),
  dislike_count: _yup2.default.number().required().default(0),
  offers_pending: _yup2.default.number().required().default(0),
  offers_accepted: _yup2.default.number().required().default(0),
  offers_declined: _yup2.default.number().required().default(0),
  offers_expired: _yup2.default.number().required().default(0),
  matches_pending: _yup2.default.number().required().default(0),
  matches_accepted: _yup2.default.number().required().default(0),
  matches_declined: _yup2.default.number().required().default(0),
  matches_expired: _yup2.default.number().required().default(0),
  last_offer_at: _yup2.default.string().required().default(""),
  last_match_at: _yup2.default.string().required().default(""),
  last_activity: _yup2.default.string().required().default("")
}).noUnknown();
module.exports = exports["default"];