import {LANGUAGES, GET} from '../constants';
import qs from 'qs';

export function getLanguages(q = '', limit = 100, offset = 0) {
  return {
    type: LANGUAGES + GET,
    endpoint: `/languages/?${qs.stringify({limit, offset, q})}`
  };
}
