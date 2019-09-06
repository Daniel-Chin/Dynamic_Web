import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';
import formatTime from '../helpers/formatTime';

const ArticleCard = (props) => (
  <div className='card'>
    <div className='card-padded'>
      <div className='card-left'>
        <span className='align-helper' />
        <img 
          src={props.article.image.url} 
          alt={props.article.image.alt} 
        />
      </div>
      <div className='card-right'>
        <div className='card-right-padding'>
          <span className='card-title'>{props.article.title}</span> <br/>
          <span className='card-time'>{formatTime(props.article.publishedDate)}</span> <br/>
          <p className='card-blurb'>{props.article.blurb}</p>
          <Link className='card-link' to={`/` + props.i}>Read More</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
