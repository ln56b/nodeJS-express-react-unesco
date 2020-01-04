import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import FetchSites from './components/FetchSites';
import FetchCountry from './components/FetchCountry';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/list' component={FetchCountry}/>
      <Route path='/sites' component={FetchSites}/>
    </Switch>
  );
}

export default App;
