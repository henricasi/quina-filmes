import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="nav">
        <div className="logo-container">
          <NavLink to="/">
            <img src="/img/logo_250.png" alt="Quina Filmes" id="logo-image"/>
          </NavLink>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/filmes">filmes</NavLink>
            </li>
            <li>
              <NavLink to="/colabs">colaborações</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">a quina</NavLink>
            </li>
            <li>
              <NavLink to="/contato">contato</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
