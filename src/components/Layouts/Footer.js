import React from "react";
import { withStyles, Paper, Tabs, Tab } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  }
};

export default withStyles(styles)(
  ({ classes, muscles, category, onSelect }) => {
    const idx = category
      ? muscles.findIndex(group => group === category) + 1
      : 0;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={idx}
          onChange={(e, index) => {
            onSelect(index === 0 ? null : muscles[index - 1]);
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {muscles.map((muscle, index) => <Tab key={index} label={muscle} />)}
        </Tabs>
      </Paper>
    );
  }
);
