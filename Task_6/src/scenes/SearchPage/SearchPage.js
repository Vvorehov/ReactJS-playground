import React, {Component} from 'react';
import { Header } from "../Header";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { Results } from "../Results";
import { ErrorBoundary } from "../ErrorBoundaries"

import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';


class SearchPage extends Component {
  componentDidMount() {

  }

  render() {

    return (<ErrorBoundary>
        <section id="top-block">
          <Header />
          <Search {...this.props} />
        </section>
        <Results movies={this.props.movies}/>
        <Footer />
      </ErrorBoundary>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.filmList.movies || []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filmsActions: bindActionCreators(FilmActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);