import blog from './blog/reducer';
import blogState from './blog/initialState';

export default {
  blog,
};

export const storeInitialState = {
  blog: blogState,
};
