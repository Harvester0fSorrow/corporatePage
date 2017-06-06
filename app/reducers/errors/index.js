import {RECEIVED_PAGE_NOT_FOUND_ERROR} from '../../actions/errors'
import _ from 'lodash';

export default function errors(state = {}, action) {
    switch (action.type) {
      case RECEIVED_PAGE_NOT_FOUND_ERROR:
      var temp =_.assign({}, state, {pageNotFound : action.error});
          return temp;
      default :
          return state;
      }
}
