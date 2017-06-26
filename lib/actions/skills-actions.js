import { SKILLS, GET } from '../constants';
import { getActionType } from '../helpers/utils';
import qs from 'qs';

export function getSkills() {
  var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return {
    type: getActionType(SKILLS, GET),
    endpoint: '/skills/?' + qs.stringify({ limit: limit, offset: offset, q: q })
  };
}