import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav classname="nav">
        <NavLink to="/" id="logo-image-mobile">
          <img src="/img/logo_transp_white_500.png" alt="Quina Filmes"/>
        </NavLink>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <div className="nav-collapse">
          <div className="logo-container desktop-only">
            <NavLink to="/">
              <img src="/img/logo_transp_white_500.png" alt="Quina Filmes" id="logo-image"/>
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
        </div>
      </nav>
    )
  }
}

export default Navbar;
