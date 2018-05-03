import React from "react"
import { Route, Redirect } from "react-router-dom"
import qs from "qs"
import { get, defaultTo, omit, isEmpty } from "lodash"

const NoAuthRequired = ({ component, isLogged, ...rest }) => {
  const query = qs.parse(
    get(rest, "location.search", "?redirectTo=/").substring(1),
  )

  const redirectTo = {
    pathname: defaultTo(query.redirectTo, "/"),
  }

  const searchQueryObject = omit(query, "redirectTo")

  if (!isEmpty(searchQueryObject)) {
    redirectTo.search = `?${qs.stringify(searchQueryObject)}`
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged) {
          return <Redirect to={redirectTo} />
        }

        return React.createElement(component, {
          ...props,
          renderLoader: rest.renderLoader,
        })
      }}
    />
  )
}

export default NoAuthRequired
