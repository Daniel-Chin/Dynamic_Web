import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import CredentialsForm from '../components/CredentialsForm';

const LoginPage = ({ whoami, set_whoami }) => {
  if (whoami !== null) {
    return (
      <Redirect to='/profile' />
    );
  }

  const login = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        set_whoami(email);
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <CredentialsForm submit={login} verb='Login' />
    </div>
  );
};

export default LoginPage;
