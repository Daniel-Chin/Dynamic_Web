import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
    </Switch>
  );
};

export default App;
