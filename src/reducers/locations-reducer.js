import {
  GET,
  START,
  COMPANY,
  SUCCESS,
  FAIL,
  LOCATIONS,
  JOB,
  JOBS_BY_COMPANY_ID,
  ME
} from '../constants';

import {unionBy, get} from 'lodash-es';

const defaultState = {
  loading: false,
  count: null,
  entities: []
};

export default (state = defaultState, action) => {
  const {type, res} = action;

  switch (type) {

    case LOCATIONS + GET + START: {
      return {...state, loading: true};
    }

    case LOCATIONS + GET + SUCCESS: {
      const {results, count} = res.data;
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id'),
        count,
        loading: false
      };
    }

    case LOCATIONS + GET + FAIL: {
      return {...state, loading: false};
    }

    case COMPANY + GET + SUCCESS: {
      const {city} = res.data;
      if (!city) {
        return state;
      }
      return {
        ...state,
        entities: unionBy(state.entities, [city], 'id')
      };
    }

    case JOBS_BY_COMPANY_ID + GET + SUCCESS: {
      const results = res.data.results.map(r => r.city);
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id')
      };
    }

    case JOB + GET + SUCCESS: {
      const {city} = res.data;
      return {
        ...state,
        entities: unionBy(state.entities, [city], 'id')
      };
    }

    case ME + GET + SUCCESS: {
      const relocations = get(res, 'data.relocations');

      if (relocations && relocations.length > 0) {
        return {
          ...state,
          entities: unionBy(state.entities, relocations, 'id')
        };
      }

      return state;

    }

  }

  return state;
};
