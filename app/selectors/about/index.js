import { createSelector } from 'reselect';

export const aboutSelector = state => state.about;

export const selector = createSelector(
  aboutSelector,
  function returnFn(about) {
      return {
          about
      };
  }
);
