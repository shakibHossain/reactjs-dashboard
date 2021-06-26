import * as actions from "../actions/auth.actions";

export const INITIAL_STATE = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoggingIn: false,
        user: action.user,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        loginError: true,
        isLoggingIn: false,
        isAuthenticated: false,
      };
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        logoutError: true,
        isLoggingOut: false,
      };
    case actions.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
      };
    case actions.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    default:
      return state;
  }
}
