import React from 'react';
import PropTypes from 'prop-types';

const Field = ({name, label, onInput, placeholder, type }) => (
  <div className="field">
    {label ? (<label className="field__label">{label}</label>) : ''}
    <input className="field__input" name={name} onInput={onInput} placeholder={placeholder} type={type} />
  </div>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([ 'text', 'search', 'number' ]),
};

Field.defaultProps = {
  onInput: undefined,
  placeholder: '',
  type: 'text',
};

export default Field;
