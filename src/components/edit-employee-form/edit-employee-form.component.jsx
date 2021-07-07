import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { updateEmployee } from "../../redux/actions/employee.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const EditEmployeeForm = ({ handleEditEmployeeModalClose, modalValue, dispatch }) => {
  const classes = useStyles();

  const [id, setId] = useState(modalValue.id);
  const [firstName, setFirstName] = useState(modalValue.firstName);
  const [lastName, setLastName] = useState(modalValue.lastName);
  const [email, setEmail] = useState(modalValue.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(id, firstName, lastName, email));
    handleEditEmployeeModalClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography component="h1" variant="h5">
        Edit Employee
      </Typography>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleEditEmployeeModalClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Edit
        </Button>
      </div>
    </form>
  );
};

export default connect()(EditEmployeeForm);
