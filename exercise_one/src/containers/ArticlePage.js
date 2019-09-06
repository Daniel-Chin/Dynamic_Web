import React from 'react';
import './ArticlePage.css';
import formatTime from '../helpers/formatTime';

const ArticlePage = (props) => {
  const { title, blurb, articleText, image, publishedDate } = props
    .ARTICLES[props.i];
  console.log(`Don't know how to display`, image);
  return (<>
    <div className='head'>
    {/*<img src={image.url} alt={image.alt} />*/}
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
