import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FilmListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, banner, url} = this.props.film;
    const {whichList} = this.props;
    return (
      <div className="card">
        
        <Link to={`/${whichList}/${url}`} className="card-click" style={{backgroundImage: `url(${banner})`, backgroundPosition: "center"}}>
        </Link>
        <h4 className="card-title">
          <Link to={`/${whichList}/${url}`}>{title}</Link>
        </h4>
      </div>
    )
  }
}

export default FilmListItem;
