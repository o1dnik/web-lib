import {REDIRECT} from '../constants';

export function redirectTo(path = '/', delay) {
  return {
    type: REDIRECT,
    payload: {path, delay}
  };
}
