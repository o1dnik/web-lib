import {LOCATIONS, GET} from '../constants';
import {getActionType} from '../helpers/utils';
import qs from 'qs';

export function getLocations(q = '', limit = 100, offset = 0) {
  return {
    type: getActionType(LOCATIONS, GET),
    endpoint: `/locations/cities/?${qs.stringify({limit, offset, q})}`
  };
}
