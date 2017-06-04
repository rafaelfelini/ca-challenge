import React, { Component } from 'react';
import logo from '../img/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <img src={logo} alt="Conta Azul" width="110" />
        </div>
      </header>
    );
  }
}

export default Header;
