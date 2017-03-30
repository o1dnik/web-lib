import {DEFAULT_ERROR} from './constants';
import React from 'react';
import {Link} from 'react-router-dom';

const serverErrorsMap = {
  'default_error': DEFAULT_ERROR,
  'unknown_code': DEFAULT_ERROR,
  'bad_request': DEFAULT_ERROR,
  'server_error': DEFAULT_ERROR,
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
  'not_confirmed': (
    <span>
      This email address is not yet confirmed.&nbsp;
      Please request new confirmation code <Link to='/resend-email'>here</Link>, if expired.
    </span>
  ),
  'candidate_inactive': 'Candidate disactivated his profile',
  'account_deleted': 'The account has been deleted !',
  'job_not_found': 'Job not found !',
  'job_inactive': 'Job has been disactivated !'
};

export default serverErrorsMap;
