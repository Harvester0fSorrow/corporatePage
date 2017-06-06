import { createSelector } from 'reselect';

export const blogSelector = state => state.blog;

export const selector = createSelector(
  blogSelector,
  function returnFn(blog) {
      return {
          blog
      };
  }
);
