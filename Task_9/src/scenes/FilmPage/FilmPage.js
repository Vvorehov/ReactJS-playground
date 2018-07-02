import React, {Component} from 'react';
import { Header } from "../Header";
import { FilmInfo } from "../FilmInfo";
import { Results } from "../Results";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundaries";

import { connect } from 'react-redux';
import * as FetchActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';

class FilmPage extends Component {
  componentDidMount() {
    this.props.getFilmById(this.props.match.params.movieId);
    let search = {searchQuery: this.props.singleFilm.genres[0], searchBy: 'GENRES'};
    this.props.fetchSearchResults(search)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.getFilmById(this.props.match.params.movieId);
    }

    if (prevProps.singleFilm !== this.props.singleFilm) {
      let search = {searchQuery: this.props.singleFilm.genres[0], searchBy: 'GENRES'};
      this.props.fetchSearchResults(search)
    }
  }


  render() {

    return (<ErrorBoundary>
        <section id="top-block">
          <Header showSearchLink />
          <FilmInfo film={this.props.singleFilm} />
        </section>
        <Results film={this.props.singleFilm} movies={this.props.movies} />
        <Footer />
      </ErrorBoundary>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleFilm: state.singleFilm || {},
    movies: state.filmList.movies || []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearchResults: bindActionCreators(FetchActions.fetchSearchResults, dispatch),
    getFilmById: bindActionCreators(FetchActions.getFilmById, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
