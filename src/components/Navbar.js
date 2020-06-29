import React from 'react';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from './useWindowDimensions'


const Navbar = () => {
  //get location
  const location = useLocation();
  const {pathname} = location;


  const {width} = useWindowDimensions();

  const getClassName = () => pathname === "/" && width < 1025 ? "nav" : "nav inactive"

  return (
    <nav className={getClassName()}>
      <NavLink to="/" id="logo-image-mobile">
        <img src="/img/logo_transp_white_500_FULL.png" alt="Quina Filmes"/>
      </NavLink>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <div className="nav-collapse">
        <div className="logo-container desktop-only">
          <NavLink to="/">
            <img src="/img/logo_transp_white_500_FULL.png" alt="Quina Filmes" id="logo-image"/>
          </NavLink>
        </div>
        <div className="nav-links">
          <ul>
            <li className="nav-link">
              <NavLink to="/filmes">filmes</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/colabs">colaborações</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/sobre">a quina</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contato">contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
