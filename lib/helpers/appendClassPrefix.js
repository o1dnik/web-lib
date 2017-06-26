export function appendClassPrefix(prefix) {
  return function (className) {
    return prefix + "-" + className;
  };
}