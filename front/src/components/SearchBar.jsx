import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchSuggestions from './SearchSuggestions';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInfo() {
    axios.get(`/api/sites`)
    .then(res => res.data)
    .then(data => {
      return data.map(site => {
        return {
          name : site.site_name
        };
      });
    })
    .then(data => {
      this.setState({
        results: data
      });
    });    
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value}, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo();
      } else {
        this.setState({
          results: this.state.results
        });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="header-container"> 
          <h2 className="list-h2"> Find a site </h2>
        </div>
        <div className="container">
          <form className = "searchBarDiv">
          <input
          className = "searchBarInput"
          onChange = {this.handleInputChange}
          type = "text"
          value = {this.state.query}
          >
          </input>
          <SearchSuggestions results = {this.state.results} query= {this.state.query}/>
        </form>
      </div>

      </Fragment>
    );
  }
}

export default SearchBar;