import React, { Component } from "react";

import "./styles.scss";

class FilmInfo extends Component {

  render() {
    let genres = this.props.genres ? this.props.genres.join(", ") : "";
    return (
      <div className="film-info">
        <div className="row">
          <div className="col-sm-4">
            <img src={this.props.poster_path} alt={this.props.title} className="film-info__poster"/>
          </div>
          <div className="col-sm-8">
            <div className="film-info__details">
              <h1 className="film-info__name">
                {this.props.title}
                <span className="film-info__rating">{this.props.vote_average}</span>
              </h1>
              <p className="film-info__genre">{genres}</p>
              <p className="film-info__info">
                <span>{(new Date(this.props.release_date)).getFullYear()}</span>
                <span>{this.props.runtime} min</span>
              </p>
              <p className="film-info__desc">{this.props.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmInfo;