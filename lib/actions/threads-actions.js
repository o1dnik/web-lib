'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getThreadList = getThreadList;
exports.createThread = createThread;
exports.setThreadsFilter = setThreadsFilter;

var _constants = require('../constants');

var _utils = require('../helpers/utils');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getThreadList() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _jobId$candidateId$li = _extends({
    jobId: null,
    candidateId: null,
    limit: 10,
    page: 1,
    ordering: 'last_message_timestamp'
  }, opts),
      jobId = _jobId$candidateId$li.jobId,
      candidateId = _jobId$candidateId$li.candidateId,
      limit = _jobId$candidateId$li.limit,
      page = _jobId$candidateId$li.page,
      ordering = _jobId$candidateId$li.ordering;

  return {
    type: (0, _utils.getActionType)(_constants.THREADS, _constants.GET),
    endpoint: '/threads/?' + _qs2.default.stringify({
      limit: limit,
      offset: (0, _utils.pageToOffset)(page, limit),
      ordering: ordering,
      job: jobId,
      candidate: candidateId
    }),
    payload: { jobId: jobId, candidateId: candidateId, limit: limit, page: page, ordering: ordering },
    apiV: 'v2'
  };
}

function createThread(message, jobId, candidateId) {
  return {
    type: (0, _utils.getActionType)(_constants.THREAD, _constants.CREATE),
    endpoint: '/threads/',
    payload: {
      message: message,
      jobId: jobId,
      candidateId: candidateId,
      data: { message: message, job_id: jobId, candidate_id: candidateId }
    },
    apiV: 'v2'
  };
}

function setThreadsFilter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  filter = _extends({ page: 1, limit: 10 }, filter);
  return {
    type: (0, _utils.getActionType)(_constants.THREADS, _constants.FILTER, _constants.SET),
    payload: { filter: filter }
  };
}