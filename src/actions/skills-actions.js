import {SKILLS, GET} from '../constants';

export function getSkills(query = '', limit = 100, offset = 0) {
  return {
    type: SKILLS + GET,
    endpoint: `/skills/?limit=${limit}&offset=${offset}&q=${query}`
  };
}
