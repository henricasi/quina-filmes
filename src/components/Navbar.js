import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from './useWindowDimensions'


const Navbar = ({changeBackground, posX, posY, handleChange}) => {
  //get location
  const location = useLocation();
  const {pathname} = location;
  const {width} = useWindowDimensions();

  const [menuDisplay, setMenuDisplay] = useState("none");
  const initialPadding = width < 640 ? "50" : "0";
  const [navPadding, setNavPadding] = useState(initialPadding);


  const getClassName = () => {
    if (width < 640) {
      if (pathname === "/") {return "nav"} else {return "nav inactive"}
    }
    return "nav"
  }

  const handleOpacityChange = () => {
    if (menuDisplay === "none") {
      setMenuDisplay("block");
    } else {
      setMenuDisplay("none");
    }
  }

  const handlePaddingChange = (e) => {
    const {value} = e.target;
    setNavPadding(value);
  }

  
  return (
    <nav className={getClassName()} style={{paddingTop: navPadding + "%"}}>
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
              <NavLink to="/sobre">quina filmes</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contato">contato</NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-menu" style={{display: menuDisplay}}>
          <div className="bg-selector" style={{display: "flex", justifyContent: "space-between"}}>
            <button onClick={() => changeBackground(1)}>1</button>
            <button onClick={() => changeBackground(2)}>2</button>
            <button onClick={() => changeBackground(3)}>3</button>
            <button onClick={() => changeBackground(4)}>4</button>
            <button onClick={() => changeBackground(5)}>5</button>
            <button onClick={() => changeBackground(6)}>6</button>
            <button onClick={() => changeBackground(7)}>7</button>
            {/* <button onClick={() => changeBackground(8)}>8</button> */}
          </div>
          <div className="bg-pos mt-4">
            {width < 1025 && <><div className="pos-range">
              <input type="range" min="0" max="100" name="padding" value={navPadding} onChange={handlePaddingChange}/>
              <p>{navPadding}%</p>
            </div>
            <div className="pos-range">
              <input type="range" min="0" max="100" name="bg-pos-x" value={posX} onChange={handleChange}/>
              <p>{posX}%</p>
            </div></>}
            <div className="pos-range">
              <input type="range" min="0" max="100" name="bg-pos-y" value={posY} onChange={handleChange}/>
              <p>{posY}%</p>
            </div>
          </div>
        </div>
        <button className="menu-toggler" onClick={handleOpacityChange}>show/hide</button>
      </div>
    </nav>
  )
}

export default Navbar;
