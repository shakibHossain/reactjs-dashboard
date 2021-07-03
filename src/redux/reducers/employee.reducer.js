import * as actions from "../actions/employee.actions";

export const initialState = {
  createEmployeeRequest: false,
  createEmployeeSuccess: false,
  createEmployeeFailure: false,
  employee: {},
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_EMPLOYEE_REQUEST:
      return { ...state, createEmployeeRequest: true };
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
      };
    default:
      return state;
  }
}
