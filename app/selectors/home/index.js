import { createSelector } from 'reselect';

export const homeSelector = state => state.home;

export const selector = createSelector(
  homeSelector,
  function returnFn(home) {
      return {
          home
      };
  }
);
