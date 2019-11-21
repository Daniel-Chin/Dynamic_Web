import React from 'react';
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  const submit = () => {

  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm submit={submit} />
    </div>
  );
};

export default LoginPage;
