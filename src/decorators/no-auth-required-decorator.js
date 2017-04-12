import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import qs from 'qs';
import {get, defaultTo} from 'lodash';

const NoAuthRequired = ({component, isLogged, ...rest}) => {

  const query = qs.parse(
    get(rest, 'location.search', '?redirectTo=/').substring(1)
  );

  return (
    <Route {...rest} render={props => {

      if (isLogged) {
        return (
          <Redirect to={{pathname: defaultTo(query.redirectTo, '/')}}/>
        );
      }

      return React.createElement(component, {
        ...props,
        renderLoader: rest.renderLoader
      });

    }}/>
  );
};

export default NoAuthRequired;
