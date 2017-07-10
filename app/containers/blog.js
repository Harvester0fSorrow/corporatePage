import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import Header from '../components/helpers/header';
import Footer from '../components/helpers/footer';
import { selector, dispatchFunctions } from '../store/blog/selector';
import Post from '../components/blog/post';

class Blog extends Component {
  componentWillMount() {
    const { fetchLastPost } = this.props;
    fetchLastPost();
  }

  render() {
    const { post, title } = this.props;

    return (
      <DocumentTitle title={title}>
        <div className="body">
          <Header selectedOption="blog" />
          <div className="content">
            <Post post={post} />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  fetchLastPost: PropTypes.func.isRequired,
};

export default connect(selector, dispatchFunctions)(Blog);
