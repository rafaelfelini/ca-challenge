import React from 'react';
import PropTypes from 'prop-types';
import { isUri } from 'valid-url';
import formatCurrency from '../utils/format-currency';

/**
 * Table helpers
 */
const getUrl = (value) => isUri(value) ?
  (<a href={value} target="_blank" rel="noopener noreferrer">Imagem</a>)
  : value;

const formatValue = {
  checkbox: (value) => value,
  currency: formatCurrency,
  image: getUrl,
  text: (value) => value,
}

/**
 * Table cell
 */
const TableVehiclesCell = ({ value, type }) => {
  return (
    <div className="table-vehicles__cell">
      {formatValue[type](value)}
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
    <TableVehiclesCell value={props.imagem} type="image" />
    <TableVehiclesCell value={props.combustivel} />
    <TableVehiclesCell value={props.valor} type="currency" />
  </TableVehiclesRow>
);

TableVehiclesBodyRow.propTypes = {
  placa: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  imagem: PropTypes.string,
  combustivel: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
};

TableVehiclesBodyRow.defaultProps = {
  imagem: 'Sem imagem',
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
            <TableVehiclesBodyRow key={data.placa} {...data} />
          ))
        }
      </div>
    </div>
  );
};

TableVehicles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    placa: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    imagem: PropTypes.string,
    combustivel: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
  })),
}

TableVehicles.defaultProps = {
  data: [],
}

export default TableVehicles;
