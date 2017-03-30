'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverErrorsMap = {
  'default_error': _constants.DEFAULT_ERROR,
  'unknown_code': _constants.DEFAULT_ERROR,
  'bad_request': _constants.DEFAULT_ERROR,
  'server_error': _constants.DEFAULT_ERROR,
  'account_already_confirmed': 'This account is already confirmed',
  'wrong_credentials': 'Sorry, but these crediantials are not correct.',
  'invalid_data': 'Sorry, an error has occurred. Please check your input.',
  'token_invalid': 'Sorry, but this code is expired or invalid.',
  'email_not_found': 'Sorry, but we do not have an account with this email address.',
  'email_not_unique': 'Sorry, but we already have an account with this email address.',
  'account_not_confirmed': 'The E-mail was already used. Please check your inbox.',
  'auth_failed': 'Authentication failed.',
  'account_exists': 'User with this E-mail already exists',
  'wrong_format': 'Wrong format',
  'not_confirmed': _react2.default.createElement(
    'span',
    null,
    'This email address is not yet confirmed.\xA0 Please request new confirmation code ',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/resend-email' },
      'here'
    ),
    ', if expired.'
  ),
  'candidate_inactive': 'Candidate disactivated his profile',
  'account_deleted': 'The account has been deleted !',
  'job_not_found': 'Job not found !',
  'job_inactive': 'Job has been disactivated !'
};

exports.default = serverErrorsMap;
module.exports = exports['default'];