import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Empty from './components/Empty'
import FilmList from './components/FilmList'
import FilmDetails from './components/FilmDetails'
import About from './components/About'
import Contact from './components/Contact'
import VideoBackground from './components/VideoBackground'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   videoBGClass: 'bg-focus'
    // }
    // this.videoRef = React.createRef();
  }




  componentDidMount() {

    // const videoBG = this.videoRef.current;

    // if (path === "/") {
    //   videoBG.classList.add('bg-focus');
    //   console.log('path is /');
    // } else {
    //   videoBG.classList.remove('bg-focus');
    //   console.log('path is not /');
    // }
  }

  render() {
    return (
      <div className="container-fluid main">
        <VideoBackground></VideoBackground>
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
}

export default App;
