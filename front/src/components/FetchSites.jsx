import React, { Component } from 'react';
import axios from 'axios';
import DisplaySites from './DisplaySites';

class FetchSites extends Component {
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
        <button onClick={this.getSites}>Click</button>
        {this.state.sites && <DisplaySites siteInfos = {this.state.sites}/>}
      </div>
    );
  }
}

export default FetchSites;