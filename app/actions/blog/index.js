import BlogApi from '../../apis/blog';

export const RECEIVED_POSTS = 'RECEIVED_POSTS';

function receivedPosts(posts) {
  return {
    type: RECEIVED_POSTS,
    payload: posts,
  };
}

export function fetchPosts() {
  return dispatch =>
    BlogApi.fetchPosts().then(posts =>
      dispatch(receivedPosts(posts)),
    );
}
