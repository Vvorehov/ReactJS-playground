import React from 'react';
import { ResultsBody, ResultsCount, ResultsSort } from "./components/";
import "./styles.scss";

const Results = () => {
  return <div className="results">
    <div className="results-panel">
      <ResultsCount items="10" />
      <ResultsSort />
    </div>
    <ResultsBody />
  </div>
};

export default Results;