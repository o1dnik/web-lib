var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { MESSAGES, MESSAGE, GET, CREATE, SET, FILTER } from '../constants';

import { getActionType, pageToOffset } from '../helpers/utils';
import qs from 'qs';

export function getMessagesList(threadId) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return {
    type: getActionType(MESSAGES, GET),
    endpoint: '/threads/' + threadId + '/messages/?' + qs.stringify({
      limit: limit,
      offset: pageToOffset(page, limit)
    }),
    payload: { threadId: threadId, limit: limit, page: page },
    apiV: 'v2'
  };
}

export function createMessage(threadId, message) {
  return {
    type: getActionType(MESSAGE, CREATE),
    payload: { threadId: threadId, message: message, data: { text: message } },
    tracking: {
      success: {
        event: 'createMessage',
        payload: {
          id: threadId
        }
      }
    },
    endpoint: '/threads/' + threadId + '/messages/',
    apiV: 'v2'
  };
}

export function setMessagesFilter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  filter = _extends({ page: 1, limit: 10 }, filter);
  return {
    type: getActionType(MESSAGES, FILTER, SET),
    payload: { filter: filter }
  };
}