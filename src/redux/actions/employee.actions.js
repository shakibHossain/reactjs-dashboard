import { myDb } from "../../firebase/firebase";

// Create employee redux action types
export const CREATE_EMPLOYEE_REQUEST = "CREATE_EMPLOYEE_REQUEST";
export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAILURE = "CREATE_EMPLOYEE_FAILURE";

// Create employee redux action creators that return an action
export const createEmployeeRequest = () => {
  return {
    type: CREATE_EMPLOYEE_REQUEST,
  };
};

export const createEmployeeSuccess = (employee) => {
  return {
    type: CREATE_EMPLOYEE_SUCCESS,
    payload: employee,
  };
};

export const createEmployeeFailure = () => {
  return {
    type: CREATE_EMPLOYEE_FAILURE,
  };
};

//Combine all create employee action types in an asynchronous thunk
export const createEmployee = (firstName, lastName, email) => (dispatch) => {
  dispatch(createEmployeeRequest());

  const employeeRef = myDb.ref("/employees");

  const employee = {
    firstName,
    lastName,
    email,
  };

  employeeRef
    .push(employee)
    .then((employee) => {
      dispatch(createEmployeeSuccess(employee));
    })
    .catch((error) => {
      dispatch(createEmployeeFailure());
    });
};
