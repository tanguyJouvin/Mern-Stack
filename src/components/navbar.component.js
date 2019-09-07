import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Agenda de la Forme</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercices</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Création d'un journal d'exercice</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Création d'un nouvel utilisateur</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}