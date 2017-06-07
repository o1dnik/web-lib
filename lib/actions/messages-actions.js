'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getMessagesList = getMessagesList;
exports.createMessage = createMessage;
exports.setMessagesFilter = setMessagesFilter;

var _constants = require('../constants');

var _utils = require('../helpers/utils');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessagesList(threadId) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return {
    type: (0, _utils.getActionType)(_constants.MESSAGES, _constants.GET),
    endpoint: '/threads/' + threadId + '/messages/?' + _qs2.default.stringify({
      limit: limit,
      offset: (0, _utils.pageToOffset)(page, limit)
    }),
    payload: { threadId: threadId, limit: limit, page: page },
    apiV: 'v2'
  };
}

function createMessage(threadId, message) {
  return {
    type: (0, _utils.getActionType)(_constants.MESSAGE, _constants.CREATE),
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

function setMessagesFilter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  filter = _extends({ page: 1, limit: 10 }, filter);
  return {
    type: (0, _utils.getActionType)(_constants.MESSAGES, _constants.FILTER, _constants.SET),
    payload: { filter: filter }
  };
}