import React from 'react';
import { Link } from 'react-router-dom';

const UniHead = ({ whoami }) => {
  return (
    <header className='Header'>
      <nav>
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
          <Link to='/logout'>
            Logout
          </Link>
        }
      </nav>
    </header>
  );
};

export default UniHead;
