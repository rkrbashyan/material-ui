import React, { Fragment, Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from '../../../components/Form';

class Create extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open } = this.state;
    const { categories, onCreate } = this.props;

    return (
      <Fragment>
        <Button
          variant="fab"
          aria-label="Add"
          mini
          onClick={() => this.setState({ open: true })}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <Form categories={categories} onCreate={onCreate} onDilogClose={this.handleClose}/>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default Create;
