import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FetchSites from './components/FetchSites';
import FetchList from './components/FetchList';

function App() {
  return (
    <Switch>
      <Route path='/api/sites' component={FetchSites}/>
      <Route path='/api/list' component={FetchList}/>

    </Switch>
  );
}

export default App;
