import {DEFAULT_ERROR} from './constants';

const serverErrorsMap = {
  'default_error': DEFAULT_ERROR,
  'unknown_code': DEFAULT_ERROR,
  'bad_request': DEFAULT_ERROR,
  'account_already_confirmed': 'This account is already confirmed',
  'wrong_credentials': 'Sorry, but these crediantials are not correct.',
  'invalid_data': 'Sorry, an error has occurred. Please check your input.',
  'token_invalid': 'Sorry, but this code is expired or invalid.',
  'email_not_found': 'Sorry, but we do not have an account with this email address.'
};

export default serverErrorsMap;
