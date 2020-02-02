import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"

function Admin({ classes }) {
  return <div className={classes.adminWrapper}>Admin Container</div>
}
export default withStyles(styles)(Admin)
