import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default App;
