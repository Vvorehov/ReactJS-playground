import React, {Component} from 'react';
import { Header } from "../Header";
import { FilmInfo } from "../FilmInfo";
import { Results } from "../Results";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundaries";
import * as SingleActions from '../../actions/fetchData.js';

import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';

class FilmPage extends Component {
  componentDidMount() {
    let mockData = 498299; // this.props.match.params.movieId;
    this.props.singleFilmActions.getFilmById(mockData);
    debugger;
    let search = {searchQuery: this.props.singleFilm.genres[0], searchBy: 'GENRES'}
    this.props.singleFilmActions.getSearchData(search);

  }

  render() {
    debugger;
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
