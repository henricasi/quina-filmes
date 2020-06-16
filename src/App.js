import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Empty from './components/Empty'
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import About from './components/About'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <div className="container-fluid main">
      <video playsinline autoplay muted loop poster="/img/background.jpg" id="bgvid">
        <source src="polina.webm" type="video/webm"/>
        <source src="polina.mp4" type="video/mp4"/>
      </video>
      <Navbar></Navbar>
      <main className="content">
        <Switch>
          <Route exact path="/" component={Empty}/>
          <Route exact path="/filmes" render={(props) => <FilmList {...props} whichList="filmes" />} />
          <Route path="/filmes/:url" component={FilmDetails} />
          <Route exact path="/colabs" render={(props) => <FilmList {...props} whichList="colabs" />} />
          <Route path="/colabs/:url" component={FilmDetails} />
          <Route path="/sobre" component={About} />
          <Route path="/contato" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
