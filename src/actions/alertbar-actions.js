import { ALERT, SHOW, HIDE } from "../constants"
import { getActionType } from "../helpers/utils"

export function showAlertBar(notification) {
  return {
    type: getActionType(ALERT, SHOW),
    payload: { notification },
  }
}

export function hideAlertBar() {
  return {
    type: getActionType(ALERT, HIDE),
  }
}
