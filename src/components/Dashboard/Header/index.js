import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"

function Header({ classes }) {
  return <div className={classes.dashboardWrappe}>Header</div>
}
export default withStyles(styles)(Header)
