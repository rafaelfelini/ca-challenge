import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import TableVehicles from './TableVehicles';

const Dashboard = props => (
  <section className="dashboard">
    <div className="dashboard__header">
      <Button appearance="secondary" title="Cadastrar novo carro" label="Novo Carro" url="create" />

      <form className="dashboard__search" onSubmit={props.onSearch}>
        <Field name="search" placeholder="Pesquisar" onInput={props.onSearch} />
      </form>
    </div>

    <main>
      <TableVehicles data={props.data} />
    </main>
  </section>
);

Dashboard.propTypes = {
  onSearch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}

export default Dashboard;
