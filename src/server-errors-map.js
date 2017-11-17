import { DEFAULT_ERROR, NETWORK_ERROR, SERVER_ERROR } from './constants'
import React from 'react'
import { Link } from 'react-router-dom'

const serverErrorsMap = {
  default_error: DEFAULT_ERROR,
  unknown_code: DEFAULT_ERROR,
  invalid_request: DEFAULT_ERROR,
  bad_request: DEFAULT_ERROR,
  server_error: SERVER_ERROR,
  network_error: NETWORK_ERROR,
  account_already_confirmed: 'This account is already confirmed',
  wrong_credentials: action => (
    <span>
      Forgot your password? Please&nbsp;
      <Link className='underlined-link' to={{pathname: '/password-recovery', state: {email: action.email}}}>
        click here
      </Link>
      &nbsp;to recover.
    </span>
  ),
  invalid_data: 'Sorry, an error has occurred. Please check your input.',
  invalid_token: 'Session expired. Please login.', // JWT fails
  // email confirmation token fails
  token_invalid: (
    <span>
      Sorry, but this code is expired or invalid.&nbsp;
      <Link to='/resend'>Resend confirmation E-mail.</Link>
    </span>
  ),
  email_not_found: 'Sorry, but we do not have an account with this email address.',
  email_not_unique: 'Sorry, but we already have an account with this email address.',
  email_permission_missing: 'Please visit settings of your social network to allow usage of your Email for your MoBerries registration.',
  account_not_confirmed: 'The E-mail was already used. Please check your inbox.',
  account_inactive: (
    <span>
      This account is not activated.&nbsp; Please check your email or order a
      new confirmation code.&nbsp;
      <Link to='/resend'>here</Link>
    </span>
  ),
  auth_failed: 'Authentication failed.',
  account_exists: 'User with this E-mail already exists',
  wrong_format: 'Wrong format',
  social_account_exists: 'Sorry, but this social account is already connected with another MoBerries account',
  not_confirmed: (
    <span>
      This email address is not yet confirmed.&nbsp; Please request new
      confirmation code <Link to='/resend'>here</Link>, if expired.
    </span>
  ),
  candidate_inactive: 'Candidate disactivated his profile',
  candidate_not_found: 'Cannot update your account',
  not_completed: 'Please complete the sign-up form',
  account_deleted: 'This account is suspended and is going to be deleted within next 24 hours',
  job_not_found: 'Job not found !',
  job_inactive: 'Job has been disactivated !',
  wrong_password: 'Sorry, but this password is not correct.',
  authentication_failed: 'There was a problem with your authentication. Please, try to login again',
  authorization_failed: 'Not authorized.',
  user_cancelled_login: 'Oops! Looks like you have cancelled the authorization process',
  user_cancelled_authorize: 'Oops! Looks like you have cancelled the authorization process',
  access_denied: 'Oops! Looks like you have cancelled the authorization process',
  not_found: DEFAULT_ERROR
}

export default serverErrorsMap
