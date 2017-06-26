import _unionBy from 'lodash/unionBy';
import _flatten from 'lodash/flatten';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { GET, START, SUCCESS, FAIL, JOB, ME, LANGUAGES, JOBS_BY_COMPANY_ID, BACKGROUND } from '../constants';

import { DEFAULT_LANGS } from '../default-options';

import { getActionType } from '../helpers/utils';

var defaultState = {
  loading: false,
  count: null,
  entities: DEFAULT_LANGS
};

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      res = action.res;


  switch (type) {
    case getActionType(LANGUAGES, GET, START):
      {
        return _extends({}, state, { loading: true });
      }

    case getActionType(LANGUAGES, GET, SUCCESS):
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

    case getActionType(LANGUAGES, GET, FAIL):
      {
        return _extends({}, state, { loading: false });
      }

    case getActionType(JOBS_BY_COMPANY_ID, GET, SUCCESS):
      {
        var _results = _flatten(res.data.results.map(function (r) {
          return r.languages;
        }));
        return _extends({}, state, {
          entities: _unionBy(state.entities, _results, 'id')
        });
      }

    case getActionType(JOB, GET, SUCCESS):
      {
        var languages = res.data.languages;

        return _extends({}, state, {
          entities: _unionBy(state.entities, languages, 'id')
        });
      }

    case getActionType(ME, GET, SUCCESS):
      {
        var _languages = res.data.languages;

        return _extends({}, state, {
          entities: _languages ? _unionBy(state.entities, _languages, 'id') : state.entities
        });
      }

    case getActionType(ME, BACKGROUND, GET, SUCCESS):
      {
        var _languages2 = res.data.languages;

        return _extends({}, state, {
          entities: _languages2 ? _unionBy(state.entities, _languages2, 'id') : state.entities
        });
      }
  }

  return state;
});