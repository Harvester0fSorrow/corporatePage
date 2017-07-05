import { createAction } from 'redux-actions';

export const RECEIVED_POSTS = 'RECEIVED_POSTS';
const receivedPosts = createAction(RECEIVED_POSTS);

export function fetchPosts() {
  return (dispatch, getState, api) =>
    api.fetchPosts().then(posts =>
      dispatch(receivedPosts(posts)),
    );
}
