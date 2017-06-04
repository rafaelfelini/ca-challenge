import React from 'react';
import logo from '../img/logo.svg'

const Header = () => (
  <header className="header">
    <div className="header__container">
      <img src={logo} alt="Conta Azul" width="110" />
    </div>
  </header>
);

export default Header;
