'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOldValue = getOldValue;
// import isEmpty from 'lodash/isEmpty';

function getOldValue(props) {
  var value = props.value,
      input = props.input;


  if (value || value === '' || value === 0 ||
  // !isEmpty(value) ||  // useful ?
  value === false) {
    return value;
  }

  return input.value || '';
}