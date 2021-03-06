import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import FilmListItem from './FilmListItem';

import {filmesData} from '../data/filmes';
import {colabsData} from '../data/colabs';


class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      counter: 0,
      imagesHaveLoaded: false,
    }
    this.setList = this.setList.bind(this);
    this.renderPageTitle = this.renderPageTitle.bind(this)
  }

  componentDidMount() {
    this.setList();
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
      document.title = "Filmes - Quina filmes"
      this.setState({
        films: filmesData
      })
    } else if (whichList === "colabs") {
      document.title = "Colaborações - Quina filmes"
      this.setState({
        films: colabsData
      })
    }
  }

  imageLoaded() {
    let {counter, films} = this.state;
    let newCounter = counter + 1;

    if (newCounter === films.length) {
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

  renderPageTitle() {
    const {whichList} = this.props;
    let html = <></>;
    // whichList === "filmes" ? html = <><h1 className="page-title">filmes</h1><hr className="title-hr"/></> : html = <><h1 className="page-title">colaborações</h1><hr className="title-hr"/></>
    whichList === "filmes" ? html = <h1 className="page-title">filmes</h1> : html = <h1 className="page-title">colaborações</h1>
    return html;
  }
  

  render() {
    let {imagesHaveLoaded} = this.state;
    return (
      <div className="page">
        <div className={imagesHaveLoaded ? "loader noshow" : "loader"}>
          <Loader type="Oval" color="#F2F2F2" height={80} width={80}/>
        </div>

        <div className={imagesHaveLoaded ? "list" : "list noshow"}>
          {this.props.width < 640 && this.renderPageTitle()}
          <div className="list-items-container">
            {this.state.films.map((film, index) => {
              return (
                <FilmListItem film={film} key={index} whichList={this.props.whichList} imageLoaded={() => this.imageLoaded()}/>
              )
            })}
          </div>
          {this.props.width < 640 && <Link to="/" className="back-link back-link-list">← voltar</Link>}
        </div>
        

      </div>
    ) 
    
  }
}



export default FilmList;
