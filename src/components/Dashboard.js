import React from 'react';
import Button from './Button';
import Field from './Field';

const Dashboard = props => (
  <div className="dashboard">
    <div className="dashboard__header">
      <Button appearance="secondary" title="Cadastrar novo carro" label="Novo Carro" url="create" />

      <div classNames="dashboard__search">
        <Field placeholder="Pesquisar" />
      </div>
    </div>
  </div>
);

export default Dashboard;
