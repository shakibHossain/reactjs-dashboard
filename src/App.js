import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import ProtectedRoute from "./components/protected-route/protected-route.component";

import ViewEmployeesPage from "./pages/view-employees/view-employees.page";

function App({ isAuthenticated, isVerifying }) {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={HomePage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/viewemployees"
          component={ViewEmployeesPage}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);
