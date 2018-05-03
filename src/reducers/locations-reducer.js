import {
  GET,
  START,
  COMPANY,
  SUCCESS,
  FAIL,
  LOCATIONS,
  JOB,
  JOBS_BY_COMPANY_ID,
  ME,
  BACKGROUND,
} from "../constants"

import { unionBy, get } from "lodash"
import { getActionType } from "../helpers/utils"

const defaultState = {
  loading: false,
  count: null,
  entities: [],
}

export default (state = defaultState, action) => {
  const { type, res } = action

  switch (type) {
    case getActionType(LOCATIONS, GET, START): {
      return { ...state, loading: true }
    }

    case getActionType(LOCATIONS, GET, SUCCESS): {
      const { results, count } = res.data
      return {
        ...state,
        entities: unionBy(state.entities, results, "id"),
        count,
        loading: false,
      }
    }

    case getActionType(LOCATIONS, GET, FAIL): {
      return { ...state, loading: false }
    }

    case getActionType(COMPANY, GET, SUCCESS): {
      const { city } = res.data
      if (!city) {
        return state
      }
      return {
        ...state,
        entities: unionBy(state.entities, [city], "id"),
      }
    }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS): {
      const results = res.data.results.map(r => r.city)
      return {
        ...state,
        entities: unionBy(state.entities, results, "id"),
      }
    }

    case getActionType(JOB, GET, SUCCESS): {
      const { city } = res.data
      return {
        ...state,
        entities: unionBy(state.entities, [city], "id"),
      }
    }

    case getActionType(ME, GET, SUCCESS): {
      const locations = get(res, "data.locations")

      if (locations && locations.length > 0) {
        return {
          ...state,
          entities: unionBy(state.entities, locations, "id"),
        }
      }

      return state
    }

    case getActionType(ME, BACKGROUND, GET, SUCCESS): {
      const locations = get(res, "data.locations")

      if (locations && locations.length > 0) {
        return {
          ...state,
          entities: unionBy(state.entities, locations, "id"),
        }
      }

      return state
    }

    default:
      return state
  }
}
