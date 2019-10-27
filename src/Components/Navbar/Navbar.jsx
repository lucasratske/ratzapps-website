import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar-container">
    <ul className="navbar">
      <li className="navbar-item">
        <a className="navbar-item-link" href="#">
          Resumo
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-item-link" href="#">
          Quem sou eu
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-item-link" href="#">
          Portfólio
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-item-link" href="#">
          Contato
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;
