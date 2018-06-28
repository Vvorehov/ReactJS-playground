import React, {Component} from 'react';
import { render } from "react-dom";
import './style.scss'

class ResultCount extends Component {
  render() {
    return (
      <div className="results-count"><span id="results-count">{ this.props.items }</span> movies found</div>
    )
  }
}

export default ResultCount;