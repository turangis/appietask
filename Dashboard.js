import React, { Component } from "react";
import { Mock } from "./mockData";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { user: [] }
    };
  }

  componentDidMount() {
    let data = Mock.dashboard;
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="w3-padding-large w3-padding-16 w3-card-2 w3-round w3-white">
        <h3 className="w3-center w3-text-dark-grey">Dashboard</h3>
        <p className="w3-block w3-round">Welcome {this.props.username}
          <button className="w3-btn w3-deep-orange w3-round w3-right" onClick={this.props.onLogout}>Logout</button>
        </p>
        <br />
        <div className="w3-responsive w3-border changeScroll">
          <table className="w3-table-all w3-border-0">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {this.state.data.user.map(d => {
              return (
                <tr className="">
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>{d.gender}</td>
                  <td>{d.email}</td>
                  <td>{d.phoneNo}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
