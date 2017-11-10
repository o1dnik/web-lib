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
  'invalid_request': _constants.DEFAULT_ERROR,
  'bad_request': _constants.DEFAULT_ERROR,
  'server_error': _constants.SERVER_ERROR,
  'network_error': _constants.NETWORK_ERROR,
  'account_already_confirmed': 'This account is already confirmed',
  'wrong_credentials': 'Sorry, but these credentials are not correct.',
  'invalid_data': 'Sorry, an error has occurred. Please check your input.',
  'invalid_token': 'Session expired. Please login.', // JWT fails
  'token_invalid': // email confirmation token fails
  _react2.default.createElement(
    'span',
    null,
    'Sorry, but this code is expired or invalid. ',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/resend' },
      'Resend confirmation E-mail.'
    )
  ),
  'email_not_found': 'Sorry, but we do not have an account with this email address.',
  'email_not_unique': 'Sorry, but we already have an account with this email address.',
  'email_permission_missing': 'Please visit settings of your social network to allow usage of your Email for your MoBerries registration.',
  'account_not_confirmed': 'The E-mail was already used. Please check your inbox.',
  'account_inactive': _react2.default.createElement(
    'span',
    null,
    'This account is not activated.\xA0 Please check your email or order a new confirmation code.\xA0',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/resend' },
      'here'
    )
  ),
  'auth_failed': 'Authentication failed.',
  'account_exists': 'User with this E-mail already exists',
  'wrong_format': 'Wrong format',
  'social_account_exists': 'Sorry, but this social account is already connected with another MoBerries account',
  'not_confirmed': _react2.default.createElement(
    'span',
    null,
    'This email address is not yet confirmed.\xA0 Please request new confirmation code ',
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/resend' },
      'here'
    ),
    ', if expired.'
  ),
  'candidate_inactive': 'Candidate disactivated his profile',
  'candidate_not_found': 'Cannot update your account',
  'not_completed': 'Please complete the sign-up form',
  'account_deleted': 'This account is suspended and is going to be deleted within next 24 hours',
  'job_not_found': 'Job not found !',
  'job_inactive': 'Job has been disactivated !',
  'wrong_password': 'Sorry, but this password is not correct.',
  'authentication_failed': 'There was a problem with your authentication. Please, try to login again',
  'not_found': _constants.DEFAULT_ERROR
};

exports.default = serverErrorsMap;
module.exports = exports['default'];