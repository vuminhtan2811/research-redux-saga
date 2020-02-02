import React from "react"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  classes,
  ...custom
}) => (
  <FormControl error={touched && error} className={classes.FormControl}>
    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: "status"
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

export default withStyles(styles)(renderSelectField)
