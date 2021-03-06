import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';
import GoBack from './GoBack';
import Gallery from './Gallery';

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
    this.renderCrew = this.renderCrew.bind(this);
    // this.returnCrewList = this.returnCrewList.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  componentDidMount() {
    // display correct film
    const {path} = this.props.match;
    const {url} = this.props.match.params;
    let foundFilm;

    if (path === "/filmes/:url") {
      foundFilm = filmesData.find(filme => filme.url === url);
      foundFilm.filmType = "film";
    } else if (path === "/colabs/:url") {
      foundFilm = colabsData.find(filme => filme.url === url);
      foundFilm.filmType = "colab";
    }

    const {title, images, video, festivals, reviews} = foundFilm;
    let numberOfImages = 0;
    if (images.gallery1) {numberOfImages += images.gallery1.data.length};
    if (images.gallery2 && festivals) {numberOfImages += images.gallery2.data.length};
    if (images.gallery3 && reviews) {numberOfImages += images.gallery3.data.length};
    if (video.id === "") {numberOfImages += 1}

    if (this.props.width > 1025 && video.padding === "75%") {video.padding = "56.25%"}
    
    document.title = title + " - Quina filmes"

    this.setState({
      film: foundFilm,
      numberOfImages: numberOfImages
    })

  }

  renderCrew() {
    const {crew} = this.state.film;
    
    // LEGACY: renderiza ficha técnica não-condensada

    // let crewCopy = [...crew];
    // let columns = [];
    // if (crew.length > 8) {
    //   columns = [crewCopy.slice(0, crewCopy.length/2), crewCopy.slice(crewCopy.length/2+1)];
    // } else {
    //   columns = [crewCopy];
    // }

    // return (columns.map((item, idx) => {
    //   return (<div className="crew-column" key={idx}>
    //       {item.map((item, idx) => {
    //         return(item.name === "" ? <p key={idx} className="crew-item">{item.content}</p> : <p key={idx} className="crew-item"><strong className="crew-title">{item.name}</strong><br/>{item.content}</p>)
    //       })}
    //     </div>)
    //   })
    // )

    return (
      <p>
        {crew.map((item, idx) => {
        if (idx === crew.length - 1) {
          if (item.name === "") {return <span>{item.content}</span>}
          return <span>{item.name}: <strong>{item.content}</strong></span>
        } else {
          if (item.name === "") {return <span>{item.content} / </span>}
          return <span>{item.name}: <strong>{item.content}</strong> / </span>
        }
      })}
      </p>
    )
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
    const {title, year, duration, format, support, summary, cast, crew, festivals, reviews, images, video, filmType} = this.state.film;
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
            {video && video.id === "" && <img src={this.state.film.banner} className="cover-image" onLoad={this.imageLoaded} alt={title + "Still"}></img>}
          </section>
          <div className="details-content">
            {/* seção 1*/}
            <section className="details-section">
              <div className="details-content-text details-margin">
                {this.props.width > 640 && <GoBack></GoBack>}
                <h3 className="title">{title}</h3>
                <p className={filmType === "colab" ? "year-duration year-duration-less-margin" : "year-duration"}>{year}, {format}, {support} {duration && `, ${duration}'`}</p>
                {filmType === "colab" && <p className="colab-details">{this.state.film.colabDetails}</p>}
                <div className="details-div">
                  <div className="summary-cast-container">
                    <div>
                      <h5 className="details-section-header">sinopse</h5>
                      <p className="summary">{summary}</p>
                    </div>
                    {cast && <div>
                      <h5 className="details-section-header">elenco</h5>
                      <p className="cast">{cast}</p>
                    </div>}
                    {/* EXCEPTION 1: FOR CABEÇA OCA */}
                    {title === "cabeça oca espuma de boneca" && <div>
                      <h5 className="details-section-header">circulação</h5>
                      <ul className="festivals-list" style={this.props.width > 1025 && festivals.length > 4 ? {maxHeight: festivals.length/2 * 3 + "rem"} : {}}>
                        {festivals.map((item, idx) => {
                          return <li key={idx} className="festivals-list-item w-100">- {item.content}</li>
                        })}
                      </ul>
                    </div>}
                    {/* END EXCEPTION 1 */}
                  </div>

                  <div className="crew-container">
                    <h5 className="details-section-header">ficha técnica</h5>
                    <div className="crew">
                      {crew && this.renderCrew()}
                    </div>
                  </div>
                </div>
              </div>

              {images && images.gallery1 && <Gallery gallery={images.gallery1} imageLoaded={this.imageLoaded} width={this.props.width} />}
            </section>

            {/* seção 2*/}
            {festivals && <section className="details-section">
              <div className="details-content-text">
                {festivals && title !== "cabeça oca espuma de boneca" &&
                <div className="details-margin">
                  {/* EXCEPTION 2: VER A CHINA
                  { title === "Ver a China" ? (
                  <div className="details-div">
                    <div className="summary-cast-container">
                      <h5 className="details-section-header">circulação</h5>
                      <ul className="festivals-list" style={this.props.width > 1025 && festivals.length > 4 ? {maxHeight: festivals.length/2 * 3 + "rem"} : {}}>
                        {festivals.map((item, idx) => {
                          return <li key={idx} className="festivals-list-item w-100">- {item}</li>
                        })}
                      </ul>
                    </div>
                    <div className="crew-container">
                      <div>
                        <h5 className="details-section-header">críticas e menções</h5>
                        <div className="reviews-container">
                          {reviews.map((item, idx) => {
                            return <div key={idx} className="review w-100">
                              {item.link !== "" && <a href={item.link} className="review-link"><strong>{item.name}</strong>, por {item.author}</a>}
                              {item.link === "" && <p className="review-link"><strong>{item.name}</strong>, por {item.author}</p>}
                              <p className="review-content">{item.content}</p>
                            </div>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  // END EXCEPTION 2
                  ) : (
                  <> */}
                  <h5 className="details-section-header">circulação</h5>
                  <div className="festivals-list">
                    {festivals.map((item, idx) => {
                      return item.won ? <li key={idx} dangerouslySetInnerHTML={{__html: item.content}} className="festivals-list-item"></li> : <li key={idx} className="festivals-list-item">- {item.content}</li>
                    })}
                  </div>
                  {/* </> */}
                  {/* )} */}
                </div>}
              </div>

              {images.gallery2 && <Gallery gallery={images.gallery2} imageLoaded={this.imageLoaded} width={this.props.width}/>}
            </section>}
            
            {/* seção 3*/}
            {reviews &&
            <section className="details-section">
              <div className="details-content-text">
                {reviews && <div className="details-margin">
                  <h5 className="details-section-header">críticas e menções</h5>
                  <div className="reviews-container">
                    {/* a tag style acima é uma gambiarra */}
                    {reviews.map((item, idx) => {
                      // if (this.props.width > 1025 && title === "Ronda" && idx === 0) {return <div className="review" style={{gridRowStart: 1, gridRowEnd: 4}}><p className="review-link"><strong>{item.name}</strong>, por {item.author}</p><p className="review-content">{item.content}</p></div>}
                      return <div key={idx} className="review">
                        {item.link !== "" && <a href={item.link} className="review-link"><strong>{item.name}</strong>, por {item.author}</a>}
                        {item.link === "" && <p className="review-link"><strong>{item.name}</strong>, por {item.author}</p>}
                        <p className="review-content">{item.content}</p>
                      </div>
                    })}
                  </div>
                </div>}
              </div>

              {images && <Gallery gallery={images.gallery3} imageLoaded={this.imageLoaded} width={this.props.width}/>}
            </section>}
          <GoBack></GoBack>
          </div>
        </article>
      </div>


    )
  }
}

export default FilmDetails;
