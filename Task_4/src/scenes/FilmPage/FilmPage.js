import React, {Component} from 'react';
import { Header } from "../Header";
import { FilmInfo } from "../FilmInfo";
import { Results } from "../Results";
import { Footer } from "../Footer";
import { getFilmInfo } from "../../utils/filmData";
import { ErrorBoundary } from "../ErrorBoundaries"
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";

class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "284054",
      filmInfo: {}
    };
    console.log(props.match)
  }

  componentDidMount() {
    getFilmInfo(this.state.id, (data) => {
      this.setState({filmInfo: data});
    });
  }

  render() {
    return (<div className="app">
      <ErrorBoundary>
        <section id="top-block">
          <Header />
          <FilmInfo {...this.state.filmInfo} />
        </section>
        <Results />
        <Footer />
      </ErrorBoundary>
    </div>
    );
  }
}

export default FilmPage;
