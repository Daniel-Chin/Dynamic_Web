import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import Fb from './helpers/Fb';
import FbContext from './helpers/FbContext';

ReactDOM.render(
  (
    <FbContext.Provider value={new Fb()}>
      <HashRouter>
        <App />
      </HashRouter>
    </FbContext.Provider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
