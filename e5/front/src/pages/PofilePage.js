import React from 'react';
import { Redirect } from 'react-router-dom';

const PofilePage = ({ whoami }) => {
  if (whoami === null) {
    // not logged in. 
    return (
      <Redirect to='/login' />
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>
        Guess what, I know what your email is. 
      </p>
      <p>
        It is {whoami}
      </p>
    </div>
  );
};

export default PofilePage;
