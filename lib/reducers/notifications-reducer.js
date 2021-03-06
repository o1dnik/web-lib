"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _unionBy2 = require("lodash/unionBy");

var _unionBy3 = _interopRequireDefault(_unionBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("../constants");

var _utils = require("../helpers/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
  entities: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case (0, _utils.getActionType)(_constants.NOTIFICATION, _constants.SHOW):
      {
        return _extends({}, state, {
          entities: (0, _unionBy3.default)(state.entities, [payload.notification], "key")
        });
      }

    case (0, _utils.getActionType)(_constants.NOTIFICATION, _constants.HIDE):
      return _extends({}, state, {
        entities: state.entities.filter(function (n) {
          return n.key !== payload.notification.key;
        })
      });

    default:
      return state;
  }
};

module.exports = exports["default"];