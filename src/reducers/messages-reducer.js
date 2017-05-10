import {
  GET,
  CREATE,
  START,
  SUCCESS,
  FAIL,
  NONE,
  MESSAGES,
  MESSAGE,
  LOADING,
  LOGOUT,
  SESSION_EXPIRED,
  SET,
  THREAD,
  FILTER
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

  [getActionType(MESSAGES, GET, START)]: (state) => ({
    ...state,
    loading: LOADING
  }),

  [getActionType(MESSAGES, GET, SUCCESS)]: (state, action) => {
    const messages = get(action, 'res.data.results', [])

    return {
      ...state,
      filter: {
        ...state.filter,
        limit: action.payload.limit,
        page: action.payload.page
      },
      count: get(action, 'res.data.count'),
      result: messages.map(t => t.id),
      entities: {
        ...state.entities,
        ...arrayToObject(messages, 'id')
      },
      loading: SUCCESS
    }
  },

  [getActionType(MESSAGES, GET, FAIL)]: (state) => ({...state, loading: FAIL}),

  [getActionType(MESSAGE, CREATE, START)]: (state) => ({
    ...state,
    creating: LOADING
  }),

  [getActionType(MESSAGE, CREATE, SUCCESS)]: (state, action) => {
    const message = get(action, 'res.data')
    const result = state.filter.page === 1
      ? [message.id, ...state.result]
      : state.result

    return {
      ...state,
      count: state.count + 1,
      result,
      entities: {
        ...state.entities,
        [message.id]: message
      },
      creating: SUCCESS
    }
  },

  [getActionType(MESSAGE, CREATE, FAIL)]: (state) => ({
    ...state,
    creating: FAIL
  }),

  [getActionType(MESSAGES, FILTER, SET)]: (state, action) => ({
    ...state,
    filter: {...get(action, 'payload.filter', state.filter)}
  }),

  [getActionType(THREAD, CREATE, SUCCESS)]: (state, action) => {
    return {
      ...state,
      result: [],
      count: null
    }
  },

  [getActionType(LOGOUT)]: () => ({...defaultState}),

  [getActionType(SESSION_EXPIRED)]: () => ({...defaultState})

}

export default createReducer(actionHandlers, defaultState)
