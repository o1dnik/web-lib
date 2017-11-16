'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSelectOptionOnlyWithValue = filterSelectOptionOnlyWithValue;
function filterSelectOptionOnlyWithValue() {
  var optionProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'label';

  return function (option, filter) {
    if (filter && option && option[optionProp]) {
      return option[optionProp].toLowerCase().startsWith(filter.toLowerCase());
    }

    return false;
  };
}