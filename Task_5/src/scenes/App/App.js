import React, {Component} from 'react';
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";
import HomePage from '../HomePage/HomePage';
import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.filmsActions.getDataSorted("release_date");
  }

  render() {
    return (<HomePage />
    );
  }
}

const initialState = {
  movies: [],
  searchData: {
    searchBy: "TITLE", // "GENRE"
    searchQuery: "",
    sortBy: "DATE", // "RATING"
  },
  singleFilm: {}
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filmsActions: bindActionCreators(FilmActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
