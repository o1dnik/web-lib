import {intersection} from 'lodash'

export function checkConflictProps (props, warnProps) {
  const conflicts = intersection(Object.keys(props), warnProps)
  if (!conflicts || !conflicts.length) {
    return
  }
  console.warn(`Conflicts props in decorator, they will be overridden: ${conflicts}`)
}
