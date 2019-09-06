import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ArticlePage from './containers/ArticlePage';
import ARTICLES from './data/articles';

function App() {
  return (
    <Switch>
      <Route exact path='/' 
        render={() => <Home ARTICLES={ARTICLES} />} 
      />
      <Route path='/:article_i' 
        render={(props) => <ArticlePage ARTICLES={ARTICLES} i={parseInt(props.match.params.article_i)} />} 
      />
      <Route render={()=>(<p>404 nOT fOUND</p>)} />
    </Switch>
  );
}

export default App;
