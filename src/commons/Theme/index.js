import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#E64A19",
    white: "#FFFFFF"
  },
  typography: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadius: 4,
    background: "#7B1FA2",
    textColor: "#FFFFFF",
    border: "#CCCCCC"
  }
})


export default theme 