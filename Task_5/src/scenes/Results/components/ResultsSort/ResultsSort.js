import React, {Component} from 'react';
import { Radio } from './../../../Radio';
import actionTypes from "../../../../actions";
import './styles.scss'

class ResultsSort extends Component {
  render() {
    return (
      <form className="result-sort">
        <div className="result-sort_title">Sort by</div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Release date" changeHandler="" value="date" isChecked={true} mod="sort"/>
        </div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Rating" value="rating" mod="sort"/>
        </div>
      </form>
    )
  }
}

export default ResultsSort;