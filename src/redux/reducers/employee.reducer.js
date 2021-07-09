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
  updateEmployeeRequest: false,
  updateEmployeeSuccess: false,
  updateEmployeeFailure: false,
  deleteEmployeeRequest: false,
  deleteEmployeeSuccess: false,
  deleteEmployeeFailure: false,
  getEmployeesCountRequest: false,
  getEmployeesCountSuccess: false,
  getEmployeesCountFailure: false,
  employee: {},
  employees: [],
  employeesCount: null,
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
    case actions.UPDATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        updateEmployeeRequest: true,
      };
    case actions.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        updateEmployeeSuccess: true,
        updateEmployeeRequest: false,
        updateEmployeeFailure: false,
        employee: action.payload,
      };
    case actions.UPDATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        updateEmployeeFailure: true,
        updateEmployeeSuccess: false,
        updateEmployeeRequest: false,
      };
    case actions.DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        deleteEmployeeRequest: true,
      };
    case actions.DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        deleteEmployeeSuccess: true,
        deleteEmployeeRequest: false,
        deleteEmployeeFailure: false,
      };
    case actions.DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        deleteEmployeeFailure: true,
        deleteEmployeeSuccess: false,
        deleteEmployeeRequest: false,
      };
    case actions.GET_EMPLOYEES_COUNT_REQUEST:
      return {
        ...state,
        getEmployeesCountRequest: true,
      };
    case actions.GET_EMPLOYEES_COUNT_SUCCESS:
      return {
        ...state,
        getEmployeesCountSuccess: true,
        getEmployeesCountRequest: false,
        getEmployeesCountFailure: false,
        employeesCount: action.payload,
      };
    case actions.GET_EMPLOYEES_COUNT_FAILURE:
      return {
        ...state,
        getEmployeesCountFailure: true,
        getEmployeesCountSuccess: false,
        getEmployeesCountRequest: false,
      };
    default:
      return state;
  }
}
