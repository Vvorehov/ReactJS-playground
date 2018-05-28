import React, {Component} from 'react';
import { render } from "react-dom";
import { FilmItem, EmptyResult } from './components';
import { fetchMovies } from '../../../../actions/fetchData.js'
import "./styles.scss";
import { createStore } from 'redux';
import actionsTypes from '../../../../constants/actionsTypes';

class ResultsBody extends Component {
  render() {
    if (this.props.movies) {
      return (
        <div className="film-list">
          <div className="row">
            {
              this.props.movies.map((item, index) => {
                return <div key={index} className="col-sm-4">
                  <FilmItem  {...item}/>
                </div>
              })
            }
          </div>
        </div>
      )
    } else {
      return <EmptyResult />
    }

  }
}

export default ResultsBody;