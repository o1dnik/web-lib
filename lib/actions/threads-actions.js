var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { THREADS, THREAD, GET, CREATE, SET, FILTER } from '../constants';

import { getActionType, pageToOffset } from '../helpers/utils';
import qs from 'qs';

export function getThreadList() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _jobId$candidateId$li = _extends({
    jobId: null,
    candidateId: null,
    limit: 10,
    page: 1,
    ordering: 'last_message_timestamp',
    appendToList: true
  }, opts),
      jobId = _jobId$candidateId$li.jobId,
      candidateId = _jobId$candidateId$li.candidateId,
      limit = _jobId$candidateId$li.limit,
      page = _jobId$candidateId$li.page,
      ordering = _jobId$candidateId$li.ordering,
      appendToList = _jobId$candidateId$li.appendToList;

  return {
    type: getActionType(THREADS, GET),
    endpoint: '/threads/?' + qs.stringify({
      limit: limit,
      offset: pageToOffset(page, limit),
      ordering: ordering,
      job: jobId,
      candidate: candidateId
    }),
    payload: { jobId: jobId, candidateId: candidateId, limit: limit, page: page, ordering: ordering, appendToList: appendToList },
    tracking: {
      success: {
        event: 'getThreadList',
        responseFields: ['results']
      }
    },
    apiV: 'v2',
    alert: null
  };
}

export function createThread(message, jobId, candidateId) {
  return {
    type: getActionType(THREAD, CREATE),
    endpoint: '/threads/',
    payload: {
      message: message,
      jobId: jobId,
      candidateId: candidateId,
      data: { message: message, job_id: jobId, candidate_id: candidateId }
    },
    tracking: {
      success: {
        event: 'createMessage',
        responseFields: ['id']
      }
    },
    apiV: 'v2'
  };
}

export function setThreadsFilter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  filter = _extends({ page: 1, limit: 10 }, filter);
  return {
    type: getActionType(THREADS, FILTER, SET),
    payload: { filter: filter }
  };
}