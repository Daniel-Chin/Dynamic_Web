import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

const UniHead = ({ whoami, set_whoami }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        set_whoami(null);
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <header className='Header'>
      <h1>
        Product Name Here
      </h1>
      <nav>
        {whoami &&
        <span>
          Hi, {whoami.split('@')[0]}!
        </span>
        }
        {whoami &&
          <Link to='/profile'>
            Profile
          </Link>
        }
        {!whoami &&
          <Link to='/login'>
            Login
          </Link>
        }
        {!whoami &&
          <Link to='/register'>
            Register
          </Link>
        }
        {whoami &&
          <button onClick={logout}>
            Logout
          </button>
        }
      </nav>
    </header>
  );
};

export default UniHead;
