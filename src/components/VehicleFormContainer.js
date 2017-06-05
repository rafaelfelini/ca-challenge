import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import VehiclesForm from './VehicleForm';

class VehiclesFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placa: '',
      marca: '',
      modelo: '',
      imagem: '',
      combustivel: '',
      valor: '',
      redirectToList: false,
    };
  }

  submit(e) {
    e.preventDefault();

    const {
      placa,
      marca,
      modelo,
      imagem,
      combustivel,
      valor,
    } = this.state;

    const realtime = firebase.database().ref();
    const vehicleKey = realtime.child('vehicles').push().key;
    const data = {}

    data[`vehicles/${vehicleKey}`] = {
      placa,
      marca,
      modelo,
      imagem,
      combustivel,
      valor,
    }

    realtime.update(data);

    realtime.off();

    this.setState({ redirectToList: true });
  }

  valueChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState({ state });
  }

  render() {
    const { redirectToList } = this.state;

    if (redirectToList) {
      return <Redirect to="/vehicles"/>;
    }

    return <VehiclesForm onValueChange={this.valueChange.bind(this)} onSubmit={this.submit.bind(this)} />;
  }
}

export default VehiclesFormContainer;
