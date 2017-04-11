import {
  GET,
  START,
  SUCCESS,
  FAIL,
  JOB,
  LANGUAGES,
  JOBS_BY_COMPANY_ID
} from '../constants';

import {DEFAULT_LANGS} from '../default-options';

import {flatten, unionBy} from 'lodash';

const defaultState = {
  loading: false,
  count: null,
  entities: DEFAULT_LANGS
};

export default (state = defaultState, action) => {
  const {type, res} = action;

  switch (type) {

    case LANGUAGES + GET + START: {
      return {...state, loading: true};
    }

    case LANGUAGES + GET + SUCCESS: {
      const {results, count} = res.data;
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id'),
        count,
        loading: false
      };
    }

    case LANGUAGES + GET + FAIL: {
      return {...state, loading: false};
    }

    case JOBS_BY_COMPANY_ID + GET + SUCCESS: {
      const results = flatten(res.data.results.map(r => r.languages));
      return {
        ...state,
        entities: unionBy(state.entities, results, 'id')
      };
    }

    case JOB + GET + SUCCESS: {
      const {languages} = res.data;
      return {
        ...state,
        entities: unionBy(state.entities, languages, 'id')
      };
    }

  }

  return state;
};
