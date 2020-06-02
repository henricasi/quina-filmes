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
      {/* //TODO inserir div video, div blur */}
      <div className="menu">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Empty}/>
          <Route exact path="/filmes" render={(props) => <FilmList {...props} whichList="filmes" />} />
          <Route path="/filmes/:title" component={FilmDetails} />
          <Route exact path="/colabs" render={(props) => <FilmList {...props} whichList="colabs" />} />
          <Route path="/colabs/:title" component={FilmDetails} />
          <Route path="/sobre" component={About} />
          <Route path="/contato" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
