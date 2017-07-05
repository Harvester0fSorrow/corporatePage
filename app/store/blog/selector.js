import { createSelector } from 'reselect';
import { fetchPosts } from './actions';

export const blogSelector = state => state.blog;

export const selector = createSelector(
  blogSelector,
  blog => ({
    posts: blog.posts,
  }),
);

export const dispatchFunctions = dispatch => ({
  fetchPosts: () => { dispatch(fetchPosts()); },
});
