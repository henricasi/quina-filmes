import React, { Component } from 'react';

class FilmListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, year, duration, format, support, director, images} = this.props.film;
    return (
      <div className="card" style={{backgroundImage: `url(${images.banner})`}}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-year">{year}</p>
          <p className="card-details">{duration}', {format}, {support}</p>
          <p className="card-director">direção: {director}</p>
        </div>
      </div>
    )
  }
}

export default FilmListItem;
