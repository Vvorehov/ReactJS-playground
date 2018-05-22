import React, {Component} from 'react';
import { createStore } from 'redux';
import { Radio } from '../Radio';
import actionsTypes from "../../constants/actionsTypes.js";
import './styles.scss'

class Search extends Component {
    getFilms() {
    fetch('//react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .then(data => {
        this.setState(data);
      })
      .catch(err => console.error(this.props.url, err.toString()))
    }

    searchFilms(e) {
        e.preventDefault();
        let actionType = document.querySelector('.search input[name="search-by"]:checked').getAttribute('data-action-type');

        console.log("actionType: " + actionType);
        const sort = (state = 0, action) => {
        switch (action.type) {
          case actionsTypes.SEARCH_BY_TITLE:
            return this.getFilms();
          case actionsTypes.SEARCH_BY_GENRE:
            return 1;
          default:
            return 0;
        }
      };

      const store = createStore(sort);
      store.dispatch({type: actionType});

      store.subscribe(() => {

      })
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
                          <Radio name="search-by" label="Title" dataActionType={actionsTypes.SEARCH_BY_TITLE} value="title" isChecked={true}/>
                      </div>
                      <div className="search_type-btn">
                          <Radio name="search-by" label="Genre" dataActionType={actionsTypes.SEARCH_BY_GENRE} value="genre"/>
                      </div>
                  </div>
                  <button className="search_submit" type="submit">Search</button>
              </div>
          </form>
        )
    }
}

export default Search;