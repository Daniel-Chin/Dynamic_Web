import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getBlog, postBlog } from '../helpers/api';

const PostBlog = () => {
  const edit_id = useParams().id;
  const [blog, setBlog] = useState(null);
  const [save_state, setSave_state] = useState(0);
  const [save_id, setSave_id] = useState(null);

  useEffect(() => {
    if (blog === null) {
      if (edit_id) {
        getBlog(edit_id).then(setBlog);
      } else {
        setBlog({
          title: 'Insert Title Here', 
          author: 'Insert Author Name Here', 
          text: 'Insert blog content here', 
        });
      }
    }
  }, [edit_id, blog, setBlog]);

  if (blog === null) {
    return (<div>
      Loading...
    </div>);
  }

  const { title, author, text } = blog;

  const save = () => {
    setSave_state(1);
    const id = edit_id || randomId();
    setSave_id(id);
    postBlog(id, {
      ...blog, 
      time: + new Date(), 
    }).then(() => {
      setSave_state(2);
    });
  };

  return (
    <div>
      {save_state === 0 &&
        <button onClick={save}>
          Save
        </button>
      }
      {save_state === 1 &&
        'Saving...'
      }
      {save_state === 2 &&
        <Redirect to={`/blog/${save_id}`} />
      }
      <div>
        <div>
          Title
        </div>
        <input type='text' value={title} onChange={(e) => {
          setBlog({...blog, title: e.target.value});
        }} />
      </div>
      <div>
        <div>
          Author
        </div>
        <input type='text' value={author} onChange={(e) => {
          setBlog({...blog, author: e.target.value});
        }} />
      </div>
      <div>
        <div>
          Main Text
        </div>
        <textarea type='text' value={text} onChange={(e) => {
          setBlog({...blog, text: e.target.value});
        }} />
      </div>
      * The save button is at the top of the page. 
    </div>
  );
};

const randomId = () => (
  Math.random().toString(36).substring(2, 15) + 
  Math.random().toString(36).substring(2, 15)
);

export default PostBlog;
