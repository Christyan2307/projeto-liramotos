import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="header-nav">
      <Link to="/"><img className="logo" src="img/liramoto-removebg-preview.png" alt="La Brasa Logo" /></Link>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/oficina">Oficina</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
