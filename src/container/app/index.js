import React from "react"
import theme from "../../commons/Theme"
import TaskBoard from "../Taskboard"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import configStore from "../../store"
import { ToastContainer } from "react-toastify"
import CssBaseline from "@material-ui/core/CssBaseline"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Provider store={configStore()}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <TaskBoard />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
