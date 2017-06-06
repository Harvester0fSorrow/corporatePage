import {RECEIVED_BLOG_CONTENT} from '../../actions/blog'
import _ from 'lodash';

export default function blog(state = {}, action) {
    switch (action.type) {
      case RECEIVED_BLOG_CONTENT:
          return _.assign({}, state, {content : action.content});
      default :
          return state;
      }
}
