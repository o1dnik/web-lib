'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var serverErrorsMap = {
  'default_error': _constants.DEFAULT_ERROR,
  'unknown_code': _constants.DEFAULT_ERROR,
  'bad_request': _constants.DEFAULT_ERROR,
  'account_already_confirmed': 'This account is already confirmed',
  'wrong_credentials': 'Sorry, but these crediantials are not correct.',
  'invalid_data': 'Sorry, an error has occurred. Please check your input.',
  'token_invalid': 'Sorry, but this code is expired or invalid.',
  'email_not_found': 'Sorry, but we do not have an account with this email address.',
  'account_not_confirmed': 'The E-mail was already used. Please check your inbox.'
};

exports.default = serverErrorsMap;
module.exports = exports['default'];