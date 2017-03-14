import isEmpty from 'lodash/isEmpty';

export function getOldValue(props) {
  const {value, input} = props;
  let oldValue = {};

  if (!isEmpty(input.value) || typeof input.value === 'string') {
    return oldValue = input.value;
  }

  if (!isEmpty(value) || typeof value === 'string') {
    return oldValue = value;
  }

  return oldValue;
}
