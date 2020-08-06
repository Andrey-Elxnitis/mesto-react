import React from 'react';
import logo from '../images/logo.png';

function Header() {

  //возвращаем разметку шапки сайта
  return (
      <header className="header">
        <div className="header__logo" style={{backgroundImage: `url(${logo})`}}></div>
      </header>
    );
}

export default Header;