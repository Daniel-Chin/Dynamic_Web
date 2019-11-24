import React from 'react';
import LoginForm from '../components/LoginForm';
import FbContext from '../helpers/FbContext';

const LoginPage = () => {
  const submit = () => {

  };

  const onGoogle = function () {
    this.signIn();
  };

  return (
    <div>
      <h2>Login</h2>
      <FbContext.Consumer> 
        {value => (
          <button onClick={onGoogle.bind(value)}>
            Log in with Google
          </button>
        )} 
      </FbContext.Consumer>
      <LoginForm submit={submit} />
    </div>
  );
};

export default LoginPage;
