import _ from 'lodash';
import { RECEIVED_POSTS } from '../../actions/blog';

export default function blog(state = {}, action) {
  switch (action.type) {
    case RECEIVED_POSTS :
      return _.assign({}, state, action.payload);
    default :
      return state;
  }
}
