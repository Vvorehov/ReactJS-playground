import React, { Component } from 'react';
import { ResultsBody, ResultsCount, ResultsSort } from "./components/";
import "./styles.scss";

class Results extends Component {

  render() {

    return <main className="results">
      <div className="results-panel">
        <ResultsCount items="10"/>
        <ResultsSort />
      </div>
      <ResultsBody movies={this.props.movies}/>
    </main>
  }
}

export default Results;