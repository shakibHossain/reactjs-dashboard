import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import employeeReducer from "./employee.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
});

export default rootReducer;
