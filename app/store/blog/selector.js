import { createSelector } from 'reselect';
import { fetchLastPost } from './actions';

export const blogSelector = state => state.blog;

export const selector = createSelector(
  blogSelector,
  blog => ({
    post: blog.post,
  }),
);

export const dispatchFunctions = dispatch => ({
  fetchLastPost: () => { dispatch(fetchLastPost()); },
});
