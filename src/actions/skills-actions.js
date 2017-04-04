import {SKILLS, GET} from '../constants';
import qs from 'qs';

export function getSkills(query = '', limit = 100, offset = 0) {
  return {
    type: SKILLS + GET,
    endpoint: `/skills/?${qs.stringify({limit, offset, query})}`
  };
}
