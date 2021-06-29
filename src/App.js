import React, { Component } from "react";
import "./App.css";
import { Home, Temperature } from "./components";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperatures" component={Temperature} />
        </Switch>
      </main>
    );
  }
}

export default App;
