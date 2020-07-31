import React from 'react';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from './useWindowDimensions'


const Navbar = (props) => {
  //get location
  const location = useLocation();
  const {pathname} = location;
  const {width} = useWindowDimensions();


  const getClassName = () => {
    if (width < 640) {
      if (pathname === "/") {return "nav"} else {return "nav inactive"}
    }
    return "nav"
  }

  
  return (
    <nav className={getClassName()}>
      <div className="nav-collapse">
        <div className="logo-container">
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
              <NavLink to="/sobre">quina</NavLink>
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
