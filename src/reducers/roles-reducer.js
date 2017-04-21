import {GET, START, SUCCESS, FAIL, ROLES} from '../constants'
import {unionBy} from 'lodash'
import {getActionType} from '../helpers/utils'

const defaultState = {
  loading: false,
  count: null,
  entities: []
}

export default (state = defaultState, action) => {
  const {type, res} = action

  switch (type) {
    case getActionType(ROLES, GET, START): {
      return {...state, loading: true}
    }

    case getActionType(ROLES, GET, SUCCESS): {
      const {results, count} = res.data
      return {
        ...state,
        entities: unionBy(state.entities, results, 'name'),
        count,
        loading: false
      }
    }

    case getActionType(ROLES, GET, FAIL): {
      return {...state, loading: false}
    }
  }

  return state
}
