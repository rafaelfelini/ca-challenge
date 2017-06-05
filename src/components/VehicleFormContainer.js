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

  componentWillUnmount() {
    this.realtime.off();
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

    this.realtime = firebase.database().ref();
    const vehicleKey = this.realtime.child('vehicles').push().key;
    const data = {}

    data[`vehicles/${vehicleKey}`] = {
      placa,
      marca,
      modelo,
      imagem,
      combustivel,
      valor,
    }
    this.realtime.update(data);

    this.setState({
      redirectToList: true,
    });
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
