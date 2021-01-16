'use strict';

const fetch = require('node-fetch');

const makeYoutubeAPIRequest = async (
  accessToken,
  url,
  queryStringParams = {}
) => {
  const queryString = queryStringParams
    ? Object.keys(queryStringParams)
        .map(key => key + '=' + queryStringParams[key])
        .join('&')
    : '';

  const updatedUrl = `${url}?${queryString}`;

  const response = await fetch(updatedUrl, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'GET',
  });

  const results = await response.json();
  return results;
};

const http = {
  makeYoutubeAPIRequest,
};

module.exports = http;
