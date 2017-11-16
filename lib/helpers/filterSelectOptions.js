"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSelectOptionOnlyWithValue = filterSelectOptionOnlyWithValue;
function filterSelectOptionOnlyWithValue(option, filter) {
  if (filter && option && option.label) {
    return option.label.toLowerCase().startsWith(filter.toLowerCase());
  }

  return false;
}