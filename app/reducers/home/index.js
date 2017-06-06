import {RECEIVED_HOME_CONTENT} from '../../actions/home'
import _ from 'lodash';

export default function home(state = {}, action) {
    switch (action.type) {
      case RECEIVED_HOME_CONTENT:
          return _.assign({}, state, {content : action.content});
      default :
          return state;
      }
}
