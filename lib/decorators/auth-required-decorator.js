import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Route, Redirect } from 'react-router-dom';


var AuthRequired = function AuthRequired(_ref) {
  var component = _ref.component,
      isLogged = _ref.isLogged,
      profileComplete = _ref.profileComplete,
      rest = _objectWithoutProperties(_ref, ['component', 'isLogged', 'profileComplete']);

  return React.createElement(Route, _extends({}, rest, { render: function render(props) {
      if (profileComplete) {
        return React.createElement(Redirect, { to: { pathname: '/' } });
      }

      if (isLogged) {
        return React.createElement(component, _extends({}, props, {
          renderLoader: rest.renderLoader
        }));
      }

      var redirectTo = _get(rest, 'location.pathname', '/');

      var fullSearch = '?redirectTo=' + redirectTo;

      var search = _get(rest, 'location.search', '?').substring(1);

      if (search) {
        fullSearch = fullSearch + '&' + search;
      }

      return React.createElement(Redirect, { to: {
          pathname: '/login',
          search: fullSearch
        } });
    } }));
};

export default AuthRequired;
module.exports = exports['default'];