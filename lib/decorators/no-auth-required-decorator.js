import _isEmpty from 'lodash/isEmpty';
import _omit from 'lodash/omit';
import _defaultTo from 'lodash/defaultTo';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import qs from 'qs';


var NoAuthRequired = function NoAuthRequired(_ref) {
  var component = _ref.component,
      isLogged = _ref.isLogged,
      rest = _objectWithoutProperties(_ref, ['component', 'isLogged']);

  var query = qs.parse(_get(rest, 'location.search', '?redirectTo=/').substring(1));

  var redirectTo = {
    pathname: _defaultTo(query.redirectTo, '/')
  };

  var searchQueryObject = _omit(query, 'redirectTo');

  if (!_isEmpty(searchQueryObject)) {
    redirectTo.search = '?' + qs.stringify(searchQueryObject);
  }

  return React.createElement(Route, _extends({}, rest, { render: function render(props) {
      if (isLogged) {
        return React.createElement(Redirect, { to: redirectTo });
      }

      return React.createElement(component, _extends({}, props, {
        renderLoader: rest.renderLoader
      }));
    } }));
};

export default NoAuthRequired;
module.exports = exports['default'];