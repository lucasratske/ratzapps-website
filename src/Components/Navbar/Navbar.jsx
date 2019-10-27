import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar-container">
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-item-link" to="/">
          Resumo
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-item-link" to="/who-am-i">
          Quem sou eu
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-item-link" to="/portfolio">
          Portfólio
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-item-link" to="/contact">
          Contato
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
