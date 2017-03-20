'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _unionBy = require('lodash/unionBy');

var _unionBy2 = _interopRequireDefault(_unionBy);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  loading: false,
  count: null,
  entities: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      res = action.res;


  switch (type) {

    case _constants.LOCATIONS + _constants.GET + _constants.START:
      {
        return _extends({}, state, { loading: true });
      }

    case _constants.LOCATIONS + _constants.GET + _constants.SUCCESS:
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

    case _constants.LOCATIONS + _constants.GET + _constants.FAIL:
      {
        return _extends({}, state, { loading: false });
      }

    case _constants.COMPANY + _constants.GET + _constants.SUCCESS:
      {
        var city = res.data.city;

        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, [city], 'id')
        });
      }

    case _constants.JOBS_BY_COMPANY_ID + _constants.GET + _constants.SUCCESS:
      {
        var _results = res.data.results.map(function (r) {
          return r.city;
        });
        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, _results, 'id')
        });
      }

    case _constants.JOB + _constants.GET + _constants.SUCCESS:
      {
        var _city = res.data.city;

        return _extends({}, state, {
          entities: (0, _unionBy2.default)(state.entities, [_city], 'id')
        });
      }

    case _constants.ME + _constants.GET + _constants.SUCCESS:
      {
        var relocations = (0, _get2.default)(res, 'data.relocations');

        if (relocations && relocations.length > 0) {
          return _extends({}, state, {
            entities: (0, _unionBy2.default)(state.entities, relocations, 'id')
          });
        }

        return state;
      }

  }

  return state;
};

module.exports = exports['default'];