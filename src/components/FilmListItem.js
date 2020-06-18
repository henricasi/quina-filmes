import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FilmListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, year, duration, format, support, images, banner, url} = this.props.film;
    const {whichList} = this.props;
    return (
      <div className="card">
        
        <Link to={`/${whichList}/${url}`} className="card-click" style={{backgroundImage: `url(${banner.img})`, backgroundPosition: banner.pos}}>
          <div className="card-content">
          </div>
        </Link>
        <h4 className="card-title">
          <Link to={`/${whichList}/${url}`}>{title}</Link>
        </h4>
        {/* <p className="card-year">{year}</p>
        <p className="card-details">{duration}', {format}, {support}</p> */}
      </div>
    )
  }
}

export default FilmListItem;
