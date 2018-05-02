import React, {Component} from 'react';
import { render } from "react-dom";
import './styles.scss'

class EmptyResult extends Component {

  render() {
    return (
        <div className="empty-result">No films found</div>
    );
  }
}

export default EmptyResult;