import React, { Component } from 'react';
import VehicleList from './VehicleList';

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
  search(e) {
    console.log(e.target.name, e.target.value);
  }

  render() {
    return <VehicleList
        onSearch={this.search.bind()}
        data={mockedData}
      />
  }
}

export default VehicleListContainer;
