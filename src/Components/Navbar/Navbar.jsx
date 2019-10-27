import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-container">
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-item-link" to="/">
          Apresentação
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
    <footer className="navbar-footer">
      <a
        href="https://github.com/lucasratske/ratzapps-website"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-footer-link"
      >
        &copy; Lucas Ratske - Github
      </a>
    </footer>
  </nav>
);

export default Navbar;
