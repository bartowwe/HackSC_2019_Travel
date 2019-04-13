import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
