import React from 'react';
import PropTypes from 'prop-types';
import { isUri } from 'valid-url';
import formatCurrency from '../utils/format-currency';

/**
 * Table helpers
 */
const getImageAnchor = (value) => isUri(value) ?
  (<a href={value} target="_blank" rel="noopener noreferrer">Imagem</a>)
  : value || 'Sem foto';

const formatValue = {
  checkbox: (value) => value,
  currency: formatCurrency,
  image: getImageAnchor,
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
 * Table
 * @param {[type]} data [description]
 */
const TableVehicles = ({ data }) => {
  return (
    <div className="table-vehicles">
      <div className="table-vehicles__container">
        <div className="table-vehicles__row table-vehicles__row--header">
          <TableVehiclesCell type="checkbox"/>
          <TableVehiclesCell value="Placa" />
          <TableVehiclesCell value="Modelo" />
          <TableVehiclesCell value="Marca" />
          <TableVehiclesCell value="Foto" />
          <TableVehiclesCell value="Combustível" />
          <TableVehiclesCell value="Valor" />
        </div>

        {
          data.map(data => (
            <div className="table-vehicles__row" key={data.placa}>
              <TableVehiclesCell type="checkbox"/>
              <TableVehiclesCell value={data.placa} />
              <TableVehiclesCell value={data.modelo} />
              <TableVehiclesCell value={data.marca} />
              <TableVehiclesCell value={data.imagem} type="image" />
              <TableVehiclesCell value={data.combustivel} />
              <TableVehiclesCell value={data.valor} type="currency" />
            </div>
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
