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
const VehiclesTableCell = ({ value, type }) => {
  return (
    <div className="vehicles-table__cell">
      {formatValue[type](value)}
    </div>
  );
};

VehiclesTableCell.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf([ 'text', 'image', 'checkbox', 'currency' ]),
};

VehiclesTableCell.defaultProps = {
  value: '',
  type: 'text',
}

/**
 * Table
 * @param {[type]} data [description]
 */
const VehiclesTable = ({ data }) => {
  return (
    <div className="vehicles-table">
      <div className="vehicles-table__container">
        <div className="vehicles-table__row table-vehicles__row--header">
          <VehiclesTableCell type="checkbox"/>
          <VehiclesTableCell value="Placa" />
          <VehiclesTableCell value="Modelo" />
          <VehiclesTableCell value="Marca" />
          <VehiclesTableCell value="Foto" />
          <VehiclesTableCell value="Combustível" />
          <VehiclesTableCell value="Valor" />
        </div>

        {
          data.map(data => (
            <div className="vehicles-table__row" key={data.key}>
              <VehiclesTableCell type="checkbox"/>
              <VehiclesTableCell value={data.placa} />
              <VehiclesTableCell value={data.modelo} />
              <VehiclesTableCell value={data.marca} />
              <VehiclesTableCell value={data.imagem} type="image" />
              <VehiclesTableCell value={data.combustivel} />
              <VehiclesTableCell value={data.valor} type="currency" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

VehiclesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    placa: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    imagem: PropTypes.string,
    combustivel: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
  })),
}

VehiclesTable.defaultProps = {
  data: [],
}

export default VehiclesTable;
