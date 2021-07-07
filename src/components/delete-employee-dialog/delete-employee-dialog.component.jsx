import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { deleteEmployee } from "../../redux/actions/employee.actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteEmployeeDialog = ({
  deleteEmployeeDialogOpen,
  handleDeleteEmployeeDialogClose,
  deleteModalValue,
  dispatch,
}) => {
  const handleDelete = () => {
    dispatch(deleteEmployee(deleteModalValue));
    handleDeleteEmployeeDialogClose();
  };

  return (
    <div>
      <Dialog
        open={deleteEmployeeDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteEmployeeDialogClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Delete this employee?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteEmployeeDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect()(DeleteEmployeeDialog);
