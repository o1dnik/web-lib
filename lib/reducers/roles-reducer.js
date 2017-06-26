import _unionBy from 'lodash/unionBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { GET, START, SUCCESS, FAIL, ROLES } from '../constants';

import { getActionType } from '../helpers/utils';

var defaultState = {
  loading: false,
  count: null,
  entities: []
};

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      res = action.res;


  switch (type) {
    case getActionType(ROLES, GET, START):
      {
        return _extends({}, state, { loading: true });
      }

    case getActionType(ROLES, GET, SUCCESS):
      {
        var _res$data = res.data,
            results = _res$data.results,
            count = _res$data.count;

        return _extends({}, state, {
          entities: _unionBy(state.entities, results, 'name'),
          count: count,
          loading: false
        });
      }

    case getActionType(ROLES, GET, FAIL):
      {
        return _extends({}, state, { loading: false });
      }
  }

  return state;
});