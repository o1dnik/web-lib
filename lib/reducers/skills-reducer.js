"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatten2 = require("lodash/flatten");

var _flatten3 = _interopRequireDefault(_flatten2);

var _unionBy2 = require("lodash/unionBy");

var _unionBy3 = _interopRequireDefault(_unionBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("../constants");

var _utils = require("../helpers/utils");

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
    case (0, _utils.getActionType)(_constants.SKILLS, _constants.GET, _constants.START):
      {
        return _extends({}, state, { loading: true });
      }

    case (0, _utils.getActionType)(_constants.SKILLS, _constants.GET, _constants.SUCCESS):
      {
        var _res$data = res.data,
            results = _res$data.results,
            count = _res$data.count;


        return _extends({}, state, {
          entities: (0, _unionBy3.default)(state.entities, results, "id"),
          count: count,
          loading: false
        });
      }

    case (0, _utils.getActionType)(_constants.SKILLS, _constants.GET, _constants.FAIL):
      {
        return _extends({}, state, { loading: false });
      }

    case (0, _utils.getActionType)(_constants.JOBS_BY_COMPANY_ID, _constants.GET, _constants.SUCCESS):
      {
        var _results = (0, _flatten3.default)(res.data.results.map(function (r) {
          return r.skills;
        }));
        return _extends({}, state, {
          entities: (0, _unionBy3.default)(state.entities, _results, "id")
        });
      }

    case (0, _utils.getActionType)(_constants.JOB, _constants.GET, _constants.SUCCESS):
      {
        var skills = res.data.skills;

        return _extends({}, state, {
          entities: (0, _unionBy3.default)(state.entities, skills, "id")
        });
      }

    case (0, _utils.getActionType)(_constants.ME, _constants.GET, _constants.SUCCESS):
      {
        var _skills = res.data.skills;

        return _extends({}, state, {
          entities: _skills ? (0, _unionBy3.default)(state.entities, _skills, "id") : state.entities
        });
      }

    case (0, _utils.getActionType)(_constants.ME, _constants.BACKGROUND, _constants.GET, _constants.SUCCESS):
      {
        var _skills2 = res.data.skills;

        return _extends({}, state, {
          entities: _skills2 ? (0, _unionBy3.default)(state.entities, _skills2, "id") : state.entities
        });
      }

    default:
      return state;
  }
};

module.exports = exports["default"];