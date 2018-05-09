import React, {Component} from 'react';
import { render } from "react-dom";
import { FilmItem, EmptyResult } from './components';
import "./styles.scss";

class ResultsBody extends Component {

  render() {
    if (this.props.data) {
      return (
        <div className="film-list">
          <div className="row">
            {
              this.props.data.map((item, index) => {
                return <div key={index} className="col-sm-4">
                  <FilmItem {...item}/>
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