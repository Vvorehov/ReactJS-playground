import React, { Component } from "react";
import "./styles.scss";

class FilmInfo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      genres: []
    }
  }

  getFilmInfo(id) {
    fetch('//react-cdp-api.herokuapp.com/movies/' + id)
      .then(response => response.json())
      .then(data => {
        this.setState(data);
      })
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.getFilmInfo(this.props.id)
  }

  render() {
    return (
      <div className="film-info">
        <div className="row">
          <div className="col-sm-4">
            <img src={this.state.poster_path} alt={this.state.title} className="film-info__poster"/>
          </div>
          <div className="col-sm-8">
            <div className="film-info__details">
              <h1 className="film-info__name">
                {this.state.title}
                <span className="film-info__rating">{this.state.vote_average}</span>
              </h1>
              <p className="film-info__genre">{this.state.genres.join(", ")}</p>
              <p className="film-info__info">
                <span>{(new Date(this.state.release_date)).getFullYear()}</span>
                <span>{this.state.runtime} min</span>
              </p>
              <p className="film-info__desc">{this.state.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmInfo;