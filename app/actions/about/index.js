export const REQUEST_ABOUT_CONTENT = 'REQUEST_ABOUT_CONTENT';
export const RECEIVED_ABOUT_CONTENT = 'RECEIVED_ABOUT_CONTENT';

import AboutApi from '../../apis/about';

export function getAboutContent(){
    return dispatch => {
        dispatch(requestedAboutContent());
        AboutApi.getAboutContent(content => {
            dispatch(receivedAboutContent(content));
        });
    };
}

function requestedAboutContent(){
      return {
        type: REQUEST_ABOUT_CONTENT
      }
}

function receivedAboutContent(content){
      return {
        type: RECEIVED_ABOUT_CONTENT,
        content: content
      }
}
