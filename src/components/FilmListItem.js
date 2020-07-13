import React from 'react';
import {Link} from 'react-router-dom';

const FilmListItem = (props) => {

  let {title, poster, url} = props.film;
  let {whichList} = props;

  if (poster === "") {
    poster = "/img/filler_v.jpg"
  }

  return (
    <div className="card">
      <Link to={`/${whichList}/${url}`} className="card-click">
        <img className="card-poster" alt={title + " Poster"} src={poster} onLoad={() => props.imageLoaded()}/>
      </Link>
      <h4 className="card-title">
        <Link to={`/${whichList}/${url}`}>{title}</Link>
      </h4>
    </div>
  )
}

export default FilmListItem;
