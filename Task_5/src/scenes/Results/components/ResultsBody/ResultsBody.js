import React, {Component} from 'react';
import { render } from "react-dom";
import { FilmItem, EmptyResult } from './components';
import { fetchMovies, store } from '../../../../actions/fetchData.js'
import "./styles.scss";

class ResultsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getFilms() {
    fetch('//react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .then(data => {
        this.setState(data);
      })
      .catch(err => console.error(this.props.url, err.toString()))
  }


  componentDidMount() {
    this.getFilms()
    //store.getState()
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

export default ResultsBody;