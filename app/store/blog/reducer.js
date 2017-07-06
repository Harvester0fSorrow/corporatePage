import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { RECEIVED_LAST_POST } from './actions';
import blogState from './initialState';

const blogReducer = handleActions({
  [RECEIVED_LAST_POST]: (state, action) =>
    _.assign({}, state, action.payload),
}, blogState);

export default blogReducer;
