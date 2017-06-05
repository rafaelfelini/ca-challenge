import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({items, name, label, onChange, required }) => (
  <div className="selector">
    {label ? (<label className="selector__label">{label}</label>) : ''}
    <select className="selector__select" name={name} onChange={onChange} required={required}>
      <option value=''>Selecione</option>
      {
        items.map((item, index) => (
          <option key={item} value={item}>{item}</option>
        ))
      }
    </select>
  </div>
);

Selector.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Selector.defaultProps = {
  onChange: undefined,
  required: false
};

export default Selector;
