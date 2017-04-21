import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {get} from 'lodash'

const AuthRequired = ({component, isLogged, profileComplete, ...rest}) => {
  return (
    <Route {...rest} render={props => {
      if (profileComplete) {
        return <Redirect to={{pathname: '/'}} />
      }

      if (isLogged) {
        return React.createElement(component, {
          ...props,
          renderLoader: rest.renderLoader
        })
      }

      const redirectTo = get(rest, 'location.pathname', '/')

      let fullSearch = `?redirectTo=${redirectTo}`

      const search = get(rest, 'location.search', '?').substring(1)

      if (search) {
        fullSearch = `${fullSearch}&${search}`
      }

      return (
        <Redirect to={{
          pathname: '/login',
          search: fullSearch
        }} />
      )
    }} />
  )
}

export default AuthRequired
