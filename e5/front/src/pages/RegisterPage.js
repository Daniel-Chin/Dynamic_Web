import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import CredentialsForm from '../components/CredentialsForm';

const RegisterPage = ({ whoami, set_whoami }) => {
  if (whoami !== null) {
    return (
      <Redirect to='/profile' />
    );
  }

  const register = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        set_whoami(email);
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <CredentialsForm submit={register} verb='Register' />
    </div>
  );
};

export default RegisterPage;
