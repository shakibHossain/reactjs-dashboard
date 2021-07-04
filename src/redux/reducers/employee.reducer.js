import * as actions from "../actions/employee.actions";

export const initialState = {
  createEmployeeRequest: false,
  createEmployeeSuccess: false,
  createEmployeeFailure: false,
  createEmployeeErrorMessage: null,
  readEmployeesRequest: false,
  readEmployeesSuccess: false,
  readEmployeesFailure: false,
  readEmployeesFailureMessage: null,
  employee: {},
  employees: [],
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        createEmployeeRequest: true,
      };
    case actions.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        createEmployeeSuccess: true,
        createEmployeeRequest: false,
        createEmployeeFailure: false,
        employee: action.payload,
      };
    case actions.CREATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        createEmployeeFailure: true,
        createEmployeeRequest: false,
        createEmployeeSuccess: false,
        createEmployeeErrorMessage: action.payload,
      };
    case actions.READ_EMPLOYEES_REQUEST:
      return {
        ...state,
        readEmployeesRequest: true,
      };
    case actions.READ_EMPLOYEES_SUCCESS:
      return {
        ...state,
        readEmployeesSuccess: true,
        readEmployeesRequest: false,
        readEmployeesFailure: false,
        employees: action.payload,
      };
    case actions.READ_EMPLOYEES_FAILURE:
      return {
        ...state,
        readEmployeesFailure: true,
        readEmployeesRequest: false,
        readEmployeesSuccess: false,
        readEmployeesFailureMessage: action.payload,
      };
    default:
      return state;
  }
}
