import React, { Component } from 'react';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
  search(e) {
    console.log(e.target.name, e.target.value);
  }

  render() {
    return <Dashboard onSearch={this.search.bind()} />
  }
}

export default DashboardContainer;
