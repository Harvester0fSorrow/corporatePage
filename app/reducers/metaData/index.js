import {RECEIVED_MENU, SELECT_MENU_OPTION} from '../../actions/metaData'
import _ from 'lodash';

export default function home(state = {}, action) {
    switch (action.type) {
      case RECEIVED_MENU:
          return _.assign({}, state, {menuOptions : action.content});
      case SELECT_MENU_OPTION:
          localStorage.setItem( 'selectedOption', action.option );
          return _.assign({}, state, {selectedOption : action.option});
      default :
          return state;
      }
}
