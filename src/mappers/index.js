import {memoize, flatMap} from 'lodash-es';

export const mapRolesFactory = () => memoize(items =>
  flatMap(items, c =>
    [{name: c.name, isCategory: true, id: c.name}, ...c.roles]
  )
);
