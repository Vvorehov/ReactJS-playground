import React, {Component} from 'react';
import { Header } from "../Header";
import { FilmInfo } from "../FilmInfo";
import { Results } from "../Results";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundaries"
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";

class FilmPage extends Component {
  render() {
    return (<div className="app">
      <ErrorBoundary>
        <section id="top-block">
          <Header />
          <FilmInfo id="284054" />
        </section>
        <Results />
        <Footer />
      </ErrorBoundary>
    </div>
    );
  }
}

export default FilmPage;
