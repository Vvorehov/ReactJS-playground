import React, {Component} from 'react';
import { render } from "react-dom";
import './styles.scss'

class FilmItem extends Component {
  render() {
    return (
      <div className="film-item">
          <img src={this.props.poster_path} alt={this.props.title} className="film-item__img"/>
          <div className="film-item__header">
            <h3 className="film-item__name">{this.props.title}</h3>
            <span className="film-item__year">{(new Date(this.props.release_date)).getFullYear()}</span>
            <div>
              <span className="film-item__genre">{this.props.genres.join(", ")}</span>
            </div>
          </div>
      </div>
    )
  }
}

export default FilmItem;