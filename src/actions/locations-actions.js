import {LOCATIONS, GET} from '../constants';
import qs from 'qs';

export function getLocations(query = '', limit = 100, offset = 0) {
  return {
    type: LOCATIONS + GET,
    endpoint: `/locations/cities/?${qs.stringify({limit, offset, query})}`
  };
}
