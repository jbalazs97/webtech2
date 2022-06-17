import React from "react";
import "./App.css";
import StorageApp from "./StorageApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import SignIn from "./SignIn";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/app" component={StorageApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
