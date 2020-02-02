import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { styles } from "./styles"
import TaskItem from "../TaskItem"
class TaskList extends Component {
  render() {
    const { taskFiltered, status, onClickEditing, onClickDeleting } = this.props
    return (
      <Grid item md={4} sm={6} xs={12} key={status.value}>
        <Box mt={1} mb={2}>
          <div className={status.status}>{status.label}</div>
        </Box>
        <div className={status.wrapperListTask}>
          {taskFiltered.map((task, index) => {
            return (
              <TaskItem
                task={task}
                status={status}
                key={index}
                onClickEditing={() => onClickEditing(task)}
                onClickDeleting={() => onClickDeleting(task)}
              />
            )
          })}
        </div>
      </Grid>
    )
  }
}
export default withStyles(styles)(TaskList)
