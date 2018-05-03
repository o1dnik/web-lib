import { LANGUAGES, GET } from "../constants"
import { getActionType } from "../helpers/utils"
import qs from "qs"

export function getLanguages(search = "", limit = 100, offset = 0) {
  return {
    type: getActionType(LANGUAGES, GET),
    endpoint: `/languages/?${qs.stringify({ limit, offset, search })}`,
    apiV: "v2",
  }
}
