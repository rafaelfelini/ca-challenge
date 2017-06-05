import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import VehiclesTable from './VehiclesTable';

const VehicleList = props => (
  <section className="vehicle-list">
    <div className="vehicle-list__header">
      <Button appearance="secondary" title="Cadastrar novo carro" label="Novo Carro" url="create" />

      <form className="vehicle-list__search" onSubmit={props.onSearch}>
        <Field name="search" placeholder="Pesquisar" onInput={props.onSearch} />
      </form>
    </div>

    <main>
      <VehiclesTable data={props.data} />
    </main>
  </section>
);

VehicleList.propTypes = {
  onSearch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}

export default VehicleList;
