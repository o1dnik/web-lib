import isEmail from 'validator/lib/isEmail'
import isURL from 'validator/lib/isURL'
import isLength from 'validator/lib/isLength'
import {isNil} from 'lodash'
import {defineMessages} from 'react-intl'

const messages = defineMessages({
  valueRequired: {id: 'app.validators.value.required'},
  emailRequired: {id: 'app.validators.email.required'},
  passwordLen: {id: 'app.validators.password.length.min'},
  passwordEqual: {id: 'app.validators.password.equal'},
  urlRequired: {id: 'app.validators.url.required'},
  maxLen: {id: 'app.validators.length.max'},
  maxJdLen: {id: 'app.validators.jd.length.max'}
})

export function required (val) {
  if (isNil(val) || val === '') {
    return messages.valueRequired.id
  }
  return null
}

export function lengthValidator (val, opts) {
  opts = {min: 0, max: 30, ...opts}
  if (!isLength(val, opts)) {
    return messages.maxLen.id
  }
  return null
}

export function requiredWysiwygDescription (val) {
  // default value of editor - '<p><br></p>' is empty and not valid for us
  if (
    isNil(val) ||
    val === '' ||
    val === '<p><br></p>'
  ) {
    return messages.valueRequired.id
  }

  const plainText = val.replace(/<(?:.|\n)*?>/gm, '')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/&nbsp;/gm, '')
    .trim()

  if (plainText && plainText.length < 250) {
    return messages.maxJdLen.id
  }

  return null
}

export function arrayRequired (val) {
  if (isNil(val) || val === '' || !val.length) {
    return messages.valueRequired.id
  }
  return null
}

export function validateJobRole (val) {
  if (isNil(val) || val === '') {
    return messages.valueRequired.id
  }

  if (val && !val.select) {
    return messages.valueRequired.id
  }

  if (val && !val.level) {
    return messages.valueRequired.id
  }

  return null
}

export function validateJobLanguage (val) {
  if (isNil(val) || val === '') {
    return messages.valueRequired.id
  }

  if (val && !val.select) {
    return messages.valueRequired.id
  }

  if (val && !val.level) {
    return messages.valueRequired.id
  }

  return null
}

export function email (val) {
  if (isNil(val) || val === '' || !isEmail(val)) {
    return messages.emailRequired.id
  }
  return null
}

export function urlValidator (val) {
  const validationOptions = {require_protocol: true}

  if (val === '') {
    return null
  }

  if (isNil(val) || !isURL(val, validationOptions)) {
    return messages.urlRequired.id
  }

  return null
}

export function password (val, allValues) {
  if (isNil(val) || val === '' || val.length < 8) {
    return messages.passwordLen.id
  }

  if (
    allValues &&
    allValues.password &&
    (allValues.password2 || allValues.password2 === '')
  ) {
    const password2 = allValues.password2
    if (password2.length >= 8) {
      if (allValues.password !== allValues.password2) {
        return messages.passwordEqual.id
      }
    }
  }

  return null
}

export function doubleSelectValidator (name, minLength) {
  return (id, allValues) => {
    const item = allValues[name].find(i => i.id === id)

    if (!item) return null

    if (minLength && allValues[name].length < minLength) {
      if (isNil(item.id)) {
        return messages.valueRequired.id
      }
    }

    if ((isNil(item.id)) && item.level === undefined) {
      return null
    }

    if (!isNil(item.id) && item.level === undefined) {
      return null
    }

    if (isNil(item.id)) {
      return messages.valueRequired.id
    }

    return null
  }
}

export function doubleSelectLevelValidator (name) {
  return (level, allValues) => {
    const item = allValues[name].find(i => i.level === level)

    if (!item) return null

    if (isNil(item.level) && isNil(item.id)) {
      return null
    }

    if (!isNil(item.level) && isNil(item.id)) {
      return null
    }

    if (isNil(item.level)) {
      return messages.valueRequired.id
    }

    return null
  }
}
