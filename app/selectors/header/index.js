import { createSelector } from 'reselect';

export const metaDataSelector = state => state.metaData;

export const selector = createSelector(
  metaDataSelector,
  function returnFn(metaData) {
      return {
          metaData
      };
  }
);
