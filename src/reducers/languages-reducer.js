import {
  GET,
  START,
  SUCCESS,
  FAIL,
  JOB,
  ME,
  LANGUAGES,
  JOBS_BY_COMPANY_ID,
  BACKGROUND
} from '../constants'

import { DEFAULT_LANGS } from '../default-options'

import { getActionType } from '../helpers/utils'

import { flatten, unionBy } from 'lodash'

const defaultState = {
  loading: false,
  count: null,
  entities: DEFAULT_LANGS
}

export default (state = defaultState, action) => {
  const {type, res} = action

  switch (type) {
    case getActionType(LANGUAGES, GET, START): {
      return {...state, loading: true}
    }

    case getActionType(LANGUAGES, GET, SUCCESS): {
      const {results, count} = res.data
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id'),
        count,
        loading: false
      }
    }

    case getActionType(LANGUAGES, GET, FAIL): {
      return {...state, loading: false}
    }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS): {
      const results = flatten(res.data.results.map(r => r.languages))
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id')
      }
    }

    case getActionType(JOB, GET, SUCCESS): {
      const {languages} = res.data
      return {
        ...state,
        entities: unionBy(state.entities, languages, 'id')
      }
    }

    case getActionType(ME, GET, SUCCESS): {
      const {languages} = res.data
      return {
        ...state,
        entities: (languages
          ? unionBy(state.entities, languages, 'id')
          : state.entities)
      }
    }

    case getActionType(ME, BACKGROUND, GET, SUCCESS): {
      const {languages} = res.data
      return {
        ...state,
        entities: (languages
          ? unionBy(state.entities, languages, 'id')
          : state.entities)
      }
    }
  }

  return state
}
