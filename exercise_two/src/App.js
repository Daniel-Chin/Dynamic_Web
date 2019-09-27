import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import getWeather from './helpers/weather_api';

function App() {
  const [result, setResult] = useState({a: 1});
  useEffect(() => {
    getWeather('New York').then((result) => {
      setResult(result);
    });
  }, [setResult]);
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Temp result={result} />
      )}/>
    </Switch>
  );
};

const Temp = ({ result }) => (
  <div>
    {JSON.stringify(result)}
  </div>
);

export default App;
