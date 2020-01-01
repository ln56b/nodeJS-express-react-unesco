import React, { Component } from 'react';
import axios from 'axios';
import DisplayCountry from './DisplayCountry';

class FetchCountry extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      countries : ''
    };
  this.getCountries = this.getCountries.bind(this); 
  }
  componentDidMount(){
    this.getCountries()
  };

  getCountries() {
    axios.get(`/api/countries`)
    .then(res => res.data)
    .then(data => {
      this.setState({
        countries:data
      })
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        {this.state.countries && <DisplayCountry countries = {this.state.countries}/>}

      </div>
    );
  }
}

export default FetchCountry;