'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ProfileRequired = function ProfileRequired(_ref) {
  var component = _ref.component,
      isLogged = _ref.isLogged,
      profileComplete = _ref.profileComplete,
      rest = _objectWithoutProperties(_ref, ['component', 'isLogged', 'profileComplete']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
      if (!isLogged) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: {
            pathname: '/login',
            search: '?redirectTo=' + ((0, _get3.default)(rest, 'location.pathname') || '/')
          } });
      }

      if (!profileComplete) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/registration' } });
      }

      return _react2.default.createElement(component, _extends({}, props, {
        renderLoader: rest.renderLoader
      }));
    } }));
};

exports.default = ProfileRequired;
module.exports = exports['default'];