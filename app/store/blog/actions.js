import { createAction } from 'redux-actions';

export const RECEIVED_LAST_POST = 'RECEIVED_LAST_POST';
const receivedLastPost = createAction(RECEIVED_LAST_POST);

export function fetchLastPost() {
  return (dispatch, getState, api) =>
    api.fetchLastPost().then(post =>
      dispatch(receivedLastPost(post)),
    );
}
