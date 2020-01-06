import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Icon from '@material-ui/core/Icon';

import { styles } from "./styles"

class TaskItem extends Component {
  render() {
    const { task, status, classes } = this.props
    return (
      <Card key={task.id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="p">{task.title}</Typography>
            </Grid>
            <Grid item md={4} class={classes.label}>
              {status.label}
            </Grid>

            <Grid item md={12}>
              <Box mt={1}>{task.description}</Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.fabWrapper}>
          <Fab size="small"  color="primary">
          <Icon>edit_icon</Icon>
          </Fab>
          <Fab size="small"  color="secondary">
          <Icon>delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    )
  }
}
export default withStyles(styles)(TaskItem)
