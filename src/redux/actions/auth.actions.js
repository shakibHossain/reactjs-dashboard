import { myFirebase } from "../../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutFailure = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch(loginRequest());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      dispatch(loginFailure());
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(logoutRequest());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logoutSuccess());
    })
    .catch((error) => {
      dispatch(logoutFailure());
    });
};

/**
 * Looks for preexisting user session
 * and re-establishes it on page refresh.
 * @returns
 */
export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      // Logs a user back in if user is found in db
      dispatch(loginSuccess(user));
    }
    dispatch(verifySuccess());
  });
};
