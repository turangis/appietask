import React, { Component } from "react";
import { Mock } from "./mockData";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      fieldsBlank: true
    };
    this.validate = this.validate.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  checkFields() {
    if (
      this.refs.username.value.trim() !== "" &&
      this.refs.password.value.trim() !== ""
    ) {
      this.setState({
        fieldsBlank: false
      });
    } else {
      this.setState({
        fieldsBlank: true
      });
    }
  }

  validate() {
    this.setState({
      errorMessage: ""
    });
    let uname = this.refs.username.value.trim().toUpperCase();
    let pword = this.refs.password.value;
    if (
      Mock.login.username.toUpperCase() === uname &&
      Mock.login.password === pword
    ) {
      this.props.onLogin(this.refs.username.value);
    } else {
      setTimeout(() => {
        this.setState({
          errorMessage: "Credentials not valid."
        });
      }, 200);
    }
  }

  render() {
    return (
      <div className="w3-padding-large w3-padding-24 w3-white w3-card-2 w3-round">
        <h3 className="w3-center w3-text-dark-grey">User Login</h3>
        <input
          type="text"
          className="w3-input w3-margin-top"
          placeholder="Username"
          ref="username"
          onChange={this.checkFields}
        />
        <input
          type="password"
          className="w3-input w3-margin-top"
          placeholder="Password"
          ref="password"
          onChange={this.checkFields}
        />
        <button
          className="w3-btn w3-green w3-block w3-margin-top w3-round"
          onClick={this.validate}
          disabled={this.state.fieldsBlank}
        >
          Login
        </button>
        {this.state.errorMessage !== "" && (
          <div className="w3-pale-red w3-border w3-border-red w3-round w3-padding w3-text-red w3-animate-zoom w3-margin-top">
            {" "}
            {this.state.errorMessage}
          </div>
        )}
      </div>
    );
  }
}
