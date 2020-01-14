import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import loading from "../../assets/images/loading.gif"
import { styles } from "./styles"

function LoadingComponent(props) {
  const { classes, ui } = props
  if (ui.showLoading) {
    return (
      <div className={classes.wrapper}>
        <img src={loading} alt="loading_image" className={classes.icon} />
      </div>
    )
  }
  return null
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

export default withStyles(styles)(connect(mapStateToProps)(LoadingComponent))
