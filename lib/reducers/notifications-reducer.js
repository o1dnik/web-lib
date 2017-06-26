import _unionBy from 'lodash/unionBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { NOTIFICATION, SHOW, HIDE } from '../constants';

import { getActionType } from '../helpers/utils';

var defaultState = {
  entities: []
};

export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case getActionType(NOTIFICATION, SHOW):
      {
        return _extends({}, state, {
          entities: _unionBy(state.entities, [payload.notification], 'key')
        });
      }

    case getActionType(NOTIFICATION, HIDE):
      return _extends({}, state, {
        entities: state.entities.filter(function (n) {
          return n.key !== payload.notification.key;
        })
      });
  }

  return state;
});