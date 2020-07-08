import React, {useRef, useEffect} from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Navbar from './components/Navbar'
import Empty from './components/Empty'
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import About from './components/About'
import Contact from './components/Contact'
import VideoBackground from './components/VideoBackground'
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

  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => mainContainer.current.scrollTo(0, 0), 200);
  }, [pathname]);

  return (
    <div className="container-fluid main">
      <VideoBackground></VideoBackground>
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
