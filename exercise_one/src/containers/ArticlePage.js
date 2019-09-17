import React from 'react';
import './ArticlePage.css';
import formatTime from '../helpers/formatTime';

const ArticlePage = (props) => {
  const article = props.ARTICLES[props.i];
  if (article === undefined) {
    return (
      <span>
        404 nOT fOUND
      </span>
    );
  }
  const { title, blurb, articleText, image, publishedDate } = article;
  return (<>
    <div className='head' style={{
      backgroundImage: `url("${image.url}")`, 
      backgroundSize: 'contain', 
    }}>
      <div className='waterfall-60'>
        <h1 className='article-page-h1'>{title}</h1>
        <span className='time'>{formatTime(publishedDate)}</span> <br />
        <p className='blurb'>{blurb}</p>
      </div>
    </div>
    <div className='waterfall-60 article-text'>
      {articleText.map(({type, data}, i) => {
        const DynamicTag = type;
        return <DynamicTag key={i}>{data}</DynamicTag>;
      })}
    </div>
  </>);
};

export default ArticlePage;
