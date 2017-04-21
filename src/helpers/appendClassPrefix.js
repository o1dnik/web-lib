export function appendClassPrefix (prefix) {
  return (className) => {
    return `${prefix}-${className}`
  }
}
