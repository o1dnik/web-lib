import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import isLength from 'validator/lib/isLength';
import {isNil} from 'lodash';

export function required(val) {
  if (isNil(val) || val === '') {
    return 'Value is required.';
  }
  return null;
}

export function lengthValidator(val, opts) {
  opts = {min: 0, max: 30, ...opts};
  if (!isLength(val, opts)) {
    return `Field must be at less then ${opts.max} characters`;
  }
  return null;
}

export function requiredWysiwygDescription(val) {
  // default value of editor - '<p><br></p>' is empty and not valid for us
  if (
    isNil(val) ||
    val === '' ||
    val === '<p><br></p>'
  ) {
    return 'Value is required.';
  }

  const plainText = val.replace(/<(?:.|\n)*?>/gm, '')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/&nbsp;/gm, '')
    .trim();

  if (plainText && plainText.length < 250) {
    return 'Job description should be at least 250 characters';
  }

  return null;
}

export function arrayRequired(val) {
  if (isNil(val) || val === '' || !val.length) {
    return 'Value is required.';
  }
  return null;
}

export function validateJobRole(val) {
  if (isNil(val) || val === '') {
    return 'Value is required.';
  }

  if (val && !val.select) {
    return 'Value is required.';
  }

  if (val && !val.level) {
    return 'Value is required.';
  }

  return null;

}

export function validateJobLanguage(val) {
  if (isNil(val) || val === '') {
    return 'Value is required.';
  }

  if (val && !val.select) {
    return 'Value is required.';
  }

  if (val && !val.level) {
    return 'Value is required.';
  }

  return null;

}

export function email(val) {
  if (isNil(val) || val === '' || !isEmail(val)) {
    return 'Value should be a valid Email.';
  }
  return null;
}

export function urlValidator(val) {

  const validationOptions = {require_protocol: true};

  if (val === '') {
    return null;
  }

  if (isNil(val) || !isURL(val, validationOptions)) {
    return 'Value should be a valid URL.';
  }

  return null;
}

export function password(val, allValues) {
  if (isNil(val) || val === '' || val.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  if (
    allValues &&
    allValues.password &&
    (allValues.password2 || allValues.password2 === '')
  ) {
    const password2 = allValues.password2;
    if (password2.length >= 8) {
      if (allValues.password !== allValues.password2) {
        return 'Both passwords must have same value';
      }
    }
  }

  return null;
}

export function doubleSelectValidator(name, minLength) {
  return (id, allValues) => {
    const item = allValues[name].find(i => i.id === id);

    if (!item) return null;

    if (minLength && allValues[name].length < minLength) {
      if (isNil(item.id)) {
        return 'Value is required';
      }
    }

    if ((isNil(item.id)) && item.level === undefined) {
      return null;
    }

    if (!isNil(item.id) && item.level === undefined) {
      return null;
    }

    if (isNil(item.id)) {
      return 'Values is required';
    }

    return null;
  };
}

export function doubleSelectLevelValidator(name) {
  return (level, allValues) => {
    const item = allValues[name].find(i => i.level === level);

    if (!item) return null;

    if (isNil(item.level) && isNil(item.id)) {
      return null;
    }

    if (!isNil(item.level) && isNil(item.id)) {
      return null;
    }

    if (isNil(item.level)) {
      return 'Values is required';
    }

    return null;
  };
}
