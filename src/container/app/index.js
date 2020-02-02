import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Switch } from "react-router-dom"
import configStore from "../../store"
import theme from "../../commons/Theme"
import GlobalLoading from "../../components/GlobalLoading"
import GlobalModal from "../../components/GlobalModal"
import AdminLayoutRoute from "../../commons/Layout/AdminLayout"
import { ADMIN_LAYOUT_ROUTES } from "../../constants/routes"
import CssBaseline from "@material-ui/core/CssBaseline"
import "react-toastify/dist/ReactToastify.css"

function App() {
  function renderAdminRoutes() {
    let xhtml = null
    xhtml = ADMIN_LAYOUT_ROUTES.map(route => {
      return <AdminLayoutRoute {...route} key={route.path} />
    })
    return xhtml
  }

  return (
    <Provider store={configStore()}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <GlobalModal />
          <GlobalLoading />
          <Switch>{renderAdminRoutes()}</Switch>
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
