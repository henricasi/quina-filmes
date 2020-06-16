import React, { Component } from 'react';
import Player from '@vimeo/player';
import {Link} from 'react-router-dom';
import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      player: {}
    }
    this.vimeoiframe = React.createRef();
    this.renderGoBackLink = this.renderGoBackLink.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  componentDidMount() {
    // display correct film
    const {path} = this.props.match;
    const {url} = this.props.match.params;
    let foundFilm;

    if (path === "/filmes/:url") {
      foundFilm = filmesData.find(filme => filme.url === url);
    } else if (path === "/colabs/:url") {
      foundFilm = colabsData.find(filme => filme.url === url);
    }
    
    this.setState({
      film: foundFilm,
    })

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

  pauseVideo() {

  }


  render() {
    const {title, year, duration, format, support, summary, cast, crew, festivals, reviews, images, video} = this.state.film
    return (
      <article className="details-page">
        <section id="video-container" dangerouslySetInnerHTML={{ __html: video }}>

        </section>
        <div className="details-content">
          {/* seção 1*/}
          <section className="details-section">
            <div className="details-content-text">
              <Link to={this.renderGoBackLink} className="back-link">← voltar</Link>
              <h3 className="title">{title}</h3>
              <p className="year-duration">{year}, {format}, {support} {duration && `, ${duration}'`}</p>
              <div className="details-margin">
                <h5 className="details-section-header">sinopse</h5>
                <p>{summary}</p>
              </div>
              {cast && <div className="details-margin">
                <h5 className="details-section-header">elenco</h5>
                <p>{cast}</p>
              </div>}
              <div className="details-margin">
                <h5 className="details-section-header">ficha técnica</h5>
                <div className="crew">
                  {crew && crew.map((item, idx) => {
                    return(item.name === "" ? <p key={idx} className="crew-item">{item.content}</p> : <p key={idx} className="crew-item"><strong className="crew-title">{item.name}</strong><br/>{item.content}</p>)
                  })}
                </div>
              </div>
            </div>

            <div className="gallery">
              {images && images.gallery1.map((item, idx) => {
                return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img"/></a>
              })}
            </div>
          </section>

          {/* seção 2*/}
          {festivals && <section className="details-section">
            <div className="details-content-text">
              {festivals && <div className="details-margin">
                <h5 className="details-section-header">festivais e prêmios</h5>
                <ul className="festivals-list">
                  {festivals.map((item, idx) => {
                    return <li key={idx} className="festivals-list-item">- {item}</li>
                  })}
                </ul>
              </div>}
            </div>

            <div className="gallery">
              {images.gallery2 && images.gallery2.map((item, idx) => {
                return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img"/></a>
              })}
            </div>
          </section>}
          
          {/* seção 3*/}
          {reviews && <section className="details-section">
            <div className="details-content-text">
              {reviews && <div className="details-margin">
                <h5 className="details-section-header">fortuna crítica</h5>
                  {reviews.map((item, idx) => {
                    return <div key={idx} className="review">
                      <a href={item.link} className="review-link"><strong>{item.name}</strong>, por {item.author}</a>
                      <p className="review-content">{item.content}</p>
                    </div>
                  })}
              </div>}
            </div>

            <div className="gallery">
              {images.gallery3 && images.gallery3.map((item, idx) => {
                return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img"/></a>
              })}
            </div>
          </section>}

        </div>
      </article>
    )
  }
}

export default FilmDetails;
