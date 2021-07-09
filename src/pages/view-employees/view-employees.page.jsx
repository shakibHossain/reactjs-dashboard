import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Menu from "../../components/menu/menu.component";
import ModalDialog from "../../components/modal-dialog/modal-dialog.component";
import DeleteEmployeeDialog from "../../components/delete-employee-dialog/delete-employee-dialog.component";

import { readEmployees } from "../../redux/actions/employee.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    position: "fixed",
    bottom: 0,
  },
  tableContainer: {
    height: 450,
    overflowY: "auto",
  },
  table: {
    minWidth: 650,
    height: 450,
    overflowY: "hidden",
  },
  tbody: {
    height: 450,
    overflowY: "auto",
  },
  pageheading: {
    textAlign: "center",
    paddingBottom: 40,
  },
  addEmployeeButton: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
}));

const ViewEmployeesPage = ({ dispatch, employees }) => {
  const classes = useStyles();

  const [createEmployeeModalOpen, setCreateEmployeeModalOpen] = useState(false);
  const [editEmployeeModalOpen, setEditEmployeeModalOpen] = useState(false);
  const [deleteEmployeeDialogOpen, setDeleteEmployeeDialogOpen] =
    useState(false);

  const [modalValue, setModalValue] = useState(null);
  const [deleteModalValue, setDeleteModalValue] = useState(null);

  const handleCreateEmployeeModalOpen = () => {
    setCreateEmployeeModalOpen(true);
  };

  const handleCreateEmployeeModalClose = () => {
    setCreateEmployeeModalOpen(false);
  };

  const handleEditEmployeeModalOpen = (employee) => {
    setModalValue(employee);
    setEditEmployeeModalOpen(true);
  };

  const handleEditEmployeeModalClose = () => {
    setEditEmployeeModalOpen(false);
  };

  const handleDeleteEmployeeDialogOpen = (id) => {
    setDeleteModalValue(id);
    setDeleteEmployeeDialogOpen(true);
  };

  const handleDeleteEmployeeDialogClose = () => {
    setDeleteEmployeeDialogOpen(false);
  };

  useEffect(() => {
    dispatch(readEmployees());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.pageheading}
          >
            View Employees
          </Typography>
          <div className={classes.addEmployeeButton}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCreateEmployeeModalOpen}
            >
              Add Employee
            </Button>
          </div>
          {/* Display modals and pass props */}
          <ModalDialog
            createEmployeeModalOpen={createEmployeeModalOpen}
            handleCreateEmployeeModalClose={handleCreateEmployeeModalClose}
          />
          <ModalDialog
            editEmployeeModalOpen={editEmployeeModalOpen}
            handleEditEmployeeModalClose={handleEditEmployeeModalClose}
            modalValue={modalValue}
          />
          <DeleteEmployeeDialog
            deleteEmployeeDialogOpen={deleteEmployeeDialogOpen}
            handleDeleteEmployeeDialogClose={handleDeleteEmployeeDialogClose}
            deleteModalValue={deleteModalValue}
          />

          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.tbody}>
                {employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell>{employee.firstName}</TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => handleEditEmployeeModalOpen(employee)}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          handleDeleteEmployeeDialogOpen(employee.id)
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employee.employees,
  };
};

export default connect(mapStateToProps)(ViewEmployeesPage);
