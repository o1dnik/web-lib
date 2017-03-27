'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _defaultOptions = require('../default-options');

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _unionBy = require('lodash/unionBy');

var _unionBy2 = _interopRequireDefault(_unionBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  loading: false,
  count: null,
  entities: _defaultOptions.DEFAULT_LANGS
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      res = action.res;


  switch (type) {

    case _constants.LANGUAGES + _constants.GET + _constants.START:
      {
        return _extends({}, state, { loading: true });
      }

    case _constants.LANGUAGES + _constants.GET + _constants.SUCCESS:
      {
        var _res$data = res.data,
            results = _res$data.results,
            count = _res$data.count;

        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, results, 'id'),
          count: count,
          loading: false
        });
      }

    case _constants.LANGUAGES + _constants.GET + _constants.FAIL:
      {
        return _extends({}, state, { loading: false });
      }

    case _constants.JOBS_BY_COMPANY_ID + _constants.GET + _constants.SUCCESS:
      {
        var _results = (0, _flatten2.default)(res.data.results.map(function (r) {
          return r.languages;
        }));
        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, _results, 'id')
        });
      }

    case _constants.JOB + _constants.GET + _constants.SUCCESS:
      {
        var languages = res.data.languages;

        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, languages, 'id')
        });
      }

  }

  return state;
};

module.exports = exports['default'];