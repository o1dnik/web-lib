import axios from 'axios';
import {get} from 'lodash';
import {getActionType} from '../helpers/utils';

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

  const {endpoint, apiConfig, apiV = 'v1', type, token, ...rest} = action;

  if (!endpoint) return next(action);

  const apiEndpoit = `/${apiV}${endpoint}`;

  next({type: getActionType(type, START), ...rest});

  let promise;

  switch (true) {

    case Boolean(type.includes(GET) && token):
      promise = axios.get(apiEndpoit, {
        headers: {'cookie': `token=${token}`},
        ...apiConfig
      });
      break;

    case type.includes(GET):
      promise = axios.get(apiEndpoit, apiConfig);
      break;

    case type.includes(CREATE):
      promise = axios.post(apiEndpoit, get(action, 'payload.data'), apiConfig);
      break;

    case type.includes(UPDATE):
      promise = axios.put(apiEndpoit, get(action, 'payload.data'), apiConfig);
      break;

    case type.includes(DELETE):
      promise = axios.delete(apiEndpoit, apiConfig);
      break;

  }

  return promise
    .then(res => next({type: getActionType(type, SUCCESS), res, ...rest}))
    .catch(err => {

      if (get(err, 'response.status') === 403) {
        next({type: getActionType(SESSION_EXPIRED)});
      }

      next({type: getActionType(type, FAIL), err: err.response, ...rest});
    });

};
