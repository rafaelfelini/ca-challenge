import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-header">
          <img src={logo} className="Dashboard-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Dashboard-intro">
          To get started, edit <code>src/container/Dashboard.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dashboard;
