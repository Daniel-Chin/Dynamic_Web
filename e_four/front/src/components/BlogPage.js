import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlog } from '../helpers/api';
import BlogContent from './BlogContent';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const blog_id = useParams().id;

  useEffect(() => {
    if (blog === null) {
      getBlog(blog_id).then((response) => {
        setBlog({
          id: blog_id, 
          data: response, 
        });
      });
    }
  }, [blog, blog_id, setBlog]);

  return (
    <div className='BlogPage'>
      <Link to='/blogs' className='Link'>
        <div className='topButton button'>
          Back
        </div>
      </Link>
      <Link to={`/edit/${blog_id}`} className='Link'>
        <div className='editButton topButton button'>
          Edit
        </div>
      </Link>
      {
        blog ? 
          <BlogContent blog={blog} /> : 
          <div>Loading...</div>
      }
    </div>
  );
};

export default BlogPage;
