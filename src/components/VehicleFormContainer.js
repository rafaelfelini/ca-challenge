import React, { Component } from 'react';
import VehiclesForm from './VehicleForm';

class VehiclesFormContainer extends Component {
  submit(e) {
    console.log(e.target.name, e.target.value);
  }

  render() {
    return <VehiclesForm onSubmit={this.submit.bind()} />
  }
}

export default VehiclesFormContainer;
