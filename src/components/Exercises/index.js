import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Form from '../../components/Form';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  onDelete,
  onSelectEdit,
  editMode,
  muscles,
  selectedExercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  key={group}
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(e => (
                    <Fragment key={e.id}>
                      <ListItem button onClick={() => onSelect(e.id)}>
                        <ListItemText primary={e.title} />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(e.id)}>
                            <EditIcon style={{ fontSize: 28 }} />
                          </IconButton>
                          <IconButton onClick={() => onDelete(e.id)}>
                            <DeleteIcon style={{ fontSize: 28 }} />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </Fragment>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>
        { editMode
          ? <Form categories={muscles}/>
          : <Fragment>
              <Typography variant="display1">{title}</Typography>
              <Typography variant="subheading" style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
      }
      </Paper>
    </Grid>
  </Grid>
);
