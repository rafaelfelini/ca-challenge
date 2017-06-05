import React from 'react';
import Button from './Button';
import Field from './Field';
import Selector from './Selector';

const VehiclesForm = ({ children }) => (
  <div className="vehicle-form">
    <div className="vehicle-form__header">
      <Button appearance="secondary" title="Voltar para listagem" label="Listagem" url="/vehicles" />
    </div>

    <form className="vehicle-form__form">
      <div className="vehicle-form__fieldset">
        <Field name="placa" label="Placa" placeholder="AAA000" required/>
        <Field name="marca" label="Marca" placeholder="Marca do veículo" required/>
        <Field name="modelo" label="Modelo" placeholder="Modeo do veículo" required/>
      </div>
      <div className="vehicle-form__fieldset">
        <Field name="foto" label="Foto" placeholder="http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg" required/>
        <Selector name="combustivel" items={['Flex', 'Alcool', 'Gasolina', 'Energia elétrica']} label="Combustível" required/>
        <Field name="valor" label="Valor" placeholder="00.000,00" required/>
      </div>
      <div className="vehicle-form__fieldset vehicle-form__fieldset--controls">
        <Button type="submit" label="Cadastrar" />
      </div>
    </form>
  </div>
);

export default VehiclesForm;
