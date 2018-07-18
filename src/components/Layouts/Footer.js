import React from 'react'
import { withStyles, Paper, Tabs, Tab } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

export default withStyles(styles)(
  (props) => 
  <Paper className={props.classes.root}>
    <Tabs
      value={0}
      // onChange={}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
)
