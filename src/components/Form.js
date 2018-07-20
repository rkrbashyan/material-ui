import React, { Component } from "react";
import {
  withStyles,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { v4 } from "node-uuid";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyontent: "space-around",
    width: 500
  },
  menuItem: {
    textTransform: "uppercase"
  },
  formControl: {
    marginTop: 20,
    marginBottom: 20
  }
});

class Form extends Component {
  state = {
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState(prevState => ({
      exercise: {
        ...prevState.exercise,
        [name]: value
      }
    }));
  };

  handleSubmit = () => {
    const { exercise } = this.state;

    if (exercise.title && exercise.description && exercise.muscles) {
      this.props.onCreate({
        ...exercise,
        id: v4()
      });
      this.setState({
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
      this.props.onDilogClose();
    }
  };

  render() {
    const { classes, categories } = this.props;
    const { exercise: { title, description, muscles } } = this.state;

    return (
      <form autoComplete="off" className={classes.container}>
        <TextField
          id="title"
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          className={classes.formControl}
          fullWidth
        />
        <FormControl className={classes.select}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange("muscles")}
            inputProps={{
              name: "muscles",
              id: "muscles"
            }}
            className={classes.menuItem}
            margin="dense"
          >
            {categories.map(category => (
              <MenuItem
                value={category}
                key={category}
                className={classes.menuItem}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="description"
          label="Description"
          value={description}
          onChange={this.handleChange("description")}
          className={classes.formControl}
          fullWidth
        />
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
          >
          Create
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
