import React, { Component } from 'react';
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
  }

  componentDidMount() {
    setInterval(this.setList, 400); //método com delay
    //this.setList(); //método imediato
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
  

  render() {
    return (
      <div className="list">
        <div className="list-items-container">  
          {this.state.films.map((film, index) => {
            return (
              <FilmListItem film={film} key={index} whichList={this.props.whichList}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FilmList;
