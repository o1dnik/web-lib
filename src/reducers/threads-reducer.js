import {
  GET,
  CREATE,
  START,
  SUCCESS,
  FAIL,
  NONE,
  THREADS,
  THREAD,
  LOADING,
  LOGOUT,
  SESSION_EXPIRED,
  SET,
  FILTER,
  MESSAGES
} from '../constants'

import { get } from 'lodash'

import {
  createReducer,
  getActionType,
  arrayToObject
} from '../helpers/utils'

export const defaultState = {
  loading: NONE,
  creating: NONE,

  filter: {
    limit: 10,
    page: 1
  },

  count: null,
  result: [],
  entities: {}
}

export const actionHandlers = {

  [getActionType(THREADS, GET, START)]: (state) => ({
    ...state,
    loading: LOADING
  }),

  [getActionType(THREADS, GET, SUCCESS)]: (state, action) => {
    const threads = get(action, 'res.data.results', [])

    return {
      ...state,
      filter: {
        ...state.filter,
        limit: action.payload.limit,
        page: action.payload.page
      },
      count: action.payload.appendToList
        ? get(action, 'res.data.count')
        : state.count,
      result: action.payload.appendToList
        ? threads.map(t => t.id)
        : [...state.result],
      entities: {
        ...state.entities,
        ...arrayToObject(threads, 'id')
      },
      loading: SUCCESS
    }
  },

  [getActionType(THREADS, GET, FAIL)]: (state) => ({...state, loading: FAIL}),

  [getActionType(MESSAGES, GET, SUCCESS)]: (state, action) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [action.payload.threadId]: {
          ...state.entities[action.payload.threadId],
          unread_count: 0
        }
      }
    }
  },

  [getActionType(THREAD, CREATE, START)]: (state) => ({
    ...state,
    creating: LOADING
  }),

  [getActionType(THREAD, CREATE, SUCCESS)]: (state, action) => {
    const thread = get(action, 'res.data')

    return {
      ...state,
      entities: {
        ...state.entities,
        [thread.id]: thread
      },
      result: [thread, ...state.result],
      count: state.count ? state.count + 1 : 1,
      creating: SUCCESS
    }
  },

  [getActionType(THREAD, CREATE, FAIL)]: (state) => ({
    ...state,
    creating: FAIL
  }),

  [getActionType(THREADS, FILTER, SET)]: (state, action) => ({
    ...state,
    filter: {...get(action, 'payload.filter', state.filter)}
  }),

  [getActionType(LOGOUT)]: () => ({...defaultState}),

  [getActionType(SESSION_EXPIRED)]: () => ({...defaultState})

}

export default createReducer(actionHandlers, defaultState)
