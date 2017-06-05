import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import VehicleListContainer from './components/VehicleListContainer';
import VehicleFormContainer from './components/VehicleFormContainer';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <App>
      <Route exact path="/" component={VehicleListContainer} />
      <Route exact path="/vehicles" component={VehicleListContainer} />
      <Route exact path="/vehicles/create" component={VehicleFormContainer} />
    </App>
  </BrowserRouter>
);

export default Routes;
