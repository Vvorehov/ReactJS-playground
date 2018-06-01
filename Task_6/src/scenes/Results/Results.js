import React, { Component } from 'react';
import { ResultsBody, ResultsCount, ResultsSort } from "./components/";
import "./styles.scss";

class Results extends Component {

  render() {
    if(this.props.film) {
      return <main className="results">
        <div className="results-panel">
          <div className="results-film-genre">
            Films by {this.props.film.genres[0]} genre
          </div>
        </div>
        <ResultsBody movies={this.props.movies}/>
      </main>
    } else {
      return <main className="results">
        <div className="results-panel">
          <ResultsCount items={this.props.movies.length}/>
          <ResultsSort />
        </div>
        <ResultsBody movies={this.props.movies}/>
      </main>
    }
  }
}

export default Results;