import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import VehicleListContainer from './components/VehicleListContainer';
import VehicleCreateContainer from './components/VehicleCreateContainer';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <App>
      <Route path="/" component={VehicleListContainer} />
      <Route path="/creat" component={VehicleCreateContainer} />
    </App>
  </BrowserRouter>
);

export default Routes;
