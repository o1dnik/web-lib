'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultTo2 = require('lodash/defaultTo');

var _defaultTo3 = _interopRequireDefault(_defaultTo2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NoAuthRequired = function NoAuthRequired(_ref) {
  var component = _ref.component,
      isLogged = _ref.isLogged,
      rest = _objectWithoutProperties(_ref, ['component', 'isLogged']);

  var query = _qs2.default.parse((0, _get3.default)(rest, 'location.search', '?redirectTo=/').substring(1));

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {

      if (isLogged) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: (0, _defaultTo3.default)(query.redirectTo, '/') } });
      }

      return _react2.default.createElement(component, _extends({}, props, {
        renderLoader: rest.renderLoader
      }));
    } }));
};

exports.default = NoAuthRequired;
module.exports = exports['default'];