import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import TopNav from "./components/TopNav";

class App extends Component {
  state = {
    user: {}
  };

  // should set the user based on who logs in
  setUser() {}

  render() {
    return (
      <div>
        <Router>
          <div>
            <TopNav />
            <Route
              path="/"
              exact
              render={() => <Home setUser={this.setUser} />}
            />
            <Route path="/chat/" component={Chat} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
