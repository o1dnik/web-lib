// import isEmpty from 'lodash/isEmpty';

export function getOldValue (props) {
  const {value, input} = props

  if (
    value ||
    value === '' ||
    value === 0 ||
    // !isEmpty(value) ||  // useful ?
    value === false
  ) {
    return value
  }

  return input.value || ''
}
