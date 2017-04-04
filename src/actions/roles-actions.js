import {ROLES, GET} from '../constants';
import qs from 'qs';

export function getRoles(q = '', limit = 100, offset = 0) {
  return {
    type: ROLES + GET,
    endpoint: `/roles/?${qs.stringify({limit, offset, q})}`
  };
}
