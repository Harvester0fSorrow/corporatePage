import $ from 'jquery';

export const blogUrl = '/api/blog';

export const fetchLastPost = () =>
  $.ajax({
    url: `${blogUrl}/last`,
    type: 'GET',
    contentType: 'application/json',
  });
