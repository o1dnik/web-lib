import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {get} from 'lodash-es';

const AuthRequired = ({component, isLogged, profileComplete, ...rest}) => {

  return (
    <Route {...rest} render={props => {

      if (profileComplete) {
        return <Redirect to={{pathname: '/'}}/>;
      }

      if (isLogged) {
        return React.createElement(component, props);
      }

      return (
        <Redirect to={{
          pathname: '/login',
          search: `?redirectTo=${get(rest, 'location.pathname') || '/'}`
        }}/>
      );

    }}/>
  );

};

export default AuthRequired;
