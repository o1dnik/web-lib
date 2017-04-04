import {SKILLS, GET} from '../constants';
import qs from 'qs';

export function getSkills(q = '', limit = 100, offset = 0) {
  return {
    type: SKILLS + GET,
    endpoint: `/skills/?${qs.stringify({limit, offset, q})}`
  };
}
