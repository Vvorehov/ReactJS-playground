import React, { Component } from 'react';
import { ResultsBody, ResultsCount, ResultsSort } from "./components/";
import { getFilms } from '../../utils/filmData';
import "./styles.scss";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    getFilms((data) => {
      this.setState({films: data});
    });
  }

  render() {
    return <main className="results">
      <div className="results-panel">
        <ResultsCount items="10"/>
        <ResultsSort />
      </div>
    <ResultsBody {...this.state.films}/>
    </main>
  }
}

export default Results;