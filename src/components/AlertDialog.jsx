/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class AlertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {

    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseConfirm = () => {
    this.props.handleConfirmClick(this.props.param)
    this.setState({ open: false });

  }

  render() {
    const { title, message, buttonLabel, buttonColor, buttonIcon } = this.props;
    return (
      <React.Fragment>
        <Button
          variant="contained"
          onClick={this.handleClickOpen}
          startIcon={buttonIcon}
          color={buttonColor}
        >
          {buttonLabel}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Annuler</Button>
            <Button onClick={this.handleCloseConfirm} autoFocus>
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AlertDialog;
