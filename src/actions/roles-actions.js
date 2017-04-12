import {ROLES, GET} from '../constants';
import {getActionType} from '../helpers/utils';
import qs from 'qs';

export function getRoles(q = '', limit = 100, offset = 0) {
  return {
    type: getActionType(ROLES, GET),
    endpoint: `/roles/?${qs.stringify({limit, offset, q})}`
  };
}
