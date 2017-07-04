import $ from 'jquery';

const BlogApi = {
  fetchPosts: () =>
    $.get('/api/blog'),
};

export default BlogApi;
