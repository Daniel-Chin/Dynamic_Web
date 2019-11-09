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

export default BlogCard;
