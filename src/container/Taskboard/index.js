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
import DeleteTaskComponent from "../../components/ConfirmDeleteTask"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  fetchListTask,
  filterTask,
  addTask,
  setTaskEditing,
  deleteTask,
  updateTask
} from "../../store/actions/task.action"
import {
  showModal,
  hideModal,
  changeModalTitle,
  changeModalContent
} from "../../store/actions/modal.action"
import styles from "./styles"

class TaskBoard extends Component {
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
              onClickEditing={this.handleEditing}
              onClickDeleting={this.showModalDeleting}
            />
          )
        })}
      </Grid>
    )
    return xhtml
  }

  handleEditing = task => {
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      setTaskEditing
    } = this.props
    setTaskEditing(task)
    showModal()
    changeModalTitle("Update Task")
    changeModalContent(<TaskForm handleSubmitForm={this.handleSubmitForm} />)
  }

  handleTaskFilter = e => {
    const { value } = e.target
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

  handleAddTask = () => {
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      setTaskEditing
    } = this.props
    setTaskEditing(null)
    showModal()
    changeModalTitle("Add New Task")
    changeModalContent(<TaskForm handleSubmitForm={this.handleSubmitForm} />)
  }

  handleAddTaskItem = task => {
    task.status = 0
    this.props.addTask(task)
  }

  handleUpdateTaskItem = task => {
    this.props.updateTask(task)
  }

  handleSubmitForm = data => {
    const { task } = this.props
    if (task.taskEditing === null) {
      this.handleAddTaskItem(data)
    } else {
      this.handleUpdateTaskItem(data)
    }
  }

  showModalDeleting = task => {
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
      hideModal
    } = this.props
    showModal()
    changeModalTitle("Delete Task")
    changeModalContent(
      <DeleteTaskComponent
        title={task.title}
        handleConfirmedDelete={() => this.handleConfirmedDelete(task)}
        hideModal={hideModal}
      />
    )
  }

  handleConfirmedDelete = value => {
    const { deleteTask } = this.props
    deleteTask(value)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskboard}>
        <Container>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleAddTask}
          >
            <AddICon />
            Add New Task
          </Button>
          {this.renderFormFilter()}
          {this.renderBoard()}
        </Container>
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
  return bindActionCreators(
    {
      fetchListTask,
      filterTask,
      addTask,
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
      setTaskEditing,
      deleteTask,
      updateTask
    },
    dispatch
  )
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
)
