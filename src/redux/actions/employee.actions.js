import { myDb } from "../../firebase/firebase";

// Create employee redux action types
export const CREATE_EMPLOYEE_REQUEST = "CREATE_EMPLOYEE_REQUEST";
export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAILURE = "CREATE_EMPLOYEE_FAILURE";
// Read employee redux action types
export const READ_EMPLOYEES_REQUEST = "READ_EMPLOYEES_REQUEST";
export const READ_EMPLOYEES_SUCCESS = "READ_EMPLOYEES_SUCCESS";
export const READ_EMPLOYEES_FAILURE = "READ_EMPLOYEES_FAILURE";

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

export const createEmployeeFailure = (error) => {
  return {
    type: CREATE_EMPLOYEE_FAILURE,
    payload: error,
  };
};

// Read employees redux action creators that return an action
export const readEmployeesRequest = () => {
  return {
    type: READ_EMPLOYEES_REQUEST,
  };
};

export const readEmployeesSuccess = (employees) => {
  return {
    type: READ_EMPLOYEES_SUCCESS,
    payload: employees,
  };
};

export const readEmployeesFailure = (error) => {
  return {
    type: READ_EMPLOYEES_FAILURE,
    payload: error,
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
      dispatch(createEmployeeFailure(error));
    });
};

// Combine all read employees action types in an 
export function readEmployees() {
  return async (dispatch) => {
    dispatch(readEmployeesRequest());

    try {
      const employeeRef = myDb.ref("/employees");
      employeeRef.on("value", (snapshot) => {
        const employees = snapshot.val();
        const employeeList = [];
        for (let id in employees) {
          employeeList.push({ id, ...employees[id] });
        }
        const reverseEmployeeList = [];
        for (let i = employeeList.length - 1; i > 0; i--) {
          reverseEmployeeList.push(employeeList[i]);
        }
        dispatch(readEmployeesSuccess(reverseEmployeeList));
      });
    } catch (error) {
      dispatch(readEmployeesFailure(error));
    }
  };
}
