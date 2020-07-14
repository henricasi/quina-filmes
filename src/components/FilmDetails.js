import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';
import GoBack from './GoBack';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      player: {},
      numberOfImages: 0,
      counter: 0,
      imagesHaveLoaded: false
    }
    this.pauseVideo = this.pauseVideo.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
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

    const {images, video} = foundFilm;
    let numberOfImages = 0;
    if (images.gallery1) {numberOfImages += images.gallery1.length};
    if (images.gallery2) {numberOfImages += images.gallery2.length};
    if (images.gallery3) {numberOfImages += images.gallery3.length};
    if (video === "") {numberOfImages += 1}
    
    this.setState({
      film: foundFilm,
      numberOfImages: numberOfImages
    })

  }

  pauseVideo() {

  }

  imageLoaded() {
    let {counter, numberOfImages} = this.state;

    let newCounter = counter + 1;

    if (newCounter === numberOfImages) {
      this.setState({
        counter: newCounter,
        imagesHaveLoaded: true
      })
    } else {
      this.setState({
        counter: newCounter,
      })
    }
  }


  render() {
    const {title, year, duration, format, support, summary, cast, crew, festivals, reviews, images, video} = this.state.film;
    const {imagesHaveLoaded} = this.state;
    return (
      <div className="page">
        <div className={imagesHaveLoaded ? "loader noshow" : "loader"}>
          <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
        </div>

        <article className={imagesHaveLoaded ? "details-page" : "details-page noshow"}>
          {/* <section id="video-container" dangerouslySetInnerHTML={{ __html: video }}> */}
          <section id="video-container">
            {video &&
              <>
              <div style={{backgroundColor: "black", padding: video.padding + "0 0 0", position: "relative"}}>
                <iframe title="vimeoiframe" src={`https://player.vimeo.com/video/${video.id}?autoplay=${this.props.width < 1025 ? 0 : 1}&title=0&byline=0&muted=${this.props.width < 1025 ? 0 : 1}`} style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
                </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js">
              </script>
              </>
            }
            {/* banner fallback */}
            {video === "" && <img src={images.gallery1[0].full} className="cover-image" onLoad={this.imageLoaded} alt={title + "Still"}></img>}
          </section>
          <div className="details-content">
            {/* seção 1*/}
            <section className="details-section">
              <div className="details-content-text">
                {this.props.width < 1025 && <GoBack></GoBack>}
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
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={this.imageLoaded}/></a>
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
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={this.imageLoaded}/></a>
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

              <div className="gallery gallery-less-margin">
                {images.gallery3 && images.gallery3.map((item, idx) => {
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={this.imageLoaded}/></a>
                })}
              </div>
            </section>}
          <GoBack></GoBack>
          </div>
        </article>
      </div>


    )
  }
}

export default FilmDetails;
