import React, { Component } from 'react';
import axios from 'axios';
import DisplayList from './DisplayList';

class FetchList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sites : ''
    };
  this.getSites = this.getSites.bind(this); 
  }
  componentDidMount(){
    this.getSites()
  };

  getSites() {
    axios.get(`/api/sites`)
    .then(res => res.data)
    .then(data => {
      this.setState({
        sites:data
      })
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        {this.state.sites && <DisplayList siteInfos = {this.state.sites}/>}

      </div>
    );
  }
}

export default FetchList;