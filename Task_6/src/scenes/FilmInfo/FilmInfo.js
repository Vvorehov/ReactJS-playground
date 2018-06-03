import React, { Component } from "react";
import "./styles.scss";

class FilmInfo extends Component {

  render() {
    if (this.props.film && this.props.film.genres) {
      let genres = this.props.film.genres ? this.props.film.genres.join(", ") : "";
      return (
        <div className="film-info">
          <div className="row">
            <div className="col-sm-4">
              <img src={this.props.film.poster_path} alt={this.props.film.title} className="film-info__poster"/>
            </div>
            <div className="col-sm-8">
              <div className="film-info__details">
                <h1 className="film-info__name">
                  {this.props.film.title}
                  <span className="film-info__rating">{this.props.film.vote_average}</span>
                </h1>
                <p className="film-info__genre">{genres}</p>
                <p className="film-info__info">
                  <span>{(new Date(this.props.film.release_date)).getFullYear()}</span>
                  <span>{this.props.film.runtime} min</span>
                </p>
                <p className="film-info__desc">{this.props.film.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
        return <h2 className="film-info_empty">Loading...</h2>
    }
  }
}

export default FilmInfo;