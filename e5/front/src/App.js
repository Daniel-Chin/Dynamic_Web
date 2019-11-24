import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
