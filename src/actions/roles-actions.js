import {ROLES, GET} from '../constants';

export function getRoles(query = '', limit = 100, offset = 0) {
  return {
    type: ROLES + GET,
    endpoint: `/roles/?limit=${limit}&offset=${offset}&q=${query}`
  };
}
