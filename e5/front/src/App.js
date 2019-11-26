import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import PofilePage from './pages/PofilePage';
import UniHead from './components/UniHead';
import './App.css';

const App = () => {
  const [whoami, set_whoami] = useState(null);

  return (
    <div>
      <UniHead whoami={whoami} />
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/logout'>
          <LogoutPage />
        </Route>
        <Route exact path='/profile'>
          <PofilePage />
        </Route>
        <Route>
          <Redirect to='/profile' />
          Redirecting...
        </Route>
      </Switch>
    </div>
  );
};

export default App;
