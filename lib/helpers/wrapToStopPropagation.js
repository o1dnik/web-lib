export function wrapToStopPropagation(fn) {
  return function (e) {
    if (e) e.stopPropagation();
    fn(e);
  };
}