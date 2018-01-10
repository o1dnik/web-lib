import { NOTIFICATION, SHOW, HIDE } from "../constants"
import { unionBy } from "lodash"
import { getActionType } from "../helpers/utils"

const defaultState = {
  entities: []
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case getActionType(NOTIFICATION, SHOW): {
      return {
        ...state,
        entities: unionBy(state.entities, [payload.notification], "key")
      }
    }

    case getActionType(NOTIFICATION, HIDE):
      return {
        ...state,
        entities: state.entities.filter(n => n.key !== payload.notification.key)
      }

    default:
      return state
  }
}
