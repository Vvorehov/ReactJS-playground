import React, {Component} from 'react';
import { render } from "react-dom";
import { FilmItem, EmptyResult } from './components';
import { fetchMovies } from '../../../../actions/fetchData.js'
import "./styles.scss";
import { createStore } from 'redux';
import actionsTypes from '../../../../constants/actionsTypes';

class ResultsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }



  render() {


    if (this.state.data.length) {
      return (
        <div className="film-list">
          <div className="row">
            {
              this.state.data.map((item, index) => {
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

const getFilms = () => {
  fetch('//react-cdp-api.herokuapp.com/movies')
    .then(response => response.json())
    .then(data => {
      store.dispatch({type: actionsTypes.FETCH_MOVIES_SUCCESS, films: data});
    })
    .catch(err => store.dispatch({type: actionsTypes.FETCH_MOVIES_FAILED}));
};

getFilms();

const rootReducer = (store, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_MOVIES_SUCCESS:
      return {...store, films: action.films};
    case actionsTypes.FETCH_MOVIES_FAILED:
      return store;
    default:
      return store;
  }
};

const store = createStore(rootReducer, {});
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

export default ResultsBody;