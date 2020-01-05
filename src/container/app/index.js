import React from "react"
import theme from "../../commons/Theme"
import TaskBoard from "../Taskboard"
import { ThemeProvider } from "@material-ui/core/styles"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  )
}

export default App
