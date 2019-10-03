import React from 'react';
import { Switch, Route } from 'react-router-dom';
import City from './containers/city';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => (
        <City location={props.location} />
      )}/>
    </Switch>
  );
};

export default App;
