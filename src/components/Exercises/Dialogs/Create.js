import React, { Fragment, Component } from 'react';
import {
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { v4 } from 'node-uuid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyontent: 'space-around',
    width: 500,
  },
  menuItem: {
    textTransform: 'uppercase'
  },
  formControl: {
    marginTop: 20,
    marginBottom: 20
  }
});

class Create extends Component {

  state = {
    open: false,
    exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleChange = (name) => ({
    target: {
      value
    }
  }) => {
    this.setState((prevState) => ({
      exercise: {
        ...prevState.exercise,
        [name]: value
      }
    }))
  }

  handleSubmit = () => {
    const { exercise } = this.state;

    if(exercise.title && exercise.description && exercise.muscles) {
      this.props.onCreate({
        ...exercise,
        id: v4()
      });
      this.setState({
        opne: false,
        exercise : {
          title: '',
          description: '',
          muscles: ''
        }
      });
    }
  }

  render() {
    const { classes, categories } = this.props;
    const { open, exercise : {title, description, muscles} } = this.state;

    return (
      <Fragment>
          <Button variant="fab" aria-label="Add" mini onClick={() => this.setState({open: true})}>
            <AddIcon />
          </Button>
          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form autoComplete="off" className={classes.container}>
              <TextField
                id="title"
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                className={classes.formControl}
                fullWidth
              />
              <FormControl className={classes.select}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                    inputProps={{
                      name: 'muscles',
                      id: 'muscles',
                    }}
                    className={classes.menuItem}
                    margin="dense"
                  >
                  {categories.map((category) => <MenuItem value={category} key={category} className={classes.menuItem}>{category}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField
                  id="description"
                  label="Description"
                  value={description}
                  onChange={this.handleChange('description')}
                  className={classes.formControl}
                  fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={this.handleSubmit}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
};

export default withStyles(styles)(Create);