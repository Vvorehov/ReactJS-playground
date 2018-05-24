import React, {Component} from 'react';
import { Header } from "../Header";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { Results } from "../Results";
import { ErrorBoundary } from "../ErrorBoundaries"
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";

class HomePage extends Component {
  /*componentDidMount() {
    debugger;
    this.props.filmsActions.getDataSorted("release_date");
  }*/

  render() {
    return (<div className="app">
        <ErrorBoundary>
          <section id="top-block">
            <Header />
            <Search />
          </section>
          <Results />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default HomePage;