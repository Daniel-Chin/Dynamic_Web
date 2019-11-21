import React from 'react';

const LoginForm = ({ submit }) => {
  return (
    <form>
      <label for='loginEmail'>Email</label>
      <input type='email' name='loginEmail' placeholder='who@what.com' />
      <label for='pw'>Password</label>
      <input type='password' name='pw' />
      <button>Log In</button>
    </form>
  );
};

export default LoginForm;
