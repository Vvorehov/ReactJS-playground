import React from 'react';
import HomePage from "./scenes/HomePage/HomePage"
import SinglePage from "./scenes/FilmPage/FilmPage"
import Page404 from "./scenes/Page404/Page404"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/film/:movieId" component={SinglePage}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </Router>
  );
}