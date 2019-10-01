import React from 'react';
import { Switch, Route } from 'react-router-dom';
import City from './containers/city';
import './_App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/city' render={(props) => (
        <City location={props.location} />
      )}/>
    </Switch>
  );
};

export default App;
