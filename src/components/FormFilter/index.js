import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import { styles } from "./styles"

function FormFilter(props) {
  const { classes, handleChange } = props
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        autoFocus
        margin="dense"
        id="keyword"
        label="Type your keyword"
        type="keyword"
        fullWidth
        className={classes.searchInput}
        onChange={handleChange}
      />
    </Grid>
  )
}
export default withStyles(styles)(FormFilter)
