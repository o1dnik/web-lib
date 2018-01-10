export function filterSelectOptionOnlyWithValue(optionProp = "label") {
  return (option, filter) => {
    if (filter && option && option[optionProp]) {
      return option[optionProp].toLowerCase().startsWith(filter.toLowerCase())
    }

    return false
  }
}
