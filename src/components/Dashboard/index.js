import React from "react"
import { withStyles } from "@material-ui/core/styles"
import SideDrawer from "./SideDrawer"
import { connect } from "react-redux"
import { bindActionCreators, compose } from "redux"
import Header from "./Header"
import { styles } from "./styles"
import {
  hideSidebarDrawer,
  showSidebarDrawer
} from "../../store/actions/ui.action"
import cn from "classnames"

function DashBoardComponent({
  classes,
  children,
  pageName,
  showSidebar,
  hideSidebarDrawer,
  showSidebarDrawer
}) {
  const toggleSidebar = () => {
    if (showSidebar) {
      hideSidebarDrawer()
    } else {
      showSidebarDrawer()
    }
  }
  return (
    <div className={classes.dashboardWrapper}>
      <Header pageName={pageName} toggleSidebar={toggleSidebar} />
      <div className={classes.main}>
        <SideDrawer showSidebar={showSidebar} />
        <div
          className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: showSidebar === true
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    showSidebar: state.ui.showSidebar
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideSidebarDrawer, showSidebarDrawer }, dispatch)
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect, withStyles(styles))(DashBoardComponent)
