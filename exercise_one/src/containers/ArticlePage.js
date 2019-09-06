import React from 'react';
import './ArticlePage.css';
import formatTime from '../helpers/formatTime';

const ArticlePage = (props) => {
  const { title, blurb, articleText, image, publishedDate } = props
    .ARTICLES[props.i];
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
      {articleText.map(({type, data}) => {
        const DynamicTag = type;
        return <DynamicTag>{data}</DynamicTag>;
      })}
    </div>
  </>);
};

export default ArticlePage;
