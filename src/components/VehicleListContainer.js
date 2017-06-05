import React, { Component } from 'react';
import firebase from 'firebase';
import VehicleList from './VehicleList';
import firebaseDatabase from '../utils/firebase/database';

class VehicleListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      visibleVehicles: [],
    };
  }

  componentWillMount() {
    this.initFirebaseRealtime();
  }

  componentWillUnmount() {
    this.realtime.off();
  }

  initFirebaseRealtime() {
    this.realtime = firebase.database().ref('vehicles');

    this.realtime.ref.on('child_changed', (ref) => {
      this.updateVehicle(ref.key, ref.val());
    });

    this.realtime.ref.on('child_removed', (ref) => {
      this.removeVehicle(ref.key, ref.val());
    });

    this.realtime.ref.on('child_added', (ref) => {
      this.addVehicle(ref.key, ref.val());
    });
  }

  addVehicle(key, vehicle) {
    const { vehicles } = this.state;

    vehicle.key = key;
    vehicles.push(vehicle);
    this.setState({
      vehicles,
      visibleVehicles: vehicles,
    });
  }

  updateVehicle(key, vehicle) {
    const { vehicles } = this.state;

    const currentVehicles = vehicles.map(item => {
      if (item.key === key) {
        item = vehicle
      }

      return item
    })

    this.setState({
      vehicles: currentVehicles,
      visibleVehicles: currentVehicles,
    });
  }

  removeVehicle(key) {
    const { vehicles } = this.state;
    const currentVehicles = vehicles.filter(vehicle => vehicle.key !== key)

    this.setState({
      vehicles: currentVehicles,
      visibleVehicles: currentVehicles,
    });
  }

  filterVehicles(e) {
    const { vehicles } = this.state;
    const searchValue = e.target.value.toLocaleLowerCase();

    const currentVehicles = vehicles.filter(vehicle => {
      const combustivel = vehicle.combustivel.toLocaleLowerCase();
      const marca = vehicle.marca.toLocaleLowerCase();

      return combustivel.indexOf(searchValue) !== -1 ||marca.indexOf(searchValue) !== -1;
    });

    this.setState({
      visibleVehicles: currentVehicles
    });
  }

  render() {
    const { visibleVehicles } = this.state;

    return <VehicleList
        onSearch={this.filterVehicles.bind(this)}
        data={visibleVehicles}
      />
  }
}

export default VehicleListContainer;
