import React, {Component} from 'react';
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";
import HomePage from '../HomePage/HomePage';
import FilmPage from '../FilmPage/FilmPage';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (<HomePage />);
    /*return (
      <FilmPage />
    );*/
  }
}




export default App;
