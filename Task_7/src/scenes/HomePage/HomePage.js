import React, {Component} from 'react';
import { Header } from "../Header";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { EmptyResult } from "../Results/components/ResultsBody/components/EmptyResult";
import { ErrorBoundary } from "../ErrorBoundaries"

import { connect } from 'react-redux';
import * as FilmActions from '../../actions/fetchData';
import { bindActionCreators } from 'redux';


class HomePage extends Component {
  render() {

    return (<ErrorBoundary>
          <section id="top-block">
            <Header />
            <Search {...this.props} />
          </section>
          <EmptyResult text="Please, find film by using Search block "/>
          <Footer />
        </ErrorBoundary>
    );
  }
}



export default HomePage;