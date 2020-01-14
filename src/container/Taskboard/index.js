import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import AddICon from "@material-ui/icons/Add"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { STATUES } from "../../constants"
import TaskList from "../../components/TaskList"
import TaskForm from "../../components/TaskForm"
import FormFilter from "../../components/FormFilter"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchListTask, filterTask } from "../../store/actions/task.action"

import styles from "./styles"

class TaskBoard extends Component {
  state = {
    open: false
  }

  onClose = () => {
    this.setState({
      open: !this.state.open
    })
  }

  renderBoard() {
    let xhtml = null
    const { task } = this.props
    xhtml = (
      <Grid container spacing={2}>
        {STATUES.map(status => {
          const taskFiltered = task.listTask
            ? task.listTask.filter(task => task.status === status.value)
            : []
          return (
            <TaskList
              taskFiltered={taskFiltered}
              status={status}
              key={status.value}
            />
          )
        })}
      </Grid>
    )
    return xhtml
  }

  renderForm() {
    let xhtml = null
    xhtml = <TaskForm open={this.state.open} onClose={this.onClose} />
    return xhtml
  }

  handleTaskFilter(e) {
    const { value } = e.target
    console.log(value)

    this.props.filterTask(value)
  }

  renderFormFilter() {
    let xhtml = null
    xhtml = <FormFilter handleChange={this.handleTaskFilter} />
    return xhtml
  }

  componentDidMount() {
    this.props.fetchListTask()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskboard}>
        <Container>
          <Button variant="contained" color="primary" onClick={this.onClose}>
            <AddICon />
            Add New Task
          </Button>
          {this.renderFormFilter()}
          {this.renderBoard()}
        </Container>
        {this.renderForm()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    task: state.task
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchListTask, filterTask }, dispatch)
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
)
