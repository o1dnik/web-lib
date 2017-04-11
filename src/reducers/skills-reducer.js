import {
  GET, START, SUCCESS, FAIL, SKILLS, JOBS_BY_COMPANY_ID, JOB, ME
} from '../constants';
import {unionBy, flatten} from 'lodash-es';

const defaultState = {
  loading: false,
  count: null,
  entities: []
};

export default (state = defaultState, action) => {
  const {type, res} = action;

  switch (type) {

    case SKILLS + GET + START: {
      return {...state, loading: true};
    }

    case SKILLS + GET + SUCCESS: {
      const {results, count} = res.data;

      return {
        ...state,
        entities: unionBy(state.entities, results, 'id'),
        count,
        loading: false
      };
    }

    case SKILLS + GET + FAIL: {
      return {...state, loading: false};
    }

    case JOBS_BY_COMPANY_ID + GET + SUCCESS: {
      const results = flatten(res.data.results.map(r => r.skills));
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id')
      };
    }

    case JOB + GET + SUCCESS: {
      const {skills} = res.data;
      return {
        ...state,
        entities: unionBy(state.entities, skills, 'id')
      };
    }

    case ME + GET + SUCCESS: {
      const {skills} = res.data;
      return {
        ...state,
        entities: (skills ?
          unionBy(state.entities, skills, 'id') :
          state.entities)
      };
    }

  }

  return state;
};
