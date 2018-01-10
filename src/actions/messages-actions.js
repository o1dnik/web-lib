import { MESSAGES, MESSAGE, GET, CREATE, SET, FILTER } from "../constants"

import { getActionType, pageToOffset } from "../helpers/utils"
import qs from "qs"

export function getMessagesList(threadId, limit = 10, page = 1) {
  return {
    type: getActionType(MESSAGES, GET),
    endpoint: `/threads/${threadId}/messages/?${qs.stringify({
      limit,
      offset: pageToOffset(page, limit)
    })}`,
    payload: { threadId, limit, page },
    tracking: {
      success: {
        event: "getMessagesList",
        payload: { id: threadId },
        responseFields: ["results"]
      }
    },
    apiV: "v2"
  }
}

export function createMessage(threadId, message) {
  return {
    type: getActionType(MESSAGE, CREATE),
    payload: { threadId, message, data: { text: message } },
    tracking: {
      success: {
        event: "createMessage",
        payload: {
          id: threadId
        }
      }
    },
    endpoint: `/threads/${threadId}/messages/`,
    apiV: "v2"
  }
}

export function setMessagesFilter(filter = {}) {
  filter = { page: 1, limit: 10, ...filter }
  return {
    type: getActionType(MESSAGES, FILTER, SET),
    payload: { filter }
  }
}
