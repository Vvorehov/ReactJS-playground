import React, {Component} from 'react';
import { createStore } from 'redux';
import { Radio } from '../Radio';
import actionsTypes from "../../constants/actionsTypes";
import * as FetchData from "../../actions/fetchData";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: props.searchData.searchQuery,
      searchBy: props.searchData.searchBy
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log('searchData');
    console.log(this.state);
    this.props.searchActions.getSearchData(this.state);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
      return (
        <form className="search" onSubmit={this.handleFormSubmit}>
            <p className="search_title">Find your movie</p>
            <input type="text" className="search_input" placeholder="search..." name="searchQuery" onChange={this.handleOnChange} value={this.state.value}/>
            <div className="search_footer">
                <div className="search_type">
                    <p className="search_type-title">search by</p>
                    <div className="search_type-btn">
                      <Radio name="searchBy" label="Title" value="TITLE" onChange={this.handleOnChange} isChecked={this.state.searchBy === "TITLE"}/>
                    </div>
                    <div className="search_type-btn">
                      <Radio name="searchBy" label="Genre" value="GENRES" onChange={this.handleOnChange} isChecked={this.state.searchBy === "GENRES"}/>
                    </div>
                </div>
                <button className="search_submit" type="submit">Search</button>
            </div>
        </form>
      )
  }
}

function mapStateToProps(state) {
  return {
    searchData: state.searchData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(FetchData, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)