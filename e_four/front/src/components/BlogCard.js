import React from 'react';
import { Link } from 'react-router-dom';
import BlogContent from './BlogContent';

const BlogCard = ({ blog, i }) => {
  return (
    <div className='BlogCard button' tabIndex={i}>
      <Link to={`/blog/${blog.id}`} tabIndex={-1} className='Link'>
        <BlogContent blog={blog} preview />
      </Link>
    </div>
  );
};

// const previewText = (fulltext) => {
//   // Assuming each character is equal-width (, which is not true)
//   if (fulltext.length <= MAX_TEXT_PREVIEW) {
//     return fulltext;
//   }
//   return fulltext.substring(0, MAX_TEXT_PREVIEW - 3) + '...'
// };

export default BlogCard;
