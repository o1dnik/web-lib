import { LOCATIONS, GET } from '../constants'
import { getActionType } from '../helpers/utils'
import qs from 'qs'

export function getLocations (search = '', limit = 100, offset = 0) {
  return {
    type: getActionType(LOCATIONS, GET),
    endpoint: `/cities/?${qs.stringify({limit, offset, search})}`,
    apiV: 'v2'
  }
}
