import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddICon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import { STATUES } from "../../constants";

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
];
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={1} mb={2}>
                <div className={status.status}>{status.label}</div>
              </Box>
              <div className={status.wrapperListTask}>
                {taskFiltered.map(task => {
                  const { title, description } = task;
                  return (
                    <Card key={task.id}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            <Typography component="p">{title}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button>Button</Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary">
          <AddICon />
          Add New Task
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);
