import React, {useRef, useState, useEffect} from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Loader from 'react-loader-spinner';

import Navbar from './components/Navbar'
import Empty from './components/Empty'
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import About from './components/About'
import Contact from './components/Contact'
import VideoBackground from './components/VideoBackground'
import useWindowDimensions from './components/useWindowDimensions'


import './App.css';
import background1 from './background1.jpg'
import background2 from './background2.jpg'
import background3 from './background3.jpg'
import background4 from './background4.jpg'
import background5 from './background5.jpg'
import background6 from './background6.jpg'
import background7 from './background7.jpg'
import background8 from './background8.jpg'


const routes = [
  {path: '/', Component: Empty, props: {}},
  {path: '/filmes', Component: FilmList, props: {whichList: "filmes"}},
  {path: '/filmes/:url', Component: FilmDetails, props: {}},
  {path: '/colabs', Component: FilmList, props: {whichList: "colabs"}},
  {path: '/colabs/:url', Component: FilmDetails, props: {}},
  {path: '/sobre', Component: About, props: {}},
  {path: '/contato', Component: Contact, props: {}},
];

let backgroundSrc = background1;


const App = () => {
  const {width} = useWindowDimensions();
  const mainContainer = useRef(null);

  const [bgHasLoaded, setBgHasLoaded] = useState(false);
  const [posX, setPosX] = useState("69");
  const [posY, setPosY] = useState("50");
  
  const { pathname } = useLocation();
  let history = useHistory();
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    if (name === "bg-pos-y") {
      setPosY(value);
    } else {
      setPosX(value);
    }
  }

  const changeBackground = (num) => {
    let keys = {
      1: background1,
      2: background2,
      3: background3,
      4: background4,
      5: background5,
      6: background6,
      7: background7,
      8: background8,
    }
    backgroundSrc = keys[num];
    history.push('/')
  }
  
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    if (width < 1025) {
      setTimeout(() => window.scrollTo(0, 0), 200);
    } else {
      setTimeout(() => mainContainer.current.scrollTo(0, 0), 200);
    }
  }, [pathname]);

  return (
    <div className="container-fluid main">
      <CSSTransition in={!bgHasLoaded} timeout={200} classNames="page" unmountOnExit>
        <div className="loader main-loader">
          <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
        </div>
      </CSSTransition>
      <VideoBackground backgroundSrc={backgroundSrc} posX={posX} posY={posY} setBgHasLoaded={setBgHasLoaded}></VideoBackground>
      <Navbar changeBackground={changeBackground} posX={posX} posY={posY} handleChange={handleChange}></Navbar>
      <main className="content" ref={mainContainer}>
        {routes.map(({path, Component, props}) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={400}
                classNames="page"
                unmountOnExit
              >
                <Component {...props} width={width} match={match}/>
              </CSSTransition>
            )}
          </Route>
        ))}

        {/* <Switch>
          <Route exact path="/" component={Empty}/>
          <Route exact path="/filmes" render={(props) => <FilmList {...props} whichList="filmes" width={width} />} />
          <Route path="/filmes/:url" component={FilmDetails} />
          <Route exact path="/colabs" render={(props) => <FilmList {...props} whichList="colabs" width={width} />} />
          <Route path="/colabs/:url" component={FilmDetails} />
          <Route path="/sobre" render={(props) => <About {...props} width={width} />} />
          <Route path="/contato" render={(props) => <Contact {...props} width={width} />} />
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
