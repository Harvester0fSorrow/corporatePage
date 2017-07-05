import $ from 'jquery';

export const blogUrl = '/api/blog';

export const fetchPosts = () =>
  $.ajax({
    url: blogUrl,
    type: 'GET',
    contentType: 'application/json',
  });
