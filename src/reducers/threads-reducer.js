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
      count: get(action, 'res.data.count'),
      result: threads.map(t => t.id),
      entities: {
        ...state.entities,
        ...arrayToObject(threads, 'id')
      },
      loading: SUCCESS
    }
  },

  [getActionType(THREADS, GET, FAIL)]: (state) => ({...state, loading: FAIL}),

  [getActionType(THREAD, CREATE, START)]: (state) => ({
    ...state,
    creating: LOADING
  }),

  [getActionType(THREAD, CREATE, SUCCESS)]: (state, action) => {
    // TODO improve it according to api response, used only in company?
    return {
      ...state,
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
