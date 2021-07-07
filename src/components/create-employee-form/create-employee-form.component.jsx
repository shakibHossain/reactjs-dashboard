import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { createEmployee } from "../../redux/actions/employee.actions";

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

const CreateEmployeeForm = ({ handleCreateEmployeeModalClose, dispatch, createEmployeeSuccess }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(firstName, lastName, email));

    setFirstName("");
    setLastName("");
    setEmail("");
    handleCreateEmployeeModalClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography component="h1" variant="h5">
        Add Employee
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
        <Button variant="contained" onClick={handleCreateEmployeeModalClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    createEmployeeSuccess: state.employee.createEmployeeSuccess,
  };
};

export default connect(mapStateToProps)(CreateEmployeeForm);
