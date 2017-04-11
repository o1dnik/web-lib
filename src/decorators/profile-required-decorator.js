import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {get} from 'lodash';

const ProfileRequired = ({component, isLogged, profileComplete, ...rest}) => {

  return (
    <Route {...rest} render={props => {

      if (!isLogged) {
        return (
          <Redirect to={{
            pathname: '/login',
            search: `?redirectTo=${get(rest, 'location.pathname') || '/'}`
          }}/>
        );
      }

      if (!profileComplete) {
        return (
          <Redirect to={{pathname: '/registration'}}/>
        );
      }

      return React.createElement(component, props);

    }}/>
  );

};

export default ProfileRequired;
