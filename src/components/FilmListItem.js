import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FilmListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, year, duration, format, support, images, url} = this.props.film;
    const {whichList} = this.props;
    return (
      <div className="card" style={{backgroundImage: `url(${images.banner})`}}>
        <Link to={`/${whichList}/${url}`} className="card-click">
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-year">{year}</p>
            <p className="card-details">{duration}', {format}, {support}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default FilmListItem;
