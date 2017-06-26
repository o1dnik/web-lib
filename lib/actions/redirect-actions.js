import { REDIRECT } from '../constants';
import { getActionType } from '../helpers/utils';

export function redirectTo() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var delay = arguments[1];

  return {
    type: getActionType(REDIRECT),
    payload: { path: path, delay: delay }
  };
}