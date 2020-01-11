import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import Button from "@material-ui/core/Button"

import { styles } from "./styles"

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

class TaskForm extends Component {
  render() {
    const { open, onClose } = this.props
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone"
                type="email"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
export default withStyles(styles)(TaskForm)
