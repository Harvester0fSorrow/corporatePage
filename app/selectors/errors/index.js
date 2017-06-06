import { createSelector } from 'reselect';

export const errorsSelector = state => state.errors;

export const selector = createSelector(
  errorsSelector,
  function returnFn(errors) {
      return {
          errors
      };
  }
);
