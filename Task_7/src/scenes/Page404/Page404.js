import React, {Component} from 'react';
import {Header} from "../../scenes/Header"
import {Search} from '../../scenes/Search';
import {Footer} from "../../scenes/Footer"
import {EmptyResult} from "./../Results/components/ResultsBody/components/EmptyResult"

class Page404 extends Component {

  render() {
    return (<div className="app">
        <section id="top-block">
          <Header showSearchLink />
          <Search {...this.props} />
        </section>
        <div className="results-panel"></div>
        <EmptyResult text="Page not found"/>
        <Footer />
      </div>
    );
  }
}

export default Page404;
