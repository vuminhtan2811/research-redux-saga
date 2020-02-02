import React from "react"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

export default withStyles(styles)(renderTextField)
