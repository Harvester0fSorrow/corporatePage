import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { RECEIVED_POSTS } from './actions';
import blogState from './initialState';

const blogReducer = handleActions({
  [RECEIVED_POSTS]: (state, action) =>
    _.assign({}, state, action.payload),
}, blogState);

export default blogReducer;
