import {RECEIVED_ABOUT_CONTENT} from '../../actions/about'
import _ from 'lodash';

export default function about(state = {}, action) {
    switch (action.type) {
      case RECEIVED_ABOUT_CONTENT:
          return _.assign({}, state, {content : action.content});
      default :
          return state;
      }
}
