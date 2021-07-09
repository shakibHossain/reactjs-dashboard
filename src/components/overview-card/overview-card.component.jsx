import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";

import { getEmployeesCount } from "../../redux/actions/employee.actions";

const OverviewCard = ({ dispatch, employeesCount }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(employeesCount);

  useEffect(() => {
    dispatch(getEmployeesCount());
    setNumberOfEmployees(employeesCount);
  }, [employeesCount]);

  return (
    <div>
      <Typography component="p" variant="body2" color="textSecondary">
        Employees
      </Typography>
      <Typography component="p" variant="h4">
        {numberOfEmployees}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employeesCount: state.employee.employeesCount,
  };
};

export default connect(mapStateToProps)(OverviewCard);
