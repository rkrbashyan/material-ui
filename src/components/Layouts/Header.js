import React from 'react'
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create'

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
  ({classes, muscles, onCreate}) => 
  <AppBar position="static">
    <Toolbar>
      <Typography variant="display2" color="inherit" className={classes.flex}>
        Exercises
      </Typography>
      <CreateDialog categories={muscles} onCreate={onCreate}/>
    </Toolbar>
  </AppBar>
)
