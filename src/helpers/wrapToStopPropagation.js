export function wrapToStopPropagation(fn) {
  return (e) => {
    if (e) e.stopPropagation();
    fn(e);
  };
}
