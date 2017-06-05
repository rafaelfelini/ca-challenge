import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Field from './Field';
import Selector from './Selector';

const VehiclesForm = ({ onValueChange, onSubmit }) => (
  <div className="vehicle-form">
    <div className="vehicle-form__header">
      <Button appearance="secondary" title="Voltar para listagem" label="Listagem" url="/vehicles" />
    </div>

    <form className="vehicle-form__form" onSubmit={(e) => onSubmit(e)}>
      <div className="vehicle-form__fieldset">
        <Field onInput={onValueChange} name="placa" label="Placa" placeholder="AAA000" required/>
        <Field onInput={onValueChange} name="marca" label="Marca" placeholder="Marca do veículo" required/>
        <Field onInput={onValueChange} name="modelo" label="Modelo" placeholder="Modeo do veículo" required/>
      </div>
      <div className="vehicle-form__fieldset">
        <Field onInput={onValueChange} name="imagem" label="Foto" placeholder="Insira a URL"/>
        <Selector onChange={onValueChange} name="combustivel" items={['Flex', 'Alcool', 'Gasolina', 'Energia elétrica']} label="Combustível" required/>
        <Field onInput={onValueChange} name="valor" label="Valor" placeholder="00.000,00" required/>
      </div>
      <div className="vehicle-form__fieldset vehicle-form__fieldset--controls">
        <Button type="submit" label="Cadastrar" />
      </div>
    </form>
  </div>
);

VehiclesForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default VehiclesForm;
