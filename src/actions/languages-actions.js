import {LANGUAGES, GET} from '../constants';

export function getLanguages(query = '', limit = 100, offset = 0) {
  return {
    type: LANGUAGES + GET,
    endpoint: `/languages/?limit=${limit}&offset=${offset}&q=${query}`
  };
}
