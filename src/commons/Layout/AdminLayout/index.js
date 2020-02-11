import React from "react"
import { Route } from "react-router-dom"
import Dashboard from "../../../components/Dashboard"

function AdminLayuoutRoute(routes) {
  const { component: YourComponent, name, ...remainProps } = routes
  return (
    <Route
      {...remainProps}
      render={routeProps => {
        return (
          <Dashboard pageName={name}>
            <YourComponent {...routeProps} />
          </Dashboard>
        )
      }}
    />
  )
}
export default AdminLayuoutRoute
