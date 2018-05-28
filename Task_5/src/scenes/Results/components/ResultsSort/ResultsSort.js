import React, {Component} from 'react';
import { Radio } from '../../../Radio';
import actionTypes from "../../../../constants/actionsTypes.js";
//import { getDataSorted } from "../../../../actions/fetchData.js";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FetchData from "../../../../actions/fetchData.js";
import './styles.scss'

class ResultsSort extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.props.sortActions.getDataSorted(e.target.value);
  }

  render() {
    return (
      <form className="result-sort">
        <div className="result-sort_title">Sort by</div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Release date" value="release_date" onChange={this.handleOnChange} isChecked={this.props.sortData.sortBy === "DATE"} mod="sort"/>
        </div>
        <div className="result-sort_btn">
          <Radio name="result-sort" label="Rating" value="vote_average" onChange={this.handleOnChange} isChecked={this.props.sortData.sortBy === "RATING"} mod="sort"/>
        </div>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return {
    sortData:state.sortData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortActions: bindActionCreators(FetchData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSort)