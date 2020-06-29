import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FilmListItem from './FilmListItem';

import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';


class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
    this.setList = this.setList.bind(this);
    this.renderPageTitle = this.renderPageTitle.bind(this)
  }

  componentDidMount() {
    // setInterval(this.setList, 400); //método com delay
    this.setList(); //método imediato
  }

  //renderiza novamente se usuário está em /filmes e vai para /colabs
  componentDidUpdate(prevProps) {
    if (this.props.whichList !== prevProps.whichList) {
      this.setList();
    }
  }

  setList() {
    const {whichList} = this.props;
    if (whichList === "filmes") {
      this.setState({
        films: filmesData
      })
    } else if (whichList === "colabs") {
      this.setState({
        films: colabsData
      })
    }
  }

  renderPageTitle() {
    const {width, whichList} = this.props;
    let html = <></>;
    // if (width < 992) {
      whichList === "filmes" ? html = <><h1 className="page-title">filmes</h1><hr className="title-hr"/></> : html = <><h1 className="page-title">colaborações</h1><hr className="title-hr"/></>
    // }
    return html;
  }
  

  render() {
    return (
      <div className="list">
        {this.renderPageTitle()}
        <div className="list-items-container">
          {this.state.films.map((film, index) => {
            return (
              <FilmListItem film={film} key={index} whichList={this.props.whichList}/>
            )
          })}
        </div>
        {this.props.width < 992 && <Link to="/" className="back-link back-link-mobile">← voltar</Link>}
      </div>
    )
  }
}

export default FilmList;
