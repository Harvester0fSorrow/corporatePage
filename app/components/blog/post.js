import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

const createMarkup = post => ({
  __html: post.content,
});

const Post = ({ post }) =>
  <div className="box">
    <span className="blog-date">{post.date}</span>
    <h2 className="blog-title">{post.title}</h2>
    <div dangerouslySetInnerHTML={createMarkup(post)}/>
  </div>;

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
