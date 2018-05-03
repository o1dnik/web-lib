import { REDIRECT } from "../constants"
import { getActionType } from "../helpers/utils"

export function redirectTo(path = "/", delay) {
  return {
    type: getActionType(REDIRECT),
    payload: { path, delay },
  }
}
