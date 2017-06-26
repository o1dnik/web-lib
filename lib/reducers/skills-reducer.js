import _flatten from 'lodash/flatten';
import _unionBy from 'lodash/unionBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { GET, START, SUCCESS, FAIL, SKILLS, JOBS_BY_COMPANY_ID, JOB, ME, BACKGROUND } from '../constants';

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
    case getActionType(SKILLS, GET, START):
      {
        return _extends({}, state, { loading: true });
      }

    case getActionType(SKILLS, GET, SUCCESS):
      {
        var _res$data = res.data,
            results = _res$data.results,
            count = _res$data.count;


        return _extends({}, state, {
          entities: _unionBy(state.entities, results, 'id'),
          count: count,
          loading: false
        });
      }

    case getActionType(SKILLS, GET, FAIL):
      {
        return _extends({}, state, { loading: false });
      }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS):
      {
        var _results = _flatten(res.data.results.map(function (r) {
          return r.skills;
        }));
        return _extends({}, state, {
          entities: _unionBy(state.entities, _results, 'id')
        });
      }

    case getActionType(JOB, GET, SUCCESS):
      {
        var skills = res.data.skills;

        return _extends({}, state, {
          entities: _unionBy(state.entities, skills, 'id')
        });
      }

    case getActionType(ME, GET, SUCCESS):
      {
        var _skills = res.data.skills;

        return _extends({}, state, {
          entities: _skills ? _unionBy(state.entities, _skills, 'id') : state.entities
        });
      }

    case getActionType(ME, BACKGROUND, GET, SUCCESS):
      {
        var _skills2 = res.data.skills;

        return _extends({}, state, {
          entities: _skills2 ? _unionBy(state.entities, _skills2, 'id') : state.entities
        });
      }
  }

  return state;
});