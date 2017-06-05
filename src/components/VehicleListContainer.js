import React, { Component } from 'react';
import VehicleList from './VehicleList';
import firebaseDatabase from '../utils/firebase/database';

const mockedData = [
  {
    combustivel: 'Flex',
    marca: 'Volkswagem',
    modelo: 'Gol',
    placa: 'FFF-5498',
    valor: '20000'
  },
  {
    combustivel: 'Gasolina',
    marca: 'Volkswagem',
    modelo: 'Fox',
    placa: 'FOX-4125',
    valor: '20000'
  },
  {
    combustivel: 'Alcool',
    imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
    marca: 'Volkswagen',
    modelo: 'Fusca',
    placa: 'PAI-4121',
    valor: '20000'
  }
]

class VehicleListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };
  }

  componentWillMount() {
    this.initFirebaseRealtime();
  }

  initFirebaseRealtime() {
    this.realtime = firebaseDatabase('vehicles');

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
    this.setState({vehicles});
  }

  updateVehicle(key, vehicle) {
    const { vehicles } = this.state;

    const currentVehicles = vehicles.map(item => {
      if (item.key === key) {
        item = vehicle
      }

      return item
    })

    this.setState({vehicles: currentVehicles});
  }

  removeVehicle(key) {
    const { vehicles } = this.state;
    const currentVehicles = vehicles.filter(vehicle => vehicle.key !== key)

    this.setState({vehicles: currentVehicles});
  }

  search(e) {
    console.log(e.target.name, e.target.value);
  }

  render() {
    const { vehicles } = this.state;

    return <VehicleList
        onSearch={this.search.bind()}
        data={vehicles}
      />
  }
}

export default VehicleListContainer;
