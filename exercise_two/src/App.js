import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import getWeather from './helpers/weather_api';

function App() {
  useEffect(() => {getWeather('New York').then(console.log);}, []);
  return (
    <Switch>
      <Route exact path='/' render={Temp} />
    </Switch>
  );
};

const Temp = () => (
  <div>
    Hi
  </div>
);

export default App;
