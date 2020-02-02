import React from "react"
import { withStyles } from "@material-ui/styles"
import { styles } from "./styles"
import { Typography, Button, Box } from "@material-ui/core"

export function DeleteTaskComponent({
  classes,
  title,
  hideModal,
  handleConfirmedDelete
}) {
  return (
    <div className="confirmModal">
      <Typography className={classes.confirmMessage}>
        Are you sure want to delete
        <span className={classes.confirmName}> {title}</span>?
      </Typography>
      <Box className="confirmAction" display="flex" justifyContent="flex-end">
        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmedDelete}
          >
            Delete
          </Button>
        </Box>
        <Box ml={1} mt={1}>
          <Button variant="contained" color="secondary" onClick={hideModal}>
            Cancle
          </Button>
        </Box>
      </Box>
    </div>
  )
}
export default withStyles(styles)(DeleteTaskComponent)
