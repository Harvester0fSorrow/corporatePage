export const REQUEST_HOME_CONTENT = 'REQUEST_HOME_CONTENT';
export const RECEIVED_HOME_CONTENT = 'RECEIVED_HOME_CONTENT';

import HomeApi from '../../apis/home';

export function getHomeContent(){
    return dispatch => {
        dispatch(requestedHomeContent);
        HomeApi.getHomeContent(content => {
            dispatch(receivedHomeContent(content));
        });
    };
}

function requestedHomeContent(){
      return {
        type: REQUEST_HOME_CONTENT
      }
}

function receivedHomeContent(content){
      return {
        type: RECEIVED_HOME_CONTENT,
        content: content
      }
}
