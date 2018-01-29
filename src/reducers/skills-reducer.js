import {
  GET,
  START,
  SUCCESS,
  FAIL,
  SKILLS,
  JOBS_BY_COMPANY_ID,
  JOB,
  ME,
  BACKGROUND,
  SUGGESTED
} from "../constants"
import { unionBy, flatten } from "lodash"
import { getActionType } from "../helpers/utils"

const defaultState = {
  loading: false,
  count: null,
  entities: []
}

export default (state = defaultState, action) => {
  const { type, res } = action

  switch (type) {
    case getActionType(SKILLS, GET, START): {
      return { ...state, loading: true }
    }

    case getActionType(SUGGESTED, SKILLS, GET, SUCCESS):
    case getActionType(SKILLS, GET, SUCCESS): {
      const { results, count } = res.data

      return {
        ...state,
        entities: unionBy(state.entities, results, "id"),
        count,
        loading: false
      }
    }

    case getActionType(SKILLS, GET, FAIL): {
      return { ...state, loading: false }
    }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS): {
      const results = flatten(res.data.results.map(r => r.skills))
      return {
        ...state,
        entities: unionBy(state.entities, results, "id")
      }
    }

    case getActionType(JOB, GET, SUCCESS): {
      const { skills } = res.data
      return {
        ...state,
        entities: unionBy(state.entities, skills, "id")
      }
    }

    case getActionType(ME, GET, SUCCESS): {
      const { skills } = res.data
      return {
        ...state,
        entities: skills
          ? unionBy(state.entities, skills, "id")
          : state.entities
      }
    }

    case getActionType(ME, BACKGROUND, GET, SUCCESS): {
      const { skills } = res.data
      return {
        ...state,
        entities: skills
          ? unionBy(state.entities, skills, "id")
          : state.entities
      }
    }

    default:
      return state
  }
}
