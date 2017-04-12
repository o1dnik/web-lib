import {SKILLS, GET} from '../constants';
import {getActionType} from '../helpers/utils';
import qs from 'qs';

export function getSkills(q = '', limit = 100, offset = 0) {
  return {
    type: getActionType(SKILLS,  GET),
    endpoint: `/skills/?${qs.stringify({limit, offset, q})}`
  };
}
