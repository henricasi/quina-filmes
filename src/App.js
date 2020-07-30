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
import Background from './components/Background'
import useWindowDimensions from './components/useWindowDimensions'

import './App.css';

const routes = [
  {path: '/', Component: Empty, props: {}},
  {path: '/filmes', Component: FilmList, props: {whichList: "filmes"}},
  {path: '/filmes/:url', Component: FilmDetails, props: {}},
  {path: '/colabs', Component: FilmList, props: {whichList: "colabs"}},
  {path: '/colabs/:url', Component: FilmDetails, props: {}},
  {path: '/sobre', Component: About, props: {}},
  {path: '/contato', Component: Contact, props: {}},
];


const App = () => {
  const {width} = useWindowDimensions();
  const mainContainer = useRef(null);

  const [bgHasLoaded, setBgHasLoaded] = useState(false);
  
  const { pathname } = useLocation();
  
  let history = useHistory();
  
  
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    if (width < 640) {
      setTimeout(() => window.scrollTo(0, 0), 200);
    } else {
      setTimeout(() => mainContainer.current.scrollTo(0, 0), 200);
    }
  }, [width, pathname]);

  return (
    <div className="container-fluid main">
      <CSSTransition in={!bgHasLoaded} timeout={200} classNames="page" unmountOnExit>
        <div className="loader main-loader">
          <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
        </div>
      </CSSTransition>
      <Background setBgHasLoaded={setBgHasLoaded} pathname={pathname} ></Background>
      <Navbar></Navbar>
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
