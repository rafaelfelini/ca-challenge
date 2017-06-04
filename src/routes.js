import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Dashboard from './containers/Dashboard';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <App>
      <Route path="/" component={Dashboard} />
    </App>
  </BrowserRouter>
);

export default Routes;
