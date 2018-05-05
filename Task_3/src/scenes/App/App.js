import React, {Component} from 'react';
import { TopBlock } from "../TopBlock";
import { Footer } from "../Footer";
import { Results } from "../Results";
import { ErrorBoundary } from "../ErrorBoundaries"
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";

class App extends Component {
  render() {
    return (<div className="app">
        <ErrorBoundary>
          <TopBlock />
          <Results />
          <Footer />
        </ErrorBoundary>
      </div>
    );

  }
}

export default App;
