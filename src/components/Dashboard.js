import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';

const Dashboard = props => (
  <div className="dashboard">
    <div className="dashboard__header">
      <Button appearance="secondary" title="Cadastrar novo carro" label="Novo Carro" url="create" />

      <form className="dashboard__search" onSubmit={props.onSearch}>
        <Field name="search" placeholder="Pesquisar" onInput={props.onSearch} />
      </form>
    </div>
  </div>
);

Dashboard.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Dashboard;
