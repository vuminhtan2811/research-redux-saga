import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { styles } from ".//styles"
import { ADMIN_LAYOUT_ROUTES } from "../../../constants/routes"
import { NavLink } from "react-router-dom"

function SideDrawer({ classes, showSidebar }) {
  const [state, setState] = React.useState({
    open: true
  })

  const toggleDrawer = value => {
    setState({ ...state, open: value })
  }

  const fullList = () => (
    <div className={classes.list}>
      <List component="div">
        {ADMIN_LAYOUT_ROUTES.map(item => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              exact={item.exact}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
            >
              <ListItem className={classes.menuItem} button>
                {item.name}
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </div>
  )

  return (
    <div>
      <Drawer
        open={showSidebar}
        onClose={() => toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper
        }}
        variant="persistent"
      >
        {fullList()}
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(SideDrawer)
