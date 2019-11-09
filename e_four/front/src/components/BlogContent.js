import React from 'react';
import timeDisplay from '../helpers/timeDisplay';

const BlogContent = ({ blog, preview }) => {
  const { title, text, author, time } = blog.data;

  const ellipsis_style = preview && {
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis',
  };

  return (
    <div className='BlogContent'>
      <div className='centerDiv'>
        <h2 style={ellipsis_style}>{
          title.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1)
          }).join(' ')
        }</h2>
        <span className='GraySpan'>posted by</span>
        <span>{author}</span>
        <span className='GraySpan'>at</span>
        <span>{timeDisplay(time)}</span>
      </div>
      <div className='maintext' style={ellipsis_style}>
        {text}
      </div>
    </div>
  );
};

export default BlogContent;
