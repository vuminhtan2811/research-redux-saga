import React from "react"
import { withStyles } from "@material-ui/core/styles"
import loading from "../../assets/images/loading.gif"
import { styles } from "./styles"

function LoadingComponent(props) {
  const { classes } = props
  return (
    <div className={classes.wrapper}>
      <img src={loading} alt="loading_image" className={classes.icon}/>
    </div>
  )
}

export default withStyles(styles)(LoadingComponent)
