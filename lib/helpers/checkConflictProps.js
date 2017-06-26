import _intersection from 'lodash/intersection';


export function checkConflictProps(props, warnProps) {
  var conflicts = _intersection(Object.keys(props), warnProps);
  if (!conflicts || !conflicts.length) {
    return;
  }
  console.warn('Conflicts props in decorator, they will be overridden: ' + conflicts);
}