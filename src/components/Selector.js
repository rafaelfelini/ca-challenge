import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({items, name, label, onChange }) => (
  <div className="selector">
    {label ? (<label className="selector__label">{label}</label>) : ''}
    <select className="selector__select" name={name} onChange={onChange}>
      {
        items.map(item => (
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
};

Selector.defaultProps = {
  onChange: undefined,
};

export default Selector;
