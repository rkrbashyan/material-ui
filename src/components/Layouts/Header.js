import React from 'react'
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(
  (props) => 
  <AppBar position="static">
    <Toolbar>
      <Typography variant="display2" color="inherit" className={props.classes.flex}>
        Exercises
      </Typography>
    </Toolbar>
  </AppBar>
)
