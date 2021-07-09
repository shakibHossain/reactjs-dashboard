import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";

import { getEmployeesCount } from "../../redux/actions/employee.actions";

const OverviewCard = ({ type, dispatch, employeesCount }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(null);

  useEffect(() => {
    dispatch(getEmployeesCount());
    setNumberOfEmployees(employeesCount);
  }, [dispatch]);

  return (
    <div>
      <Typography component="p" variant="body2" color="textSecondary">
        {type}
      </Typography>
      {type === "Employees" ? (
        <Typography component="p" variant="h4">
          {numberOfEmployees}
        </Typography>
      ) : (
        <Typography component="p" variant="h4">
          {5}
        </Typography>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employeesCount: state.employee.employeesCount,
  };
};

export default connect(mapStateToProps)(OverviewCard);
