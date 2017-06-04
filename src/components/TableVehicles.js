import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../utils/format-currency';

/**
 * Table cell
 */
const TableVehiclesCell = ({ value, type }) => {

  const formatCellData = {
    checkbox: (value) => value,
    currency: (value) => formatCurrency(value),
    image: (value) => value,
    text: (value) => value,
  }

  return (
    <div className="table-vehicles__cell">
      {formatCellData[type](value)}
    </div>
  );
};

TableVehiclesCell.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf([ 'text', 'image', 'checkbox', 'currency' ]),
};

TableVehiclesCell.defaultProps = {
  value: '',
  type: 'text',
}

/**
 * Table row
 */
const TableVehiclesRow = ({ children, modifier }) => (
  <div className={'table-vehicles__row' + (modifier ? ` table-vehicles__row--${modifier}` : '')}>
    {children}
  </div>
);

TableVehiclesRow.propTypes = {
  modifier: PropTypes.string,
};

TableVehiclesRow.defaultProps = {
  modifier: undefined,
}

/**
 * Table body row
 */
const TableVehiclesBodyRow = (props) => (
  <TableVehiclesRow>
    <TableVehiclesCell type="checkbox"/>
    <TableVehiclesCell value={props.placa} />
    <TableVehiclesCell value={props.modelo} />
    <TableVehiclesCell value={props.marca} />
    <TableVehiclesCell value={props.foto} type="image" />
    <TableVehiclesCell value={props.combustivel} />
    <TableVehiclesCell value={props.valor} type="currency" />
  </TableVehiclesRow>
);

TableVehiclesBodyRow.propTypes = {
  placa: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  foto: PropTypes.string,
  combustivel: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
};

TableVehiclesBodyRow.defaultProps = {
  foto: 'Sem foto',
};

/**
 * Table
 * @param {[type]} data [description]
 */
const TableVehicles = ({ data }) => {
  return (
    <div className="table-vehicles">
      <div className="table-vehicles__container">
        <TableVehiclesRow modifier="header">
          <TableVehiclesCell type="checkbox"/>
          <TableVehiclesCell value="Placa" />
          <TableVehiclesCell value="Modelo" />
          <TableVehiclesCell value="Marca" />
          <TableVehiclesCell value="Foto" />
          <TableVehiclesCell value="Combustível" />
          <TableVehiclesCell value="Valor" />
        </TableVehiclesRow>

        {

          data.map(data => (
            <TableVehiclesBodyRow {...data} />
          ))
        }
      </div>
    </div>
  );
};

export default TableVehicles;
