import React, {Component} from 'react';
import "../../../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../../assets/styles/styles.scss";

class App extends Component {

  render() {
    return (
      <div className="app">{this.props.children}</div>
    );
  }
}

export default App;
