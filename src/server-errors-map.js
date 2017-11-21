import React from 'react'
import { Link } from 'react-router-dom'
import {defineMessages, FormattedMessage} from 'react-intl'

const messages = defineMessages({
  defaultError: {id: 'app.error.code.default_error'},
  serverError: {id: 'app.error.code.server_error'},
  networkError: {id: 'app.error.code.network_error'},
  accountAlreadyConfirmed: {id: 'app.error.code.account_already_confirmed'},
  invalidData: {id: 'app.error.code.invalid_data'},
  invalidToken: {id: 'app.error.code.invalid_token'},
  tokenInvalidText: {id: 'app.error.code.token_invalid.text'},
  tokenInvalidLink: {id: 'app.error.code.token_invalid.link'},
  emailNotFound: {id: 'app.error.code.email_not_found'},
  emailNotUniq: {id: 'app.error.code.email_not_unique'},
  emailPermissionMissing: {id: 'app.error.code.email_permission_missing'},
  accountNotConfirmed: {id: 'app.error.code.account_not_confirmed'},
  accountInactiveText: {id: 'app.error.code.account_inactive.text'},
  accountInactiveLink: {id: 'app.error.code.account_inactive.link'},
  wrongCredentialsStartText: {id: 'app.error.code.wrong_credentials.start.text'},
  wrongCredentialsLink: {id: 'app.error.code.wrong_credentials.link'},
  wrongCredentialsEndText: {id: 'app.error.code.wrong_credentials.end.text'},
  authFail: {id: 'app.error.code.auth_failed'},
  accountExists: {id: 'app.error.code.account_exists'},
  wrongFormat: {id: 'app.error.code.wrong_format'},
  socialAccountExists: {id: 'app.error.code.social_account_exists'},
  notConfirmedTextStart: {id: 'app.error.code.not_confirmed.text.start'},
  notConfirmedLink: {id: 'app.error.code.not_confirmed.link'},
  notConfirmedTextEnd: {id: 'app.error.code.not_confirmed.text.end'},
  candidateInactive: {id: 'app.error.code.candidate_inactive'},
  candidateNotFound: {id: 'app.error.code.candidate_not_found'},
  notCompleted: {id: 'app.error.code.not_completed'},
  accountDeleted: {id: 'app.error.code.account_deleted'},
  jobNotFound: {id: 'app.error.code.job_not_found'},
  jobInactive: {id: 'app.error.code.job_inactive'},
  wrongPassword: {id: 'app.error.code.wrong_password'},
  authenticationFail: {id: 'app.error.code.authentication_failed'},
  authorizationFail: {id: 'app.error.code.authorization_failed'},
  userLoginCancel: {id: 'app.error.code.user_cancelled_login'},
  accesDenied: {id: 'app.error.code.access_denied'}
})

const serverErrorsMap = {
  default_error: messages.defaultError.id,
  unknown_code: messages.defaultError.id,
  invalid_request: messages.defaultError.id,
  bad_request: messages.defaultError.id,
  server_error: messages.serverError.id,
  network_error: messages.networkError.id,
  account_already_confirmed: messages.accountAlreadyConfirmed.id,
  wrong_credentials: action => (
    <span>
      <FormattedMessage {...messages.wrongCredentialsStartText} />&nbsp;
      <Link className='u' to={{pathname: '/password-recovery', state: {email: action.email}}}>
        <FormattedMessage {...messages.wrongCredentialsLink} />
      </Link>
      &nbsp;<FormattedMessage {...messages.wrongCredentialsEndText} />
    </span>
  ),
  invalid_data: messages.invalidData.id,
  invalid_token: messages.invalidToken.id, // JWT fails
  // email confirmation token fails
  token_invalid: (
    <span>
      <FormattedMessage {...messages.tokenInvalidText} />
      <Link to='/resend'> <FormattedMessage {...messages.tokenInvalidLink} /></Link>
    </span>
  ),
  email_not_found: messages.emailNotFound.id,
  email_not_unique: messages.emailNotUniq.id,
  email_permission_missing: messages.emailPermissionMissing.id,
  account_not_confirmed: messages.accountNotConfirmed.id,
  account_inactive: (
    <span>
      <FormattedMessage {...messages.accountInactiveText} />
      <Link to='/resend'> <FormattedMessage {...messages.accountInactiveLink} /></Link>
    </span>
  ),
  auth_failed: messages.authFail.id,
  account_exists: messages.accountExists.id,
  wrong_format: messages.wrongFormat.id,
  social_account_exists: messages.socialAccountExists.id,
  not_confirmed: (
    <span>
      <FormattedMessage {...messages.notConfirmedTextStart} />&nbsp;
      <Link to='/resend'><FormattedMessage {...messages.notConfirmedLink} /></Link>
      <FormattedMessage {...messages.notConfirmedTextEnd} />
    </span>
  ),
  candidate_inactive: messages.candidateInactive.id,
  candidate_not_found: messages.candidateNotFound.id,
  not_completed: messages.notCompleted.id,
  account_deleted: messages.accountDeleted.id,
  job_not_found: messages.jobNotFound.id,
  job_inactive: messages.jobInactive.id,
  wrong_password: messages.wrongPassword.id,
  authentication_failed: messages.authenticationFail.id,
  authorization_failed: messages.authorizationFail.id,
  user_cancelled_login: messages.userLoginCancel.id,
  user_cancelled_authorize: messages.userLoginCancel.id,
  access_denied: messages.accesDenied.id,
  not_found: messages.defaultError.id
}

export default serverErrorsMap
