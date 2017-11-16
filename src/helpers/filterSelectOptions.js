export function filterSelectOptionOnlyWithValue (option, filter) {
  if (filter && option && option.label) {
    return option.label.toLowerCase().startsWith(filter.toLowerCase())
  }

  return false
}
