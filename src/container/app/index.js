import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import TaskBoard from "../Taskboard"
import configStore from "../../store"
import theme from "../../commons/Theme"
import GlobalLoading from "../../components/GlobalLoading"

import CssBaseline from "@material-ui/core/CssBaseline"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Provider store={configStore()}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <GlobalLoading/>
        <TaskBoard />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
