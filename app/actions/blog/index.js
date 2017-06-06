export const REQUEST_BLOG_CONTENT = 'REQUEST_BLOG_CONTENT';
export const RECEIVED_BLOG_CONTENT = 'RECEIVED_BLOG_CONTENT';

import BlogApi from '../../apis/blog';

export function getBlogContent(){
    return dispatch => {
        dispatch(requestedBlogContent());
        BlogApi.getBlogContent(content => {
            dispatch(receivedBlogContent(content));
        });
    };
}

function requestedBlogContent(){
      return {
        type: REQUEST_BLOG_CONTENT
      }
}

function receivedBlogContent(content){
      return {
        type: RECEIVED_BLOG_CONTENT,
        content: content
      }
}
