import React, {Component} from 'react';
import './style.scss'

class ResultsCount extends Component {
  render() {
    return (
      <div className="results-count"><span id="results-count">{ this.props.items }</span> movies found</div>
    )
  }
}

export default ResultsCount;