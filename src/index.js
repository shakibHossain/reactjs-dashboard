import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { verifyAuth } from "./redux/actions/auth.actions";

import App from "./App";
import rootReducer from "./redux/reducers";

import "./index.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
// The line below is executed when the app starts up and also on page refresh
// verifyAuth() is executed initially to check if a user session exists
// If a session is found, it will redirect to secure app area without showing login page
store.dispatch(verifyAuth());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
