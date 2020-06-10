import React, { Component } from 'react';

import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    }
  }

  componentDidMount() {
    const {path} = this.props.match;
    const {url} = this.props.match.params;
    let foundFilm;

    if (path === "/filmes/:url") {
      foundFilm = filmesData.find(filme => filme.url === url);
      this.setState({
        film: foundFilm
      })
    } else if (path === "/colabs/:url") {
      foundFilm = colabsData.find(filme => filme.url === url);
      this.setState({
        film: foundFilm
      })
    }
  }

  render() {
    const {title, year, duration, summary, format, support, director} = this.state.film
    return (
      <div className="details-page">
        <div className="video-container">

        </div>
        <div className="details-content">
          <h3>{title} <span className="year-duration">({year}, {duration}')</span></h3>
          <h4>Sinopse</h4>
          <p className="details-text">{summary}</p>

        </div>
      </div>
    )
  }
}

export default FilmDetails;
