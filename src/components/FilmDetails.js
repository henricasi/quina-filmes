import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
    }
    this.renderGoBackLink = this.renderGoBackLink.bind(this);
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

  renderGoBackLink() {
    let goBack;
    const {path} = this.props.match;
    
    if (path === "/filmes/:url") {
      goBack = "/filmes"
    } else if (path === "/colabs/:url") {
      goBack = "/colabs"
    }

    return goBack;
  }


  render() {
    const {title, year, duration, summary, format, support, crew, images, video} = this.state.film
    return (
      <div className="details-page">
        <div className="video-container" dangerouslySetInnerHTML={{ __html: video }}>
        </div>
        <div className="details-content">
          <div className="details-content-text">
            <Link to={this.renderGoBackLink} className="back-link">← voltar</Link>
            <h3>{title} <span className="year-duration">({year}, {duration}')</span></h3>
            <p className="summary">{summary}</p>
            <div className="crew">
              {crew && crew.map((item, idx) => {
                return <p key={idx} className="crew-item"><span className="crew-title">{item.name}</span><br/>{item.content}</p>
              })}
            </div>
          </div>
          <div className="details-content-images">
            {images && images.map((item, idx) => {
              return <a key={idx} href={item.full} className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img"/></a>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FilmDetails;
