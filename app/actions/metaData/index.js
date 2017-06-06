export const REQUEST_MENU = 'REQUEST_MENU';
export const RECEIVED_MENU = 'RECEIVED_MENU';
export const SELECT_MENU_OPTION = 'SELECT_MENU_OPTION';

import MetaDataApi from '../../apis/metaData';

export function getMenu(){
    return dispatch => {
        dispatch(requestedMenu);
        MetaDataApi.getMenu(content => {
            dispatch(receivedMenu(content));
        });
    };
}

export function selectMenuOption(option){
    return {
        type: SELECT_MENU_OPTION,
        option: option
    }
}


function requestedMenu(){
      return {
        type: REQUEST_MENU
      }
}

function receivedMenu(content){
      return {
        type: RECEIVED_MENU,
        content: content
      }
}
