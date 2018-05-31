import React, {Component} from 'react';
import { Header } from "../Header";
import { FilmInfo } from "../FilmInfo";
import { Results } from "../Results";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundaries";

import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';

class FilmPage extends Component {
  componentDidMount() {
    this.props.singleFilmActions.getFilmById(this.props.match.params.movieId);
    let search = {searchQuery: this.props.singleFilm.genres[0], searchBy: 'GENRES'}
    this.props.singleFilmActions.getSearchData(search);

  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.singleFilmActions.getFilmById(this.props.match.params.movieId);
    }

    // only update chart if the filmInfo has changed
    if (prevProps.filmInfo !== this.props.filmInfo) {
      this.singleFilmActions();
    }
  }

  render() {
    let singleFilm = this.props.singleFilm || {};
    let movies = this.props.filmList.movies || [];

    return (<div className="app">
      <ErrorBoundary>
        <section id="top-block">
          <Header />
          <FilmInfo film={singleFilm} />
        </section>
        <Results movies={movies}/>
        <Footer />
      </ErrorBoundary>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleFilm: state.singleFilm,
    filmList: state.filmList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    singleFilmActions: bindActionCreators(FilmActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
