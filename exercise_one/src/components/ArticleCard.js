import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';
import formatTime from '../helpers/formatTime';

const ArticleCard = (props) => (
  <div className='card'>
    <div className='card-left'>
      <img 
        src={props.article.image.url} 
        alt={props.article.image.alt} 
      />
    </div>
    <div className='card-right'>
      <span>{props.article.title}</span> <br/>
      <span>{formatTime(props.article.publishedDate)}</span> <br/>
      <p>{props.article.blurb}</p>
      <Link to={`/` + props.i}>Read More</Link>
    </div>
  </div>
);

export default ArticleCard;
