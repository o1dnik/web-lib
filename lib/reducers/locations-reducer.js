import _get from 'lodash/get';
import _unionBy from 'lodash/unionBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { GET, START, COMPANY, SUCCESS, FAIL, LOCATIONS, JOB, JOBS_BY_COMPANY_ID, ME, BACKGROUND } from '../constants';

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
    case getActionType(LOCATIONS, GET, START):
      {
        return _extends({}, state, { loading: true });
      }

    case getActionType(LOCATIONS, GET, SUCCESS):
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

    case getActionType(LOCATIONS, GET, FAIL):
      {
        return _extends({}, state, { loading: false });
      }

    case getActionType(COMPANY, GET, SUCCESS):
      {
        var city = res.data.city;

        if (!city) {
          return state;
        }
        return _extends({}, state, {
          entities: _unionBy(state.entities, [city], 'id')
        });
      }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS):
      {
        var _results = res.data.results.map(function (r) {
          return r.city;
        });
        return _extends({}, state, {
          entities: _unionBy(state.entities, _results, 'id')
        });
      }

    case getActionType(JOB, GET, SUCCESS):
      {
        var _city = res.data.city;

        return _extends({}, state, {
          entities: _unionBy(state.entities, [_city], 'id')
        });
      }

    case getActionType(ME, GET, SUCCESS):
      {
        var relocations = _get(res, 'data.relocations');

        if (relocations && relocations.length > 0) {
          return _extends({}, state, {
            entities: _unionBy(state.entities, relocations, 'id')
          });
        }

        return state;
      }

    case getActionType(ME, BACKGROUND, GET, SUCCESS):
      {
        var _relocations = _get(res, 'data.relocations');

        if (_relocations && _relocations.length > 0) {
          return _extends({}, state, {
            entities: _unionBy(state.entities, _relocations, 'id')
          });
        }

        return state;
      }
  }

  return state;
});