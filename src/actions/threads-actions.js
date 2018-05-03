import { THREADS, THREAD, GET, CREATE, SET, FILTER } from "../constants"

import { getActionType, pageToOffset } from "../helpers/utils"
import qs from "qs"

export function getThreadList(opts = {}) {
  const {
    jobId,
    candidateId,
    limit,
    page,
    ordering,
    appendToList,
    showLoader,
  } = {
    jobId: null,
    candidateId: null,
    limit: 10,
    page: 1,
    ordering: "last_message_timestamp",
    appendToList: true,
    showLoader: true,
    ...opts,
  }

  return {
    type: getActionType(THREADS, GET),
    endpoint: `/threads/?${qs.stringify({
      limit,
      offset: pageToOffset(page, limit),
      ordering,
      job: jobId,
      candidate: candidateId,
    })}`,
    payload: {
      showLoader,
      jobId,
      candidateId,
      limit,
      page,
      ordering,
      appendToList,
    },
    tracking: {
      success: {
        event: "getThreadList",
        responseFields: ["results"],
      },
    },
    apiV: "v2",
    alert: null,
  }
}

export function createThread(message, jobId, candidateId) {
  return {
    type: getActionType(THREAD, CREATE),
    endpoint: "/threads/",
    payload: {
      message,
      jobId,
      candidateId,
      data: { message, job_id: jobId, candidate_id: candidateId },
    },
    tracking: {
      success: {
        event: "createMessage",
        responseFields: ["id"],
      },
    },
    apiV: "v2",
  }
}

export function setThreadsFilter(filter = {}) {
  filter = { page: 1, limit: 10, ...filter }
  return {
    type: getActionType(THREADS, FILTER, SET),
    payload: { filter },
  }
}
