import React, {Component} from 'react';
import { createStore } from 'redux';
import { Radio } from '../Radio';
import actionsTypes from "../../constants/actionsTypes";
import * as FetchData from "../../actions/fetchData";
import { setSearchData } from "../../actions/searchByAction";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.match.params.searchQuery || props.searchData.searchQuery,
      searchBy: props.match.params.searchBy || props.searchData.searchBy
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchResults(this.state);
  }

  componentDidUpdate(prevProps) {
    /*if (this.props.location !== prevProps.location) {
      this.props.fetchSearchResults(this.state.searchData);
    }*/
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults(this.state);
    this.props.setSearchData(this.state);

    let url = "/search/" + this.state.searchBy.toLowerCase() + "/" + this.state.searchQuery.toLowerCase();
    this.props.history.push(url);
  }

  handleOnChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
      return (
        <form className="search" onSubmit={this.handleFormSubmit}>
            <p className="search_title">Find your movie</p>
            <input type="text" className="search_input" placeholder="search..." name="searchQuery" onChange={this.handleOnChange} value={this.state.searchQuery}/>
            <div className="search_footer">
                <div className="search_type">
                    <p className="search_type-title">search by</p>
                    <div className="search_type-btn">
                      <Radio name="searchBy" label="Title" value="TITLE" onChange={this.handleOnChange} isChecked={this.state.searchBy.toLowerCase() === "TITLE".toLowerCase()}/>
                    </div>
                    <div className="search_type-btn">
                      <Radio name="searchBy" label="Genre" value="GENRES" onChange={this.handleOnChange} isChecked={this.state.searchBy.toLowerCase() === "GENRES".toLowerCase()}/>
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
    fetchSearchResults: bindActionCreators(FetchData.fetchSearchResults, dispatch),
    setSearchData: bindActionCreators(setSearchData, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)