import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Home = (props) => (
  <div className='waterfall-80'>
    <h1>Articles</h1>
    {props.ARTICLES.map((x, i) => <ArticleCard article={x} i={i}/>)}
  </div>
);

export default Home;
