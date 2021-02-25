import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Post = (props) => (
  <div className="Post">
          <h3>{props.title}</h3>
          <p dangerouslySetInnerHTML={{__html: props.body}}></p>

  </div>
);

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

Post.defaultProps = {
    title: "post title",
    body: "default body",
};

export default Post;
