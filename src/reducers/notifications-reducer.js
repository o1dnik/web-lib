import {NOTIFICATION, SHOW, HIDE} from '../constants';
import {unionBy} from 'lodash';

const defaultState = {
  entities: []
};

export default (state = defaultState, action) => {

  const {type, payload} = action;

  switch (type) {

    case NOTIFICATION + SHOW: {
      return {
        ...state,
        entities: unionBy(state.entities, [payload.notification], 'key')
      };
    }

    case NOTIFICATION + HIDE:
      return {
        ...state,
        entities: state.entities.filter(n => n.key !== payload.notification.key)
      };
  }

  return state;
};
