import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"

function SideDrawer({ classes }) {
  return <div className={classes.dashboardWrappe}>Sidebar</div>
}
export default withStyles(styles)(SideDrawer)
