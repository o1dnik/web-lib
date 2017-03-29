'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _lodash = require('lodash');

var defaultState = {
  entities: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {

    case _constants.NOTIFICATION + _constants.SHOW:
      {
        return _extends({}, state, {
          entities: (0, _lodash.unionBy)(state.entities, [payload.notification], 'key')
        });
      }

    case _constants.NOTIFICATION + _constants.HIDE:
      return _extends({}, state, {
        entities: state.entities.filter(function (n) {
          return n.key !== payload.notification.key;
        })
      });
  }

  return state;
};

module.exports = exports['default'];