import { ROLES, GET } from "../constants"
import { getActionType } from "../helpers/utils"
import qs from "qs"

export function getRoles(search = "", limit = 100, offset = 0) {
  return {
    type: getActionType(ROLES, GET),
    endpoint: `/jobrolecategories/?${qs.stringify({ limit, offset, search })}`,
    apiV: "v2"
  }
}
