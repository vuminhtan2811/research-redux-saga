import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import AddICon from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid"
import styles from "./styles"
import { STATUES } from "../../constants"
import TaskList from "../../components/TaskList"

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read matterial ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friend",
    status: 1
  },
  {
    id: 1,
    title: "Go to coffee shop",
    description: "With my wife",
    status: 2
  }
]
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null
    xhtml = (
      <Grid container spacing={2}>
        {STATUES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          )
          return <TaskList taskFiltered={taskFiltered} status={status} />
        })}
      </Grid>
    )
    return xhtml
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary">
          <AddICon />
          Add New Task
        </Button>
        {this.renderBoard()}
      </div>
    )
  }
}
export default withStyles(styles)(TaskBoard)
