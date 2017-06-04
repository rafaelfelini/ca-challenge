import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import DashboardContainer from './components/DashboardContainer';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <App>
      <Route path="/" component={DashboardContainer} />
    </App>
  </BrowserRouter>
);

export default Routes;
