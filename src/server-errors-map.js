import {DEFAULT_ERROR, NETWORK_ERROR} from './constants'
import React from 'react'
import {Link} from 'react-router-dom'

const serverErrorsMap = {
  'default_error': DEFAULT_ERROR,
  'unknown_code': DEFAULT_ERROR,
  'bad_request': DEFAULT_ERROR,
  'server_error': DEFAULT_ERROR,
  'network_error': NETWORK_ERROR,
  'account_already_confirmed': 'This account is already confirmed',
  'wrong_credentials': 'Sorry, but these credentials are not correct.',
  'invalid_data': 'Sorry, an error has occurred. Please check your input.',
  'invalid_token': 'Session expired. Please login.', // JWT fails
  'token_invalid': ( // email confirmation token fails
    <span>
      Sorry, but this code is expired or invalid. <Link to='/resend'>Resend E-mail.</Link>
    </span>
  ),
  'email_not_found': 'Sorry, but we do not have an account with this email address.',
  'email_not_unique': 'Sorry, but we already have an account with this email address.',
  'email_permission_missing': 'Please visit settings of your social network to allow usage of your Email for your MoBerries registration.',
  'account_not_confirmed': 'The E-mail was already used. Please check your inbox.',
  'auth_failed': 'Authentication failed.',
  'account_exists': 'User with this E-mail already exists',
  'wrong_format': 'Wrong format',
  'not_confirmed': (
    <span>
      This email address is not yet confirmed.&nbsp;
      Please request new confirmation code <Link to='/resend'>here</Link>, if expired.
    </span>
  ),
  'candidate_inactive': 'Candidate disactivated his profile',
  'candidate_not_found': 'Cannot update your account',
  'not_completed': 'Please complete the sign-up form',
  'account_deleted': 'The account has been deleted !',
  'job_not_found': 'Job not found !',
  'job_inactive': 'Job has been disactivated !',
  'wrong_password': 'Sorry, but this password is not correct.',
  'authentication_failed': 'There was a problem with your authentication. Please, try to login again',
  'not_found': 'Sorry, this job is not found.'
}

export default serverErrorsMap
