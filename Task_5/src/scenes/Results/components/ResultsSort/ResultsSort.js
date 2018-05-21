import React, {Component} from 'react';
import { Radio } from './../../../Radio';
import actionTypes from "../../../../actions";
import './styles.scss'

class ResultsSort extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
  }

  render() {
    return (
      <form className="result-sort">
        <div className="result-sort_title">Sort by</div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Release date" onChange="" value="SORT_BY_RELEASE_DATE" isChecked={true} mod="sort"/>
        </div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Rating" onChange="" value="SORT_BY_RATING" mod="sort"/>
        </div>
      </form>
    )
  }
}

export default ResultsSort;