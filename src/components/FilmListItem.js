import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FilmListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {title, banner, url} = this.props.film;
    let {whichList} = this.props;

    if (banner === "") {
      banner = "/img/filler_v.jpg"
    }

    return (
      <div className="card">
        <Link to={`/${whichList}/${url}`} className="card-click">
          <img src={banner} onLoad={() => this.props.imageLoaded()}/>
        </Link>
        <h4 className="card-title">
          <Link to={`/${whichList}/${url}`}>{title}</Link>
        </h4>
      </div>
    )
  }
}

export default FilmListItem;
