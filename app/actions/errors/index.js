export const REQUEST_PAGE_NOT_FOUND_ERROR = 'REQUEST_PAGE_NOT_FOUND_ERROR';
export const RECEIVED_PAGE_NOT_FOUND_ERROR = 'RECEIVED_PAGE_NOT_FOUND_ERROR';

import ErrorApi from '../../apis/errors';

export function getPageNotFoundError(){
    return dispatch => {
        dispatch(requestedPageNotFoundError());
        ErrorApi.getPageNotFoundError(content => {
            dispatch(receivedPageNotFoundError(content));
        });
    };
}

function requestedPageNotFoundError(){
      return {
        type: REQUEST_PAGE_NOT_FOUND_ERROR
      }
}

function receivedPageNotFoundError(error){
      return {
        type: RECEIVED_PAGE_NOT_FOUND_ERROR,
        error: error
      }
}
