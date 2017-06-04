import React from 'react';
import Button from './Button';

const Dashboard = props => (
  <div className="dashboard">
    <div className="dashboard__header">
      <Button appearance="secondary" title="Cadastrar novo carro" label="Novo Carro" url="create" />
    </div>
  </div>
);

export default Dashboard;
