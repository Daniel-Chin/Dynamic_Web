import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
import PostBlog from './components/PostBlog';
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/blogs' />
      </Route>
      <Route exact path='/blogs'>
        <BlogList />
      </Route>
      <Route exact path='/blog/:id'>
        <BlogPage />
      </Route>
      <Route exact path='/edit/:id'>
        <PostBlog />
      </Route>
      <Route exact path='/post'>
        <PostBlog />
      </Route>
    </Switch>
  );
};

export default App;
