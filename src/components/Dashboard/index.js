import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { styles } from "./styles"
import Header from "./Header"
import SideDrawer from "./SideDrawer"
function DashBoardComponent({ classes, children }) {
  return (
    <div className={classes.dashboardWrappe}>
      <Header />
      <SideDrawer />
      {children}
    </div>
  )
}
export default withStyles(styles)(DashBoardComponent)
