"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = (0, _reactIntl.defineMessages)({
  defaultError: { id: "app.error.code.default_error" },
  serverError: { id: "app.error.code.server_error" },
  networkError: { id: "app.error.code.network_error" },
  accountAlreadyConfirmed: { id: "app.error.code.account_already_confirmed" },
  invalid: { id: "app.error.code.invalid" }, // invalida data as well
  invalidData: { id: "app.error.code.invalid_data" }, // v1
  invalidFile: { id: "app.error.code.invalid_file" },
  invalidToken: { id: "app.error.code.invalid_token" },
  tokenInvalidText: { id: "app.error.code.token_invalid.text" },
  tokenInvalidLink: { id: "app.error.code.token_invalid.link" },
  emailNotFound: { id: "app.error.code.email_not_found" },
  emailNotUniq: { id: "app.error.code.email_not_unique" },
  emailPermissionMissing: { id: "app.error.code.email_permission_missing" },
  accountNotConfirmed: { id: "app.error.code.account_not_confirmed" },
  accountInactiveText: { id: "app.error.code.account_inactive.text" },
  accountInactiveLink: { id: "app.error.code.account_inactive.link" },
  wrongCredentialsText: { id: "app.error.code.wrong_credentials.text" },
  wrongCredentialsLink: { id: "app.error.code.wrong_credentials.link" },
  authFail: { id: "app.error.code.auth_failed" },
  accountExists: { id: "app.error.code.account_exists" },
  wrongFormat: { id: "app.error.code.wrong_format" },
  socialAccountExists: { id: "app.error.code.social_account_exists" },
  notConfirmedText: { id: "app.error.code.not_confirmed.text" },
  notConfirmedLink: { id: "app.error.code.not_confirmed.link" },
  candidateInactive: { id: "app.error.code.candidate_inactive" },
  candidateNotFound: { id: "app.error.code.candidate_not_found" },
  notCompleted: { id: "app.error.code.not_completed" },
  accountDeleted: { id: "app.error.code.account_deleted" },
  jobNotFound: { id: "app.error.code.job_not_found" },
  jobInactive: { id: "app.error.code.job_inactive" },
  wrongPassword: { id: "app.error.code.wrong_password" },
  authenticationFail: { id: "app.error.code.authentication_failed" },
  authorizationFail: { id: "app.error.code.authorization_failed" },
  userLoginCancel: { id: "app.error.code.user_cancelled_login" },
  accesDenied: { id: "app.error.code.access_denied" }
});

var serverErrorsMap = {
  default_error: messages.defaultError,
  unknown_code: messages.defaultError,
  invalid_request: messages.defaultError,
  bad_request: messages.defaultError,
  server_error: messages.serverError,
  network_error: messages.networkError,
  account_already_confirmed: messages.accountAlreadyConfirmed,
  wrong_credentials: function wrong_credentials(action) {
    return _react2.default.createElement(_reactIntl.FormattedMessage, _extends({}, messages.wrongCredentialsText, {
      values: {
        link: _react2.default.createElement(
          _reactIntl.FormattedMessage,
          messages.wrongCredentialsLink,
          function (txt) {
            return _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: "u",
                to: {
                  pathname: "/password-recovery",
                  state: { email: action.email }
                }
              },
              txt
            );
          }
        )
      }
    }));
  },
  invalid: messages.invalid,
  invalid_data: messages.invalidData,
  invalid_file: messages.invalidFile,
  invalid_token: messages.invalidToken, // JWT fails
  // email confirmation token fails
  token_invalid: _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(_reactIntl.FormattedMessage, messages.tokenInvalidText),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/resend" },
      "\xA0",
      _react2.default.createElement(_reactIntl.FormattedMessage, messages.tokenInvalidLink)
    )
  ),
  email_not_found: messages.emailNotFound,
  email_not_unique: messages.emailNotUniq,
  email_permission_missing: messages.emailPermissionMissing,
  account_not_confirmed: messages.accountNotConfirmed,
  account_inactive: _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(_reactIntl.FormattedMessage, messages.accountInactiveText),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/resend" },
      "\xA0",
      _react2.default.createElement(_reactIntl.FormattedMessage, messages.accountInactiveLink)
    )
  ),
  auth_failed: messages.authFail,
  account_exists: messages.accountExists,
  wrong_format: messages.wrongFormat,
  social_account_exists: messages.socialAccountExists,
  not_confirmed: _react2.default.createElement(_reactIntl.FormattedMessage, _extends({}, messages.notConfirmedText, {
    values: {
      link: _react2.default.createElement(
        _reactIntl.FormattedMessage,
        messages.notConfirmedLink,
        function (txt) {
          return _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/resend" },
            txt
          );
        }
      )
    }
  })),
  candidate_inactive: messages.candidateInactive,
  candidate_not_found: messages.candidateNotFound,
  not_completed: messages.notCompleted,
  account_deleted: messages.accountDeleted,
  job_not_found: messages.jobNotFound,
  job_inactive: messages.jobInactive,
  wrong_password: messages.wrongPassword,
  authentication_failed: messages.authenticationFail,
  authorization_failed: messages.authorizationFail,
  user_cancelled_login: messages.userLoginCancel,
  user_cancelled_authorize: messages.userLoginCancel,
  access_denied: messages.accesDenied,
  not_found: messages.defaultError
};

exports.default = serverErrorsMap;
module.exports = exports["default"];