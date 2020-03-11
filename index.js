import React, { Component } from "react";
import { render } from "react-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./style.css";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
      userName: ""
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin(userName) {
    this.setState({
      userName: userName,
      userLoggedIn: true
    });
  }

  onLogout() {
    this.setState({
      userName: "",
      userLoggedIn: false
    });
  }

  render() {
    return (
      <div className="w3-container w3-padding">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route
              exact
              path="/home"
              render={() =>
                this.state.userLoggedIn ? (
                  <Dashboard username={this.state.userName} onLogout={this.onLogout}/>
                ) : (
                  <Login onLogin={this.onLogin} />
                )
              }
            />
            <Route
              render={() => (
                <div>
                  <h2 className="w3-margin w3-text-red w3-pale-red w3-center w3-round w3-border w3-border-red w3-padding-small w3-xlarge">
                    404 - Not Found
                  </h2>
                  <NavLink className="w3-block w3-center w3-text-blue" to="/home">Go Home</NavLink>
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
