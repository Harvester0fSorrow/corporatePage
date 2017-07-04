import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../helpers/header';
import Footer from '../helpers/footer';
import { selector, dispatchFunctions } from '../../selectors/blog';

class Blog extends Component {
  constructor(props) {
    super(props);

    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts } = this.props;
    if (posts.length === 0) {
      return (
        <div className="body">
          <Header selectedOption="blog" />
          <div className="content" />
          <Footer />
        </div>
      );
    }
    return (
      <div className="body">
        <Header selectedOption="blog" />
        <div className="content">
          <div className="box">
            <h3>{posts[0].title}</h3>
            <p>{posts[0].desc}</p>
            <p>{posts[0].content}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

export default connect(selector, dispatchFunctions)(Blog);
