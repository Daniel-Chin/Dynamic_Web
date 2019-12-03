import React from 'react';

const CredentialsForm = ({ submit, verb }) => {
  return (
    <form onSubmit={submit}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' placeholder='who@what.com' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' />
      <button>{verb}</button>
    </form>
  );
};

export default CredentialsForm;
