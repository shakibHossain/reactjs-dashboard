import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
