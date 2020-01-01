import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FetchSites from './components/FetchSites';

function App() {
  return (
    <Switch>
      <Route path='/api/sites' component={FetchSites}/>
    </Switch>
  );
}

export default App;
