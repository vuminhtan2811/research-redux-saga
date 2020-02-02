import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { styles } from "./styles"
import { connect } from "react-redux"
import { compose, bindActionCreators } from "redux"
import { hideModal } from "../../store/actions/modal.action"
import { Field, reduxForm } from "redux-form"
import RenderTextField from "../../helpers/form/TextField"
import RenderSelectField from "../../helpers/form/Select"

function TaskFormComponent({
  hideModal,
  classes,
  handleSubmit,
  handleSubmitForm,
  taskEditing,
  initialValues
}) {
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container>
        <Grid item xs={12}>
          <Field
            component={RenderTextField}
            autoFocus
            margin="dense"
            name="title"
            id="title"
            label="Title"
            type="title"
            fullWidth
            value={initialValues && initialValues.title}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={RenderTextField}
            autoFocus
            margin="dense"
            name="description"
            id="description"
            label="Description"
            type="description"
            fullWidth
            value={initialValues && initialValues.description}
          />
        </Grid>
        {taskEditing !== null ? (
          <Grid item xs={12}>
            <Field
              component={RenderSelectField}
              margin="dense"
              name="status"
              id="status"
              label="Status"
              type="status"
              fullWidth
              value={initialValues && initialValues.status}
            >
              <MenuItem value={0}>Ready</MenuItem>
              <MenuItem value={1}>In Progress</MenuItem>
              <MenuItem value={2}>Completed</MenuItem>
            </Field>
          </Grid>
        ) : null}

        <Box className={classes.formAction}>
          <Box>
            <Button variant="contained" onClick={hideModal}>
              Cancel
            </Button>
          </Box>
          <Box ml={1}>
            <Button variant="contained" color="primary" type="submit">
              {taskEditing !== null ? "Update" : "Add"}
            </Button>
          </Box>
        </Box>
      </Grid>
    </form>
  )
}

const withForm = reduxForm({
  form: "task"
})

function mapStateToProps(state) {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: state.task.taskEditing
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch)
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withStyles(styles),
  withConnect,
  withForm
)(TaskFormComponent)
