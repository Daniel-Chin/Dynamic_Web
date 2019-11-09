import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../helpers/api';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    if (blogs === null) {
      getAll().then(setBlogs);
    }
  }, [blogs, setBlogs]);

  return (
    <div className='BlogList'>
      <Link to='/post' className='Link'>
        <div className='postNewButton topButton button'>
            Post New
        </div>
      </Link>
      <h1>
        All the Blogs
      </h1>
      {blogs ? blogs.map((blog, i) => (
        <BlogCard key={i} blog={blog} i={i} />
      )) : <div>Loading...</div>}
    </div>
  );
};

export default BlogList;
