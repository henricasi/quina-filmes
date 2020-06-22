import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Empty from './components/Empty'
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import About from './components/About'
import Contact from './components/Contact'
import VideoBackground from './components/VideoBackground'
import useWindowDimensions from './components/useWindowDimensions'

import './App.css';

const App = () => {
  const {width} = useWindowDimensions();

  return (
    <div className="container-fluid main">
      <VideoBackground></VideoBackground>
      <Navbar></Navbar>
      <main className="content">
        <Switch>
          <Route exact path="/" component={Empty}/>
          <Route exact path="/filmes" render={(props) => <FilmList {...props} whichList="filmes" width={width} />} />
          <Route path="/filmes/:url" component={FilmDetails} />
          <Route exact path="/colabs" render={(props) => <FilmList {...props} whichList="colabs" width={width} />} />
          <Route path="/colabs/:url" component={FilmDetails} />
          <Route path="/sobre" render={(props) => <About {...props} width={width} />} />
          <Route path="/contato" render={(props) => <Contact {...props} width={width} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
