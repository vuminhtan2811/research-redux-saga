import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { styles } from "./styles"
import TaskItem from "../TaskItem"
class TaskList extends Component {
  render() {
    const { taskFiltered, status } = this.props

    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={2}>
          <div className={status.status}>{status.label}</div>
        </Box>
        <div className={status.wrapperListTask}>
          {taskFiltered.map(task => {
            return <TaskItem task={task} status={status}/>
          })}
        </div>
      </Grid>
    )
  }
}
export default withStyles(styles)(TaskList)
