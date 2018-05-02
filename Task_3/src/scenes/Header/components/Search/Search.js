import React, {Component} from 'react';
import { Radio } from './../../../Radio';
import './styles.scss'

class Search extends Component {
    searchFilms(e) {
        e.preventDefault();
    }

    render() {
        return (
          <form className="search" onSubmit={this.searchFilms.bind(this)}>
              <p className="search_title">Find your movie</p>
              <input type="text" className="search_input" placeholder="search..."/>
              <div className="search_footer">
                  <div className="search_type">
                      <p className="search_type-title">search by</p>
                      <div className="search_type-btn">
                          <Radio name="search-by" label="Title" value="title" isChecked={true}/>
                      </div>
                      <div className="search_type-btn">
                          <Radio name="search-by" label="Genre" value="genre"/>
                      </div>
                  </div>
                  <button className="search_submit" type="submit">Search</button>
              </div>
          </form>
        )
    }
}

export default Search;