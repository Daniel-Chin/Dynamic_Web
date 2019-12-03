import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PofilePage from './pages/PofilePage';
import UniHead from './components/UniHead';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import './App.css';

const App = () => {
  const [whoami, set_whoami] = useState(null);

  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .catch((e) => {
          console.error(e);
        });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          set_whoami(user.email);
        } else {
          set_whoami(null);
        }
      });
    }
  });

  return (
    <div>
      <UniHead whoami={whoami} set_whoami={set_whoami} />
      <Switch>
        <Route exact path='/login'>
          <LoginPage whoami={whoami} set_whoami={set_whoami} />
        </Route>
        <Route exact path='/register'>
          <RegisterPage whoami={whoami} set_whoami={set_whoami} />
        </Route>
        <Route exact path='/profile'>
          <PofilePage whoami={whoami} />
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
