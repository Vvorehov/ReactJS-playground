import React, {Component} from 'react';
import { Header } from "../Header";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { Results } from "../Results";
import { ErrorBoundary } from "../ErrorBoundaries"

import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';


class HomePage extends Component {
  componentDidMount() {

  }

  render() {
    let movies = this.props.filmList.movies || [];

    return (<div className="app">
        <ErrorBoundary>
          <section id="top-block">
            <Header />
            <Search />
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
    filmList: state.filmList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filmsActions: bindActionCreators(FilmActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);