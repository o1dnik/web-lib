"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSelectOptionsOnlyWithValue = filterSelectOptionsOnlyWithValue;
function filterSelectOptionsOnlyWithValue(option, filter) {
  if (filter && option && option.label) {
    return option.label.toLowerCase().startsWith(filter.toLowerCase());
  }

  return false;
}