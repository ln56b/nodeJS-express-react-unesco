import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FetchSites from './components/FetchSites';
import FetchCountry from './components/FetchCountry';

function App() {
  return (
    <Switch>
      <Route path='/api/list' component={FetchCountry}/>
      <Route path='/api/sites' component={FetchSites}/>

    </Switch>
  );
}

export default App;
