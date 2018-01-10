import React from "react"
import { Route, Redirect } from "react-router-dom"
import { get } from "lodash"

const ProfileRequired = ({ component, isLogged, profileComplete, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogged) {
          const redirectTo = get(rest, "location.pathname", "/")

          let fullSearch = `?redirectTo=${redirectTo}`

          const search = get(rest, "location.search", "?").substring(1)

          if (search) {
            fullSearch = `${fullSearch}&${search}`
          }

          return (
            <Redirect
              to={{
                pathname: "/login",
                search: fullSearch
              }}
            />
          )
        }

        if (!profileComplete) {
          const search = get(rest, "location.search", "")

          return (
            <Redirect
              to={{
                pathname: `/registration`,
                search
              }}
            />
          )
        }

        return React.createElement(component, {
          ...props,
          renderLoader: rest.renderLoader
        })
      }}
    />
  )
}

export default ProfileRequired
