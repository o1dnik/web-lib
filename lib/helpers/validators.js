"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require("lodash/isNil");

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.required = required;
exports.isTrue = isTrue;
exports.lengthValidator = lengthValidator;
exports.requiredWysiwygDescription = requiredWysiwygDescription;
exports.arrayRequired = arrayRequired;
exports.arrayMaxLengthValidator = arrayMaxLengthValidator;
exports.validateJobRole = validateJobRole;
exports.validateJobLanguage = validateJobLanguage;
exports.email = email;
exports.urlValidator = urlValidator;
exports.password = password;
exports.doubleSelectValidator = doubleSelectValidator;
exports.doubleSelectLevelValidator = doubleSelectLevelValidator;

var _isEmail = require("validator/lib/isEmail");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = require("validator/lib/isURL");

var _isURL2 = _interopRequireDefault(_isURL);

var _isLength = require("validator/lib/isLength");

var _isLength2 = _interopRequireDefault(_isLength);

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = (0, _reactIntl.defineMessages)({
  valueRequired: { id: "app.validators.value.required" },
  emailRequired: { id: "app.validators.email.required" },
  passwordLen: { id: "app.validators.password.length.min" },
  passwordEqual: { id: "app.validators.password.equal" },
  urlRequired: { id: "app.validators.url.required" },
  maxLen: { id: "app.validators.length.max" },
  maxJdLen: { id: "app.validators.jd.length.max" }
});

function required(val) {
  if ((0, _isNil3.default)(val) || val === "") {
    return _extends({}, messages.valueRequired);
  }
  return null;
}

function isTrue(val) {
  if (val !== true) {
    return _extends({}, messages.valueRequired);
  }
  return null;
}

function lengthValidator(val, opts) {
  opts = _extends({ min: 0, max: 30 }, opts);
  if (!(0, _isLength2.default)(val, opts)) {
    return _extends({}, messages.maxLen, { values: { max: opts.max } });
  }
  return null;
}

function requiredWysiwygDescription(val) {
  // default value of editor - '<p><br></p>' is empty and not valid for us
  if ((0, _isNil3.default)(val) || val === "" || val === "<p><br></p>") {
    return _extends({}, messages.valueRequired);
  }

  var plainText = val.replace(/<(?:.|\n)*?>/gm, "").replace(/(\r\n|\n|\r)/gm, "").replace(/&nbsp;/gm, "").trim();

  if (plainText && plainText.length < 250) {
    return _extends({}, messages.maxJdLen);
  }

  return null;
}

function arrayRequired(val) {
  if ((0, _isNil3.default)(val) || val === "" || !val.length) {
    return _extends({}, messages.valueRequired);
  }
  return null;
}

function arrayMaxLengthValidator(val, opts) {
  opts = _extends({ min: 0, max: 100 }, opts);

  if (arrayRequired(val)) {
    return arrayRequired(val);
  }

  if (val.length > opts.max) {
    return _extends({}, messages.maxLen, { values: { max: opts.max } });
  }

  return null;
}

function validateJobRole(val) {
  if ((0, _isNil3.default)(val) || val === "") {
    return _extends({}, messages.valueRequired);
  }

  if (val && !val.select) {
    return _extends({}, messages.valueRequired);
  }

  if (val && !val.level) {
    return _extends({}, messages.valueRequired);
  }

  return null;
}

function validateJobLanguage(val) {
  if ((0, _isNil3.default)(val) || val === "") {
    return _extends({}, messages.valueRequired);
  }

  if (val && !val.select) {
    return _extends({}, messages.valueRequired);
  }

  if (val && !val.level) {
    return _extends({}, messages.valueRequired);
  }

  return null;
}

function email(val) {
  if ((0, _isNil3.default)(val) || val === "" || !(0, _isEmail2.default)(val)) {
    return _extends({}, messages.emailRequired);
  }
  return null;
}

function urlValidator(val) {
  var validationOptions = { require_protocol: true };

  if (val === "") {
    return null;
  }

  if ((0, _isNil3.default)(val) || !(0, _isURL2.default)(val, validationOptions)) {
    return _extends({}, messages.urlRequired);
  }

  return null;
}

function password(val, allValues) {
  if ((0, _isNil3.default)(val) || val === "" || val.length < 8) {
    return _extends({}, messages.passwordLen);
  }

  if (allValues && allValues.password && (allValues.password2 || allValues.password2 === "")) {
    var password2 = allValues.password2;
    if (password2.length >= 8) {
      if (allValues.password !== allValues.password2) {
        return _extends({}, messages.passwordEqual);
      }
    }
  }

  return null;
}

function doubleSelectValidator(name, minLength) {
  return function (id, allValues) {
    var item = allValues[name].find(function (i) {
      return i.id === id;
    });

    if (!item) return null;

    if (minLength && allValues[name].length < minLength) {
      if ((0, _isNil3.default)(item.id)) {
        return _extends({}, messages.valueRequired);
      }
    }

    if ((0, _isNil3.default)(item.id) && item.level === undefined) {
      return null;
    }

    if (!(0, _isNil3.default)(item.id) && item.level === undefined) {
      return null;
    }

    if ((0, _isNil3.default)(item.id)) {
      return _extends({}, messages.valueRequired);
    }

    return null;
  };
}

function doubleSelectLevelValidator(name) {
  return function (level, allValues) {
    var item = allValues[name].find(function (i) {
      return i.level === level;
    });

    if (!item) return null;

    if ((0, _isNil3.default)(item.level) && (0, _isNil3.default)(item.id)) {
      return null;
    }

    if (!(0, _isNil3.default)(item.level) && (0, _isNil3.default)(item.id)) {
      return null;
    }

    if ((0, _isNil3.default)(item.level)) {
      return _extends({}, messages.valueRequired);
    }

    return null;
  };
}