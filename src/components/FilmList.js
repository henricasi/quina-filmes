import React, { Component } from 'react';
import FilmListItem from './FilmListItem';

import filmesData from '../data/filmes';
import colabsData from '../data/colabs';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    const {path} = this.props.match;
    if (path === "/filmes") {
      this.setState({
        films: filmesData
      })
    } else if (path === "/colabs") {
      this.setState({
        films: colabsData
      })
    }
  }

  render() {
    return (
      <div className="list">        
        {this.state.films.map((film, index) => {
          return (
            <FilmListItem film={film} key={index}/>
          )
        })}
      </div>
    )
  }
}

export default FilmList;
