import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"

class TaskBoard extends Component {
  render() {
    const { classes } = this.props
    console.log(this.props.classes)

    return (
      <div className={classes.taskboard}>
        <div className={classes.shape}>Angular</div>
        <div className={classes.shape}>Reactjs</div>
      </div>
    )
  }
}
export default withStyles(styles)(TaskBoard)
