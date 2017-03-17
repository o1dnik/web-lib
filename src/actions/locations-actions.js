import {LOCATIONS, GET} from '../constants';

export function getLocations(query = '', limit = 30, offset = 0) {
  return {
    type: LOCATIONS + GET,
    endpoint: `/locations/cities/?limit=${limit}&offset=${offset}&q=${query}`
  };
}
