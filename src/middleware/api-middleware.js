import axios from 'axios';
import {get} from 'lodash-es';

import {
  START,
  SUCCESS,
  FAIL,
  GET,
  UPDATE,
  DELETE,
  CREATE,
  SESSION_EXPIRED
} from '../constants';

export default () => next => action => {

  const {endpoint, apiConfig, type, token, ...rest} = action;

  if (!endpoint) return next(action);

  next({type: type + START, ...rest});

  let promise;

  switch (true) {

    case Boolean(type.includes(GET) && token):
      promise = axios.get(endpoint, {
        headers: {'cookie': `token=${token}`},
        ...apiConfig
      });
      break;

    case type.includes(GET):
      promise = axios.get(endpoint, apiConfig);
      break;

    case type.includes(CREATE):
      promise = axios.post(endpoint, get(action, 'payload.data'), apiConfig);
      break;

    case type.includes(UPDATE):
      promise = axios.put(endpoint, get(action, 'payload.data'), apiConfig);
      break;

    case type.includes(DELETE):
      promise = axios.delete(endpoint, apiConfig);
      break;

  }

  return promise
    .then(res => next({type: type + SUCCESS, res, ...rest}))
    .catch(err => {

      if (get(err, 'response.status') === 403) {
        next({type: SESSION_EXPIRED});
      }

      next({type: type + FAIL, err: err.response, ...rest});
    });

};
